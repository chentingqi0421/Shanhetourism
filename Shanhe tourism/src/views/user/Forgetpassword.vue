<template>
  <div class="myinfo">
    <van-nav-bar
      title="忘记密码"
      left-text="返回"
      left-arrow
      :fixed="true"
      @click-left="back"
    />
    <div class="security-islogin" >
      <div class="security-bag">
        <div class="userimg">
          <van-image
            class="islogin-images"
            round
            width="4rem"
            height="4rem"
            :src="userimg"
          >
          </van-image>
        </div>

        <!-- 操作中心开始 -->
        <!-- 修改手机号开始 -->
        <div class="changecenter2">
          <div class="vant-cell">
            <van-cell
            v-show="isLogin"
              title="手机号"
              is-link
            
              :value="phonename"
            />

           
            <!-- 支付密码修改开始 -->
            <van-cell title="支付密码" is-link @click="showPopup1"  v-show="isLogin"/>
            <van-popup
              v-model="show1"
              position="bottom"
              round
              :style="{ height: '40%', width: '100%' }"
              closeable
            >
              <div class="pupbody">
                <div v-if="havepayword">
                  <van-form @submit="onSubmit2">
                    <!-- 通过 pattern 进行正则校验 -->
                    <van-cell class="myinfo-van-cell" title="实名姓名">
                      <van-field
                        v-model="name"
                        name="name"
                        placeholder="请输入实名验证姓名"
                        
                      />
                      <van-field
                        class="display"
                        v-model="phonename"
                        name="phonename"
                      />
                    </van-cell>
                    <van-cell class="myinfo-van-cell" title="实名身份证">
                      <van-field
                        v-model="identitycard"
                        name="identitycard"
                        placeholder="输入身份证号码"
                         :rules="[{  pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '身份证格式错误' }]"
                      />
                    </van-cell>
                    <van-cell class="myinfo-van-cell" title="新支付密码">
                      <van-field
                        type="password"
                        v-model="payword2"
                        name="payword2"
                        placeholder="确认新的密码"
                        :rules="[
                          {
                            validator: asyncValidator,
                            message: '密码格式错误',
                          },
                        ]"
                      />
                    </van-cell>

                    <div style="margin: 16px">
                      <van-button round block type="info" native-type="submit"
                        >提交</van-button
                      >
                    </div>
                  </van-form>
                </div>
                <div v-else>
                  <div class="nopass-text"><h3>您还没有设置支付密码哦</h3></div>
                  <van-form @submit="onSubmit3">
                    <!-- 通过 pattern 进行正则校验 -->
                    <van-field
                      class="display"
                      v-model="phonename"
                      name="phonename"
                    />
                    <van-cell class="myinfo-van-cell" title="支付密码">
                      <van-field
                        type="password"
                        v-model="newpayword1"
                        name="payword1"
                        placeholder="输入6位数字密码"
                        :rules="[
                          {
                            validator: asyncValidator,
                            message: '密码格式错误',
                          },
                        ]"
                      />
                    </van-cell>
                    <van-cell class="myinfo-van-cell" title="确认密码">
                      <van-field
                        type="password"
                        v-model="newpayword2"
                        name="payword2"
                        placeholder="确认新的密码"
                        :rules="[
                          {
                            validator: asyncValidator,
                            message: '密码格式错误',
                          },
                        ]"
                      />
                    </van-cell>

                    <div style="margin: 16px">
                      <van-button round block type="info" native-type="submit"
                        >提交</van-button
                      >
                    </div>
                  </van-form>
                </div>
              </div>
            </van-popup>
            <!-- 修改支付密码结束 -->
            <!-- 修改登录密码开始 -->
            <van-cell title="登录密码" is-link @click="showPopup2" />
            <van-popup
              v-model="show2"
              position="bottom"
              round
              :style="{ height: '40%', width: '100%' }"
              closeable
            >
              <div class="pupbody">
                <van-form @submit="onSubmit4">
                  <!-- 通过 pattern 进行正则校验 -->
                     <van-cell class="myinfo-van-cell" title="手机账号">
                    <van-field
                      v-model="phonename"
                      name="phonename"
                      placeholder="请输入您的手机账号"
                        :rules="[{  pattern:/^1[3-9]\d{9}$/, message: '手机账号格式错误' }]"
                    />
                  </van-cell>
                  <van-cell class="myinfo-van-cell" title="实名姓名">
                    <van-field
                      v-model="name"
                      name="name"
                      placeholder="请输入实名验证姓名"
                    
                    />
                   
                  </van-cell>
                  <van-cell class="myinfo-van-cell" title="实名身份证">
                    <van-field
                      v-model="identitycard"
                      name="identitycard"
                      placeholder="请输入实名验证身份证"
                        :rules="[{  pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '身份证格式错误' }]"
                    />
                  </van-cell>
                  <van-cell class="myinfo-van-cell" title="新登陆密码">
                    <van-field
                      type="password"
                      v-model="password2"
                      name="password2"
                      placeholder="确认新的密码"
                      :rules="[{ validator, message: '密码格式错误' }]"
                    />
                  </van-cell>

                  <div style="margin: 16px">
                    <van-button round block type="info" native-type="submit"
                      >提交</van-button
                    >
                  </div>
                </van-form>
              </div></van-popup
            >
      
           
            
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
import "../../assets/less/security.less";
export default {
  //调用核心刷新方法
  inject: ["reload"],
  data() {
    return {
      havepayword: false,
      show1: false,
      show2: false,
      newpayword1: "",
      newpayword2: "",
      phone: "",
      name:"",
      identitycard:"",
      password2: "",
       password3: "",
      payword: "",
      payword1: "",
      payword2: "",
      pattern: /^1[3-9]\d{9}$/,
      isLogin: localStorage.getItem("isLogin"),
      userimg: localStorage.getItem("userimg"),
      phonename: localStorage.getItem("phonename"),
      phone2: { phonename: localStorage.getItem("phonename") },
      page:""
    };
  },
  created() {
    if(this.isLogin==="true"){
this.getpayword();
    }
    
    this.getRouterData();
    if(this.userimg===null){
this.userimg="http://119.29.36.88:2020/img/top.jpeg"
    }
  },
  methods: {
    //根据路由传值来获取页面信息做逻辑跳转
    back() {
      if(this.page==""){      
this.$router.push({ name: "My" });
    }else{
       this.$toast("请移驾订单中心支付")
      this.$router.push({ name: "Myorder" });
    }
     
    },
    gologin() {
      this.$router.push({ name: "Login" });
    },

    showPopup1() {
      this.show1 = true;
    },
    showPopup2() {
      this.show2 = true;
    },
    
     getRouterData() {
         var page=this.$route.params.page
    if(page==="orderform"){
this.show1=true
    }else{
this.show2=true
    }
      
      
    },

    validator(val) {
      return /^[A-Za-z]\w{5,15}$/.test(val);
    },

    getpayword() {
      
     if(this.isLogin == "true"){
       console.log(this.isLogin)
        let data = this.phone2;
        this.axios({
          method: "POST",
          url: "/havepayword",
          data,
        }).then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.havepayword = true;
          } else {
            this.havepayword = false;
          }
        });
     }
    },
    //异步验证密码
    asyncValidator(val) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(/^\d{6}$/.test(val));
        }, 500);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },


    onSubmit2(value) {
      this.$toast.loading({
        message: "加载中...",
        //防止穿透
        forbidClick: true,

        //显示时间, 如果时间为0，则不会自动关闭
        duration: 0,

        loadingType: "spinner",
      });

      let data = value;
      this.axios({
        method: "POST",
        url: "/forgetpayword",
        data,
      }).then((res) => {
        var code = res.data.code;
        console.log(res.data);
        if (code == 200) {
          this.$toast.success(res.data.message);
          this.show1=false
        }
        if (code == 0) {
          this.$toast.fail(res.data.message);
        }
        if (code == 100) {
          this.$toast.fail(res.data.message);
        }
        if (code == 404) {
          this.$toast.fail(res.data.message);
        }
      });
    },
    onSubmit3(value) {
      this.$toast.loading({
        message: "加载中...",
        //防止穿透
        forbidClick: true,

        //显示时间, 如果时间为0，则不会自动关闭
        loadingType: "spinner",
      });

      let data = value;
      this.axios({
        method: "POST",
        url: "/setpayword",
        data,
      }).then((res) => {
        var code = res.data.code;
        console.log(res.data);
        if (code == 200) {
          this.$toast.success(res.data.message);
          this.reload();
        }
        if (code == 100) {
          this.$toast.fail(res.data.message);
        }
        if (code == 0) {
          this.$toast.fail(res.data.message);
        }
        if (code == 404) {
          this.$toast.fail(res.data.message);
          this.$toast.clean();
        }
      });
    },
    onSubmit4(value) {
      this.$toast.loading({
        message: "加载中...",
        //防止穿透
        forbidClick: true,

        //显示时间, 如果时间为0，则不会自动关闭
        duration: 0,

        loadingType: "spinner",
      });

      let data = value;
      console.log(data);
      this.axios({
        method: "POST",
        url: "/forgetpassword",
        data,
      }).then((res) => {
        var code = res.data.code;
        if (code == 200) {
          this.$toast.success(res.data.message);
          // 清空本地信息
         this.show2=false
        }
        if (code == 100) {
          this.$toast.success(res.data.message);
        }
        if (code == 0) {
          this.$toast.fail(res.data.message);
        }
        if (code == 404) {
          this.$toast.fail(res.data.message);
        }
      });
    },
    
        
    
  },
};
</script>
