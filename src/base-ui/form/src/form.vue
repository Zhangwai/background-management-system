<template>
  <div class="lx-form">
    <el-form label-width="100px">
      <!-- el-row 一行 span分24等分 el-col 一列 -->
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col :span="8">
            <el-form-item :label="item.label">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-bind="item.otherOptions"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    v-bind="item.otherOptions"
                    >{{ option.title }}
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  // 从父级传入参数
  props: {
    formItems: {
      // 为确保传入的数组是一个对象类型数组，把Array 当作 PropType，PropType接收一个泛型
      type: Array as PropType<IFormItem[]>,
      // 如果默认值是一个对象或者数组，需要写成一个函数
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
