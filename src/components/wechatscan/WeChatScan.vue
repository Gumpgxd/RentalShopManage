<template>
  <div class="scan">
    <div class="container">
      <div class="phone-modle">
        <img src="/imgs/pay/icon-scan.png" alt="" />
      </div>
      <div class="pay-box">
        <div class="header">
          <h3>微信支付</h3>
          <span class="close" @click="closeClick"></span>
        </div>
        <div class="code">
          <img :src="imgURL" class="code-img" />
        </div>
        <div class="desc">
          <p>请使用<span>微信</span>扫一扫</p>
          <p>二维码完成支付</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeChatScan",
  props: {
    imgURL: {
      type: String,
      default: "",
    },
  },
  methods: {
    //   点击关闭发射给父组件自定义事件
    closeClick() {
      this.$emit("closeClick");
    },
  },
};
</script>
<style scoped>
.scan {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.container {
  height: 500px;
  /* background-color: cadetblue; */
  margin-top: 150px;
  display: flex;
  align-items: center;
}
.phone-modle {
  width: 296px;
  height: 485px;
  margin-left: 150px;
}
.phone-modle img {
  width: 100%;
}
.pay-box {
  width: 370px;
  height: 440px;
  background-color: #fff;
}
.header {
  height: 60px;
  background-color: #d9d9d9;
  line-height: 60px;
  padding: 0 18px;
  position: relative;
}
.header h3 {
  font-size: 18px;
}
.header .close {
  position: absolute;
  width: 13px;
  height: 13px;
  background-color: coral;
  top: 24px;
  right: 18px;
  background: url("/imgs/icon-close.png") no-repeat center;
  background-size: 13px;
  cursor: pointer;
  transition: all 0.5s;
}
.header .close:hover {
  transform: scale(1.5);
}
.code {
  padding: 44px 66px 34px;
  width: 230px;
  height: 230px;
}
.code img {
  width: 100%;
}
.desc {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.desc p {
  line-height: 24px;
}
.desc span {
  color: #ff6600;
}
</style>