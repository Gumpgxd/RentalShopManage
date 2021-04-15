<template>
  <div id="order">
    <!-- tab选项卡 -->
    <div class="tabcard">
      <div @click="handOne" :class="{ current: vission == 1 }">
        <span slot="label" class="personal"
          ><i class="el-icon-s-custom"></i> 个人账户注册</span
        >
      </div>
      <!-- <div @click="handTow" :class="{ current: vission == 2 }">
        <span slot="label" class="enterprise"
          ><i class="el-icon-s-check"></i> 企业账户</span
        >
      </div> -->
    </div>

    <!-- 个人账户注册 start -->
    <div v-if="showOne">
      <!-- 步骤流程 -->
      <div>
        <el-steps
          :active="active"
          finish-status="success"
          simple
          style="margin-top: 20px; background: rgba(242, 242, 242, 1)"
        >
          <el-step title="1.创建账户"></el-step>
          <el-step title="2.注册成功"></el-step>
        </el-steps>
      </div>

      <!-- 手机号验证 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        style="width: 600px; margin: 50px auto"
      >
        <el-form-item label="用户名称" prop="pass">
          <el-input
            type="text"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="用户密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="phone">
          <el-input
            type="text"
            v-model="ruleForm.phone"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="验证码" prop="code">
          <div>
            <el-input
              class="auth_input"
              type="text"
              v-model="ruleForm.code"
              autocomplete="off"
            ></el-input>
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
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重 置</el-button>
        </el-form-item>
      </el-form>
      <!-- 身份证验证 -->

      <!-- 注册成功 -->
      <!-- <el-button plain @click="open1"> 警告 </el-button> -->
      <!-- 已阅读 -->
      <div style="text-align: center">
        <el-checkbox v-model="checked"
          >已阅读并同意以上协议智能化租赁平台协议</el-checkbox
        >
      </div>
    </div>
    <!-- 个人账户注册 end  -->

    <!-- 企业账户注册 start -->
    <div v-if="showTow">
      <!-- 步骤流程 -->
      <div>
        <el-steps
          :active="active1"
          finish-status="success"
          simple
          style="margin-top: 20px; background: rgba(242, 242, 242, 1)"
        >
          <el-step title="1.创建账户"></el-step>
          <el-step title="2.注册成功"></el-step>
        </el-steps>
      </div>

      <!-- 手机号验证 -->
      <el-form
        :model="ruleForm1"
        status-icon
        :rules="rules1"
        ref="ruleForm1"
        label-width="100px"
        class="demo-ruleForm1"
        style="width: 600px; margin: 50px auto"
      >
        <el-form-item label="商家名称" prop="pass1">
          <el-input
            type="text"
            v-model="ruleForm1.pass1"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="商家密码" prop="checkPass1">
          <el-input
            type="password"
            v-model="ruleForm1.checkPass1"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="phone1">
          <el-input
            type="text"
            v-model="ruleForm1.phone1"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item label="验证码" prop="code1">
          <!-- <el-input
            type="text"
            v-model="ruleForm1.code1"
            autocomplete="off"
          ></el-input> -->

          <div>
            <el-input
              class="auth_input"
              type="text"
              v-model="ruleForm1.code1"
              autocomplete="off"
            ></el-input>
            <span
              v-show="sendAuthCode1"
              class="auth_text auth_text_blue"
              @click="getAuthCode1"
              >获取验证码</span
            >
            <span v-show="!sendAuthCode1" class="auth_text">
              <span class="auth_text_blue">{{ auth_time1 }} </span>
              秒后重新发送</span
            >
          </div>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm1('ruleForm1')"
            >提交</el-button
          >
          <el-button @click="resetForm1('ruleForm1')">重 置</el-button>
        </el-form-item>
      </el-form>
      <!-- 身份证验证 -->
      <div style="text-align: center">
        <el-checkbox v-model="checked"
          >已阅读并同意以上协议智能化租赁平台协议</el-checkbox
        >
      </div>
    </div>

    <!-- 弹框 -->
    <!-- <el-button type="text" @click="dialogVisible = true"
      >点击打开 Dialog</el-button
    > -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="419px"
      :before-close="handleClose"
    >
      <span>
        亲爱的用户，智能化共享租赁平台依照相关法规要
        求进行实名制管理、履行反洗钱职责和采取风险防
        范措施。为了您可以正常使用支付服务，您的身份
        信息、联系方式、交易信息需要被依法收集并使用。
        智能化共享租赁平台将严格保护您的个人信息，确
        保信息安全，具体详见《支付宝隐私权政策》。
        您在点击同意下列协议前，请您务必审慎阅读， 并充分理解协议条款内容</span
      >
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">不同意</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >同 意</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import { request } from "../../api/request";
import NavFooter from "components/navfooter/NavFooter";

