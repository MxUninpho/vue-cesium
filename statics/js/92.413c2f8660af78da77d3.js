(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{Ayub:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{modelUrl:"https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json",distanceMeasuring:!1,areaMeasuring:!1,heightMeasuring:!1,clampToGround:!1}},methods:{ready:function(t){t.Cesium;var e=t.viewer;this.cesiumInstance=t,e.scene.globe.depthTestAgainstTerrain=!0},toggle:function(t){this.$refs[t].measuring=!this.$refs[t].measuring},clear:function(){this.$refs.measureDistance.clear(),this.$refs.measureArea.clear(),this.$refs.measureHeight.clear()},activeEvt:function(t){this[t.type]=t.isActive},measureEvt:function(t){console.log(t)},movingEvt:function(t){console.log(t)},readyPromise:function(t){this.cesiumInstance.viewer.zoomTo(t,new Cesium.HeadingPitchRange(0,-.5,2*t.boundingSphere.radius))}}},r=s("JFUb"),v=Object(r.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("h1",[t._v("MeasureTool")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Example")]),t._v(" "),s("h3",[t._v("Measuring distance, area, height")]),t._v(" "),s("h4",[t._v("Preview")]),t._v(" "),s("doc-preview",[[s("div",{staticClass:"viewer"},[s("vc-viewer",{attrs:{scene3DOnly:""},on:{ready:t.ready}},[s("vc-measure-distance",{ref:"measureDistance",attrs:{clampToGround:t.clampToGround},on:{activeEvt:t.activeEvt,measureEvt:t.measureEvt,movingEvt:t.movingEvt}}),t._v(" "),s("vc-measure-area",{ref:"measureArea",attrs:{clampToGround:t.clampToGround},on:{activeEvt:t.activeEvt,measureEvt:t.measureEvt,movingEvt:t.movingEvt}}),t._v(" "),s("vc-measure-height",{ref:"measureHeight",on:{activeEvt:t.activeEvt,measureEvt:t.measureEvt,movingEvt:t.movingEvt}}),t._v(" "),s("vc-primitive-tileset",{attrs:{url:t.modelUrl},on:{readyPromise:t.readyPromise}})],1),t._v(" "),s("div",{staticClass:"demo-tool"},[s("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){return t.toggle("measureDistance")}}},[t._v(t._s(t.distanceMeasuring?"stop":"distance"))]),t._v(" "),s("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){return t.toggle("measureArea")}}},[t._v(t._s(t.areaMeasuring?"stop":"area"))]),t._v(" "),s("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){return t.toggle("measureHeight")}}},[t._v(t._s(t.heightMeasuring?"stop":"height"))]),t._v(" "),s("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){t.clampToGround=!t.clampToGround}}},[t._v("clampToGround")]),t._v(" "),s("md-button",{staticClass:"md-raised md-accent",on:{click:t.clear}},[t._v("clear")])],1)],1)]],2),t._v(" "),s("h4",[t._v("Code")]),t._v(" "),t._m(1),t._v(" "),s("h2",[t._v("Instance Properties")]),t._v(" "),s("h3",[t._v("measure-distance")]),t._v(" "),t._m(2),t._v(" "),s("hr"),t._v(" "),s("h3",[t._v("measure-area")]),t._v(" "),t._m(3),t._v(" "),s("hr"),t._v(" "),s("h3",[t._v("measure-height")]),t._v(" "),t._m(4),t._v(" "),s("hr"),t._v(" "),s("h3",[t._v("Label")]),t._v(" "),t._m(5),t._v(" "),s("h2",[t._v("Event")]),t._v(" "),t._m(6),t._v(" "),s("hr"),t._v(" "),s("h2",[t._v("Method")]),t._v(" "),t._m(7)],1)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("The "),s("code",{pre:!0},[t._v("measure-distance")]),t._v(" component is used for distance measurement.")]),t._v(" "),s("li",[t._v("The "),s("code",{pre:!0},[t._v("measure-area")]),t._v(" component is used for area measurement.")]),t._v(" "),s("li",[t._v("The "),s("code",{pre:!0},[t._v("measure-height")]),t._v(" component is used for high measurement.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("scene3DOnly")]),t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-measure-distance")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":clampToGround")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clampToGround"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"measureDistance"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@activeEvt")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"activeEvt"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@measureEvt")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"measureEvt"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@movingEvt")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"movingEvt"')]),t._v("\n      >")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-measure-distance")]),t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-measure-area")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"measureArea"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@activeEvt")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"activeEvt"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@measureEvt")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"measureEvt"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@movingEvt")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"movingEvt"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":clampToGround")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clampToGround"')]),t._v("\n      >")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-measure-area")]),t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-measure-height")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("ref")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"measureHeight"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@activeEvt")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"activeEvt"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@measureEvt")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"measureEvt"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@movingEvt")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"movingEvt"')]),t._v("\n      >")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-measure-height")]),t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-tileset")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":url")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"modelUrl"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@readyPromise")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"readyPromise"')]),t._v(">")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-primitive-tileset")]),t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"demo-tool"')]),t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"md-raised md-accent"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"toggle('measureDistance')\"")]),t._v("\n        >")]),t._v("{{ distanceMeasuring ? 'stop' : 'distance' }}"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v("\n      >")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"md-raised md-accent"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"toggle('measureArea')\"")]),t._v(">")]),t._v("{{ areaMeasuring ? 'stop' : 'area' }}"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"md-raised md-accent"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("\"toggle('measureHeight')\"")]),t._v("\n        >")]),t._v("{{ heightMeasuring ? 'stop' : 'height' }}"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v("\n      >")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"md-raised md-accent"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clampToGround=!clampToGround"')]),t._v(">")]),t._v("clampToGround"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"md-raised md-accent"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clear"')]),t._v(">")]),t._v("clear"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("md-button")]),t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("modelUrl")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json'")]),t._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("distanceMeasuring")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("areaMeasuring")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("heightMeasuring")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v(",\n        "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("clampToGround")]),t._v(": "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("false")]),t._v("\n      }\n    },\n    "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".cesiumInstance = cesiumInstance\n        viewer.scene.globe.depthTestAgainstTerrain = "),s("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n      },\n      toggle(type) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs[type].measuring = !"),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs[type].measuring\n      },\n      clear() {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.measureDistance.clear()\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.measureArea.clear()\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$refs.measureHeight.clear()\n      },\n      activeEvt(_) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v("[_.type] = _.isActive\n      },\n      measureEvt(result) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(result)\n      },\n      movingEvt(position) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(position)\n      },\n      readyPromise(tileset) {\n        "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { viewer } = "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".cesiumInstance\n        viewer.zoomTo(tileset, "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("new")]),t._v(" Cesium.HeadingPitchRange("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("0.0")]),t._v(", "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("-0.5")]),t._v(", tileset.boundingSphere.radius * "),s("span",{pre:!0,attrs:{class:"hljs-number"}},[t._v("2.0")]),t._v("))\n      }\n    }\n  }\n")]),s("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),s("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("default")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("mode")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("1")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Measurement mode, 0 continuous measurement, 1 measurement ends once.")])]),t._v(" "),s("tr",[s("td",[t._v("font")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("'100 20px SimSun'")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify the label CSS font.")])]),t._v(" "),s("tr",[s("td",[t._v("depthTest")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("false")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify whether label text and line objects are always displayed.")])]),t._v(" "),s("tr",[s("td",[t._v("arcType")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("0")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" The type of line the polygon edges must follow.")])]),t._v(" "),s("tr",[s("td",[t._v("clampToGround")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("false")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Whether to stick to the ground.")])]),t._v(" "),s("tr",[s("td",[t._v("alongLine")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Whether to display labels along the line.")])]),t._v(" "),s("tr",[s("td",[t._v("polylineWidth")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("2")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify the polyline width.")])]),t._v(" "),s("tr",[s("td",[t._v("polylineMaterial")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("fabric: { type: 'Color', uniforms: { color: '#51ff00' } }")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify polyline material.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("default")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("perPositionHeight")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Whether the face uses the height of each point, if not, the surface is drawn to the ground. (But the area algorithm is not the calculated floor area).")])]),t._v(" "),s("tr",[s("td",[t._v("mode")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("1")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Measurement mode, 0 continuous measurement, 1 measurement ends once.")])]),t._v(" "),s("tr",[s("td",[t._v("font")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("'100 20px SimSun'")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify the area text. the label CSS font.")])]),t._v(" "),s("tr",[s("td",[t._v("depthTest")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("false")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify whether label text and line objects are always displayed.")])]),t._v(" "),s("tr",[s("td",[t._v("clampToGround")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("false")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Whether to display labels along the line.")])]),t._v(" "),s("tr",[s("td",[t._v("alongLine")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Whether to display labels along the line.")])]),t._v(" "),s("tr",[s("td",[t._v("polylineWidth")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("2")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify the polyline width.")])]),t._v(" "),s("tr",[s("td",[t._v("polylineMaterial")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("fabric: { type: 'Color', uniforms: { color: '#51ff00' } }")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify polyline material.")])]),t._v(" "),s("tr",[s("td",[t._v("polygonMaterial")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("fabric: { type: 'Color', uniforms: { color: 'rgba(255,165,0,0.25)' } }")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify polygon material.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("default")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("mode")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("1")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Measurement mode, 0 continuous measurement, 1 measurement ends once.")])]),t._v(" "),s("tr",[s("td",[t._v("font")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("'100 20px SimSun'")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify the label CSS font.")])]),t._v(" "),s("tr",[s("td",[t._v("depthTest")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("false")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify whether label text and line objects are always displayed.")])]),t._v(" "),s("tr",[s("td",[t._v("polylineWidth")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("2")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify the polyline width.")])]),t._v(" "),s("tr",[s("td",[t._v("polylineMaterial")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("fabric: { type: 'Color', uniforms: { color: '#51ff00' } }")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Specify polyline material.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("default")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("backgroundColor")]),t._v(" "),s("td",[t._v("String|Array|Object")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("'rgba(38, 38, 38, 0.85)'")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Gets or sets the background color of this label.")])]),t._v(" "),s("tr",[s("td",[t._v("fillColor")]),t._v(" "),s("td",[t._v("String|Array|Object")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("WHITE")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Gets or sets the fill color of this label.")])]),t._v(" "),s("tr",[s("td",[t._v("font")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("'100 20px SimSun'")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Gets or sets the font used to draw this label.")])]),t._v(" "),s("tr",[s("td",[t._v("labelStyle")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("2")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" A Property specifying the LabelStyle. "),s("strong",[t._v("FILL: 0, OUTLINE: 1, FILL_AND_OUTLINE: 2")])])]),t._v(" "),s("tr",[s("td",[t._v("outlineColor")]),t._v(" "),s("td",[t._v("String|Array|Object")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("'BLUE'")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Gets or sets the outline color of this label.")])]),t._v(" "),s("tr",[s("td",[t._v("outlineWidth")]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("1")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Gets or sets the outline width of this label.")])]),t._v(" "),s("tr",[s("td",[t._v("pixelOffset")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("{x: 15, y: -20}")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Gets or sets the pixel offset in screen space from the origin of this label.")])]),t._v(" "),s("tr",[s("td",[t._v("showBackground")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("true")])]),t._v(" "),s("td",[s("code",{pre:!0},[t._v("optional")]),t._v(" Determines if a background behind this label will be shown.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("parameter")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("activeEvt")]),t._v(" "),s("td",[t._v("{ type: String, isActive: Boolean }")]),t._v(" "),s("td",[t._v("Triggered when the measurement starts or stops, and the return measurement type includes"),s("code",{pre:!0},[t._v("'areaMeasuring'")]),t._v("、"),s("code",{pre:!0},[t._v("'distanceMeasuring'")]),t._v("、"),s("code",{pre:!0},[t._v("'heightMeasuring'")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("movingEvt")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",[t._v("Triggered during measurement. Return to the mouse position.")])]),t._v(" "),s("tr",[s("td",[t._v("measureEvt")]),t._v(" "),s("td",[t._v("{ polyline: Object, label: Object }")]),t._v(" "),s("td",[t._v("Triggered during the measurement process. Returns the result of the calculation, the text label object. You can get text label objects, custom text units, decimal points, and more.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("parameter")]),t._v(" "),s("th",[t._v("description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("clear")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Clear the measurement result (and stop the measurement at the same time).")])])])])}],!1,null,null,null);e.default=v.exports},BDny:function(t,e,s){t.exports=s("Ayub")}}]);
//# sourceMappingURL=92.413c2f8660af78da77d3.js.map