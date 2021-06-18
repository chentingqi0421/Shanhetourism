<template>
  <div class="share">
    <div class="header">
      <van-nav-bar  left-text="返回" left-arrow border 
@click-left="back">
        <template #right>
          <img :src="pushshare" class="pushshare" @click="sumbit">
        </template>
      </van-nav-bar>
    </div>
    <div class="bodycenter">
      
      <input placeholder="#添加标题#/不超过24个字哦！" v-model="title" @blur="checktitle()">
<textarea placeholder="你的文字里藏着你走过的路" v-model="textareavalue"></textarea>
<div class="updata">
<van-uploader v-model="fileList" :after-read="afterRead" :max-count="1" :upload-text="topimgtext" @oversize="afterRead" :max-size="1024 * 5120">
  
  <template #preview-cover >
    <div class="preview-cover van-ellipsis">封面</div>
  </template>
</van-uploader>
<van-uploader v-model="fileList2"  :after-read="afterRead2"  v-if="showimgbut" :max-count="8" :upload-text="imgtext" >
  
</van-uploader>
</div>
<van-cell title="上传照片" is-link arrow-direction="up" value="最多8张" />

   <van-cell title="当前位置" icon="location-o" @click="getcity()" :value="city" >
      
    </van-cell>
    <amap></amap>
    <div class="timer">{{daydata}}</div>
    </div>
 
    
  </div>
 
</template>
<script>
import'../../assets/less/share.less'
import Amap from '../../components/Amap.vue';
import { Notify } from 'vant'

export default {
  components: { Amap },
  data(){
    return{
      pushshare:require('../../assets/icon/push.svg'),
       fileList: [],
          fileList2: [],
          showimgbut:false,
      daydata:'',
      city:"点击获取当前位置",
      sharetoken:"",
      imgtext:"照片",
    topimgtext:"封面",
      phone: localStorage.getItem("phonename"),
       username: localStorage.getItem("currenUser"),
       title:"",
       textareavalue:"",
      

    }
  },
  created(){
    this.current();
    //给每个分享文章一个唯一值得，由时间戳组成，保证唯一
    this.sharetoken='share'+Date.now()
    
  },
  mounted(){
setInterval(()=>{
  this.current()
  
},5000)//更新时间

  },


  methods:{
back(){this.$router.go(-1)},

current() {
  
				var d = new Date(),
					daydata = '';
				daydata += d.getFullYear() + '年'; //获取当前年份 
				daydata += d.getMonth() + 1 + '月'; //获取当前月份（0——11） 
				daydata += d.getDate() + '日';
				daydata += d.getHours() + '时';
				daydata += d.getMinutes() + '分';
				this.daydata=daydata
				return daydata;
        
			},
      checktitle(){
        console.log(this.title.length)
        if(this.title.length>22){
          Notify("标题过长");
        }
      },
      getcity(){
        this.city=sessionStorage.getItem('city');
      },
 afterRead( fileList) {
   console.log( fileList);
    if(fileList.file.size>5148576){
      this.$toast('封面不能大于5M');
    }else{
      // 此时可以自行将文件上传至服务器
      
      this.showimgbut=true
       console.log( fileList);
       let data = ({
          phone:this.phone,
          fileList:fileList.content,
          sharetoken:this.sharetoken,
          topimg:true

        })
    
    //上传照片到服务器
     this.axios({
          method: 'POST',
          url: '/share',
          data
        }).then(result => {
          // this.$toast.clear();
          console.log('result ==> ', result);
  
        }).catch(err => {
          this.$toast.clear();
          console.log('err ==> ', err);
          
        })
        }
      
    },
   
    afterRead2( fileList2) {
      // 此时可以自行将文件上传至服务器
      console.log( fileList2);
       let data = ({
          phone:this.phone,
          fileList:fileList2.content,
          sharetoken:this.sharetoken,

        })
    
    //上传照片到服务器
     this.axios({
          method: 'POST',
          url: '/share',
          data
        }).then(result => {
          // this.$toast.clear();
          console.log('result ==> ', result);
  
        }).catch(err => {
          this.$toast.clear();
          console.log('err ==> ', err);
          
        })
        

     },
     sumbit(){
        let data = ({
          phone:this.phone,
           username:this.username,
           time:this.daydata,
           title:this.title,
           sharetoken:this.sharetoken,
           text:this.textareavalue,
          place:this.city,
          userimg:localStorage.getItem("userimg")
        })
        if(this.fileList==""||this.fileList2==""){
          this.$toast.fail("请选择分享的照片");
          
        }else{
          if(this.city=="点击获取当前位置"){
data.place="神秘之地"
    }
          if(this.title==""){
             this.$toast.fail("起个名字吧");
          }else{

          
    //上传照片到服务器
     this.axios({
          method: 'POST',
          url: '/share',
          data
        }).then(result => {
          if(result.data.message==200){
this.$toast.sucess(result.data.message);
          }else{
            this.$toast.fail(result.data.message);
            //设置异步提醒方法
      let second = 2;
      const timer = setInterval(() => {
        second--;
        if (!second) {
          clearInterval(timer);
          // 手动清除 Toast
          this.$toast.clear();
          this.$router.push({name:"Home"})
          
        }
      }, 1000);
    
          }
          
          console.log('result ==> ', result);
  
        }).catch(err => {
          this.$toast.clear();
          console.log('err ==> ', err);
          
        })
     }
     }
    
     }
  },
}
</script>