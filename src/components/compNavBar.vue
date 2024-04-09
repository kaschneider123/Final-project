<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
const router = useRouter()

const logOut = async () => {
  await userStore.signOut()
  router.push({ name: 'login' })
}

const isMenuOpen = ref(false)

// Función para alternar la visibilidad del menú
/* const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
} */
</script>

<template>
    <header>
      <div>
        <nav class="navbar">
          <div class="container">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/tasks">Tasks</RouterLink>
           <!--  <RouterLink to="/about">About</RouterLink> -->
            <RouterLink v-if="!user" to="/login">Login</RouterLink>
            <button v-else @click="logOut()" class="btn-log-out">Log Out</button>
            <!-- <button @click="toggleMenu" class="nav-toggle">
              <i class="fas fa-ellipsis-v"></i>
            </button> -->
          </div>
          <!-- menú desplegable -->
          <ul class="nav-menu" :class="{ open: isMenuOpen }">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/tasks">Tasks</RouterLink></li>
            <!-- <li><RouterLink to="/about">About</RouterLink></li> -->
            <li v-if="!user"><RouterLink to="/login">Login</RouterLink></li>
            <li v-else><button @click="logOut()" class="btn-log-out">Log Out</button></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>

<style scoped>

.nav-menu {
  display: none; 
  position: absolute;
  top: 50px; 
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 9; 
}

.container {
  display: flex;
}

.navbar {
  background-color: white;
  opacity: 90%;
  height: 52px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
}

.btn-log-out {
  display: flex;
  justify-content: center;
  align-content: center;
  border: none;
  background-color: rgba(255, 255, 255, 0.998);
  font-size: 15px;   
  position: absolute;
  right: 0;
  margin-right:40px ; 
  padding-top: 8px;
  color: rgb(201, 0, 0);
  border-radius: 5px;
  font-weight: bold;
 
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


/***************************************/
@media only screen and (max-width: 480px) {

  .nav-menu { 
  position: absolute;
  top: 50px; 
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 9; 
}


  .nav-menu.open {
    display: block;
  }
}

@media only screen and (max-width: 768px) {
  .nav-menu {
    display: block; 
  }

  .nav-menu {
    position: static;
    display: none; 
  }

  .nav-menu.open {
    display: block;
  }
}
</style>


