(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-128fc491"],{1496:function(t,o,e){t.exports=e.p+"img/adress.55c8a98e.svg"},a434:function(t,o,e){"use strict";var n=e("23e7"),s=e("23cb"),i=e("a691"),a=e("50c4"),c=e("7b0b"),h=e("65f0"),l=e("8418"),r=e("1dde"),p=e("ae40"),f=r("splice"),d=p("splice",{ACCESSORS:!0,0:0,1:2}),u=Math.max,g=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!d},{splice:function(t,o){var e,n,r,p,f,d,I=c(this),k=a(I.length),b=s(t,k),w=arguments.length;if(0===w?e=n=0:1===w?(e=0,n=k-b):(e=w-2,n=g(u(i(o),0),k-b)),k+e-n>m)throw TypeError(v);for(r=h(I,n),p=0;p<n;p++)f=b+p,f in I&&l(r,p,I[f]);if(r.length=n,e<n){for(p=b;p<k-n;p++)f=p+n,d=p+e,f in I?I[d]=I[f]:delete I[d];for(p=k;p>k-n+e;p--)delete I[p-1]}else if(e>n)for(p=k-n;p>b;p--)f=p+n-1,d=p+e-1,f in I?I[d]=I[f]:delete I[d];for(p=0;p<e;p++)I[p+b]=arguments[p+2];return I.length=k-n+e,r}})},d3e5:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"confirmgoods"},[e("header",[e("van-nav-bar",{attrs:{title:"确认订单","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}})],1),e("div",{staticClass:"center"},[e("div",{staticClass:"step"},[e("van-steps",{attrs:{active:t.active}},[e("van-step",[t._v("填写信息")]),e("van-step",[t._v("确认信息")]),e("van-step",[t._v("支付订单")]),e("van-step",[t._v("确认出行")])],1)],1),e("div",{staticClass:"goodsbag"},[e("div",{staticClass:"con_shopname"},[e("van-icon",{attrs:{name:"bag-o",color:"red"}}),e("h3",[t._v("山河旅行社旗舰店>")])],1),t._l(t.goodsInfo,(function(o){return e("div",{key:o.onlyid,staticClass:"goods"},[e("van-card",{attrs:{num:o.people,price:o.price,desc:o.goodsplace,title:o.title,thumb:o.imgurl},scopedSlots:t._u([{key:"tags",fn:function(){return[e("van-tag",{staticStyle:{margin:"0px 0px 0px 120px"},attrs:{plain:"",type:"danger"}},[t._v("出游日期："+t._s(o.date))])]},proxy:!0}],null,!0)}),e("div",{staticClass:"addpeople"},[e("van-cell",{attrs:{title:"出游人员","is-link":""},on:{click:t.showPopup}}),t._l(t.checkinfo,(function(o,n){return e("van-swipe-cell",{key:o.name,scopedSlots:t._u([{key:"right",fn:function(){return[e("van-button",{staticClass:"delete-button",attrs:{square:"",text:"删除",type:"danger"},on:{click:function(o){return t.deletegoods(n)}}})]},proxy:!0}],null,!0)},[e("van-contact-card",{attrs:{type:"edit",name:o.name,tel:o.tel,editable:!1}})],1)})),e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"订单备注"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.noteInfo,expression:"noteInfo"}],staticClass:"text-area",attrs:{placeholder:"选填，建议和卖家协商"},domProps:{value:t.noteInfo},on:{input:function(o){o.target.composing||(t.noteInfo=o.target.value)}}})]),e("van-popup",{style:{height:"45%"},attrs:{round:"",position:"bottom"},model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[e("van-button",{staticClass:"addbutton",attrs:{round:"",size:"large",type:"info"},on:{click:t.addpeople}},[t._v("添加常用人员")]),e("van-contact-edit",{attrs:{"contact-info":t.editingContact},on:{save:t.onSave}})],1),e("van-popup",{style:{height:"50%"},attrs:{round:"",position:"bottom"},model:{value:t.showadd,callback:function(o){t.showadd=o},expression:"showadd"}},[t.havepeople?e("van-cell",[e("van-empty",{attrs:{description:"没有常用人员"}})],1):t._l(t.peopleInfo,(function(o){return e("van-cell",{key:o.id,on:{click:function(e){return t.checkedInfo(o)}}},[e("van-contact-card",{attrs:{type:"edit",name:o.name,tel:o.tel,editable:!1}})],1)}))],2)],2)],1)}))],2)]),e("div",{staticClass:"footer"},[e("div",{staticClass:"buy"},[e("van-submit-bar",{attrs:{price:100*t.goodsInfo.price,"button-text":"提交订单"},on:{submit:t.onSubmit}})],1)])])},s=[],i=(e("a434"),e("b0c0"),e("2909")),a=(e("d422"),{data:function(){return{show:!1,page:"",showadd:!1,onlyid:"",goodsinfos:{},editingContact:[],checkinfo:[],noteInfo:"",phonename:localStorage.getItem("phonename"),goodsInfo:[],initgoodsInfo:[],havepeople:!1,contactInfo:[],name:localStorage.getItem("name"),peopleInfo:[],active:0,icon:e("1496"),initprice:0}},created:function(){this.getRouterData(),this.getpeopleinfo()},mounted:function(){},methods:{showPopup:function(){this.show=!0},addpeople:function(){this.show=!1,this.showadd=!0},checked:function(t){for(var o=0;o<this.checkinfo.length;o++)if(console.log(t.name,this.checkinfo[o].name),t.name===this.checkinfo[o].name)return!0},checkedInfo:function(t){0==this.checkinfo.length?this.checkinfo.push(t):this.checked(t)?this.$toast.fail("请勿重复添加"):this.checkinfo.push(t),this.showadd=!1;var o=this.checkinfo.length;this.goodsInfo.price=this.checkinfo.length*this.goodsInfo[0].price,this.goodsInfo[0].people=o},back:function(){this.$router.push({name:"Shopbag"})},gogoods:function(){this.$router.push({name:"Goodsbag"})},getRouterData:function(){var t;(this.page=this.$route.params.page,"shopbag"===this.page&&(this.goodsInfo=this.$route.params.goodsInfo,this.initgoodsInfo=this.$route.params.goodsInfo,this.initprice=this.goodsInfo[0].price,console.log(this.page,this.initgoodsInfo)),"orderform"===this.page)&&(this.initgoodsInfo=this.$route.params.initgoodsInfo,this.goodsInfo=this.initgoodsInfo,(t=this.checkinfo).push.apply(t,Object(i["a"])(this.$route.params.peopleInfo)),console.log(this.page,this.initgoodsInfo));"goodsbag"===this.page&&(this.goodsInfo=this.$route.params.goodsInfo,this.initgoodsInfo=this.$route.params.goodsInfo,this.initprice=this.goodsInfo[0].price,console.log(this.page,this.goodsInfo))},savapeople:function(t){var o=this;this.axios({method:"GET",url:"/addpeopleinfo",params:{phonename:this.phonename,name:t.name,tel:t.tel}}).then((function(t){o.$toast.success(t.data.message),o.checkinfo.push(t.data.data),o.show=!1,o.goodsInfo[0].people=o.checkinfo.length,o.goodsInfo.price=o.checkinfo.length*o.goodsInfo[0].price,o.reload()}))},getpeopleinfo:function(){var t=this;this.axios({method:"GET",url:"/getpeopleinfo",params:{phonename:this.phonename}}).then((function(o){var e;(e=t.peopleInfo).push.apply(e,Object(i["a"])(o.data.message)),console.log("people",t.peopleInfo),""==t.peopleInfo&&(t.havepeople=!0)}))},onDelete:function(t){this.$toast.success(t.name)},checked2:function(t){for(var o=0;o<this.checkinfo.length;o++)if(console.log(t.name,this.checkinfo[o].name),t.name===this.checkinfo[o].name)return!0},onSave:function(t){if(0===this.peopleInfo.length)this.savapeople(t);else for(var o=0;o<this.peopleInfo.length;o++){if(!this.checked2(t)){this.savapeople(t);break}this.$toast.fail("请勿重复添加人员")}},onSubmit:function(){var t=this;"null"==this.name?this.$dialog.confirm({title:"未实名验证！",message:"是否确认去实名！",confirmButtonColor:"#0C34BA"}).then((function(){var o=2,e=setInterval((function(){o--,o?t.$toast.success("请实名后返回购买"):(clearInterval(e),t.$toast.clear()),t.$router.push({name:"Security",params:{show4:!0,page:"my"}})}),1e3)})):""==this.checkinfo?this.$toast.fail("请选择出游人员"):this.$router.push({name:"OrderForm",params:{goodsInfo:this.goodsInfo,peopleInfo:this.checkinfo,noteInfo:this.noteInfo,initgoodsInfo:this.initgoodsInfo}})},deletegoods:function(t){this.checkinfo.splice(t,1),this.goodsInfo[0].people=this.checkinfo.length,this.goodsInfo.price=this.checkinfo.length*this.goodsInfo[0].price}}}),c=a,h=e("2877"),l=Object(h["a"])(c,n,s,!1,null,null,null);o["default"]=l.exports},d422:function(t,o,e){}}]);
//# sourceMappingURL=chunk-128fc491.804d84c2.js.map