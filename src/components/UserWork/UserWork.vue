<template>
  <div class="max_h">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>工单处理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框区域 -->
    <el-card class="box-card">
      <el-row :gutter="24" class="right_search">
        <el-col :span="7">
          <el-input placeholder="请输入内容" v-model="queryInfo" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col>
          <!-- <el-select
            placeholder="选择审批状态"
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
        <el-table-column label="订单编号" prop="workorderId"></el-table-column>
        <el-table-column label="用户id" prop="userId"></el-table-column>
        <el-table-column label="收货人" prop="username"></el-table-column>
        <el-table-column label="收货人号码" prop="telephone"></el-table-column>
        <el-table-column label="收货人地址" prop="address"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <span class="danger_color" v-if="scope.row.status == 0"
              >未处理</span
            >
            <span class="success_color" v-if="scope.row.status == 1"
              >已处理</span
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
    <!-- 对话框 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      total:1,
      //通过插槽传递的单行数据
      appove: "",
      queryInfo: "",
      //用户数据
      UserList: [],
      //审批对话框的状态
      appoveVisible: false,
      //审批的状态
      flag: "",
      options: [
        {
          flag: true,
          label: "已审批",
        },
        {
          flag: false,
          label: "未审批",
        },
      ],
    };
  },
  created() {
    this.getUserList()
  },
  methods: {
    // 选择器改变触发事件
    ChangeSelect() {
      console.log(this.flag);
    },
    Appove(obj) {
      this.appoveVisible = true;
      this.appove = obj;
    },
    detail(obj) {
      this.appoveVisible = true;
      this.appove = obj;
    },
    async getUserList() {
      const {data:res} = await this.$http.get('/user/service-user/work-orders/getUserWorkOrders')
      this.UserList = res.data.userWorkOrdersIPage.records
      var index = this.UserList.length
      this.total = index
    }
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

.message2 {
  display: flex;
  align-items: center;
}

.right_mess2 {
  margin-left: 30px;
  margin-bottom: 20px;
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
  margin-left: 0px;
}
</style>