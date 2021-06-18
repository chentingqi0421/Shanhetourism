<template>
  <div class="myorder">
    <!-- 头部开始 -->
    <header>
      <van-nav-bar
        title="我的旅游"
        left-text="返回"
        left-arrow
        :fixed="true"
        @click-left="back"
      />
    </header>
    <div v-if="haveorder">
      <div class="orderlist">
        <van-tabs type="card">
          <van-tab
            v-for="(item, index) in ordername"
            :key="index"
            :title="item"
          >
            <!-- 全部订单开始 -->
            <div class="done" v-show="index == 0">
              <div v-for="(goods, index) in goodslist" :key="index">
                <van-card
                  class="list"
                  :num="goods.people"
                  :price="goods.payprice"
                  :desc="goods.place"
                  :title="goods.title"
                  :thumb="goods.goodsimg"
                >
                  <template #tags>
                    <van-tag plain type="danger"
                      >原价：{{ goods.price }}</van-tag
                    >
                    <div class="status">
                      {{
                        goods.status === "true"
                          ? "支付成功"
                          : goods.status === "false"
                          ? "支付失败"
                          : goods.status === "done"
                          ? "完成订单"
                          : goods.status
                      }}
                    </div>
                  </template>
                  <template #footer>
                    <van-button
                      size="mini"
                      @click="done(goods)"
                      v-show="goods.status === 'true'"
                      >确定订单</van-button
                    >
                    <van-button size="mini" @click="deleorder(goods)"
                      >删除订单</van-button
                    >
                  </template>
                </van-card>
              </div>
            </div>

            <!-- 全部订单结束 -->
            <!-- 完成订单开始 -->
            <div class="done" v-show="index == 1">
              <div v-if="donegoods">
                <div v-for="(goods, index) in donelist" :key="index">
                  <van-card
                    class="list"
                    :num="goods.people"
                    :price="goods.payprice"
                    :desc="goods.place"
                    :title="goods.title"
                    :thumb="goods.goodsimg"
                  >
                    <template #tags>
                      <van-tag plain type="danger"
                        >原价：{{ goods.price }}</van-tag
                      >
                      <div class="status">
                        {{
                          goods.status === "true"
                            ? "支付成功"
                            : goods.status === "false"
                            ? "支付失败"
                            : goods.status === "done"
                            ? "完成订单"
                            : goods.status
                        }}
                      </div>
                    </template>
                    <template #footer>
                      <van-button v-show="goods.comment==null" size="mini" @click="commt(goods)">评价</van-button>
                      <!-- 评价层开始 -->
                      <van-popup
                        v-model="showcommt"
                        position="bottom"
                        :style="{ height: '100%' }"
                        closeable
                        close-icon-position="top-left"
                      >
                      
                        <!-- 商品 -->
                        <div class="goodsinof">
                          <van-card
                            class="list"
                            :num="commentgoods.people"
                            :price="commentgoods.payprice"
                            :desc="commentgoods.place"
                            :title="commentgoods.title"
                            :thumb="commentgoods.goodsimg"
                          >
                          </van-card>
                        </div>
                        <van-cell title="评价打分" class="commentcell">
                           <div class="rate">
                          <van-rate v-model="value" icon="like" void-icon="like-o" />
                        </div>
                      </van-cell>
                        <div class="commttext">
                          <van-field
                            v-model="message"
                            rows="4"
                            autosize
                            label="评价"
                            type="textarea"
                            maxlength="150"
                            placeholder="请输入评价"
                            show-word-limit
                          />
                        </div>
                          <van-cell title="上传照片" is-link arrow-direction="down" value="最多4张" />
                        <div class="upload">
                          
                          <van-uploader v-model="fileList"  :after-read="afterRead"   :max-count="4" upload-text="宝贝图片" >
  
                          </van-uploader>
                        </div>
                     <div class="submit">
                       <van-submit-bar  button-text="提交评论" @submit="onSubmit" />
                     </div>

                        <!-- 商品结束 -->
                      </van-popup>
                      <!-- 评价层结束 -->

                      <van-button size="mini" @click="deleorder(goods)"
                        >删除订单</van-button
                      >
                    </template>
                  </van-card>
                </div>
              </div>
              <div v-else>
                <van-empty description="什么都没有，先去逛逛吧"></van-empty>
                <van-button
                  round
                  type="danger"
                  class="bottom-button"
                  @click="gotomall"
                  >去商城</van-button
                >
              </div>
            </div>
            <!-- 完成订单结束 -->
            <!-- 失效订单开始 -->
            <div class="done" v-show="index == 2">
              <div v-if="failgoods">
                <div v-for="(goods, index) in faillist" :key="index">
                  <van-card
                    class="list"
                    :num="goods.people"
                    :price="goods.payprice"
                    :desc="goods.place"
                    :title="goods.title"
                    :thumb="goods.goodsimg"
                  >
                    <template #tags>
                      <van-tag plain type="danger"
                        >原价：{{ goods.price }}</van-tag
                      >
                      <div class="status">
                        {{
                          goods.status === "true"
                            ? "支付成功"
                            : goods.status === "false"
                            ? "支付失败"
                            : goods.status === "done"
                            ? "完成订单"
                            : goods.status
                        }}
                      </div>
                    </template>
                    <template #footer>
                      <van-button size="mini" @click="deleorder(goods)"
                        >删除订单</van-button
                      >
                    </template>
                  </van-card>
                </div>
              </div>
              <div v-else>
                <van-empty description="什么都没有，先去逛逛吧"></van-empty>
                <van-button
                  round
                  type="danger"
                  class="bottom-button"
                  @click="gotomall"
                  >去商城</van-button
                >
              </div>
            </div>
            <!-- 失效订单结束 -->
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="nogoods" v-else>
      <div v-if="isLogin">
        <van-empty description="什么都没有，先去逛逛吧"></van-empty>
        <van-button round type="danger" class="bottom-button" @click="gotomall"
          >去商城</van-button
        >
      </div>
      <div v-else class="nologin">
        <van-empty description="还没登录哦，先去登录吧"></van-empty>
        <van-button round type="danger" class="bottom-button" @click="gologin"
          >登录</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/less/myorder.less";
