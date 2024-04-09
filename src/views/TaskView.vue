<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { onMounted } from 'vue'
import compCardTask from '../components/compCardTask.vue'
import compNavBar from '../components/compNavBar.vue'


const tasksStore = useTasksStore()

onMounted(() => {
  tasksStore.fetchTasks()
})
</script>

<template>
  <section>
    <compNavBar />
    <compCardTask />
    <!-- <compEditTask /> -->
  </section>
</template>

<style scoped></style>
