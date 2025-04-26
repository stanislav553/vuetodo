<script setup lang="ts">
import type { Todo } from '@/types/todoTypes'
import TaskItem from './TaskItem.vue'

const props = defineProps<{
  todoList: Todo[]
}>()
</script>

<template>
  <div class="list">
    <TaskItem
      v-for="todoItem in props.todoList"
      @delete="$emit('remove', todoItem)"
      @changeTaskData="(task) => $emit('changeTaskData', task)"
      :todoItem
      :key="todoItem.id"
    />
  </div>
</template>

<style scoped lang="scss">
.list {
  height: 100%;
  overflow: auto;
}
</style>
