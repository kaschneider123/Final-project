<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
import { validateEmail, validatePassword } from '@/api/utils.js'

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
    await validateEmail(registerEmail.value)
    await validatePassword(registerPassword.value)
    await userStore.signUp(registerEmail.value, registerPassword.value)
    router.push({ name: 'tasks' })
  } catch (error) {
    console.error(error)
    window.alert(error)
  }
}

//Iniciar sesión
const signIn = async () => {
  try {
    await validateEmail(loginUser.value)
    await userStore.signIn(loginUser.value, loginPassword.value)
    router.push({ name: 'home' })
  } catch (error) {
    console.error(error)
    window.alert(error)
  }
}

const _changeSignType = () => {
  signTypeLogin.value = !signTypeLogin.value
}
</script>

<template>
  <div class="container-img">
    <img class="hero-image" src="../assets/2.jpg" alt="" />
    <!-- Login -->
    <div v-if="signTypeLogin" class="container-logIn">
      <h2>Welcome back!</h2>
      <div class="label-one">
        <label for="loginUser">Email:</label>
        <input v-model="loginUser" type="email" placeholder="Email" />
        <label for="loginPassword">Password:</label>
        <input v-model="loginPassword" type="password" placeholder="Password" />
        <button class="btn-login-one" @click="signIn">Log in</button>
        <p>Don't have an account yet?</p>
        <div v-if="errorMessage !== null" class="error-message">{{ errorMessage }}</div>
        <button class="btn-register" @click="_changeSignType">Register</button>
      </div>
    </div>
    <!-- Registration -->
    <div v-else class="container-register">
      <h2>Welcome to Your Task Spot!</h2>
      <div class="label">
        <!-- <label for="loginName">Name</label>
        <input v-model="registerName" type="text" placeholder="Name" /> -->
        <label for="loginUser">Email:</label>
        <input v-model="registerEmail" type="email" placeholder="Email" />
        <label for="loginPassword">Password:</label>
        <input v-model="registerPassword" type="password" placeholder="Password" />
      </div>
      <!-- Mostrar mensaje de error -->
      <div v-if="errorMessage !== null" class="error-message">{{ errorMessage }}</div>
      <button class="btn-register" @click="register">Register</button>
      <p>Already have an account?</p>
      <button class="btn-login" @click="_changeSignType">Log in</button>
    </div>
  </div>
</template>

<style scoped>
.container-logIn h2 {
  margin-bottom: 25px;
}
h2 {
  display: flex;
  max-width: 200px;
  text-align: center;
}
.hero-image {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 40%;
  background-repeat: repeat;
}
.label-one p {
  font-size: 17px;
  text-align: center;
}
.container-register,
.container-login p {
  font-size: 17px;
  text-align: center;
}
h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  color: rgb(0, 0, 129);
  font-weight: bold;
}
.label-one {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.btn-login-one {
  width: 220px;
  background-color: #0052cc;
  border: none;
  color: white;
  height: 30px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
}
btn-login-one:hover {
  background-color: rgb(176, 55, 42);
}
.container-logIn label {
  display: flex;
  text-align: left;
  font-size: 15px;
}
.container-logIn {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.container-logIn input {
  width: 220px;
  height: 25px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-radius: 5px solid 0.5;
  font-size: 15px;
}
.container-logIn {
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 380px;
  height: 420px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.4);
  font-family: Arial, Helvetica, sans-serif;
}
.container-register label {
  display: flex;
  text-align: left;
  font-size: 15px;
}
.container-register {
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 380px;
  height: 420px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.4);
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 100px;
}

.container-register .btn-login,
.btn-login-one,
.btn-register {
  width: 220px;
  background-color: #0052cc;
  border: none;
  color: white;
  height: 35px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  font-size: 16px;
}
.container-register input {
  width: 220px;
  height: 25px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-radius: 5px solid 0.5;
  font-size: 15px;
}
.btn-login-one:hover {
  background-color: rgb(42, 42, 176);
  color: white;
}
.btn-login:hover {
  background-color: rgb(42, 42, 176);
  color: white;
}
.btn-register:hover {
  background-color: rgb(42, 42, 176);
  color: white;
}

@media only screen and (max-width: 510px) {
  .container-register,
  .container-logIn {
    margin-top: 100px;
    display: flex;
    align-items: center;
    max-width: 300px;
    width: 100%;
    height: 400px;
    gap: 8px;
  }
}
</style>
