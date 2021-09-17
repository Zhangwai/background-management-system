import { Module } from 'vuex'

import { ILoginState } from './type'
import { IRootState } from '../type'

const loginModule: Module<ILoginState, IRootState> = {
  // 命名空间
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction')
      console.log(payload)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction')
    }
  }
}

export default loginModule
