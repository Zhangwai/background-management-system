<template>
  <div class="dashboard">
    <!-- 10px的间距 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <lx-card title="分类商品数量(饼图)" />
      </el-col>
      <el-col :span="10">
        <lx-card title="不同城市商品销量" />
      </el-col>
      <el-col :span="7">
        <lx-card title="分类商品数量(玫瑰图)" />
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <lx-card title="分类商品的销量" />
      </el-col>
      <el-col :span="12">
        <lx-card title="分类商品的收藏" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import LxCard from '@/base-ui/card'

export default defineComponent({
  name: 'dashboard',
  components: {
    LxCard
  },
  setup() {
    const store = useStore()
    // 发起网络请求
    store.dispatch('dashboardModule/getDashboardDataAction')

    return {}
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
