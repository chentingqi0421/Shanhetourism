<template>
  <div class="home">
    <div class="menu"><Menu /></div>

    <!-- 下拉刷新开始 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <!-- 刷新提示开始 -->
      <template #pulling="props">
        <img
          class="refreshinfo"
          :style="{ transform: `scale(${props.distance / 10})` }"
        />
      </template>
      <!-- 释放提示 -->
      <template #loosing>
        <span>有趣的人生一半是山川湖海</span>
      </template>

      <!-- 刷新提示结束 -->

      <!-- 搜索栏开始 -->
      <van-nav-bar :fixed="true">
        <template #left>
          <van-search shape="round" placeholder="请输入搜索关键词" />
        </template>
        <template #right>
          <van-icon
            name="http://119.29.36.88:2020/icon/message.svg"
            color="#1989fa"
            size="0.9rem"
            dot
            @click="gomessage()"
          />
        </template>
      </van-nav-bar>
      <!-- 搜索栏结束 -->
      <Swipe :bannerimg="bannerimg"></Swipe>
      <!-- 页面滚动开始 -->

      <!-- banner栏开始 -->
      <div class="banner">
        <Banner class="homebanner" />
      </div>
      <!-- banner栏结束 -->

      <div class="desadd" >
        <img :src="add" @click="share()" />
      </div>

      <div id="content">
        
        <vue-waterfall-easy
        @scrollReachBottom="fetchImgsArr"
          :imgsArr="imgsArr"
          :loadingDotCount="loadicon"
          :height="500"
          :imgWidth="180"
          @click="clickFn"
        >
         <div class="img-info" slot-scope="props" >
          <div class="imgtext">{{props.value.title}}</div>
          <div class="imgurl">
            
            <img :src="props.value.userimg" />
            
          </div>
          <div class="username">{{props.value.username}}</div>
          </div>
        </vue-waterfall-easy>
      </div>
      <div><amap></amap></div>
      <div class="white">{{loadingtext}}</div>
      <!-- 页面滚动块结束 -->
    </van-pull-refresh>
    <!-- 下拉刷新结束 -->
  </div>
</template>

<script>
import "../assets/less/home.less";
import Menu from "../components/menu.vue";
import Banner from "../components/banner.vue";
import Swipe from "../components/Swipe";
import vueWaterfallEasy from "vue-waterfall-easy/";
import Amap from "../components/Amap.vue";

export default {
  //调用方法刷新数据
  inject: ["reload"],
  name: "Home",
  created() {
    this.getimages();
    this.getshareinfo();
    // 验证是否登陆，登陆则验证实名信息
    if(this.phonename!=""&&this.currenUser!=""){
      this.getconfirmation();
    }

   
   
  },
  
  components: {
    Menu,
    Swipe,
    Banner,
    vueWaterfallEasy,
    Amap,
  },

  data() {
    return {
      list: [],
      fals: false,
      initArr:[],
      imgsArr: [], //存放所有已加载图片的数组（即当前页面会加载的所有图片）
       //存放每次滚动时下一批要加载的图片的数组
      add: require("../assets/icon/add.svg"),
      loading: false,
      bannerimg: [],
      finished: false,
      menuIndex: 0,
      refreshing: false,
      sharetoken: "",
      n:5,
      loadicon:5,
      loadingtext:"哎呀！都被您看光啦~",
      phonename:localStorage.getItem("phonename"),
      currenUser:localStorage.getItem("currenUser"),
      userinfo:[],
    };
  },

  methods: {
    //  设置页面滚动和下拉刷新页面数据方法
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 6) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      this.reload();
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    clickFn(event, { index, value }) {
      // 阻止a标签跳转
      event.preventDefault();
      // 只有当点击到图片时才进行操作
      if (event.target.tagName.toLowerCase() == "img") {
        console.log("img clicked", index, value);
        this.$router.push({name:"ShareInfo",params:{page:"home",value}})
      }
    },
    

    gomessage() {
      this.$router.push({ name: "Message" });
    },
    getshareinfo() {
      this.axios
        .get("/getshareinfo", {})
        .then((res) => {
          
          for (let i = 0; i < res.data.list.length; i++) {
            var getdata=res.data.list[i]
            // console.log(getdata.title)
            if (res.data.list[i].topimg == "1"&&res.data.list[i].title!="undefined") {
              
              if(getdata.userimg=="null"){
                getdata.userimg="http://119.29.36.88:2020/img/top.jpeg"
              }
                   this.initArr.unshift({ src: getdata.imgurl,username: getdata.username,userimg:getdata.userimg,title:getdata.title,
              place:getdata.place,sharetoken:getdata.sharetoken,tel:getdata.tel,text:getdata.text,time:getdata.time,likecount:getdata.likecount});
              
              
           
              
            }
          }
          
          // 初始化分批加载
         for(var k=0;k<5;k++){
          // console.log("tup", this.imgsArr[k])
          this.imgsArr.push(this.initArr[k])
         }
         
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //设置滚动方法，每次添加四个数据
    fetchImgsArr(){
      

for(var o=this.n;o<this.n+2;o++){
 
    if(this.initArr[o]!==undefined){
  this.imgsArr.push(this.initArr[o])
    }


      
   if(this.imgsArr.length>=this.initArr.length){
          this.loadicon=0
          console.log("不显示")
        }
      }
      this.n=this.n+2
      
       console.log("gundong",this.imgsArr,this.n,this.initArr)
    }  ,  //获取验证是否实名用户
    getconfirmation(){
this.axios
        .get("/getconfirmation", {
          params: {
            phonename:this.phonename
          },
        })
        .then((res) => {
         localStorage.setItem("name",res.data.list.name)
        })
        .catch(function (error) {
          console.log(error);
          
        });
    },
    getimages() {
      this.axios
        .get("/homeimages", {
          params: {},
        })
        .then((response) => {
          this.bannerimg.push(...response.data.list);
        })
        .catch(function (error) {
          console.log(error);
          
        });
    },
    share() {
      if(localStorage.getItem("isLogin")!=null){
this.$router.push({ name: "Share" });
      }else{
        this.$toast.fail("请先登陆")
      }
      
      
    },
  },
};
</script>



