// 配置文件
import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'password',
      label: '用户密码',
      placeholder: '请输入密码',
      isHidden: false //默认不隐藏密码
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'role',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择用户角色',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      field: 'enable',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择用户部门',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
}