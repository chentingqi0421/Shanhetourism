(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d783e18"],{"2cbf":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"myinfo"},[e("van-nav-bar",{attrs:{title:"安全中心","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":a.back}}),a.isLogin?e("div",{staticClass:"security-islogin"},[e("div",{staticClass:"security-bag"},[e("div",{staticClass:"userimg"},[e("van-image",{staticClass:"islogin-images",attrs:{round:"",width:"4rem",height:"4rem",src:a.userimg}})],1),e("div",{staticClass:"changecenter"},[e("div",{staticClass:"main_body"}),e("div",{staticClass:"vant-cell"},[e("van-cell",{attrs:{title:"手机号","is-link":"",value:a.phonename},on:{click:a.showPopup}}),e("van-popup",{style:{height:"40%",width:"100%"},attrs:{position:"bottom",round:"",closeable:""},model:{value:a.show,callback:function(t){a.show=t},expression:"show"}},[e("div",{staticClass:"pupbody"},[e("van-form",{on:{submit:a.onSubmit1}},[e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"当前手机号"}},[e("van-field",{attrs:{name:"currenphone",readonly:""},model:{value:a.phonename,callback:function(t){a.phonename=t},expression:"phonename"}})],1),e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"新手机号"}},[e("van-field",{attrs:{name:"newphone",placeholder:"请输入您要更换的账号",rules:[{pattern:a.pattern,message:"请输入正确的手机号"}]},model:{value:a.phone,callback:function(t){a.phone=t},expression:"phone"}})],1),e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"密码"}},[e("van-field",{attrs:{type:"password",name:"password",placeholder:"输入以字母开头6~16位密码",rules:[{validator:a.validator,message:"密码格式错误"}]},model:{value:a.password,callback:function(t){a.password=t},expression:"password"}})],1),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[a._v("提交")])],1)],1)],1)]),e("van-cell",{attrs:{title:"实名验证","is-link":""},on:{click:a.showPopup4}}),e("van-popup",{style:{height:"40%",width:"100%"},attrs:{position:"bottom",round:"",closeable:""},model:{value:a.show4,callback:function(t){a.show4=t},expression:"show4"}},[e("div",{staticClass:"pupbody"},[e("van-form",{on:{submit:a.onSubmit6}},[e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"姓名"}},[e("van-field",{attrs:{name:"name",placeholder:"输入您姓名"},model:{value:a.name,callback:function(t){a.name=t},expression:"name"}}),e("van-field",{staticClass:"display",attrs:{name:"phonename"},model:{value:a.phonename,callback:function(t){a.phonename=t},expression:"phonename"}})],1),e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"身份证"}},[e("van-field",{attrs:{name:"identitycard",placeholder:"输入您的身份证",rules:[{pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,message:"身份证格式错误"}]},model:{value:a.identitycard,callback:function(t){a.identitycard=t},expression:"identitycard"}})],1),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[a._v("提交")])],1)],1)],1)]),e("van-cell",{attrs:{title:"支付密码","is-link":""},on:{click:a.showPopup1}}),e("van-popup",{style:{height:"40%",width:"100%"},attrs:{position:"bottom",round:"",closeable:""},model:{value:a.show1,callback:function(t){a.show1=t},expression:"show1"}},[e("div",{staticClass:"pupbody"},[a.havepayword?e("div",[e("van-form",{on:{submit:a.onSubmit2}},[e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"旧支付密码"}},[e("van-field",{attrs:{type:"password",name:"payword",placeholder:"请验证旧密码",rules:[{validator:a.asyncValidator,message:"密码格式错误"}]},model:{value:a.payword,callback:function(t){a.payword=t},expression:"payword"}}),e("van-field",{staticClass:"display",attrs:{name:"phonename"},model:{value:a.phonename,callback:function(t){a.phonename=t},expression:"phonename"}})],1),e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"新支付密码"}},[e("van-field",{attrs:{type:"password",name:"payword1",placeholder:"输入6位数字密码",rules:[{validator:a.asyncValidator,message:"密码格式错误"}]},model:{value:a.payword1,callback:function(t){a.payword1=t},expression:"payword1"}})],1),e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"确认密码"}},[e("van-field",{attrs:{type:"password",name:"payword2",placeholder:"确认新的密码",rules:[{validator:a.asyncValidator,message:"密码格式错误"}]},model:{value:a.payword2,callback:function(t){a.payword2=t},expression:"payword2"}})],1),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[a._v("提交")])],1)],1)],1):e("div",[e("div",{staticClass:"nopass-text"},[e("h3",[a._v("您还没有设置支付密码哦")])]),e("van-form",{on:{submit:a.onSubmit3}},[e("van-field",{staticClass:"display",attrs:{name:"phonename"},model:{value:a.phonename,callback:function(t){a.phonename=t},expression:"phonename"}}),e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"支付密码"}},[e("van-field",{attrs:{type:"password",name:"payword1",placeholder:"输入6位数字密码",rules:[{validator:a.asyncValidator,message:"密码格式错误"}]},model:{value:a.newpayword1,callback:function(t){a.newpayword1=t},expression:"newpayword1"}})],1),e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"确认密码"}},[e("van-field",{attrs:{type:"password",name:"payword2",placeholder:"确认新的密码",rules:[{validator:a.asyncValidator,message:"密码格式错误"}]},model:{value:a.newpayword2,callback:function(t){a.newpayword2=t},expression:"newpayword2"}})],1),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[a._v("提交")])],1)],1)],1)])]),e("van-cell",{attrs:{title:"登录密码","is-link":""},on:{click:a.showPopup2}}),e("van-popup",{style:{height:"40%",width:"100%"},attrs:{position:"bottom",round:"",closeable:""},model:{value:a.show2,callback:function(t){a.show2=t},expression:"show2"}},[e("div",{staticClass:"pupbody"},[e("van-form",{on:{submit:a.onSubmit4}},[e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"旧登录密码"}},[e("van-field",{attrs:{type:"password",name:"password",placeholder:"请验证旧密码",rules:[{validator:a.validator,message:"密码格式错误"}]},model:{value:a.password,callback:function(t){a.password=t},expression:"password"}}),e("van-field",{staticClass:"display",attrs:{name:"phonename"},model:{value:a.phonename,callback:function(t){a.phonename=t},expression:"phonename"}})],1),e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"新登录密码"}},[e("van-field",{attrs:{type:"password",name:"password1",placeholder:"字母开头6~16位数字密码",rules:[{validator:a.validator,message:"密码格式错误"}]},model:{value:a.password1,callback:function(t){a.password1=t},expression:"password1"}})],1),e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"确认密码"}},[e("van-field",{attrs:{type:"password",name:"password2",placeholder:"确认新的密码",rules:[{validator:a.validator,message:"密码格式错误"}]},model:{value:a.password2,callback:function(t){a.password2=t},expression:"password2"}})],1),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[a._v("提交")])],1)],1)],1)]),e("van-cell",{attrs:{title:"注销账号","is-link":""},on:{click:a.showPopup3}}),e("van-popup",{style:{height:"40%",width:"100%"},attrs:{position:"bottom",round:"",closeable:""},model:{value:a.show3,callback:function(t){a.show3=t},expression:"show3"}},[e("div",{staticClass:"pupbody"},[e("van-form",{on:{submit:a.onSubmit5}},[e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"手机号"}},[e("van-field",{attrs:{name:"currenphone"},model:{value:a.phonename,callback:function(t){a.phonename=t},expression:"phonename"}})],1),e("van-field",{staticClass:"display",attrs:{name:"asyncValidator"},model:{value:a.phonename,callback:function(t){a.phonename=t},expression:"phonename"}}),e("van-cell",{staticClass:"myinfo-van-cell",attrs:{title:"密码"}},[e("van-field",{attrs:{type:"password",name:"password",placeholder:"输入以字母开头6~16位密码",rules:[{validator:a.validator,message:"密码格式错误"}]},model:{value:a.password3,callback:function(t){a.password3=t},expression:"password3"}})],1),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[a._v("提交")])],1)],1)],1)])],1)])])]):e("div",{staticClass:"security-nologin"},[e("van-image",{attrs:{round:"",width:"4rem",height:"4rem",src:"http://bpic.588ku.com/element_origin_min_pic/19/04/09/d5338875ce7f5f922beb421b2ee39f03.jpg"}}),e("div",{staticClass:"upload"},[e("van-button",{attrs:{icon:"plus",type:"primary",round:""},on:{click:function(t){return a.gologin()}}},[a._v("去登录")])],1)],1)],1)},o=[],n=(e("d3b7"),e("a822"),{inject:["reload"],data:function(){return{havepayword:!1,show:!1,show1:!1,show2:!1,show3:!1,show4:!1,newpayword1:"",newpayword2:"",phone:"",name:"",identitycard:"",password:"",password1:"",password2:"",password3:"",payword:"",payword1:"",payword2:"",pattern:/^1[3-9]\d{9}$/,isLogin:localStorage.getItem("isLogin"),userimg:localStorage.getItem("userimg"),phonename:localStorage.getItem("phonename"),phone2:{phonename:localStorage.getItem("phonename")},page:""}},created:function(){this.getpayword(),this.getRouterData(),"null"===this.userimg&&(this.userimg="http://119.29.36.88:2020/img/top.jpeg")},methods:{back:function(){""==this.page?this.$router.push({name:"My"}):(this.$toast("请移驾订单中心支付"),this.$router.push({name:"Myorder"}))},gologin:function(){this.$router.push({name:"Login"})},showPopup:function(){this.show=!0},showPopup1:function(){this.show1=!0},showPopup2:function(){this.show2=!0},showPopup3:function(){this.show3=!0},showPopup4:function(){this.show4=!0},getRouterData:function(){var a=this.$route.params.page;console.log(a),"my"==a&&(this.show4=!0),"orderform"==a&&(this.show1=!0)},validator:function(a){return/^[A-Za-z]\w{5,15}$/.test(a)},getpayword:function(){var a=this;if("true"==this.isLogin){console.log(this.isLogin);var t=this.phone2;console.log(t),this.axios({method:"POST",url:"/havepayword",data:t}).then((function(t){console.log(t),200==t.data.code?a.havepayword=!0:a.havepayword=!1}))}},asyncValidator:function(a){return new Promise((function(t){setTimeout((function(){t(/^\d{6}$/.test(a))}),500)}))},onFailed:function(a){console.log("failed",a)},onSubmit1:function(a){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var e=a;this.axios({method:"POST",url:"/changephone",data:e}).then((function(a){var e=a.data.code;if(200==e){t.$toast.success(a.data.message);var s=a.data.newphone;console.log(s),t.$store.commit("getuserphone",s),t.reload()}0==e&&t.$toast.fail(a.data.message),404==e&&t.$toast.fail(a.data.message)}))},onSubmit2:function(a){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var e=a;this.axios({method:"POST",url:"/changepayword",data:e}).then((function(a){var e=a.data.code;console.log(a.data),200==e&&(t.$toast.success(a.data.message),t.reload()),0==e&&t.$toast.fail(a.data.message),100==e&&t.$toast.fail(a.data.message),404==e&&t.$toast.fail(a.data.message)}))},onSubmit3:function(a){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner"});var e=a;this.axios({method:"POST",url:"/setpayword",data:e}).then((function(a){var e=a.data.code;console.log(a.data),200==e&&(t.$toast.success(a.data.message),t.reload()),100==e&&t.$toast.fail(a.data.message),0==e&&t.$toast.fail(a.data.message),404==e&&(t.$toast.fail(a.data.message),t.$toast.clean())}))},onSubmit4:function(a){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var e=a;console.log(e),this.axios({method:"POST",url:"/changepassword",data:e}).then((function(a){var e=a.data.code;200==e&&(t.$toast.success(a.data.message),window.localStorage.clear(),t.reload(),t.$router.push({name:"Login"})),100==e&&t.$toast.success(a.data.message),0==e&&t.$toast.fail(a.data.message),404==e&&t.$toast.fail(a.data.message)}))},onSubmit5:function(a){var t=this;console.log(a),this.$dialog.confirm({title:"注销账号",message:"注销账号无法恢复，请慎重！",confirmButtonColor:"#B22222"}).then((function(){t.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"});var e=a;t.axios({method:"POST",url:"/clean",data:e}).then((function(a){var e=a.data.code;console.log(a),200==e?(t.$toast.success(a.data.message),window.localStorage.clear(),t.reload(),t.$router.push({name:"Home"})):t.$toast.fail(a.data.message)}))}))},onSubmit6:function(a){var t=this;console.log(a);var e=a;this.axios({method:"POST",url:"/confirmation",data:e}).then((function(a){var e=a.data.code;200==e?(t.$toast.success(a.data.message),t.show4=!1,t.$router.push({name:"Home"})):t.$toast.fail(a.data.message)}))}}}),i=n,l=e("2877"),r=Object(l["a"])(i,s,o,!1,null,null,null);t["default"]=r.exports},a822:function(a,t,e){}}]);
//# sourceMappingURL=chunk-9d783e18.33ef7981.js.map