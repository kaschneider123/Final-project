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
    router.push({ name: 'home' })
  } catch (error) {
    console.error(error)
  }
}

const _changeSignType = () => {
  signTypeLogin.value = !signTypeLogin.value
}
</script>

<template>
  <div class="container-img" >
    <!-- <img src="./assets/logo.svg" alt=""> -->
    <!-- Login -->
    <div v-if="signTypeLogin" class="container-logIn">
      <h2>To-Do List</h2>
      <div class="label-one">
        <label for="loginUser">Email:</label>
        <input v-model="loginUser" type="email" placeholder="Email" />

        <label for="loginPassword">Password:</label>
        <input v-model="loginPassword" type="password" placeholder="Password" />
        <button class="btn-login-one" @click="signIn">Log in</button>
        <p>Don't have an account yet?</p>
        <button class="btn-register" @click="_changeSignType">Register</button>
      </div>
    </div>
    <!-- Registration -->
    <div v-else class="container-register">
      <h2>To-Do List</h2>
      <div class="label">
        <label for="loginUser">Email:</label>
        <input v-model="registerEmail" type="email" placeholder="Email" />
        <label for="loginPassword">Password:</label>
        <input v-model="registerPassword" type="password" placeholder="Password" />
      </div>
      <button class="btn-register" @click="register">Register</button>
      <p>Already have an account?</p>
      <button class="btn-login" @click="_changeSignType">Log in</button>
    </div>
  </div>
</template>

<style scoped>
 .container-img { 
 
  padding-top: 20px;
    background-image: url(../assets/imagen1.svg);
  background-repeat: no-repeat;   
/*   background-color: rgba(0, 0, 0, 0.093); */

  background-size: 150px; 
  background-position: left;
 
  
} 

.container-img svg {
  width: 50px;
  height: 50px;
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
  gap: 5px;
}

.btn-login-one {
  width: 200px;
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
  font-size: 13px;
}
.container-logIn {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.container-logIn input {
  width: 200px;
  height: 25px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-radius: 5px solid 0.5;
  font-size: 13px;
}

.container-logIn {
  padding: 20px;
  display: flex;
  align-items: center;
  width: 300px;
  height: 350px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.4);
  font-family: Arial, Helvetica, sans-serif;
}

/*Container Register*----------*/
.container-register label {
  display: flex;
  text-align: left;
  font-size: 13px;
}

.container-register {
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 300px;
  height: 350px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.4);
  font-family: Arial, Helvetica, sans-serif;
}

.container-register .btn-login,
.btn-register {
  width: 200px;
  background-color: #0052cc;
  border: none;
  color: white;
  height: 30px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
}

.container-register input {
  width: 200px;
  height: 25px; /* Hace que los inputs ocupen todo el ancho del contenedor */
  box-sizing: border-box; /* Incluye el padding y border en el ancho total */
  margin-bottom: 10px;
  border-radius: 5px solid 0.5;
  font-size: 13px;
}
</style>
