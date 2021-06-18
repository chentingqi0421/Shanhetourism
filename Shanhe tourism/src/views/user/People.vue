<template>
  <div class="my-address">
    <van-nav-bar
      title="常用人员"
      left-text="返回"
      left-arrow
      :fixed="true"
      @click-left="back"
    />
    <van-contact-card type="add" @click="Addpeople" />
    <van-contact-card
      v-for="people in list"
      :key="people.id"
      type="edit"
      :name="people.name"
      :tel="people.tel"
      @click="onEdit(people)"
    />
    <!-- 添加人员 -->
    <van-popup
      v-model="show"
      close-on-popstate
      round
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-contact-edit
        is-edit
        :contact-info="editingContact"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>
<script>
import "../../assets/less/address.less";
export default {
  inject: ["reload"],
  data() {
    return {
      phonename: localStorage.getItem("phonename"),
      list: [],
      show: false,
      onlyid: "",
      flag: "", //用设定弹框状态
      editingContact: {},
    };
  },

  created() {
    this.getpeopleinfo();
  },
  methods: {
    getpeopleinfo() {
      this.axios({
        method: "GET",
        url: "/getpeopleinfo",
        params: {
          phonename: this.phonename,
        },
      }).then((res) => {
        this.list.push(...res.data.message);
      });
    },
    back() {
      this.$router.go(-1);
    },
    //新增地址
    Addpeople() {
      this.show = true;
      this.flag = "add";
    },
     checked(contactInfo) {

      for (var k = 0; k < this.list.length; k++) {
        console.log(contactInfo.name, this.list[k].name);
        if (contactInfo.name === this.list[k].name) {
          return true
        }
      }
    },
    
    onSave(contactInfo) {
      if (this.flag == "add") {
        
         
            if (!this.checked(contactInfo)) {
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
                this.reload();
              });
            } else {
              this.$toast.fail("请勿重复添加");
            }
          
        
      } else {
        
         
            if (!this.checked(contactInfo)) {
              this.axios({
                method: "GET",
                url: "/changepeople",
                params: {
                  phonename: this.phonename,
                  name: contactInfo.name,
                  tel: contactInfo.tel,
                  id: this.onlyid,
                },
              }).then((res) => {
                this.$toast.success(res.data.message);
                this.reload();
              });
            } else {
              this.$toast.fail("已存在该联系人");
            }
          
        
      }
    },
    onDelete() {
      if (this.flag == "add") {
        this.$toast.fail("请先选择联系人");
      } else {
        this.axios({
          method: "GET",
          url: "/deletepeople",
          params: {
            phonename: this.phonename,
            id: this.onlyid,
          },
        }).then((res) => {
          this.$toast.success(res.data.message);
          this.reload();
        });
      }
    },
    onEdit(people) {
      this.show = true;
      this.flag = "edit";
      this.onlyid = people.id;
    },
  },
};
</script>