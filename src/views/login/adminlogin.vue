<template>
  <div class="login">
    <!-- 头部区域 -->
    <div class="header container">
      <a href="/index">
        <h2 class="login_title">智能化共享租赁平台管理员登陆</h2>
      </a>
    </div>
    <!-- 中间背景图片 -->
    <div class="login-bg">
      <img src="/imgs/login-bg.jpg" alt="" />
    </div>
    <!-- 登录框 -->

    <div class="center container">
      <div class="login-box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <!-- 账号登录 -->
          <el-tab-pane label="账号登录" name="first">
            <div class="inputbox">
              <input type="text" placeholder="请输入账号" v-model="username" />
            </div>

            <div class="inputbox">
              <input
                type="password"
                placeholder="请输入密码"
                v-model="password"
              />
            </div>

            <div class="loginbtn" @click="loginClick">登录</div>

            <!-- <div class="message">
              <div class="number">手机短信登录/注册</div>
              <div class="forget">
                <span class="register" @click="registerClick">立即注册</span>
              </div>
            </div> -->
          </el-tab-pane>

          <!-- 短信登录 -->
          <el-tab-pane label="短信登录" name="second">
            <div class="inputbox">
              <input type="text" placeholder="请输入手机号" v-model="phone" />
            </div>

            <div class="inputbox1">
              <div>
                <input
                  class="auth_input"
                  type="text"
                  placeholder="请输入验证码"
                  v-model="code"
                />
                <span
                  v-show="sendAuthCode"
                  class="auth_text auth_text_blue"
                  @click="getAuthCode"
                  >获取验证码</span
                >
                <span v-show="!sendAuthCode" class="auth_text">
                  <span class="auth_text_blue">{{ auth_time }} </span>
                  秒后重新发送</span
                >
              </div>
              <!-- <input type="text" placeholder="请输入验证码" v-model="code" /> -->
            </div>

            <div class="loginbtn" @click="loginClick">登录</div>

            <div class="message">
              <div class="number">手机短信登录/注册</div>
              <div class="forget">
                <span class="register" @click="registerClick">立即注册</span>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>

        <!-- <div class="title">
          <span class="agent">账号登录</span>
          <span>短信登录</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { request } from "../../api/request";
export default {
  name: "login",
  data() {
    return {
      // 账号登录
      username: "",
      password: "",
      // 短信登录
      phone: "",
      code: "",

      userId: "",
      activeName: "first",

      // 管理员短信验证
      sendAuthCode: true /*布尔值，通过v-show控制显示‘获取按钮'还是‘倒计时' */,
      auth_time: 0 /*倒计时 计数器*/,
      verification: "", //绑定输入验证码框框
    };
  },
  methods: {
    loginClick() {
      let { username, password } = this;
      request({
        method: "post",
        url: "/user/login",
        data: {
          username,
          password,
        },
      }).then((res) => {
        console.log(res);
        // 在本地浏览器cookie中保存用户的id
        this.$cookie.set("userId", res.id, "Session");
        this.$router.push("/index");
      });
    },
    registerClick() {
      this.$router.push("/order");
      // request({
      //   method: "post",
      //   url: "/user/register",
      //   data: {
      //     username: "gaokai",
      //     password: "123456",
      //     email: "kelinlawu@163.com",
      //   },
      // }).then((res) => {
      //   console.log(res);
      // });
    },
    // 账号登录
    handleClick(tab, event) {
      console.log(tab, event);
    },

    //  管理员短信验证
    getAuthCode: function () {
      // 电话不能为空
      const verification = this.phone;
      if (verification === "") {
        alert("电话号码不能为空");
      } else {
        // const url = " ";
        // console.log("url", url);
        // this.$http.get(url).then(
        //   function (response) {
        //     console.log("请求成功", response);
        //   },
        //   function (error) {
        //     console.log("请求失败", error);
        //   }
        // );
        this.sendAuthCode = false;
        //设置倒计时秒
        this.auth_time = 60;
        var auth_timetimer = setInterval(() => {
          this.auth_time--;
          if (this.auth_time <= 0) {
            this.sendAuthCode = true;
            clearInterval(auth_timetimer);
          }
        }, 1000);
      }
    },
    // 个人封装注册发送请求方法
    thisAjax() {
      const passwordData = this.checkPass;
      const phoneData = this.phone;
      const mCodeData = this.verification;
      //  手机注册
      //emulateJSON:true设置后post可跨域
      const url = " 填接口";
      this.$http.post(url, { 填传入的参数 }, { emulateJSON: true }).then(
        function (response) {
          //登录后跳转的页面
          this.$router.push("/");
        },
        function (error) {
          alert("请求失败", error);
        }
      );
    },
    // ...
    submit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true;
          this.thisAjax();
          console.log("开始写入后台数据！");
        } else {
          console.log("submit err");
        }
      });
    },
    reset() {
      this.$refs.ruleForm.resetFields();
    },
    tologin() {
      //已经注册过跳转到登入界面
      this.$router.push("/phoneLogin");
    },
  },
};
</script>
<style scoped>
.login_title {
  font-size: 27px;
  color: #333;
  margin: 38px 0;
}
.login {
  position: relative;
}
.login-bg {
  width: 100%;
  height: 576px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  top: 112px;
}
.center {
  position: relative;
  height: 576px;
}
.login-box {
  position: absolute;
  width: 410px;
  height: 401px;
  background-color: #fff;
  right: 0;
  top: 81px;
  padding: 25px 30px;
  box-sizing: border-box;
  border: 1px solid #c81623;
}
.title {
  margin: 40px 0;
  display: flex;
  text-align: center;
}
.title span {
  flex: 1;
  height: 25px;
  line-height: 25px;
  font-size: 20px;
}
.title .agent {
  color: #ff6600;
  border-right: 2px solid #d7d7d7;
}
.inputbox,
.inputbox1 {
  width: 344px;
  height: 50px;
  border: 2px solid #eee;
  margin-top: 20px;
}
.inputbox input,
.inputbox1 input {
  /* width: 100%; */
  height: 100%;
  border: none;
  text-indent: 20px;
  line-height: 50px;
  height: 50px;
}
.loginbtn {
  width: 348px;
  height: 50px;
  background-color: rgb(242, 39, 43);
  margin-top: 30px;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}
.message {
  display: flex;
  margin-top: 10px;
}
.number {
  flex: 1;
  color: rgb(242, 39, 43);
}
.forget {
  flex: 1;
  text-align: right;
}
.forget span {
  padding: 0 10px;
  color: #d7d7d7;
}
.forget span:nth-child(2) {
  padding-right: 0;
  border-left: 1px solid #eee;
}
.register {
  cursor: pointer;
}
.register:hover {
  color: #ff6600;
}

.header {
  height: 112px;
  background-color: #fff;
}
.header > a {
  display: inline-block;
}
img {
  margin-top: 4px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}
.footer .info {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  margin: 15px 0;
}
.footer .info a {
  color: #333;
  padding: 0 15px;
  border-right: 1px solid #666;
}
.footer .copyright {
  height: 20px;
  line-height: 20px;
  font-size: 14px;
}

.auth_text {
  /* display: inline-block; */
  height: 50.27px;
  width: 111px;
  line-height: 50.27px;
  background: rgb(242, 39, 43);
  color: #fff;
  text-align: center;
  margin-left: 20px;
  float: right;
  font-size: 10px;
}
</style>