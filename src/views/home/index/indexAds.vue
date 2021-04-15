<template>
  <div class="index-ads">
    <div class="container">
      <div v-for="(item, index) in adList" :key="index" class="ad-item">
        <a href="javascript:;" @click="adItemClick(item.id)">
          <img v-lazy="item.img" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexAds",
  data() {
    return {
      adList: [
        { id: "30", img: "https://ftp.bmp.ovh/imgs/2021/04/81ce89639b3465a4.png" },
        { id: "31", img: "https://ftp.bmp.ovh/imgs/2021/04/1809055367aadbb8.png" },
        { id: "32", img: "https://ftp.bmp.ovh/imgs/2021/04/ead12c114f2e3dc8.jpg" },
        { id: "33", img: "https://ftp.bmp.ovh/imgs/2021/04/c4a787de8a79f4b2.jpg" },
      ],
    };
  },
  methods: {
    adItemClick(id) {
      this.$router.push("/index/");
    },
  },
};
</script>
<style scoped>
.index-ads {
  margin-top: 14px;
}
.container {
  height: 167px;
  display: flex;
  justify-content: space-between;
}
.ad-item {
  width: 296px;
  background-color: steelblue;
}
.ad-item > a {
  display: block;
  width: 296px;
  height: 167px;
  overflow: hidden;
}
.ad-item > a img {
  height: 100%;
}
</style>