<template>
  <div class="user">
    <!-- 高级封装组件 -->
    <lx-form v-bind="searchFormConfig" v-model="formData" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LxForm from '@/base-ui/form'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    LxForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      status: '',
      createTime: ''
    })

    return {
      searchFormConfig,
      formData
    }
  }
})
</script>

<style scoped></style>
