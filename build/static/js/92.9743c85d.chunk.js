(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[92],{1787:function(e,a,t){"use strict";var n=t(2),l=t.n(n),c=t(3),r=t.n(c),i=t(0),s=t(821),d=t(1),m=t.n(d),o=t(91),u=t.n(o),h=t(523),f=t(85),E=t(90),b=t(60),g=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)a.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(t[n[l]]=e[n[l]])}return t},p=i.forwardRef((function(e,a){var t,n=e.prefixCls,c=e.size,d=e.loading,o=e.className,p=void 0===o?"":o,v=e.disabled,C=g(e,["prefixCls","size","loading","className","disabled"]);Object(b.a)("checked"in C||!("value"in C),"Switch","`value` is not a valid prop, do you mean `checked`?");var x=i.useContext(f.b),k=x.getPrefixCls,y=x.direction,N=i.useContext(E.b),O=k("switch",n),w=i.createElement("div",{className:"".concat(O,"-handle")},d&&i.createElement(u.a,{className:"".concat(O,"-loading-icon")})),j=m()(p,(t={},r()(t,"".concat(O,"-small"),"small"===(c||N)),r()(t,"".concat(O,"-loading"),d),r()(t,"".concat(O,"-rtl"),"rtl"===y),t));return i.createElement(h.a,{insertExtraNode:!0},i.createElement(s.default,l()({},C,{prefixCls:O,className:j,disabled:v||d,ref:a,loadingIcon:w})))}));p.__ANT_SWITCH=!0,p.displayName="Switch",a.a=p},2472:function(e,a,t){"use strict";t.r(a);var n=t(78),l=t(79),c=t(81),r=t(80),i=t(0),s=t.n(i),d=t(262),m=t(148),o=t(1697),u=t(1787),h=function(){return s.a.createElement(o.a,{className:"gx-card",title:"Basic"},s.a.createElement(u.a,{defaultChecked:!0,onChange:function(e){console.log("switch to ".concat(e))}}))},f=t(107),E=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={disabled:!0},e.toggle=function(){e.setState({disabled:!e.state.disabled})},e}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(o.a,{className:"gx-card",title:"SwitchDisabled"},s.a.createElement("div",{className:"gx-mb-3"},s.a.createElement(u.a,{disabled:this.state.disabled,defaultChecked:!0})),s.a.createElement("div",{className:"gx-mb-0"},s.a.createElement(f.a,{type:"primary",onClick:this.toggle},"Toggle disabled")))}}]),t}(s.a.Component),b=t(1701),g=function(){return s.a.createElement(o.a,{className:"gx-card",title:"Switch Text Icon"},s.a.createElement("div",{className:"gx-mb-3"},s.a.createElement(u.a,{checkedChildren:"open",unCheckedChildren:"turn off",defaultChecked:!0})),s.a.createElement("div",{className:"gx-mb-3"},s.a.createElement(u.a,{checkedChildren:"1",unCheckedChildren:"0"})),s.a.createElement("div",{className:"gx-mb-0"},s.a.createElement(u.a,{checkedChildren:s.a.createElement(b.a,{type:"check"}),unCheckedChildren:s.a.createElement(b.a,{type:"cross"}),defaultChecked:!0})))},p=function(){return s.a.createElement(o.a,{className:"gx-card",title:"Switch Size"},s.a.createElement("div",{className:"gx-mb-3"},s.a.createElement(u.a,{defaultChecked:!0})),s.a.createElement("div",{className:"gx-mb-0"},s.a.createElement(u.a,{size:"small",defaultChecked:!0})))},v=function(){return s.a.createElement(o.a,{className:"gx-card",title:"Switch Loading"},s.a.createElement("div",{className:"gx-mb-3"},s.a.createElement(u.a,{loading:!0,defaultChecked:!0})),s.a.createElement("div",{className:"gx-mb-0"},s.a.createElement(u.a,{size:"small",loading:!0})))},C=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(m.a,{lg:12,md:12,sm:24,xs:24},s.a.createElement(h,null),s.a.createElement(E,null),s.a.createElement(g,null)),s.a.createElement(m.a,{lg:12,md:12,sm:24,xs:24},s.a.createElement(p,null),s.a.createElement(v,null)))}}]),t}(i.Component);a.default=C}}]);
//# sourceMappingURL=92.9743c85d.chunk.js.map