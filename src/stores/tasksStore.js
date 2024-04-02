import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks, createTask, deleteSingleTask, clearAllTasks } from '@/api/tasksApi'
import { useUserStore } from '@/stores/userStore'

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
    const userStore = useUserStore()
    try {
      const newTask = await createTask({
        title: task,
        user_id: userStore.user.id
      })

      tasks.value.push(newTask)
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteTask(taskId) {
    try {
      await deleteSingleTask(taskId)
      tasks.value = tasks.value.filter((task) => taskId !== task.id)
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
    clearTasks
  }
})
