(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{225:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"样式规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样式规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 样式规范")]),t._v(" "),a("p",[t._v("本节只简单介绍样式规范有哪些属性，并"),a("strong",[t._v("稍")]),t._v("详细介绍了数据源和图层配置，不过以下内容对实际开发已经足够了，想要详细了解样式规范，可查阅 "),a("a",{attrs:{href:"https://docs.mapbox.com/mapbox-gl-js/style-spec/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("一个样式有以下根属性： "),a("code",[t._v("version")]),t._v(", "),a("code",[t._v("name")]),t._v(", "),a("code",[t._v("metadata")]),t._v(", "),a("code",[t._v("center")]),t._v(", "),a("code",[t._v("zoom")]),t._v(", "),a("code",[t._v("bearing")]),t._v(", "),a("code",[t._v("pitch")]),t._v(", "),a("code",[t._v("light")]),t._v(", "),a("code",[t._v("sources")]),t._v(", "),a("code",[t._v("sprite")]),t._v(", "),a("code",[t._v("glyphs")]),t._v(", "),a("code",[t._v("transition")]),t._v(", "),a("code",[t._v("layers")]),t._v(" 。在开发中一般关注 "),a("strong",[a("code",[t._v("sources")])]),t._v(", "),a("strong",[a("code",[t._v("layers")])]),t._v(" 即可。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 版本号，必须且必须为 8")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sprite"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mapbox://sprites/mapbox/streets-v8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 雪碧图")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"glyphs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mapbox://fonts/mapbox/{fontstack}/{range}.pbf"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字体")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sources"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据源")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"layers"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 图层")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"数据源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据源","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据源")]),t._v(" "),a("p",[t._v("数据源的类型由 "),a("strong",[a("code",[t._v("type")])]),t._v(" 指定，并且必须是 "),a("code",[t._v("vector")]),t._v(", "),a("code",[t._v("raster")]),t._v(", "),a("code",[t._v("raster-dem")]),t._v(", "),a("code",[t._v("geojson")]),t._v(", "),a("code",[t._v("image")]),t._v(", "),a("code",[t._v("video")]),t._v(" 之一。")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",[t._v("以前官方文档里还有一个 "),a("strong",[a("code",[t._v("canvas")])]),t._v(" 类型，不知为何现在没有了，但是经测试，"),a("code",[t._v("canvas")]),t._v(" 数据源还是支持的。")])]),t._v(" "),a("p",[t._v("数据源示例：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sources"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vector")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{source-id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vector"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tiles"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://a.example.com/tiles/{z}/{x}/{y}.pbf"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"minzoom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"maxzoom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vector")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{source-id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vector"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://api.example.com/tilejson.json"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// raster")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{source-id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"raster"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tiles"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk={天地图 key}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://t1.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk={天地图 key}"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tileSize"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// image")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{source-id}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coordinates"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80.425")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("46.437")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("71.516")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("46.437")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("71.516")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37.936")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80.425")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("37.936")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br")])]),a("h2",{attrs:{id:"图层"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图层","aria-hidden":"true"}},[t._v("#")]),t._v(" 图层")]),t._v(" "),a("p",[t._v("图层属性配置如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("id")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图层唯一标识")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("type")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图层类型")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("source")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("数据源名称，图层类型除 "),a("code",[t._v("background")]),t._v(" 外必须")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("source-layer")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图层名，矢量瓦片源（vector）必须，其他类型不可用")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("minzoom")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图层最小缩放级别")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("maxzoom")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图层最大缩放级别")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("filter")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("expression")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("过滤器")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("layout")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图层布局属性")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("paint")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("图层绘制属性")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[a("code",[t._v("metadata")])])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("任意属性，对跟踪图层很有用，不影响渲染")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[a("strong",[a("code",[t._v('"type"')])]),t._v(" 属性必须是 "),a("code",[t._v("background")]),t._v(", "),a("code",[t._v("fill")]),t._v(", "),a("code",[t._v("line")]),t._v(", "),a("code",[t._v("symbol")]),t._v(", "),a("code",[t._v("raster")]),t._v(", "),a("code",[t._v("circle")]),t._v(", "),a("code",[t._v("fill-extrusion")]),t._v(", "),a("code",[t._v("heatmap")]),t._v(", "),a("code",[t._v("hillshade")]),t._v(" 之一。")]),t._v(" "),a("p",[t._v("除 "),a("code",[t._v("background")]),t._v(" 外的图层都需要引用一个源（source），图层从源获取数据、过滤要素和渲染，所以我一般称之为数据源。")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[a("strong",[a("code",[t._v("layout")])]),t._v(" 属性都有 "),a("strong",[a("code",[t._v("visibility")])]),t._v(" 属性，可设置 "),a("code",[t._v('"visible"')]),t._v("（默认） 和 "),a("code",[t._v('"none"')]),t._v(" 。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"visible"')]),t._v(" 图层显示")]),t._v(" "),a("li",[a("code",[t._v('"none"')]),t._v(" 图层隐藏")])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("颜色支持 "),a("code",[t._v("十六进制")]),t._v(", "),a("code",[t._v("RGB")]),t._v(", "),a("code",[t._v("RGBA")]),t._v(", "),a("code",[t._v("HSL")]),t._v(", "),a("code",[t._v("HSLA")]),t._v(", "),a("code",[t._v("HTML 预定义颜色名称")]),t._v(" 格式。")])]),t._v(" "),a("p",[t._v("图层示例：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"layers"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"road"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"line"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mapbox://mapbox.mapbox-streets-v7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source-layer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"road"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"minzoom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"maxzoom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"layout"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"visibility"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"visible"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paint"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"line-color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hsl(55, 1%, 20%)"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"filter"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"=="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LineString"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"metadata"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"base"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])])])},[],!1,null,null,null);s.default=e.exports}}]);