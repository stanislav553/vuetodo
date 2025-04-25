<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './UI/BaseButton.vue'
import BaseInput from './UI/BaseInput.vue'
import type { Todo } from '@/types/todoTypes'

const emit = defineEmits<{
  addTask: [res: Todo]
}>()

const name = ref('')
const description = ref('')

const nameInputRef = ref<HTMLElement | null>(null)

const addNewTask = () => {
  if (!name.value.length || !description.value.length) {
    if (!name.value.length) {
      nameInputRef.value.focus()
    }
  } else {
    const result: Todo = {
      id: Date.now(),
      name: name.value,
      description: description.value,
    }
    emit('addTask', result)
    name.value = ''
    description.value = ''
  }
}
</script>

<template>
  <form class="form-todo" @submit.prevent="addNewTask">
    <h2 class="form-todo-title">Новая задача</h2>

    <div class="form-todo-content">
      <div class="form-todo-top">Имя задачи: <BaseInput ref="nameInputRef" v-model="name" /></div>
      <div class="form-todo-bottom">Определение: <BaseInput v-model="description" /></div>
    </div>
    <BaseButton type="submit">Создать задачу</BaseButton>
  </form>
</template>

<style scoped lang="scss">
.form-todo {
  margin-bottom: 20px;
  &-title {
    font-size: 40px;
  }

  &-content {
    display: flex;
    flex-direction: column;
    align-items: end;
    padding-right: 27%;
  }

  &-top {
    font-size: 30px;
    margin-bottom: 20px;
  }
  &-bottom {
    font-size: 30px;
    margin-bottom: 20px;
  }
}
</style>
