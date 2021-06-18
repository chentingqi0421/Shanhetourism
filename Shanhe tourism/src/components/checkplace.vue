<template>
  <div id="wrap">
  <van-nav-bar
  title="当前城市"

/>
   <div class="placebox">
     <van-cell @click="checkcurrentcity()">当前城市<span class="currentcity">{{currentcity}}</span></van-cell>
      <van-index-bar  >
         <div v-for="item in city" :key="item.id">
      <div v-for="items in item" :key="items.id">
        <van-index-anchor 
          :index="items.title"
        />
        <van-cell v-for="(i,index) in items.lists" :key="index" :title="i" @click="test(i)" />
      
      </div>
    </div>
    </van-index-bar>
    </div>
  </div>
</template>




<script>
import city from "../assets/js/city";

export default {
  inject:['reload'],
  data() {
    return {
      city,
      checkcity:"",
      currentcity:""
    };
  },
  created(){
     this.checkcity=sessionStorage.getItem("checkcity")
this.currentcity=sessionStorage.getItem("city")
  },
  methods: {
    test(i){
      this.checkcity=i
    sessionStorage.setItem("checkcity",this.checkcity)
    this.reload();
    },
     checkcurrentcity(){
   sessionStorage.setItem("checkcity",this.currentcity)
    this.reload();
  }
  },
 
};
</script>
<style lang="scss">
#wrap{
  .van-index-bar{
   position: relative;
 
  }
  span{
    color: rgb(240, 15, 53);
    
  }
  .amap{
    position: absolute;
    top: 0px;
    display: flex;
  }
  .currentcity{
    margin-left: 20px;
  }


  
}
</style>


