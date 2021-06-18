<template>
  <div class="goodsbag">
    <div class="van-nav-bar">
      <van-icon name="arrow-left" class="left" @click="back" />
    </div>
    <div class="goodsimg">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(images, index) in images" :key="index">
          <img v-lazy="images" />
        </van-swipe-item>
      </van-swipe>
      <div class="goodsnews">
        <h2>
          {{ title }}
        </h2>
        <div class="price">￥{{ price }}</div>
        <div class="sale">已售{{ count }}</div>
        <div class="race">
          <van-rate v-model="value" readonly />
        </div>
      </div>
    </div>
    <div class="baozhang"></div>
    <div class="baozhang">
      <van-cell
        title="保障服务"
        center
        icon="thumb-circle"
        style="color: red"
        value="承诺不加价·取消则赔付"
      />
    </div>
    <div class="pingjia">
      <div class="checkdata">
        <van-cell title="选择出行日期" :value="date" @click="show = true" />
        <van-calendar v-model="show" @confirm="onConfirm" />
      </div>
      <div class="checkpeole">
        <van-field
          readonly
          required
          clickable
          label="选择出行地区"
          :value="valueArea"
          placeholder="请选择所在地区"
          @click="bindShow"
        />

        <!--选择省市区-->
        <van-popup
          v-model="showArea"
          position="bottom"
          :style="{ height: '40%' }"
        >
          <van-area
            :area-list="areaList"
            @confirm="onAreaConfirm"
            @cancel="bindCancel"
          />
        </van-popup>
      </div>

      <div class="checkplace">
        <van-cell title="选择出行人数">
          <van-stepper
            v-model="people"
            theme="round"
            button-size="22"
            disable-input
          />
        </van-cell>
      </div>
      <div class="comment">
        <van-cell
          title="宝贝评价"
          value="所有评价"
          size="large"
          @click="showPopup"
        />
      </div>
      <!-- 评价层开始 -->
      <van-popup v-model="show2" position="bottom" :style="{ height: '70%' }">
        <div class="commentbox" v-if="havecomment">
          <div v-for="item in comment" :key="item.onlyid">
            <div class="top">
              <div class="userimg">
                <van-image
                  round
                  width="1rem"
                  height="1rem"
                  :src="item.userimg"
                />
              </div>
              <div class="username">
                <span>{{ item.username }}</span>
              </div>
              <div class="time">
                <span>{{ item.time }}</span>
              </div>
              <div class="rate">
                <van-rate v-model="item.value" icon="like" void-icon="like-o" readonly/>
              </div>
            </div>
            <div class="text">
              <P>{{ item.text }}</P>
            </div>
            <div class="img" >
              <van-grid :column-num="2" :gutter="0" >
  <van-grid-item v-for="goodsimg in item.goodsimg" :key="goodsimg" >
    <van-image :src="goodsimg" />
  </van-grid-item>
</van-grid>
             
   
                 
              
            </div>
            <van-divider
              :style="{
                color: '#1989fa',
                borderColor: '#1989fa',
                padding: '0 16px',
              }"
            />
          </div>
        </div>
        <div v-else>
          <van-empty
            class="custom-image"
            image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
            description="还没有人评价哦"
          />
        </div>
      </van-popup>
      <!-- 评价层结束 -->
    </div>
    <div class="shopname">
      <div class="store">
        <van-image
          width="50"
          height="50"
          src="http://119.29.36.88:2020/img/images1615559191077.png"
        />
      </div>
      <h3>山河旅行旗舰店</h3>
      <div class="right">
        <h5>描述相符：4.9 高</h5>
        <h5>服务态度：4.9 高</h5>
      </div>
    </div>
    <h2 style="text-align: center">商品详情</h2>
    <div class="goodsmessage">
      <div class="xiangqing">
        <van-image v-for="img in images2" :key="img" :src="img" />
      </div>
    </div>

    <div class="buygoods">
      <van-goods-action>
        <van-goods-action-icon
          :icon="like"
          text="收藏"
          :color="color"
          @click="collect()"
        />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="goshopbag" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="addshopbag"
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="goconfigfrom"
        />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import "../../assets/less/goodsbag.less";
import areaList from "../../assets/js/arealist";

