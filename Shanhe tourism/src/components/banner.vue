<template>
    <van-grid :column-num="6" >
  <van-grid-item  
  v-for="(item,index) in gridtextlist"
  :key="index"
  :text="item.text"
  :icon="item.photo"
 />
    </van-grid>
</template>
<script>
export default {
    name:'banner',
    data(){
    return{
        gridtextlist:[
  {
  text:"攻略",
  icon:"n",
  photo:require('../assets/icon/gonglvecai.svg')
  },
  {
  text: "景点",
  icon:"w",
  photo:require('../assets/icon/jingdian.svg')
  },
  {
  text:"出行",
  icon:"j",
  photo:require('../assets/icon/jipiaohuochepiao.svg')
  },
   {
  text:"酒店",
  icon:"j",
  photo:require('../assets/icon/jiudian.svg')
  },
   {
  text:"购物",
  icon:"j",
  photo:require('../assets/icon/gouwu.svg')
  },
   {
  text:"问答",
  icon:"j",
  photo:require('../assets/icon/wenda.svg')
  }
  ],
    }
}
}

</script>