<script setup>
import compNavBar from '../components/compNavBar.vue'
import { ref } from 'vue'

const taskData = ref({
  // Aquí proporciona los detalles de la tarea
  title: 'Título de la tarea'
  // Otros detalles de la tarea
})
</script>

<template>
  <section>
    <compNavBar :task="taskData" />
  </section>
</template>

<style scoped></style>
