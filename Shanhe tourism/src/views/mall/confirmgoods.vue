<template>
  <div class="confirmgoods">
    <header>
      <van-nav-bar
        title="确认订单"
        left-text="返回"
        left-arrow
        :fixed="true"
        @click-left="back"
      />
    </header>

    <div class="center">
      <div class="step">
        <van-steps :active="active">
          <van-step>填写信息</van-step>
          <van-step>确认信息</van-step>
          <van-step>支付订单</van-step>
          <van-step>确认出行</van-step>
        </van-steps>
      </div>

      <div class="goodsbag">
        <div class="con_shopname">
          <van-icon name="bag-o" color="red" />
          <h3>山河旅行社旗舰店></h3>
        </div>
        <div class="goods" v-for="items in goodsInfo" :key="items.onlyid">
          <van-card
            :num="items.people"
            :price="items.price"
            :desc="items.goodsplace"
            :title="items.title"
            :thumb="items.imgurl"
          >
            <template #tags>
              <van-tag plain type="danger" style="margin: 0px 0px 0px 120px"
                >出游日期：{{ items.date }}</van-tag
              >
            </template>
          </van-card>

          <div class="addpeople">
            <van-cell title="出游人员" is-link @click="showPopup" />

            <van-swipe-cell v-for="(item, index) in checkinfo" :key="item.name">
              <van-contact-card
                type="edit"
                :name="item.name"
                :tel="item.tel"
                :editable="false"
              />

              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                  @click="deletegoods(index)"
                />
              </template>
            </van-swipe-cell>

            <van-cell class="myinfo-van-cell" title="订单备注">
              <input
                class="text-area"
                placeholder="选填，建议和卖家协商"
                v-model="noteInfo"
              />
            </van-cell>
            <van-popup
              v-model="show"
              round
              position="bottom"
              :style="{ height: '45%' }"
            >
              <van-button
                class="addbutton"
                round
                size="large"
                type="info"
                @click="addpeople"
                >添加常用人员</van-button
              >
              <van-contact-edit :contact-info="editingContact" @save="onSave" />
            </van-popup>
            <van-popup
              v-model="showadd"
              round
              position="bottom"
              :style="{ height: '50%' }"
            >
            <van-cell
               v-if="havepeople"
              >
               <van-empty description="没有常用人员"></van-empty>
               
              </van-cell>
              <van-cell
              v-else
                v-for="items in peopleInfo"
                :key="items.id"
                @click="checkedInfo(items)"
              >
              
                <van-contact-card
                  type="edit"
                  :name="items.name"
                  :tel="items.tel"
                  :editable="false"
                />
              </van-cell>
            </van-popup>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="buy">
        <van-submit-bar
          :price="goodsInfo.price * 100"
          button-text="提交订单"
          @submit="onSubmit"
        />
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/less/confirmgoods.less";

