(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[103],{1390:function(e,t,n){"use strict";var a=n(4),r=n.n(a),l=n(5),i=n.n(l),o=n(49),c=n.n(o),s=n(0),d=n(1),p=n.n(d),m=n(71),u=n.n(m),g=n(34),f=n(79),y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},b=function(e){var t,n,a=s.useContext(f.b).getPrefixCls,l=e.prefixCls,o=e.className,c=e.color,d=e.children,m=e.pending,u=e.dot,b=e.label,h=y(e,["prefixCls","className","color","children","pending","dot","label"]),v=a("timeline",l),x=p()((t={},i()(t,"".concat(v,"-item"),!0),i()(t,"".concat(v,"-item-pending"),m),t),o),E=p()((n={},i()(n,"".concat(v,"-item-head"),!0),i()(n,"".concat(v,"-item-head-custom"),u),i()(n,"".concat(v,"-item-head-").concat(c),!0),n));return s.createElement("li",r()({},Object(g.default)(h,["position"]),{className:x}),b&&s.createElement("div",{className:"".concat(v,"-item-label")},b),s.createElement("div",{className:"".concat(v,"-item-tail")}),s.createElement("div",{className:E,style:{borderColor:/blue|red|green|gray/.test(c||"")?void 0:c}},u),s.createElement("div",{className:"".concat(v,"-item-content")},d))};b.defaultProps={color:"blue",pending:!1,position:""};var h=b,v=n(64),x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},E=function(e){var t,n=s.useContext(f.b),a=n.getPrefixCls,l=n.direction,o=e.prefixCls,d=e.pending,m=void 0===d?null:d,g=e.pendingDot,y=e.children,b=e.className,E=e.reverse,O=e.mode,N=x(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),C=a("timeline",o),w="boolean"===typeof m?null:m,j=m?s.createElement(h,{pending:!!m,dot:g||s.createElement(u.a,null)},w):null,A=E?[j].concat(c()(s.Children.toArray(y).reverse())):[].concat(c()(s.Children.toArray(y)),[j]),P=function(e,t){return"alternate"===O?"right"===e.props.position?"".concat(C,"-item-right"):"left"===e.props.position?"".concat(C,"-item-left"):"".concat(C,t%2===0?"-item-left":"-item-right"):"left"===O?"".concat(C,"-item-left"):"right"===O||"right"===e.props.position?"".concat(C,"-item-right"):""},k=A.filter((function(e){return!!e})),I=s.Children.count(k),S="".concat(C,"-item-last"),J=s.Children.map(k,(function(e,t){var n=t===I-2?S:"",a=t===I-1?S:"";return Object(v.a)(e,{className:p()([e.props.className,!E&&m?n:a,P(e,t)])})})),V=A.some((function(e){var t;return!!(null===(t=null===e||void 0===e?void 0:e.props)||void 0===t?void 0:t.label)})),D=p()(C,(t={},i()(t,"".concat(C,"-pending"),!!m),i()(t,"".concat(C,"-reverse"),!!E),i()(t,"".concat(C,"-").concat(O),!!O&&!V),i()(t,"".concat(C,"-label"),V),i()(t,"".concat(C,"-rtl"),"rtl"===l),t),b);return s.createElement("ul",r()({},N,{className:D}),J)};E.Item=h,E.defaultProps={reverse:!1,mode:""};var O=E;t.a=O},2070:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(1390),i=n(94),o=n(7),c=[{id:1,title:"Initial Release",date:"Jan 21, 2019",logs:[{description:"Initial release version 1.3"}]},{id:2,title:"V-1.4 ",date:"Jan 22, 2019",logs:[{description:"Added 2 Starter Templates"}]},{id:3,title:"V-1.5 ",date:"Jan 26, 2019",logs:[{description:"Updated to CRA-2"}]},{id:4,title:"V-1.6 ",date:"Mar 30, 2019",logs:[{type:"add",description:"Added jwt Auth starter-template"},{type:"add",description:"Added Sticky app"}]},{id:5,title:"V-1.7 ",date:"Apr 2, 2019",logs:[{type:"add",description:"Added Firebase CRUD with redux-thunk"},{type:"add",description:"Added HTML version"}]}],s=function(e){var t=e.changeLog;return r.a.createElement(l.a.Item,null,r.a.createElement("h4",{className:"gx-text-truncate"},t.title),r.a.createElement("p",{className:"gx-fs-sm"},t.date),r.a.createElement("ul",null,t.logs.map((function(e,t){return r.a.createElement("li",{key:t,className:"gx-fs-sm gx-text-grey"},void 0!==e.type?r.a.createElement("span",{className:"gx-badge gx-mb-1 gx-text-white gx-badge-red"},e.type):null," ",e.description)}))))};t.default=function(){return r.a.createElement(i.a,{title:r.a.createElement(o.a,{id:"sidebar.documents.changelog"})},r.a.createElement(l.a,null,c.map((function(e,t){return r.a.createElement(s,{key:t,changeLog:e})}))))}}}]);
//# sourceMappingURL=103.1bda5aea.chunk.js.map