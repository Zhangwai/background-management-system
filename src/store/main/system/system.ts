import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/types'

import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  // 命名空间
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        // 优化
        return (state as any)[`${pageName}List`]
        // switch可优化
        // switch (pageName) {
        //   case 'users':
        //     return state.usersList
        //   case 'role':
        //     return state.roleList
        // }
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        // 优化
        return (state as any)[`${pageName}Count`]
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
      const pageUrl = `${pageName}/list`

      // 2.switch
      // let pageUrl = ''
      // switch (pageName) {
      //   case 'users':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      // }

      // 对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      // console.log(pageResult)

      // 保存数据到state中
      const { list, totalCount } = pageResult.data

      // 转string 会有提示，不转也可以
      const changePageName =
        (pageName.slice(0, 1) as string).toUpperCase() + pageName.slice(1)

      // 优化
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)

      // switch (pageName) {
      //   case 'users':
      //     commit(`changeUsersList`, list)
      //     commit(`changeUsersCount`, totalCount)
      //     break
      //   case 'role':
      //     commit(`changeRoleList`, list)
      //     commit(`changeRoleCount`, totalCount)
      //     break
      // }
    }
  }
}

export default systemModule
