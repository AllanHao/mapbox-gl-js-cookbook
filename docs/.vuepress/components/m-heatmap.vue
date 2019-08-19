<template>
  <base-map :container="container" :mapStyle="mapStyle" :center="center" :zoom="zoom" @load="handleMapLoaded"/>
</template>

<script>
import baseMap from './base-map'
import addHeatmapLayer from '../snippet/heatmap'
export default {
  components: {
    baseMap
  },
  data () {
    return {
      container: 'm-heatmap',
      mapStyle: 'http://120.27.63.12:8080/conf/styles/sprite-kye/style_darkblue.json',
      center: [-120, 50],
      zoom: 2
    }
  },
  methods: {
    handleMapLoaded (map) {
      addHeatmapLayer(map)
    }
  }
}
</script>
