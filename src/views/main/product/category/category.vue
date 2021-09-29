<template>
  <div class="category">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    />
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="category"
      ref="pageContentRef"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageContent from '@/components/page-content'
import pageSearch from '@/components/page-search'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/usePageSearch'

export default defineComponent({
  name: 'category',
  components: {
    pageSearch,
    PageContent
  },
  setup() {
    // 重置、搜索的hooks
    const [pageContentRef, handleResetClick, handleSearchClick] =
      usePageSearch()
    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleResetClick,
      handleSearchClick
    }
  }
})
</script>

<style scoped></style>
