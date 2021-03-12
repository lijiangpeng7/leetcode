## 在项目根目录下运行代码，会将webpack配置输出到output.js中
``` javascript
vue inspect > output.js 
```

## 配置svg-sprite-loader 链接[https://www.jianshu.com/p/70f9c9268c83]
``` javascript
chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
```

