import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://106.15.36.27:9000'
axios.interceptors.request.use(config => {
  config.headers.token = window.sessionStorage.getItem('token')
  return config
})

import {
  Message,
  Form,
  FormItem,
  Input,
  Row,
  Col
} from 'element-ui'
Vue.prototype.$message = Message
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Col)
Vue.use(Row)

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyLoad from 'vue-lazyload';
import VueCookie from 'vue-cookie';
import ElementUI from 'element-ui';
import infiniteScroll from 'vue-infinite-scroll'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/fonts/iconfont.css'
import 'babel-polyfill';

// 引入样式文件
import './assets/css/global.css'
import "./assets/scss/reset.scss"
import "./assets/scss/config.scss"
import './assets/scss/element-variables.scss' //引入修改element主题色的样式

// 安装插件
Vue.use(lazyLoad, {
  loading: '/imgs/loading-svg/loading-cubes.svg',
});
Vue.use(VueCookie);
Vue.use(ElementUI);
Vue.use(infiniteScroll)

// 是否开启生产版本提示 默认为不在控制台进行提示
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 设置mock数据开关
// const mock = false;
// if (mock) {
//   require("./mock/api");
// }
