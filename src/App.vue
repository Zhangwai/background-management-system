<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 按需引用element-plus
// import { ElButton } from 'element-plus'
// import 'element-plus/theme-chalk/base.css'
// import 'element-plus/theme-chalk/el-button.css'

export default defineComponent({
  name: 'App'
  // components: {
  //   ElButton
  // }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
