(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bce"],{"7f7f":function(t,e,i){var n=i("86cc").f,o=Function.prototype,a=/^\s*function ([^ (]*)/,r="name";r in o||i("9e1e")&&n(o,r,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},c2b4:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-down"}},[i("div",{staticClass:"setting"},[i("header-bar",{attrs:{text:t.text,rightText:t.rightText,rightTextRouteName:"profile_setting_problem",rightTextColor:"#0088ff"}}),i("div",{staticClass:"settingContent"},[i("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[i("router-view")],1)],1)],1)])},o=[],a=(i("7f7f"),i("e5a6")),r=i("2769"),s=i.n(r),u={name:"setting",components:{HeaderBar:a["a"]},data:function(){return{routeList:[{name:"设置",routeName:"profile_setting_index"},{name:"个人信息",routeName:"profile_setting_myself"},{name:"推送",routeName:"profile_setting_push"},{name:"加入我们",routeName:"profile_setting_join"},{name:"意见反馈",routeName:"profile_setting_suggestion"},{name:"常见问题",routeName:"profile_setting_problem"},{name:"系统消息",routeName:"profile_setting_message"},{name:"关于我们",routeName:"profile_setting_about"}],transitionName:""}},computed:{text:function(){var t=this;return s()(this.routeList,function(e){return e.routeName===t.$route.name}).name},rightText:function(){return"意见反馈"===this.text?"常见问题":""}},created:function(){console.log("created")},beforeRouteUpdate:function(t,e,i){console.log(this.$store.state.profile.transition),this.$store.state.profile.transition?this.transitionName="slide-left":(this.transitionName="",this.$store.commit("profile/SET_TRANSITION",!0)),i()},watch:{$route:function(){}}},l=u,c=i("2877"),f=Object(c["a"])(l,n,o,!1,null,"779246d2",null);f.options.__file="Setting.vue";e["default"]=f.exports},e5a6:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"headerBar",style:{padding:t.padding}},[i("i",{staticClass:"fas fa-chevron-left",on:{click:t.goBack}}),i("span",{staticClass:"text"},[t._v(t._s(t.text))]),t.rightText?i("router-link",{staticClass:"rightText",style:{color:t.rightTextColor},attrs:{to:{name:t.rightTextRouteName}}},[t._v("\n        "+t._s(t.rightText)+"\n    ")]):t._e(),t.share?i("span",{staticClass:"rightText share"},[i("i",{staticClass:"fas fa-share-square"})]):t._e()],1)},o=[],a=(i("cadf"),i("551c"),i("097d"),{name:"c_HeaderBar",props:{text:{type:String,default:""},goBackRouteName:{type:String},rightText:{type:String},rightTextRouteName:{type:String,default:"home"},padding:{type:String,default:"3.467vw 4.667vw"},rightTextColor:{type:String,default:"#f5303d"},share:{type:Boolean,default:!1}},data:function(){return{}},created:function(){this.rightText&&"home"===this.rightTextRouteName&&console.warn("please pass a vaule to rightTextRouteName field or it will jump to home. If you just want to jump to home, please igrone this")},mounted:function(){this.$el.addEventListener("touchmove",this.scroll)},beforeDestroy:function(){this.$el.removeEventListener("touchmove",this.scroll)},methods:{goBack:function(){if(this.goBackRouteName)return this.$router.push({name:this.goBackRouteName}),!1;this.$router.back()},scroll:function(t){t.preventDefault()}}}),r=a,s=i("2877"),u=Object(s["a"])(r,n,o,!1,null,"7a653102",null);u.options.__file="HeaderBar.vue";e["a"]=u.exports}}]);
//# sourceMappingURL=chunk-4bce.b30dc5ad.js.map