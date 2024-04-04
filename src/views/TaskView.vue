<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const tasksStore = useTasksStore()
const { tasks } = storeToRefs(tasksStore)

const taskTitle = ref('')

//Agregamos una tarea
const _addTask = async () => {
  await tasksStore.createNewTask(taskTitle.value)
  taskTitle.value = ''
}

//Eliminamos una tarea
const _deleteTask = async (taskId) => {
  await tasksStore.deleteTask(taskId)
}

//Marcamos una tarea lista
const _isComplete = async (taskId) => {
  await tasksStore.completeTask(taskId)
}

// editamos la tarea
const _editTask = async (task) => {
  try {
    await tasksStore.updateTask(task)
    console.log('Tarea actualizada !!')
  } catch (error) {
    console.error('Error al actualizar la tarea....', error)
  }
}

onMounted(() => {
  tasksStore.fetchTasks()
})
</script>

<template>
  <section>
    <h1>Tasks view</h1>
    <span>Task: {{ tasks.length }}</span>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="text" v-model="task.title" />
        <font-awesome-icon icon="trash" @click="_deleteTask(task.id)" />
        <font-awesome-icon icon="fa-pen-to-square" @click="_editTask(task)" />
        <input type="checkbox" v-model="task.is_complete" @change="_isComplete(task.id)" />
      </li>
    </ul>
    <div>
      <label>
        <input type="text" v-model="taskTitle" />
      </label>
      <button @click="_addTask">Add Task</button>
    </div>
  </section>
</template>

<style scoped></style>
