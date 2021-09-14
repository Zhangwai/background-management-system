// 全局导入组件
import { App } from 'vue'
// App是vue中app的类型
import { ElButton, ElForm, ElInput, ElRadio } from 'element-plus'

const components = [ElButton, ElForm, ElInput, ElRadio]

export default function (app: App): void {
  // 注册全局组件
  for (const component of components) {
    app.component(component.name, component)
  }
}
