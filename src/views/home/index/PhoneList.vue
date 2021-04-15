<template>
  <div class="PhoneList">
    <div class="container">
      <!-- 顶部标题区域 -->
      <h2 class="title">电脑</h2>
      <!-- 产品列表区域 -->
      <div class="wrapper">
        <!-- 左侧广告位 -->
        <div class="banner">
          <a href="javascript:;">
            <img v-lazy="'https://z3.ax1x.com/2021/04/11/c0rHFx.jpg'" alt="" />
          </a>
        </div>
        <!-- 右侧产品列表 -->
        <div class="product">
          <ul class="pro-list">
            <li
              v-for="(item, index) in computerList"
              :key="index"
              class="pro-list-item"
            >
              <a href="javascript:;">
                <!-- <div class="item-discount">秒杀</div> -->
                <div class="item-img" @click="proListItemCLick(item.id)">
                  <img v-lazy="item.mainImage" alt="" />
                </div>
                <div class="info">
                  <div class="item-name">{{ item.name }}</div>
                  <p class="item-desc">{{ item.subtitle }}</p>
                  <span class="item-price" @click="addToCart(item.id)">{{
                    item.price
                  }}</span>
                </div>
              </a>

              <ul class="icon">
                <div class="lease">
                  <span class="item2-price" @click="addToCart(item.id)">{{
                    item.price
                  }}</span>
                  <div class="lease_btn"><button>立马租赁</button></div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- 顶部标题区域 -->
      <h2 class="title">相机</h2>
      <!-- 产品列表区域 -->
      <div class="wrapper">
        <!-- 左侧广告位 -->
        <div class="banner">
          <a href="javascript:;">
            <img
              v-lazy="'https://z3.ax1x.com/2021/04/11/c0rzmd.md.png'"
              alt=""
            />
          </a>
        </div>
        <!-- 右侧产品列表 -->
        <div class="product">
          <ul class="pro-list">
            <li
              v-for="(item, index) in cameraList"
              :key="index"
              class="pro-list-item"
            >
              <a href="javascript:;">
                <!-- <div class="item-discount">秒杀</div> -->
                <div class="item-img" @click="proListItemCLick1(item.id)">
                  <img v-lazy="item.mainImage" alt="" />
                </div>
                <div class="info">
                  <div class="item-name">{{ item.name }}</div>
                  <p class="item-desc">{{ item.subtitle }}</p>
                  <span class="item-price" @click="addToCart(item.id)">{{
                    item.price
                  }}</span>
                </div>
              </a>

              <ul class="icon">
                <div class="lease">
                  <span class="item2-price" @click="addToCart(item.id)">{{
                    item.price
                  }}</span>
                  <div class="lease_btn"><button>立马租赁</button></div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- 顶部标题区域 -->
      <h2 class="title">VR设备</h2>
      <!-- 产品列表区域 -->
      <div class="wrapper">
        <!-- 左侧广告位 -->
        <div class="banner">
          <a href="javascript:;">
            <img v-lazy="'https://z3.ax1x.com/2021/04/11/c0yPb9.png'" alt="" />
          </a>
        </div>
        <!-- 右侧产品列表 -->
        <div class="product">
          <ul class="pro-list">
            <li
              v-for="(item, index) in cartList"
              :key="index"
              class="pro-list-item"
            >
              <a href="javascript:;">
                <!-- <div class="item-discount">秒杀</div> -->
                <div class="item-img" @click="proListItemCLick2(item.id)">
                  <img v-lazy="item.mainImage" alt="" />
                </div>
                <div class="info">
                  <div class="item-name">{{ item.name }}</div>
                  <p class="item-desc">{{ item.subtitle }}</p>
                  <span class="item-price" @click="addToCart(item.id)">{{
                    item.price
                  }}</span>
                </div>
              </a>

              <ul class="icon">
                <div class="lease">
                  <span class="item2-price" @click="addToCart(item.id)">{{
                    item.price
                  }}</span>
                  <div class="lease_btn"><button>立马租赁</button></div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- 顶部标题区域 -->
      <h2 class="title">其它</h2>
      <!-- 产品列表区域 -->
      <div class="wrapper">
        <!-- 左侧广告位 -->
        <div class="banner">
          <a href="javascript:;">
            <img
              v-lazy="
                'https://img.zcool.cn/community/01b85857d51c580000018c1b8fce8d.jpg@1280w_1l_2o_100sh.jpg'
              "
              alt=""
            />
          </a>
        </div>
        <!-- 右侧产品列表 -->
        <div class="product">
          <ul class="pro-list">
            <li
              v-for="(item, index) in otherList"
              :key="index"
              class="pro-list-item"
            >
              <a href="javascript:;">
                <!-- <div class="item-discount">秒杀</div> -->
                <div class="item-img" @click="proListItemCLick3(item.id)">
                  <img v-lazy="item.mainImage" alt="" />
                </div>
                <div class="info">
                  <div class="item-name">{{ item.name }}</div>
                  <p class="item-desc">{{ item.subtitle }}</p>
                  <span class="item-price" @click="addToCart(item.id)">{{
                    item.price
                  }}</span>
                </div>
              </a>

              <ul class="icon">
                <div class="lease">
                  <span class="item2-price" @click="addToCart(item.id)">{{
                    item.price
                  }}</span>
                  <div class="lease_btn"><button>立马租赁</button></div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { request } from "api/request";
