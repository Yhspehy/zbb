(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2852"],{2852:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"setting-index"},[i("router-link",{staticClass:"setting-container item",attrs:{to:{name:"profile_setting_myself"}}},[i("span",[t._v("个人信息")]),i("i",{staticClass:"fa fa-angle-right"})]),i("div",{staticClass:"setting-container"},[i("router-link",{staticClass:"item border-bottom-1px",attrs:{to:{name:"profile_setting_push"}}},[i("span",[t._v("推送通知")]),i("i",{staticClass:"fa fa-angle-right"})]),i("div",{staticClass:"item border-bottom-1px"},[i("span",[t._v("无图模式下(2G/3G/4G)")]),i("i",{staticClass:"fa fa-check",style:{color:t.check.noImgMode?"#07b5ff":""},on:{click:function(s){t.triggerSetting("noImgMode")}}})]),i("div",{staticClass:"item border-bottom-1px"},[i("span",[t._v("WIFI下自动播放")]),i("i",{staticClass:"fa fa-check",style:{color:t.check.autoPlayInWifi?"#07b5ff":""},on:{click:function(s){t.triggerSetting("autoPlayInWifi")}}})]),i("div",{staticClass:"item",on:{click:function(s){t.confirm("<p>清除缓存文件</p><p>89.3MB</p>")}}},[i("span",[t._v("清除缓存")]),t._m(0)])],1),i("div",{staticClass:"setting-container"},[i("router-link",{staticClass:"item border-bottom-1px",attrs:{to:{name:"profile_setting_join"}}},[i("span",[t._v("加入我们")]),i("i",{staticClass:"fa fa-angle-right"})]),i("router-link",{staticClass:"item",attrs:{to:{name:"profile_setting_suggestion"}}},[i("span",[t._v("意见反馈")]),i("i",{staticClass:"fa fa-angle-right"})])],1),i("div",{staticClass:"setting-container"},[i("div",{staticClass:"item border-bottom-1px",on:{click:t.show}},[i("span",[t._v("推荐给好友")]),i("i",{staticClass:"fa fa-angle-right"})]),t._m(1),i("div",{staticClass:"item border-bottom-1px",on:{click:function(s){t.confirm("<p>当前版本:1.0.0</p><p>是否更新至最新版本:2.2.2</p>")}}},[i("span",[t._v("检测新版本")]),i("i",{staticClass:"fa fa-angle-right"})]),i("router-link",{staticClass:"item",attrs:{to:{name:"profile_setting_about"}}},[i("span",[t._v("关于我们")]),i("span",[i("span",[t._v("1.0.0 ")]),i("i",{staticClass:"fa fa-angle-right"})])])],1),i("div",{staticClass:"setting-container quit",on:{click:function(s){t.confirm("是否确认退出？")}}},[t._v("\n        退出当前账号\n    ")]),i("transition",{attrs:{name:"translateY-20"}},[t.chosen.showStats?i("show-dialog",{on:{close:t.close}}):t._e()],1)],1)},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("span",[i("span",[t._v("39.9MB ")]),i("i",{staticClass:"fa fa-angle-right"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"item border-bottom-1px"},[i("span",[t._v("给我们评分鼓励下吧")]),i("i",{staticClass:"fa fa-angle-right"})])}],n=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"liveQuizDialog"},[i("div",{staticClass:"dialog"},[t._m(0),i("button",{staticClass:"cancel",on:{click:t.submit}},[t._v("取消")])])])},o=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"infoItem d-flex flex-column justify-content-between"},[i("div",{staticClass:"title"},[t._v("分享到")]),i("div",{staticClass:"address d-flex justify-content-between"},[i("div",{staticClass:"addr-item"},[i("img",{attrs:{src:"http://temp.im/54x54",alt:""}}),i("p",{staticClass:"route"},[t._v("微信")])]),i("div",{staticClass:"addr-item"},[i("img",{attrs:{src:"http://temp.im/54x54",alt:""}}),i("p",{staticClass:"route"},[t._v("朋友圈")])]),i("div",{staticClass:"addr-item"},[i("img",{attrs:{src:"http://temp.im/54x54",alt:""}}),i("p",{staticClass:"route"},[t._v("QQ")])]),i("div",{staticClass:"addr-item"},[i("img",{attrs:{src:"http://temp.im/54x54",alt:""}}),i("p",{staticClass:"route"},[t._v("微博")])])])])}],c={name:"live_quizDialog",props:{},data:function(){return{}},computed:{},created:function(){},methods:{submit:function(){this.$emit("close")}}},l=c,r=i("2877"),f=Object(r["a"])(l,n,o,!1,null,"58538f01",null);f.options.__file="ShowDialog.vue";var m=f.exports,u={name:"profile_setting_index",components:{showDialog:m},data:function(){return{chosen:{showStats:!1},check:{noImgMode:!1,autoPlayInWifi:!0},birth:"birth"}},created:function(){},mounted:function(){},destroyed:function(){},methods:{triggerSetting:function(t){this.check[t]=!this.check[t]},show:function(){this.chosen.showStats=!0},close:function(){this.chosen.showStats=!1},confirm:function(t){this.$dialog.confirm(t,{html:!0})}}},p=u,d=Object(r["a"])(p,a,e,!1,null,"77370890",null);d.options.__file="SettingIndex.vue";s["default"]=d.exports}}]);
//# sourceMappingURL=2852.84d8c1d0.js.map