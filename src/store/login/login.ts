import { Module } from 'vuex'

import { accountLoginRequest } from '@/service/login/login'
import { IAccount } from '@/service/login/type'

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
  mutations: {
    // 保存token
    changeToken(state, token: string) {
      state.token = token
    }
  },
  actions: {
    // { commit } 是从content中解构出来的
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
      const { id, token } = loginResult.data
      commit('changeToken', token)
    }
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('执行phoneLoginAction')
    // }
  }
}

export default loginModule
