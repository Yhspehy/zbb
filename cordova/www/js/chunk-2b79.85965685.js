(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b79"],{"31cf":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"activity"}},[s("div",{staticClass:"refresh"},[s("div",{staticClass:"refreshText"},[t._v(t._s(t.refreshText))])]),t.zones.length?s("div",{staticClass:"activity",class:{refreshOver:t.isRefreshOver}},t._l(t.zones,function(e){return s("div",{key:e.id,staticClass:"zone"},[s("div",{staticClass:"zoneHeader"},[s("span",{staticClass:"zoneName"},[t._v(t._s(e.name)+"专区")]),s("span",{staticClass:"zonePoster"},[t._v(" | "+t._s(e.poster))])]),s("div",{staticClass:"zoneTitle"},[t._v(t._s(e.title))]),e.img.length?s("img",{staticClass:"zoneImg",attrs:{src:e.img[0]}}):t._e(),s("div",{staticClass:"zoneComment"},[t._v(t._s(e.comment))]),s("div",{staticClass:"zoneFooter"},[s("span",{staticClass:"zoneUpdateTime"},[t._v(t._s(e.update_time))]),s("span",{staticClass:"zoneVoteComment"},[s("span",{staticClass:"zoneVoteCount",style:{color:e.isVote?"#f5303d":"#b3b3b3"},on:{click:function(s){t.vote(e)}}},[s("i",{staticClass:"far fa-thumbs-up"}),s("span",{staticClass:"voteCount"},[t._v(t._s(e.vote_count))])]),s("svg",{staticClass:"svg-inline",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[s("path",{attrs:{fill:"currentColor",d:"M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM128 184c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"}})])])])])})):s("div",[t._v("暂无活动，敬请期待")])])},o=[],i=(s("ac6a"),s("a6d8")),r=s("ed08"),c=null,a={name:"community_activity",components:{},data:function(){return{zones:[],status:{value:0},refreshText:"pull to refresh",isRefreshOver:!0}},created:function(){this.getList()},mounted:function(){var t=this;setTimeout(function(){t.zones.length&&t.refresh()},20)},beforeDestroy:function(){this.zones.length&&c.destroy()},methods:{refresh:function(){c=Object(r["d"])({parent:"#activity",el:".activity",re:".refresh",status:this.status}),c.init(),this.isScroll=c.isScroll},getData:function(){setTimeout(function(){var t=document.querySelector(".activity"),e=document.querySelector(".refresh");t.style["transition"]="transform 0.6s ease",t.style["transform"]="translate(0, 0px)",e.style.opacity=0,e.style.height="3vw"},1e3)},getList:function(){var t=this;Object(i["b"])().then(function(e){var s=e.data.data;s.forEach(function(e){e.update_time=t.$moment(e.update_time).fromNow()}),t.zones=s})},vote:function(t){t.isVote?(t.vote_count--,t.isVote=!1):(t.vote_count++,t.isVote=!0)}},watch:{"status.value":function(t){switch(t){case 0:return void(this.refreshText="pull to refresh");case 1:return void(this.refreshText="release to refresh");case 2:return this.refreshText="refreshing",void this.getData()}}}},u=a,l=s("2877"),d=Object(l["a"])(u,n,o,!1,null,"d1d91c76",null);d.options.__file="Activity.vue";e["default"]=d.exports},a6d8:function(t,e,s){"use strict";s.d(e,"c",function(){return o}),s.d(e,"b",function(){return i}),s.d(e,"a",function(){return r});var n=s("9d2b");function o(){return Object(n["a"])("/mock/community/recommend/swiper")}function i(){return Object(n["a"])("/mock/community/recommend/list")}function r(){return Object(n["a"])("/mock/community/circle/all")}},ac6a:function(t,e,s){for(var n=s("cadf"),o=s("0d58"),i=s("2aba"),r=s("7726"),c=s("32e9"),a=s("84f2"),u=s("2b4c"),l=u("iterator"),d=u("toStringTag"),f=a.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(m),h=0;h<v.length;h++){var p,y=v[h],L=m[y],g=r[y],C=g&&g.prototype;if(C&&(C[l]||c(C,l,f),C[d]||c(C,d,y),a[y]=f,L))for(p in n)C[p]||i(C,p,n[p],!0)}},ed08:function(t,e,s){"use strict";function n(t){var e=document.querySelector(t),s=document.createElement("textarea");return s.value=e.textContent,s.style.position="fixed",s.style.top="-1000px",document.body.appendChild(s),s.select(),document.execCommand("Copy"),s.remove(),!0}s.d(e,"c",function(){return n}),s.d(e,"a",function(){return r}),s.d(e,"b",function(){return c}),s.d(e,"d",function(){return l});var o=-1,i=null;function r(t){i||(i=t),document.addEventListener("touchstart",a),document.addEventListener("touchend",u)}function c(){document.removeEventListener("touchstart",a),document.removeEventListener("touchend",u)}function a(t){console.log("touchstart"),o=t.pageX<34?t.pageX:-1}function u(t){if(o>-1&&t.pageX<0){console.log("touchend");var e=window.screen.width,s=e+t.pageX-o-16;s>e/2&&i.$store.commit("profile/SET_TRANSITION",!1)}}function l(t){var e=document.querySelector(t.parent),s=document.querySelector(t.el),n=document.querySelector(t.re),o=n.offsetHeight,i=t.refreshHeight||60,r=t.bottom||window.screen.width/50,c=0,a=0,u=!1;function l(){s.style["transition"]="transform 0s"}function d(){u=document.body.scrollTop<0,document.body.scrollTop<0&&(c=-document.body.scrollTop),u?(n.style.opacity=c>=n.offsetHeight?1:c/n.offsetHeight,a||(a=e.offsetTop,e.style.position="fixed",e.style.top=a+"px"),c>o-r&&(n.style.height=c+r+"px"),s.style["transform"]="translate(0, "+c+"px)",c>i&&(t.status.value=1)):(c=0,n.style.opacity=0,a=0,e.style.position="",e.style.top="",u=!1,t.status.value=0)}function f(){u&&(c>i?t.status.value=2:(n.style.opacity=0,s.style["transition"]="transform 0.6s ease",s.style["transform"]="translate(0, 0px)"),window.scrollTo(0,0),c=0,a=0,e.style.position="",e.style.top="",u=!1)}function m(){s.addEventListener("touchstart",l),s.addEventListener("touchmove",d),s.addEventListener("touchend",f)}function v(){s.removeEventListener("touchstart",l),s.removeEventListener("touchmove",d),s.removeEventListener("touchend",f)}return{isScroll:u,init:m,destroy:v}}}}]);
//# sourceMappingURL=chunk-2b79.85965685.js.map