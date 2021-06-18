<template>
<div>
<div id="container"></div>
<div class="info">
    <p id='info'></p>
</div>
</div>
</template>
<script>
import MapLoader from '../../src/assets/js/Amap.js'

export default {
    data(){
        return{
            map:null
        }
    },
    created(){
      
        let that = this
    MapLoader().then(AMap => {
      console.log('地图加载成功')

      that.map = new AMap.Map('container', {
         resizeEnable: true,
        zoom: 11,
        
      })
    AMap.plugin('AMap.Geolocation',function(){
          var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：5s
            buttonPosition:'RB',    //定位按钮的停靠位置
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

        });
         that.map.addControl(geolocation);
         
         geolocation.getCurrentPosition(function(status,result){
            if(status=='complete'){
                 console.log(result.addressComponent.city)
            sessionStorage.setItem("city",result.addressComponent.city)
                
            }else{
                
                console.log(result)
            }
        });
    })
           //实例化城市查询类
       
        
        
    }, e => {
      console.log('地图加载失败' ,e)
    })

    },
    mounted(){
  
    
    },
    methods:{
   
    
    }
}

</script>
<style >
#container{
    width: 100%;
    height: 50px;
    display: none;
 
}
.info{
    position: absolute;
   bottom: 50%;
}
</style>