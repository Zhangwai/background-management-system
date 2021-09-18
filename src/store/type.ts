import { ILoginState } from './login/type'

// 根模块类型
export interface IRootState {
  name: string
  age: number
}

// setup中使用useStore技巧
export interface IRootWithModule {
  loginModule: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
