<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

// Variables de referencia
const signTypeLogin = ref(true)
const loginUser = ref('')
const loginPassword = ref('')
const registerEmail = ref('')
const registerPassword = ref('')
const errorMessage = ref(null)

//registrar un nuevo usuario
const register = async () => {
  try {
    errorMessage.value = null
    await userStore.signUp(registerEmail.value, registerPassword.value)
    router.push({ name: 'tasks' })
  } catch (error) {
    errorMessage.value = error.message
  }
}

//Iniciar sesión
const signIn = async () => {
  try {
    await userStore.signIn(loginUser.value, loginPassword.value)
    router.push({ name: 'tasks' })
  } catch (error) {
    console.error(error)
  }
}

const _changeSignType = () => {
  signTypeLogin.value = !signTypeLogin.value
}
</script>

<template>
  <div>
    <!-- Login -->
    <div v-if="signTypeLogin" class="container-logIn">
      <h2>Log in</h2>
      <label for="loginUser">Email:</label>
      <input v-model="loginUser" type="email" placeholder="Email" />

      <label for="loginPassword">Password:</label>
      <input v-model="loginPassword" type="password" placeholder="Password" />
      <button @click="signIn">Log in</button>
      <p>Don't have an account yet?</p>
      <button @click="_changeSignType">Register</button>
    </div>

    <!-- Registration -->
    <div v-else class="container-register">
      <h2>Register</h2>
      <input v-model="registerEmail" type="email" placeholder="Email" />
      <input v-model="registerPassword" type="password" placeholder="Password" />
      <button @click="register">Register</button>
      <p>Already have an account?</p>
      <button @click="_changeSignType">Log in</button>
    </div>
  </div>
</template>

<style scoped>
.container-logIn {
 display: flex;
 flex-direction: column;
 gap: 5px;
}

.container-register { 
 display: flex;
 flex-direction: column;
 gap: 10px;
}

</style>
