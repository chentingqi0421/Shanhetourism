<template>
  <!-- 头部栏开始 -->
  <div class="my">
    <div class="top">
      <van-row>
        <!-- 弹出层 -->

        <van-col span="3" @click="showPopup">
          <img src="../assets/icon/shezhi.svg"
        /></van-col>

        <van-col span="16"><h2>我的</h2></van-col>
        <van-col span="3"></van-col>
      </van-row>
      <van-popup
        v-model="show"
        position="left"
        :style="{ width: '60%', height: '100%' }"
        closeable
        close-on-popstate
      >
        <van-nav-bar class="myheader" title="操作" />

        <div v-if="isLogin">
          <div v-if="haveimg">
            <van-image
              @click="gosetimg()"
              round
              width="4rem"
              height="4rem"
              :src="userimg"
            />
          </div>
          <div v-else>
            <van-image
              @click="gosetimg()"
              round
              width="4rem"
              height="4rem"
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1943062350,1030440616&fm=26&gp=0.jpg"
            />

            <span class="my-span">点此去设置头像</span>
          </div>
        </div>
        <div class="username">
          Hi!
          <h2>
            {{ username == "" ? "设置一个昵称方便我们记住你哦" : username }}
          </h2>
        </div>
        <div class="mybutton">
          <van-button
            class="myvan-button"
            type="primary"
            block
            @click="gosetimg()"
            >账号{{ phone }}</van-button
          >
          <van-button
            class="myvan-button"
            type="primary"
            block
            @click="goSecurity()"
            >实名验证：{{ name == "null" ? "未实名" : name }}</van-button
          >
          <van-button
            class="myvan-button"
            type="primary"
            block
            @click="gosetimg()"
            >邮箱{{ email=="null"?"未设置邮箱":email }}</van-button
          >
          <van-button class="myvan-button" type="primary" block @click="out()"
            >退出登录</van-button
          >

          <van-button class="myvan-button" type="primary" block
            >版本@1.0.0</van-button
          >
        </div>
      </van-popup>
    </div>
    <!-- 头部栏结束 -->
    <!-- 头像栏开始 -->
    <div class="my-bg-info" v-if="isLogin">
      <div class="headimg">
        <!-- 更换背景栏 -->
        <div v-if="haveimg">
          <van-image
            @click="gosetimg()"
            round
            width="4rem"
            height="4rem"
            :src="userimg"
          />
        </div>
        <div v-else>
          <van-image
            @click="gosetimg()"
            round
            width="4rem"
            height="4rem"
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1943062350,1030440616&fm=26&gp=0.jpg"
          />

          <span class="my-span">点此去设置头像</span>
        </div>
        <div class="username">
          Hi!
          <h2>
            {{ username == "" ? "设置一个昵称方便我们记住你哦" : username }}
          </h2>
        </div>
        <p>
          <img width="23px" height="23px" src="../assets/icon/qianm.svg" />{{
            motto == "null" ? "这个家伙很懒，什么都没留下" : motto
          }}
        </p>
      </div>
    </div>
    <!-- 未登录状态开始 -->
    <div class="not-login" v-else>
      <van-image
        round
        width="4rem"
        height="4rem"
        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1943062350,1030440616&fm=26&gp=0.jpg"
      />
      <div class="not-logintext"><h2 @click="goLogin">请先登录~</h2></div>
    </div>
    <!-- 未登录状态结束 -->
    <!-- 头像栏结束 -->
    <!-- 操作栏开始 -->
    <div class="body1">
      <div class="box1" @click="gomyinfo">
        <img src="../assets/icon/gerenziliao.svg" />
        <h2>个人资料</h2>
      </div>
      <div class="box2" @click="gomynote">
        <img src="../assets/icon/wode_youji.svg" />
        <h2>我的游记</h2>
      </div>
      <div class="box3" @click="gomyorder">
        <img src="../assets/icon/dingdanguanli.svg" />
        <h2>我的旅游</h2>
      </div>
    </div>
    <div class="body2">
      <div class="box1" @click="gomylike">
        <img src="../assets/icon/wodeshoucang.svg" />
        <h2>我的收藏</h2>
      </div>
      <div class="box2" @click="goaddress">
        <img src="../assets/icon/shouhuodizhi.svg" />
        <h2>常用人员</h2>
      </div>
      <div class="box3" @click="gosecurity">
        <img src="../assets/icon/anquanzhongxin.svg" />
        <h2>安全中心</h2>
      </div>
    </div>
    <!-- 操作栏结束 -->

    <div><Menu /></div>
  </div>
</template>
<script>
import Menu from "../components/menu";
import "../assets/less/my.less";
export default {
  name: "my",
  data() {
    return {
      username: localStorage.getItem("currenUser"),
      isLogin: localStorage.getItem("isLogin"),
      show: false,
      haveimg: false,
      email: localStorage.getItem("email"),
      phone: localStorage.getItem("phonename"),
      motto: localStorage.getItem("motto"),
      userimg: localStorage.getItem("userimg"),
      name: localStorage.getItem("name"),
    };
  },
  created() {
    if (this.userimg == "null") {
      this.haveimg = false;
    } else {
      this.haveimg = true;
    }
  },
  components: {
    Menu,
  },

  methods: {
    goaddress() {
      this.$router.push({ name: "People" });
    },
    goSecurity() {
      this.$router.push({
        name: "Security",
        params: {  page: "my" },
      });
    },
    goLogin() {
      this.$router.push({ name: "Login" });
    },
    gomyorder() {
      this.$router.push({ name: "Myorder" });
    },
    gomyinfo() {
      this.$router.push({ name: "Myinfo" });
    },
    gosetimg() {
      this.$router.push({ name: "Myinfo" });
    },
    gomynote() {
      this.$router.push({ name: "MyNote" });
    },
    gomylike() {
      this.$router.push({ name: "MyLike" });
    },
    gosecurity() {
      this.$router.push({ name: "Security" });
    },
    showPopup() {
      this.show = true;
    },
    out() {
      this.$dialog
        .confirm({
          title: "退出登录",
          message: "是否确认退出登录！",
          confirmButtonColor: "#0C34BA",
        })
        .then(() => {
          if (localStorage.key("Authorization") != null) {
            window.localStorage.clear();
            let second = 2;
            var timer = setInterval(() => {
              second--;
              if (second) {
                this.$toast.success("退出成功");
              } else {
                clearInterval(timer);
                // 手动清除 Toast
                this.$toast.clear();
              }

              this.$router.push({ name: "Home" });
            }, 1000);
          } else {
            this.$toast.fail("您还没登录");
          }
        })

        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>