import { App } from 'vue'
// App是vue中app的类型
import registerElement from './register-element'

export function globalRegister(app: App): void {
  // 注册ElementPlus
  // 1.
  // registerElement(app)
  // 2.使用插件的形式使用
  app.use(registerElement)
}
