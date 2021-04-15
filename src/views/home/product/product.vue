<template>
  <div>
    <!-- <pro-prams :title="product.name" :proId="proId">
      <a slot="button" class="buynow" @click="buyClick">立即购买</a>
    </pro-prams> -->
    <product-banner :product="product"></product-banner>
  </div>
</template>

<script>
// import ProPrams from "components/propramas/ProPrams";
import productBanner from "./productBanner";
// import { request } from "api/request";

export default {
  name: "product",
  data() {
    return {
      product: {},
      proId: "",
      title: "",
    };
  },
  components: {
    // ProPrams,
    productBanner,
  },
  created() {
    // 获取地址栏中的产品ID
    // this.proId = this.$route.params.id;
  },
  mounted() {
    // 发送请求获取该id对应的商品信息
    // this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      
    },
    buyClick() {
      this.$router.push("/detail/" + this.proId);
    },
  },
};
</script>
<style scoped>
a.buynow {
  display: inline-block;
  width: 110px;
  height: 30px;
  background-color: #ff6600;
  text-align: center;
  line-height: 30px;
  color: #fff;
  cursor: pointer;
  z-index: 999;
}
.nav-header {
  display: none !important;
}
</style>