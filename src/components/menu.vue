<template>
<div >
    <van-tabbar v-model="active" active-color="blue" :route="true">
      <van-tabbar-item v-for="(item,key) in menuList" :to="item.toHref" :key="key">
        <span>{{ item.title }}</span>
        <template #icon="props">
          <img :src="props.active ? item.active_src : item.src" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
</div>

</template>
<script>
import '../assets/less/menu.less'
export default {
  props: {
    index: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  created() {
    this.active = this.index;
  },
  data() {
    return {
      active: 0,
      menuList: [
        {
          title: "首页",
          src: ("http://119.29.36.88:2020/icon/homecheck.svg"),
          active_src: ("http://119.29.36.88:2020/icon/039-sushi.svg"),
          toHref: "/home",
        },
        {
          title: "目的地",
          src: ("http://119.29.36.88:2020/icon/aimplacecheck.svg"),
          active_src: ("http://119.29.36.88:2020/icon/047-origami.svg"),
          toHref: "/destination",
        },
        {
          title: "商城",
          src: ("http://119.29.36.88:2020/icon/shopcheck.svg"),
          active_src: ("http://119.29.36.88:2020/icon/033-food stand.svg"),
          toHref: "/mall",
        },
        {
          title: "我的",
          src: ("http://119.29.36.88:2020/icon/mycheck.svg"),
          active_src: ("http://119.29.36.88:2020/icon/027-geisha.svg"),
          toHref: "/my",
        },
      ],
    };
  },
};
</script>
