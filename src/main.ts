import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)
// 注册路由
app.use(router)
// 注册vuex
app.use(store)
app.mount('#app')
