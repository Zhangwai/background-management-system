import { App } from 'vue'
// App是vue中app的类型
import registerElement from './register-element'

export function registerApp(app: App): void {
  // 注册ElementPlus
  registerElement(app)
}
