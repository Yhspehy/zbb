(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18e99a46"],{"11e9":function(t,e,s){var i=s("52a7"),n=s("4630"),o=s("6821"),r=s("6a99"),a=s("69a8"),c=s("c69a"),u=Object.getOwnPropertyDescriptor;e.f=s("9e1e")?u:function(t,e){if(t=o(t),e=r(e,!0),c)try{return u(t,e)}catch(t){}if(a(t,e))return n(!i.f.call(t,e),t[e])}},1924:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"recommend"}},[s("div",{staticClass:"refresh"},[s("div",{staticClass:"refreshText"},[t._v(t._s(t.refreshText))])]),s("div",{staticClass:"recommend",class:{refreshOver:t.isRefreshOver}},[s("slide",{staticClass:"swiper",attrs:{length:t.swiperList.length,eventPassthrough:"vertical"}},t._l(t.swiperList,function(e,i){return s("div",{key:i,staticClass:"swiperItem"},[s("div",{staticClass:"item-link"},[s("img",{attrs:{src:e.imgUrl}}),s("div",{staticClass:"tip"},[s("span",{staticClass:"title"},[t._v(t._s(e.title))]),s("span",{staticClass:"page"},[t._v(t._s(i+1)+" / "+t._s(t.swiperList.length))])])])])})),t._m(0),t._l(t.zones,function(e){return s("div",{key:e.id,staticClass:"zone"},[s("div",{staticClass:"zoneHeader"},[s("span",{staticClass:"zoneName"},[t._v(t._s(e.name)+"专区")]),s("span",{staticClass:"zonePoster"},[t._v(" | "+t._s(e.poster))])]),s("div",{staticClass:"zoneTitle"},[t._v(t._s(e.title))]),e.img.length?s("img",{staticClass:"zoneImg",attrs:{src:e.img[0]}}):t._e(),s("div",{staticClass:"zoneComment"},[t._v(t._s(e.comment))]),s("div",{staticClass:"zoneFooter"},[s("span",{staticClass:"zoneUpdateTime"},[t._v(t._s(e.update_time))]),s("span",{staticClass:"zoneVoteComment"},[s("span",{staticClass:"zoneVoteCount",style:{color:e.isVote?"#f5303d":"#b3b3b3"},on:{click:function(s){t.vote(e)}}},[s("i",{staticClass:"far fa-thumbs-up"}),s("span",{staticClass:"voteCount"},[t._v(t._s(e.vote_count))])]),s("svg",{staticClass:"svg-inline",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[s("path",{attrs:{fill:"currentColor",d:"M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM128 184c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"}})])])])])}),s("button",{staticClass:"postTitle",on:{click:t.postTitle}},[s("i",{staticClass:"fas fa-pen"}),s("span",[t._v("我要发帖")])])],2)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"circle"},[s("div",[t._v("我的圈子")]),s("div")])}],o=(s("ac6a"),s("3695")),r=s("a6d8"),a=s("ed08"),c=null,u={name:"community_recommend",components:{slide:o["a"]},data:function(){return{swiperList:[],zones:[],status:{value:0},refreshText:"pull to refresh",isRefreshOver:!0}},created:function(){this.getFocus(),this.getList()},mounted:function(){this.refresh()},beforeDestroy:function(){c.destroy()},methods:{refresh:function(){c=Object(a["d"])({parent:"#recommend",el:".recommend",re:".refresh",status:this.status}),c.init(),this.isScroll=c.isScroll},getData:function(){setTimeout(function(){var t=document.querySelector(".recommend"),e=document.querySelector(".refresh");t.style["transition"]="transform 0.6s ease",t.style["transform"]="translate(0, 0px)",e.style.opacity=0,e.style.height="3vw"},1e3)},getFocus:function(){var t=this;Object(r["c"])().then(function(e){t.swiperList=e.data.data})},getList:function(){var t=this;Object(r["b"])().then(function(e){var s=e.data.data;s.forEach(function(e){e.update_time=t.$moment(e.update_time).fromNow()}),t.zones=s})},vote:function(t){t.isVote?(t.vote_count--,t.isVote=!1):(t.vote_count++,t.isVote=!0)},postTitle:function(){}},watch:{"status.value":function(t){switch(t){case 0:return void(this.refreshText="pull to refresh");case 1:return void(this.refreshText="release to refresh");case 2:return this.refreshText="refreshing",void this.getData()}}}},l=u,f=(s("9813"),s("2877")),d=Object(f["a"])(l,i,n,!1,null,"6c2affb9",null);d.options.__file="Recommend.vue";e["default"]=d.exports},3695:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"slide",staticClass:"slide"},[s("div",{ref:"slideGroup",staticClass:"slide-group"},[t._t("default")],2),t.showDot?s("div",{staticClass:"dots"},t._l(t.dots,function(e,i){return s("span",{key:i,staticClass:"dot",class:{active:t.currentPageIndex===i}})})):t._e()])},n=[],o=(s("c5f6"),s("1fba")),r={name:"c_slide",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3},showDot:{type:Boolean,default:!0},click:{type:Boolean,default:!0},threshold:{type:Number,default:.3},speed:{type:Number,default:400},eventPassthrough:{type:String,default:""},length:{type:Number,require:!0}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){this.update()},activated:function(){this.slide&&(this.slide.enabled||this.slide.enable())},deactivated:function(){this.slide&&(this.slide.disable(),this.timer&&clearTimeout(this.timer))},beforeDestroy:function(){this.slide&&(this.slide.destroy(),this.timer&&clearTimeout(this.timer))},methods:{update:function(){var t=this;this.slide&&this.slide.destroy(),this.initTimer=setTimeout(function(){t.$nextTick(function(){t.init()})},20)},refresh:function(){this.slide.refresh()},prev:function(){this.slide.prev()},next:function(){this.slide.next()},init:function(){this.currentPageIndex=0,this.showDot&&this._initDots(),this._initSlide()},_initSlide:function(){var t=this;if(this.loop){var e=this.$refs.slide.clientWidth;this.$refs.slideGroup.style.width=(this.length+2)*e+"px"}this.slide=new o["a"](this.$refs.slide,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:this.threshold,speed:this.speed},bounce:!1,eventPassthrough:this.eventPassthrough,click:this.click}),this.slide.on("scrollEnd",this._onScrollEnd),this.slide.on("touchEnd",function(){t.autoPlay&&t._play()}),this.slide.on("beforeScrollStart",function(){(t.autoPlay||t.timer)&&clearTimeout(t.timer)}),this.autoPlay&&this._play()},_onScrollEnd:function(){var t=this.slide.getCurrentPage().pageX;this.currentPageIndex=t,this.autoPlay&&this._play()},_initDots:function(){this.dots=new Array(this.length)},_play:function(){var t=this;this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){t.slide.next()},this.interval)}},watch:{loop:function(){this.update()},autoPlay:function(){this.update()},speed:function(){this.update()},threshold:function(){this.update()}}},a=r,c=(s("75ce"),s("2877")),u=Object(c["a"])(a,i,n,!1,null,"3ba825ae",null);u.options.__file="Slide.vue";e["a"]=u.exports},"5dbc":function(t,e,s){var i=s("d3f4"),n=s("8b97").set;t.exports=function(t,e,s){var o,r=e.constructor;return r!==s&&"function"==typeof r&&(o=r.prototype)!==s.prototype&&i(o)&&n&&n(t,o),t}},7002:function(t,e,s){},"75ce":function(t,e,s){"use strict";var i=s("7002"),n=s.n(i);n.a},"8b97":function(t,e,s){var i=s("d3f4"),n=s("cb7c"),o=function(t,e){if(n(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=s("9b43")(Function.call,s("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,s){return o(t,s),e?t.__proto__=s:i(t,s),t}}({},!1):void 0),check:o}},9093:function(t,e,s){var i=s("ce10"),n=s("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,n)}},9813:function(t,e,s){"use strict";var i=s("c22f"),n=s.n(i);n.a},a6d8:function(t,e,s){"use strict";s.d(e,"c",function(){return n}),s.d(e,"b",function(){return o}),s.d(e,"a",function(){return r});var i=s("9d2b");function n(){return Object(i["a"])("/mock/community/recommend/swiper")}function o(){return Object(i["a"])("/mock/community/recommend/list")}function r(){return Object(i["a"])("/mock/community/circle/all")}},aa77:function(t,e,s){var i=s("5ca1"),n=s("be13"),o=s("79e5"),r=s("fdef"),a="["+r+"]",c="​",u=RegExp("^"+a+a+"*"),l=RegExp(a+a+"*$"),f=function(t,e,s){var n={},a=o(function(){return!!r[t]()||c[t]()!=c}),u=n[t]=a?e(d):r[t];s&&(n[s]=u),i(i.P+i.F*a,"String",n)},d=f.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},ac6a:function(t,e,s){for(var i=s("cadf"),n=s("0d58"),o=s("2aba"),r=s("7726"),a=s("32e9"),c=s("84f2"),u=s("2b4c"),l=u("iterator"),f=u("toStringTag"),d=c.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=n(h),m=0;m<p.length;m++){var v,y=p[m],_=h[y],g=r[y],b=g&&g.prototype;if(b&&(b[l]||a(b,l,d),b[f]||a(b,f,y),c[y]=d,_))for(v in i)b[v]||o(b,v,i[v],!0)}},c22f:function(t,e,s){},c5f6:function(t,e,s){"use strict";var i=s("7726"),n=s("69a8"),o=s("2d95"),r=s("5dbc"),a=s("6a99"),c=s("79e5"),u=s("9093").f,l=s("11e9").f,f=s("86cc").f,d=s("aa77").trim,h="Number",p=i[h],m=p,v=p.prototype,y=o(s("2aeb")(v))==h,_="trim"in String.prototype,g=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():d(e,3);var s,i,n,o=e.charCodeAt(0);if(43===o||45===o){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+e}for(var r,c=e.slice(2),u=0,l=c.length;u<l;u++)if(r=c.charCodeAt(u),r<48||r>n)return NaN;return parseInt(c,i)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof p&&(y?c(function(){v.valueOf.call(s)}):o(s)!=h)?r(new m(g(e)),s,p):g(e)};for(var b,C=s("9e1e")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;C.length>L;L++)n(m,b=C[L])&&!n(p,b)&&f(p,b,l(m,b));p.prototype=v,v.constructor=p,s("2aba")(i,h,p)}},ed08:function(t,e,s){"use strict";function i(t){var e=document.querySelector(t),s=document.createElement("textarea");return s.value=e.textContent,s.style.position="fixed",s.style.top="-1000px",document.body.appendChild(s),s.select(),document.execCommand("Copy"),s.remove(),!0}s.d(e,"c",function(){return i}),s.d(e,"a",function(){return r}),s.d(e,"b",function(){return a}),s.d(e,"d",function(){return l});var n=-1,o=null;function r(t){o||(o=t),document.addEventListener("touchstart",c),document.addEventListener("touchend",u)}function a(){document.removeEventListener("touchstart",c),document.removeEventListener("touchend",u)}function c(t){console.log("touchstart"),n=t.pageX<34?t.pageX:-1}function u(t){if(n>-1&&t.pageX<0){console.log("touchend");var e=window.screen.width,s=e+t.pageX-n-16;s>e/2&&o.$store.commit("profile/SET_TRANSITION",!1)}}function l(t){var e=document.querySelector(t.parent),s=document.querySelector(t.el),i=document.querySelector(t.re),n=i.offsetHeight,o=t.refreshHeight||60,r=t.bottom||window.screen.width/50,a=0,c=0,u=!1;function l(){s.style["transition"]="transform 0s"}function f(){u=document.body.scrollTop<0,document.body.scrollTop<0&&(a=-document.body.scrollTop),u?(i.style.opacity=a>=i.offsetHeight?1:a/i.offsetHeight,c||(c=e.offsetTop,e.style.position="fixed",e.style.top=c+"px"),a>n-r&&(i.style.height=a+r+"px"),s.style["transform"]="translate(0, "+a+"px)",a>o&&(t.status.value=1)):(a=0,i.style.opacity=0,c=0,e.style.position="",e.style.top="",u=!1,t.status.value=0)}function d(){u&&(a>o?t.status.value=2:(i.style.opacity=0,s.style["transition"]="transform 0.6s ease",s.style["transform"]="translate(0, 0px)"),window.scrollTo(0,0),a=0,c=0,e.style.position="",e.style.top="",u=!1)}function h(){s.addEventListener("touchstart",l),s.addEventListener("touchmove",f),s.addEventListener("touchend",d)}function p(){s.removeEventListener("touchstart",l),s.removeEventListener("touchmove",f),s.removeEventListener("touchend",d)}return{isScroll:u,init:h,destroy:p}}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-18e99a46.cab8bc6c.js.map