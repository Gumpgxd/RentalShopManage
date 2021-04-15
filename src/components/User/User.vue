<template>
  <div class="height_max">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人中心</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card class="box-card">
      <!-- 导航栏 -->
      <div class="head_message">
        <div class="head_left">
          <span class="ti"></span>
          <span class="font">用户信息</span>
        </div>
      </div>
      <!-- 内容区域 -->
      <div class="middle_message">
        <div class="right">
          <div class="photo">
            <img :src="MessageList.url" />
          </div>
          <div class="img_button">
            <el-button type="primary" @click="dialogImg = true"
              >修改头像</el-button
            >
          </div>
        </div>
        <div class="left_message">
          <!-- 姓名 -->
          <div class="message4">
            <div class="left_mess">
              <div>姓名：</div>
            </div>
            <div class="right_mess">{{ MessageList.username }}</div>
          </div>
          <div class="message4">
            <div class="left_mess">
              <div>性别：</div>
            </div>
            <div class="right_mess">{{ MessageList.sex }}</div>
          </div>
          <div class="message4">
            <div class="left_mess">
              <div>身份证号：</div>
            </div>
            <div class="right_mess" v-if="MessageList.idnumber == null">null</div>
            <div class="right_mess" v-if="MessageList.idnumber !== null">{{ MessageList.idnumber }}</div>
          </div>
          <div class="message4">
            <div class="left_mess">
              <div>电话号码：</div>
            </div>
            <div class="right_mess">{{ MessageList.telephone }}</div>
          </div>
          <div class="message4">
            <div class="left_mess">
              <div>收货地址：</div>
            </div>
            <div class="right_mess">{{ MessageList.address }}</div>
          </div>

          <div
            class="message4"
          >
            <div class="left_mess">
              <div>实名认证：</div>
            </div>
            <div class="right_mess" v-if="MessageList.status == null">未审批</div>
            <div class="right_mess" v-if="MessageList.status !== null">已通过</div>
          </div>

          <!-- 实名认证 start -->
          <div class="message4" v-if="MessageList.reason !== null">
            <div type="info" class="message4">
              <div class="left_mess">
                <div>原因：</div>
              </div>
              <div class="right_mess">{{ MessageList.reason }}</div>
            </div>
          </div>

          <!-- 实名认证 end -->

          <div class="bottom-button">
            <el-button type="primary" @click="dialogAdd = true"
              >编辑信息</el-button
            >
          </div>
        </div>
      </div>
      <el-dialog title="完善信息" :visible.sync="dialogAdd" width="20%">
        <!-- 输入框表单 -->
        <el-form
          :model="MessageList"
          :rules="addFormRules"
          ref="editFormRef"
          label-width="80px"
        >
          <el-form-item label="性别">
            <el-select v-model="MessageList.sex">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="身份证号" prop="idnumber">
            <el-input v-model="MessageList.idnumber"></el-input>
          </el-form-item>

          <el-form-item label="电话号码" prop="number">
            <el-input v-model="MessageList.telephone"></el-input>
          </el-form-item>

          <el-form-item label="收货地址" prop="address">
            <el-input v-model="MessageList.address"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogAdd = false">取 消</el-button>
          <el-button type="primary" @click="revise()">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 上传头像框 -->
      <el-dialog
        title="上传头像"
        :visible.sync="dialogImg"
        width="20%"
        :before-close="handleClose"
        class="Dialog_center"
      >
        <!-- 上传头像区 -->
        <el-upload
          class="avatar-uploader"
          action="http://106.15.36.27:8002/oss/file/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogImg = false">取 消</el-button>
          <el-button type="primary" @click="ImageRevise()">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    //验证手机号
    var checkMobile = (rule, value, cb) => {
      const regMobile = /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
      if (regMobile.test(value)) {
        //合法的手机号
        return cb();
      }
      cb(new Error("请输入合法手机号码"));
    };
    return {
      To:'',
      //图片数据
      imageUrl: "",
      imageUrl1:'',
      //用户信息表
      MessageList: {},
      //上传图片弹出框状态
      dialogImg: false,
      //弹出框默认状态
      dialogAdd: false,
      //表单验证
      addFormRules: {
        name: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          { min: 1, max: 10, message: "昵称在3-10个字符之间", trigger: "blur" },
        ],
        idnumber: [{required: true, message: "请输入身份证号", trigger: "blur" }],
        user: [{ required: true, message: "请输入收货地址", trigger: "blur" }],
        number: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
        address: [
          { required: true, message: "请输入地址", trigger: "blur" }
        ],
      },
    };
  },

  created() {
    this.getUserList()
    this.To = window.sessionStorage.getItem('to')
    console.log(this.To);
  },
  methods: {
    //检查图片文件和大小
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res);
      this.imageUrl = res.data.url
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 0.5;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 0.5MB!");
      }
      return isLt2M;
    },
    handleClose(handel) {
      this.dialogImg = false;
      this.dialogAdd = false;
    },
    
    //获取用户信息
    async getUserList() {
      const {data:res} = await this.$http.get('/user/service-user/user/getUserInfo')
      this.MessageList = res.data.user
      console.log(res);
      // console.log(res);
    },
    //修改用户信息
    async revise() {
      //关闭对话框
      this.dialogAdd = false
      const {data:res} = await this.$http.post('/user/service-user/user/updateUserInfo',this.MessageList)
      // console.log(res);
      if(res.code == 200) {
        this.getUserList()
        return this.$message.success('修改成功！')
      }else{
        this.getUserList()
        return this.$message.error('修改失败！')
      }
    },
    //确认上传图片
    async ImageRevise()  {
      var data = new FormData()
      data.append('userId',this.MessageList.userId)
      data.append('url',this.imageUrl)
      const res = await this.$http.post('/user/service-user/user/updateUserHeadPortrait',data)
      console.log(res);
      this.$message.success('上传成功！')
      this.getUserList()
      this.dialogImg = false
    }
  },
};
</script>

