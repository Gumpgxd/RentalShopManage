import Vue from 'vue';
import VueRouter from 'vue-router';
// import Login from '../components/Login.vue'
import mylist from '../components/mylist.vue'
import User from '../components/User/User.vue'
import BuIndentify from '../components/Indentify/BusinIndentify.vue'
import UserOrder from '../components/UserOrder/UserOrder.vue'
import UserRent from '../components/UserRent/UserRent.vue'
import UserWork from '../components/UserWork/UserWork.vue'

Vue.use(VueRouter);

// Home组件是主视图 也就是path为空的时候 包裹三个子路由
const Home = () => import('views/home/home');
const Index = () => import('views/home/index/index');
const Detail = () => import('views/home/detail/detail');
const Detail1 = () => import('views/home/detail/detail1');
const Detail2 = () => import('views/home/detail/detail2');
const Detail3 = () => import('views/home/detail/detail3');
const Detail4 = () => import('views/home/detail/detail4');
const Detail5 = () => import('views/home/detail/detail5');
const Detail6 = () => import('views/home/detail/detail6');
const Detail7 = () => import('views/home/detail/detail7');
const Detail8 = () => import('views/home/detail/detail8');
const Detail9 = () => import('views/home/detail/detail9');
const Detail10 = () => import('views/home/detail/detail10');
const Product = () => import('views/home/product/product');


// 购物车页面是单独的路由
// const Cart = () => import('views/cart/cart');

// Order组件是主视图 包裹四个子路由
const Order = () => import('views/order/order');
// const OrderConfirm = () => import('views/order/orderConfirm');
const OrderList = () => import('views/order/orderList');
// const OrderPay = () => import('views/order/orderPay');
// const AliPay = () => import('views/alipay/aliPay');

const Login = () => import('../views/login/login.vue');
const ALogin = () => import('../views/login/adminlogin.vue');


const routes = [{
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/adminlogin',
    name: 'adminlogin',
    component: ALogin,
  },
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Home,
    children: [{
        path: 'index',
        name: 'index',
        component: Index,
      }, {
        path: 'detail/:id',
        name: 'detail',
        component: Detail,
      }, {
        path: 'detail1/:id',
        name: 'detail1',
        component: Detail1,
      }, {
        path: 'detail2/:id',
        name: 'detail2',
        component: Detail2,
      }, {
        path: 'detail3/:id',
        name: 'detail3',
        component: Detail3,
      }, {
        path: 'detail4/:id',
        name: 'detail4',
        component: Detail4,
      }, {
        path: 'detail5/:id',
        name: 'detail5',
        component: Detail5,
      }, {
        path: 'detail6/:id',
        name: 'detail6',
        component: Detail6,
      }, {
        path: 'detail7/:id',
        name: 'detail7',
        component: Detail7,
      }, {
        path: 'detail8/:id',
        name: 'detail8',
        component: Detail8,
      }, {
        path: 'detail9/:id',
        name: 'detail9',
        component: Detail9,
      },
      {
        path: 'detail10/:id',
        name: 'detail10',
        component: Detail10,
      }, {
        path: 'product/:id',
        name: 'product',
        component: Product,
      }
    ]
  }, , {
    path: '/order',
    name: 'order',
    component: Order,
    redirect: '/order/list',
    children: [{
      path: 'list',
      name: 'order-list',
      component: OrderList,
    }],
  },
  {
    path: '/mylist',
    component: mylist,
    children: [{
        path: '/',
        redirect: '/user',
      },
      {
        path: '/user',
        component: User
      }, {
        path: '/buidentify',
        component: BuIndentify
      }, {
        path: '/userorder',
        component: UserOrder
      }, {
        path: '/userrent',
        component: UserRent
      }, {
        path: '/userwork',
        component: UserWork
      }
    ]
  }
];


const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router;