export default {
  inject: ["reload"],
  data() {
    return {
      phonename: localStorage.getItem("phonename"),
      ordername: ["全部订单", "已完成", "已失效"],
      goodslist: [], //所有订单
      donelist: [], //完成订单
      faillist: [], //失败订单
      haveorder: false,
      userimg:localStorage.getItem("userimg"),
      value: 0,
      message:"",
       fileList: [],
       commentgoods:{},
       nowtime:"",
      donegoods: true,
      failgoods: true,
      showcommt: false,
      commented:false,
      isLogin: localStorage.getItem("isLogin"),
      username:localStorage.getItem("currenUser")
    };
  },
  created() {
    this.getorderform();
     if(this.userimg==="null"){
this.userimg="http://119.29.36.88:2020/img/top.jpeg"
    }
  },
  methods: {
    back() {
      this.$router.push({ name: "My" });
    },
    gologin() {
      this.$router.push({ name: "Login" });
    },
    gotomall() {
      this.$router.push({ name: "Mall" });
    },
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
    commt(goods) {
      this.showcommt = true;
      this.commentgoods=goods
      console.log(this.commentgoods)
    },
    //确认收获
    done(goods) {
      this.axios({
        method: "GET",
        url: "/doneorder",
        params: {

          onlyid: goods.onlyid,
          phonename: goods.tel,
          orderid: goods.orderid,
        },
      }).then((res) => {
        console.log(res);
        this.reload();
      });
    },
    //评价提交
    onSubmit(){
       this.current();
       let data = ({
         phone:this.phonename,
         onlyid:this.commentgoods.onlyid,
          orderid:this.commentgoods.orderid,
          time:this.nowtime,
          value:this.value,
         text:this.message,
          goods:this.commentgoods.title

        })
      if(this.value==0){
        this.$notify("点亮爱心哦")
      }else{
        if(this.message==""){
            this.$notify("评论不能为空")
        }else{
  this.axios({
          method: 'POST',
          url: '/commentgoods',
          data
        }).then(result => {
          this.$toast.success(result.data.message)
          this.showcommt=false
          data={}
          this.reload()
  
        }).catch(err => {
          
          console.log('err ==> ', err);
          
        })
        }
      }
     
       
    },
    afterRead( fileList) {
   console.log( fileList);
    if(fileList.file.size>5148576){
      this.$toast('评论照片不能大于5M');
    }else{
      // 此时可以自行将文件上传至服务器
      
      
       console.log( fileList);
       let data = ({
          phone:this.phonename,
          fileList:fileList.content,
          username:this.username,
          onlyid:this.commentgoods.onlyid,
          userimg:this.userimg,
          orderid:this.commentgoods.orderid,
          img:true

        })
    
    //上传照片到服务器
     this.axios({
          method: 'POST',
          url: '/commentgoods',
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
   
    //删除订单
    deleorder(goods) {
      this.axios({
        method: "GET",
        url: "/deleorder",
        params: {
          phonename: goods.tel,
          orderid: goods.orderid,
        },
      }).then((res) => {
        //重新获取订单刷新
        this.reload();
        console.log(res);
      });
    },
    getorderform() {
      this.axios({
        method: "GET",
        url: "/orderform",
        params: {
          phonename: this.phonename,
        },
      }).then((res) => {
        console.log("订单信息", res);
        //订单消息筛选
        this.goodslist.push(...res.data.list);
        //完成订单
        res.data.list.forEach((element) => {
          if (element.status == "done") {
            this.donelist.push(element);
             console.log(element.comment)
             if(element.comment==null){
            this.commented=true
          }else{
             this.commented=false
          }
          }
         
          
        });
        //判断是否为空列表
        if (this.donelist.length == 0) {
          this.donegoods = false;
        }
        console.log("完成", this.donelist);
        //失败订单
        res.data.list.forEach((element) => {
          if (element.status == "false") {
            this.faillist.push(element);
          }
        });
        //判断是否为空列表
        if (this.faillist.length == 0) {
          this.failgoods = false;
        }
        console.log("失败", this.faillist);
        if (res.data.list == "") {
          this.haveorder = false;
        } else {
          this.haveorder = true;
        }
      });
    },
  },
};
</script>
