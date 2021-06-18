<template>
    <div class="payresults">
        <header>
      <van-nav-bar
        title="支付结果"
        :fixed="true"
        />
    </header>
     <div class="goods" >
    <div v-for="(goods, index) in goodsinfo" :key="index" class="goodsinfo">
               <van-card
  :num="goods.people"
 :price="goodsinfo.price"
  :desc="goods.goodsplace"
  :title="goods.title"
  :thumb="goods.imgurl"
  :origin-price="goods.price"
/>
              </div>
       </div>
       <div v-if="payresult===true">
            <img :src="success" class="successimg"> 
              <h1 class="h1">支付成功</h1>
                <div class="paybutton">
         <van-button type="primary" block @click="gomyorder()">查看订单</van-button>
<van-button type="primary" block @click="gohome()">回到首页</van-button>
       </div>
       </div>
   <div v-if="payresult===false">
            <img :src="fail" class="successimg"> 
              <h1 class="h1">支付失败</h1>
                <div class="paybutton">
         <van-button type="primary" block @click="gomyorder()">查看订单</van-button>
<van-button type="primary" block @click="gohome()">回到首页</van-button>
       </div>
       </div>    
     
     
    </div>
</template>
<script>
import '../../assets/less/payresults.less'
export default {
  
    data(){
        return{
            goodsinfo:[],
            phonename:localStorage.getItem("phonename"),
            success:require('../../assets/icon/success.svg'),
            fail:require('../../assets/icon/fail.svg'),
            payresult:false
        }
    },
    
    created(){
        this. getRouterData()
        if(this.payresult==true){
 this.deletegoods()
        }
       
    },
    methods:{
         getRouterData() {
      this.goodsinfo= this.$route.params.goodsInfo
      this.payresult=this.$route.params.payresult
    
      
    },
    //支付成功则删除商品
       deletegoods() {
      this.axios({
        method: "GET",
        url: "/deletegoods",
        params: {
          phonename: this.phonename,
          onlyid: this.goodsinfo[0].onlyid,
        },
      }).then((res) => {
          console.log(res)
      });
    },
    gohome(){
         this.$router.push({
        name: "Home"
        
      });
    
    },
    gomyorder(){
          this.$router.push({
        name: "Myorder"
        
      });
    },
    }
}
</script>