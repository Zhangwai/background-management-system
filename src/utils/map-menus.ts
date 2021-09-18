// 对menus进行映射
import type { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(useMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // 加载某个文件夹， true表示递归的查找， 匹配.ts结尾的文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  // 拿到../router/main所有.ts文件路径
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    // 拿到所有路由
    allRoutes.push(route.default)
  })
  console.log(allRoutes)

  // 2.再根据useMenus获取需要添加的routes

  return routes
}
