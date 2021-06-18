<template>
  <div class="login">
    <div>
      <van-nav-bar
        class="loginheader"
        title="登录"
        left-text="返回"
        right-text="先逛一逛"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <!--背景-->
    <div class="wel" id="background-3"></div>
    <!--左右两边云-->
    <div class="wel" id="box">
      <div class="box-1 lefp"></div>
      <div class="box-1">
        <div class="righp"></div>
      </div>
    </div>
    <!--荧光点点-->
    <div class="wel" id="git"></div>
    <!--登录表-->
    <div class="wel" id="from">
      <div class="box-2 le-1">
        <form action="" method="post">
          <div class="flrg">
            <h3>登录</h3>
            <div class="a">
              <!--<label>账号：</label>-->
              <input
                type="text"
                class="in-1"
                placeholder="请输入手机号"
                v-model="userLoginInfo.phone"
              />
            </div>
            <div class="a">
              <!--<label>密码：</label>-->
              <input
                type="password"
                class="in-1"
                placeholder="请输入密码"
                v-model="userLoginInfo.password"
              />
            </div>
            <div class="a">
              <button type="button" @click="submit_data">登录</button>
            </div>
            <div class="a">
              <button type="button" @click="goLogon">注册</button>
            </div>
            <div class="a">
              <div class="hr"></div>
            </div>
            <div class="a">
              <a href="#" @click="goforget()">忘记密码？</a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div style="text-align: center"></div>
  </div>
</template>
<script>
import "../../assets/less/login.less";

import { utils } from "../../assets/js/utils";
import { validForm } from "../../assets/js/validForm";

export default {
  name: "login",
  components: {},
  data() {
    return {
      userLoginInfo: {
        phone: "",
        password: "",
      },
    };
  },
  
  methods: {
    goLogon() {
      this.$router.push({ name: "Logon" });
    },
     goforget(){
      this.$router.push({
        name: "Forgetpassword",
        params: { 
          page:"login",show2: true },
      });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({ name: "Home" });
    },
    submit_data() {
      let userInfo = this.userLoginInfo;

      let o = {
        phone: {
          value: userInfo.phone,
          reg: /^1[3-9]\d{9}$/,
          errorMsg: "手机格式不正确",
        },
        password: {
          value: userInfo.password,
          reg: /^[A-Za-z]\w{5,15}$/,
          errorMsg: "密码格式不正确",
        },
      };

      //验证表单
      if (!validForm.valid(o)) {
        return;
      }
      //复制userInfo
      let info = Object.assign({}, userInfo);
      //开启加载提示
      this.$toast.loading({
        message: "加载中...",
        //防止穿透
        forbidClick: true,

        //显示时间, 如果时间为0，则不会自动关闭
        duration: 0,

        loadingType: "spinner",
      });

      //参数序列化
      let data = utils.queryString(info);
      this.axios({
        method: "POST",
        url: "/login",
        data,
      })
        .then((res) => {
          var code = res.data.code;
          if (code == 200) {
           this.$store.commit('changeToken',res.data.token) 
           //保存用户信息到session和vuex调用保证刷新后不消失
           let email=res.data.email
           let tel=res.data.tel
            let user=res.data.user
            let img=res.data.userimg
            let motto=res.data.motto
            
           this.$store.commit('getusername',user)  
           this.$store.commit('getuserphone',tel) 
           this.$store.commit('getuserimg',img)  
           this.$store.commit('getusermotto',motto)
           this.$store.commit('getuseremail',email)      
           console.log('changeToken')
            console.log("登录成功");
            console.log(res);
            let second = 2;
            var timer = setInterval(() => {
              second--;
              if (second) {
                this.$toast.success(res.data.message);
              } else {
                clearInterval(timer);
                // 手动清除 Toast
                this.$toast.clear();
              }
              this.$router.push({ name: "Home" });
            }, 1000);
          } else {
            if (code == 100) {
              console.log(res);
              this.$toast.fail(res.data.message);
            } else {
              console.log(res);
              this.$toast.fail(res.data.message);
            }
          }
        })
        .catch(function (error) {
          console.log(error);
          this.$toast.clear();
        });
    },
  },
};
</script>
