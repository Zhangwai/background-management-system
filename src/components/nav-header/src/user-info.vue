<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar size="medium" :src="circleUrl"></el-avatar>
        <span class="user-name">{{ userName }}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-circle-close" @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item divided icon="el-icon-user"
            >用户信息</el-dropdown-item
          >
          <el-dropdown-item divided icon="el-icon-setting"
            >系统管理</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import localCache from '@/utils/cache'

import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const store = useStore()
    const userName = computed(() => store.state.loginModule.userInfo.name)
    const circleUrl =
      'https://portrait.gitee.com/uploads/avatars/user/2793/8380595_liux1118_1628671708.png!avatar200'

    // 退出登录
    const router = useRouter()
    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }

    return {
      userName,
      circleUrl,
      handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;

  .user-name {
    margin-left: 15px;
    font-size: 16px;
  }
}
.el-icon-arrow-down {
  font-size: 16px;
}
</style>
