(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b53ed0f4"],{"005b":function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"a",function(){return r}),n.d(e,"e",function(){return c}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return s});var a=n("9d2b");function i(t){return Object(a["a"])("/mock/live/review/".concat(t))}function r(t){return Object(a["a"])("/mock/live/hotComments/".concat(t))}function c(t){return Object(a["a"])("/mock/live/stats/".concat(t))}function o(t){return Object(a["a"])("/mock/live/liveRoom/".concat(t))}function s(t){return Object(a["a"])("/mock/live/quizList/".concat(t))}},"13ee":function(t,e,n){"use strict";var a=n("1a88"),i=n.n(a);i.a},"1a88":function(t,e,n){},ac6a:function(t,e,n){for(var a=n("cadf"),i=n("0d58"),r=n("2aba"),c=n("7726"),o=n("32e9"),s=n("84f2"),u=n("2b4c"),l=u("iterator"),f=u("toStringTag"),d=s.Array,L={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(L),m=0;m<v.length;m++){var b,S=v[m],h=L[S],p=c[S],g=p&&p.prototype;if(g&&(g[l]||o(g,l,d),g[f]||o(g,f,S),s[S]=d,h))for(b in a)g[b]||r(g,b,a[b],!0)}},bc8e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"live_liveRoom"},t._l(t.allData.data,function(e,a){return n("div",{key:a,staticClass:"item"},[n("div",{staticClass:"circle border-left-1px",style:{background:e.color}}),n("div",{staticClass:"main"},[n("div",{staticClass:"user"},[t._v(t._s(e.user))]),n("div",{staticClass:"content"},[t._v(t._s(e.content))])])])}))},i=[],r=(n("ac6a"),n("96cf"),n("3040")),c=n("005b"),o={name:"live_liveRoom",data:function(){return{allData:{},colorList:["#ffbb00","#f3091a","#0088ff"]}},created:function(){this.getData()},methods:{getData:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,t.next=3,Object(c["b"])(1);case 3:n=t.sent,n.data.data.forEach(function(t){t.color=e.colorList[Math.floor(2.99*Math.random())]}),this.allData=n.data;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},s=o,u=(n("13ee"),n("2877")),l=Object(u["a"])(s,a,i,!1,null,"2a1cd9aa",null);l.options.__file="LiveRoom.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-b53ed0f4.73fa5cab.js.map