<template>
  <div class="shopbag">
    <div class="header">
      <van-nav-bar
        title="购物车"
        left-text="返回"
        left-arrow
        :fixed="true"
        @click-left="back"
      />
    </div>
    <div class="goods" v-if="havegoods">
      <div class="shopname">
       <van-icon name="bag-o" color="red" />
        <h3>山河旅行社旗舰店></h3>
      </div>
      <div class="goodslist">
        <van-swipe-cell v-for="(goods, index) in goodslist" :key="index">
          
          <van-checkbox
            @click="singleSelect(goods)"
            class="goodscheckbox"
            v-model="goods.isChecked"
            checked-color="#ee0a24"
          ></van-checkbox>
          <van-card
            :onlyid="goods.onlyid"
            :price="goods.price"
            @touchmove="getonlyid(goods.onlyid)"
            :desc="goods.goodsplace"
            :title="goods.title"
            class="goods-card"
            :thumb="goods.imgurl"
          >
          <template #tags>
    <van-tag plain type="danger">日期{{goods.date}}</van-tag>
   
  </template>
            <template #footer>
              <van-stepper
                v-model="goods.people"
                theme="round"
                button-size="22"
                @change="changegoods(goods)"
              />
            </template>
          </van-card>
          <template #right >
            <van-button
              square
              text="删除"
              type="danger"
              class="delete-button"
              @click="deletegoods()"
            />
          </template>
        </van-swipe-cell>

        <div class="footer">
          <van-submit-bar
            :price="totalprice"
            button-text="提交订单"
            @submit="onSubmit"
          >
          
          </van-submit-bar>
        </div>
      </div>

      <div class="bottom">--------我也是个有底线的人--------</div>
    </div>

    <div class="nogoods" v-else>
      <div v-if="isLogin" >
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
import "../../assets/less/shopbag.less";
export default {
  inject: ["reload"],
  data() {
    return {
      phonename: localStorage.getItem("phonename"),
      checked: false,
      onlyid: "",
      selectedGoodsInfo:[],
      goodsid: [],
      havegoods: false,
      totalprice: 0,
      page:"shopbag",
      isLogin: localStorage.getItem("isLogin"),
      totalpeople: 0,
      goodslist: [],
    };
  },
  created() {
    this.getgoods();
  },
  _methods: {
    back() {
       this.$router.push({ name: "Mall" });
    },
    gologin() {
      this.$router.push({ name: "Login" });
    },
    gotomall() {
      this.$router.push({ name: "Mall" });
    },

    // 更改个数
    changegoods(goods) {
      this.sum();
      this.axios({
        method: "GET",
        url: "/changegoods",
        params: {
          phonename: this.phonename,
          onlyid: goods.onlyid,
          people: goods.people,
        },
      });
    },
    //计算总价格
    sum() {
      this.totalprice=0;

      for(let i=0;i<this.goodslist.length;i++) {
        if(this.goodslist[i].isChecked==true) {

          this.totalprice+=
            this.goodslist[i].price*this.goodslist[i].people*100;
        }
      }

    },

    singleSelect(goods) {
      // 控制购物车只能单选
      if(this.selectedGoodsInfo.length===0){
 this.sum();
 this.selectedGoodsInfo.price=this.totalprice/100
      }
     else{
       if(goods.isChecked===true){
 goods.isChecked=false
        this.$toast("一次预定一个产品哦")
       }
       else{
         //清空选项信息数组
          this.selectedGoodsInfo.length=[]
          this.totalprice=0
       }
      
      
        
      }
      if(goods.isChecked===true) {
        for(let i=0;i<this.goodslist.length;i++) {
          if(this.goodslist[i].onlyid==goods.onlyid) {
            this.selectedGoodsInfo.push(this.goodslist[i]);

          }
          
        }


      }
      console.log("====现在选择物品信息数据", this.selectedGoodsInfo);

    },

    onSubmit() {
if(this.selectedGoodsInfo.length!==0){
 
   this.$router.push({ name: "Confirmgoods",params:{goodsInfo:this.selectedGoodsInfo,page:this.page}});
   
}else{
  
      this.$toast.fail("请选择要购买的商品");
}
     
    },
    getgoods() {
      this.axios({
        method: "GET",
        url: "/getgoods",
        params: {
          phonename: this.phonename,
        },
      }).then((res) => {

        this.goodslist=res.data.message;
        this.isChecked=res.data.message.isChecked;
        if(this.goodslist=="") {
          this.havegoods=false;
        } else {
          this.havegoods=true;
        }
      });
    },
    deletegoods() {
      this.axios({
        method: "GET",
        url: "/deletegoods",
        params: {
          phonename: this.phonename,
          onlyid: this.onlyid,
        },
      }).then((res) => {

        this.reload();
        if(res.data.code==100) {
          this.havegoods=false;
        }
      });
    },
    getonlyid(onlyid) {
      this.onlyid=onlyid;

    },
  },
  get methods() {
    return this._methods;
  },
  set methods(value) {
    this._methods=value;
  },
};
</script>