export default {
  name: "order",
  // name: "weixin_auth",
  data() {
    // 个人账户表单验证 start
    // 用户名不能为空
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名称"));
      } else {
        callback();
      }
    };

    // 密码不能为空
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    // 电话不能为空
    var checkPhone = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入电话号码"));
      } else {
        callback();
      }
    };

    // 验证码不能为空
    var checkCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      }
      setTimeout(() => {
        callback();
      }, 500);
    };
    // 个人账户表单验证 end

    // 商家注册表单验证 start
    // 用户名不能为空
    var validatePass1 = (rule, value, callback1) => {
      if (value === "") {
        callback1(new Error("请输入用户名称"));
      } else {
        callback1();
      }
    };

    // 密码不能为空
    var validatePass21 = (rule, value, callback1) => {
      if (value === "") {
        callback1(new Error("请输入密码"));
      } else {
        callback1();
      }
    };

    // 电话不能为空
    var checkPhone1 = (rule, value, callback1) => {
      if (value === "") {
        callback1(new Error("请输入电话号码"));
      } else {
        callback1();
      }
    };

    // 商家注册表单验证
    // 验证码不能为空
    var checkCode1 = (rule, value, callback1) => {
      if (!value) {
        return callback1(new Error("验证码不能为空"));
      }
      setTimeout(() => {
        callback1();
      }, 500);
    };
    // 商家注册表单验证 end

    return {
      active: 0,
      active1: 0,
      checked: true,
      dialogVisible: true,
      register: false,
      // tab选项卡下盒子的默认值
      showOne: true,
      showTow: false,
      current: "",
      vission: 1,
      // 个人短信验证
      sendAuthCode: true /*布尔值，通过v-show控制显示‘获取按钮'还是‘倒计时' */,
      auth_time: 0 /*倒计时 计数器*/,
      verification: "", //绑定输入验证码框框
      // 商家短信验证
      sendAuthCode1: true /*布尔值，通过v-show控制显示‘获取按钮'还是‘倒计时' */,
      auth_time1: 0 /*倒计时 计数器*/,
      verification1: "", //绑定输入验证码框框

      // 个人账户表单验证 start
      ruleForm: {
        pass: "",
        checkPass: "",
        phone: "",
        code: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }],
        code: [{ validator: checkCode, trigger: "blur" }],
      },
      // 个人账户表单验证 end

      // 商家注册表单验证 start
      ruleForm1: {
        pass1: "",
        checkPass1: "",
        phone1: "",
        code1: "",
      },
      rules1: {
        pass1: [{ validator: validatePass1, trigger: "blur" }],
        checkPass1: [{ validator: validatePass21, trigger: "blur" }],
        phone1: [{ validator: checkPhone1, trigger: "blur" }],
        code1: [{ validator: checkCode1, trigger: "blur" }],
      },
      // 商家注册表单验证
    };
  },
  components: {
    NavFooter,
    // OrderConfirm,
  },
  methods: {
    // tab选项卡
    handOne() {
      (this.showTow = false), (this.showOne = true);
      this.vission = 1;
    },
    handTow() {
      (this.showOne = false), (this.showTow = true);
      this.vission = 2;
    },
    // 个人账户注册表单验证 start
    // 提交
    submitForm(formName) {
      // console.log(this.ruleForm.code);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 流程下一步
          if (this.active++ > 2) this.active = 0;

          // 个人注册提交交互
          this.$http
            .post("/user/service-user/user/userRegister", {
              code: this.ruleForm.code,
              password: this.ruleForm.checkPass,
              username: this.ruleForm.pass,
              telephone: this.ruleForm.phone,
            })
            .then(
              function (response) {
                console.log("请求成功");
                // console.log(response.data.code);
                if (response.data.code === 200) {
                  this.$alert("注册成功", "个人账户", {
                    confirmButtonText: "确定",
                    callback: (action) => {
                      if (this.active++ > 2) this.active = 0;
                    },
                  });
                  this.$router.push("/login");
                } else {
                  alert('注册失败')
                }
              },
              function (error) {
                console.log("请求失败", error);
              }
            );
        } else {
          console.log("error submit!!");
          return false;
        }
        // this.$router.push("/login/");
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 个人账户表单验证 end

    // 商家注册表单验证
    submitForm1(formName1) {
      this.$refs[formName1].validate((valid) => {
        if (valid) {
          // alert("submit!");
          // 流程下一步
          if (this.active1++ > 2) this.active1 = 0;

          this.$alert("注册成功", "商家账户", {
            confirmButtonText: "确定",
            callback: (action) => {
              if (this.active1++ > 2) this.active1 = 0;
            },
          });

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm1(formName1) {
      this.$refs[formName1].resetFields();
    },
    // 商家注册表单验证 end

    // 弹框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    //  个人短信验证
    getAuthCode: function () {
      // 电话不能为空
      const verification = this.ruleForm.phone;
      if (verification === "") {
        alert("电话号码不能为空");
      } else {
        // 个人短信验证交互
        this.$http.get("/msm/edumsm/msm/send/" + verification).then(
          function (response) {
            console.log("请求成功", response);
          },
          function (error) {
            console.log("请求失败", error);
          }
        );
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

    //  商家短信验证
    getAuthCode1: function () {
      const codenum = this.ruleForm1.code1;

      // 电话不能为空
      const verification1 = this.ruleForm1.phone1;
      if (verification1 === "") {
        alert("电话号码不能为空");
      } else {

        this.sendAuthCode1 = false;
        //设置倒计时秒
        this.auth_time1 = 60;
        var auth_timetimer = setInterval(() => {
          this.auth_time1--;
          if (this.auth_time1 <= 0) {
            this.sendAuthCode1 = true;
            clearInterval(auth_timetimer);
          }
        }, 1000);
      }
    },
  },
};
</script>
<style scoped>
.container {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.el-steps--simple {
  padding: 22px 21%;
  margin-top: 0px !important;
}

.affirm,
.confirm_order {
  padding: 50px 108px;
}

.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  width: 50%;
  text-align: center;
  height: 81px;
  font-size: 24px;
  line-height: 80px !important;
  font-weight: 800;
}

.el-tabs--border-card > .el-tabs__header {
  height: 80px;
}

.el-tabs__nav-scroll {
  height: 80px;
}

.el-tabs__nav {
  height: 80px;
  width: 100%;
}

.tabcard {
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.current {
  background: #c81623 !important;
  color: #fff;
}

.tabcard > div {
  width: 100%;
  text-align: center;
  padding: 20px 0;
  background: #f5f7fa;
  border: 1px solid #e4e7ed;
}

.personal,
.enterprise {
  font-size: 24px;
}

.auth_input {
  width: 350px;
}

.auth_text {
  display: inline-block;
  height: 40px;
  width: 130px;
  background: #d3454f;
  color: #fff;
  text-align: center;
  margin-left: 20px;
  border-radius: 4px;
  cursor: pointer;
}
</style>