import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks, createTask, deleteSingleTask, updateSingleTask } from '@/api/tasksApi'
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

  async function createNewTask(title, description) {
    const userStore = useUserStore()
    try {
      const newTask = await createTask({
        title,
        user_id: userStore.user.id,
        description
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
      const updatedTask = await updateSingleTask(task)

      const taskIndex = tasks.value.findIndex((t) => t.id === updatedTask.id)
      if (taskIndex !== -1) {
        tasks.value[taskIndex] = updatedTask
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
    updateTask
  }
})
