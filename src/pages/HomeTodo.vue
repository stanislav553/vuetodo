<script setup lang="ts">
import TasksList from '@/components/TasksList.vue'
import TodoForm from '@/components/TodoForm.vue'
import type { Todo } from '@/types/todoTypes'
import { ref } from 'vue'

const todoList = ref<Todo[]>([
  { id: 1, name: 'Task1', description: 'description1' },
  { id: 2, name: 'Task2', description: 'description2' },
  { id: 3, name: 'Task3', description: 'description3' },
])

const addTask = (task: Todo) => {
  todoList.value.push(task)
}
</script>

<template>
  <div class="todo">
    <div class="todo-content">
      <h1 class="todo-title">Список дел</h1>
      <TodoForm @addTask="addTask" />
      <TasksList :todoList />
    </div>
  </div>
</template>

<style scoped lang="scss">
.todo {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  &-content {
    max-width: 800px;
    width: 100%;
    border-radius: 20px;
    padding: 30px 20px;
    border: 2px solid hwb(0 30% 26%);
    height: 90vh;
    overflow: hidden;
    text-align: center;
  }
  &-title {
    font-size: 68px;
  }
}
</style>
