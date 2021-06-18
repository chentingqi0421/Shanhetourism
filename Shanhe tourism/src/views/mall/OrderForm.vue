<template>
  <div class="orderform">
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
            <van-tag plain type="danger" style="margin: 10px 0px 0px 120px"
              >出游日期：{{ items.date }}</van-tag
            >
          </template>
        </van-card>
      </div>
      <div class="addpeople">
        <van-cell
          title="确定出游信息"
          is-link
          arrow-direction="down"
          value="信息"
        />
        <van-swipe-cell
          v-for="item in checkedInfo"
          :key="item.tel"
          class="people_card"
        >
          <van-contact-card
            type="edit"
            :name="item.name"
            :tel="item.tel"
            :editable="false"
          />
        </van-swipe-cell>

        <van-cell class="myinfo-van-cell" title="订单备注">
          <input
            class="text-area"
            placeholder="选填，建议和卖家协商"
            v-model="noteInfo"
          />
        </van-cell>

        <van-cell>
          <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
          />
        </van-cell>
      </div>
      <div class="chosenCoupon">
        <van-popup
          v-model="showList"
          round
          position="bottom"
          style="height: 90%; padding-top: 4px"
        >
          <van-coupon-list
            :show-close-button="colseFlag"
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            :disabled-coupons="disabledCoupons"
            @change="onChange"
          />
          <van-button
            class="addbutton"
            round
            size="large"
            type="info"
            @click="closeButton"
            >不使用优惠券</van-button
          >
        </van-popup>
      </div>
    </div>
    <div class="paybox" v-show="paybox">
      
      <div class="ftc_wzsf">
        <div class="srzfmm_box">
          <div class="qsrzfmm_bt clear_wl">
            <img :src="xx_03" class="tx close" />

            <span class="fl">请输入支付密码</span>
          </div>
         
          <div class="zfmmxx_shop" v-for="goods in goodsInfo" :key="goods.id">
            <div class="goodspicture"><img :src="goods.imgurl" /></div>
            <div class="mz">{{ goods.title }}</div>
            <div class="zhifu_price">￥{{ goodsInfo.price }}</div>
          </div>
          <ul class="mm_box">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      
        <div class="numb_box">
          <div class="xiaq_tb">
            <img :src="jftc_14" height="10" class="downimg" /><span
              class="forget"
              @click="goforget"
              >忘记密码？</span
            >
          </div>
          <ul class="nub_ggg">
            <li><a href="javascript:void(0);" class="zf_num">1</a></li>
            <li><a href="javascript:void(0);" class="zj_x zf_num">2</a></li>
            <li><a href="javascript:void(0);" class="zf_num">3</a></li>
            <li><a href="javascript:void(0);" class="zf_num">4</a></li>
            <li><a href="javascript:void(0);" class="zj_x zf_num">5</a></li>
            <li><a href="javascript:void(0);" class="zf_num">6</a></li>
            <li><a href="javascript:void(0);" class="zf_num">7</a></li>
            <li><a href="javascript:void(0);" class="zj_x zf_num">8</a></li>
            <li><a href="javascript:void(0);" class="zf_num">9</a></li>
            <li><a href="javascript:void(0);" class="zf_empty">清空</a></li>
            <li><a href="javascript:void(0);" class="zj_x zf_num">0</a></li>
            <li><a href="javascript:void(0);" class="zf_del">删除</a></li>
          </ul>
        </div>
        <div class="hbbj"></div>
       </div>
    </div>
    <div>{{goodsinfos}}</div>
 
    <div class="footer">
      <div class="buy">
        <van-submit-bar
          class="ljzf_but"
          :price="goodsInfo.price * 100"
          button-text="立即支付"
          @submit="onSubmit"
        />
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/less/orderform.less";
import "../../assets/less/paybox.less";

import $ from "jquery";
import { Toast } from 'vant';


//定义消费券的数据
const coupon = {
    available: 1,
    condition: "无使用门槛\n全场可用",
    reason: "",
    value: 1000,
    name: "春游立减10元",
    startAt: 1609430460,
    endAt: 1640880000,
    valueDesc: "10",
    unitDesc: "元",
  },
  coupon2 = {
    available: 1,
    condition: "会员红包\n全场可用",
    reason: "",
    value: 500,
    name: "会员立减5元",
    startAt: 1609430460,
    endAt: 1640880000,
    valueDesc: "5",
    unitDesc: "元",
  },
  coupon3 = {
    available: 1,
    condition: "春节大吉\n全场可用",
    value: 1500,
    name: "会员年货立减15元",
    startAt: 1612108800,
    endAt: 1614268800,
    valueDesc: "15",
    unitDesc: "元",
    reason: "已过有效期",
  };
