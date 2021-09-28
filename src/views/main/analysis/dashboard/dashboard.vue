<template>
  <div class="dashboard"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const store = useStore()
    // 发起网络请求
    store.dispatch('dashboardModule/getDashboardDataAction')

    return {}
  }
})
</script>

<style scoped></style>
