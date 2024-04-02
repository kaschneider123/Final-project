import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks, createTask, deleteSingleTask, clearAllTasks } from '@/api/tasksApi'

export const useTasksStore = defineStore('tasks', () => {
  // State
  const tasks = ref([])

  // Actions
  async function fetchTasks() {
    try {
      const data = await fetchAllTasks()
      console.log(data)
      tasks.value = data
    } catch (error) {
      console.error(error)
    }
  }

  async function createNewTask(task) {
    try {
      await createTask(task)
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteTask(task) {
    try {
      await deleteSingleTask(task)
      await fetchTasks() 
    } catch (error) {
      console.error(error)
    }
  }

  async function clearTasks() {
    try {
      await clearAllTasks() // Borramos todas las tareas de la base de datos
      tasks.value.splice(0, tasks.value.length) // Vaciamos el array de tareas localmente
    } catch (error) {
      console.error(error)
    }
  }

  return {
    // State
    tasks,
    // Actions
    fetchTasks,
    createNewTask,
    deleteTask,
    clearTasks,
  }
})
