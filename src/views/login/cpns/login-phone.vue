<template>
  <div class="login-phone">
    <el-form label-width="60px" :rules="rules" v-model="phone">
      <!-- prop="name"匹配规则 -->
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="getCode">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="codeBtn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })

    return {
      phone
    }
  }
})
</script>

<style scoped lang="less">
.getCode {
  display: flex;
}
.codeBtn {
  margin-left: 8px;
}
</style>
