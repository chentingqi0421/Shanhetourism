<template>
  <div class="logon">
    <div>
      <van-nav-bar
        class="logonheader"
        title="注册"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <!--背景-->
    <div class="wel" id="background-4"></div>
    <!--左右两边云-->
    <div class="wel" id="box">
      <div class="box-1 lefp"></div>
      <div class="box-1">
        <div class="righp"></div>
      </div>
    </div>
    <!--荧光点点-->
    <div class="wel" id="git"></div>
    <!--登录注册表-->
    <div class="wel" id="from">
      <div class="box-1 le-2">
        <form action="" method="post">
          <div class="flrg-1">
            <h3>注册</h3>
            <div class="a">
              <input
                type="text"
                class="in-1"
                placeholder="输入手机号码"
                v-model="userRegisterInfo.phone"
              />
            </div>
            <div class="a">
              <input
                type="text"
                class="in-1"
                placeholder="您的用户名"
                v-model="userRegisterInfo.username"
              />
            </div>
            <div class="a">
              <input
                type="password"
                class="in-1"
                placeholder="6-16位密码且以字母开头"
                v-model="userRegisterInfo.password"
              />
            </div>
            <div class="a">
              <input
                type="password"
                class="in-1"
                placeholder="再次确认密码"
                v-model="userRegisterInfo.password2"
              />
            </div>

            <div class="a">
              <button type="button" @click="register()">注册</button>
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
import { validForm } from "../../assets/js/validForm";

import { utils } from "../../assets/js/utils";

export default {
  name: "logon",
  components: {},
  data() {
    return {
      userRegisterInfo: {
        phone: "",
        username: "",
        password: "",
        password2: "",
      },
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },

    register() {
      //获取用户注册信息
      let userInfo = this.userRegisterInfo;
      console.log("userInfo ==> ", userInfo);
      //验证注册表单
      let o = {
        phone: {
          value: userInfo.phone,
          reg: /^1[3-9]\d{9}$/,
          errorMsg: "手机号格式不正确",
        },
        nickName: {
          value: userInfo.username,
          reg: /^[\w\u4e00-\u9fa5]{1,10}$/,
          errorMsg: "昵称格式不正确",
        },
        password: {
          value: userInfo.password,
          reg: /^[A-Za-z]\w{5,15}$/,
          errorMsg: "密码格式不正确",
        },
        password2: {
          value: userInfo.password,
          value2: userInfo.password2,
          reg: /^[A-Za-z]\w{5,15}$/,
          errorMsg: "密码不一致",
        },
      };
      if (!validForm.valid(o)) {
        //验证不通过
        return;
      }
      //序列化参数
      //复制对象
      let info = Object.assign({}, userInfo);
      info.appkey = this.appkey;
      let data = utils.queryString(info);
      this.axios({
        method: "POST",
        url: "/regist",
        data,
      }).then((res) => {
        
        console.log(res);
        var code = res.data.code;
        
        // var msg=res.data.msg
        if (code == 200) {
          this.$toast.success(res.data.message);
          //  清空信息表
          for (let key in userInfo) {
            userInfo[key] = "";
          }
          console.log("成功");
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
            this.$router.push({ name: "Login" });
          }, 1500);
        } else {
          if(code == 300){
          this.$toast.fail(res.data.message);
        }
         if(code == 100){
          this.$toast.fail(res.data.message);
        }
        if(code == 0){
          this.$toast.fail(res.data.message);
        }
              
         
          
        }
      })
    },
  },
};
</script>