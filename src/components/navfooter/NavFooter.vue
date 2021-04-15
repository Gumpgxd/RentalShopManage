<template>
  <div>
    <nav-service></nav-service>
    <footer-info></footer-info>
  </div>
</template>

<script>
import NavService from "../navfooter/NavService";
import FooterInfo from "../navfooter/FooterInfo";
export default {
  name: "NavFooter",
  components: {
    NavService,
    FooterInfo,
  },
};
</script>
<style scoped>
</style>