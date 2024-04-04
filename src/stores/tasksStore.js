import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  fetchAllTasks,
  createTask,
  deleteSingleTask,
  updateSingleTask,
  isCompleteTask
} from '@/api/tasksApi'
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

  async function updateTask(task) {
    try {
      /* await updateSingleTask(task) */
    } catch (error) {
      console.error(error)
    }
  }

  async function completeTask(taskId) {
    try {
      await isCompleteTask(taskId)
      const taskIndex = tasks.value.findIndex((task) => task.id === taskId)
      if (taskIndex !== -1) {
        tasks.value[taskIndex].is_complete = true //esto es despues de llamar a supabase
      }
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
    updateTask,
    completeTask
  }
})
