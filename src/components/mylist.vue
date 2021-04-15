<template>
  <el-container>
    <el-header>
      <div class="header">
        <img src="../assets/logo.png" class="logo" />
        <span class="title">智能化共享租赁平台</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          
        >
          <el-menu-item index="1" @click="user()">
            <i class="iconfont icon-wo"></i>
            <span slot="title" class="left">个人中心</span>
          </el-menu-item>

          <el-menu-item index="3" @click="userorder()">
            <i class="iconfont icon-shezhi"></i>
            <span slot="title" class="left">个人订单</span>
          </el-menu-item>

          <el-menu-item index="5" @click="userwork()">
            <i class="iconfont icon-shezhi"></i>
            <span slot="title" class="left">我的工单</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
    data(){
        return {
         isCollapse:false
        }
    },
    methods:{
        user() {
            this.$router.replace('/user')
        },
        identify() {
            this.$router.replace('/buidentify')
        },
        userorder() {
          this.$router.replace('/userorder')
        },
        userrent() {
          this.$router.replace('/userrent')
        },
        userwork() {
          this.$router.replace('/userwork')
        }
    }
}
</script>

<style>
.el-header {
  background-color: #373d41;
  height: 60px;
  justify-content: space-between;
  align-items: center;
}

.header {
  display: flex;
}

.logo {
  width: 55px;
  height: 55px;
  padding: 5px;
}

.title {
  font-size: 22px;
  color: #fff;
  margin-left: 20px;
  line-height: 60px;
  letter-spacing: 2px;
}

.el-container {
  height: 100%;
}

.el-aside {
  background-color: #333744;
  height: 100%;
}

.el-main {
  background-color: #eaedf1;
  height: 100%;
}

.left {
    margin-left: 7px;
}
</style>