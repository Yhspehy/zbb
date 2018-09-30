(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-272b"],{3189:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"forget"},[s("v-header",{attrs:{title:t.title}}),s("div",{staticClass:"content"},[s(t.currentStepComponent,{tag:"component",attrs:{mobile:t.mobile},on:{next:t.next}})],1)],1)},o=[],a=s("6ddf"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"form"},[s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-control border-bottom-1px"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"tel",placeholder:"请输入11位手机号"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),t.mobile.length>0?s("i",{directives:[{name:"clean",rawName:"v-clean"}],staticClass:"rt fas fa-times-circle"}):t._e()]),s("div",{staticClass:"input-control border-bottom-1px"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],ref:"code",staticClass:"code",attrs:{type:"tel",maxlength:"4",id:"code",placeholder:"请输入验证码",disabled:t.isError||t.mobile.length<11},domProps:{value:t.code},on:{focus:function(e){t.focus=!0},blur:function(e){t.focus=!1},input:function(e){e.target.composing||(t.code=e.target.value)}}}),s("button",{staticClass:"rt",class:t.isError||t.mobile.length<11||t.disabled?"disable":"able",attrs:{disabled:t.isError||t.mobile.length<11||t.disabled},on:{click:t.sendCode}},[t._v(t._s(t.btntxt))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.message,expression:"message !==''"}],staticClass:"error"},[s("i",{staticClass:"fas fa-exclamation-circle"}),t._v(t._s(t.message)+"\n            ")])]),s("div",{staticClass:"btn-group"},[s("button",{staticClass:"btn",attrs:{disabled:t.code.length<4||t.mobile.length<11},on:{click:t.next}},[t._v("下一步")])])])])},n=[],c=(s("a481"),{name:"step1",data:function(){return{mobile:"",isError:!1,message:"",code:"",focus:!1,time:0,btntxt:"获取验证码",disabled:!1}},methods:{sendCode:function(){this.time=60,this.vertifyMobile()&&this.timer()},verifyCode:function(){var t=this;return new Promise(function(e){var s=t;setTimeout(function(){e("1234"===s.code)},1e3)})},timer:function(){this.time>0?(this.disabled=!0,this.time--,this.btntxt=this.time+"s后重新获取",setTimeout(this.timer,1e3)):(this.time=0,this.btntxt="获取验证码",this.disabled=!1)},vertifyMobile:function(){var t=/^((13|14|15|17|18)[0-9]{1}\d{8})$/;return t.test(this.mobile)?(this.isError=!1,this.message="",!0):(this.isError=!0,this.message="手机号输入不正确，请重新输入",!1)},next:function(){var t=this;this.verifyCode().then(function(e){e?(console.log("success"),t.message="",t.$emit("next",[2,t.mobile])):(console.log("fail"),t.message="验证码有误，请重新输入")})}},watch:{mobile:function(t){this.mobile=t.replace(/[^\d]/g,""),t.length>=11?this.vertifyMobile():this.message=""},code:function(t){this.code=t.replace(/[^\d]/g,""),t.length<4&&(this.message="")}}}),l=c,d=s("2877"),m=Object(d["a"])(l,r,n,!1,null,"036a2eeb",null);m.options.__file="Step1.vue";var u=m.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"form"},[s("div",{staticClass:"input-group"},[s("div",{staticClass:"input-control border-bottom-1px"},[t.isLookPwd?s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"tel",placeholder:"请输入新密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}):t._e(),t.isLookPwd?t._e():s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入新密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.password.length>0?s("i",{directives:[{name:"clean",rawName:"v-clean"}],staticClass:"rt fas fa-times-circle"}):t._e(),s("i",{staticClass:"rt fas",class:t.isLookPwd?"fa-eye":"fa-eye-slash",on:{click:function(e){t.isLookPwd=!t.isLookPwd}}})]),s("div",{staticClass:"input-control border-bottom-1px"},[t.isLookConfirmPwd?s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPwd,expression:"confirmPwd"}],attrs:{type:"tel",placeholder:"请再次输入新密码"},domProps:{value:t.confirmPwd},on:{input:function(e){e.target.composing||(t.confirmPwd=e.target.value)}}}):t._e(),t.isLookConfirmPwd?t._e():s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPwd,expression:"confirmPwd"}],attrs:{type:"password",placeholder:"请再次输入新密码"},domProps:{value:t.confirmPwd},on:{input:function(e){e.target.composing||(t.confirmPwd=e.target.value)}}}),t.confirmPwd.length>0?s("i",{directives:[{name:"clean",rawName:"v-clean"}],staticClass:"rt fas fa-times-circle"}):t._e(),s("i",{staticClass:"rt fas",class:t.isLookConfirmPwd?"fa-eye":"fa-eye-slash",on:{click:function(e){t.isLookConfirmPwd=!t.isLookConfirmPwd}}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isError,expression:"isError"}],staticClass:"error"},[s("i",{staticClass:"fas fa-exclamation-circle"}),t._v(t._s(t.message)+"\n            ")])]),s("div",{staticClass:"btn-group"},[s("button",{staticClass:"btn",attrs:{disabled:t.isError||!t.password||!t.confirmPwd},on:{click:t.success}},[t._v("下一步")])])]),t.isSuccess?s("success-dialog",{attrs:{message:"重置密码成功!"}}):t._e()],1)},p=[],v=s("7cf2"),h={name:"step2",components:{successDialog:v["a"]},data:function(){return{password:"",confirmPwd:"",message:"",isLookPwd:!1,isLookConfirmPwd:!1,isError:!1,isSuccess:!1}},methods:{vertifyPassword:function(){var t=/^(?=.*((?=[\x21-\x7e]+)[^A-Za-z0-9]))(?=.*[a-zA-Z])(?=.*[0-9])[^\u4e00-\u9fa5]{6,14}$/;t.test(this.password)?this.confirmPwd?this.vertifyComfirmPassword():this.isError=!1:(this.isError=!0,this.message="密码由6-12位数字、英文及标点组成")},vertifyComfirmPassword:function(){this.password!=this.confirmPwd?(this.isError=!0,this.message="两次密码输入不一致，请重新设置"):this.isError=!1},success:function(){var t=this;this.isSuccess=!0,this.$toast("重置密码成功"),setTimeout(function(){t.isSuccess=!1,t.password="",t.confirmPwd=""},2e3)}},watch:{password:function(t){t.length>=1&&this.vertifyPassword()},confirmPwd:function(t){t.length>=1&&this.vertifyComfirmPassword()}}},g=h,w=Object(d["a"])(g,f,p,!1,null,"f7bdded0",null);w.options.__file="Step2.vue";var b=w.exports,C={name:"forget",data:function(){return{step:1,mobile:"",title:"忘记密码"}},computed:{currentStepComponent:function(){switch(this.step){case 1:return"Step1";case 2:return"Step2"}}},methods:{next:function(t){this.step=t[0],this.mobile=t[1],console.log(this.step),1===this.step?this.title="忘记密码":this.title="重置密码"}},components:{VHeader:a["a"],Step1:u,Step2:b}},_=C,P=Object(d["a"])(_,i,o,!1,null,null,null);P.options.__file="Index.vue";e["default"]=P.exports},"6ddf":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header border-bottom-1px"},[s("a",{staticClass:"go-back",on:{click:t.goBack}},[s("i",{staticClass:"fa fa-angle-left"})]),s("div",{staticClass:"title"},[t._v(t._s(t.title))])])},o=[],a={name:"auth-header",props:{title:{type:String,default:"注册"}},methods:{goBack:function(){window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},r=a,n=s("2877"),c=Object(n["a"])(r,i,o,!1,null,"8ee6d310",null);c.options.__file="header.vue";e["a"]=c.exports},"7cf2":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"successDialog"},[s("div",{staticClass:"dialog"},[s("div",{staticClass:"infoItem d-flex flex-column justify-content-evenly align-items-center"},[s("img",{attrs:{src:"http://temp.im/65x65",alt:""}}),s("p",[t._v(t._s(t.message))])])])])},o=[],a={name:"live_quizDialog",props:{message:{type:String,require:!0}},data:function(){return{}},computed:{},created:function(){},methods:{}},r=a,n=s("2877"),c=Object(n["a"])(r,i,o,!1,null,"1967169c",null);c.options.__file="SuccessDialog.vue";e["a"]=c.exports},a481:function(t,e,s){s("214f")("replace",2,function(t,e,s){return[function(i,o){"use strict";var a=t(this),r=void 0==i?void 0:i[e];return void 0!==r?r.call(i,a,o):s.call(String(a),i,o)},s]})}}]);
//# sourceMappingURL=chunk-272b.0df00dda.js.map