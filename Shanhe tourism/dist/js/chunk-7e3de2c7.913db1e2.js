(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e3de2c7"],{"59a4":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-address"},[n("van-nav-bar",{attrs:{title:"常用人员","left-text":"返回","left-arrow":"",fixed:!0},on:{"click-left":t.back}}),n("van-contact-card",{attrs:{type:"add"},on:{click:t.Addpeople}}),t._l(t.list,(function(e){return n("van-contact-card",{key:e.id,attrs:{type:"edit",name:e.name,tel:e.tel},on:{click:function(n){return t.onEdit(e)}}})})),n("van-popup",{style:{height:"40%"},attrs:{"close-on-popstate":"",round:"",position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("van-contact-edit",{attrs:{"is-edit":"","contact-info":t.editingContact},on:{save:t.onSave,delete:t.onDelete}})],1)],2)},o=[],i=(n("b0c0"),n("2909")),s=(n("ce26"),{inject:["reload"],data:function(){return{phonename:localStorage.getItem("phonename"),list:[],show:!1,onlyid:"",flag:"",editingContact:{}}},created:function(){this.getpeopleinfo()},methods:{getpeopleinfo:function(){var t=this;this.axios({method:"GET",url:"/getpeopleinfo",params:{phonename:this.phonename}}).then((function(e){var n;(n=t.list).push.apply(n,Object(i["a"])(e.data.message))}))},back:function(){this.$router.go(-1)},Addpeople:function(){this.show=!0,this.flag="add"},checked:function(t){for(var e=0;e<this.list.length;e++)if(console.log(t.name,this.list[e].name),t.name===this.list[e].name)return!0},onSave:function(t){var e=this;"add"==this.flag?this.checked(t)?this.$toast.fail("请勿重复添加"):this.axios({method:"GET",url:"/addpeopleinfo",params:{phonename:this.phonename,name:t.name,tel:t.tel}}).then((function(t){e.$toast.success(t.data.message),e.reload()})):this.checked(t)?this.$toast.fail("已存在该联系人"):this.axios({method:"GET",url:"/changepeople",params:{phonename:this.phonename,name:t.name,tel:t.tel,id:this.onlyid}}).then((function(t){e.$toast.success(t.data.message),e.reload()}))},onDelete:function(){var t=this;"add"==this.flag?this.$toast.fail("请先选择联系人"):this.axios({method:"GET",url:"/deletepeople",params:{phonename:this.phonename,id:this.onlyid}}).then((function(e){t.$toast.success(e.data.message),t.reload()}))},onEdit:function(t){this.show=!0,this.flag="edit",this.onlyid=t.id}}}),l=s,c=n("2877"),h=Object(c["a"])(l,a,o,!1,null,null,null);e["default"]=h.exports},ce26:function(t,e,n){}}]);
//# sourceMappingURL=chunk-7e3de2c7.913db1e2.js.map