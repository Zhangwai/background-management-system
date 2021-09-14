import { createApp } from 'vue'

import { registerApp } from './global'

// 全局引入ElementPlus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css' // 引入样式

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

registerApp(app)
// 注册路由
app.use(router)
// 注册vuex
app.use(store)

app.mount('#app')
