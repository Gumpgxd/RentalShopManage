<template>
  <div class="loading">
    <p>正在加载，请稍后~</p>
    <div class="img">
      <img src="/imgs/loading-svg/loading-bars.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>
<style scoped>
.loading {
  height: 480px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
p {
  color: #666;
  font-size: 26px;
}
.img {
  width: 100px;
  height: 100px;
}
.img img {
  width: 100%;
}
</style>