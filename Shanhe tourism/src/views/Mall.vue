<template>
  <div class="mall">
    <!-- 头部搜索栏开始 -->
    <div class="mallheader">
      <van-row>
        <van-col span="20">
          <van-search
            class="mallseach"
            
            shape="round"
            background="rgb(243, 213, 223)"
            placeholder="自由行包车"
          />
        </van-col>
        <van-col span="1"
          ><img class="" src="../assets/icon/dingdan.svg"  @click="goshopbag()"/>
          </van-col>
      </van-row>
    </div>
    <div class="diration">
      <img src="../assets/images/shangcheng.png" />
    </div>
    <div class="goods">
      <div class="mallswipe">
        <van-swipe class="mall-swipe">
          <van-swipe-item>
            <van-grid :column-num="5">
              <van-grid-item
                v-for="(value, index) in firstlist"
                :key="index"
                :icon="value.icon"
                :text="value.text"
              />
            </van-grid>
          </van-swipe-item>
          <van-swipe-item>
            <van-grid :column-num="5">
              <van-grid-item
                v-for="(value, index) in seacondlist"
                :key="index"
                :icon="value.icon"
                :text="value.text"
              />
            </van-grid>
          </van-swipe-item>

          <template #indicator>
            <div class="custom-indicator"></div>
          </template>
        </van-swipe>
      </div>
      <div class="mall_bottom">
        <div class="mall_bottom_1">
          <img src="../assets/icon/jifen.svg" />
          <p>我的积分</p>
        </div>
        <div class="mall_bottom_2">
          <img src="../assets/icon/youhuiquan.svg" />
          <p>领券中心</p>
        </div>
        <div class="mall_bottom_3">
          <img src="../assets/icon/kanjia.svg" />
          <p>砍价免费</p>
        </div>
      </div>
      <div class="goodstab">
        <van-tabs
          type="card"
          class="carheader"
          animated
          background="rgb(245, 226, 233)"
          @click="onClick" 
        >
          <van-tab title="精选商品" >
            <!-- 第一栏商品 -->
            <div class="hotgoods">
              <van-cell class="hotbox" v-for="(item,index) in hotgoods" :key="index"   @click="shopbag(index)">
                <div class="img">
                  <img :src="item.imgurl" />
                 
                </div>
                <div class="mall_center">
                 
                  <img src="../assets/icon/place.svg" />
                  <h6>{{ item.goodsplace }}</h6>
                </div>
                
                <div class="goodsname">
                    <a class="goods_title">{{ item.title }}</a>
                    <br>
                    
                  <a style="color:red;">{{ item.price }}</a>
                  起
                
                  <span class="sale"> 已售{{ item.count }}</span>
                </div>
              </van-cell>
            </div>
          </van-tab>
          <van-tab title="周边热销"> 
            <!-- 第二栏商品 -->
              
            <div class="hotgoods">
             <van-cell class="hotbox" v-for="(item,index) in hotgoods1" :key="item.id" @click="shopbag2(index)">
                <div class="img">
                  <img :src="item.imgurl" />
                 
                </div>
                <div class="mall_center">
                 
                  <img src="../assets/icon/place.svg" />
                  <h6>{{ item.goodsplace }}</h6>
                </div>
                
                <div class="goodsname">
                    <a class="goods_title">{{ item.title }}</a>
                    <br>
                    
                  <a style="color:red;">{{ item.price }}</a>
                  起
                
                  <span class="sale"> 已售{{ item.count }}</span>
                </div>
              </van-cell>
            </div>
             </van-tab>
          <van-tab title="国外热销">
             <!-- 第三栏商品 -->
               
            <div class="hotgoods">
              <van-cell class="hotbox" v-for="(item,index) in hotgoods2" :key="item.id" @click="shopbag3(index)">
                <div class="img">
                  <img :src="item.imgurl" />
                 
                </div>
                <div class="mall_center">
                 
                  <img src="../assets/icon/place.svg" />
                  <h6>{{ item.goodsplace }}</h6>
                </div>
                
                <div class="goodsname">
                    <a class="goods_title">{{ item.title }}</a>
                    <br>
                    
                  <a style="color:red;">{{ item.price }}</a>
                  起
                
                  <span class="sale"> 已售{{ item.count }}</span>
                </div>
              </van-cell>
            </div>
              </van-tab>
        </van-tabs>
      </div>
    </div>
    
    <Menu />
    <div class="white">
      哎呀！都被您看光啦~
    </div>
  </div>
