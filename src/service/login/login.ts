import lxRequent from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

// 枚举
enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return lxRequent.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
