<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
// 使用setup新特性
import { ref, onMounted, defineProps, withDefaults } from 'vue'
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'

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
  // 可传三个参数(dom, theme, 渲染器)
  // (echartDivRef.value!, 'light', { renderer: 'svg/canvas' })
  const echartInstance = echarts.init(echartDivRef.value!)
  // 指定图表的配置项和数据

  // 使用刚指定的配置项和数据显示图表
  echartInstance.setOption(props.options)
})
</script>

<style scoped></style>
