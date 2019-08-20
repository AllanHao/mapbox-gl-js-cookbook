<template>
  <base-map :container="container"
              :center="center"
              :zoom="zoom"
              :pitch="pitch"
              :mapStyle="style"
              :bearing="bearing"
              @load="handleMapLoaded">
    <!-- <canvas :id="canvasId"
            slot="custom" style="z-index: 2;"></canvas> -->
  </base-map>

</template>

<script>
import baseMap from './base-map'
import addLineLayer from '../snippet/echarts-geolines'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-geolines',
      center: [112, 37.94],
      zoom: 4.5,
      pitch: 0,
      bearing: 0,
      style: 'http://120.27.63.12:8080/conf/styles/sprite-kye/style_darkblue.json',
      canvasId: 'trips-canvas'
    }
  },
  methods: {
    handleMapLoaded (map) {
      addLineLayer(map, this.canvasId)
    }
  }
}
</script>
