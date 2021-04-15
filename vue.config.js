module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'api': '@/api',
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    },
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    // proxy: {
    //   '/api': {
    //     target: 'http://mall-pre.springboot.cn',
    //     changeOrigin: true, //是否跨域
    //     pathRewrite: { //添加路径转化规则 将/api路径设置为空
    //       '/api': '',
    //     },
    //   }
    // },
  },
  // lintOnSave: false, // 关闭es-lint代码检查工具
  // outputDir: 'dist', //设置打包目标路径
  // publicPath: '/app', //如果项目部署在一个域名的子路径/app中，需要设置此选项
  productionSourceMap: false, //关闭生产环境的source map文件 别人看不到项目js的源码 比较安全
}
