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

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header>
    <div>
      <nav class="navbar">
        <div class="container">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/tasks">Tasks</RouterLink>
          <RouterLink v-if="!user" to="/login">Login</RouterLink>
          <button v-else @click="logOut()" class="btn-log-out">Log Out</button>
        </div>
        <div class="nav-toggle">
          <button @click="toggleMenu">
            <font-awesome-icon icon="ellipsis-v" class="btn-mobile" />
          </button>
        </div>
        <!-- menú desplegable -->
        <div>
          <h3 class="title-mobile">To Do list</h3>
          <ul class="nav-menu" :class="{ 'show-menu': isMenuOpen }">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/tasks">Tasks</RouterLink></li>
            <li v-if="!user"><RouterLink to="/login">Login</RouterLink></li>
            <li v-else><button @click="logOut()" class="btn-log-out">Log Out</button></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.title-mobile {
  display: none !important;
}
.nav-toggle {
  display: none;
}
.nav-menu {
  display: none;
}
.container {
  display: flex;
  gap: 10px;
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
  font-size: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
}

.btn-log-out {
  justify-content: center;
  align-content: center;
  border: none;
  background-color: rgba(255, 255, 255, 0.998);
  font-size: 15px;
  position: absolute;
  right: 0;
  margin-right: 40px;
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
  padding: 0 2rem;
  border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
  border: 0;
}

/***************************************/
@media only screen and (min-width: 768px) {
  .title-mobile {
    display: none;
  }
  .nav-menu {
    display: none;
  }
  .show-menu {
    display: none;
  }
  .nav-toggle {
    display: none;
  }
  .container {
    display: block;
  }
  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px 0;
  }
  .btn-log-out {
    justify-content: center;
    align-content: center;
    border: none;
    background-color: rgba(255, 255, 255, 0.998);
    font-size: 15px;
    margin-right: 40px;
    padding-top: 8px;
    color: rgb(201, 0, 0);
    border-radius: 5px;
    font-weight: bold;
  }
}

@media only screen and (max-width: 510px) {
  .nav-toggle {
    margin-left: 300px;
  }
  .nav-menu {
    display: none;
  }
  .show-menu {
    display: block;
  }
  .nav-toggle {
    display: block;
  }
  .container {
    display: none;
  }
  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px 0;
  }
  .nav-toggle {
    display: block;
  }
  .title-mobile {
    display: block !important;
  }
  .title-mobile {
    color: rgb(0, 0, 129);
    font-size: 25px;
    position: absolute;
    top: 10px;
    left: 15px;
    justify-content: center;
  }
}
</style>
