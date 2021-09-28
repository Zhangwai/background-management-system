<template>
  <div class="dashboard">
    <!-- 10px的间距 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <lx-card title="分类商品数量(饼图)"></lx-card>
      </el-col>
      <el-col :span="10">
        <lx-card title="不同城市商品销量"></lx-card>
      </el-col>
      <el-col :span="7">
        <lx-card title="分类商品数量(玫瑰图)"></lx-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <lx-card title="分类商品的销量"></lx-card>
      </el-col>
      <el-col :span="12">
        <lx-card title="分类商品的收藏">
          <base-echart :options="options" />
        </lx-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import LxCard from '@/base-ui/card'
import BaseEchart from '@/base-ui/echart'

export default defineComponent({
  name: 'dashboard',
  components: {
    LxCard,
    BaseEchart
  },
  setup() {
    const store = useStore()
    // 发起网络请求
    store.dispatch('dashboardModule/getDashboardDataAction')

    const options = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    }

    return {
      options
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
