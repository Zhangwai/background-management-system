<template>
  <div class="user">
    <div class="search">
      <el-form label-width="100px">
        <!-- el-row 一行 span分24等分 el-col 一列 -->
        <el-row>
          <el-col :span="8">
            <el-form-item label="id">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户名">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="真实姓名">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="电话号码">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="状态">
              <el-select style="width: 100%">
                <el-option>工作</el-option>
                <el-option>休假</el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="创建时间">
              <el-date-picker style="width: 50%">
                <el-option>工作</el-option>
                <el-option>休假</el-option>
              </el-date-picker>
              <el-date-picker style="width: 50%">
                <el-option>工作</el-option>
                <el-option>休假</el-option>
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-row>
          <el-col :span="8">
            <el-form-item label="电话号码">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row> -->
      </el-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'user',
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
