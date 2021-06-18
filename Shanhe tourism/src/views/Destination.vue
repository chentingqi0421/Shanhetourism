<template>
  <!-- 头部开始 -->
  <div class="destination">
    <div class="header">
      <div class="play"><span>903人正在游玩▶</span></div>

      <div class="place">
        <span>{{
            checkcity == "" ? "选择目的地" : checkcity
          }}</span><button @click="showArea1()" >▼</button>
      </div>
      <!-- 地区选择弹出区域 -->

      <van-popup
        v-model="showArea"
        position="top"
        class="despopun"
        closeable
        :style="{ height: '100%', width: '100%' }"
      >
     
       <Checkplace/>
 
      </van-popup>
      <!-- 头部搜索栏开始 -->
      <div id="seach">
        <van-search
          class="desseach"
          shape="round"
          background="white"
          placeholder="请输入搜索关键词"
        />
      </div>

      <div>
        <!-- 轮播图开始 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in imagesbox" :key="item.id">
            <img v-lazy="item.idView" class="banner-img" />
            <span>{{ item.title }}</span>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 轮播背景图结束 -->
    </div>

    <!-- 头部搜索栏结束 -->
    <div class="banner">
      <Banner class="desbanner"></Banner>
    </div>
    <!-- 头部结束 -->

    <div class="descenter">

    <div class="aimplace_card"> 
       <!-- 地点栏tab栏开始 -->
  <van-tabs >
  <van-tab 
  v-for="(placename,index) in place" 
  :title="placename" 
  :key="index"
  >   
  <template #title > <van-icon name="fire" color="#ee0a24" />{{placename}}</template>
    <div v-show = 'index == 0'><Discover/></div>
      <div v-show = 'index == 1'><Guangzhou/></div>
      <div v-show = 'index == 2'><Beijing/></div>
      <div v-show = 'index == 3'><Xinjiang/></div>
      <div v-show = 'index == 4'><Xizang/></div>
      <div v-show = 'index == 5'><Zhanjiang/></div>
  </van-tab> 
</van-tabs>
<!-- 地点tab栏结束 -->
    </div>
    </div>

    <Menu />
  </div>
</template>

<script>

import Menu from "../components/menu";
import Banner from "../components/banner";
import "../assets/less/destination.less";
import Checkplace  from'../components/checkplace'
import Discover from '../views/place/Discover.vue';
import Guangzhou from '../views/place/Guangzhou.vue';
import Beijing from '../views/place/Beijing.vue';
import Xinjiang from '../views/place/Xinjiang.vue';
import Xizang from '../views/place/Xizang.vue';
import Zhanjiang from '../views/place/Zhanjiang.vue';

export default {
  
  name: "destination",
  components: {
    Menu,
    Banner,
    Checkplace,
      Discover,
    Guangzhou,Xinjiang,Xizang,Zhanjiang,Beijing,
     },
  data() {
    return {
      value: "",
checkcity:sessionStorage.getItem('checkcity'),
      showArea: false,
      place:[
        "发现","广州","北京","新疆","西藏","湛江","厦门","上海","南京","南京",
      ],
      imagesbox: [
        {
          id: 0,
          title: "非洲大地守护者",
          idView:
            "https://p1-q.mafengwo.net/s13/M00/B7/2F/wKgEaVzBpg-ATLvRAALOYxDoLOE35.jpeg?imageView2%2F2%2Fw%2F700%2Fh%2F600%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90",
        },
        {
          id: 1,
          title: "上帝的着色板新疆",
          idView: "https://i.loli.net/2020/12/05/qWHmb7U3Npwr4SA.jpg",
        },
        {
          id: 2,
          title: "雾里看徽州",
          idView: "https://i.loli.net/2020/12/05/WTVCkAUwtsbizgF.jpg",
        },
        {
          id: 3,
          title: "神山的庇护",
          idView: "https://i.loli.net/2020/12/05/6lNEpbXGLJw5TQf.jpg",
        },
        {
          id: 4,
          title: "阿勒泰的秋",
          idView: "https://i.loli.net/2020/12/05/Q5bthxdAYHK2eEN.jpg",
        },
        {
          id: 5,
          title: "遗落人间的仙境",
          idView: "https://i.loli.net/2020/12/05/A7QiyS3gmCxnTzL.jpg",
        },
      ],
    };
  },
  created(){
if(this.checkcity==null){

  this.checkcity=sessionStorage.getItem("city")
  
}
 
  },
  methods: {
    showArea1(){
      this.showArea=true
      
    }
  },
};
</script>