export default {
  data() {
    return {
      goodsInfo: [],
phonename:localStorage.getItem("phonename"),
      mima: "",
      active: 1,
      nowtime:'',
      checkedInfo: [],
      price: 0,
      paybox: false,
      colseFlag: false,
      choseNumber: -1,
      //初始商品数据
      initgoodsInfo:[],
      flag: true,
      xx_03: require("../../assets/images/xx_03.jpg"),
      duihao: "http://zhongjiashengtong.com/data/attachment/portal/201911/19/141655ecgcle7cybg484c4.gif",
      jftc_14: require("../../assets/images/jftc_14.jpg"),
      chosenCoupon: -1,
      coupons: [coupon, coupon2],
      disabledCoupons: [coupon3],
      showList: false,
      noteInfo:"",
      orderid:"",
       time: 5 * 60 * 1000,
      page:"orderform"
    };
  },
  components: {},
  created() {
    this.getRouterData();
    
    //动态检验用户支付状态，成功则调用方法存储数据
    setInterval(()=>{
      if(sessionStorage.getItem("payresults")==="true"){
this.saveorder();
 sessionStorage.removeItem("payresults")
this.$router.push({name:"Payresults",
params:{ goodsInfo: this.goodsInfo,payresult:true}
})
      }
      if(sessionStorage.getItem("payflag")==="false"){
        this.saveorder();
sessionStorage.removeItem("payflag")
this.$router.push({name:"Payresults",
params:{ goodsInfo: this.goodsInfo,payresult:false}
})
      }
  
  
},1000)//更新时间

 
    
  },
  mounted() {
    $(function init() {
      //出现浮动层
      $(".ljzf_but").click(function () {
        $(".ftc_wzsf").show();
        
        
      });
      //关闭浮动
      $(".close").click(function () {
        $(".ftc_wzsf").hide();
        $(".mm_box li").removeClass("mmdd");
        $(".mm_box li").attr("data", "");
        i = 0;
        sessionStorage.removeItem("payresults")
      });
      //数字显示隐藏
      $(".xiaq_tb").click(function () {
        $(".numb_box").slideUp(500);
      });
      $(".mm_box").click(function () {
        $(".numb_box").slideDown(500);
      });
      //----

      var i = 0;
      var failcount=3;
      $(".nub_ggg li .zf_num").click(function () {
        if (i < 6) {
          $(".mm_box li").eq(i).addClass("mmdd");
          $(".mm_box li").eq(i).attr("data", $(this).text());
          i++;
          if (i == 6) {
            setTimeout(function () {
              var data = "";
              $(".mm_box li").each(function () {
                data += $(this).attr("data");
              });
              //发起请求验证支付密码
              this.mima = data;
              
              $.ajax({
                type: "GET",
                url: "http://119.29.36.88:2020/api/checkpayword",
                contentType: "application/json;charset=UTF-8",

                data: {
                  phonename: localStorage.getItem("phonename"),
                  payword: this.mima,
                },
                success: function (result) {
                  console.log(result);
                  if (result.code == 200) {
                    $(".ftc_wzsf").hide("slow");
                      $(".mm_box li").removeClass("mmdd");
        $(".mm_box li").attr("data", "");
        i=0;
                    Toast.success(result.message);
                    // 异步跳转
                
                    sessionStorage.setItem("payresults",true)
                    sessionStorage.setItem("payflag",true)
                 
                  } else {
                    failcount--;
                    Toast.fail(result.message);
                     $(".mm_box li").removeClass("mmdd");
        $(".mm_box li").attr("data", "");
         i=0;
          sessionStorage.setItem("payresults",false)
          
        if(failcount==0){
sessionStorage.setItem("payflag",false)
 Toast.fail("支付失败");
         $(".mm_box li").removeClass("mmdd");
        $(".mm_box li").attr("data", "");
         i=0;
       $(".ftc_wzsf").hide("slow");
      
       
        }
        
        
                  }
                },
              });
            }, 100);
          }
        }
      });

      $(".nub_ggg li .zf_del").click(function () {
        if (i > 0) {
          i--;
          $(".mm_box li").eq(i).removeClass("mmdd");
          $(".mm_box li").eq(i).attr("data", "");
        }
      });

      $(".nub_ggg li .zf_empty").click(function () {
        $(".mm_box li").removeClass("mmdd");
        $(".mm_box li").attr("data", "");
        i = 0;
      });
    });

  },
  methods: {
    current() {
  
				var d = new Date(),
					daydata = '';
				daydata += d.getFullYear() + '年'; //获取当前年份 
				daydata += d.getMonth() + 1 + '月'; //获取当前月份（0——11） 
				daydata += d.getDate() + '日';
				daydata += d.getHours() + '时';
				daydata += d.getMinutes() + '分';
				this.nowtime=daydata
				return daydata;
        
			},
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
      console.log(this.chosenCoupon);

      if (this.flag == true) {
        //控制优惠券不可以多次使用
        this.goodsInfo.price =
          this.goodsInfo.price - this.coupons[index].valueDesc;
        this.flag = false;
      }
    },
    goforget(){
      this.$router.push({
        name: "Forgetpassword",
        params: { show1: true,
                  page:"orderform"
                  },
                  
      });
    },
    saveorder(){
      //获得时间
this.current();
var payflag=sessionStorage.getItem("payflag")
this.orderid= 'order'+Date.now()
 this.axios({
        method: "POST",
        url: "/saveorder",
        data:{goodsInfo:this.goodsInfo,
        peopleInfo:this.checkedInfo,
        paytime:this.nowtime,
        payprice:this.goodsInfo.price,
        username:localStorage.getItem("currenUser"),
        phonename:localStorage.getItem("phonename"),
        noteInfo:this.noteInfo,
        payflag,
        orderid:this.orderid
        }
        
      }).then((res) => {
        console.log(res);
        if (res.code == 200) {
          Toast(res.data.message);
        } else {
          this.$toast.fail(res.data.message);
        }
      });

    },

    closeButton() {
      this.goodsInfo[0].price = this.price;
      this.showList = false;
      this.flag = true; //开启下一次优惠券可用点击
      this.chosenCoupon = -1; //清除之前选择的数据
    },

    onSubmit() {
      this.active=2
      this.$toast.loading({
        message: "加载中...",
        //防止穿透
        forbidClick: true,
        loadingType: "spinner",
      });
      //设置异步提醒方法
      let second = 1;
      const timer = setInterval(() => {
        second--;
        if (!second) {
          clearInterval(timer);
          // 手动清除 Toast
        
           let data = this.phonename;
        console.log(data);
        this.axios({
          method: "POST",
          url: "/havepayword",
          data:{
            phonename:this.phonename
          },
        }).then((res) => {
          console.log(res);
          if(res.data.code===100){

        this.paybox = false;
          this.$dialog
          .confirm({
            title: "未设置支付密码！",
            message: "是否去设置支付密码！",
            confirmButtonColor: "#0C34BA",
          })
          .then(() => {
            let second = 2;
            var timer = setInterval(() => {
              second--;
              if (second) {
                this.$toast.success("请设置密码后重新购买");
              } else {
                clearInterval(timer);

                this.$toast.clear();
              }
              this.$router.push({
                name: "Security",
                params: {page: "orderform"},
              },1000);
            });
          });
          }
        else{
  this.$toast.clear();
          this.paybox = true;
        }
        });
     
        }
      }, 500);
      //获取支付密码
      
       
    
    },
    // 调用请求验证支付密码
    checkpayword() {
      this.axios({
        method: "GET",
        url: "/checkpayword",
        params: {
          phonename: this.phonename,
          payword: this.mima,
        },
      }).then((res) => {
        console.log(res);
        if (res.code == 200) {
          Toast(res.data.message);
        } else {
          this.$toast.fail(res.data.message);
        }
      });
    },
    back() {
      this.$router.push({
        name: "Confirmgoods",
        params: { goodsInfo: this.goodsInfo ,initgoodsInfo:this.initgoodsInfo,page:this.page,peopleInfo:this.checkedInfo},
      });
    },

    getRouterData() {
      this.goodsInfo = this.$route.params.goodsInfo;
      this.checkedInfo = this.$route.params.peopleInfo;
      this.noteInfo = this.$route.params.noteInfo;
      this.price = this.$route.params.goodsInfo[0].price;
      this.initgoodsInfo=this.$route.params.initgoodsInfo
      
    },
  },
};
</script>