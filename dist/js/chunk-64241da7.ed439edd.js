(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64241da7"],{"0460":function(t,e,s){t.exports=s.p+"img/bianpinghuatubiaosheji.ae5319d7.svg"},3287:function(t,e,s){t.exports=s.p+"img/haoyouzhuli.8a1afc9b.svg"},"7c44":function(t,e,s){t.exports=s.p+"img/xx_tttj.6b8e6105.svg"},8946:function(t,e,s){t.exports=s.p+"img/dingdan.bb8bf2a5.svg"},be53:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message"},[s("van-pull-refresh",{attrs:{"success-text":"刷新成功"},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[s("van-nav-bar",{attrs:{title:"信息中心","left-text":"返回","right-text":"全部已读","left-arrow":""},on:{"click-left":t.onClickLeft}}),s("div",{staticClass:"icon"},[s("van-grid",{attrs:{"column-num":4}},t._l(t.messageicon,(function(t,e){return s("van-grid-item",{key:e,attrs:{dot:"",text:t.text,icon:t.icon}})})),1)],1),t._l(t.personlist,(function(e,n){return s("div",{key:n,staticClass:"people"},[s("img",{staticClass:"picture",attrs:{src:e.picture}}),s("div",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),s("div",{staticClass:"p"},[t._v(t._s(e.message))]),s("div",{staticClass:"date"},[t._v(t._s(e.date))])])}))],2)],1)},i=[],c=(s("dece"),{name:"Messssagess",data:function(){return{isLoading:!1,messageicon:[{text:"互动信息",icon:s("7c44")},{text:"好友互动",icon:s("3287")},{text:"通知",icon:s("0460")},{text:"订单消息",icon:s("8946")}],personlist:[{nickname:"陈奕迅",message:"下个星期我要去新疆，你要不要一起",picture:"https://i03piccdn.sogoucdn.com/2a35070c3a5696cb",date:"2020/12/01"},{nickname:"周杰伦",message:"我明天中午的机票飞首都",picture:"https://i02piccdn.sogoucdn.com/91092b3289eb2c41",date:"2020/9/01"},{nickname:"刘德华",message:"啊啊给我一杯忘情水",picture:"https://i02piccdn.sogoucdn.com/51787347221c3e18",date:"2020/11/21"},{nickname:"陈廷奇",message:"人生得意需尽欢丶",picture:"https://i03piccdn.sogoucdn.com/4b596a74b203f6d1",date:"2020/11/03"}]}},methods:{onClickLeft:function(){this.$router.go(-1)},onRefresh:function(){var t=this;setTimeout((function(){t.isLoading=!1}),1e3)}}}),a=c,o=s("2877"),r=Object(o["a"])(a,n,i,!1,null,null,null);e["default"]=r.exports},dece:function(t,e,s){}}]);
//# sourceMappingURL=chunk-64241da7.ed439edd.js.map