<template>
  <div class="nav-service">
    <div class="container">
      <div class="service-item">
        <span class="icon-service icon1"></span>
        <a class="title"
          >预约维修服务</a
        >
      </div>
      <div class="service-item">
        <span class="icon-service icon2"></span>
        <a class="title"
          >7天无理由退货</a
        >
      </div>
      <div class="service-item">
        <span class="icon-service icon3"></span>
        <a class="title"
          >15天免费换货</a
        >
      </div>
      <div class="service-item">
        <span class="icon-service icon4"></span>
        <a class="title"
          >满150元包邮</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavService",
};
</script>
<style scoped>
.nav-service {
  width: 100%;
  height: 80px;
}
.container {
  display: flex;
  height: 80px;
}
.service-item {
  flex: 1;
  position: relative;
  font-size: 16px;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: center;
}
.service-item::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 34px;
  right: 0;
  top: 23px;
  background-color: #e5e5e5;
}
.service-item:last-child::after {
  display: none;
}
.service-item a {
  color: #666666;
}
.service-item:hover a {
  color: #c81623;
}
.icon-service {
  width: 20px;
  height: 20px;
  margin-right: 4px;
}
.icon1 {
  background: url("/imgs/icon-setting.png") no-repeat;
  background-size: 20px;
}
.icon2 {
  background: url("/imgs/icon-7day.png") no-repeat;
  background-size: 20px;
}
.icon3 {
  background: url("/imgs/icon-15day.png") no-repeat;
  background-size: 20px;
}
.icon4 {
  background: url("/imgs/icon-post.png") no-repeat;
  background-size: 20px;
}
</style>