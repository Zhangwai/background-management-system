import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/types'

import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  // 命名空间
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        // switch可优化
        switch (pageName) {
          case 'user':
            return state.userList
          case 'role':
            return state.roleList
        }
      }
    }
  },
  actions: {
    // 请求数据

    async getPageListAction({ commit }, payload: any) {
      // console.log(payload)

      const pageName = payload.pageName
      // 根据url的规范程度可以有多种思路，有拼接、switch判断、映射等方法
      // 1.拼接
      // const pageUrl = `${pageName}/list`

      // 2.switch
      let pageUrl = ''
      switch (pageName) {
        case 'user':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
      }

      // 对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      // console.log(pageResult)

      // 保存数据到state中
      const { list, totalCount } = pageResult.data

      switch (pageName) {
        case 'user':
          commit(`changeUserList`, list)
          commit(`changeUserCount`, totalCount)
          break
        case 'role':
          commit(`changeRoleList`, list)
          commit(`changeRoleCount`, totalCount)
          break
      }
    }
  }
}

export default systemModule
