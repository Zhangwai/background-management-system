<template>
  <div class="page-search">
    <!-- 高级封装组件 -->
    <lx-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick"
            >重置</el-button
          >
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
  setup(props) {
    // 双向绑定的属性应该是由配置文件的field来决定的
    // 1.优化一：formData中的属性应该动态决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    // item拿到的是一个个对象
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)
    // 这是之前有所欠缺的写法
    // const formData = ref({
    //   id: '',
    //   name: '',
    //   status: '',
    //   createTime: ''
    // })

    // 2.优化二：重置按钮
    const handleResetClick = () => {
      // formData.value = formOriginData
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
    }

    return {
      formData,
      handleResetClick
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
