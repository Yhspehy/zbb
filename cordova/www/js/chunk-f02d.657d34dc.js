(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f02d"],{5200:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"topNav",class:{fixed:e.positionFixed},style:{padding:e.padding,top:e.top}},e._l(e.navList,function(t){return n("router-link",{key:t.routeName,staticClass:"navItem",class:{navActive:e.ChosenNav===t.routeName},style:{"font-size":e.ChosenNav===t.routeName?e.activeFontSize:e.normalFontSize},attrs:{to:{name:t.routeName},replace:e.replace},nativeOn:{click:function(n){e.clickNav(t.routeName)}}},[e._v("\n         "+e._s(t.name)+"\n    ")])}))},i=[],o={name:"c_TopNav",props:{navList:{type:Array,require:!0},chosenNav:{type:String,require:!0},padding:{type:String,default:"4.267vw 27.2vw 2.667vw"},positionFixed:{type:Boolean,default:!0},top:{type:String,default:"0"},normalFontSize:{type:String,default:"4vw"},activeFontSize:{type:String,default:"4.8vw"},replace:{type:Boolean,default:!1}},data:function(){return{ChosenNav:this.chosenNav}},methods:{clickNav:function(e){this.ChosenNav=e,this.$emit("chosenNav",e)}},watch:{chosenNav:function(e){this.ChosenNav=e}}},s=o,r=n("2877"),v=Object(r["a"])(s,a,i,!1,null,"8c54e348",null);v.options.__file="TopNav.vue";t["a"]=v.exports},"7f7f":function(e,t,n){var a=n("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,s="name";s in i||n("9e1e")&&a(i,s,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},9888:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"live"},[n("div",{staticClass:"liveNavContent"},[n("top-nav",{attrs:{navList:e.navList[e.status],chosenNav:e.chosenNav,positionFixed:!1,normalFontSize:"3.73vw",activeFontSize:"4vw",padding:"2vw 5.2vw 3.5vw"},on:{chosenNav:e.chooseNav}}),n("router-view")],1)])},i=[],o=(n("7f7f"),n("5200")),s=n("2769"),r=n.n(s),v={name:"live",components:{topNav:o["a"]},data:function(){return{width:window.screen.width,status:2,chosenNav:"",firstNavType:[{name:"直播室",routeName:"live_liveRoom"},{name:"聊天室",routeName:"live_chatRoom"},{name:"资讯",routeName:"live_news"},{name:"数据",routeName:"live_stats"},{name:"竞猜",routeName:"live_quiz"}],secondNavType:[{name:"回顾",routeName:"live_review"},{name:"赛况",routeName:"live_liveRoom"},{name:"热议",routeName:"live_hotComments"},{name:"数据",routeName:"live_stats"},{name:"竞猜",routeName:"live_quiz"}]}},computed:{navList:function(){return{0:this.firstNavType,1:this.firstNavType,2:this.secondNavType}}},created:function(){var e=this;this.status<2?"live"===this.$route.name?(this.$router.push({name:"live_liveRoom"}),this.chosenNav="live_liveRoom"):this.chosenNav=r()(this.firstNavType,function(t){return t.routeName===e.$route.name}).routeName:"live"===this.$route.name?(this.$router.push({name:"live_review"}),this.chosenNav="live_review"):this.chosenNav=r()(this.secondNavType,function(t){return t.routeName===e.$route.name}).routeName},mounted:function(){},methods:{chooseNav:function(e){this.chosenNav=e}},watch:{"$route.name":{immediate:!0,handler:function(e){var t=r()(this.navList[this.status],function(t){return e===t.routeName});t&&t.name&&(this.chosenNav=t.routeName,this.$store.commit("schedule/SET_CHOSENNAV",t.routeName))}}}},u=v,c=n("2877"),m=Object(c["a"])(u,a,i,!1,null,"b3ec94cc",null);m.options.__file="Index.vue";t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-f02d.657d34dc.js.map