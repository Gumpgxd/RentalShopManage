<template>
  <div id="home">
    <nav-header></nav-header>
    <router-view></router-view>
    <footer-info></footer-info>
  </div>
</template>

<script>
import NavHeader from "components/navheader/NavHeader";
import FooterInfo from "components/navfooter/FooterInfo";
export default {
  name: "home",
  components: {
    NavHeader,
    FooterInfo,
  },
};
</script>
<style scoped>
</style>