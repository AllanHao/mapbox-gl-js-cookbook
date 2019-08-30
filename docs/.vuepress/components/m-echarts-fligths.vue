<template>
  <!-- <div class="echarts-wrapper"> -->
    <div :id="id"></div>
  <!-- </div> -->
</template>

<script>
  import baseMap from './base-map'
  import 'mapbox-gl/dist/mapbox-gl.css'
  import addFlightsLayer from '../snippet/echarts-fligths'
  export default {
    components: {
      baseMap
    },
    data () {
      return {
        id: 'echarts-flights',
        container: 'm-circle',
        center: [114.46, 36.92],
        zoom: 3,
        pitch: 0,
        bearing: 0,
        style: 'https://tiles.kye-erp.com/maptiles/styles/darkblue-kye/style.json',
        canvasId: 'trips-canvas'
      }
    },
    methods: {
      handleMapLoaded (map) {
        // addFlightsLayer(map)
      }
    },
    mounted () {
      addFlightsLayer(this.id)
    }
  }
</script>
<style lang="less" >
  #echarts-flights {
    height: 400px;
  }
  // .echarts-wrapper {
  //   position: relative;
  //   margin: 10px 0;
  //   height: 400px;
  //   .link {
  //     position: absolute;
  //     right: 10px;
  //     top: 10px;
  //     padding: 0 7px;
  //     border-radius: 4px;
  //     font-size: 14px;
  //     line-height: 30px;
  //     background-color: #fff;
  //     box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  //     z-index: 999;
  //   }

  //   #echarts-flights {
  //     height: 400px;
  //   }
  // }
</style>
