(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[27],{1275:function(e,t,a){"use strict";var n=a(9),l=a(2),r=a(18),o=a(0),i=a(1),c=a.n(i),s=a(1280),m=a(1287),u=a(204);Object(m.b)("#1890ff");var d=o.forwardRef((function(e,t){var a=e.className,i=e.icon,m=e.spin,d=e.rotate,p=e.tabIndex,b=e.onClick,f=e.twoToneColor,g=Object(r.a)(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),h=c()("anticon",Object(l.a)({},"anticon-".concat(i.name),Boolean(i.name)),a),y=c()({"anticon-spin":!!m||"loading"===i.name}),E=p;void 0===E&&b&&(E=-1);var C=d?{msTransform:"rotate(".concat(d,"deg)"),transform:"rotate(".concat(d,"deg)")}:void 0,v=Object(u.d)(f),k=Object(n.a)(v,2),x=k[0],w=k[1];return o.createElement("span",Object.assign({role:"img","aria-label":i.name},g,{ref:t,tabIndex:E,onClick:b,className:h}),o.createElement(s.a,{className:y,icon:i,primaryColor:x,secondaryColor:w,style:C}))}));d.displayName="AntdIcon",d.getTwoToneColor=m.a,d.setTwoToneColor=m.b,t.a=d},1280:function(e,t,a){"use strict";var n=a(18),l=a(11),r=a(204),o={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var i=function(e){var t=e.icon,a=e.className,i=e.onClick,c=e.style,s=e.primaryColor,m=e.secondaryColor,u=Object(n.a)(e,["icon","className","onClick","style","primaryColor","secondaryColor"]),d=o;if(s&&(d={primaryColor:s,secondaryColor:m||Object(r.b)(s)}),Object(r.f)(),Object(r.g)(Object(r.c)(t),"icon should be icon definiton, but got ".concat(t)),!Object(r.c)(t))return null;var p=t;return p&&"function"===typeof p.icon&&(p=Object(l.a)(Object(l.a)({},p),{},{icon:p.icon(d.primaryColor,d.secondaryColor)})),Object(r.a)(p.icon,"svg-".concat(p.name),Object(l.a)({className:a,onClick:i,style:c,"data-icon":p.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},u))};i.displayName="IconReact",i.getTwoToneColors=function(){return Object(l.a)({},o)},i.setTwoToneColors=function(e){var t=e.primaryColor,a=e.secondaryColor;o.primaryColor=t,o.secondaryColor=a||Object(r.b)(t),o.calculated=!!a},t.a=i},1287:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(9),l=a(1280),r=a(204);function o(e){var t=Object(r.d)(e),a=Object(n.a)(t,2),o=a[0],i=a[1];return l.a.setTwoToneColors({primaryColor:o,secondaryColor:i})}function i(){var e=l.a.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}},1393:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"},r=a(1275),o=function(e,t){return n.createElement(r.a,Object.assign({},e,{ref:t,icon:l}))};o.displayName="SettingOutlined";t.a=n.forwardRef(o)},1452:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},r=a(1275),o=function(e,t){return n.createElement(r.a,Object.assign({},e,{ref:t,icon:l}))};o.displayName="EditOutlined";t.a=n.forwardRef(o)},1453:function(e,t,a){"use strict";var n=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},r=a(1275),o=function(e,t){return n.createElement(r.a,Object.assign({},e,{ref:t,icon:l}))};o.displayName="EllipsisOutlined";t.a=n.forwardRef(o)},1999:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(203),o=a(119),i=a(1239),c=function(){return l.a.createElement(i.a,{title:"Basic card",extra:l.a.createElement("span",{className:"gx-link"},"More")},l.a.createElement("p",null,"The point of using Lorem Ipsum making it look like readable English. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."),l.a.createElement("p",null,"Various versions have evolved over the years, sometimes by accident. The point of using Lorem Ipsum as opposed to using 'Content here, content here', making it look like readable English."),l.a.createElement("p",null,"Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, discovered the source."))},s=function(){return l.a.createElement(i.a,{title:"Card title",bordered:!1},l.a.createElement("p",null,"Various versions have evolved over the years, sometimes by accident. The point of using Lorem Ipsum as opposed to using 'Content here, content here', making it look like readable English."),l.a.createElement("p",null,"Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, discovered the source."))},m=function(){return l.a.createElement(i.a,{title:"Simple card"},l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),l.a.createElement("p",null,"Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots of classical, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, consectetur, discovered the undoubtable source."),l.a.createElement("p",null,"Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."))},u=i.a.Meta,d=function(){return l.a.createElement(i.a,{hoverable:!0,cover:l.a.createElement("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"})},l.a.createElement(u,{title:"Europe Street beat",description:"www.instagram.com"}))},p=function(){return l.a.createElement(r.a,null,l.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(i.a,{title:"Card title",bordered:!1},l.a.createElement("p",null,"Where does it come from? Contrary to popular belief. ")," ",l.a.createElement("p",null," Piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at discovered."))),l.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(i.a,{title:"Card title",bordered:!1},l.a.createElement("p",null,"Contrary to popular belief, Lorem Ipsum is not simply random text. ")," ",l.a.createElement("p",null," It has roots Latin literature from 45 BC. Richard McClintock, Hampden-Sydney College in Virginia, the source."))))},b=function(){return l.a.createElement(i.a,{loading:!0,title:"Card title"},"Whatever content")},f=function(){return l.a.createElement(i.a,{title:"Card Title"},l.a.createElement(i.a.Grid,null,"Content"),l.a.createElement(i.a.Grid,null,"Content"),l.a.createElement(i.a.Grid,null,"Content"),l.a.createElement(i.a.Grid,null,"Content"),l.a.createElement(i.a.Grid,null,"Content"),l.a.createElement(i.a.Grid,null,"Content"),l.a.createElement(i.a.Grid,null,"Content"))},g=function(){return l.a.createElement(i.a,{title:"Card title"},l.a.createElement("p",{style:{fontSize:14,marginBottom:16,fontWeight:500}},"Group title"),l.a.createElement(i.a,{type:"inner",title:"Inner Card title",extra:l.a.createElement("span",{className:"gx-link"},"More")},"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),l.a.createElement(i.a,{type:"inner",title:"Inner Card title",extra:l.a.createElement("span",{className:"gx-link"},"More")},"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."))},h=a(65),y=a(142),E=a(143),C=a(145),v=a(144),k=[{key:"tab1",tab:"tab1"},{key:"tab2",tab:"tab2"}],x={tab1:l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry."),tab2:l.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.")},w=[{key:"article",tab:"article"},{key:"app",tab:"app"},{key:"project",tab:"project"}],j={article:l.a.createElement("p",null,"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."),app:l.a.createElement("p",null,"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."),project:l.a.createElement("p",null,"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.")},O=function(e){Object(C.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={key:"tab1",noTitleKey:"article"},e.onTabChange=function(t,a){console.log(t,a),e.setState(Object(h.a)({},a,t))},e}return Object(E.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(r.a,null,l.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(i.a,{title:"Card title",extra:l.a.createElement("span",{className:"gx-link"},"More"),tabList:k,onTabChange:function(t){e.onTabChange(t,"key")}},x[this.state.key])),l.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(i.a,{tabList:w,onTabChange:function(t){e.onTabChange(t,"noTitleKey")}},j[this.state.noTitleKey])))}}]),a}(l.a.Component),L=a(1273),T=a(1393),I=a(1452),M=a(1453),N=i.a.Meta,z=function(){return l.a.createElement(i.a,{cover:l.a.createElement("img",{alt:"example",src:"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}),actions:[l.a.createElement(T.a,null),l.a.createElement(I.a,null),l.a.createElement(M.a,null)]},l.a.createElement(N,{avatar:l.a.createElement(L.a,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),title:"Card title",description:"This is the description"}))};t.default=function(){return l.a.createElement("div",{className:"gx-main-content"},l.a.createElement(r.a,null,l.a.createElement(o.a,{xl:8,lg:12,md:12,sm:24,xs:24},l.a.createElement(c,null)),l.a.createElement(o.a,{xl:8,lg:12,md:12,sm:24,xs:24},l.a.createElement(d,null)),l.a.createElement(o.a,{xl:8,lg:12,md:12,sm:24,xs:24},l.a.createElement(m,null)),l.a.createElement(o.a,{xl:8,lg:12,md:12,sm:24,xs:24},l.a.createElement(z,null)),l.a.createElement(o.a,{xl:16,lg:24,md:24,sm:24,xs:24},l.a.createElement(b,null))),l.a.createElement("div",{className:"gx-bg-grey gx-mb-30 gx-px-5 gx-pt-5"},l.a.createElement(r.a,null,l.a.createElement(o.a,{xl:12,lg:24,md:24,sm:24,xs:24},l.a.createElement(s,null)),l.a.createElement(o.a,{xl:12,lg:24,md:24,sm:24,xs:24},l.a.createElement(p,null)))),l.a.createElement(r.a,null,l.a.createElement(o.a,{span:24},l.a.createElement(f,null)),l.a.createElement(o.a,{span:24},l.a.createElement(g,null))),l.a.createElement(O,null))}}}]);
//# sourceMappingURL=27.69756117.chunk.js.map