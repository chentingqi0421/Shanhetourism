<template>
  <div class="myinfo">
    <van-nav-bar
      title="安全中心"
      left-text="返回"
      left-arrow
      :fixed="true"
      @click-left="back"
    />
    <div class="security-islogin" v-if="isLogin">
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
        <div class="changecenter">
          <div class="main_body"></div>
          <div class="vant-cell">
            <van-cell
              title="手机号"
              is-link
              @click="showPopup"
              :value="phonename"
            />

            <van-popup
              v-model="show"
              position="bottom"
              round
              :style="{ height: '40%', width: '100%' }"
              closeable
            >
              <div class="pupbody">
                <van-form @submit="onSubmit1">
                  <!-- 通过 pattern 进行正则校验 -->
                  <van-cell class="myinfo-van-cell" title="当前手机号">
                    <van-field
                      v-model="phonename"
                      name="currenphone"
                      readonly
                    />
                  </van-cell>
                  <van-cell class="myinfo-van-cell" title="新手机号">
                    <van-field
                      v-model="phone"
                      name="newphone"
                      placeholder="请输入您要更换的账号"
                      :rules="[{ pattern, message: '请输入正确的手机号' }]"
                    />
                  </van-cell>
                  <van-cell class="myinfo-van-cell" title="密码">
                    <van-field
                      type="password"
                      v-model="password"
                      name="password"
                      placeholder="输入以字母开头6~16位密码"
                      :rules="[{ validator, message: '密码格式错误' }]"
                    />
                  </van-cell>

                  <div style="margin: 16px">
                    <van-button round block type="info" native-type="submit"
                      >提交</van-button
                    >
                  </div>
                </van-form>
                <!-- 修改手机号栏介结束 -->
              </div>
            </van-popup>
            <!-- 实名验证栏目开始 -->
            <van-cell
              title="实名验证"
              is-link
              @click="showPopup4"
              
            />
            <van-popup
              v-model="show4"
              position="bottom"
              round
              :style="{ height: '40%', width: '100%' }"
              closeable
            >
              <div class="pupbody">
                <van-form @submit="onSubmit6">
                  <!-- 通过 pattern 进行正则校验 -->
                  <van-cell class="myinfo-van-cell" title="姓名">
                    <van-field
                      v-model="name"
                      name="name"
                       placeholder="输入您姓名"
                    />
                     <van-field
                      class="display"
                      v-model="phonename"
                      name="phonename"
                    />
                  </van-cell>
                  <van-cell class="myinfo-van-cell" title="身份证">
                    <van-field
                  v-model="identitycard"
                name="identitycard"
                  placeholder="输入您的身份证"
                  :rules="[{  pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '身份证格式错误' }]"
                    />
                  </van-cell>
                    <div style="margin: 16px">
                    <van-button round block type="info" native-type="submit"
                      >提交</van-button
                    >
                  </div>
                </van-form>
                
              </div>
            </van-popup>
            <!-- 实名验证栏结束 -->

            
            <!-- 支付密码修改开始 -->
            <van-cell title="支付密码" is-link @click="showPopup1" />
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
                    <van-cell class="myinfo-van-cell" title="旧支付密码">
                      <van-field
                        type="password"
                        v-model="payword"
                        name="payword"
                        placeholder="请验证旧密码"
                        :rules="[
                          {
                            validator: asyncValidator,
                            message: '密码格式错误',
                          },
                        ]"
                      />
                      <van-field
                        class="display"
                        v-model="phonename"
                        name="phonename"
                      />
                    </van-cell>
                    <van-cell class="myinfo-van-cell" title="新支付密码">
                      <van-field
                        type="password"
                        v-model="payword1"
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
                  <van-cell class="myinfo-van-cell" title="旧登录密码">
                    <van-field
                      type="password"
                      v-model="password"
                      name="password"
                      placeholder="请验证旧密码"
                      :rules="[{ validator, message: '密码格式错误' }]"
                    />
                    <van-field
                      class="display"
                      v-model="phonename"
                      name="phonename"
                    />
                  </van-cell>
                  <van-cell class="myinfo-van-cell" title="新登录密码">
                    <van-field
                      type="password"
                      v-model="password1"
                      name="password1"
                      placeholder="字母开头6~16位数字密码"
                      :rules="[{ validator, message: '密码格式错误' }]"
                    />
                  </van-cell>
                  <van-cell class="myinfo-van-cell" title="确认密码">
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
            <van-cell title="注销账号" is-link @click="showPopup3" />
             <van-popup
              v-model="show3"
              position="bottom"
              round
              :style="{ height: '40%', width: '100%' }"
              closeable
            >
              <div class="pupbody">
                <van-form @submit="onSubmit5">
                  <!-- 通过 pattern 进行正则校验 -->
                  <van-cell class="myinfo-van-cell" title="手机号">
                    <van-field
                      v-model="phonename"
                      name="currenphone"
                    
                    />
                  </van-cell>
                  <van-field
                      class="display"
                      v-model="phonename"
                      name="asyncValidator"
                    />
                 
                  <van-cell class="myinfo-van-cell" title="密码">
                    <van-field
                      type="password"
                      v-model="password3"
                      name="password"
                      placeholder="输入以字母开头6~16位密码"
                      :rules="[{ validator, message: '密码格式错误' }]"
                    />
                  </van-cell>

                  <div style="margin: 16px">
                    <van-button round block type="info" native-type="submit"
                      >提交</van-button
                    >
                  </div>
                </van-form>
                <!-- 修改手机号栏介结束 -->
              </div>
            </van-popup>
            
          </div>
        </div>
      </div>
    </div>
    <div class="security-nologin" v-else>
      <van-image
        round
        width="4rem"
        height="4rem"
        src="http://bpic.588ku.com/element_origin_min_pic/19/04/09/d5338875ce7f5f922beb421b2ee39f03.jpg"
      />
      <!-- 上传头像模块 -->
      <div class="upload">
        <van-button icon="plus" type="primary" round @click="gologin()"
          >去登录</van-button
        >
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
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4:false,
      newpayword1: "",
      newpayword2: "",
      phone: "",
      name:"",
      identitycard:"",
      password: "",
      password1: "",
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
    this.getpayword();
    this.getRouterData();
    if(this.userimg==="null"){
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
    showPopup() {
      this.show = true;
    },
    showPopup1() {
      this.show1 = true;
    },
    showPopup2() {
      this.show2 = true;
    },
     showPopup3() {
      this.show3 = true;
    },
    showPopup4(){
      this.show4 = true;
    },
     getRouterData() {
       var page=this.$route.params.page
       console.log(page)
    if( page=="my"){
      this.show4=true
    }
    if(page=="orderform"){
      this.show1=true
    }
      
      
    },

    validator(val) {
      return /^[A-Za-z]\w{5,15}$/.test(val);
    },

    getpayword() {
      
     if(this.isLogin == "true"){
       console.log(this.isLogin)
        let data = this.phone2;
        console.log(data);
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

    //请求后台更改手机号操作
    onSubmit1(value) {
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
        url: "/changephone",
        data,
      }).then((res) => {
        var code = res.data.code;
        if (code == 200) {
          this.$toast.success(res.data.message);
          let tel = res.data.newphone;
          console.log(tel)
          this.$store.commit("getuserphone", tel);
          this.reload();
        }
        if (code == 0) {
          this.$toast.fail(res.data.message);
        }
        if (code == 404) {
          this.$toast.fail(res.data.message);
        }
      });
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
        url: "/changepayword",
        data,
      }).then((res) => {
        var code = res.data.code;
        console.log(res.data);
        if (code == 200) {
          this.$toast.success(res.data.message);
          this.reload();
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
        url: "/changepassword",
        data,
      }).then((res) => {
        var code = res.data.code;
        if (code == 200) {
          this.$toast.success(res.data.message);
          // 清空本地信息
          window.localStorage.clear();
          this.reload();

          this.$router.push({ name: "Login" });
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
    // 注销账户
    
    onSubmit5(value){
      console.log(value)
        this.$dialog
        .confirm({
          title: "注销账号",
          message: "注销账号无法恢复，请慎重！",
          confirmButtonColor: "#B22222",
        })
        .then(() => {
           this.$toast.loading({
        message: "加载中...",
        //防止穿透
        forbidClick: true,

        //显示时间, 如果时间为0，则不会自动关闭
        duration: 0,

        loadingType: "spinner",
      });
          let data=value
          this.axios({
        method: "POST",
        url: "/clean",
        data,
      }).then((res) => {
        var code = res.data.code;
        console.log(res)
        if(code==200){
           this.$toast.success(res.data.message);
            window.localStorage.clear();
          this.reload();

          this.$router.push({ name: "Home" });
        }
        else{
           this.$toast.fail(res.data.message);
           
          
        }
      })
        })
    },
    onSubmit6(value){
      console.log(value)
      let data=value
   this.axios({
        method: "POST",
        url: "/confirmation",
        data,
      }).then((res) => {
        var code = res.data.code;
        if(code==200){
           this.$toast.success(res.data.message);
this.show4=false
this.$router.push({name:"Home"})
         
        }
        else{
          
           this.$toast.fail(res.data.message);
           
          
        }
      })    
    },
  },
};
</script>
