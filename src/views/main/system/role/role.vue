<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :contentTableConfig="contentTableConfig" pageName="role" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageContent from '@/components/page-content'
import PageSearch from '@/components/page-search'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    pageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
