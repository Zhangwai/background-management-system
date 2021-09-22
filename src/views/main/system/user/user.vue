<template>
  <div class="user">
    <!-- 高级封装组件 -->
    <lx-form v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LxForm from '@/base-ui/form'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    LxForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