export default {
  data() {
    return {
      onlyid: "",
      tabbar: localStorage.getItem("tabbar"),
      goodsid: localStorage.getItem("goodsid"),
      isLogin: localStorage.getItem("isLogin"),
      areaList,
      phonename: localStorage.getItem("phonename"),
      date: "",
      goodsimg: [],
      valueArea: "", //地区值
      arrArea: [], //存放地区数组
      people: "",
      show: false,
      show2: false,
      havecomment: false,
      showArea: false,
      page: "goodsbag",
      //商品信息
      count: "",
      title: "",
      price: "",
      value: "",
      like: "like-o",
      color: "#f21f28",
      images: [],
      images2: [],
      goodsInfo: [],
      comment: [],
      
    };
  },
  components: {},
  created() {
    setTimeout(() => {
      if (this.tabbar == 0) {
        this.getgoodsinfo();
      }
      if (this.tabbar == 1) {
        this.getgoodsinfo2();
      }
      if (this.tabbar == 2) {
        this.getgoodsinfo3();
      }
    }, 100);
  },
  mounted() {
    setTimeout(() => {
      this.getcollect();
    }, 200);
  },
  methods: {
    back() {
      this.$router.go(-1);
      localStorage.setItem("tabbar", 0);
    },
    showPopup() {
      this.show2 = true;
      this.axios({
        method: "GET",
        url: "/getgoodscomment",
        params: {
          onlyid: this.onlyid,
        },
      }).then((res) => {
        if (res.data.list.length > 0) {
          this.havecomment = true;
        }
        this.comment = res.data.list;
        console.log("評論", this.comment);
        this.comment.forEach((item) => {
          var data = item.goodsimg;
          var regex = /,/;
          var bbcs= data.split(regex);
item.goodsimg=bbcs

          
        });
     
        
      });
    },
    goshopbag() {
      this.$router.push({ name: "Shopbag" });
    },
    goconfigfrom() {
      if (this.isLogin == "true") {
        if (this.date == "" || this.valueArea == "") {
          this.$toast.fail("请选择出行信息");
        } else {
          this.goodsInfo.push({
            imgurl: this.images[0],
            title: this.title,
            price: this.price,
            date: this.date,
            goodsplace: this.valueArea,
            people: this.people,
            onlyid: this.onlyid,
            value: 0,
          });
          var price = this.goodsInfo[0].people * this.goodsInfo[0].price;
          this.goodsInfo.price = price;
          this.$router.push({
            name: "Confirmgoods",
            params: { goodsInfo: this.goodsInfo, page: this.page },
          });
        }
      }
    },
    //查看收藏信息
    getcollect() {
      this.axios({
        method: "GET",
        url: "/getcollect",
        params: {
          onlyid: this.onlyid,
          phonename: this.phonename,
          action: "getcollect",
        },
      }).then((res) => {
        console.log(res);
        if (res.data.list.length == 0) {
          this.like = "like-o";
        } else {
          this.like = "like";
        }
      });
    },
    collect() {
      if (this.like === "like") {
        //满心状态，点击变空心，取消收藏
        this.like = "like-o";
        this.axios({
          method: "GET",
          url: "/collectgoods",
          params: {
            onlyid: this.onlyid,
            price: this.price,
            phonename: this.phonename,
            title: this.title,
            img: this.images[0],
            action: "like-o",
          },
        }).then((res) => {
          console.log(res);
        });
      } else {
        // 空心状态，点击变满心，收藏
        this.like = "like";
        this.axios({
          method: "GET",
          url: "/collectgoods",
          params: {
            onlyid: this.onlyid,
            price: this.price,
            phonename: this.phonename,
            title: this.title,
            img: this.images[0],
            action: "like",
          },
        }).then((res) => {
          console.log(res);
        });
      }
    },

    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
    bindShow() {
      this.showArea = true;
    },
    bindCancel() {
      this.showArea = false;
    },
    //地区选择
    onAreaConfirm(val) {
      this.showArea = false;
      this.arrArea = val;
      var addrInfo = val[0].name + "-" + val[1].name + "-" + val[2].name;
      this.valueArea = addrInfo;
    },
    //获取商品详情数据
    getgoodsinfo() {
      let goodsid = this.goodsid;
      console.log(goodsid);
      this.axios({
        method: "GET",
        url: "/goodsbag",
        params: {
          goodsid,
        },
      }).then((res) => {
        this.images.push(...res.data.images2);
        this.images2.push(...res.data.images);
        this.title = res.data.data.title;
        this.price = res.data.data.price;
        this.count = res.data.data.count;
        this.value = res.data.data.likerate;
        //  localStorage.setItem("onlyid",res.data.data.goodsid)
        this.onlyid = res.data.data.goodsid;
        console.log(this.onlyid);
      });
    },
    getgoodsinfo2() {
      let goodsid = this.goodsid;
      this.axios({
        method: "GET",
        url: "/goodsbag2",
        params: {
          goodsid,
        },
      }).then((res) => {
        console.log(res);
        this.images.push(...res.data.images2);
        this.images2.push(...res.data.images);
        this.title = res.data.data.title;
        this.price = res.data.data.price;
        this.count = res.data.data.count;
        this.value = res.data.data.likerate;
        // localStorage.setItem("onlyid",res.data.data.goodsid)
        this.onlyid = res.data.data.goodsid;
      });
    },
    getgoodsinfo3() {
      let goodsid = this.goodsid;
      this.axios({
        method: "GET",
        url: "/goodsbag3",
        params: {
          goodsid,
        },
      }).then((res) => {
        this.images.push(...res.data.images2);
        this.images2.push(...res.data.images);
        this.title = res.data.data.title;
        this.price = res.data.data.price;
        this.count = res.data.data.count;
        this.value = res.data.data.likerate;
        // localStorage.setItem("onlyid",res.data.data.goodsid)
        this.onlyid = res.data.data.goodsid;
        console.log(this.onlyid);
      });
    },
    addshopbag() {
      this.$toast.loading({
        message: "加载中...",
        //防止穿透
        forbidClick: true,

        //显示时间, 如果时间为0，则不会自动关闭
        duration: 0,

        loadingType: "spinner",
      });
      if (this.isLogin == "true") {
        if (this.date == "" || this.valueArea == "") {
          this.$toast.fail("请选择出行信息");
        } else {
          this.axios({
            //post请求添加购物车
            method: "POST",
            url: "/addshopbag",
            data: {
              //  商品信息
              onlyid: this.onlyid,
              phonename: this.phonename,
              price: this.price,
              title: this.title,
              imgurl: this.images[0],
              date: this.date,
              valueArea: this.valueArea,
              people: this.people,
            },
          }).then((res) => {
            if (res.data.code == 200) {
              this.$toast.success(res.data.message);
            }
          });
        }
      } else {
        this.$toast.fail("您还未登录");
      }
    },
  },
};
</script>
