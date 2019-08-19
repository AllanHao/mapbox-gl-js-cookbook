<template>
  <base-map :container="container"
            :center="center"
            :zoom="zoom"
            :pitch="pitch"
            :mapStyle="style"
            :bearing="bearing"
            @load="handleMapLoaded">
  </base-map>

</template>

<script>
  import baseMap from './base-map'
  import addHistogramLayer from '../snippet/histogram'
  export default {
    components: {
      baseMap
    },
    data () {
      return {
        container: 'm-histogram',
        center: [116.46, 38.92],
        zoom: 4.5,
        pitch: 60,
        bearing: 0,
        style: 'http://120.241.38.12:8080/conf/styles/sprite-kye/style.json',
        canvasId: 'histogram'
      }
    },
    methods: {
      handleMapLoaded (map) {
        let chartData = {
          lnglat: [116.46, 39.92],
          data: [{ value: 12 }, { value: 9 }]
        }
        let chartData2 = {
          lnglat: [115.28, 39.2],
          data: [{ value: 8 }, { value: 5 }, { value: 13 }, { value: 7 }]
        }
        let chartData3 = {
          lnglat: [112, 37],
          data: [{ value: 0 }, { value: 6 }, { value: 0 }, { value: 11 }]
        }
        let chartData4 = {
          lnglat: [113.42, 34.5],
          data: [{ value: 12 }, { value: 0 }, { value: 17 }]
        }
        let chartData5 = {
          lnglat: [114.26, 38],
          data: [{ value: 0 }, { value: 12 }]
        }
        addHistogramLayer(map, this.canvasId, [chartData, chartData2, chartData3, chartData4, chartData5])
      }
    }
  }
</script>
<style>
  .container /deep/ .mapboxgl-popup-content {
    margin-left: 100px;
    margin-top: 30px;
    background-color: #333333cc !important;
    color: white;
  }
  .container /deep/ .mapboxgl-popup-tip {
    width: 0;
    height: 0;
    border: 0 solid transparent;
    z-index: 0;
  }
</style>
