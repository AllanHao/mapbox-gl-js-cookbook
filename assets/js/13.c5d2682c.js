(window.webpackJsonp=window.webpackJsonp||[]).push([[13,17],{201:function(t,e,n){"use strict";n.r(e);n(58);var a={components:{baseMap:n(60).default},data:function(){return{container:"m-tms",center:[106.30486062690613,29.56357402345421],zoom:10}},methods:{handleMapLoaded:function(){this.$refs.map.addLayer({id:"tms-layer",type:"circle",source:{type:"vector",tiles:["https://900913.cn/geoserver/gwc/service/tms/1.0.0/buildings:cq_point@EPSG:900913@pbf/{z}/{x}/{y}.pbf"],scheme:"tms"},"source-layer":"cq_point",paint:{"circle-radius":5,"circle-color":["interpolate",["linear"],["to-number",["get","CID"]],10,"#fbb03b",20,"#223b53",30,"#e55e5e",40,"#3bb2d0"]}})}}},i=n(0),o=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("base-map",{ref:"map",attrs:{container:this.container,center:this.center,zoom:this.zoom},on:{load:this.handleMapLoaded}})},[],!1,null,null,null);e.default=o.exports},57:function(t,e,n){},59:function(t,e,n){"use strict";var a=n(57);n.n(a).a},60:function(t,e,n){"use strict";n.r(e);n(62),n(63),n(58),n(31);var a=n(64),i=n.n(a),o=(n(65),{name:"base-map",props:{container:{type:String,default:"map-".concat((new Date).getTime())},mapStyle:{type:String,default:"mapbox://styles/huanglii/cjmn2rlvn0c8u2sl97kkiep6r"},center:{type:Array,default:function(){return[-74.5,40]}},zoom:{type:Number,default:9},scrollZoom:{type:Boolean,default:!0},pitch:{type:Number,default:0}},data:function(){return{map:null}},mounted:function(){var t=this.container,e=this.mapStyle,n=this.center,a=this.zoom,i=this.scrollZoom,o=this.pitch;this.initMap({container:t,style:e,center:n,zoom:a,scrollZoom:i,pitch:o}),window.addEventListener("resize",this.resize)},methods:{initMap:function(t){i.a.accessToken="pk.eyJ1IjoiaHVhbmdsaWkiLCJhIjoiY2pzNHBtendwMDZ2ZDQzbnVmZXdtMDlvdiJ9.GSija86yNNR4ssBtFFpx0g",this.map=new i.a.Map(t),this.map.addControl(new i.a.NavigationControl({showCompass:!1}),"top-left"),this.map.addControl(new i.a.FullscreenControl,"top-left"),this.map.on("load",this.handleMapLoaded)},handleMapLoaded:function(t){this.$emit("load",t),this.map.on("click",this.handleMapClick)},handleMapClick:function(t){var e=this.map.queryRenderedFeatures(t.point);if(e.length>0){var n=e[0],a=n.layer,o=n.properties;(new i.a.Popup).setLngLat(t.lngLat).setHTML(this.createPropHtml(a.id,o)).addTo(this.map)}},createPropHtml:function(t,e){return'\n        <div class="title"><b>'.concat(t,'</b></div>\n        <div class="content">\n          ').concat(Object.keys(e).map(function(t){return"\n              ".concat("<p><b>".concat(t,": </b>").concat(e[t],"</p>"),"\n            ")}).join(""),"\n        </div>\n      ")},resize:function(){this.map.resize()},addControl:function(t,e){this.map.addControl(t,e||"top-right")},addLayer:function(t,e){this.map.addLayer(t,e)},addSource:function(t,e){this.map.addSource(t,e)}}}),r=(n(59),n(0)),s=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{style:{width:"100%",height:"400px",borderRadius:"6px"},attrs:{id:this.container}})},[],!1,null,null,null);e.default=s.exports}}]);