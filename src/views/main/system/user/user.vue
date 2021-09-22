<template>
  <div class="user">
    <div class="search">
      <!-- 高级封装组件 -->
      <lx-form :formItems="formItems" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LxForm, { IFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    LxForm
  },
  setup() {
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: 'id',
        placeholder: '请输入id'
      },
      {
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名'
      },
      {
        type: 'select',
        label: '状态',
        placeholder: '请选择状态',
        options: [
          { title: '工作', value: '工作' },
          { title: '休假', value: '休假' }
        ]
      },
      {
        type: 'datepicker',
        label: '创建时间',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          // 时间选择范围
          type: 'daterange'
        }
      }
    ]
    return {
      formItems
    }
  }
})
</script>

<style scoped></style>
