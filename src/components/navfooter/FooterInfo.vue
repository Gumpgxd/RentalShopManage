<template>
  <div class="footer-info">
    <div class="container">
      <!-- 合作伙伴 -->
      <div class="logo">
        <p class="logo-title">合作伙伴</p>
      </div>
      <!-- 合作伙伴logo start -->
      <div class="links">
        <div>
          <div class="link_img"><img src="https://z3.ax1x.com/2021/04/12/cBui38.png" alt="" /></div>
          <a href="javascript:;">阿里云</a>
        </div>
        <div>
          <div class="link_img"><img src="https://z3.ax1x.com/2021/04/12/cBmzWT.png" alt="" /></div>
          <a href="javascript:;">支付宝</a>
        </div>
        <div>
          <div class="link_img">
            <img src="https://z3.ax1x.com/2021/04/12/cBnFm9.png" alt="" />
          </div>
          <a href="javascript:;">芝麻信用</a>
        </div>
        <div>
          <div class="link_img">
            <img src="https://z3.ax1x.com/2021/04/12/cBnkwR.png" alt="" />
          </div>
          <a href="javascript:;">中国银联</a>
        </div>
      </div>
      <!-- 合作伙伴 end -->
      <!-- 联系我们 -->
      <div class="logo">
        <p class="logo-title">联系我们</p>
      </div>
      <!-- 联系我们icon start -->
      <div class="links contact_links">
        <div>
          <div class="link_img"><img src="https://z3.ax1x.com/2021/04/12/cBnCy4.png" alt="" /></div>
          <a href="javascript:;">
            Phone No.
            <p>(028)-8934743</p></a
          >
        </div>
        <div>
          <div class="link_img"><img src="https://z3.ax1x.com/2021/04/12/cBn9lF.png" alt="" /></div>
          <a href="javascript:;">
            Email Address
            <p>lihua@qq.com</p></a
          >
        </div>
        <div>
          <div class="link_img"><img src="https://z3.ax1x.com/2021/04/12/cBnpSU.png" alt="" /></div>
          <a href="javascript:;">
            Webside
            <p>www.bb.com</p></a
          >
        </div>
      </div>
      <!-- 联系我们icon end -->
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterInfo",
};
</script>
<style scoped>
.footer-info {
  width: 100%;
  height: 433px;
  background-color: #fff;
  border-top: 4px solid #c81623;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 272px;
}
.logo {
  margin: 30px 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
}

.logo-title {
  margin-top: 13px;
  color: #999999;
  font-size: 18px;
  font-weight: 800;
}

.links {
  display: flex;
  flex-wrap: wrap;
}

.links > div {
  margin: 0 45px;
}

.links a {
  display: inline-block;
  width: 60px;
  color: #999999;
  font-size: 14px;
  padding: 0 8px;
  border-right: 1px solid #999999;
  margin-top: 10px;
  text-align: center;
}

.contact_links a {
  width: 77px;
  font-size: 11px;
}
.links a:last-child {
  border: none;
}

.link_img {
  width: 60px;
  height: 58px;
  margin: 0 auto;
}

.link_img img {
  width: 100%;
  height: 100%;
}
.copyright {
  color: #999999;
  font-size: 16px;
  margin-top: 15px;
}
.copyright span {
  color: #c81623;
}
</style>