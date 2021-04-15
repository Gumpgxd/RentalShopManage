<template>
  <div class="topbar">
    <div class="container">
      <div class="top-info">
        <a href="javascript:;" @click="home">智能化共享租赁平台</a>
      </div>
      <div class="top-user">
        <!-- <a href="javascript:;" v-if="getUserName">{{ getUserName }}</a> -->
        <a href="javascript:;" v-show="getUserName" @click="logout">退出</a>
        <a href="javascript:;" v-show="getUserName1" @click="login">登录</a>

        <!-- <a href="javascript:;" v-show="getUserName2" @click="mylist">我的订单</a> -->
        <a href="javascript:;" v-show="getUserName3" @click="register">注册</a>

        <a href="javascript:;" class="shopcart" @click="adimnLogin">
          <i class="cart-total">用户个人中心</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import { request } from "api/request";
export default {
  name: "TopBar",
  data() {
    return {
      getUserName: false,
      getUserName1: true,
      getUserName2: false,
      getUserName3: true,
    };
  },
  props: {
    userName: String,
  },
  computed: {
    // getUserName() {
    //   // return this.$store.state.userName;
    //   // return sessionStorage.getItem("token")
    // },
    // getCartCount() {
    //   return this.$store.state.cartCount;
    // },
  },

  mounted: function () {
    this.createcode(); //需要触发的函数
  },
  methods: {
    createcode() {
      var token = sessionStorage.getItem("token");
      console.log(token);
      if (token) {
        this.getUserName1 = false;
        this.getUserName = true;
        this.getUserName2 = true;
        this.getUserName3 = false;
      }
    },
    //  var token = sessionStorage.getItem("token"),
    // console.log(token)
    login() {
      // console.log();
      var token = sessionStorage.getItem("token");
      console.log(token);
      // 如果用户是登录状态，name直接跳转到用户购物车页面
      if (token) {
        this.getUserName1 = false;
        this.getUserName = true;
        this.$router.push("/mylist");
        location.reload('/index')
      } else {
        // 如果用户不是登录状态,那么直接跳转到登录页面
        this.$router.push("/login");
      }
    },
    logout() {
      //清空token
      window.sessionStorage.clear();
      //退出home页面
      this.$router.push("/index");
      location.reload('/index')
    },
    adimnLogin() {
      // console.log();
      var token = sessionStorage.getItem("token");
      console.log(token);
      // 如果用户是登录状态，name直接跳转到用户购物车页面
      if (token) {
        this.$router.push("/mylist");
      } else {
        // 如果用户不是登录状态,那么直接跳转到登录页面
        this.$router.push("/login");
      }
    },
    register() {
      this.$router.push("/order/");
    },
    home() {
      this.$router.push("/index");
    },
    // mylist() {
    //   this.$router.push("/mylist")
    // }
  },
};
</script>
<style scoped>
.topbar {
  width: 100%;
  height: 39px;
  background-color: #333333;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 39px;
}
.container a {
  color: #b0b0b0;
  margin-right: 17px;
  font-weight: 600;
}

.top-info {
  font-size: 19px;
}

.top-user .shopcart {
  display: inline-block;
  position: relative;
  width: 110px;
  height: 39px;
  background-color: #666666;
  color: aliceblue;
  margin-right: 0;
  text-align: center;
}
.top-user .icon-cart {
  position: absolute;
  top: 13px;
  left: 18px;
  width: 16px;
  height: 12px;
  background: url("/imgs/icon-cart.png") no-repeat;
  background-size: contain;
}
/* .shopcart .cart-total {
  margin-left: 38px;
} */
</style>