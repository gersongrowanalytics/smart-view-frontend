(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[43],{1582:function(e,t,n){"use strict";var a=n(2),r=n.n(a),s=n(4),o=n.n(s),c=n(20),i=n.n(c),l=n(0),m=n(81),u=n.n(m),p=n(166),g=n.n(p),E=n(150),f=n.n(E),d=n(165),y=n.n(d),x=n(167),b=n.n(x),h=n(134),w=n.n(h),v=n(135),T=n.n(v),D=n(244),I=n.n(D),N=n(80),C=n.n(N),S=n(86),W=n(1),k=n.n(W),O=n(84);var j=n(22),M=n.n(j),L=n(27),A=n.n(L),P=n(25),B=n.n(P),H=n(28),J=n.n(H),_=function(e){B()(n,e);var t=J()(n);function n(){var e;return M()(this,n),(e=t.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return A()(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,a=e.children,r=this.state,s=r.error,o=r.info,c=o&&o.componentStack?o.componentStack:null,i="undefined"===typeof t?(s||"").toString():t,m="undefined"===typeof n?c:n;return s?l.createElement(F,{type:"error",message:i,description:l.createElement("pre",null,m)}):a}}]),n}(l.Component),R=n(63),U=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},V={success:w.a,info:I.a,error:C.a,warning:T.a},q={success:g.a,info:y.a,error:b.a,warning:f.a},z=function(e){var t,n=e.description,a=e.prefixCls,s=e.message,c=e.banner,m=e.className,p=void 0===m?"":m,g=e.style,E=e.onMouseEnter,f=e.onMouseLeave,d=e.onClick,y=e.afterClose,x=e.showIcon,b=e.closable,h=e.closeText,w=U(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText"]),v=l.useState(!1),T=i()(v,2),D=T[0],I=T[1],N=l.useRef(),C=l.useContext(O.b),W=C.getPrefixCls,j=C.direction,M=W("alert",a),L=function(e){var t;I(!0),null===(t=w.onClose)||void 0===t||t.call(w,e)},A=!!h||b,P=function(){var e=w.type;return void 0!==e?e:c?"warning":"info"}(),B=!(!c||void 0!==x)||x,H=k()(M,"".concat(M,"-").concat(P),(t={},o()(t,"".concat(M,"-with-description"),!!n),o()(t,"".concat(M,"-no-icon"),!B),o()(t,"".concat(M,"-banner"),!!c),o()(t,"".concat(M,"-closable"),A),o()(t,"".concat(M,"-rtl"),"rtl"===j),t),p),J=function(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}(w);return l.createElement(S.default,{visible:!D,motionName:"".concat(M,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:y},(function(e){var t=e.className,a=e.style;return l.createElement("div",r()({ref:N,"data-show":!D,className:k()(H,t),style:r()(r()({},g),a),onMouseEnter:E,onMouseLeave:f,onClick:d,role:"alert"},J),B?function(){var e=w.icon,t=(n?q:V)[P]||null;return e?Object(R.c)(e,l.createElement("span",{className:"".concat(M,"-icon")},e),(function(){return{className:k()("".concat(M,"-icon"),o()({},e.props.className,e.props.className))}})):l.createElement(t,{className:"".concat(M,"-icon")})}():null,l.createElement("span",{className:"".concat(M,"-message")},s),l.createElement("span",{className:"".concat(M,"-description")},n),A?l.createElement("button",{type:"button",onClick:L,className:"".concat(M,"-close-icon"),tabIndex:0},h?l.createElement("span",{className:"".concat(M,"-close-text")},h):l.createElement(u.a,null)):null)}))};z.ErrorBoundary=_;var F=t.a=z},1734:function(e,t,n){},2023:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(207),o=n(125),c=n(1279),i=n(1582),l=(n(1734),function(){return r.a.createElement(c.a,{title:"Basic",className:"gx-card"},r.a.createElement(i.a,{message:"Success Text",type:"success"}))}),m=function(){return r.a.createElement(c.a,{title:"More Type",className:"gx-card"},r.a.createElement(i.a,{message:"Success Text",type:"success"}),r.a.createElement(i.a,{message:"Info Text",type:"info"}),r.a.createElement(i.a,{message:"Warning Text",type:"warning"}),r.a.createElement(i.a,{message:"Error Text",type:"error"}))},u=function(e){console.log(e,"I was closed.")},p=function(){return r.a.createElement(c.a,{title:"Closeable",className:"gx-card"},r.a.createElement(i.a,{message:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",type:"warning",closable:!0,onClose:u}),r.a.createElement(i.a,{message:"Error Text",description:"Error Description Error Description Error Description Error Description Error Description Error Description",type:"error",closable:!0,onClose:u}))},g=function(){return r.a.createElement(c.a,{title:"Description",className:"gx-card"},r.a.createElement(i.a,{message:"Success Text",description:"Success Description Success Description Success Description",type:"success"}),r.a.createElement(i.a,{message:"Info Text",description:"Info Description Info Description Info Description Info Description",type:"info"}),r.a.createElement(i.a,{message:"Warning Text",description:"Warning Description Warning Description Warning Description Warning Description",type:"warning"}),r.a.createElement(i.a,{message:"Error Text",description:"Error Description Error Description Error Description Error Description",type:"error"}))},E=function(){return r.a.createElement(c.a,{title:"Icon",className:"gx-card"},r.a.createElement(i.a,{message:"Success Tips",type:"success",showIcon:!0}),r.a.createElement(i.a,{message:"Informational Notes",type:"info",showIcon:!0}),r.a.createElement(i.a,{message:"Warning",type:"warning",showIcon:!0}),r.a.createElement(i.a,{message:"Error",type:"error",showIcon:!0}),r.a.createElement(i.a,{message:"Success Tips",description:"Detailed description and advices about successful copywriting.",type:"success",showIcon:!0}),r.a.createElement(i.a,{message:"Informational Notes",description:"Additional description and informations about copywriting.",type:"info",showIcon:!0}),r.a.createElement(i.a,{message:"Warning",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0}),r.a.createElement(i.a,{message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:!0}))},f=n(70),d=n(71),y=n(73),x=n(72),b=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={visiable:!0},e.handleClose=function(){e.setState({visiable:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(c.a,{title:"Smoothly Unmount",className:"gx-card"},this.state.visiable?r.a.createElement(i.a,{message:"Alert Message Text",type:"success",closable:!0,afterClose:this.handleClose}):null,r.a.createElement("p",null,"placeholder text here"))}}]),n}(r.a.Component),h=function(){return r.a.createElement(c.a,{title:"Banner",className:"gx-card"},r.a.createElement(i.a,{message:"Warning text",banner:!0}),r.a.createElement(i.a,{message:"Very long warning text warning text text text text text text text",banner:!0,closable:!0}),r.a.createElement(i.a,{showIcon:!1,message:"Warning text without icon",banner:!0}),r.a.createElement(i.a,{type:"error",message:"Error text",banner:!0}))};t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(l,null),r.a.createElement(b,null),r.a.createElement(m,null),r.a.createElement(E,null)),r.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(g,null),r.a.createElement(h,null),r.a.createElement(p,null)))}}}]);
//# sourceMappingURL=43.cd68d0e7.chunk.js.map