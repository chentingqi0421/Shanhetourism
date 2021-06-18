<template>

    <div class="message">
        <van-pull-refresh
  v-model="isLoading"
  success-text="刷新成功"
  @refresh="onRefresh"
>
        <van-nav-bar
  title="信息中心"
  left-text="返回"
  right-text="全部已读"
  left-arrow
  @click-left="onClickLeft"
  
/>
<div class="icon" >
    <van-grid :column-num="4" >
  <van-grid-item  dot
  v-for="(item,index) in messageicon"
  :key="index"
  :text="item.text"
  :icon="item.icon"
 />
 
</van-grid>
</div>
<div class="people" v-for="(item,index) in personlist " :key="index" >
<img class="picture" :src="item.picture">
<div class="nickname">{{item.nickname}}</div>
<div class="p">{{item.message}}</div>
<div class="date">{{item.date}}</div>
</div>
</van-pull-refresh>
    </div>
</template>
<script>
import '../../assets/less/message.less'
export default {
    
    name:'Messssagess',
    data(){
        return{
             isLoading: false,
            messageicon:[
                {
                text:"互动信息",
                icon:require('../../assets/icon/xx_tttj.svg')

                },
                {
                text:"好友互动",
                icon:require('../../assets/icon/haoyouzhuli.svg')
                }
                ,
                {
                text:"通知",
                icon:require('../../assets/icon/bianpinghuatubiaosheji.svg')
                }
                ,
                {
                 text:"订单消息",
                icon:require('../../assets/icon/dingdan.svg')   
                }
            ],
             personlist:[
                {
                nickname:"陈奕迅",
                message:"下个星期我要去新疆，你要不要一起",
                picture:('https://i03piccdn.sogoucdn.com/2a35070c3a5696cb'),
                date:"2020/12/01"
                },
                {
                 nickname:"周杰伦",
                message:"我明天中午的机票飞首都",
                picture:('https://i02piccdn.sogoucdn.com/91092b3289eb2c41'),
                date:"2020/9/01"
                }
                ,
                {
                 nickname:"刘德华",
                message:"啊啊给我一杯忘情水",
                picture:('https://i02piccdn.sogoucdn.com/51787347221c3e18'),
                date:"2020/11/21"
                }
                ,
                {
                  nickname:"陈廷奇",
                message:"人生得意需尽欢丶",
                picture:('https://i03piccdn.sogoucdn.com/4b596a74b203f6d1'),
                date:"2020/11/03"
                }
            ]
        }
    },
    methods:{
      onClickLeft(){
          this.$router.go(-1);
      },
      onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
      
    
    }
}
</script>