(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-031e3c18"],{"07a3":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",{staticClass:"footer"},e._l(e.navList,function(t){return o("router-link",{key:t.name,class:{active:t.routePath===e.$store.state.home.homeFooter},attrs:{to:t.routePath}},[o("i",{staticClass:"fa",class:t.icon}),o("span",[e._v(e._s(t.name))])])}))},a=[],s=(o("cadf"),o("551c"),o("097d"),{name:"Footer",data:function(){return{navList:[{name:"首页",routePath:"/home",icon:"fa-home"},{name:"赛程",routePath:"/schedule",icon:"fa-calendar"},{name:"社区",routePath:"/community",icon:"fa-comments"},{name:"我的",routePath:"/profile",icon:"fa-user-circle"}]}},created:function(){this.$store.state.home.homeFooter||this.setHomeFooter()},activated:function(){console.log("footer active"),this.setHomeFooter()},mounted:function(){this.$el.addEventListener("touchmove",function(e){return e.preventDefault()})},beforeDestroy:function(){this.$el.removeEventListener("touchmove",function(e){return e.preventDefault()})},methods:{setHomeFooter:function(){this.$store.commit("home/SET_HOMEFOOTER","/schedule/league/:league_id"===this.$route.matched[0].path?"/schedule":this.$route.matched[0].path)}}}),c=s,i=(o("6a25"),o("2877")),r=Object(i["a"])(c,n,a,!1,null,"00802b78",null);r.options.__file="TheFooter.vue";t["a"]=r.exports},"1f90":function(e,t,o){"use strict";var n=o("3cfa"),a=o.n(n);a.a},"1fff":function(e,t,o){},2172:function(e,t,o){"use strict";var n=o("1fff"),a=o.n(n);a.a},"3cfa":function(e,t,o){},5200:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"topNav",class:{fixed:e.positionFixed},style:{padding:e.padding,top:e.top}},e._l(e.navList,function(t){return o("router-link",{key:t.routeName,staticClass:"navItem",class:{navActive:e.ChosenNav===t.routeName},style:{"font-size":e.ChosenNav===t.routeName?e.activeFontSize:e.normalFontSize},attrs:{to:{name:t.routeName},replace:e.replace},nativeOn:{click:function(o){e.clickNav(t.routeName)}}},[e._v("\n         "+e._s(t.name)+"\n    ")])}))},a=[],s=(o("cadf"),o("551c"),o("097d"),{name:"c_TopNav",props:{navList:{type:Array,require:!0},chosenNav:{type:String,require:!0},padding:{type:String,default:"4.267vw 27.2vw 2.667vw"},positionFixed:{type:Boolean,default:!0},top:{type:String,default:"0"},normalFontSize:{type:String,default:"4vw"},activeFontSize:{type:String,default:"4.8vw"},replace:{type:Boolean,default:!1}},data:function(){return{ChosenNav:this.chosenNav}},methods:{clickNav:function(e){this.ChosenNav=e,this.$emit("chosenNav",e)}},mounted:function(){this.$el.addEventListener("touchmove",function(e){return e.preventDefault()})},beforeDestroy:function(){this.$el.removeEventListener("touchmove",function(e){return e.preventDefault()})},watch:{chosenNav:function(e){this.ChosenNav=e}}}),c=s,i=(o("1f90"),o("2877")),r=Object(i["a"])(c,n,a,!1,null,"5a0ad00c",null);r.options.__file="TopNav.vue";t["a"]=r.exports},"6a25":function(e,t,o){"use strict";var n=o("c087"),a=o.n(n);a.a},c087:function(e,t,o){},c219:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"schedule",style:{height:"schedule_match"===e.chosenNav?"auto":"100%"}},[o("top-nav",{attrs:{navList:e.navList,chosenNav:e.chosenNav},on:{chosenNav:e.chooseNav}}),o("div",{staticClass:"scheduleContent theFooterPaddingBottom"},[o("keep-alive",[o("router-view")],1)],1),o("v-footer")],1)},a=[],s=o("2769"),c=o.n(s),i=o("5200"),r=o("07a3"),u={name:"schedule",components:{topNav:i["a"],vFooter:r["a"]},data:function(){return{chosenNav:"",navList:[{name:"赛事",routeName:"schedule_match"},{name:"热门",routeName:"schedule_popular"},{name:"关注",routeName:"schedule_follow"}]}},created:function(){console.log("schedule created")},activated:function(){console.log("schedule activated")},mounted:function(){},methods:{chooseNav:function(e){this.chosenNav=e,this.$store.commit("schedule/SET_CHOSENNAV",e)}},watch:{"$route.name":{immediate:!0,handler:function(e){if("schedule"===e)this.chosenNav=this.$store.state.schedule.chosenNav,this.$router.push({name:this.chosenNav});else{var t=c()(this.navList,function(t){return e===t.routeName});t&&t.routeName&&t.routeName!==this.chosenNav&&this.chooseNav(t.routeName)}}}}},h=u,l=(o("2172"),o("2877")),v=Object(l["a"])(h,n,a,!1,null,"c3eac3ea",null);v.options.__file="Index.vue";t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-031e3c18.0f3029e5.js.map