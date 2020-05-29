(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{lilW:function(s,a,t){s.exports=t("oiFj")},oiFj:function(s,a,t){"use strict";t.r(a);var r=t("JFUb"),e=Object(r.a)({data:function(){return{appearance:{},geometry:{},color:{},attributes:{},modelMatrix1:{},modelMatrix2:{},appearance2:null,geometry2:null,geometryInstances:null,polygonHierarchy:[{lng:102.1,lat:29.5},{lng:106.2,lat:29.5},{lng:106.2,lat:33.5},{lng:108.2,lat:35.5},{lng:102.1,lat:33.5}],height:200,rectangle:{west:110.5,south:29.5,east:115.5,north:34.5}}},methods:{ready:function(s){this.cesiumInstance=s;var a=this.cesiumInstance,t=a.Cesium;a.viewer;this.appearance=new t.PerInstanceColorAppearance,this.attributes={color:t.ColorGeometryInstanceAttribute.fromColor(t.Color.AQUA)},this.geometry=t.BoxGeometry.fromDimensions({vertexFormat:t.VertexFormat.POSITION_AND_NORMAL,dimensions:new t.Cartesian3(1e6,1e6,5e5)}),this.modelMatrix1=t.Matrix4.multiplyByTranslation(t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(108,40.03883)),new t.Cartesian3(0,0,1e5),new t.Matrix4),this.modelMatrix2=t.Matrix4.multiplyByTranslation(t.Transforms.eastNorthUpToFixedFrame(t.Cartesian3.fromDegrees(108,40.03883)),new t.Cartesian3(0,0,15e5),new t.Matrix4),this.appearance2=new t.MaterialAppearance({material:t.Material.fromType("Checkerboard",{repeat:new t.Cartesian2(20,6)}),materialSupport:t.MaterialAppearance.MaterialSupport.TEXTURED})}}},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("GeometryInstance")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("加载几何体实例")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[t("vc-primitive",{attrs:{appearance:s.appearance}},[t("vc-instance-geometry",{attrs:{id:"top",geometry:s.geometry,color:s.color,attributes:s.attributes,modelMatrix:s.modelMatrix1}}),s._v(" "),t("vc-instance-geometry",{attrs:{id:"bottom",geometry:s.geometry,color:s.color,attributes:s.attributes,modelMatrix:s.modelMatrix2}})],1),s._v(" "),t("vc-primitive",{attrs:{appearance:s.appearance2,geometryInstances:s.geometryInstances},on:{"update:geometryInstances":function(a){s.geometryInstances=a},"update:geometry-instances":function(a){s.geometryInstances=a}}},[t("vc-instance-geometry",[t("vc-geometry-rectangle",{attrs:{rectangle:s.rectangle}})],1),s._v(" "),t("vc-instance-geometry",{attrs:{geometry:s.geometry2},on:{"update:geometry":function(a){s.geometry2=a}}},[t("vc-geometry-polygon",{attrs:{polygonHierarchy:s.polygonHierarchy,height:s.height}})],1)],1)],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),s._m(3),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),t("hr")],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("vc-instance-geometry")]),this._v(" 组件用于加载几何体实例，通过几何体实例可以加载几何体。几何体实例可以将一个几何体对象放置在几个不同的位置并进行唯一着色。 例如，可以对一个 BoxGeometry 进行多次实例化，每次使用不同的 modelMatrix 来更改其位置，旋转和缩放比例。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"top"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"color"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrix1"')]),s._v("\n        >")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"bottom"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"color"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":modelMatrix")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"modelMatrix2"')]),s._v("\n        >")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometryInstances.sync")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometryInstances"')]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-rectangle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":rectangle")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"rectangle"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-rectangle")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry.sync")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry2"')]),s._v(">")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polygon")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":polygonHierarchy")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygonHierarchy"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":height")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"height"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polygon")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrix1")]),s._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("modelMatrix2")]),s._v(": {},\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance2")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry2")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometryInstances")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polygonHierarchy")]),s._v(": [\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.2")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.2")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108.2")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35.5")]),s._v(" },\n          { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.1")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" }\n        ],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rectangle")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110.5")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("115.5")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("34.5")]),s._v(" }\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.PerInstanceColorAppearance()\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".attributes = {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.AQUA)\n        }\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".geometry = Cesium.BoxGeometry.fromDimensions({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vertexFormat")]),s._v(": Cesium.VertexFormat.POSITION_AND_NORMAL,\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dimensions")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000000.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1000000.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500000.0")]),s._v(")\n        })\n\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrix1 = Cesium.Matrix4.multiplyByTranslation(\n          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.03883")]),s._v(")),\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100000.0")]),s._v("),\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Matrix4()\n        )\n        ;("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".modelMatrix2 = Cesium.Matrix4.multiplyByTranslation(\n          Cesium.Transforms.eastNorthUpToFixedFrame(Cesium.Cartesian3.fromDegrees("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("108")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("40.03883")]),s._v(")),\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1500000.0")]),s._v("),\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Matrix4()\n        )),\n          ("),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance2 = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.MaterialAppearance({\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("material")]),s._v(": Cesium.Material.fromType("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Checkerboard'")]),s._v(", {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("repeat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian2("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20.0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6.0")]),s._v(")\n            }),\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("materialSupport")]),s._v(": Cesium.MaterialAppearance.MaterialSupport.TEXTURED\n          }))\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("geometry")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定几何体实例加载的几何体对象。")])]),s._v(" "),t("tr",[t("td",[s._v("modelMatrix")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定将几何体对象从模型坐标转换为世界坐标的模型矩阵。")])]),s._v(" "),t("tr",[t("td",[s._v("id")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定 "),t("code",{pre:!0},[s._v("Scene#pick")]),s._v(" 方法返回的用户自定义信息.")])]),s._v(" "),t("tr",[t("td",[s._v("attributes")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定几何体实例的属性信息。")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("p",[this._v("参考官方文档： "),a("strong",[a("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/GeometryInstance.html"}},[this._v("GeometryInstance")])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);a.default=e.exports}}]);
//# sourceMappingURL=140.be75fd6f814f8f37e8d3.js.map