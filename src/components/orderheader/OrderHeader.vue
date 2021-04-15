<template>
  <div class="order-header">
    <div class="container">
      <div class="logo">
        <a href="/index">
          <img src="/imgs/logo-mi.png" alt="" />
        </a>
      </div>
      <div class="title">{{ title }}</div>

      <div class="desc">
        <slot name="desc"></slot>
      </div>
      <div class="username" v-if="getUserName">{{ getUserName }}</div>
      <div class="username" v-if="!getUserName" @click="goLoginClick">登录</div>
    </div>
  </div>
</template>

<script>
import { request } from "api/request";
export default {
  name: "OrderHeader",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  created() {
    this.getUserInfo();
  },
  computed: {
    getUserName() {
      return this.$store.state.userName;
    },
  },
  methods: {
    goLoginClick() {
      this.$router.push("/login");
    },
    getUserInfo() {
      request({
        method: "get",
        url: "/user",
      }).then((res) => {
        console.log(res);
        // 将username保存在vuex中管理
        if (res) {
          this.$store.commit("saveUserName", res.username);
        }
      });
    },
  },
};
</script>
<style scoped>
.order-header {
  background-color: #fff;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.11);
}
.container {
  height: 112px;

  display: flex;
  align-items: center;
  position: relative;
}
.logo {
  width: 52px;
  height: 52px;
  margin-right: 54px;
  cursor: pointer;
}
.logo img {
  width: 100%;
}
.title {
  color: #333;
  font-size: 28px;
  margin-right: 17px;
}
.desc {
  color: #999;
  font-size: 14px;
  margin-top: 14px;
}
.username {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 16px;
  cursor: pointer;
}
</style>