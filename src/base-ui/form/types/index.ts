type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: IFormType
  label: string
  rule?: any[]
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

// 将属性合并到一起
export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemStyle: any
}
