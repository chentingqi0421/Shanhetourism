<template>
  <div class="myorder">
    <!-- 头部开始 -->
    <header>
      <van-nav-bar
        title="我的收藏"
        left-text="返回"
        left-arrow
        :fixed="true"
        @click-left="back()"
      />
    </header>
    <div v-if="haveorder">
      
      <div class="orderlist" v-for="(goods,index) in goodslist " :key="index" >
        <van-card
          :price="goods.price"
          :title="goods.title"
          :thumb="goods.img"
        >
        
          <template #footer>
            <van-button size="mini" @click="gogoodsbug()">去购买</van-button>
            <van-button size="mini" @click="nolike(goods)">取消收藏</van-button>
          </template> 
        </van-card>
      </div>
    </div>
    <div class="nogoods" v-else>
      <div v-if="isLogin">
        <van-empty description="什么都没有，先去逛逛吧"></van-empty>
        <van-button round type="danger" class="bottom-button" @click="gotomall"
          >去商城</van-button
        >
      </div>
      <div v-else class="nologin">
        <van-empty description="还没登录哦，先去登录吧"></van-empty>
        <van-button round type="danger" class="bottom-button" @click="gologin"
          >登录</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/less/mylike.less";
export default {
  inject: ["reload"],
  data() {
    return {
      phonename: localStorage.getItem("phonename"),
      goodslist: [], //所有订单
      haveorder: true,
      isLogin: localStorage.getItem("isLogin"),
    };
  },
  created() {
    this.getorderform();
  },
  methods: {
    back() {
      this.$router.push({ name: "My" });
    },
    gologin() {
      this.$router.push({ name: "Login" });
    },
    gotomall() {
      this.$router.push({ name: "Mall" });
    },
    gogoodsbug(){
     
       this.$router.push({ name: "Mall" });
    },
    

    getorderform() {
      this.axios({
        method: "GET",
        url: "/getcollect",
        params: {
          phonename: this.phonename,
          action:"mylike"
        },
      }).then((res) => {
        console.log("订单信息", res);
       if(res.data.list.length===0){
         this.haveorder=false
       }
     
        this.goodslist.push(...res.data.list);
       
        
      });
    },
    nolike(goods){
       this.axios({
        method: "GET",
        url: "/delecollect",
        params: {
onlyid:goods.onlyid,
          phonename: this.phonename,
          action:"nolike"
        },
      }).then((res) => {
        console.log("取消信息", res);
       this.reload()
       
     
        
      });
    }
  },
};
</script>
