<template>
  <div>
    <!-- 小米8|小米8SE start -->
    <!-- <pro-prams :title="product.name"></pro-prams> -->
    <!-- 小米8|小米8SE end -->
    <div class="container">
      <!-- 左侧轮播图区域 -->
      <div class="left">
        <div class="detail-swiper">
          <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide class="swiper-item">
              <img
                src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1619945462,3983555755&fm=26&gp=0.jpg"
                alt=""
                class="swiper-img"
              />
            </swiper-slide>
            <swiper-slide class="swiper-item">
              <img
                src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3763691645,2277563518&fm=26&gp=0.jpg"
                alt=""
                class="swiper-img"
              />
            </swiper-slide>
            <!-- Optional controls -->
            <!-- 轮播图分页器 -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <!-- 右侧商品参数区域 -->
      <div class="right">
        <!-- 顶部标题区域 -->
        <div class="header">
          <h2>{{ product.name10 }}</h2>
          <p class="desc">HTC Vive Focus VR一体机 VR游戏眼镜 VR头盔家庭影院</p>
          <div class="monthly_rent">
            <div class="color">租金：</div>
            <div class="now-price">{{ product.price10 }}元起</div>
            <div class="equipment">非全新设备</div>
          </div>
        </div>

        <!-- 选择租赁类型 -->
        <div class="virsion">
          <div class="title">租赁方式：</div>
          <div class="choose">
            <div
              class="btn"
              @click="Visbtn1Click"
              :class="{ active: vission10 == 1 }"
            >
              <span class="text">共享租赁</span>
            </div>
            <div
              class="btn"
              @click="Visbtn2Click"
              :class="{ active: vission10 == 2 }"
            >
              <span class="text">先租后买</span>
            </div>
          </div>
        </div>

        <!-- 选择租赁时间 -->
        <el-radio-group v-model="radio10" v-show="choosetime">
          <!-- 第一个 -->
          <div>
            <div class="choose_radio">
              <el-radio :label="1">周租金 {{ product.week10 }} 元</el-radio>
              <el-button class="default_button default_button1"
                >非固定租期</el-button
              >
              <div class="hint">
                <p>
                  1.租期为非固定租期，少于一周按一周算。若在租期内按时退还商品，则将全额退回非固定租期交纳的租金，同时承租方无需承担退还运费。
                </p>
                <p>
                  2.超过非固定租期后可随时退还，出租方将收取交纳租金的至少20%作为违约金（退还运费由承租方承担）。
                </p>
                <p>3.租期结束且不再续租时，设备需退还给出租方。</p>
                <p>
                  4.由于退还运输造成的的设备损坏，由承租方和承运方承担损失。
                </p>
              </div>
            </div>
            <div class="detail_choose">
              （平均周租金：280元；少于一周按一周算；超过非固定租期，出租方将收取交纳租金的至少20%作为违约金（退还运费由承租方承担）
            </div>
          </div>

          <!-- 第二个 -->
          <div>
            <div class="choose_radio">
              <el-radio :label="2">月租金 {{ product.month10 }} 元</el-radio>
              <el-button class="default_button default_button1"
                >非固定租期</el-button
              >
              <div class="hint">
                <p>
                  1.租期为非固定租期，少于一个月按一个月算。若在租期内按时退还商品，则将全额退回非固定租期交纳的租金，同时承租方无需承担退还运费。
                </p>
                <p>
                  2.超过非固定租期后可随时退还，出租方将收取交纳租金的至少20%作为违约金（退还运费由承租方承担）。
                </p>
                <p>3.租期结束且不再续租时，设备需退还给出租方。</p>
                <p>
                  4.由于退还运输造成的的设备损坏，由承租方和承运方承担损失。
                </p>
              </div>
            </div>
            <div class="detail_choose">
              （平均月租金：1120元；少于一个月按一个月算；超过非固定租期，出租方将收取交纳租金的至少20%作为违约金（退还运费由承租方承担）
            </div>
          </div>
        </el-radio-group>

        <!-- 起租日期 -->
        <div class="choosedate">
          <div class="title title1">租赁日期：</div>
          <div class="block">
            <el-date-picker
              v-model="value110"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
            至
          </div>
          <div class="block dataend">
            <el-date-picker
              v-model="value210"
              align="right"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </div>
        </div>

        <!-- 数量 -->
        <div class="choosenum">
          <div class="title">商品数量：</div>
          <div class="cnum">
            <el-input-number
              size="mini"
              v-model="num10"
              @change="handleChange"
              :min="1"
              :max="3"
            ></el-input-number
            ><span class="quantity_num"
              >库存数量：{{ product.quantity10 }}</span
            >
          </div>
        </div>

        <!-- 商品押金 -->
        <div class="cash_pledge">
          <div class="title">商品押金：</div>
          <div class="cash">
            设备押金：<span>￥{{ product.pledge10 }}</span>
          </div>
        </div>

        <!-- 总计区域 -->
        <div class="total">
          <div class="top">
            <div>
              <span class="name">{{ product.name10 }} </span>
            </div>
          </div>
          <p class="totalprice" v-if="isNaN(detailtotal)">总计：280元</p>
          <p class="totalprice" v-if="!isNaN(detailtotal)">总计：{{ detailtotal }}元</p>
        </div>
        <!-- 加入购物车区域 -->
        <div class="shopcart">
          <div class="button add_cart lease_immediately" @click="immLease">
            立即租赁
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProPrams from "components/propramas/ProPrams";
// import { request } from "api/request";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "detail",
  data() {
    return {
      num10: 1,
      radio10: 1,
      vission10: 1,
      product: {
        id: 1,
        name10: "HTC Vive Focus VR一体机 VR游戏眼镜 VR头盔家庭影院",
        price10: "￥280",
        week10: 280.0,
        month10: 1120.0,
        quantity10: 3,
        pledge10: 5000,
      },
      active: "",
      proId: "",
      title: "",
      swiperOption: {
        // 设置分页器
        pagination: ".swiper-pagination",
        // 分页器是否可点击
        paginationClickable: true,
        // 设置自动播放且设置轮播间隔时间duration
        autoplay: 3000,
        // 滑动播放速度
        speed: 1000,
        // 前一个
        prevButton: ".swiper-button-prev",
        // 后一个
        nextButton: ".swiper-button-next",
      },
      isActive: false,
      choosetime: true,

      // 日期选择
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      value110: "",
      value210: "",
    };
  },
  components: {
    ProPrams,
    swiper,
    swiperSlide,
  },
  created() {
    // 获取地址栏中的产品ID
    this.proId = this.$route.params.id;
    // 让页面滚动到顶部
    window.scrollTo(0, 0);
  },
  mounted() {
    // 发送请求获取该id对应的商品信息
    this.getProductInfo();
  },
  computed: {
    // 计算属性的 getter
    detailtotal: function () {
      // `this` 指向 vm 实例
      // 选择租赁的周或月
      window.sessionStorage.setItem("detailradio1", this.radio10);
      var detailradio = sessionStorage.getItem("detailradio1");
      // console.log(detailradio);
      // 选择租赁的数量
      window.sessionStorage.setItem("detailnum11", this.num10);
      var detailnum1 = sessionStorage.getItem("detailnum11");
      // console.log(detailnum1);
      // 选择租赁的时间范围
      // 开始时间
      window.sessionStorage.setItem("detailvalue11", this.value110);
      var detailvalue1 = sessionStorage.getItem("detailvalue11");
      // console.log(detailvalue1);
      // 结束时间
      window.sessionStorage.setItem("detailvalue21", this.value210);
      var detailvalue2 = sessionStorage.getItem("detailvalue21");
      // console.log(detailvalue2);
      // 计算年
      // 开始时间
      var year1 = detailvalue1.slice(10, 15);
      // console.log(year1 + "-year1");
      // 结束时间
      var year2 = detailvalue2.slice(10, 15);
      // console.log(year2 + "-year2");
      // 计算月
      // 开始时间
      var month = detailvalue1.slice(4, 7);
      // console.log(month + "-month");
      var monthday = 0;
      if (month === "Jan") {
        monthday = 1;
      } else if (month === "Feb") {
        monthday = 2;
      } else if (month === "Mar") {
        monthday = 3;
      } else if (month === "Apr") {
        monthday = 4;
      } else if (month === "May") {
        monthday = 5;
      } else if (month === "Jun") {
        monthday = 6;
      } else if (month === "Jul") {
        monthday = 7;
      } else if (month === "Aug") {
        monthday = 8;
      } else if (month === "Sept") {
        monthday = 9;
      } else if (month === "Oct") {
        monthday = 10;
      } else if (month === "Nov") {
        monthday = 11;
      } else if (month === "Dec") {
        monthday = 12;
      }
      // console.log(monthday + "第几月");
      // 结束时间
      var month2 = detailvalue2.slice(4, 7);
      // console.log(month2 + "-month2");
      var monthday2 = 0;
      if (month2 === "Jan") {
        monthday2 = 1;
      } else if (month2 === "Feb") {
        monthday2 = 2;
      } else if (month2 === "Mar") {
        monthday2 = 3;
      } else if (month === "Apr") {
        monthday2 = 4;
      } else if (month2 === "May") {
        monthday2 = 5;
      } else if (month2 === "Jun") {
        monthday2 = 6;
      } else if (month2 === "Jul") {
        monthday2 = 7;
      } else if (month2 === "Aug") {
        monthday2 = 8;
      } else if (month2 === "Sept") {
        monthday2 = 9;
      } else if (month2 === "Oct") {
        monthday2 = 10;
      } else if (month2 === "Nov") {
        monthda2y = 11;
      } else if (month2 === "Dec") {
        monthday2 = 12;
      }
      // console.log(monthday2 + "第几月2");
      // 计算日
      // 开始时间
      var day = detailvalue1.slice(8, 10);
      day = parseInt(day);
      // console.log(day + "日期");
      // 结束时间
      var day2 = detailvalue2.slice(8, 10);
      day2 = parseInt(day2);
      // console.log(day2 + "日期2");
      // 计算时间差
      var daytime1 = year1 * 365 + monthday * 30 + day;
      // console.log(daytime1);
      var daytime2 = year2 * 365 + monthday2 * 30 + day2;
      // console.log(daytime2);

      var daytime = daytime2 - daytime1;
      if (daytime <= 0) {
        alert("请输入正确的日期");
        this.value2 = 0;
      }
      // console.log(daytime + "总天数差");
      if (this.radio10 === 1) {
        var weeknum1 = daytime / 7;
        var weeknum2 = parseInt(weeknum1);
        if (weeknum2 < weeknum1) {
          var weeknum = weeknum2 + 1;
        } else {
          var weeknum = weeknum1;
        }
        var result = weeknum * 280 * this.num10;
        if (result < 0) {
          var result = 0;
        }
        // console.log(weeknum + "多少周");
      } else if (this.radio10 === 2) {
        var monthnum1 = daytime / 30;
        var monthnum2 = parseInt(monthnum1);
        if (monthnum2 < monthnum1) {
          var monthnum = monthnum2 + 1;
        } else {
          var monthnum = monthnum1;
        }
        var result = monthnum * 1120 * this.num10;
        if (result < 0) {
          var result = 0;
        }
        // console.log(monthnum + "多少月");
      }
      if (this.vission10 == 2) {
        var monthnum1 = daytime / 30;
        var monthnum2 = parseInt(monthnum1);
        if (monthnum2 < monthnum1) {
          var monthnum = monthnum2 + 1;
        } else {
          var monthnum = monthnum1;
        }
        var result = monthnum * 1120 * this.num10;
        if (result < 0) {
          var result = 0;
        }
        // console.log(monthnum + "多少月");
      }
      return result;
    },
  },
  methods: {
    handleChange(value) {},
    getProductInfo() {},
    Visbtn1Click() {
      this.vission10 = 1;
      this.choosetime = true;
    },
    Visbtn2Click() {
      this.vission10 = 2;
      this.choosetime = false;
    },
    // 跳转到结算页面
    immLease(id) {
      // 选择租赁方式
      if (this.vission10 === 1) {
        window.sessionStorage.setItem("detailvission", "共享租赁");
      } else if (this.vission10 === 2) {
        window.sessionStorage.setItem("detailvission", "先租后买");
      }
      // var detailvission = sessionStorage.getItem("detailvission");
      // console.log(detailvission + "方式");
      // 租赁数量
      window.sessionStorage.setItem("detailnum", this.num10);
      // var detailnum = sessionStorage.getItem("detailnum");
      // console.log(detailnum + "数量");
      // 租赁名称
      window.sessionStorage.setItem("detailname", this.product.name10);
      // var detailname = sessionStorage.getItem("detailname");
      // console.log(detailname + "名字");
      // 租赁价格
      window.sessionStorage.setItem("detaildetailtotal", this.detailtotal);
      // var detaildetailtotal = sessionStorage.getItem("detaildetailtotal");
      // console.log(detaildetailtotal + "价格");
      // 获取商品图片
      window.sessionStorage.setItem(
        "detailimg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1619945462,3983555755&fm=26&gp=0.jpg"
      );
      var detailimg = sessionStorage.getItem("detailimg");
      // console.log(detailimg);

      var token = sessionStorage.getItem("token");
      // console.log(token);
      if (token) {
        if (this.value110 === "" || this.value210 === "") {
          alert("请选择日期");
        } else {
          this.$router.push("/product/" + this.$route.params.id);
        }
      } else alert("请登录"), this.$router.push("/login/");
    },
  },
};
</script>
<style scoped>
.detail-swiper {
  width: 550px;
  height: 550px;
  background-color: green;
  margin-top: 100px;
  overflow: hidden;
  margin-left: 40px;
}
.detail-swiper img {
  width: 100%;
}
.container {
  display: flex;
  height: 870px;
}
.left {
  flex: 1;
  /* background-color: goldenrod; */
}
.right {
  flex: 1;
  /* background-color: indianred; */
  padding: 0 20px;
}
.header h2 {
  font-size: 22px;
  color: #333333;
  margin: 20px 0 10px;
}
.header {
  /* border-bottom: 1px solid #eee; */
  display: block !important;
  padding-bottom: 0px;
}
.header .desc {
  font-size: 14px;
  color: #999;
  line-height: 20px;
}
.color {
  color: #2d2e31;
  font-size: 16px;
  vertical-align: middle;
  height: 33.8px;
  line-height: 33.8px;
}
.now-price {
  font-size: 23px;
  color: rgb(242, 39, 43);
  font-weight: 600;
  height: 33.8px;
  line-height: 33.8px;
}
.now-price span {
  color: #999;
  font-size: 12px;
  text-decoration: line-through;
  margin-left: 6px;
}
.address {
  height: 92px;
  background-color: #fafafa;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
}
.address span {
  font-size: 14px;
  margin-right: 15px;
}
.address span.change {
  color: #c81623;
}
.address p {
  color: #c81623;
  font-size: 14px;
  margin-top: 10px;
}
.virsion {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.title {
  font-size: 14px;
  font-weight: 400;
  color: #83868f;
  line-height: 32px;
  margin-right: 20px;
}
.virsion .choose {
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.virsion .choose .btn {
  width: 90px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #e5e5e5;
  margin-right: 10px;
}
.active {
  border: 1px solid #c81623 !important;
  color: #c81623;
}

.virsion .choose .btn .price {
  padding: 0 10px;
}
.choosedata {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.choosedate .choose .btn {
  text-align: center;
  cursor: pointer;
  height: 28px;
  width: 150px;
  border: 1px solid #dedede;
  border-radius: 3px;
}
.shopcart {
  margin-top: 20px;
  display: flex;
  color: #fff;
  font-size: 16px;
  line-height: 54px;
  text-align: center;
}
.shopcart .button {
  width: 150px;
  height: 47px;
  cursor: pointer;
  margin-right: 25px;
  line-height: 47px;
  border-radius: 5px;
  font-size: 19px;
}

.add_cart {
  background-color: #c81623;
}

/* .lease_immediately {
  background: rgb(242, 39, 43, 0.1);
  border: 1px solid #c81623;
  color: #c81623;
} */

.total {
  height: 108px;
  background-color: #fafafa;
  margin-top: 20px;
  padding: 9px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
}
.total .top {
  display: flex;
  justify-content: space-between;
  color: #333333;
}
.total .top .highprice {
  text-decoration: line-through;
  padding-left: 6px;
}
.totalprice {
  color: #c81623;
  font-weight: 600;
  font-size: 18px;
  margin-top: 10px;
}
.monthly_rent {
  background-color: #f2f2f2;
  padding: 12px 10px;
  width: 593px;
  height: 56px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.equipment {
  width: 90px;
  height: 25.2px;
  background: #c81623;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  line-height: 25.2px;
  margin: 4px 12px;
}

.el-popup-parent--hidden > .atooltip {
  background: #ffffff;
  font-size: 12px；;
  /* max-width:	400px; */
}
.choose_radio {
  position: relative;
  margin-top: 16px;
}
.detail_choose {
  cursor: pointer;
  color: #606266;
  vertical-align: middle;
  font-size: 14px;
  margin: 8px 0;
}
.hint {
  display: none;
  font-size: 11px;
  line-height: 19px;
  position: absolute;
  left: 205px;
  top: 0;
  padding: 10px;
  width: 300px;
  white-space: pre-wrap;
  color: #666;
  z-index: 9;
  background: #fff;
  box-shadow: 0 0 10px #ccc;
  -webkit-box-shadow: 0 0 10px #ccc;
}

.default_button {
  width: 80px;
  height: 23px;
  text-align: center !important;
  font-size: 13px;
  line-height: 23px;
  padding: 0;
  border: 1px solid #c81623;
  color: #c81623;
  border-radius: 2px;
}

.default_button1:hover ~ .hint {
  display: block;
}

.el-radio {
  margin-right: 5px;
}

.el-radio-group {
  margin-left: 78px;
}

.choosedate,
.choosenum,
.cash_pledge {
  display: flex;
  margin: 16px 0;
}

.quantity_num {
  font-size: 14px;
  color: #c81623;
  margin-left: 10px;
}

.cash {
  font-size: 15px;
  color: #606266;
  line-height: 32px;
}

.cash span {
  color: #c81623;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 130px;
  color: #606266;
  margin-right: 10px;
}

.dataend {
  margin-left: 10px;
}

.title1 {
  line-height: 40px;
}
</style>