</template>
<script>
import Menu from "../components/menu";
import "../assets/less/mall.less";
export default {
  created() {
    this.getgoodinfo();
    this.getgoodinfo1();
     this.getgoodinfo2();
  localStorage.setItem('tabbar',0)
  },
  
  name: "Mall",
  components: {
    Menu,
  },
  data() {
    return {
      hotgoods: [],
      hotgoods1: [],
      hotgoods2: [],
      firstlist: [
        {
          text: "自由行",
          icon: require("../assets/icon/ziyouxing.svg"),
        },
        { text: "跟团游", icon: require("../assets/icon/gentuanyou.svg") },
        { text: "酒店住宿", icon: require("../assets/icon/jiudian_mall.svg") },
        { text: "一日游", icon: require("../assets/icon/yiriyou.svg") },
        { text: "门票", icon: require("../assets/icon/menpiao.svg") },
        { text: "当地玩乐", icon: require("../assets/icon/wanle.svg") },
        { text: "美食", icon: require("../assets/icon/meishi.svg") },
        { text: "特色民宿", icon: require("../assets/icon/minsu.svg") },
        { text: "租车用车", icon: require("../assets/icon/zuche.svg") },
        { text: "游轮游", icon: require("../assets/icon/youlun.svg") },
      ],

      seacondlist: [
        {
          text: "签证",
          icon: require("../assets/icon/qianzheng.svg"),
        },
        { text: "交通卡", icon: require("../assets/icon/jiaotongka.svg") },
        { text: "保险", icon: require("../assets/icon/baoxian.svg") },
        { text: "接送机", icon: require("../assets/icon/jiesongji.svg") },
        { text: "蜜月", icon: require("../assets/icon/miyue.svg") },
        { text: "旅拍", icon: require("../assets/icon/lvpai.svg") },
        { text: "结伴", icon: require("../assets/icon/jiebam.svg") },
        { text: "礼品卡", icon: require("../assets/icon/lipinka.svg") },
        { text: "接送服务", icon: require("../assets/icon/yongche.svg") },
        { text: "more", icon: require("../assets/icon/more.svg") },
      ],
    };
  },
  methods: {
     onClick(name) {
      localStorage.setItem('tabbar',name)
    },
    goshopbag(){
  this.$router.push({ name: "Shopbag" });
    },
    getgoodinfo() {
      this.axios
        .get("/goodsinfo", {})
        .then((response) => {
          this.hotgoods.push(...response.data.list);
          
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getgoodinfo1() {
      this.axios
        .get("/goodsinfo1", {})
        .then((response) => {
          this.hotgoods1.push(...response.data.list);
          
        })
        .catch(function (error) {
          console.log(error);
        });
    },
     getgoodinfo2() {
      this.axios
        .get("/goodsinfo2", {})
        .then((response) => {
          this.hotgoods2.push(...response.data.list);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    shopbag(index){
      
     
       let goodsid=index
       this.$store.commit('getgoodsid',goodsid)  
       this.$router.push({ name: "Goodsbag" });
    },
    shopbag2(index){
      
     
       let goodsid=index
       this.$store.commit('getgoodsid',goodsid)  
       this.$router.push({ name: "Goodsbag" });
    },
    shopbag3(index){
      
     
       let goodsid=index
       this.$store.commit('getgoodsid',goodsid)  
       this.$router.push({ name: "Goodsbag" });
    }
  },
};
</script>