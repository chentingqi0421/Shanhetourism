<template>
  <div class="myinfo">
    <div class="myinffo_header">
      <van-nav-bar
        title="个人资料"
        left-text="返回"
        left-arrow
        :fixed="true"
        @click-left="back"
      />
    </div>
    <div class="myinfo-islogin" v-if="isLogin">
      <!-- 头像上传和展示区域开始 -->
      <div class="myinfo-bag">
        <!-- 判断用户是否有头像 ，有则直接绑定数据展示 -->
        <div class="userimg">
          <div v-if="haveimg">
            <van-image round width="4rem" height="4rem" :src="userimg"> </van-image>
            <!-- 上传头像模块 -->
            <div class="upload">
              <van-uploader :after-read="afterRead">
                <van-button icon="plus" type="primary" round>更换头像</van-button>
              </van-uploader>
            </div>
          </div>
          <!-- 判断用户是否有头像 ，有则直接绑定数据展示，没有头像更改按钮样式上传头像 -->
          <div v-else>
            <van-image
              round
              width="4rem"
              height="4rem"
              src="http://bpic.588ku.com/element_origin_min_pic/19/04/09/d5338875ce7f5f922beb421b2ee39f03.jpg"
            />
            <!-- 上传头像模块 -->
            <div class="upload">
              <van-uploader :after-read="afterRead">
                <van-button icon="plus" type="primary" round>上传头像</van-button>
              </van-uploader>
            </div>
          </div>
        </div>
        <!-- 头像上传和展示区域结束 -->
        <!-- 用户账号信息展示和修改区域开始 -->
        <div class="myinfo-cell">
          <van-cell class="myinfo-van-cell" title="昵称">
            <input
              class="text-area"
              v-model="userinfo.username"
              :placeholder="username"
            />
          </van-cell>
          <van-cell class="myinfo-van-cell" title="账号">
            <input class="text-area" readonly v-model="phone" />
          </van-cell>
          <van-cell class="myinfo-van-cell" title="邮箱">
            <input class="text-area" v-model="userinfo.email" :placeholder="email" />
          </van-cell>

          <van-cell class="myinfo-van-cell" title="个性签名">
            <input class="text-area" v-model="userinfo.motto" :placeholder="motto" />
          </van-cell>

          <van-button class="savebutton" type="primary" round @click="modifyUserInfo()"
            >保存资料</van-button
          >
        </div>
        <!-- 用户账号信息展示区域结束-->
      </div>
      <!-- 用户未登录展示区域开始 -->
    </div>
    <div class="myinfo-nologin" v-else>
      <div class="myinfo-bag">
        <!-- 判断用户是否有头像 ，有则直接绑定数据展示 -->
        <div class="userimg">
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
    </div>
    <!-- 用户未登录展示区域结束 -->
  </div>
</template>
<script>
import "../../assets/less/myinfo.less";

export default {
  //调用方法舒心数据
  inject: ["reload"],
  data() {
    return {
      haveimg: false,
      getflag: false,
      maxSize: 1 * 1024 * 1024,
      isLogin: localStorage.getItem("isLogin"),
      userimg: localStorage.getItem("userimg"),
      phone: localStorage.getItem("phonename"),
      email: localStorage.getItem("email"),
      motto: localStorage.getItem("motto"),
      username: localStorage.getItem("currenUser"),

      userinfo: {
        phone: localStorage.getItem("phonename"),
        email: "",
        motto: "",
        username: "",
      },
    };
  },
  created() {
    //   动态设置显示用户头像
    if (this.userimg == "null") {
      this.haveimg = false;
    } else {
      this.haveimg = true;
    }
    console.log(this.userimg);
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    gologin() {
      this.$router.push({ name: "Login" });
    },

    modifyUserInfo() {
      this.$toast.loading({
        message: "加载中...",
        //防止穿透
        forbidClick: true,

        //显示时间, 如果时间为0，则不会自动关闭
        duration: 1110,

        loadingType: "spinner",
      });
      let data = this.userinfo;

      if (data.email == "") {
        data.email = this.email;
      }
      if (data.username == "") {
        data.username = this.username;
      }
      if (data.motto == "") {
        data.motto = this.motto;
      }

      this.axios({
        method: "POST",
        url: "/modifyUserInfo",
        data,
      }).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          this.$toast.success(res.data.message);
          let user = res.data.nickname;
          let motto = res.data.motto;
          let email = res.data.email;
          this.$store.commit("getusermotto", motto);
          this.$store.commit("getuseremail", email);
          this.$store.commit("getusername", user);
          this.reload();
        }
      });
    },
    //  上传图片
    afterRead(file) {
      //获取token字符串
      console.log("file ==> ", file);
      if (localStorage.key("Authorization") != null) {
        //获取文件类型
        let type = file.file.type.split("/")[1];
        let imgTypes = ["png", "gif", "jpg", "jpeg"];
        if (imgTypes.indexOf(type) === -1) {
          this.$notify({
            message: "图片类型只支持" + imgTypes.join(","),
            color: "#fff",
            background: "#0C34BA",
          });

          return;
        }

        //大小
        if (this.maxSize < file.file.size) {
          this.$notify({
            message: "上传文件大小不能超过" + this.maxSize / 1024 + "KB",
            color: "#fff",
            background: "#0C34BA",
          });
          return;
        }
        //获取base64
        let base64 = file.content;
        //参数序列化
        let phone = localStorage.phonename;

        let data = {
          phone,
          imgType: type,
          serverBase64Img: base64,
        };
        //开始传值
        this.axios({
          method: "POST",
          url: "/updateAvatar",
          data,
        })
          .then((result) => {
            // this.$toast.clear();
            console.log("result ==> ", result);
            if (result.data.code == "200") {
              this.$toast.success(result.data.message);
              let img = "http://119.29.36.88:2020/img/" + result.data.img;
              this.userimg = img;
              this.$store.commit("getuserimg", img);
              this.reload();
            } else {
              this.$toast.success(result.data.message);
            }
          })
          .catch((err) => {
            this.$toast.clear();
            console.log("err ==> ", err);
          });
      }
    },
    //结束
  },
};
</script>
