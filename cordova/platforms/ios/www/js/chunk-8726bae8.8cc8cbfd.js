(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8726bae8"],{"27e1":function(t,e,n){},"4afd":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"follow"},[n("index-list",{attrs:{data:t.followObj,isNoMoreData:t.isNoMoreData},on:{onPullingUp:t.onPullingUp,onPullingDown:t.onPullingDown}})],1)},i=[],s=(n("96cf"),n("3040")),a=(n("ac6a"),n("456d"),n("77c6")),l={name:"schedule_follow",components:{IndexList:a["a"]},data:function(){return{followObj:{},pageIndex:1,isNoMoreData:!1}},created:function(){Object.keys(this.$store.state.schedule.popularList).length?this.followObj=this.$store.state.schedule.popularList:this.getPopularList(),console.log(this)},activated:function(){console.log("follow")},methods:{getPopularList:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,o,i=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:this.$moment(),n=i.length>1&&void 0!==i[1]?i[1]:"now",t.next=4,this.$store.dispatch("schedule/GetPopularList",{time:e,type:n});case 4:o=t.sent,this.followObj=o,this.pageIndex++;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),onPullingUp:function(t){var e=t;this.pageIndex<3?this.getPopularList(e,"after"):this.isNoMoreData=!0},onPullingDown:function(t){var e=t;this.getPopularList(e,"before")}}},r=l,u=(n("589d"),n("2877")),c=Object(u["a"])(r,o,i,!1,null,"ed5ad32e",null);c.options.__file="Follow.vue";e["default"]=c.exports},"589d":function(t,e,n){"use strict";var o=n("27e1"),i=n.n(o);i.a}}]);
//# sourceMappingURL=chunk-8726bae8.8cc8cbfd.js.map