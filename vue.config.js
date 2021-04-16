"use strict";
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  runtimeCompiler: true,
  devServer: {
    open: true,
    /**
     * 前端代理，解决跨域问题（上线时需要nginx反向代理，或者添加前缀的时候判断是测试环境）
     * 原理：本地开启一个node服务，拦截‘/api’的请求，转发至目标地址，因为node服务端不禁止跨域
     */
    proxy: {
      "/api": {
        target: "http://localhost:3000", //目标地址
        ws: true, // 是否启用websockets
        changeOrigin: false, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: { "^/api": "" }, //这里重写路径
      },
    },
  },
  configureWebpack: {
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      ],
    },
  },
  // chainWebpack(config) {
  //   // set svg-sprite-loader
  //   config.module
  //     .rule('svg')
  //     .exclude.add(resolve('src/icons'))
  //     .end()
  //   config.module
  //     .rule('icons')
  //     .test(/\.svg$/)
  //     .include.add(resolve('src/icons'))
  //     .end()
  //     .use('svg-sprite-loader')
  //     .loader('svg-sprite-loader')
  //     .options({
  //       symbolId: 'icon-[name]'
  //     })
  //     .end()
  // },
  lintOnSave: false,
};
