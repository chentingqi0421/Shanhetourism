<template>
  <div class="new-address">
    <van-nav-bar
      :title="aid ? '编辑地址' : '新增地址'"
      left-text="返回"
      left-arrow
      :fixed="true"
      @click-left="back"
    />


  </div>
</template>

<script>
  import '../../assets/less/newAddress.less'

  export default {
    data() {
      return {
       
        }
    },
      
    



    methods: {
    

      //返回上一级
      back() {
        this.$router.go(-1);
      },

      //新增地址
      newAddress() {

      
        }
     


          }
        }



  
</script>
