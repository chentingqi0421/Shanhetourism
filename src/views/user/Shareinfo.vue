<template>
  <div class="Shareinfo">
    <van-nav-bar
      class="loginheader"
      left-text="返回"
      fixed
      left-arrow
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <div class="center">
      <van-swipe>
        <van-swipe-item v-for="(images, index) in imgsArr" :key="index">
          <van-image
            width="10rem"
            height="7rem"
            fit="contain"
            lazy-load
            :src="images"
          />
        </van-swipe-item>
      </van-swipe>
      <div class="title">{{ shareInfo.title }}</div>
      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
      >
        <van-image
          class="userimg"
          round
          width="2.2rem"
          height="2.2rem"
          :src="shareInfo.userimg"
        />
      </van-divider>
      <p class="username">{{ shareInfo.username }}</p>
      <img :src="start_icon" class="start_icon" />

      <div class="sharetext">
        <p class="null"></p>
        {{ shareInfo.text }}
      </div>

      <div class="placeinfo">
        <h5>{{ shareInfo.time }}</h5>
      </div>
      <div class="placeinfo2">
        <h1>{{ shareInfo.place =="null" ?"神秘之地" :shareInfo.place}}</h1>
      </div>

      <div class="like">
        <div class="likeimg">
          <van-image
            v-for="items in likeimg"
            :key="items"
            round
            width="0.8rem"
            height="0.8rem"
            :src="items"
            class="van-img-toping"
          />
        </div>
        <div class="likeicon">
          <van-icon :name="like" :color="color" @click="likeit()" />
          <p class="likecount">{{ likecount==null?0:likecount }}</p>
        </div>
        <van-divider
          :style="{ color: '#1989fa', borderColor: '#696969', padding: '10px' }"
        />
<div v-if="isLogin">
        <div class="leave_message">
          <van-image
            round
            width="1rem"
            height="1rem"
            :src="userimg"
            class="van-img-toping2"
          />
          <van-field
            v-model="message"
            rows="1"
            autosize
            type="textarea"
            placeholder="说点什么吧"
          >
            <template #button>
              <van-button
                size="small"
                type="primary"
                round
                @click="savecomment()"
                class="save_button"
                >发表评论</van-button
              >
            </template>
          </van-field>
        </div>

        <van-divider
          :style="{ color: '#1989fa', borderColor: '#696969', padding: '10px' }"
        />

        <div class="comment">
          <div v-for="comm in comment" :key="comm">
            <van-image
              round
              width="0.8rem"
              height="0.8rem"
              :src="comm.usernameimg"
              class="van-img-toping3"
            />
            <span class="comment_username">{{ comm.username }}</span
            >：
            <p class="text">{{ comm.message }}</p>
          
            <van-divider
              :style="{
                color: '#1989fa',
                borderColor: '#696969',
                padding: '10px',
              }"
            />
          </div>
        </div>
        </div>
        <div v-else class="nologin">

           <van-empty description="登陆可以留言点赞哦"></van-empty>
        <van-button round type="danger" class="bottom-button" @click="gologin"
          >登录</van-button
        >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/less/shareinfo.less";
export default {
  inject: ["reload"],
  data() {
    return {
      shareInfo: [],
      imgsArr: [],
      start_icon: require("../../assets/icon/star.svg"),
      value1: 0,
      likecount: 0,
      isLogin: localStorage.getItem("isLogin"),
      likeimg: [],
      message: "",
      like: "like-o",
      color: "#f21f28",
      userimg: localStorage.getItem("userimg"),
      comment: [],
    };
  },
  created() {
    if(this.userimg===null){
this.userimg="http://119.29.36.88:2020/img/top.jpeg"
    }
    
    this.getRouterData();
    if(this.isLogin===null){
this.isLogin=false
    }
    
    
  },
  mounted() {
    this.getshareinfo();
    this.getlikeimg();
    this.checkvalue();
    this.getcomment();
    if(this.shareInfo.userimg==null){
      this.shareInfo.userimg=this.userimg
    }
  },
  methods: {
    gologin() {
      this.$router.push({ name: "Login" });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    checkvalue() {
      
    },
    getRouterData() {
      let page = this.$route.params.page;
      if (page === "home") {
        this.shareInfo = this.$route.params.value;
        this.likecount = this.shareInfo.likecount;
      }

      if (page === "mynote") {
        this.shareInfo = this.$route.params.data;
        this.likecount = this.shareInfo.likecount;
      }
      
    },
    savecomment() {
      if (this.message == "") {
        this.$toast.fail("留言不能为空");
      } else {
        this.axios({
          method: "get",
          url: "/savecomment",
          params: {
            tousername: this.shareInfo.username,
            sharetoken: this.shareInfo.sharetoken,
            username: localStorage.getItem("currenUser"),
            message: this.message,
            userimg: this.userimg,
          },
        }).then((res) => {
          this.$toast.success(res.data.message);
          console.log(res);
          this.reload();
        });
      }
    },
    getcomment() {
      this.axios({
        method: "get",
        url: "/getcomment",
        params: {
          sharetoken: this.shareInfo.sharetoken,
        },
      }).then((res) => {
        
        this.comment.push(...res.data.data);
        
      });
    },
    getlikeimg() {
      this.axios({
        method: "get",
        url: "/getlikeimg",
        params: {
          sharetoken: this.shareInfo.sharetoken,
        },
      }).then((res) => {
        //分割数据

        var splitArray = new Array();
        var data = res.data.list.likeimg;
        var regex = /,/;
        splitArray = data.split(regex);

        for (let i = 0; i < splitArray.length; i++) {
          if (this.likeimg.indexOf(splitArray[i]) === -1) {
            if (splitArray[i] != "") {
              this.likeimg.unshift(splitArray[i]);
            }
          }
        }
        this.likeimg.forEach((element) => {
          if (element === this.userimg) {
            this.like = "like";
          }
        });
      });
    },
    likeit() {
      if(this.isLogin=="true"){
      if (this.like === "like-o") {
        this.axios({
          method: "post",
          url: "/likeshareinfo",
          data: {
            sharetoken: this.shareInfo.sharetoken,
            userimg: this.userimg,
            like: this.shareInfo.likecount,
          },
        })
          .then((res) => {
            console.log(res)
            this.likecount = res.data.results2[0].likecount;
           
            this.getlikeimg();
          })
          .catch(function (error) {
            console.log(error);
          });
      }else{
        this.$toast.fail("您已经点过赞啦")
      }
      }else{
        this.$toast.fail("您还没登陆哦")
      }
    },
    getshareinfo() {
      this.axios({
        method: "GET",
        url: "/getshareinfobytoken",
        params: {
          sharetoken: this.shareInfo.sharetoken,
          tel: this.shareInfo.tel,
        },
      })

        .then((res) => {
          for (let i = 0; i < res.data.list.length; i++) {
            if (res.data.list[i].title != "") {
              this.imgsArr.push(res.data.list[i].imgurl);
            }
          }
         
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
