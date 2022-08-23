const { defineConfig } = require('@vue/cli-service');
const { devtools } = require('vue');
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue_course/' : '/',
  // configureWebpack: {
  //   devtool: 'source-map',
  // },
};