export default {
  data() {
    return {
      show: false,
      page: "",
      showadd: false,
      onlyid: "",
      goodsinfos: {},
      editingContact: [],
      checkinfo: [],
      noteInfo: "",
      phonename: localStorage.getItem("phonename"),
      goodsInfo: [],
      initgoodsInfo: [],
      havepeople:false,
      contactInfo: [],
      name: localStorage.getItem("name"),
      peopleInfo: [],
      active: 0,
      icon: require("../../assets/icon/adress.svg"),
      // 初始化商品数据
      initprice: 0,
    };
  },
  created() {
    this.getRouterData();
    
      this.getpeopleinfo();
    
  },
  mounted(){

  },
  methods: {
    showPopup() {
      //选择人员后价格人数随着变化
      this.show = true;

 
    },
    addpeople() {
      this.show = false;
      this.showadd = true;
    },
    checked(items) {

      for (var i = 0; i < this.checkinfo.length; i++) {
        console.log(items.name, this.checkinfo[i].name);
        if (items.name === this.checkinfo[i].name) {
          return true
        }
      }
    },
    checkedInfo(items) {
      //判断重复添加相同人员

      if (this.checkinfo.length == 0) {
        this.checkinfo.push(items);
      } else {
        
        if(this.checked(items)){
          this.$toast.fail("请勿重复添加")
        }else{
          this.checkinfo.push(items)
        }
      }

      this.showadd = false;
      var newpeople = this.checkinfo.length;
      this.goodsInfo.price = this.checkinfo.length * this.goodsInfo[0].price;
      this.goodsInfo[0].people = newpeople;
    },
    back() {
      this.$router.push({ name: "Shopbag" });
    },
    gogoods() {
      this.$router.push({ name: "Goodsbag" });
    },
    getRouterData() {
      this.page = this.$route.params.page;
      //判断路由跳转方向，通过页面传值来判断数据涞源做到动态赋值
      if (this.page === "shopbag") {
        this.goodsInfo = this.$route.params.goodsInfo;
        this.initgoodsInfo = this.$route.params.goodsInfo;
        this.initprice = this.goodsInfo[0].price;
        console.log(this.page, this.initgoodsInfo);
      }
      if (this.page === "orderform") {
        this.initgoodsInfo = this.$route.params.initgoodsInfo;
        this.goodsInfo = this.initgoodsInfo;
        this.checkinfo.push(...this.$route.params.peopleInfo);
        console.log(this.page, this.initgoodsInfo);
      }
      if (this.page === "goodsbag") {
        this.goodsInfo = this.$route.params.goodsInfo;
        this.initgoodsInfo = this.$route.params.goodsInfo;
        this.initprice = this.goodsInfo[0].price;
        console.log(this.page, this.goodsInfo);
      }
    },
    savapeople(contactInfo){
       this.axios({
              method: "GET",
              url: "/addpeopleinfo",
              params: {
                phonename: this.phonename,
                name: contactInfo.name,
                tel: contactInfo.tel,
              },
            }).then((res) => {
              this.$toast.success(res.data.message);
              this.checkinfo.push(res.data.data);
              this.show = false;
              //每次更新商品信息都重新赋值，动态
              this.goodsInfo[0].people = this.checkinfo.length;
               this.goodsInfo.price = this.checkinfo.length * this.goodsInfo[0].price;
              this.reload();
            });
    },
    getpeopleinfo() {
      this.axios({
        method: "GET",
        url: "/getpeopleinfo",
        params: {
          phonename: this.phonename,
        },
      }).then((res) => {
        this.peopleInfo.push(...res.data.message);
        console.log("people", this.peopleInfo);
        if(this.peopleInfo==""){
      this.havepeople=true
      
    }
      });
    },
    onDelete(contactInfo) {
      this.$toast.success(contactInfo.name);
    },
    
     checked2(contactInfo) {

      for (var k = 0; k < this.checkinfo.length; k++) {
        console.log(contactInfo.name, this.checkinfo[k].name);
        if (contactInfo.name === this.checkinfo[k].name) {
          return true
        }
      }
    },
    onSave(contactInfo) {
      if(this.peopleInfo.length ===0){
          this.savapeople(contactInfo)
      }
      else {
        for (var k = 0; k < this.peopleInfo.length; k++) {
          if (!this.checked2(contactInfo)) {
           this.savapeople(contactInfo)
          //  console.log(this.)
           break
          } else {
            this.$toast.fail("请勿重复添加人员");
          }
        }
      }
    },
    onSubmit() {
      if (this.name == "null") {
        this.$dialog
          .confirm({
            title: "未实名验证！",
            message: "是否确认去实名！",
            confirmButtonColor: "#0C34BA",
          })
          .then(() => {
            let second = 2;
            var timer = setInterval(() => {
              second--;
              if (second) {
                this.$toast.success("请实名后返回购买");
              } else {
                clearInterval(timer);

                this.$toast.clear();
              }

              this.$router.push({
                name: "Security",
                params: { show4: true, page: "my" },
              });
            }, 1000);
          });
      } else {
        if (this.checkinfo == "") {
          this.$toast.fail("请选择出游人员");
        } else {
          this.$router.push({
            name: "OrderForm",
            params: {
              goodsInfo: this.goodsInfo,
              peopleInfo: this.checkinfo,
              noteInfo: this.noteInfo,
              initgoodsInfo: this.initgoodsInfo,
            },
          });
        }
      }
    },
    deletegoods(index) {
      //动态显示商品数量和价格，用户删除则变化
      this.checkinfo.splice(index, 1);
      this.goodsInfo[0].people = this.checkinfo.length;
      this.goodsInfo.price = this.checkinfo.length * this.goodsInfo[0].price;
    },
  },
};
</script>