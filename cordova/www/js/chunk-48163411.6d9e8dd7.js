(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48163411"],{"4ea9":function(e,t,n){},"9b88":function(e,t,n){"use strict";var o=n("4ea9"),i=n.n(o);i.a},a78e:function(e,t,n){var o,i;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */(function(r){var a=!1;if(o=r,i="function"===typeof o?o.call(t,n,t,e):o,void 0===i||(e.exports=i),a=!0,e.exports=r(),a=!0,!a){var s=window.Cookies,c=window.Cookies=r();c.noConflict=function(){return window.Cookies=s,c}}})(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(n){function o(t,i,r){var a;if("undefined"!==typeof document){if(arguments.length>1){if(r=e({path:"/"},o.defaults,r),"number"===typeof r.expires){var s=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*r.expires),r.expires=s}r.expires=r.expires?r.expires.toUTCString():"";try{a=JSON.stringify(i),/^[\{\[]/.test(a)&&(i=a)}catch(e){}i=n.write?n.write(i,t):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var c="";for(var u in r)r[u]&&(c+="; "+u,!0!==r[u]&&(c+="="+r[u]));return document.cookie=t+"="+i+c}t||(a={});for(var p=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,l=0;l<p.length;l++){var d=p[l].split("="),v=d.slice(1).join("=");this.json||'"'!==v.charAt(0)||(v=v.slice(1,-1));try{var h=d[0].replace(f,decodeURIComponent);if(v=n.read?n.read(v,h):n(v,h)||v.replace(f,decodeURIComponent),this.json)try{v=JSON.parse(v)}catch(e){}if(t===h){a=v;break}t||(a[h]=v)}catch(e){}}return a}}return o.set=o,o.get=function(e){return o.call(o,e)},o.getJSON=function(){return o.apply({json:!0},[].slice.call(arguments))},o.defaults={},o.remove=function(t,n){o(t,"",e(n,{expires:-1}))},o.withConverter=t,o}return t(function(){})})},f820:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",{on:{click:e.aa}},[e._v("This is an about page")]),n("div",{staticClass:"red",attrs:{"data-v-fae5bece":""}},[e._v("33")]),n("div",[e._v(e._s(e.pp))])])},i=[],r=n("a78e"),a=n.n(r),s={name:"about",data:function(){return{isHide:!1,a:11}},created:function(){var e={username:"11",password:22};this.$store.dispatch("user/LoginByUsername",e).then(function(e){console.log(e)}),a.a.set("pp","222")},computed:{pp:function(){return this.$store.getters.pp}},methods:{aa:function(){this.isHide=!0,this.$store.commit("user/SET_USERNAME",this.a),this.a+=11,console.log(this.$store.getters.pp),console.log(a.a.get("pp"))}}},c=s,u=(n("9b88"),n("2877")),p=Object(u["a"])(c,o,i,!1,null,"a9a13daa",null);p.options.__file="About.vue";t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-48163411.6d9e8dd7.js.map