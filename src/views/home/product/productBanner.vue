<template>
  <div class="banner">
    <!-- 步骤流程 -->
    <div>
      <el-steps
        :active="active"
        finish-status="success"
        simple
        style="margin-top: 20px; background: rgba(242, 242, 242, 1)"
      >
        <el-step title="1.确认内容"></el-step>
        <el-step title="2.确认订单"></el-step>
        <!-- <el-step title="3.确认付款"></el-step> -->
        <el-step title="3.完成订单"></el-step>
      </el-steps>
    </div>
    <!-- 确认信息 -->
    <div class="affirm" v-show="affirmone">
      <h3>请确认您所选的租赁商品及购买数量</h3>
      <div class="show_btn">
        <el-table
          :data="tableData"
          border
          style="
            width: 900px;
            font-size: 18px;
            margin-top: 35px;
            margin-bottom: 35px;
            color: #333;
          "
        >
          <el-table-column prop="name" label="商品名称" width="190">
          </el-table-column>
          <el-table-column prop="price" label="购买方式" width="190">
          </el-table-column>
          <el-table-column prop="namer" label="购买人名称" width="190">
          </el-table-column>
          <el-table-column prop="num" label="购买数量" width="190">
          </el-table-column>
          <el-table-column prop="total" label="总计"> </el-table-column>
        </el-table>
        <el-button
          style="
            margin-top: 89px;
            margin-right: 50px;
            background: rgb(242, 39, 43);
            color: #fff;
          "
          @click="next"
          >去结算
        </el-button>
      </div>
      <h3 class="prompt_title">提示</h3>
      <div class="prompt">
        <p>
          共享租赁：即客户需要根据不同的产品先支付一定的押金，再支付产品的租金，到租期结束，将产品归还，出租方将租金退还给承租方。<br />
          先租后买：即客户可以先对心仪的物品以一定的租金先租下来，体验一段时间，如果这段时间之内感到满意，再决定是否购买。<br />
          1.租期为非固定租期，少于一个月或一周按一个月算。若在租期内按时退还商品，则将全额退回非固定租期交纳的租金，同时承租方无需承担退还运费。<br />
          2.超过非固定租期后可随时退还，出租方将收取交纳押金的至少20%作为违约金（退还运费由承租方承担）。<br />
          3.租期结束且不再续租时，设备需退还给出租方。<br />
          4.由于退还运输造成的的设备损坏，由承租方和承运方承担损失。<br />
        </p>
      </div>
    </div>

    <!-- 确认订单 -->
    <div class="confirm_order" v-show="confirmtow">
      <el-alert
        class="payment"
        title="请在15分钟之内付款，否则订单自动关闭。"
        type="error"
      >
      </el-alert>
      <h3>收货地址</h3>
      <el-radio-group v-model="radio">
        <div class="addressone">
          <el-radio :label="3">收货地址1：{{ address1 }}</el-radio>
        </div>
        <div class="addresstow">
          <el-radio :label="6">收货地址2：{{ address2 }}</el-radio>
        </div>
      </el-radio-group>
      <div class="show_btn">
        <el-table
          :data="tableData"
          border
          style="
            width: 900px;
            font-size: 18px;
            margin-top: 35px;
            margin-bottom: 35px;
            color: #333;
          "
        >
          <el-table-column prop="name" label="商品名称" width="190">
          </el-table-column>
          <el-table-column prop="price" label="租赁方式" width="190">
          </el-table-column>
          <el-table-column prop="namer" label="购买人名称" width="190">
          </el-table-column>
          <el-table-column prop="num" label="购买数量" width="190">
          </el-table-column>
          <el-table-column prop="total" label="总计"> </el-table-column>
        </el-table>
        <el-button
          style="
            margin-top: 89px;
            margin-right: 50px;
            background: rgb(242, 39, 43);
            color: #fff;
          "
          @click="next"
          >去结算
        </el-button>
      </div>
      <h3 class="prompt_title">提示</h3>
      <div class="prompt">
        <p>
          共享租赁：即客户需要根据不同的产品先支付一定的押金，再支付产品的租金，到租期结束，将产品归还，出租方将租金退还给承租方。<br />
          先租后买：即客户可以先对心仪的物品以一定的租金先租下来，体验一段时间，如果这段时间之内感到满意，再决定是否购买。<br />
          1.租期为非固定租期，少于一个月或一周按一个月算。若在租期内按时退还商品，则将全额退回非固定租期交纳的租金，同时承租方无需承担退还运费。<br />
          2.超过非固定租期后可随时退还，出租方将收取交纳押金的至少20%作为违约金（退还运费由承租方承担）。<br />
          3.租期结束且不再续租时，设备需退还给出租方。<br />
          4.由于退还运输造成的的设备损坏，由承租方和承运方承担损失。<br />
        </p>
      </div>
    </div>

    <!-- 付款总价弹框 -->
    <el-dialog
      title="确认支付"
      :visible.sync="dialogVisible"
      width="400px"
      style="margin-top: 100px"
      :before-close="handleClose"
    >
      <span class="moneyfont">需付款：￥{{ total1 }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="totalcancel">取 消</el-button>
        <el-button type="primary" @click="affirmtotal">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "productProgress",
  data() {
    return {
      DataList: {
        commodityId: this.$route.params.id,
        url: sessionStorage.getItem("detailimg"),
        productDetails: sessionStorage.getItem("detailname"),
        productQuantity: sessionStorage.getItem("detailnum"),
        commodityPrice: sessionStorage.getItem("detaildetailtotal"),
      },
      radio: 3,
      active: 0,
      // 确认内容
      affirmone: true,
      // 确认订单
      confirmtow: false,
      dialogVisible: false,
      address1: "福建省 泉州市 晋江市 龙湖镇 枫林村白凯集团",
      address2:
        "四川省 成都市 都江堰市 青城山镇 青城山区东软大道1号成都东软学院",
      tableData: [
        {
          name: sessionStorage.getItem("detailname"),
          namer: "靓仔",
          num: sessionStorage.getItem("detailnum"),
          price: sessionStorage.getItem("detailvission"),
          total: sessionStorage.getItem("detaildetailtotal"),
        },
      ],
      total1: sessionStorage.getItem("detaildetailtotal"),
    };
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  mounted: function () {
    this.createcode(); //需要触发的函数
  },
  methods: {
    //下面是createcode函数
    createcode() {},

    // 去结算
    next() {
      if (this.active++ > 2) this.active = 0;
      if (this.active == 1) {
        (this.affirmone = false), (this.confirmtow = true);
      } else if (this.active == 2) {
        this.dialogVisible = true;
      }
    },
    // 付款总价
    // 确定
    async affirmtotal() {
      // alert(sessionStorage.getItem("detailnum"),)
      // console.log(sessionStorage.getItem("detailimg"));
      this.dialogVisible = false;
      // 获取商品id
      // var data = this.$route.params.id
      // console.log(data + 'id');
      if (this.active++ > 2) this.active = 0;
      this.$message({
        message: "恭喜你，支付成功",
        type: "success",
      });
      //  commodityId: this.$route.params.id,
      //             url: sessionStorage.getItem("detailimg"),
      //             productDetails: sessionStorage.getItem("detailname"),
      //             productQuantity: sessionStorage.getItem("detailnum"),
      //             commodityPrice: sessionStorage.getItem("detaildetailtotal"),
      const { data: res } = await this.$http.get(
        "/user/service-user/personal-orders/addUserPersonalOrders",{params:this.DataList}
      );
      this.$router.push("/index");
    },
    // 取消
    totalcancel() {
      this.dialogVisible = false;
      if (this.active-- > 2) this.active = 0;
    },
    // 关闭
    handleClose(done) {
      this.$confirm("确认取消支付？")
        .then((_) => {
          done();
          if (this.active-- > 2) this.active = 0;
        })
        .catch((_) => {});
    },
  },
};
</script>
<style scoped>
.banner {
  position: relative;
  margin: 0 auto;
}
.banenr-img {
  position: absolute;
  left: 0;
  right: 0;
}
.banenr-img img {
  width: 100%;
}
.container {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.el-steps--simple {
  padding: 22px 8%;
}

.affirm,
.confirm_order {
  padding: 50px 108px;
}

.affirm h3,
.confirm_order h3 {
  font-size: 20px;
}

.show_btn {
  overflow: hidden;
}

.show_btn > :first-child {
  float: left;
}
.show_btn > :last-child {
  float: right;
}

.prompt {
  width: 500px;
  height: 200px;
  border: 1px solid #ebeef5;
  margin-top: 20px;
  padding: 10px;
  font-size: 14px;
}

.prompt p {
  overflow: hidden;
  white-space: normal;
  word-break: break-all;
}

.prompt_title {
  margin-top: 10px;
}

.payment {
  margin: -33px 0 30px;
}

.el-radio-group {
  margin-top: 15px;
}

.addressone,
.addresstow {
  margin: 8px 0;
  font-size: 18px;
  color: #333;
}

.moneyfont {
  font-size: 24px !important;
}
</style>