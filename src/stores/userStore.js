import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchActualUser, createNewUser, logIn, logout, seeCurrentUser } from '@/api/userApi'

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref(undefined)
  // Getters
  // Actions
  async function fetchUser() {
    try {
      user.value = await fetchActualUser()
    } catch (error) {
      if (error.code === '401') {
        user.value = null
        return
      }
    }
  }

  /*   async function signUp(username, email, password) {
    user.value = await createNewUser(username, email, password)
  } */

  async function signUp(email, password) {
    try {
      user.value = await createNewUser(email, password)
    } catch (error) {
      console.error(error)
    }
  }

  async function signIn(email, password) {
    try {
      user.value = await logIn(email, password)
    } catch (error) {
      console.error(error)
    }
  }

  async function signOut() {
    try {
      user.value = await logout()
    } catch (error) {
      console.error(error)
    }
  }

  async function getCurrentUser() {
    try {
      user.value = await seeCurrentUser()
    } catch (error) {
      console.error(error)
    }
  }

  async function validateEmail(email) {
    return new Promise((resolve, reject) => {
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!validEmail.test(email)) {
        reject('Por favor ingrese un correo electrónico válido.')
      } else {
        resolve(true)
      }
    })
  }

  return {
    // State
    user,
    // Actions
    fetchUser,
    signUp,
    signIn,
    signOut,
    getCurrentUser,
    validateEmail
  }
})
