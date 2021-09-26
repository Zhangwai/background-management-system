import lxRequest from '../../index'

import { IDataType } from '../../types'

// 获取页面列表数据
export function getPageListData(url: string, queryInfo: any) {
  return lxRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// 删除页面数据 url: /users/id
export function deletePageData(url: string) {
  return lxRequest.delete<IDataType>({
    url: url
  })
}
