import { ILoginState } from './login/types'
import { ISystemState } from './main/system/types'

// 根模块类型
export interface IRootState {
  name: string
  age: number
}

// setup中使用useStore技巧
export interface IRootWithModule {
  loginModule: ILoginState
  systemModule: ISystemState
}

export type IStoreType = IRootState & IRootWithModule