import Model from "components/model/Model";
export default {
  name: "PhoneList",
  data() {
    return {
      // 电脑
      computerList: [
        {
          id: 1,
          mainImage:
            "https://gitee.com/Gumpxd/images/raw/master/20210407095547.png",
          name:
            "全新 全新 联想ThinkPad X1 Yoga 2020 笔记本电脑（i7-10510U/8GB/512GB SSD/Win10H/14/集显UHD 620/WQHD）",
          subtitle: "i7-10510U/8GB/512GB SSD",
          price: "￥520元/月",
        },
        {
          id: 2,
          mainImage:
            "https://gitee.com/Gumpxd/images/raw/master/20210407095601.png",
          name:
            "全新 火影(FIREBAT) T5V 笔记本电脑（i5-10200H/8GB/512GB SSD/GTX1650 4G/15.6)",
          subtitle: "i5-10200H/8GB/512GB SSD",
          price: "￥266元/月",
        },
        {
          id: 3,
          mainImage:
            "https://gitee.com/Gumpxd/images/raw/master/20210407095627.png",
          name:
            "全新 苹果Apple MacBook Pro 13 2020 笔记本电脑（i5-2.0G/16GB/512GB SSD/13.3/2K）",
          subtitle: "i5-2.0G/16GB/512GB SSD",
          price: "￥575元/月",
        },
        {
          id: 4,
          mainImage:
            "https://gitee.com/Gumpxd/images/raw/master/20210407095647.png",
          name:
            "全新 微软Microsoft Surface Pro 7 二合一笔记本电脑（i7/16GB/512GB/12.3''/Win10H 不含键盘/触控笔）",
          subtitle: "i7/16GB/512GB",
          price: "￥725元/月",
        },
      ],
      // 相机
      cameraList: [
        {
          id: 1,
          mainImage:
            "https://gitee.com/Gumpxd/images/raw/master/20210407095357.png",
          name: "佳能600D（18-55套机）入门级单反照相机数码高清旅游",
          subtitle: "佳能600D/18-55 II IS 套机",
          price: "120元/周",
        },
        {
          id: 2,
          mainImage:
            "https://gitee.com/Gumpxd/images/raw/master/20210407095418.png",
          name: "DJI大疆 精灵4pro Phantom4pro航拍飞机无人机航拍器",
          subtitle: "DJI眼镜+精灵4pro+普通遥控器",
          price: "￥500元/周",
        },
        {
          id: 3,
          mainImage:
            "https://gitee.com/Gumpxd/images/raw/master/20210407095458.png",
          name: "索尼／sony x280 高清摄像机拍摄套装ex280升级，直播竖拍",
          subtitle: "基础套餐+三脚架+竖拍支架",
          price: "￥800元/周",
        },
        {
          id: 4,
          mainImage:
            "https://gitee.com/Gumpxd/images/raw/master/20210407095520.png",
          name: "GoPro5 BLACK户外运动潜水高清运动相机",
          subtitle: "基础配置",
          price: "￥70元/周",
        },
      ],
      // VR设备
      cartList: [
        {
          id: 1,
          mainImage:
            "https://api.hainiaowo.com/upload/testtemp/f3382b0e99eb55ac9bbf121845f706ad.png",
          name: "大疆 goggles飞行眼镜 VR眼镜",
          subtitle: "DJI/大疆 goggles飞行眼镜",
          price: "￥200元/周",
        },
        {
          id: 2,
          mainImage:
            "https://api.hainiaowo.com/upload/testtemp/4ebb583466d8074248dd0a3310c98d07.jpg",
          name: "HTC VIVE VR眼镜",
          subtitle: "进入真实的虚拟世界，感受沉浸式体验",
          price: "￥400元/周",
        },
        {
          id: 3,
          mainImage:
            "https://api.hainiaowo.com/upload/testtemp/e47959cdec99fd54c95196f185a31715.jpg",
          name: "HTC Vive Focus VR一体机",
          subtitle: "HTC VR游戏眼镜 VR头盔家庭影院",
          price: "￥280元/周",
        },
        {
          id: 4,
          mainImage:
            "https://api.hainiaowo.com/upload/testtemp/125f81e9e635674b267b2a87aab9d757.jpg",
          name: "耐德佳WatchAR小灵镜3D智能眼镜 支持Switch游戏机 手机投屏",
          subtitle: "手机投屏AR头显 2D/3D一键切换",
          price: "￥140/周",
        },
      ],
      // 其它
      otherList: [
        {
          id: 1,
          mainImage:
            "https://gitee.com/Gumpxd/images/raw/master/20210407095801.png",
          name: "爱普生L1300彩色影像设计专用打印机",
          subtitle: "墨仓式L1300 A3+ 高速图形设计专用打印机",
          price: "￥100元/月",
        },
        {
          id: 2,
          mainImage:
            "https://gitee.com/Gumpxd/images/raw/master/20210407095727.png",
          name: "雅观办公设备租赁公司 新都D311黑白复印机",
          subtitle: "新都复印机 彩色 标配2GB，选配2GB",
          price: "￥350元/月",
        },
        {
          id: 3,
          mainImage:
            "https://gitee.com/Gumpxd/images/raw/master/20210407095739.png",
          name: "智能陪读机器人",
          subtitle: "精准定位4-12岁研发的智伴儿童机器人",
          price: "￥133.25元/月",
        },
        {
          id: 4,
          mainImage:
            "https://gitee.com/Gumpxd/images/raw/master/20210407095751.png",
          name: "VR眼镜",
          subtitle: "HTC vive VR眼镜 头戴式智能游戏设备",
          price: "￥45元/天",
        },
      ],
      isShowModel: false,
    };
  },
  components: {
    Model,
  },
  computed: {
    getUserName() {
      return this.$store.state.userName;
    },
  },
  mounted() {
    this.getPhoneList();
  },
  methods: {
    getPhoneList() {},
    proListItemCLick(id) {
      // alert(id)
      if (id === 1) {
        this.$router.push("/detail/" + id);
      } else if (id === 2) {
        this.$router.push("/detail1/" + id);
      } else if (id === 3) {
        this.$router.push("/detail2/" + id);
      } else if (id === 4) {
        this.$router.push("/detail3/" + id);
      }
    },
    proListItemCLick1(id) {
      // alert(id)
      if (id === 1) {
        this.$router.push("/detail4/" + id);
      } else if (id === 2) {
        this.$router.push("/detail5/" + id);
      } else if (id === 3) {
        this.$router.push("/detail6/" + id);
      } else if (id === 4) {
        this.$router.push("/detail7/" + id);
      }
    },
    proListItemCLick2(id) {
      // alert(id)
      if (id === 1) {
        this.$router.push("/detail8/" + id);
      } else if (id === 2) {
        this.$router.push("/detail9/" + id);
      } else if (id === 3) {
        this.$router.push("/detail10/" + id);
      }
      // else if (id === 4) {
      //   this.$router.push("/detail11/" + id);
      // }
    },
    addToCart(id) {
      // request({
      //   method: "post",
      //   url: "/detail",
      //   data: {
      //     productId: id,
      //     selected: true,
      //   },
      // }).then((res) => {
      //   console.log(res);
      //   // 展示模态框
      //   this.isShowModel = true;
      //   // 发送请求重新获取一次购物车数量
      //   this.$store.commit("saveCartCount", res.cartProductVoList.length);
      //   // // 跳转至购物车页面
      //   // if (this.getUserName) {
      //   //   this.$router.push("/cart");
      //   //   this.$store.commit("saveCartCount", res.cartTotalQuantity);
      //   // } else {
      //   //   this.$router.push("/login");
      //   // }
      // });
    },
    handelCloseClick() {
      this.isShowModel = false;
    },
    // handelSureClick() {
    //   this.isShowModel = false;
    //   this.$router.push("/cart");
    // },
  },
};
</script>
<style scoped>
.PhoneList {
  width: 100%;
  background-color: #f5f5f5;
}
.container {
  /* background-color: steelblue; */
  box-sizing: border-box;
  height: 400px;
  padding-bottom: 50px;
}
.title {
  height: 50px;
  line-height: 50px;
  font-size: 22px;
  color: #333;
}
.wrapper {
  display: flex;
}
.banner {
  width: 224px;
  height: 302px;
  background-color: teal;
}
.banner a {
  display: block;
  width: 224px;
  height: 302px;
}
.banner a img {
  width: 100%;
  height: 100%;
}

