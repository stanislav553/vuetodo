<script setup lang="ts">
import type { Todo } from '@/types/todoTypes'
import BaseButton from './UI/BaseButton.vue'

const props = defineProps<{
  todoItem: Todo
}>()
</script>

<template>
  <div class="item">
    <div>
      <h3 class="item-title">{{ props.todoItem.name }}</h3>
      <p class="item-text">{{ props.todoItem.description }}</p>
    </div>
    <BaseButton>X</BaseButton>
  </div>
</template>

<style scoped lang="scss">
.item {
  margin-bottom: 20px;
  border-radius: 20px;
  border: 1px solid #000;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: start;
  &-title {
    font-size: 30px;
    margin: 0;
  }
  &-text {
    margin: 0;

    font-size: 25px;
  }
}
</style>
