(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[51],{1897:function(t,e,n){"use strict";t.exports=n(1898)},1898:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=s(n(0)),a=s(n(16)),r=s(n(39));function s(t){return t&&t.__esModule?t:{default:t}}var c=n(1899),u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.onLoad=n.onLoad.bind(n),n.state={isScriptLoaded:t.isScriptLoaded},n}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){this.state.isScriptLoaded?this.onLoad():c(this.props.scriptUrl,this.onLoad)}},{key:"componentWillReceiveProps",value:function(t){var e=this.editorInstance;e&&e.getData()!==t.content&&e.setData(t.content)}},{key:"componentWillUnmount",value:function(){this.unmounting=!0}},{key:"onLoad",value:function(){if(!this.unmounting)if(this.setState({isScriptLoaded:!0}),window.CKEDITOR)for(var t in this.editorInstance=window.CKEDITOR.appendTo(r.default.findDOMNode(this),this.props.config,this.props.content),this.props.events){var e=this.props.events[t];this.editorInstance.on(t,e)}else console.error("CKEditor not found")}},{key:"render",value:function(){return i.default.createElement("div",{className:this.props.activeClass})}}]),e}(i.default.Component);u.defaultProps={content:"",config:{},isScriptLoaded:!1,scriptUrl:"https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js",activeClass:"",events:{}},u.propTypes={content:a.default.any,config:a.default.object,isScriptLoaded:a.default.bool,scriptUrl:a.default.string,activeClass:a.default.string,events:a.default.object},e.default=u},1899:function(t,e){function n(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function o(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,i){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("script");"function"===typeof e&&(i=e,e={}),e=e||{},i=i||function(){},r.type=e.type||"text/javascript",r.charset=e.charset||"utf8",r.async=!("async"in e)||!!e.async,r.src=t,e.attrs&&function(t,e){for(var n in e)t.setAttribute(n,e[n])}(r,e.attrs),e.text&&(r.text=""+e.text),("onload"in r?n:o)(r,i),r.onload||n(r,i),a.appendChild(r)}},1973:function(t,e,n){"use strict";n.r(e);var o=n(142),i=n(143),a=n(206),r=n(145),s=n(144),c=n(0),u=n.n(c),l=n(1897),d=n.n(l),f=n(1239),p=n(7),h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).updateContent=i.updateContent.bind(Object(a.a)(i)),i.state={content:"<h2>Awesome Rich Content</h2>\n<p>Suspendisse id sollicitudin dui. <strong>Vestibulum eu sapien pharetra,</strong> bibendum ligula id, ullamcorper ligula.</p>\n\n<ul>\n        <li>ullamcorper ligula</li>\n        <li>Duis vel neque</li>\n</ul>\n\n<p><em>Sed feugiat hendrerit risus, quis efficitur massa facilisis vitae. Aliquam erat volutpat. </em></p>\n"},i}return Object(i.a)(n,[{key:"updateContent",value:function(t){this.setState({content:t})}},{key:"onChange",value:function(t){var e=t.editor.getData();this.setState({content:e})}},{key:"onBlur",value:function(t){console.log("onBlur event called with event info: ",t)}},{key:"afterPaste",value:function(t){console.log("afterPaste event called with event info: ",t)}},{key:"render",value:function(){return u.a.createElement(f.a,{className:"gx-card",title:u.a.createElement(p.a,{id:"sidebar.editors.CKEditor"})},u.a.createElement(d.a,{activeClass:"p10",content:this.state.content,events:{blur:this.onBlur.bind(this),afterPaste:this.afterPaste.bind(this),change:this.onChange.bind(this)}}))}}]),n}(u.a.Component);e.default=h}}]);
//# sourceMappingURL=51.b5ed4651.chunk.js.map