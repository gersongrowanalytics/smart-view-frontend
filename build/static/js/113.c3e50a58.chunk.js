(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[113],{2459:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(262),o=a(148),r=a(519),b=a(1697),i=r.a.TabPane,m=function(){return l.a.createElement(b.a,{className:"gx-card",title:"Basic"},l.a.createElement(r.a,{defaultActiveKey:"1",onChange:function(e){console.log(e)}},l.a.createElement(i,{tab:"Tab 1",key:"1"},"Content of Tab Pane 1"),l.a.createElement(i,{tab:"Tab 2",key:"2"},"Content of Tab Pane 2"),l.a.createElement(i,{tab:"Tab 3",key:"3"},"Content of Tab Pane 3")))},u=a(82),s=a(353),E=r.a.TabPane,f=function(){var e=Object(n.useState)("top"),t=Object(u.a)(e,2),a=t[0],c=t[1];return l.a.createElement(b.a,{className:"gx-card",title:"Slide"},l.a.createElement(s.a.Group,{onChange:function(e){c(e.target.value)},value:a,className:"gx-mb-2"},l.a.createElement(s.a.Button,{value:"top"},"Horizontal"),l.a.createElement(s.a.Button,{value:"left"},"Vertical")),l.a.createElement(r.a,{defaultActiveKey:"1",tabPosition:a,style:{height:220}},l.a.createElement(E,{tab:"Tab 1",key:"1"},"Content of tab 1"),l.a.createElement(E,{tab:"Tab 2",key:"2"},"Content of tab 2"),l.a.createElement(E,{tab:"Tab 3",key:"3"},"Content of tab 3"),l.a.createElement(E,{tab:"Tab 4",key:"4"},"Content of tab 4"),l.a.createElement(E,{tab:"Tab 5",key:"5"},"Content of tab 5"),l.a.createElement(E,{tab:"Tab 6",key:"6"},"Content of tab 6"),l.a.createElement(E,{tab:"Tab 7",key:"7"},"Content of tab 7"),l.a.createElement(E,{tab:"Tab 8",key:"8"},"Content of tab 8"),l.a.createElement(E,{tab:"Tab 9",key:"9"},"Content of tab 9"),l.a.createElement(E,{tab:"Tab 10",key:"10"},"Content of tab 10"),l.a.createElement(E,{tab:"Tab 11",key:"11"},"Content of tab 11")))},T=r.a.TabPane,y=function(){var e=Object(n.useState)("small"),t=Object(u.a)(e,2),a=t[0],c=t[1];return l.a.createElement(b.a,{className:"gx-card",title:"Size"},l.a.createElement(s.a.Group,{value:a,onChange:function(e){c(e.target.value)},className:"gx-mb-3"},l.a.createElement(s.a.Button,{value:"small"},"Small"),l.a.createElement(s.a.Button,{value:"default"},"Default"),l.a.createElement(s.a.Button,{value:"large"},"Large")),l.a.createElement(r.a,{defaultActiveKey:"1",size:a},l.a.createElement(T,{tab:"Tab 1",key:"1"},"Content of tab 1"),l.a.createElement(T,{tab:"Tab 2",key:"2"},"Content of tab 2"),l.a.createElement(T,{tab:"Tab 3",key:"3"},"Content of tab 3")))},k=a(265),v=r.a.TabPane,C=k.a.Option,d=function(){var e=Object(n.useState)("top"),t=Object(u.a)(e,2),a=t[0],c=t[1];return l.a.createElement(b.a,{className:"gx-card",title:"Position"},l.a.createElement("div",{className:"gx-mb-3"},"Tab position\uff1a",l.a.createElement(k.a,{value:a,onChange:function(e){c(e)},dropdownMatchSelectWidth:!1},l.a.createElement(C,{value:"top"},"top"),l.a.createElement(C,{value:"bottom"},"bottom"),l.a.createElement(C,{value:"left"},"left"),l.a.createElement(C,{value:"right"},"right"))),l.a.createElement(r.a,{tabPosition:a},l.a.createElement(v,{tab:"Tab 1",key:"1"},"Content of Tab 1"),l.a.createElement(v,{tab:"Tab 2",key:"2"},"Content of Tab 2"),l.a.createElement(v,{tab:"Tab 3",key:"3"},"Content of Tab 3")))},g=r.a.TabPane,h=function(){return l.a.createElement(b.a,{className:"gx-card",title:"Card Tab"},l.a.createElement(r.a,{onChange:function(e){console.log(e)},type:"card"},l.a.createElement(g,{tab:"Tab 1",key:"1"},"Content of Tab Pane 1"),l.a.createElement(g,{tab:"Tab 2",key:"2"},"Content of Tab Pane 2"),l.a.createElement(g,{tab:"Tab 3",key:"3"},"Content of Tab Pane 3")))},p=a(78),P=a(79),x=a(81),N=a(80),O=a(107),j=r.a.TabPane,w=function(e){Object(x.a)(a,e);var t=Object(N.a)(a);function a(e){var n;Object(p.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState({activeKey:e})},n.onEdit=function(e,t){n[t](e)},n.add=function(){var e=n.state.panes,t="newTab".concat(n.newTabIndex++);e.push({title:"New Tab",content:"New Tab Pane",key:t}),n.setState({panes:e,activeKey:t})},n.remove=function(e){var t,a=n.state.activeKey;n.state.panes.forEach((function(a,n){a.key===e&&(t=n-1)}));var l=n.state.panes.filter((function(t){return t.key!==e}));t>=0&&a===e&&(a=l[t].key),n.setState({panes:l,activeKey:a})},n.newTabIndex=0;var l=[{title:"Tab 1",content:"Content of Tab Pane 1",key:"1"},{title:"Tab 2",content:"Content of Tab Pane 2",key:"2"}];return n.state={activeKey:l[0].key,panes:l},n}return Object(P.a)(a,[{key:"render",value:function(){return l.a.createElement(b.a,{className:"gx-card",title:"Customize Trigger"},l.a.createElement("div",{className:"gx-mb-3"},l.a.createElement(O.a,{onClick:this.add},"ADD")),l.a.createElement(r.a,{hideAdd:!0,onChange:this.onChange,activeKey:this.state.activeKey,type:"editable-card",onEdit:this.onEdit},this.state.panes.map((function(e){return l.a.createElement(j,{tab:e.title,key:e.key},e.content)}))))}}]),a}(l.a.Component);t.default=function(){return l.a.createElement(c.a,null,l.a.createElement(o.a,{span:24},l.a.createElement(m,null),l.a.createElement(f,null),l.a.createElement(y,null)),l.a.createElement(o.a,{span:24},l.a.createElement(d,null),l.a.createElement(h,null),l.a.createElement(w,null)))}}}]);
//# sourceMappingURL=113.c3e50a58.chunk.js.map