(this["webpackJsonpwieldy-hook"]=this["webpackJsonpwieldy-hook"]||[]).push([[52],{2016:function(e,a,t){},2419:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(262),m=t(148),c=t(78),s=t(79),i=t(81),o=t(80),u=t(1725),p=t(1697),d=t(1698),E=t(107),g=t(1770),b=t.n(g),h=t(1799),f=t.n(h),v=u.a.Item;var y=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(c.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).onFinishFailed=function(e){console.log("Failed:",e)},e.onFinish=function(e){console.log("Received values of form: ",e)},e}return Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,{className:"gx-card",title:"Basic"},n.a.createElement(u.a,{initialValues:{remember:!0},name:"basic",onFinish:this.onFinish,onFinishFailed:this.onFinishFailed,layout:"inline"},n.a.createElement(v,{rules:[{required:!0,message:"Please input your username!'}"}],name:"uaername"},n.a.createElement(d.a,{prefix:n.a.createElement(b.a,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"})),n.a.createElement(v,{rules:[{required:!0,message:"Please input your Password!"}],name:"password"},n.a.createElement(d.a,{prefix:n.a.createElement(f.a,{style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"})),n.a.createElement(v,null,n.a.createElement(E.a,{className:"gx-mb-0",type:"primary",htmlType:"submit"},"Log in"))))}}]),t}(l.Component),w=t(15),k=t(288),x=t(388),I=t(44),O=(t(2016),t(183)),F=t(1817),j=t(1901),C=u.a.Item,S=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(c.a)(this,t),(e=a.call(this)).state={email:"demo@example.com",password:"demo#123"},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.props,a=e.showMessage,t=e.loader,l=e.alertMessage;return n.a.createElement(p.a,{className:"gx-card",title:"Horizontal Login Form"},n.a.createElement(u.a,{initialValues:{remember:!0},name:"basic",onFinish:this.onFinish,onFinishFailed:this.onFinishFailed,className:"gx-login-form gx-form-row0"},n.a.createElement(C,{rules:[{required:!0,message:"Please input your E-mail!"}],name:"email",initialValue:"demo@example.com"},n.a.createElement(d.a,{prefix:n.a.createElement(F.a,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"})),n.a.createElement(C,{rules:[{required:!0,message:"Please input your Password!"}],name:"password",initialValue:"demo#123"},n.a.createElement(d.a,{prefix:n.a.createElement(j.a,{style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"})),n.a.createElement(C,{name:"remember",valuePropName:"checked"},n.a.createElement("span",{className:"gx-d-block gx-mb-2"},n.a.createElement(k.a,null,"Remember me"),n.a.createElement("span",{className:"gx-link login-form-forgot"},"Forgot password")),n.a.createElement(E.a,{type:"primary",htmlType:"submit",className:"login-form-button gx-mt-1"},"Log in"),n.a.createElement("span",{className:"gx-d-block gx-mt-2"},"Or ",n.a.createElement("span",{className:"gx-link"},"register now!")))),t&&n.a.createElement("div",{className:"gx-loader-view"},n.a.createElement(O.a,null)),a&&x.b.error(l))}}]),t}(l.Component),P=Object(w.c)((function(e){var a=e.auth;return{loader:a.loader,alertMessage:a.alertMessage,showMessage:a.showMessage,authUser:a.authUser}}),{userSignIn:I.m,hideMessage:I.a,showAuthLoader:I.e,userFacebookSignIn:I.g,userGoogleSignIn:I.k,userGithubSignIn:I.i,userTwitterSignIn:I.s})(S),N=t(82),Y=t(265),M=t(1922),T=t(225),D=t(1923),H=t(1902),q=Y.a.Option,R=(M.a.Option,[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]),V={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},A={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},B=function(){var e=u.a.useForm(),a=Object(N.a)(e,1)[0],t=n.a.createElement(u.a.Item,{name:"prefix",noStyle:!0},n.a.createElement(Y.a,{style:{width:70}},n.a.createElement(q,{value:"86"},"+86"),n.a.createElement(q,{value:"87"},"+87"))),c=Object(l.useState)([]),s=Object(N.a)(c,2),i=s[0],o=s[1],g=i.map((function(e){return{label:e,value:e}}));return n.a.createElement(p.a,{className:"gx-card",title:"Registration Form"},n.a.createElement(u.a,Object.assign({},V,{form:a,name:"register",onFinish:function(e){console.log("Received values of form: ",e)},initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},scrollToFirstError:!0}),n.a.createElement(u.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},n.a.createElement(d.a,null)),n.a.createElement(u.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0},n.a.createElement(d.a.Password,null)),n.a.createElement(u.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var a=e.getFieldValue;return{validator:function(e,t){return t&&a("password")!==t?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},n.a.createElement(d.a.Password,null)),n.a.createElement(u.a.Item,{name:"nickname",label:n.a.createElement("span",null,"Nickname\xa0",n.a.createElement(T.a,{title:"What do you want others to call you?"},n.a.createElement(H.a,null))),rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]},n.a.createElement(d.a,null)),n.a.createElement(u.a.Item,{name:"residence",label:"Habitual Residence",rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}]},n.a.createElement(D.a,{options:R})),n.a.createElement(u.a.Item,{name:"phone",label:"Phone Number",rules:[{required:!0,message:"Please input your phone number!"}]},n.a.createElement(d.a,{addonBefore:t,style:{width:"100%"}})),n.a.createElement(u.a.Item,{name:"website",label:"Website",rules:[{required:!0,message:"Please input website!"}]},n.a.createElement(M.a,{options:g,onChange:function(e){o(e?[".com",".org",".net"].map((function(a){return"".concat(e).concat(a)})):[])},placeholder:"website"},n.a.createElement(d.a,null))),n.a.createElement(u.a.Item,{label:"Captcha",extra:"We must make sure that your are a human."},n.a.createElement(r.a,{gutter:8},n.a.createElement(m.a,{span:12},n.a.createElement(u.a.Item,{name:"captcha",noStyle:!0,rules:[{required:!0,message:"Please input the captcha you got!"}]},n.a.createElement(d.a,null))),n.a.createElement(m.a,{span:12},n.a.createElement(E.a,null,"Get captcha")))),n.a.createElement(u.a.Item,Object.assign({name:"agreement",valuePropName:"checked",rules:[{validator:function(e,a){return a?Promise.resolve():Promise.reject("Should accept agreement")}}]},A),n.a.createElement(k.a,null,"I have read the ",n.a.createElement("a",{href:""},"agreement"))),n.a.createElement(u.a.Item,A,n.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Register"))))},z=t(1903),L=t(1842),G=function(){var e=Object(l.useState)(!1),a=Object(N.a)(e,2),t=a[0],c=a[1],s=u.a.useForm(),i=Object(N.a)(s,1)[0];return n.a.createElement(p.a,{className:"gx-card",title:"Advanced Search"},n.a.createElement(u.a,{form:i,name:"advanced_search",className:"ant-advanced-search-form",onFinish:function(e){console.log("Received values of form: ",e)}},n.a.createElement(r.a,{gutter:24},function(){for(var e=t?10:6,a=[],l=0;l<e;l++)a.push(n.a.createElement(m.a,{lg:8,md:8,sm:12,xs:24,key:l,style:{display:l<e?"block":"none"}},n.a.createElement("div",{className:"gx-form-row0"},n.a.createElement(u.a.Item,{name:"field-".concat(l),label:"Field ".concat(l),rules:[{required:!0,message:"Input something!"}]},n.a.createElement(d.a,{placeholder:"placeholder"})))));return a}()),n.a.createElement(r.a,null,n.a.createElement(m.a,{span:24,style:{textAlign:"right"}},n.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Search"),n.a.createElement(E.a,{onClick:function(){i.resetFields()}},"Clear"),n.a.createElement("a",{style:{display:"inline-block",verticalAlign:"middle",marginBottom:15},onClick:function(){c(!t)}},t?n.a.createElement(z.a,null):n.a.createElement(L.a,null)," Collapse")))))},U=t(1904),W=t(1700),_={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},J={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}},Z=function(){return n.a.createElement(p.a,{className:"gx-card",title:"Dynamic Form Item"},n.a.createElement(u.a,Object.assign({name:"dynamic_form_item"},J,{onFinish:function(e){console.log("Received values of form:",e)}}),n.a.createElement(u.a.List,{name:"names"},(function(e,a){var t=a.add,l=a.remove;return n.a.createElement("div",null,e.map((function(a,t){return n.a.createElement(u.a.Item,Object.assign({},0===t?_:J,{label:0===t?"Passengers":"",required:!1,key:a.key}),n.a.createElement(u.a.Item,Object.assign({},a,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input passenger's name or delete this field."}],noStyle:!0}),n.a.createElement(d.a,{placeholder:"passenger name",style:{width:"60%"}})),e.length>1?n.a.createElement(U.a,{className:"dynamic-delete-button",style:{margin:"0 8px"},onClick:function(){l(a.name)}}):null)})),n.a.createElement(u.a.Item,null,n.a.createElement(E.a,{type:"dashed",onClick:function(){t()},style:{width:"60%"}},n.a.createElement(W.a,null)," Add field")))})),n.a.createElement(u.a.Item,null,n.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Submit"))))},K=t(10),Q=t(1836),X=t(2385),$=Q.a.MonthPicker,ee=Q.a.RangePicker,ae={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},te={rules:[{type:"object",required:!0,message:"Please select time!"}]},le={rules:[{type:"array",required:!0,message:"Please select time!"}]},ne=function(){return n.a.createElement(p.a,{className:"gx-card",title:"Time Related Controls"},n.a.createElement(u.a,Object.assign({name:"time_related_controls"},ae,{onFinish:function(e){var a=e["range-picker"],t=e["range-time-picker"],l=Object(K.a)(Object(K.a)({},e),{},{"date-picker":e["date-picker"].format("YYYY-MM-DD"),"date-time-picker":e["date-time-picker"].format("YYYY-MM-DD HH:mm:ss"),"month-picker":e["month-picker"].format("YYYY-MM"),"range-picker":[a[0].format("YYYY-MM-DD"),a[1].format("YYYY-MM-DD")],"range-time-picker":[t[0].format("YYYY-MM-DD HH:mm:ss"),t[1].format("YYYY-MM-DD HH:mm:ss")],"time-picker":e["time-picker"].format("HH:mm:ss")});console.log("Received values of form: ",l)}}),n.a.createElement(u.a.Item,Object.assign({name:"date-picker",label:"DatePicker"},te),n.a.createElement(Q.a,{className:"gx-mb-3 gx-w-100"})),n.a.createElement(u.a.Item,Object.assign({name:"date-time-picker",label:"DatePicker[showTime]"},te),n.a.createElement(Q.a,{className:"gx-mb-3 gx-w-100",showTime:!0,format:"YYYY-MM-DD HH:mm:ss"})),n.a.createElement(u.a.Item,Object.assign({name:"month-picker",label:"MonthPicker"},te),n.a.createElement($,{className:"gx-mb-3 gx-w-100"})),n.a.createElement(u.a.Item,Object.assign({name:"range-picker",label:"RangePicker"},le),n.a.createElement(ee,{className:"gx-mb-3 gx-w-100"})),n.a.createElement(u.a.Item,Object.assign({name:"range-time-picker",label:"RangePicker[showTime]"},le),n.a.createElement(ee,{className:"gx-mb-3 gx-w-100",showTime:!0,format:"YYYY-MM-DD HH:mm:ss"})),n.a.createElement(u.a.Item,Object.assign({name:"time-picker",label:"TimePicker"},te),n.a.createElement(X.a,{className:"gx-mb-3 gx-w-100"})),n.a.createElement(u.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},n.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Submit"))))},re=Y.a.Option,me=function(e){var a=e.value,t=void 0===a?{}:a,r=e.onChange,m=Object(l.useState)(0),c=Object(N.a)(m,2),s=c[0],i=c[1],o=Object(l.useState)("rmb"),u=Object(N.a)(o,2),p=u[0],E=u[1],g=function(e){r&&r(Object(K.a)(Object(K.a)({number:s,currency:p},t),e))};return n.a.createElement("span",null,n.a.createElement(d.a,{type:"text",value:t.number||s,onChange:function(e){var a=parseInt(e.target.value||0,10);Number.isNaN(s)||("number"in t||i(a),g({number:a}))},style:{width:"63%",marginRight:"5%"}}),n.a.createElement(Y.a,{value:t.currency||p,style:{width:"32%"},onChange:function(e){"currency"in t||E(e),g({currency:e})}},n.a.createElement(re,{value:"rmb"},"RMB"),n.a.createElement(re,{value:"dollar"},"Dollar")))},ce=function(){return n.a.createElement(p.a,{className:"gx-card",title:"Customized Form Controls"},n.a.createElement(u.a,{name:"customized_form_controls",layout:"inline",onFinish:function(e){console.log("Received values from form: ",e)},initialValues:{price:{number:0,currency:"rmb"}}},n.a.createElement(u.a.Item,{name:"price",label:"Price",rules:[{validator:function(e,a){return a.number>0?Promise.resolve():Promise.reject("Price must be greater than zero!")}}]},n.a.createElement(me,null)),n.a.createElement(u.a.Item,null,n.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Submit"))))},se=function(e){var a=e.onChange,t=e.fields;return n.a.createElement(u.a,{name:"global_state",layout:"inline",fields:t,onFieldsChange:function(e,t){a(t)}},n.a.createElement(u.a.Item,{name:"username",label:"Username",rules:[{required:!0,message:"Username is required!"}]},n.a.createElement(d.a,null)))},ie=function(){var e=Object(l.useState)([{name:["username"],value:"Ant Design"}]),a=Object(N.a)(e,2),t=a[0],r=a[1];return n.a.createElement(p.a,{className:"gx-card",title:"Store Form Data"},n.a.createElement(se,{fields:t,onChange:function(e){r(e)}}),n.a.createElement("pre",{className:"language-bash"},JSON.stringify(t,null,2)))},oe=t(1843),ue=t(1723),pe=u.a.Item,de=Y.a.Option,Ee={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:18},md:{span:16},lg:{span:12}}},ge=function(){return n.a.createElement(p.a,{className:"gx-card",title:"CUSTOMIZED VALIDATION"},n.a.createElement(u.a,null,n.a.createElement(u.a.Item,Object.assign({},Ee,{label:"Fail",validateStatus:"error",help:"Should be combination of numbers & alphabets"}),n.a.createElement(d.a,{placeholder:"unavailable choice",id:"error"})),n.a.createElement(u.a.Item,Object.assign({label:"Warning",validateStatus:"warning"},Ee),n.a.createElement(d.a,{placeholder:"Warning",id:"warning",prefix:n.a.createElement(oe.a,null)})),n.a.createElement(u.a.Item,Object.assign({},Ee,{label:"Validating",hasFeedback:!0,validateStatus:"validating",help:"The information is being validated..."}),n.a.createElement(d.a,{placeholder:"I'm the content is being validated",id:"validating"})),n.a.createElement(u.a.Item,Object.assign({label:"Success",hasFeedback:!0,validateStatus:"success"},Ee),n.a.createElement(d.a,{placeholder:"I'm the content",id:"success"})),n.a.createElement(u.a.Item,Object.assign({label:"Warning",hasFeedback:!0,validateStatus:"warning"},Ee),n.a.createElement(d.a,{placeholder:"Warning",id:"warning2"})),n.a.createElement(u.a.Item,Object.assign({},Ee,{label:"Fail",hasFeedback:!0,validateStatus:"error",help:"Should be combination of numbers & alphabets"}),n.a.createElement(d.a,{placeholder:"unavailable choice",id:"error2"})),n.a.createElement(u.a.Item,Object.assign({label:"Success",hasFeedback:!0,validateStatus:"success"},Ee),n.a.createElement(Q.a,{style:{width:"100%"}})),n.a.createElement(u.a.Item,Object.assign({label:"Warning",hasFeedback:!0,validateStatus:"warning"},Ee),n.a.createElement(X.a,{style:{width:"100%"}})),n.a.createElement(u.a.Item,Object.assign({label:"Error",hasFeedback:!0,validateStatus:"error"},Ee),n.a.createElement(Y.a,null,n.a.createElement(de,{value:"1"},"Option 1"),n.a.createElement(de,{value:"2"},"Option 2"),n.a.createElement(de,{value:"3"},"Option 3"))),n.a.createElement(u.a.Item,Object.assign({},Ee,{label:"Validating",hasFeedback:!0,validateStatus:"validating",help:"The information is being validated..."}),n.a.createElement(D.a,{options:[]})),n.a.createElement(pe,Object.assign({label:"inline"},Ee),n.a.createElement("div",{className:"ant-row gx-form-row0"},n.a.createElement(m.a,{xs:24,sm:11},n.a.createElement(pe,{validateStatus:"error",help:"Please select the correct date"},n.a.createElement(Q.a,null))),n.a.createElement(m.a,{xs:24,sm:2},n.a.createElement("span",{style:{display:"inline-block",width:"100%",textAlign:"center"}},"-")),n.a.createElement(m.a,{xs:24,sm:11},n.a.createElement(pe,null,n.a.createElement(Q.a,null))))),n.a.createElement(u.a.Item,Object.assign({label:"Success",hasFeedback:!0,validateStatus:"success"},Ee),n.a.createElement(ue.a,{style:{width:"100%"}})),n.a.createElement(u.a.Item,Object.assign({label:"Success",hasFeedback:!0,validateStatus:"success"},Ee),n.a.createElement(d.a,{allowClear:!0,placeholder:"with allowClear"})),n.a.createElement(u.a.Item,Object.assign({label:"Warning",hasFeedback:!0,validateStatus:"warning"},Ee),n.a.createElement(d.a.Password,{placeholder:"with input password"})),n.a.createElement(u.a.Item,Object.assign({label:"Error",hasFeedback:!0,validateStatus:"error"},Ee),n.a.createElement(d.a.Password,{allowClear:!0,placeholder:"with input password and allowClear"}))))},be=Y.a.Option,he={labelCol:{span:8},wrapperCol:{span:16}},fe={wrapperCol:{offset:8,span:16}},ve=function(){var e=u.a.useForm(),a=Object(N.a)(e,1)[0];return n.a.createElement(p.a,{className:"gx-card",title:"Coordinated Controls"},n.a.createElement(u.a,Object.assign({},he,{form:a,name:"control-hooks",onFinish:function(e){console.log(e)}}),n.a.createElement(u.a.Item,{name:"note",label:"Note",rules:[{required:!0}]},n.a.createElement(d.a,null)),n.a.createElement(u.a.Item,{name:"gender",label:"Gender",rules:[{required:!0}]},n.a.createElement(Y.a,{placeholder:"Select a option and change input text above",onChange:function(e){switch(e){case"male":return void a.setFieldsValue({note:"Hi, man!"});case"female":return void a.setFieldsValue({note:"Hi, lady!"});case"other":a.setFieldsValue({note:"Hi there!"})}},allowClear:!0},n.a.createElement(be,{value:"male"},"male"),n.a.createElement(be,{value:"female"},"female"),n.a.createElement(be,{value:"other"},"other"))),n.a.createElement(u.a.Item,{noStyle:!0,shouldUpdate:function(e,a){return e.gender!==a.gender}},(function(e){return"other"===(0,e.getFieldValue)("gender")?n.a.createElement(u.a.Item,{name:"customizeGender",label:"Customize Gender",rules:[{required:!0}]},n.a.createElement(d.a,null)):null})),n.a.createElement(u.a.Item,fe,n.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Submit"),n.a.createElement(E.a,{htmlType:"button",onClick:function(){a.resetFields()}},"Reset"),n.a.createElement(E.a,{type:"link",htmlType:"button",onClick:function(){a.setFieldsValue({note:"Hello world!",gender:"male"})}},"Fill form"))))},ye=t(353),we=function(){var e=u.a.useForm(),a=Object(N.a)(e,1)[0],t=Object(l.useState)("horizontal"),r=Object(N.a)(t,2),m=r[0],c=r[1],s="horizontal"===m?{labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:14}}}:null,i="horizontal"===m?{wrapperCol:{span:14,offset:4}}:null;return n.a.createElement(p.a,{className:"gx-card",title:"FORM LAYOUT"},n.a.createElement(u.a,Object.assign({},s,{layout:m,form:a,initialValues:{layout:m},onValuesChange:function(e){var a=e.layout;c(a)}}),n.a.createElement(u.a.Item,{label:"Form Layout",name:"layout"},n.a.createElement(ye.a.Group,{value:m},n.a.createElement(ye.a.Button,{value:"horizontal"},"Horizontal"),n.a.createElement(ye.a.Button,{value:"vertical"},"Vertical"),n.a.createElement(ye.a.Button,{value:"inline"},"Inline"))),n.a.createElement(u.a.Item,{label:"Field A"},n.a.createElement(d.a,{placeholder:"input placeholder"})),n.a.createElement(u.a.Item,{label:"Field B"},n.a.createElement(d.a,{placeholder:"input placeholder"})),n.a.createElement(u.a.Item,i,n.a.createElement(E.a,{type:"primary"},"Submit"))))},ke=t(11),xe=t.n(ke),Ie=t(38),Oe={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:14}}},Fe={labelCol:{span:4},wrapperCol:{span:8,offset:4}},je=function(){var e=u.a.useForm(),a=Object(N.a)(e,1)[0],t=Object(l.useState)(!1),r=Object(N.a)(t,2),m=r[0],c=r[1];Object(l.useEffect)((function(){a.validateFields(["nickname"])}),[m]);var s=function(){var e=Object(Ie.a)(xe.a.mark((function e(){var t;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.validateFields();case 3:t=e.sent,console.log("Success:",t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Failed:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(p.a,{className:"gx-card",title:"DYNAMIC RULES"},n.a.createElement(u.a,{form:a,name:"dynamic_rule"},n.a.createElement(u.a.Item,Object.assign({},Oe,{name:"username",label:"Name",rules:[{required:!0,message:"Please input your name"}]}),n.a.createElement(d.a,{placeholder:"Please input your name"})),n.a.createElement(u.a.Item,Object.assign({},Oe,{name:"nickname",label:"Nickname",rules:[{required:m,message:"Please input your nickname"}]}),n.a.createElement(d.a,{placeholder:"Please input your nickname"})),n.a.createElement(u.a.Item,Fe,n.a.createElement(k.a,{checked:m,onChange:function(e){c(e.target.checked)}},"Nickname is required")),n.a.createElement(u.a.Item,Fe,n.a.createElement(E.a,{type:"primary",onClick:s},"Check"))))},Ce=t(1787),Se=t(2423),Pe=t(2017),Ne=t(2478),Ye=t(1905),Me=t(1844),Te=Y.a.Option,De={labelCol:{span:6},wrapperCol:{span:14}},He=function(e){return console.log("Upload event:",e),Array.isArray(e)?e:e&&e.fileList},qe=function(){return n.a.createElement(p.a,{className:"gx-card",title:"OTHER FORM CONTROLS"},n.a.createElement(u.a,Object.assign({name:"validate_other"},De,{onFinish:function(e){console.log("Received values of form: ",e)},initialValues:{"input-number":3,"checkbox-group":["A","B"],rate:3.5}}),n.a.createElement(u.a.Item,{label:"Plain Text"},n.a.createElement("span",{className:"ant-form-text"},"China")),n.a.createElement(u.a.Item,{name:"select",label:"Select",hasFeedback:!0,rules:[{required:!0,message:"Please select your country!"}]},n.a.createElement(Y.a,{placeholder:"Please select a country"},n.a.createElement(Te,{value:"china"},"China"),n.a.createElement(Te,{value:"usa"},"U.S.A"))),n.a.createElement(u.a.Item,{name:"select-multiple",label:"Select[multiple]",rules:[{required:!0,message:"Please select your favourite colors!",type:"array"}]},n.a.createElement(Y.a,{mode:"multiple",placeholder:"Please select favourite colors"},n.a.createElement(Te,{value:"red"},"Red"),n.a.createElement(Te,{value:"green"},"Green"),n.a.createElement(Te,{value:"blue"},"Blue"))),n.a.createElement(u.a.Item,{label:"InputNumber"},n.a.createElement(u.a.Item,{name:"input-number",noStyle:!0},n.a.createElement(ue.a,{min:1,max:10})),n.a.createElement("span",{className:"ant-form-text"}," machines")),n.a.createElement(u.a.Item,{name:"switch",label:"Switch",valuePropName:"checked"},n.a.createElement(Ce.a,null)),n.a.createElement(u.a.Item,{name:"slider",label:"Slider"},n.a.createElement(Se.a,{marks:{0:"A",20:"B",40:"C",60:"D",80:"E",100:"F"}})),n.a.createElement(u.a.Item,{name:"radio-group",label:"Radio.Group"},n.a.createElement(ye.a.Group,null,n.a.createElement(ye.a,{value:"a"},"item 1"),n.a.createElement(ye.a,{value:"b"},"item 2"),n.a.createElement(ye.a,{value:"c"},"item 3"))),n.a.createElement(u.a.Item,{name:"radio-button",label:"Radio.Button"},n.a.createElement(ye.a.Group,null,n.a.createElement(ye.a.Button,{value:"a"},"item 1"),n.a.createElement(ye.a.Button,{value:"b"},"item 2"),n.a.createElement(ye.a.Button,{value:"c"},"item 3"))),n.a.createElement(u.a.Item,{name:"checkbox-group",label:"Checkbox.Group"},n.a.createElement(k.a.Group,null,n.a.createElement(r.a,null,n.a.createElement(m.a,{span:8},n.a.createElement(k.a,{value:"A",style:{lineHeight:"32px"}},"A")),n.a.createElement(m.a,{span:8},n.a.createElement(k.a,{value:"B",style:{lineHeight:"32px"},disabled:!0},"B")),n.a.createElement(m.a,{span:8},n.a.createElement(k.a,{value:"C",style:{lineHeight:"32px"}},"C")),n.a.createElement(m.a,{span:8},n.a.createElement(k.a,{value:"D",style:{lineHeight:"32px"}},"D")),n.a.createElement(m.a,{span:8},n.a.createElement(k.a,{value:"E",style:{lineHeight:"32px"}},"E")),n.a.createElement(m.a,{span:8},n.a.createElement(k.a,{value:"F",style:{lineHeight:"32px"}},"F"))))),n.a.createElement(u.a.Item,{name:"rate",label:"Rate"},n.a.createElement(Pe.a,null)),n.a.createElement(u.a.Item,{name:"upload",label:"Upload",valuePropName:"fileList",getValueFromEvent:He,extra:"longgggggggggggggggggggggggggggggggggg"},n.a.createElement(Ne.a,{name:"logo",action:"/upload.do",listType:"picture"},n.a.createElement(E.a,null,n.a.createElement(Ye.a,null)," Click to upload"))),n.a.createElement(u.a.Item,{label:"Dragger"},n.a.createElement(u.a.Item,{name:"dragger",valuePropName:"fileList",getValueFromEvent:He,noStyle:!0},n.a.createElement(Ne.a.Dragger,{name:"files",action:"/upload.do"},n.a.createElement("p",{className:"ant-upload-drag-icon"},n.a.createElement(Me.a,null)),n.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),n.a.createElement("p",{className:"ant-upload-hint"},"Support for a single or bulk upload.")))),n.a.createElement(u.a.Item,{wrapperCol:{span:12,offset:6}},n.a.createElement(E.a,{type:"primary",htmlType:"submit"},"Submit"))))};a.default=function(){return n.a.createElement(r.a,null,n.a.createElement(m.a,{span:24},n.a.createElement(y,null)),n.a.createElement(m.a,{span:24},n.a.createElement(P,null)),n.a.createElement(m.a,{span:24},n.a.createElement(B,null)),n.a.createElement(m.a,{span:24},n.a.createElement(G,null)),n.a.createElement(m.a,{span:24},n.a.createElement(Z,null)),n.a.createElement(m.a,{span:24},n.a.createElement(ne,null)),n.a.createElement(m.a,{span:24},n.a.createElement(ce,null)),n.a.createElement(m.a,{span:24},n.a.createElement(ie,null)),n.a.createElement(m.a,{span:24},n.a.createElement(ge,null)),n.a.createElement(m.a,{span:24},n.a.createElement(ve,null)),n.a.createElement(m.a,{span:24},n.a.createElement(we,null)),n.a.createElement(m.a,{span:24},n.a.createElement(je,null)),n.a.createElement(m.a,{span:24},n.a.createElement(qe,null)))}}}]);
//# sourceMappingURL=52.12aafc47.chunk.js.map