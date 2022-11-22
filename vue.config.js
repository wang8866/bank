const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/scss/base.scss";`
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 100,
            propList: ["*"],
          }),
          require('autoprefixer')({
            overrideBrowserslist: [
              "last 10 versions" // 所有主流浏览器最近10版本用
            ]
          })
        ]
      }
    }
  }
})
