<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const tasksStore = useTasksStore()
const { tasks } = storeToRefs(tasksStore)

const taskTitle = ref('')

//Agregamos una tarea
const _addTask = async () => {
  const task = {
    user_id: 'f2916481-8e5e-486f-ad54-7a29c9b9d8b8',
    title: taskTitle.value,
    is_complete: false
  }
  await tasksStore.createNewTask(task)
  tasksStore.fetchTasks()
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
    <h1>Home View!</h1>
    <span> tasks: {{ tasks.length }}</span>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
      </li>
    </ul>

    <div>
      Task title:
      <label>
        <input type="text" v-model="taskTitle" />
      </label>
    </div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <font-awesome-icon icon="trash" @click="_deleteTask(task.id)" />
      </li>
      <br />
      <br />
      <button @click="_addTask">Add Tasks</button>
      <button @click="_clearTasks">Clear List</button>
    </ul>
  </section>
</template>

<style scoped></style>
