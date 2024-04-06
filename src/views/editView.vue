<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { onMounted } from 'vue'
import compEditTask from '../components/compEditTask.vue'

const tasksStore = useTasksStore()

onMounted(() => {
  tasksStore.fetchTasks()
})
</script>

<template>
  <section>
    <compEditTask />
  </section>
</template>

<style scoped></style>
