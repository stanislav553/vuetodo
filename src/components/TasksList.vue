<script setup lang="ts">
import type { Todo, TodoWithoutDate } from '@/types/todoTypes'
import TaskItem from './TaskItem.vue'

const props = defineProps<{
  todoList: Todo[]
}>()

const emit = defineEmits<{
  changeTaskData: [task: TodoWithoutDate]
  remove: [id: number]
}>()
const changeTaskData = (task: TodoWithoutDate) => emit('changeTaskData', task)
</script>

<template>
  <div class="list">
    <TransitionGroup name="fade" tag="div" class="list">
      <TaskItem
        v-for="todoItem in props.todoList"
        @delete="(id) => $emit('remove', id)"
        @changeTaskData="changeTaskData"
        :todoItem
        :key="todoItem.id"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.list {
  height: 100%;
  overflow: auto;
}
</style>
