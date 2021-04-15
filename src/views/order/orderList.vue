<template>
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
        <el-input
          type="text"
          v-model="ruleForm.code"
          autocomplete="off"
        ></el-input>
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
</template>
<script>
// import { request } from "api/request";
// import OrderHeader from "components/orderheader/OrderHeader";
// import Loading from "components/loading/Loading";
// import ShowNoData from "components/nodata/ShowNoData";

export default {
  name: "orderList",
  name: "order",
  name: "weixin_auth",
  components: {},
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
    return {
      active: 0,
      checked: true,
      dialogVisible: true,
      current: false,
      register: false,

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
    };
  },

  methods: {
    // 个人账户注册表单验证 start
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");

          // 流程下一步
          if (this.active++ > 2) this.active = 0;

          this.$alert("注册成功", "个人账户", {
            confirmButtonText: "确定",
            callback: (action) => {
              if (this.active++ > 2) this.active = 0;
            },
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 个人账户表单验证 end

        // 弹框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
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
</style>



