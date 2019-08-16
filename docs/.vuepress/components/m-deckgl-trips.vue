<template>
  <custom-map :container="container"
              :center="center"
              :zoom="zoom"
              :pitch="pitch"
              :mapStyle="style"
              :bearing="bearing"
              @load="handleMapLoaded">
    <canvas :id="canvasId"
            slot="custom" style="z-index: 2;"></canvas>
  </custom-map>

</template>

<script>
import customMap from './custom-map'
import addTripsLayer from '../snippet/deckgl-trips'
export default {
  components: {
    customMap
  },
  data () {
    return {
      container: 'm-deckgl-trips',
      center: [-74, 40.72],
      zoom: 13,
      pitch: 45,
      bearing: 0,
      style: 'mapbox://styles/mapbox/dark-v9?optimize=true',
      canvasId: 'trips-canvas'
    }
  },
  methods: {
    handleMapLoaded (map) {
      addTripsLayer(map, this.canvasId)
    }
  }
}
</script>
