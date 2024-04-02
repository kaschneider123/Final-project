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

//Eliminamos la lista
const _clearTasks = async () => {
  await tasksStore.clearTasks()
}

onMounted(() => {
  tasksStore.fetchTasks()
})
</script>

<template>
  <section>
    <h1>View home</h1>
    <span>Task: {{ tasks.length }}</span>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <font-awesome-icon icon="trash" @click="_deleteTask(task.id)" />
      </li>
    </ul>

    <div>
      Task
      <label>
        <input type="text" v-model="taskTitle" />
      </label>
      <button @click="_addTask">Add Task</button>
      <button @click="_clearTasks">Clear List</button>
    </div>
  </section>
</template>

<style scoped></style>