.product {
  box-sizing: border-box;
  width: calc(100% - 224px);
  height: 302px;
  /* background-color: tomato; */
  padding-left: 16px;
}
.pro-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.pro-list-item {
  position: relative;
  width: 236px;
  height: 302px;
  background-color: #fff;
  overflow: hidden;
}

.lease {
  text-align: center;
  position: absolute;
  width: 236px;
  height: 68px;
  background: rgb(242, 39, 43);
  bottom: 0;
  left: 0;
  padding: 20px 0;
}

.pro-list-item .icon {
  text-align: center;
  width: 236px;
  height: 68px;
  padding: 15px 0 0;
  margin: 0;
  list-style: none;
  transform: translateX(50%);
  position: absolute;
  right: 50%;
  bottom: -100%;
  z-index: 1;
  transition: all 0.5s;
}
.pro-list-item:hover .icon {
  bottom: 0;
}

.pro-list-item:nth-child(n + 5) {
  margin-top: 14px;
}
.pro-list-item a {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
}
.item-discount {
  width: 67px;
  height: 24px;
  background-color: #e82626;
  line-height: 24px;
  text-align: center;
  font-size: 14px;
  color: #fff;
}
.item-img {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 160px;
  margin-top: 10px;
}
.item-img img {
  height: 100%;
}
.info {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 30px;
}
.item-name {
  font-size: 14px;
  color: #333;
  font-weight: 600;
  width: 210px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}
.item-desc {
  font-size: 12px;
  color: #999;
  margin: 4px 0 10px 0;
}
.item-price {
  position: relative;
  font-size: 18px;
  font-weight: 600;
  color: #f20a0a;
  margin: 0 10px;
}

.item2-price {
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}
/* .item-price::after {
  content: "";
  width: 16px;
  height: 12px;
  background: url("/imgs/icon-cart-hover.png") no-repeat;
  position: absolute;
  background-size: 16px;
  top: 3px;
  right: -20px;
} */

.lease_btn {
  border: 1px solid #fff;
  width: 82px;
  height: 22px;
  margin: 20px auto;
  line-height: 22px;
  border-radius: 5px;
}

.lease_btn > button {
  border: none;
  background: rgb(242, 39, 43);
  color: #fff;
  width: 82px;
  height: 22px;
  line-height: 22px;
  border-radius: 5px;
}
</style>