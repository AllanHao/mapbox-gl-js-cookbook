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
import addLineLayer from '../snippet/echarts-carlines'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-carlines',
      center: [116.46, 39.92],
      zoom: 10,
      pitch: 45,
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
