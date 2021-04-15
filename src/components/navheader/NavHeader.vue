<template>
  <div class="nav-header">
    <top-bar :userName="userName"></top-bar>
    <top-nav :phoneList="phoneList" :redMiList="redMiList"></top-nav>
  </div>
</template>

<script>
import TopBar from "../navheader/TopBar";
import TopNav from "../navheader/TopNav";
import { request } from "api/request";
export default {
  name: "NavHeader",
  components: {
    TopBar,
    TopNav,
  },
  data() {
    return {
      phoneList: [],
      redMiList: [],
      userName: "",
    };
  },
  mounted() {
    this.getProductData();
  },
  methods: {
    getProductData() {
      request({
        url: "/products",
        params: {
          categoryId: "100012",
        },
      })
        .then((res) => {
          console.log(res);
          if (res.list.length > 6) {
            this.phoneList = res.list.slice(0, 6);
            this.redMiList = res.list.slice(3, 9);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
</style>