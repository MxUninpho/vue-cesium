(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{T1fa:function(s,e,t){"use strict";t.r(e);var a=t("JFUb"),r=Object(a.a)({data:function(){return{requestWaterMask:!0}},methods:{ready:function(s){var e=s.Cesium,t=s.viewer,a=new e.Cartesian3(300770.50872389384,5634912.131394585,2978152.2865545116),r=new e.Cartesian3(6344.974098678562,-793.3419798081741,2499.9508860763162);t.camera.lookAt(a,r),t.camera.lookAtTransform(e.Matrix4.IDENTITY)}}},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("section",[t("h1",[s._v("CesiumTerrainProvider")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("Example")]),s._v(" "),t("h3",[s._v("Load terrain data in Cesium terrain format")]),s._v(" "),t("h4",[s._v("Preview")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[t("vc-layer-imagery",[t("vc-provider-imagery-bingmaps",{attrs:{url:"https://dev.virtualearth.net",bmKey:"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-",mapStyle:"Aerial"}})],1),s._v(" "),t("vc-provider-terrain-cesium",{ref:"terrain",attrs:{requestWaterMask:s.requestWaterMask}})],1)],1)]],2),s._v(" "),t("h4",[s._v("Code")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("Instance Properties")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),s._m(3),s._v(" "),t("h2",[s._v("Events")]),s._v(" "),s._m(4),s._v(" "),t("hr")],1)}),[function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("The "),e("code",{pre:!0},[this._v("vc-provider-terrain-cesium")]),this._v(" component is used to load terrain data in Cesium terrain format. If "),e("code",{pre:!0},[this._v("url")]),this._v(" is empty, the CesiumIon online global terrain is loaded by "),e("code",{pre:!0},[this._v("Cesium.createWorldTerrain")]),this._v(" by default.")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-bingmaps")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://dev.virtualearth.net"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("bmKey")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"AgcbDCAOb9zMfquaT4Z-MdHX4AsHUNvs7xgdHefEA5myMHxZk87NTNgdLbG90IE-"')]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Aerial"')]),s._v("\n        >")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-bingmaps")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"terrain"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":requestWaterMask")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"requestWaterMask"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("requestWaterMask")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" target = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("300770.50872389384")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5634912.131394585")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2978152.2865545116")]),s._v(")\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" offset = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6344.974098678562")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-793.3419798081741")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2499.9508860763162")]),s._v(")\n        viewer.camera.lookAt(target, offset)\n        viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("type")]),s._v(" "),t("th",[s._v("default")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("url")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("required")]),s._v(" The URL of the Cesium terrain server.")])]),s._v(" "),t("tr",[t("td",[s._v("requestVertexNormals")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("false")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" Flag that indicates if the client should request additional lighting information from the server, in the form of per vertex normals if available.")])]),s._v(" "),t("tr",[t("td",[s._v("requestWaterMask")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("false")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" Flag that indicates if the client should request per tile water masks from the server, if available.")])]),s._v(" "),t("tr",[t("td",[s._v("requestMetadata")]),s._v(" "),t("td",[s._v("Boolean")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("true")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" Flag that indicates if the client should request per tile metadata from the server, if available.")])]),s._v(" "),t("tr",[t("td",[s._v("ellipsoid")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" The ellipsoid. If not specified, the WGS84 ellipsoid is used.")])]),s._v(" "),t("tr",[t("td",[s._v("credit")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" A credit for the data source, which is displayed on the canvas.")])])])])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("Refer to the official document: "),e("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/CesiumTerrainProvider.html"}},[this._v("CesiumTerrainProvider")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("table",[t("thead",[t("tr",[t("th",[s._v("name")]),s._v(" "),t("th",[s._v("parameter")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),t("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])]),s._v(" "),t("tr",[t("td",[s._v("errorEvent")]),s._v(" "),t("td",[s._v("TileProviderError")]),s._v(" "),t("td",[s._v("Triggers when the terrain provider encounters an asynchronous error.")])])])])}],!1,null,null,null);e.default=r.exports},xM0P:function(s,e,t){s.exports=t("T1fa")}}]);
//# sourceMappingURL=91.7d6bcefd6e1fc42ce6b2.js.map