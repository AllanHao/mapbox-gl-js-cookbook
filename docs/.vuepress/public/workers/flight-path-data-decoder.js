import { decodePolyline } from './util.js'
const FLUSH_LIMIT = 20000
let result = []
// let index = 0
let count = 0

export default function onmessage (e, cb) {
  const lines = e.text.split('\n')

  lines.forEach(function (line) {
    if (!line) {
      return
    }

    var parts = line.split('\t')
    var coords0 = parts[2].split('\x01').map(function (str) { return decodePolyline(str, 5) })
    var coords1 = parts[3].split('\x01').map(function (str) { return decodePolyline(str, 1) })

    coords0.forEach(function (lineStr, i) {
      for (let j = 1; j < lineStr.length; j++) {
        let prevPt0 = coords0[i][j - 1]
        let prevPt1 = coords1[i][j - 1]
        let currPt0 = coords0[i][j]
        let currPt1 = coords1[i][j]

        result.push({
          name: parts[0],
          country: parts[1],
          start: [prevPt0[0], prevPt0[1], prevPt1[0]],
          end: [currPt0[0], currPt0[1], currPt1[0]]
        })
        count++
      }
    })

    if (result.length >= FLUSH_LIMIT) {
      flush(cb)
    }
  })

  if (e.event === 'load') {
    flush(cb)
    postMessage && postMessage({ action: 'end' })
  }
}

function flush (cb) {
  postMessage && postMessage({
    action: 'add',
    data: result,
    meta: { count }
  })
  cb && cb(result)
  result = []
}