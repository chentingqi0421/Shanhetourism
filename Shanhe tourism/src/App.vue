<template>
  <div id="app">
    <!-- 一级路由 -->

    <router-view  v-if="isRouterAlive"/>
    
  </div>
  
</template>


<style lang="less">
body {
  background-color: #f5f5f5;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<script>
export default {
  
   data(){
          return{
            isRouterAlive: true  
          }
        },
   provide () {    //父组件中通过provide来提供变量，在子组件中通过inject来注入变量。                                             
            return {
                reload: this.reload                                              
            }
        },
       
 created(){

 this.isllogin()
  },
   methods:{
     isllogin(){
         if (localStorage.key('token')!= null) {
             this.$router.replace('/Home')
             //首页路径
             
     }
      else{
                this.$router.replace('/')
                //登录页面路径
                
             }
   },
   reload () {
                this.isRouterAlive = false;            //先关闭，
                this.$nextTick(function () {
                    this.isRouterAlive = true;         //再打开
                }) 
            }
     }
}
</script>