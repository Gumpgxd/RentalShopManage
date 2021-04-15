<template>
  <div class="model">
    <!-- 遮罩层 -->
    <div class="mask" v-if="showModle"></div>
    <!-- 弹窗主体 -->
    <div class="dialog" :class="{ slide: showModle }">
      <!-- 顶部标题 -->
      <div class="header">
        <span>{{ title }}</span>
        <a href="javascript:;" class="icon-close" @click="closeClick"></a>
      </div>
      <!-- 中间内容 -->
      <div class="body">
        <slot name="content"></slot>
      </div>
      <!-- 底部按钮 -->
      <div class="footer">
        <button class="btn btn-close" @click="closeClick" v-if="btnType == 0">
          {{ closeText }}
        </button>
        <button class="btn btn-sure" v-if="btnType == 1" @click="sureClick">
          {{ sureText }}
        </button>
        <div class="btn-group" v-if="btnType == 2">
          <button class="btn btn-close" @click="closeClick">
            {{ closeText }}
          </button>
          <button class="btn btn-sure" @click="sureClick">
            {{ sureText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Model",
  props: {
    //   弹窗类型 小small 中middle 大large 表单 form
    modelType: {
      type: String,
      default: "middle",
    },
    // 弹窗标题
    title: String,

    // 按钮类型 0:取消 1：确认 2：确认和取消
    btnType: {
      type: String,
      default: 0,
    },
    // 确认类型按钮文字
    sureText: {
      type: String,
      dafault: "确认",
    },
    // 取消类型按钮文字
    closeText: {
      type: String,
      dafault: "取消",
    },
    showModle: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeClick() {
      this.$emit("closeClick");
    },
    sureClick() {
      this.$emit("sureClick");
    },
  },
};
</script>
<style scoped>
/* .model {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  z-index: 9;
} */

.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
  width: 660px;
  background-color: #fff;
  position: fixed;
  top: -100%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
}
.slide {
  top: 40%;
}
.header {
  height: 60px;
  background-color: #f5f5f5;
  line-height: 60px;
  font-size: 16px;
  padding-left: 20px;
  position: relative;
}

.header span {
  display: inline-block;
  line-height: 60px;
}
.header a {
  position: absolute;
  width: 14px;
  height: 14px;
  background: url("/imgs/icon-close.png") no-repeat center;
  background-size: 14px;
  right: 20px;
  top: 25px;
  transition: all 0.4s;
}
.header a:hover {
  transform: scale(1.5);
}

.body {
  padding: 40px 44px 54px;
  font-size: 14px;
}
.footer {
  height: 80px;
  background-color: #f5f5f5;
  line-height: 80px;
  text-align: center;
}
.btn {
  display: inline-block;
  width: 120px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
}
.btn-sure {
  background-color: #ff6600;
  color: #fff;
}
.btn-close {
  background-color: #b0b0b0;
  color: #fff;
  margin-right: 20px;
}
</style>