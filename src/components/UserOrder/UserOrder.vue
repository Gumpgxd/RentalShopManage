<template>
  <div class="max_h">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人订单</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框区域 -->
    <el-card class="box-card">
      <el-row :gutter="24" class="right_search">
        <el-col :span="7">
          <!-- <el-input placeholder="请输入内容" v-model="queryInfo" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input> -->
        </el-col>
        <el-col>
          <!-- <el-select
            placeholder="选择操作状态"
            v-model="flag"
            @change="ChangeSelect()"
          >
            <el-option
              v-for="item in options"
              :key="item.flag"
              :label="item.label"
              :value="item.flag"
            ></el-option>
          </el-select> -->
        </el-col>
      </el-row>
      <!-- 表格区域 -->
      <el-table border stripe :data="UserList">

        <el-table-column label="编号" prop="commodityId"></el-table-column>

        <el-table-column label="商品图片">
          <template slot-scope="scope">
            <img :src="scope.row.url" max-width="30" max-height="30" />
          </template>
        </el-table-column>

        <el-table-column
          label="商品数量"
          prop="productQuantity"
        ></el-table-column>

        <el-table-column label="租金" prop="amount"></el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="open(scope.row.commodityId)"
              >退租</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <div class="block">
        <el-pagination
          background
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
      </div>
    </el-card>

    <!-- 续租对话框 start -->
    <!-- 续租对话框 end -->

    <!-- 购买对话框 start -->
    <!-- 购买对话框 end -->
  </div>
</template>



<script>
export default {
  data() {
    return {
      total: 1,
      //通过插槽传递的单行数据
      appove: "",
      queryInfo: "",
      showModal: false,
      //用户数据
      UserList: [],

      //审批对话框的状态
      appoveVisible1: false,
      appoveVisible2: false,
      //审批的状态
      flag: "",
      options: [
        {
          flag: true,
          label: "购买",
        },
        {
          flag: false,
          label: "续租",
        },
      ],
      romoveFormRules: {
        id: [{ required: true, message: "请输入订单编号", trigger: "blur" }],
        img: [{ required: true, message: "请输入用户id", trigger: "blur" }],
        detail: [
          { required: true, message: "请输入收货人姓名", trigger: "blur" },
        ],
        number: [
          { required: true, message: "请输入收货人号码", trigger: "blur" },
        ],
        number: [
          { required: true, message: "请输入收货人地址", trigger: "blur" },
        ],
        rent: [
          { required: true, message: "请输入收货人地址", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    // 选择器改变触发事件
    ChangeSelect() {
      console.log(this.flag);
    },
    // 续租
    Appove(obj) {
      this.appoveVisible1 = true;
      this.appove = obj;
    },
    // 购买
    detail(obj) {
      this.appoveVisible2 = true;
      this.appove = obj;
    },

    // 续租支付成功
    Leaseone() {
      this.appoveVisible1 = false;
      this.$message({
        message: "恭喜你，续租成功",
        type: "success",
      });
    },
    // 购买支付成功
    Leasetow() {
      this.appoveVisible2 = false;
      this.$message({
        message: "恭喜你，购买成功",
        type: "success",
      });
    },

    // 退租
    open(id) {
      alert(id)
      this.$confirm("此操作将是您退租, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let index = this.UserList.findIndex(function (item) {
            return item.commodityId === id;
          });
          this.UserList.splice(index,1);
          this.$message({
            type: "success",
            message: "退租成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "退租已取消",
          });
        });
    },
    async getUserList() {
      const { data: res } = await this.$http.get(
        "/user/service-user/personal-orders/getUserPersonalOrders"
      );
      this.UserList = res.data.userPersonalOrderVoIPage.records;
      var index = this.UserList.length;
      this.total = index;
    },
  },
};
</script>

<style>
.right_search {
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: space-between;
}

.el-pagination {
  text-align: center;
}

.el-table .cell {
  text-align: center;
}

.el-table .cell img {
  width: 100px;
}

.message2 {
  display: flex;
  align-items: center;
}

.right_mess2 {
  /* margin-left: 30px;
  margin-bottom: 20px; */
  width: 178px;
  height: 178px;
  object-fit: cover;
  flex: 1;
}

.left_ma {
  margin-left: 28px;
}

.left_ma3 {
  margin-right: 50px;
}

.danger_color {
  color: #f56c6c;
}

.success_color {
  color: #67c23a;
}

.el-dialog__body {
  display: flex;
  justify-content: space-between;
  margin-left: -119px;
}

.week {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 0 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 139.82px;
  margin-right: 10px;
}

.el-form-item__content {
  display: flex;
}

.imgdetail input {
  width: 200px;
  height: 200px;
  background: pink;
}

.introduce input {
  width: 200px;
}

.form_middle {
  margin-right: -80px !important;
}
</style>