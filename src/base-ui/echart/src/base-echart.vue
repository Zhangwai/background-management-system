<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
// 使用setup新特性
import { ref, onMounted, defineProps, withDefaults } from 'vue'
import { EChartsOption } from 'echarts'

import useEchart from '../hooks/useEchart'

// defineProps定义props，withDefaults设置默认值
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: EChartsOption
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

// 基于准备好的dom，初始化echarts实例, dom需要高度宽度
const echartDivRef = ref<HTMLElement>()

// 挂载后echartDivRef.value才有值
onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)
  setOptions(props.options)
})
</script>

<style scoped></style>
