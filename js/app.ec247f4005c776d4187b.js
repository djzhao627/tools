webpackJsonp([1],{"1uuo":function(e,t){},"991W":function(e,t){},JYlU:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var l=o("VU/8")({name:"App"},r,!1,function(e){o("JYlU")},null,null).exports,n=o("/ocq"),s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{attrs:{id:"container"}},[a("el-header",{attrs:{id:"header"}},[a("el-row",[a("el-col",{attrs:{span:2,offset:1}},[a("img",{attrs:{id:"logo",src:o("iQH9")}})]),e._v(" "),a("el-col",{attrs:{span:10}},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.defaultActive,mode:"horizontal"}},[a("el-menu-item",{attrs:{index:"1"}},[e._v("常用工具")]),e._v(" "),a("el-menu-item",{attrs:{index:"2",disabled:""}},[e._v("编程工具")])],1)],1),e._v(" "),a("el-col",{attrs:{span:3,offset:5}},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":1,mode:"horizontal"}},[a("el-menu-item",{attrs:{index:"1",disabled:""}},[e._v("反馈")]),e._v(" "),a("el-menu-item",{attrs:{index:"2"}},[a("a",{attrs:{href:"https://github.com/djzhao627",target:"_blank"}},[e._v("GitHub")])])],1)],1)],1)],1),e._v(" "),a("el-main",{attrs:{id:"main"}},[a("el-row",{staticClass:"tool"},[a("el-col",{attrs:{span:18,offset:3}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-button",{staticClass:"title",attrs:{round:""},on:{click:function(t){e.dialogVisible=!0}}},[e._v("名片生成器")])],1),e._v(" "),a("p",[e._v("通过人物的基本信息进行二维码的生成，扫描生成的二维码即可直接添加联系人。")]),e._v(" "),a("p",[e._v("基本信息包括：名称/昵称/手机号/地址/邮箱/公司/个人主页...")])]),e._v(" "),a("el-dialog",{attrs:{title:"名片生成器",visible:e.dialogVisible,width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"auto"}},[e.form.hasGen?e._e():a("div",[a("el-row",[a("el-col",{attrs:{span:11,offset:1}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"昵称"}},[a("el-input",{model:{value:e.form.nickname,callback:function(t){e.$set(e.form,"nickname",t)},expression:"form.nickname"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:11,offset:1}},[a("el-form-item",{attrs:{label:"手机号"}},[a("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"电子邮箱"}},[a("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:11,offset:1}},[a("el-form-item",{attrs:{label:"地址"}},[a("el-input",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"生日"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",format:"yyyyMMdd","value-format":"yyyyMMdd"},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:11,offset:1}},[a("el-form-item",{attrs:{label:"公司"}},[a("el-input",{model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"职位/角色"}},[a("el-input",{model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:11,offset:1}},[a("el-form-item",{attrs:{label:"网站/个人主页"}},[a("el-input",{model:{value:e.form.homepage,callback:function(t){e.$set(e.form,"homepage",t)},expression:"form.homepage"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:e.form.memo,callback:function(t){e.$set(e.form,"memo",t)},expression:"form.memo"}})],1)],1)],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.form.hasGen,expression:"form.hasGen"}]},[a("el-row",[a("el-col",{attrs:{span:12,offset:6}},[a("qrcode",{attrs:{value:e.myCode,options:{width:200}}})],1)],1)],1),e._v(" "),a("el-row",[e.form.hasGen?e._e():a("el-col",[a("el-button",{attrs:{type:"primary"},on:{click:e.generateCode}},[e._v("立即生成")])],1)],1),e._v(" "),a("el-row",[e.form.hasGen?a("el-col",[a("br"),e._v(" "),a("el-button",{on:{click:function(t){e.form.hasGen=!1}}},[e._v("重新生成")])],1):e._e()],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1)],1)],1)],1),e._v(" "),a("el-footer",{attrs:{id:"footer"}},[a("p",[e._v(" © 2019 "),a("a",{attrs:{href:"https://djzhao.js.org"}},[e._v("djzhao")])])])],1)},staticRenderFns:[]};var i=o("VU/8")({name:"home",data:function(){return{defaultActive:"1",dialogVisible:!1,form:{name:"",nickname:"",phone:"",email:"",company:"",role:"",homepage:"",address:"",birth:"",memo:"",hasGen:!1},myCode:"Hi, Nice to Meet U!"}},methods:{handleClose:function(e){this.$confirm("确认关闭？").then(function(t){e()}).catch(function(e){})},generateCode:function(){this.form.hasGen=!0,this.myCode="MECARD:N:"+this.form.name+";TEL:"+this.form.phone+";EMAIL:"+this.form.email+";NOTE:"+this.form.memo+";BDAY:"+this.form.birth+";ADR:"+this.form.address+";URL:"+this.form.homepage+";ROLE:"+this.form.role+";ORG:"+this.form.company+";NICKNAME:"+this.form.nickname+";"}}},s,!1,function(e){o("SurE")},"data-v-c2b4cd72",null).exports,m={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"hello"},[o("h1",[e._v(e._s(e.msg))]),e._v(" "),o("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),o("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),o("br"),e._v(" "),o("li",[o("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var c=o("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},m,!1,function(e){o("1uuo")},"data-v-d8ec41bc",null).exports;a.default.use(n.a);var f=new n.a({routes:[{path:"/",name:"home",component:i},{path:"/hello",name:"HelloWorld",component:c}]}),u=o("zL8q"),v=o.n(u),d=(o("tvR6"),o("991W"),o("uoCc"));a.default.component(d.a.name,d.a),a.default.config.productionTip=!1,a.default.use(v.a),new a.default({el:"#app",router:f,components:{App:l},template:"<App/>",render:function(e){return e(l)}})},SurE:function(e,t){},iQH9:function(e,t,o){e.exports=o.p+"img/logo.b055f5d.png"},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ec247f4005c776d4187b.js.map