const path = require('path')

module.exports = {
  // 1.配置方式一：CLI提供的属性
  outputDir: './build',

  // 2.配置方式二：和webpack配置合并
  // configureWebpack: {
  //   resolve: {
  //     alias: { // 别名
  //       components: '@/components'
  //     }
  //   }
  // }

  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },

  // 3.配置方式三：
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
