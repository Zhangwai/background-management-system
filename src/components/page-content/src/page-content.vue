<template>
  <div class="page-content">
    <lx-table :listData="listData" v-bind="contentTableConfig">
      <!-- 1.hander中的插槽 -->
      <template #handerHandler>
        <el-button size="medium" icon="el-icon-refresh">刷新</el-button>
        <el-button size="medium" type="primary" @click="handleNewUser"
          >新建用户</el-button
        >
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
          plain
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <!-- 时间格式化 -->
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="hander-btns">
          <el-button size="mini" type="text" icon="el-icon-edit"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            style="color: red"
            >删除</el-button
          >
        </div>
      </template>
    </lx-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

// 自己的useStore
import { useStore } from '@/store'

import LxTable from '@/base-ui/table'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    LxTable
  },
  setup(props) {
    // 网络请求
    const store = useStore()
    store.dispatch('systemModule/getPageListAction', {
      pageName: props.pageName,
      // 查询条件
      queryInfo: {
        offset: 0, //偏移量
        size: 10 // 一个页面展示10条数据
      }
    })

    const listData = computed(() =>
      store.getters[`systemModule/pageListData`](props.pageName)
    )
    const userCount = computed(() => store.state.systemModule.usersCount)

    return {
      listData,
      userCount
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
