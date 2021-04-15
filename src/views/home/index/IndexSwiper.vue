<template>
  <div>
    <div class="container">
      <!-- 侧边导航区域 -->
      <!-- <div class="sidenav">
        <ul>
          <li
            v-for="(item, index) in sideNavList"
            :key="index"
            class="sidenav-item"
          >
            <span class="title"> {{ item }}</span>
            <div class="children">
              <ul v-for="(menu, i) in menuList" :key="i" class="menuList">
                <li v-for="(menuItem, j) in menu" :key="j" class="menuItem">
                  <a href="javascript:;" @click="menuItemClick(menuItem.id)">
                    <div class="menuItem-img">
                      <img
                        :src="menuItem ? menuItem.img : '/imgs/item-box-1.png'"
                        alt=""
                      />
                    </div>
                    <span class="menuItem-name">{{
                      menuItem ? menuItem.name : "小米青春8"
                    }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div> -->
      
      
      <!-- 轮播图区域 -->
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide
          class="swiper-item"
          v-for="(item, index) in sildeList"
          :key="index"
        >
          <a href="javascript:;" @click="sildeClick(item.id)">
            <img :src="item.img" alt="" class="swiper-img" />
          </a>
        </swiper-slide>
        <!-- Optional controls -->
        <!-- 轮播图分页器 -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "IndexSwiper",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        // 设置分页器
        pagination: ".swiper-pagination",
        // 分页器是否可点击
        paginationClickable: true,
        // 循环播放，无缝循环
        loop: true,
        // 设置自动播放且设置轮播间隔时间duration
        autoplay: 3000,
        // 滑动播放速度
        speed: 1000,
        // 前一个
        prevButton: ".swiper-button-prev",
        // 后一个
        nextButton: ".swiper-button-next",
        // 动画
        effect: "cube",
        //动画参数
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
      },
      // 轮播图图片 start
      sildeList: [
        {
          id: "42",
          img: "https://ftp.bmp.ovh/imgs/2021/04/8c8ed8c6138463ca.jpg",
        },
        {
          id: "45",
          img: "https://ftp.bmp.ovh/imgs/2021/04/dba62330958f9cf0.jpg",
        },
        {
          id: "46",
          img: "https://ftp.bmp.ovh/imgs/2021/04/0b6278b029019f61.jpg",
        },
        {
          id: "47",
          img: "https://ftp.bmp.ovh/imgs/2021/04/1acb4504a4e88a3e.jpg",
        },
        {
          id: "48",
          img: "https://ftp.bmp.ovh/imgs/2021/04/0578851555c46fe7.jpg",
        },
      ],
    };
  },
  methods: {
    sildeClick(id) {
      console.log(id);
      this.$router.push("/index/");
    },
    menuItemClick(id) {
      console.log(id);
      this.$router.push("/index/");
    },
  },
};
</script>
<style scoped>
.container {
  height: 451px;
  position: relative;
  overflow: hidden;
}
/* 侧边导航栏样式 */
.sidenav {
  position: absolute;
  box-sizing: border-box;
  /* z-index: 10;
  width: 264px;
  height: 451px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 26px 0; */
}
/* .sidenav-item {
  height: 50px;
  cursor: pointer;
} */
/* .sidenav-item .title {
  position: relative;
  display: inline-block;
  width: 100%;
  text-indent: 30px;
  line-height: 50px;
  font-size: 16px;
  color: #fff;
} */
/* 这是侧边导航展开区域 */
/* .sidenav-item .children {
  box-sizing: border-box;
  position: absolute;
  width: 964px;
  height: 451px;
  background-color: #fff;
  top: 0;
  left: 264px;
  padding-top: 15px;
  display: none;
} */
/* .sidenav-item .title::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 15px;
  background-color: slateblue;
  right: 30px;
  top: 18px;
  background: url("/imgs/icon-arrow.png") no-repeat;
  background-size: 10px;
} */
/* 
ul.menuList {
  height: 70px;
  display: flex;
} */
/* li.menuItem {
  height: 70px;
  flex: 1;
} */
/* li.menuItem > a {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
} */
/* li.menuItem .menuItem-img {
  width: 42px;
  height: 42px;
  margin-left: 20px;
  overflow: hidden;
} */
/* li.menuItem .menuItem-img img {
  width: 42px;
} */
/* li.menuItem .menuItem-name {
  font-size: 14px;
  color: #333333;
  margin-left: 15px;
} */

/* .sidenav-item:hover {
  background-color: #fd5902;
} */
.sidenav-item:hover .children {
  display: block;
}
/* 轮播图区域样式 */
.swiper-item a {
  display: inline-block;
}
.swiper-item img {
  width: 100%;
}
/* .swiper-button-prev {
  margin-left: 264px;
} */
</style>