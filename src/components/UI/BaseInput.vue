<script setup lang="ts">
import { useTemplateRef } from 'vue'

const task = defineModel()
const inputRef = useTemplateRef<HTMLInputElement>('inputRef')

defineExpose({
  inputRef,
})
</script>

<template>
  <input class="input" type="text" ref="inputRef" v-model="task" />
</template>

<style scoped lang="scss">
.input {
  height: 30px;
  width: 300px;
}
</style>
