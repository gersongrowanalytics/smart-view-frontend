(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[150],{2100:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(1279),c=n(70),i=n(71),r=n(46),h=n(73),d=n(72),m=n(1324),s=window.google,u=Object(m.withGoogleMap)((function(e){return o.a.createElement(m.GoogleMap,{ref:e.onMapMounted,onZoomChanged:e.onZoomChanged,defaultCenter:e.center,zoom:e.zoom},o.a.createElement(m.InfoWindow,{defaultPosition:e.center},o.a.createElement("div",{className:"gx-map-content"},e.content)))})),p=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={zoom:15,content:"Change the zoom level"},e.handleMapMounted=e.handleMapMounted.bind(Object(r.a)(e)),e.handleZoomChanged=e.handleZoomChanged.bind(Object(r.a)(e)),e}return Object(i.a)(n,[{key:"handleMapMounted",value:function(e){this._map=e}},{key:"handleZoomChanged",value:function(){var e=this._map.getZoom();e!==this.state.zoom&&this.setState({zoom:e,content:"Zoom: ".concat(e)})}},{key:"render",value:function(){return o.a.createElement(u,{loadingElement:o.a.createElement("div",{style:{height:"100%"}}),containerElement:o.a.createElement("div",{style:{height:"550px"}}),mapElement:o.a.createElement("div",{style:{height:"100%"}}),onMapMounted:this.handleMapMounted,onZoomChanged:this.handleZoomChanged,center:new s.maps.LatLng(47.646935,-122.303763),zoom:this.state.zoom,content:this.state.content})}}]),n}(a.Component),g=n(8);t.default=function(){return o.a.createElement(l.a,{className:"gx-card",title:o.a.createElement(g.a,{id:"sidebar.map.eventListener"})},o.a.createElement(p,null))}}}]);
//# sourceMappingURL=150.a86f4220.chunk.js.map