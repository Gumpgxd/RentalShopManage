<template>
  <div class="index-banner">
    <div class="container">
      <a href="javascript:;">
        <img v-lazy="'https://z3.ax1x.com/2021/04/12/cBmERS.jpg'" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexBanner",
};
</script>
<style scoped>
.index-banner {
  margin: 31px 0 50px 0;
}
.container {
  height: 130px;
}
.container > a {
  display: block;
}
.container > a img {
  width: 100%;
}
</style>