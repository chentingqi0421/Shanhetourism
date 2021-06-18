<template>
    <div class="discover">
      
   <van-cell class="goodsbox1" v-for="item in discover" :key="item.id"  >
  <div class="dis_img"><img :src=item.url>
  <p>{{item.title}}</p>
  </div>  <div class="dis_center">
    <img src="../../assets/icon/place2.svg">
  <h6>{{item.place}}</h6></div><br/>
<div class="user">
  <img :src=item.userimg>
<span>{{item.name}}</span>
<van-rate  void-icon="like-o" :count="1" class="like" v-model="item.like"/>
<p> {{item.count}}</p>

</div>
  </van-cell>

</div>
</template>
<script>
import '../../assets/less/discover.less'
export default {
    name:'Discover',
    components:{

    },
    created(){

 this.getrecinfo()
  },
      data() {
    return {
      
      discover:[],
   
    };
  },
    methods: {
       getrecinfo(){
     this.axios.get('/recinfo', {
  })
  .then((response)=> {
this.discover.push(...response.data.list)
 
 
  
  })
  .catch(function (error) {
    console.log(error);
  })
  }
    }
    
}
</script>
