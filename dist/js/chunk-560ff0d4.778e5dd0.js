(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-560ff0d4"],{"00d5":function(t,s,i){},"025a":function(t,s,i){"use strict";i.r(s);var o=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"mall"},[o("div",{staticClass:"mallheader"},[o("van-row",[o("van-col",{attrs:{span:"20"}},[o("van-search",{staticClass:"mallseach",attrs:{shape:"round",background:"rgb(243, 213, 223)",placeholder:"自由行包车"}})],1),o("van-col",{attrs:{span:"1"}},[o("img",{attrs:{src:i("8946")},on:{click:function(s){return t.goshopbag()}}})])],1)],1),t._m(0),o("div",{staticClass:"goods"},[o("div",{staticClass:"mallswipe"},[o("van-swipe",{staticClass:"mall-swipe",scopedSlots:t._u([{key:"indicator",fn:function(){return[o("div",{staticClass:"custom-indicator"})]},proxy:!0}])},[o("van-swipe-item",[o("van-grid",{attrs:{"column-num":5}},t._l(t.firstlist,(function(t,s){return o("van-grid-item",{key:s,attrs:{icon:t.icon,text:t.text}})})),1)],1),o("van-swipe-item",[o("van-grid",{attrs:{"column-num":5}},t._l(t.seacondlist,(function(t,s){return o("van-grid-item",{key:s,attrs:{icon:t.icon,text:t.text}})})),1)],1)],1)],1),t._m(1),o("div",{staticClass:"goodstab"},[o("van-tabs",{staticClass:"carheader",attrs:{type:"card",animated:"",background:"rgb(245, 226, 233)"},on:{click:t.onClick}},[o("van-tab",{attrs:{title:"精选商品"}},[o("div",{staticClass:"hotgoods"},t._l(t.hotgoods,(function(s,n){return o("van-cell",{key:n,staticClass:"hotbox",on:{click:function(s){return t.shopbag(n)}}},[o("div",{staticClass:"img"},[o("img",{attrs:{src:s.imgurl}})]),o("div",{staticClass:"mall_center"},[o("img",{attrs:{src:i("1b96")}}),o("h6",[t._v(t._s(s.goodsplace))])]),o("div",{staticClass:"goodsname"},[o("a",{staticClass:"goods_title"},[t._v(t._s(s.title))]),o("br"),o("a",{staticStyle:{color:"red"}},[t._v(t._s(s.price))]),t._v(" 起 "),o("span",{staticClass:"sale"},[t._v(" 已售"+t._s(s.count))])])])})),1)]),o("van-tab",{attrs:{title:"周边热销"}},[o("div",{staticClass:"hotgoods"},t._l(t.hotgoods1,(function(s,n){return o("van-cell",{key:s.id,staticClass:"hotbox",on:{click:function(s){return t.shopbag2(n)}}},[o("div",{staticClass:"img"},[o("img",{attrs:{src:s.imgurl}})]),o("div",{staticClass:"mall_center"},[o("img",{attrs:{src:i("1b96")}}),o("h6",[t._v(t._s(s.goodsplace))])]),o("div",{staticClass:"goodsname"},[o("a",{staticClass:"goods_title"},[t._v(t._s(s.title))]),o("br"),o("a",{staticStyle:{color:"red"}},[t._v(t._s(s.price))]),t._v(" 起 "),o("span",{staticClass:"sale"},[t._v(" 已售"+t._s(s.count))])])])})),1)]),o("van-tab",{attrs:{title:"国外热销"}},[o("div",{staticClass:"hotgoods"},t._l(t.hotgoods2,(function(s,n){return o("van-cell",{key:s.id,staticClass:"hotbox",on:{click:function(s){return t.shopbag3(n)}}},[o("div",{staticClass:"img"},[o("img",{attrs:{src:s.imgurl}})]),o("div",{staticClass:"mall_center"},[o("img",{attrs:{src:i("1b96")}}),o("h6",[t._v(t._s(s.goodsplace))])]),o("div",{staticClass:"goodsname"},[o("a",{staticClass:"goods_title"},[t._v(t._s(s.title))]),o("br"),o("a",{staticStyle:{color:"red"}},[t._v(t._s(s.price))]),t._v(" 起 "),o("span",{staticClass:"sale"},[t._v(" 已售"+t._s(s.count))])])])})),1)])],1)],1)]),o("Menu"),o("div",{staticClass:"white"},[t._v(" 哎呀！都被您看光啦~ ")])],1)},n=[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"diration"},[o("img",{attrs:{src:i("7629")}})])},function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"mall_bottom"},[o("div",{staticClass:"mall_bottom_1"},[o("img",{attrs:{src:i("b2a2")}}),o("p",[t._v("我的积分")])]),o("div",{staticClass:"mall_bottom_2"},[o("img",{attrs:{src:i("e360")}}),o("p",[t._v("领券中心")])]),o("div",{staticClass:"mall_bottom_3"},[o("img",{attrs:{src:i("db9b")}}),o("p",[t._v("砍价免费")])])])}],e=i("2909"),a=i("2251"),c=(i("00d5"),{created:function(){this.getgoodinfo(),this.getgoodinfo1(),this.getgoodinfo2(),localStorage.setItem("tabbar",0)},name:"Mall",components:{Menu:a["a"]},data:function(){return{hotgoods:[],hotgoods1:[],hotgoods2:[],firstlist:[{text:"自由行",icon:i("e0c6")},{text:"跟团游",icon:i("f7e3")},{text:"酒店住宿",icon:i("05fb")},{text:"一日游",icon:i("968f")},{text:"门票",icon:i("65f8")},{text:"当地玩乐",icon:i("af6c")},{text:"美食",icon:i("ea55")},{text:"特色民宿",icon:i("8fb9")},{text:"租车用车",icon:i("b7f3")},{text:"游轮游",icon:i("83f5")}],seacondlist:[{text:"签证",icon:i("114d")},{text:"交通卡",icon:i("26e1")},{text:"保险",icon:i("f123")},{text:"接送机",icon:i("3df6")},{text:"蜜月",icon:i("de84")},{text:"旅拍",icon:i("f908")},{text:"结伴",icon:i("d8e5")},{text:"礼品卡",icon:i("235a")},{text:"接送服务",icon:i("1698")},{text:"more",icon:i("9dc9")}]}},methods:{onClick:function(t){localStorage.setItem("tabbar",t)},goshopbag:function(){this.$router.push({name:"Shopbag"})},getgoodinfo:function(){var t=this;this.axios.get("/goodsinfo",{}).then((function(s){var i;(i=t.hotgoods).push.apply(i,Object(e["a"])(s.data.list))})).catch((function(t){console.log(t)}))},getgoodinfo1:function(){var t=this;this.axios.get("/goodsinfo1",{}).then((function(s){var i;(i=t.hotgoods1).push.apply(i,Object(e["a"])(s.data.list))})).catch((function(t){console.log(t)}))},getgoodinfo2:function(){var t=this;this.axios.get("/goodsinfo2",{}).then((function(s){var i;(i=t.hotgoods2).push.apply(i,Object(e["a"])(s.data.list))})).catch((function(t){console.log(t)}))},shopbag:function(t){var s=t;this.$store.commit("getgoodsid",s),this.$router.push({name:"Goodsbag"})},shopbag2:function(t){var s=t;this.$store.commit("getgoodsid",s),this.$router.push({name:"Goodsbag"})},shopbag3:function(t){var s=t;this.$store.commit("getgoodsid",s),this.$router.push({name:"Goodsbag"})}}}),r=c,l=i("2877"),u=Object(l["a"])(r,o,n,!1,null,null,null);s["default"]=u.exports},"05fb":function(t,s,i){t.exports=i.p+"img/jiudian_mall.2269b6e6.svg"},"114d":function(t,s,i){t.exports=i.p+"img/qianzheng.2b24123a.svg"},1698:function(t,s,i){t.exports=i.p+"img/yongche.032b5c93.svg"},"1b96":function(t,s,i){t.exports=i.p+"img/place.48a12181.svg"},2251:function(t,s,i){"use strict";var o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("van-tabbar",{attrs:{"active-color":"blue",route:!0},model:{value:t.active,callback:function(s){t.active=s},expression:"active"}},t._l(t.menuList,(function(s,o){return i("van-tabbar-item",{key:o,attrs:{to:s.toHref},scopedSlots:t._u([{key:"icon",fn:function(t){return[i("img",{attrs:{src:t.active?s.active_src:s.src}})]}}],null,!0)},[i("span",[t._v(t._s(s.title))])])})),1)],1)},n=[],e=(i("a9e3"),i("8b98"),{props:{index:{type:Number,default:function(){return 0}}},created:function(){this.active=this.index},data:function(){return{active:0,menuList:[{title:"首页",src:"http://119.29.36.88:2020/icon/homecheck.svg",active_src:"http://119.29.36.88:2020/icon/039-sushi.svg",toHref:"/home"},{title:"目的地",src:"http://119.29.36.88:2020/icon/aimplacecheck.svg",active_src:"http://119.29.36.88:2020/icon/047-origami.svg",toHref:"/destination"},{title:"商城",src:"http://119.29.36.88:2020/icon/shopcheck.svg",active_src:"http://119.29.36.88:2020/icon/033-food stand.svg",toHref:"/mall"},{title:"我的",src:"http://119.29.36.88:2020/icon/mycheck.svg",active_src:"http://119.29.36.88:2020/icon/027-geisha.svg",toHref:"/my"}]}}}),a=e,c=i("2877"),r=Object(c["a"])(a,o,n,!1,null,null,null);s["a"]=r.exports},"235a":function(t,s,i){t.exports=i.p+"img/lipinka.60df98ed.svg"},"26e1":function(t,s,i){t.exports=i.p+"img/jiaotongka.985bf60f.svg"},"3df6":function(t,s,i){t.exports=i.p+"img/jiesongji.89c84fa2.svg"},5899:function(t,s){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,s,i){var o=i("1d80"),n=i("5899"),e="["+n+"]",a=RegExp("^"+e+e+"*"),c=RegExp(e+e+"*$"),r=function(t){return function(s){var i=String(o(s));return 1&t&&(i=i.replace(a,"")),2&t&&(i=i.replace(c,"")),i}};t.exports={start:r(1),end:r(2),trim:r(3)}},"65f8":function(t,s,i){t.exports=i.p+"img/menpiao.6bd47a34.svg"},7156:function(t,s,i){var o=i("861d"),n=i("d2bb");t.exports=function(t,s,i){var e,a;return n&&"function"==typeof(e=s.constructor)&&e!==i&&o(a=e.prototype)&&a!==i.prototype&&n(t,a),t}},7629:function(t,s,i){t.exports=i.p+"img/shangcheng.806c1dbb.png"},"83f5":function(t,s,i){t.exports=i.p+"img/youlun.c129f13d.svg"},8946:function(t,s,i){t.exports=i.p+"img/dingdan.bb8bf2a5.svg"},"8b98":function(t,s,i){},"8fb9":function(t,s,i){t.exports=i.p+"img/minsu.3551f7de.svg"},"968f":function(t,s,i){t.exports=i.p+"img/yiriyou.28935cd2.svg"},"9dc9":function(t,s,i){t.exports=i.p+"img/more.3bb58968.svg"},a9e3:function(t,s,i){"use strict";var o=i("83ab"),n=i("da84"),e=i("94ca"),a=i("6eeb"),c=i("5135"),r=i("c6b6"),l=i("7156"),u=i("c04e"),g=i("d039"),f=i("7c73"),d=i("241c").f,p=i("06cf").f,v=i("9bf2").f,m=i("58a8").trim,h="Number",b=n[h],_=b.prototype,x=r(f(_))==h,C=function(t){var s,i,o,n,e,a,c,r,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),s=l.charCodeAt(0),43===s||45===s){if(i=l.charCodeAt(2),88===i||120===i)return NaN}else if(48===s){switch(l.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+l}for(e=l.slice(2),a=e.length,c=0;c<a;c++)if(r=e.charCodeAt(c),r<48||r>n)return NaN;return parseInt(e,o)}return+l};if(e(h,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var y,k=function(t){var s=arguments.length<1?0:t,i=this;return i instanceof k&&(x?g((function(){_.valueOf.call(i)})):r(i)!=h)?l(new b(C(s)),i,k):C(s)},I=o?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)c(b,y=I[N])&&!c(k,y)&&v(k,y,p(b,y));k.prototype=_,_.constructor=k,a(n,h,k)}},af6c:function(t,s,i){t.exports=i.p+"img/wanle.41644e52.svg"},b2a2:function(t,s,i){t.exports=i.p+"img/jifen.2b1f3c0e.svg"},b7f3:function(t,s,i){t.exports=i.p+"img/zuche.74c48f5f.svg"},d8e5:function(t,s,i){t.exports=i.p+"img/jiebam.a7d0c7eb.svg"},db9b:function(t,s,i){t.exports=i.p+"img/kanjia.2a1c626d.svg"},de84:function(t,s,i){t.exports=i.p+"img/miyue.4e557363.svg"},e0c6:function(t,s,i){t.exports=i.p+"img/ziyouxing.9d0dd884.svg"},e360:function(t,s,i){t.exports=i.p+"img/youhuiquan.f7f21ad7.svg"},ea55:function(t,s,i){t.exports=i.p+"img/meishi.925ccd68.svg"},f123:function(t,s,i){t.exports=i.p+"img/baoxian.36733987.svg"},f7e3:function(t,s,i){t.exports=i.p+"img/gentuanyou.87d11c95.svg"},f908:function(t,s,i){t.exports=i.p+"img/lvpai.dba718d5.svg"}}]);
//# sourceMappingURL=chunk-560ff0d4.778e5dd0.js.map