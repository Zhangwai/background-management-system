// 全局导入组件
import { App } from 'vue'
// import 'element-plus/theme-chalk/base.css'
// App是vue中app的类型
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink
]

export default function (app: App): void {
  // 注册全局组件
  for (const component of components) {
    app.component(component.name, component)
  }
}
