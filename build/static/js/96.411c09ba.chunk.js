(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[96],{1407:function(e,t,n){"use strict";var a=n(2),l=n.n(a),r=n(4),c=n.n(r),o=n(47),i=n.n(o),m=n(0),s=n(1),u=n.n(s),p=n(74),d=n.n(p),f=n(37),E=n(84),g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},v=function(e){var t,n,a=m.useContext(E.b).getPrefixCls,r=e.prefixCls,o=e.className,i=e.color,s=e.children,p=e.pending,d=e.dot,v=e.label,b=g(e,["prefixCls","className","color","children","pending","dot","label"]),h=a("timeline",r),y=u()((t={},c()(t,"".concat(h,"-item"),!0),c()(t,"".concat(h,"-item-pending"),p),t),o),C=u()((n={},c()(n,"".concat(h,"-item-head"),!0),c()(n,"".concat(h,"-item-head-custom"),d),c()(n,"".concat(h,"-item-head-").concat(i),!0),n));return m.createElement("li",l()({},Object(f.default)(b,["position"]),{className:y}),v&&m.createElement("div",{className:"".concat(h,"-item-label")},v),m.createElement("div",{className:"".concat(h,"-item-tail")}),m.createElement("div",{className:C,style:{borderColor:/blue|red|green|gray/.test(i||"")?void 0:i}},d),m.createElement("div",{className:"".concat(h,"-item-content")},s))};v.defaultProps={color:"blue",pending:!1,position:""};var b=v,h=n(63),y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},C=function(e){var t,n=m.useContext(E.b),a=n.getPrefixCls,r=n.direction,o=e.prefixCls,s=e.pending,p=void 0===s?null:s,f=e.pendingDot,g=e.children,v=e.className,C=e.reverse,O=e.mode,x=y(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),N=a("timeline",o),w="boolean"===typeof p?null:p,I=p?m.createElement(b,{pending:!!p,dot:f||m.createElement(d.a,null)},w):null,k=C?[I].concat(i()(m.Children.toArray(g).reverse())):[].concat(i()(m.Children.toArray(g)),[I]),S=function(e,t){return"alternate"===O?"right"===e.props.position?"".concat(N,"-item-right"):"left"===e.props.position?"".concat(N,"-item-left"):"".concat(N,t%2===0?"-item-left":"-item-right"):"left"===O?"".concat(N,"-item-left"):"right"===O||"right"===e.props.position?"".concat(N,"-item-right"):""},j=k.filter((function(e){return!!e})),P=m.Children.count(j),T="".concat(N,"-item-last"),A=m.Children.map(j,(function(e,t){var n=t===P-2?T:"",a=t===P-1?T:"";return Object(h.a)(e,{className:u()([e.props.className,!C&&p?n:a,S(e,t)])})})),D=k.some((function(e){var t;return!!(null===(t=null===e||void 0===e?void 0:e.props)||void 0===t?void 0:t.label)})),J=u()(N,(t={},c()(t,"".concat(N,"-pending"),!!p),c()(t,"".concat(N,"-reverse"),!!C),c()(t,"".concat(N,"-").concat(O),!!O&&!D),c()(t,"".concat(N,"-label"),D),c()(t,"".concat(N,"-rtl"),"rtl"===r),t),v);return m.createElement("ul",l()({},x,{className:J}),A)};C.Item=b,C.defaultProps={reverse:!1,mode:""};var O=C;t.a=O},2055:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(207),c=n(125),o=n(1279),i=n(1407),m=function(){return l.a.createElement(o.a,{title:"Basic",className:"gx-card"},l.a.createElement(i.a,null,l.a.createElement(i.a.Item,null,"Create a services site 2015-09-01"),l.a.createElement(i.a.Item,null,"Solve initial network problems 2015-09-01"),l.a.createElement(i.a.Item,null,"Technical testing 2015-09-01"),l.a.createElement(i.a.Item,null,"Network problems being solved 2015-09-01")))},s=function(){return l.a.createElement(o.a,{title:"Color",className:"gx-card"},l.a.createElement(i.a,null,l.a.createElement(i.a.Item,{color:"green"},"Create a services site 2015-09-01"),l.a.createElement(i.a.Item,{color:"green"},"Create a services site 2015-09-01"),l.a.createElement(i.a.Item,{color:"red"},l.a.createElement("p",null,"Solve initial network problems 1"),l.a.createElement("p",null,"Solve initial network problems 2"),l.a.createElement("p",null,"Solve initial network problems 3 2015-09-01")),l.a.createElement(i.a.Item,null,l.a.createElement("p",null,"Technical testing 1"),l.a.createElement("p",null,"Technical testing 2"),l.a.createElement("p",null,"Technical testing 3 2015-09-01"))))},u=function(){return l.a.createElement(o.a,{title:"Last Node",className:"gx-card"},l.a.createElement(i.a,{pending:"Recording..."},l.a.createElement(i.a.Item,null,"Create a services site 2015-09-01"),l.a.createElement(i.a.Item,null,"Solve initial network problems 2015-09-01"),l.a.createElement(i.a.Item,null,"Technical testing 2015-09-01")))},p=n(1288),d=function(){return l.a.createElement(o.a,{title:"Custom",className:"gx-card"},l.a.createElement(i.a,null,l.a.createElement(i.a.Item,null,"Create a services site 2015-09-01"),l.a.createElement(i.a.Item,null,"Solve initial network problems 2015-09-01"),l.a.createElement(i.a.Item,{dot:l.a.createElement(p.a,{type:"clock-circle-o",style:{fontSize:"16px"}}),color:"red"},"Technical testing 2015-09-01"),l.a.createElement(i.a.Item,null,"Network problems being solved 2015-09-01")))};t.default=function(){return l.a.createElement(r.a,null,l.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(m,null),l.a.createElement(s,null)),l.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(u,null),l.a.createElement(d,null)))}}}]);
//# sourceMappingURL=96.411c09ba.chunk.js.map