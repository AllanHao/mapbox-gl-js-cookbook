import * as mapboxgl from 'mapbox-gl'

let chartData = []
const color = ["#FF0000", "#4682B4", "#40E0D0", "#FFA500"]

export default function addHistogramLayer (map, id, chartData = []) {
    const _arr = []
    chartData.forEach(item => {
        let baseHeight = 0
        for (let i = 0; i < item.data.length; i++) {
            let center = item.lnglat
            let height = item.data[i].value * 10000 + baseHeight
            let chartItem = {
                "type": "Feature",
                "properties": {
                    // "level": 1,
                    // "name": "Bird Exhibit1",
                    "height": height,
                    "base_height": baseHeight,
                    "color": color[i % color.length]
                },
                "geometry": {
                    "coordinates": [
                        [
                            [center[0] + 0.12, center[1] + 0.1],
                            [center[0] - 0.12, center[1] + 0.1],
                            [center[0] - 0.12, center[1] - 0.1],
                            [center[0] + 0.12, center[1] - 0.1],
                            [center[0] + 0.12, center[1] + 0.1],
                        ]
                    ],
                    "type": "Polygon"
                },
                // "id": "06e8fa0b3f851e3ae0e1da5fc17e111e11"
            }
            _arr.push(chartItem)
            baseHeight = height
        }
    })

    map.addLayer({
        'id': id,
        'type': 'fill-extrusion',
        'source': {
            'type': 'geojson',
            'data': {
                "features": _arr,
                "type": "FeatureCollection"
            }
        },
        'paint': {
            'fill-extrusion-color': ['get', 'color'],
            'fill-extrusion-height': ['get', 'height'],
            'fill-extrusion-base': ['get', 'base_height'],
            'fill-extrusion-opacity': 0.9
        }
    })

    let popup
    map.on('mousemove', id, (e) => {
        if (popup && popup.isOpen())
            popup.setLngLat(e.lngLat)
                .setHTML('长度: ' + (e.features[0].properties.height - e.features[0].properties.base_height) / 10000)
        console.log(e.features)
    });

    map.on('mouseenter', id, (e) => {
        popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        })
        popup.setLngLat(e.lngLat)
            .setHTML('长度: ' + (e.features[0].properties.height - e.features[0].properties.base_height) / 10000)
            .addTo(map);
        map.getCanvas().style.cursor = 'default';
    });

    map.on('mouseleave', id, () => {
        popup.remove()
        map.getCanvas().style.cursor = '';
    });
}