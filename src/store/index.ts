import { createStore } from 'vuex'

import { IRootState } from './type'

import loginModule from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'Kylin',
      age: 21
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})

// 对store中的数据进行初始化
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}

export default store
