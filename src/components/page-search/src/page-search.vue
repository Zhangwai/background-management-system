<template>
  <div class="page-search">
    <!-- 高级封装组件 -->
    <lx-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh">重置</el-button>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </lx-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LxForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
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
      formData
    }
  }
})
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 30px 20px 0;
}
</style>
