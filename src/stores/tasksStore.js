import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks, createTask, deleteSingleTask } from '@/api/tasksApi'

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
      await fetchTasks() // Actualizar la lista de tareas después de la eliminación
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

  }
})
