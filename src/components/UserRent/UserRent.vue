<template>
<!-- 已租用详情 -->
    <div>
        <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>已租用详情</el-breadcrumb-item>
    </el-breadcrumb>
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
      
      <!-- 分页区域 -->
      <div class="block">
        <el-pagination
          background
          :page-size="2"
          layout="total, prev, pager, next, jumper"
          :total="4"
        >
        </el-pagination>
      </div>
    </el-card>
    </div>
    
</template>

<script>
export default {
    data() {
        return{
            queryInfo:''
        }
    },
    created() {

    },
    methods:{

    }
}
</script>

<style>

</style>