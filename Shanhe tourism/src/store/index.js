import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
     //从sessionStorage中获取token,没有就默认为空
    Authorization: localStorage.getItem("Authorization") ?  localStorage.getItem("Authorization"):"" ,  
    isLogin: localStorage.getItem("isLogin") ?  localStorage.getItem("isLogin",false):"" ,
    currenUser: localStorage.getItem("currenUser") ?  localStorage.getItem("urrenUser"):"",
    userimg: localStorage.getItem("userimg") ?  localStorage.getItem("userimg"):'',
    phonename: localStorage.getItem("phonename") ?  localStorage.getItem("phonename"):"",
    motto: localStorage.getItem("motto") ?  localStorage.getItem("motto"):"",
    email:localStorage.getItem("email") ?  localStorage.getItem("email"):"",
    havepayword:localStorage.getItem("payword") ?  localStorage.getItem("payword"):"",
    goodsid:localStorage.getItem("goodsid") ?  localStorage.getItem("goodsid"):"",
    
  },
  mutations: {
    //获得登录状态和token并储存在session中
    changeToken(state, token){
      state.Authorization = token
      
      localStorage.setItem('Authorization', token)
      localStorage.setItem('isLogin', true)
      
    },
    //获得登录名并储存在session中
    getusername(state,user){
      state.currenUser=user
      localStorage.setItem('currenUser',user )
     
      
    },
     //获得登录名并储存在session中
     getuserphone(state,tel){
     state.phonename=tel
     localStorage.setItem('phonename',tel)
    
      
    },
     //获得登录名并储存在session中
     getuserimg(state,img){
      state.userimg=img
      localStorage.setItem('userimg',img )
     
      
    },
     //获得登录名并储存在session中
     getusermotto(state,motto){
     state.motto=motto
     localStorage.setItem('motto',motto)
      
    }
    ,
     //获得登录名并储存在session中
     getuseremail(state,email){
     state.email=email
     localStorage.setItem('email',email)
      
    }
    ,
    //获得登录名并储存在session中
    getgoodsid(state,goodsid){
    state.goodsid=goodsid
    localStorage.setItem('goodsid',goodsid)
     
   }
    
    
  },
  getters:{
    getToken(state) {
      return state.Authorization
    }
  },

  actions: {},
  modules: {}
});
