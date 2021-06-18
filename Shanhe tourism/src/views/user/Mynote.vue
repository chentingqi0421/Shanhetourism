<template>
  <div class="myinfo">
    <van-nav-bar title="我的游记" left-text="返回" left-arrow @click-left="back" />
    <div v-if="havedata">
      <div v-for="(notearr, index) in noteArr" :key="index">
        <van-card
          class="note"
          :tag="notearr.place"
          :desc="notearr.time"
          :title="notearr.title"
          :thumb="notearr.src"
          @click="goshareinfo(notearr)"
        >
          <template #footer>
            <van-button size="mini" @click="delenote(notearr)">删除游记</van-button>
          </template></van-card
        >
      </div>
      
    </div>
    <!-- --------->
    <div v-else>
      <div v-if="isLogin">
        <van-empty description="什么都没有，先去逛逛吧"></van-empty>
        <van-button round type="danger" class="bottom-button" @click="gohome"
          >去首页</van-button
        >
      </div>
      <div v-else class="nologin">
        <van-empty description="还没登录哦，先去登录吧"></van-empty>
        <van-button round type="danger" class="bottom-button" @click="gologin"
          >去登陆</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/less/mynote.less";
export default {
  inject: ["reload"],
  data() {
    return {
      sharelist: [],
      noteArr: [],
      havedata: true,
      isLogin: localStorage.getItem("isLogin"),
      phonename: localStorage.getItem("phonename"),
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    gologin() {
      this.$router.push({ name: "Login" });
    },
    gohome() {
      this.$router.push({ name: "Home" });
    },
    getshareinfo() {
      this.axios
        .get("/getmyshareinfo", {
          params: { phonename: this.phonename },
        })
        .then((res) => {
          console.log(res);

          for (let i = 0; i < res.data.list.length; i++) {
            var getdata = res.data.list[i];
            if (res.data.list[i].topimg == "1" && res.data.list[i].title != null) {
              this.noteArr.push({
                src: getdata.imgurl,
                username: getdata.username,
                userimg: getdata.userimg,
                title: getdata.title,
                place: getdata.place,
                sharetoken: getdata.sharetoken,
                tel: getdata.tel,
                text: getdata.text,
                time: getdata.time,
                likecount: getdata.likecount,
              });
            }
          }
          console.log("=====图片数据", this.noteArr);
          if (this.noteArr.length == 0) {
            this.havedata = false;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    goshareinfo(notearr) {
      this.$router.push({
        name: "ShareInfo",
        params: { page: "mynote", data: notearr },
      });
    },
    //删除游记
    delenote(notearr) {
      this.axios({
        method: "GET",
        url: "/delenote",
        params: {
          sharetoken: notearr.sharetoken,
        },
      }).then(() => {
        
      this.reload();
      });
    },
  },

  created() {
    this.getshareinfo();
  },
  mounted() {},
};
</script>
