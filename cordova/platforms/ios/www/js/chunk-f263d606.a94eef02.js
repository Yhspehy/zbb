(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f263d606"],{"005b":function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"a",function(){return s}),n.d(e,"e",function(){return r}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return u});var i=n("9d2b");function a(t){return Object(i["a"])("/mock/live/review/".concat(t))}function s(t){return Object(i["a"])("/mock/live/hotComments/".concat(t))}function r(t){return Object(i["a"])("/mock/live/stats/".concat(t))}function c(t){return Object(i["a"])("/mock/live/liveRoom/".concat(t))}function u(t){return Object(i["a"])("/mock/live/quizList/".concat(t))}},"0975":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"liveQuiz"},[n("header",t._l(t.headerList,function(e){return n("div",{key:e},[t._v("\n            "+t._s(e)+"\n        ")])})),n("cut-off-line"),n("section",t._l(t.list,function(e){return n("div",{key:e.quiz_id,staticClass:"quizItem"},[n("div",{staticClass:"quizTitle"},[n("span",{staticClass:"quizStatus",style:{background:"已封盘"===e.status?"#b3b3b3":"#fdc72f"}},[t._v(t._s(e.status))]),n("span",[t._v(t._s(e.title))])]),n("div",{staticClass:"quizInfo"},[n("span",{staticClass:"quizTotal"},[t._v("当前投注总额："+t._s(e.quiz_total)+" ")]),n("span",{staticClass:"quizRestTime"},[t._v("剩余时间："+t._s(e.rest_time))])]),t._l(e.options,function(i){return n("div",{key:i.option_id,staticClass:"quizOption border-1px",on:{click:function(n){t.quizClick(e.quiz_id,i)}}},[n("div",{staticClass:"fl"},[t._v(t._s(i.text))]),n("div",{staticClass:"fr quizOdds"},[t._v(t._s(i.quiz_odds)+"倍")]),n("div",{staticClass:"fr quizPercent"},[t._v(t._s(i.quiz_percent)+"%投注")])])})],2)})),n("transition",{attrs:{name:"translateY-20"}},[n("quiz-dialog",{directives:[{name:"show",rawName:"v-show",value:t.chosen.quiz_id,expression:"chosen.quiz_id"}],attrs:{quiz_id:t.chosen.quiz_id,option:t.chosen.option},on:{close:t.close}})],1)],1)},a=[],s=(n("96cf"),n("3040")),r=n("005b"),c=n("be35"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"liveQuizDialog"},[n("div",{staticClass:"dialog"},[n("div",{staticClass:"infoItem"},[n("span",{staticClass:"infoItemLeft"},[t._v("我的G币："),n("span",{staticClass:"red"},[t._v(t._s(t.myG))])]),n("span",{staticClass:"infoItemRight"},[t._v("竞猜："),n("span",{staticClass:"blue"},[t._v(t._s(t.option.text))])])]),n("div",{staticClass:"infoItem"},[n("span",{staticClass:"infoItemLeft"},[t._v("赔率："+t._s(t.option.quiz_percent)+"倍")]),n("span",{staticClass:"infoItemRight"},[t._v("预计获得："),n("span",{staticClass:"red"},[t._v(t._s(t.earnExpected))])])]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.inputValue,expression:"inputValue",modifiers:{number:!0}}],staticClass:"inputValue",style:{"padding-left":t.inputValue?"":"25vw","text-align":t.inputValue?"center":""},attrs:{type:"number",placeholder:"请输入G币数量"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),n("div",{staticClass:"valueList"},t._l(t.valueList,function(e){return n("div",{key:e,staticClass:"valueItem",on:{click:function(n){t.chooseValue(e)}}},[t._v("\n                "+t._s(e)+"\n            ")])})),n("button",{staticClass:"submit",on:{click:t.submit}},[t._v("投注")])])])},o=[],l=(n("c5f6"),{name:"live_quizDialog",props:{quiz_id:{type:[String,Number],require:!0},option:{type:Object,require:!0}},data:function(){return{myG:8320,inputValue:"",value:0,valueList:[10,100,1e3,1e4,"全部"]}},computed:{earnExpected:function(){return this.inputValue?this.inputValue*this.option.quiz_percent:this.value?this.value*this.option.quiz_percent:0}},created:function(){},methods:{chooseValue:function(t){this.value="全部"==t?this.myG:t},submit:function(){if(!this.earnExpected)return alert("请选择竞猜金额"),!1;this.$emit("close")}},watch:{inputValue:function(t){t>=this.myG&&(this.inputValue=this.myG)}}}),f=l,p=(n("61fd"),n("2877")),d=Object(p["a"])(f,u,o,!1,null,"c9528abe",null);d.options.__file="QuizDialog.vue";var v=d.exports,_={name:"live_quiz",components:{cutOffLine:c["a"],quizDialog:v},data:function(){return{headerList:["我的竞猜","G币抽奖","G币兑换","获取G币"],list:[],chosen:{quiz_id:"",option:{}}}},created:function(){this.getData()},methods:{getData:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["c"])(1);case 2:e=t.sent,this.list=e.data.data;case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),quizClick:function(t,e){this.chosen.quiz_id=t,this.chosen.option=e},close:function(){this.chosen.quiz_id=""}}},h=_,m=(n("7075"),Object(p["a"])(h,i,a,!1,null,"0d198534",null));m.options.__file="Quiz.vue";e["default"]=m.exports},"11e9":function(t,e,n){var i=n("52a7"),a=n("4630"),s=n("6821"),r=n("6a99"),c=n("69a8"),u=n("c69a"),o=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?o:function(t,e){if(t=s(t),e=r(e,!0),u)try{return o(t,e)}catch(t){}if(c(t,e))return a(!i.f.call(t,e),t[e])}},"31d2":function(t,e,n){},"3bbe":function(t,e,n){},5802:function(t,e,n){"use strict";var i=n("8cff"),a=n.n(i);a.a},"5dbc":function(t,e,n){var i=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var s,r=e.constructor;return r!==n&&"function"==typeof r&&(s=r.prototype)!==n.prototype&&i(s)&&a&&a(t,s),t}},"61fd":function(t,e,n){"use strict";var i=n("31d2"),a=n.n(i);a.a},7075:function(t,e,n){"use strict";var i=n("3bbe"),a=n.n(i);a.a},"8b97":function(t,e,n){var i=n("d3f4"),a=n("cb7c"),s=function(t,e){if(a(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return s(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:s}},"8cff":function(t,e,n){},9093:function(t,e,n){var i=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,a)}},aa77:function(t,e,n){var i=n("5ca1"),a=n("be13"),s=n("79e5"),r=n("fdef"),c="["+r+"]",u="​",o=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(t,e,n){var a={},c=s(function(){return!!r[t]()||u[t]()!=u}),o=a[t]=c?e(p):r[t];n&&(a[n]=o),i(i.P+i.F*c,"String",a)},p=f.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(o,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},be35:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cutOffLine",style:{background:t.background,height:t.height}})},a=[],s={name:"cut_off_line",props:{height:{type:String,default:"2.7vw"},background:{type:String,default:"#f3f7f9"}}},r=s,c=(n("5802"),n("2877")),u=Object(c["a"])(r,i,a,!1,null,"5777f676",null);u.options.__file="CutOffLine.vue";e["a"]=u.exports},c5f6:function(t,e,n){"use strict";var i=n("7726"),a=n("69a8"),s=n("2d95"),r=n("5dbc"),c=n("6a99"),u=n("79e5"),o=n("9093").f,l=n("11e9").f,f=n("86cc").f,p=n("aa77").trim,d="Number",v=i[d],_=v,h=v.prototype,m=s(n("2aeb")(h))==d,b="trim"in String.prototype,g=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():p(e,3);var n,i,a,s=e.charCodeAt(0);if(43===s||45===s){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var r,u=e.slice(2),o=0,l=u.length;o<l;o++)if(r=u.charCodeAt(o),r<48||r>a)return NaN;return parseInt(u,i)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof v&&(m?u(function(){h.valueOf.call(n)}):s(n)!=d)?r(new _(g(e)),n,v):g(e)};for(var z,y=n("9e1e")?o(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;y.length>C;C++)a(_,z=y[C])&&!a(v,z)&&f(v,z,l(_,z));v.prototype=h,h.constructor=v,n("2aba")(i,d,v)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-f263d606.a94eef02.js.map