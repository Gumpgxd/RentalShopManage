<template>
  <div>
    <index-swiper></index-swiper>
    <index-ads></index-ads>
    <index-banner></index-banner>
    <phone-list></phone-list>
    <nav-service></nav-service>
  </div>
</template>

<script>
import NavService from "components/navfooter/NavService";
import IndexSwiper from "./IndexSwiper";
import indexAds from "./indexAds";
import indexBanner from "./indexBanner";
import PhoneList from "./PhoneList";
// import { request } from "api/request";
export default {
  name: "index",
  components: {
    NavService,
    IndexSwiper,
    indexAds,
    indexBanner,
    PhoneList,
  },
  mounted() {
    this.getUserInfo();
    this.getCartLength();
    
  },
  methods: {
    // 每次进入首页都获取一次用户的信息并保存在vuex中
    getUserInfo() {
      // request({
      //   method: "get",
      //   url: "/user",
      // }).then((res) => {
      //   console.log(res);
      //   // 将username保存在vuex中管理
      //   if (res) {
      //     this.$store.commit("saveUserName", res.username);
      //   }
      // });
    },
    // 每次进入首页都获取一次用户购物车数量并保存在vuex中
    getCartLength() {
      // request({
      //   method: "get",
      //   url: "/carts/products/sum",
      // }).then((res) => {
      //   // 将购物车数量保存在vuex中管理
      //   console.log(res);
      //   if (res) {
      //     this.$store.commit("saveCartCount", res);
      //   }
      // });
    },
  },
};
</script>
<style scoped>
</style>