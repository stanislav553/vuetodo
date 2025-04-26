<script setup lang="ts">
import type { Todo } from '@/types/todoTypes'
import BaseButton from './UI/BaseButton.vue'
import { ref } from 'vue'
import BaseInput from './UI/BaseInput.vue'

const props = defineProps<{
  todoItem: Todo
}>()

const editTask = ref(false)
const newNameTask = ref(props.todoItem.name)
const newDescriptionTask = ref(props.todoItem.description)

const toggleEditMode = () => {
  editTask.value = !editTask.value
  newNameTask.value = props.todoItem.name
  newDescriptionTask.value = props.todoItem.description
}

const emit = defineEmits<{
  (e: 'changeTaskData', payload: Todo): void
  (e: 'delete', payload: Todo): void
}>()

const saveTask = () => {
  emit('changeTaskData', {
    id: props.todoItem.id,
    description: newDescriptionTask.value,
    name: newNameTask.value,
  })

  editTask.value = false
}
</script>

<template>
  <div class="item">
    <div v-if="editTask" class="item__edit-form">
      <div class="item__inputs">
        <BaseInput v-model="newNameTask" />
        <BaseInput v-model="newDescriptionTask" />
      </div>
      <div class="item__edit-buttons">
        <BaseButton @click="saveTask">Save</BaseButton>

        <BaseButton @click="toggleEditMode">Cancel</BaseButton>
      </div>
    </div>

    <div v-else class="item__content">
      <div class="item__info">
        <h3 class="item__title">{{ props.todoItem.name }}</h3>
        <p class="item__description">{{ props.todoItem.description }}</p>
      </div>

      <div class="item__actions">
        <BaseButton @click="toggleEditMode">Edit</BaseButton>
        <BaseButton @click="$emit('delete', props.todoItem)">Delete</BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  margin-bottom: 20px;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
  }

  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-size: 30px;
    word-break: break-word;
    margin: 0;
  }

  &__description {
    font-size: 25px;
    word-break: break-word;
    margin: 0;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__edit-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__edit-buttons {
    display: flex;
    gap: 20px;
  }
}
</style>
