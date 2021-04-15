<template>
  <div class="pro-prams" ref="top" :class="{ fixed: isFixed }">
    <div class="container">
      <!-- 左侧区域 -->
      <div class="pro-title">
        <h3>{{ title }}</h3>
        <span>小米8</span>
        <span>小米8 SE</span>
      </div>

      <!-- 右侧区域 -->
      <div class="pro-desc">
        <a href="javascript:;">概述</a>
        <a href="Javascript:;">参数</a>
        <a href="Javascript:;">用户评价</a>
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProPrams",
  data() {
    return {
      isFixed: false,
      offsetTop: 0, //组件距离页面顶端的距离
    };
  },
  props: {
    title: String,
    proId: String,
  },
  mounted() {
    window.addEventListener("scroll", this.getScrollTop); //监听原生滚动事件
    this.offsetTop = this.$refs.top.offsetTop; //获取组件距离页面顶部距离并保存
  },
  computed: {},
  methods: {
    getScrollTop() {
      // 获取兼容性的页面滚动距离
      let scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      // 当滚动距离超出页面距离顶部距离后 修改isFixed变量值为true
      this.isFixed = scrollTop > this.offsetTop ? true : false;
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.getScrollTop, false); //移除原生滚动事件
  },
};
</script>
<style scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 15;
}
.pro-prams {
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 7px 4px rgba(0, 0, 0, 0.11);
}
.container {
  border-top: 1px solid #eee;
  display: flex;
  line-height: 70px;
}
.pro-title {
  flex: 1;
  display: flex;
}
.pro-title h3 {
  font-size: 18px;
  padding-right: 6px;
}
.pro-title span {
  padding: 0 6px;
  position: relative;
}
.pro-title span::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 12px;
  background-color: #666;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.pro-desc {
  flex: 1;
  text-align: right;
}
.pro-desc a {
  padding: 0 6px;
  color: #666;
}
.pro-desc a:nth-child(2) {
  border-left: 1px solid #666;
  border-right: 1px solid #666;
}
</style>