<style>
.height_max {
  height: 100%;
}

.box-card {
  height: 96%;
}

.head_message {
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  border-bottom: 1px solid #e1e1e1;
}

.head_left {
  display: flex;
  line-height: 60px;
  align-items: center;
  width: 90px;
  justify-content: space-between;
}

.ti {
  display: block;
  width: 7px;
  line-height: 60px;
  height: 7px;
  background-color: #0bd;
}

.font {
  font-size: 18px;
}

.middle_message {
  display: flex;
  width: 85%;
  margin: 0 auto;
  height: 90%;
}

.photo {
  width: 100%;
  text-align: center;
}

.photo img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  flex: 1;
}

.right {
  width: 40%;
  margin-top: 50px;
  height: 100%;
}

.left_message {
  padding-left: 150px;
  margin-top: 50px;
  width: 60%;
  height: 650px;
  border-left: 1px dashed #e1e1e1;
}

.left_message3 {
  padding-left: 150px;
  margin-top: 50px;
  width: 60%;
  height: 650px;
  border-left: 1px dashed #e1e1e1;
}

.message4 {
  margin-bottom: 20px;
  justify-content: none;
  display: flex;
  width: 100%;
}

.message {
  margin-bottom: 20px;
  display: flex;
  width: 100%;
}

.left_mess {
  padding: 0;
  width: 150px !important;
  /* text-align: right; */
  /* padding-right: 20px; */
  margin: auto 0;
  align-content: center;
  align-items: center;
  height: 30px;
  font-size: 20px;
  font-weight: 500;
  color: #848484;
}

.left_mess3 {
  width: 100px;
  text-align: right;
  padding-right: 30px;
  font-size: 20px;
  font-weight: 500;
  color: #848484;
}

.right_mess {
  /* padding-left: 18px; */
  font-size: 20px;
  font-weight: 500;
  color: #424242;
}

.right_mess3 {
  padding-left: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #424242;
}

.right_mess5 {
  font-size: 20px;
  font-weight: 500;
  color: #424242;
  height: 100px;
}

.bottom-button {
  padding-top: 50px;
  padding-left: 75px;
  width: 100px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.img_button {
  padding-top: 40px;
  margin: 0 auto;
  text-align: center;
}

.Dialog_center {
  text-align: center;
}
</style>