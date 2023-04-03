const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('images')
        .set('parser', {
          dataUrlCondition: {
            maxSize: 200 * 1024 // 200KiB
          }
        })
  }
})
