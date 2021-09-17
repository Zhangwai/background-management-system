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

export default store
