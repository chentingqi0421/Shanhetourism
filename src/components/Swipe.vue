<template>
    <!-- 轮播图开始 -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item in bannerimg" :key="item.id">
   <img v-lazy="item.url" class="banner-img"/>
 
    </van-swipe-item>
</van-swipe>
<!-- 轮播图结束 -->
</template>
<script>
export default {
   name:'swipe',
   data(){
     return{
 
     }
   },
  props:[
    'bannerimg'
   
  ]
}
</script>
<style scoped>
.my-swipe .van-swipe-item {
 
  height: 150px;
  text-align: center;
  background-color: #39a9ed;
  margin-top: 50px;
}
 span{
  width: 3.5rem;
  height: 0.5rem;
  position: absolute;
  background-color: cornsilk;
  bottom: 15px;
  right: 15px;
  font-size: 15px;
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  opacity: 0.4;
  border-radius: 15px;
  

}

</style>