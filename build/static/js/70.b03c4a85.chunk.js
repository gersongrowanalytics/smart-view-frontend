(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[70],{1730:function(e,a,t){},2010:function(e,a,t){"use strict";t.r(a);for(var n=t(70),l=t(71),c=t(73),r=t(72),o=t(0),i=t.n(o),u=t(207),s=t(125),m=t(1280),g=t(1279),d=m.a.Option,h=function(){return i.a.createElement(g.a,{className:"gx-card",title:"Basic"},i.a.createElement(m.a,{className:"gx-mr-3 gx-mb-3",defaultValue:"lucy",style:{width:120},onChange:function(e){console.log("selected ".concat(e))}},i.a.createElement(d,{value:"jack"},"Jack"),i.a.createElement(d,{value:"lucy"},"Lucy"),i.a.createElement(d,{value:"disabled",disabled:!0},"Disabled"),i.a.createElement(d,{value:"Yiminghe"},"yiminghe")),i.a.createElement(m.a,{className:"gx-mb-3",defaultValue:"lucy",style:{width:120},allowClear:!0,disabled:!0},i.a.createElement(d,{value:"lucy"},"Lucy")))},E=t(1285),f=(t(1730),m.a.Option),y=[],p=10;p<36;p++)y.push(i.a.createElement(f,{key:p.toString(36)+p},p.toString(36)+p));function v(e){console.log("Selected: ".concat(e))}for(var C=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={size:"default"},e.handleSizeChange=function(a){e.setState({size:a.target.value})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state.size;return i.a.createElement(g.a,{className:"gx-card",title:"Seclect Size"},i.a.createElement(E.a.Group,{className:"gx-mb-2",value:e,onChange:this.handleSizeChange},i.a.createElement(E.a.Button,{value:"large"},"Large"),i.a.createElement(E.a.Button,{value:"default"},"Default"),i.a.createElement(E.a.Button,{value:"small"},"Small")),i.a.createElement(m.a,{className:"gx-w-100 gx-mb-3",size:e,defaultValue:"a1",onChange:v,style:{width:200}},y),i.a.createElement(m.a,{className:"gx-w-100 gx-mb-3",mode:"tags",size:e,defaultValue:"a1",onChange:v,style:{width:200}},y),i.a.createElement(m.a,{className:"gx-w-100 gx-mb-3",mode:"multiple",size:e,placeholder:"Please select",defaultValue:["a10","c12"],onChange:v,style:{width:"100%"}},y),i.a.createElement(m.a,{className:"gx-w-100",mode:"tags",size:e,placeholder:"Please select",defaultValue:["a10","c12"],onChange:v,style:{width:"100%"}},y))}}]),t}(i.a.Component),b=m.a.Option,w=function(){return i.a.createElement(g.a,{className:"gx-card",title:"Search Field"},i.a.createElement(m.a,{showSearch:!0,style:{width:200},placeholder:"Select a person",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e))},onFocus:function(){console.log("focus")},onBlur:function(){console.log("blur")},filterOption:function(e,a){return a.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},i.a.createElement(b,{value:"jack"},"Jack"),i.a.createElement(b,{value:"lucy"},"Lucy"),i.a.createElement(b,{value:"tom"},"Tom")))},S=m.a.Option,x=[],O=10;O<36;O++)x.push(i.a.createElement(S,{key:O.toString(36)+O},O.toString(36)+O));for(var k=function(){return i.a.createElement(g.a,{className:"gx-card",title:"Select Tag"},i.a.createElement(m.a,{mode:"tags",style:{width:"100%"},placeholder:"Tags Mode",onChange:function(e){console.log("selected ".concat(e))}},x))},j=m.a.Option,N=[],z=10;z<36;z++)N.push(i.a.createElement(j,{key:z.toString(36)+z},z.toString(36)+z));for(var V=function(){return i.a.createElement(g.a,{className:"gx-card",title:"Select Multiple"},i.a.createElement(m.a,{mode:"multiple",style:{width:"100%"},placeholder:"Please select",defaultValue:["a10","c12"],onChange:function(e){console.log("selected ".concat(e))}},N))},J=m.a.Option,L=m.a.OptGroup,P=function(){return i.a.createElement(g.a,{className:"gx-card",title:"Select Option"},i.a.createElement(m.a,{defaultValue:"lucy",style:{width:200},onChange:function(e){console.log("selected ".concat(e))}},i.a.createElement(L,{label:"Manager"},i.a.createElement(J,{value:"jack"},"Jack"),i.a.createElement(J,{value:"lucy"},"Lucy")),i.a.createElement(L,{label:"Engineer"},i.a.createElement(J,{value:"Yiminghe"},"yiminghe"))))},B=m.a.Option,A=["Zhejiang","Jiangsu"],F={Zhejiang:["Hangzhou","Ningbo","Wenzhou"],Jiangsu:["Nanjing","Suzhou","Zhenjiang"]},M=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={cities:F[A[0]],secondCity:F[A[0]][0]},e.handleProvinceChange=function(a){e.setState({cities:F[a],secondCity:F[a][0]})},e.onSecondCityChange=function(a){e.setState({secondCity:a})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=A.map((function(e){return i.a.createElement(B,{key:e},e)})),a=this.state.cities.map((function(e){return i.a.createElement(B,{key:e},e)}));return i.a.createElement(g.a,{className:"gx-card",title:"Select Coordinate"},i.a.createElement(m.a,{className:"gx-mr-3 gx-mb-3",defaultValue:A[0],style:{width:90},onChange:this.handleProvinceChange},e),i.a.createElement(m.a,{className:"gx-mr-3 gx-mb-3",value:this.state.secondCity,style:{width:90},onChange:this.onSecondCityChange},a))}}]),t}(i.a.Component),T=m.a.Option,Z=function(){return i.a.createElement(g.a,{className:"gx-card",title:"With Value"},i.a.createElement(m.a,{labelInValue:!0,defaultValue:{key:"lucy"},style:{width:120},onChange:function(e){console.log(e)}},i.a.createElement(T,{value:"jack"},"Jack (100)"),i.a.createElement(T,{value:"lucy"},"Lucy (101)")))},D=m.a.Option,G=[],W=10;W<36;W++)G.push(i.a.createElement(D,{key:W.toString(36)+W},W.toString(36)+W));var Y=function(){return i.a.createElement(g.a,{className:"gx-card",title:"Automatic Completion"},i.a.createElement(m.a,{mode:"tags",style:{width:"100%"},onChange:function(e){console.log("selected ".concat(e))},tokenSeparators:[","]},G))},H=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement(s.a,{lg:12,md:12,sm:24,xs:24},i.a.createElement(h,null),i.a.createElement(w,null),i.a.createElement(k,null),i.a.createElement(V,null),i.a.createElement(P,null)),i.a.createElement(s.a,{lg:12,md:12,sm:24,xs:24},i.a.createElement(M,null),i.a.createElement(Z,null),i.a.createElement(Y,null),i.a.createElement(C,null)))}}]),t}(o.Component);a.default=H}}]);
//# sourceMappingURL=70.b03c4a85.chunk.js.map