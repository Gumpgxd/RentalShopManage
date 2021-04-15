<template>
    <div>
        <div class="message">
          <div class="left_mess1">
            <div>商品价格：</div>
          </div>
          <div class="right_mess1">{{ UserList.place }}</div>
        </div>

        <div class="message">
          <div class="left_mess1">
            <div>商品简介：</div>
          </div>
          <div class="right_mess1">{{ UserList.name }}</div>
        </div>

        <div class="message2">
          <div class="left_mess1 left_ma1">
            <div>商品图片：</div>
          </div>
          <div>
            <img :src="UserList.img" class="right_mess2" />
          </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        UserList: [
        {
          id: 1,
          name: '甘相东',
          place: 20,
          nameid: '靓仔',
          status: 1,
          img: 'https://ftp.bmp.ovh/imgs/2021/03/dcc201eddcdd3dcd.png',
        },
        {
          id: 12,
          name: '甘',
          place: 22,
          nameid: '靓',
          status: 0,
          img: 'https://ftp.bmp.ovh/imgs/2021/03/dcc201eddcdd3dcd.png',
        },
        {
          id: 13,
          name: '相',
          place: 21,
          nameid: '仔',
          status: 0,
          img: 'https://ftp.bmp.ovh/imgs/2021/03/dcc201eddcdd3dcd.png',
        },
        {
          id: 14,
          name: '东',
          place: 203,
          nameid: '一',
          status: 1,
          img: 'https://ftp.bmp.ovh/imgs/2021/03/dcc201eddcdd3dcd.png',
        },
      ]
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
