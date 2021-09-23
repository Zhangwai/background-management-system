import lxRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return lxRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
