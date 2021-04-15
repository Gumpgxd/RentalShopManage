import axios from 'axios';
// 封装一个基于axios框架但用于当前项目的网络请求函数request
export function request(config) {
  // 1.生成axios实例并配置基础值
  const instance = axios.create({
    // 这里的baseURL要根据前端的跨域方式做相应调整
    // 1.当采用的接口代理跨域时，如果后端和前端的域名一样的话只需要写一个‘/api’即可
    // 2.但采用的是jsonp或者cors跨域的时候
    // baseURL: '/api',
    baseURL: '/api',
    timeout: 8000,
  });

  // 2.设置请求拦截
  instance.interceptors.request.use(config => {
    // 对请求参数做类型判断和加载时显示转圈样式
    return config;
  }, err => {
    console.log(err);
  })
  // 3.设置响应拦截

  instance.interceptors.response.use(res => {
    // 获取返回的数据对象 包括状态码status data数据 以及mes信息
    let axiosData = res.data;
    let path = window.location.pathname;
    // 对状态码进行判断 执行不同的操作
    if (axiosData.status == 0) {
      // =0代表响应成功 返回数据
      return axiosData.data;
    } else if (axiosData.status == 10) {
      // =10 代表用户未登录 跳转至登录界面(如何用户访问首页则不跳转)
      if (path !== '/index') {
        window.location.href = '/login'; //js文件中只能通过window.location.href跳转 不能用路由
      }
    } else {
      // =其他 代表错误 打印错误信息
      console.log(axiosData.msg);
    }
  }, err => {
    let errMessage = err.response.data.message;
    let result = errMessage.substring(errMessage.length - 5, errMessage.length)
    // alert(result + ',请勿重复支付');
    return Promise.reject(result);
  })


  // 4.发送网络请求
  return instance(config);
}
