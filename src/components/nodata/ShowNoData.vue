<template>
  <div class="nodata">
    <div class="img">
      <img src="/imgs/icon-no-data.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowNoData",
};
</script>
<style scoped>
.nodata {
  height: 480px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.img {
  width: 520px;
  height: 368px;
}
.img img {
  width: 100%;
}
</style>