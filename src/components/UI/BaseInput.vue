<script setup lang="ts">
import { ref } from 'vue'

const task = defineModel()
const inputRef = ref<HTMLInputElement | null>(null)
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
