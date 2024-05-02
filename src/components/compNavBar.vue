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
          <!-- <RouterLink to="/about">About</RouterLink> -->
          <RouterLink v-if="!user" to="/login">Login</RouterLink>
          <button v-else @click="logOut()" class="btn-log-out">Log Out</button>
        </div>
        <div class="nav-toggle">
          <button @click="toggleMenu">
            <font-awesome-icon icon="ellipsis-v" class="btn-mobile" />
            <!-- <font-awesome-icon icon="fa-solid fa-bars" size="lg" style="color: #000081;" /> -->
          </button>
        </div>
        <!-- menú desplegable -->
        <div>
          <img class="img-planify" src="../assets/logo-planify.svg" alt="Planify" />
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
.router-link-active {
  background-color: rgba(241, 241, 241, 0.646);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}
.img-planify {
  max-width: 70px;
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 10px;
  margin-left: 30px;
}
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
  height: 65px;
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
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
}

.btn-log-out {
  width: 80px;
  justify-content: center;
  align-content: center;
  border: none;
  font-size: 17px;
  position: absolute;
  right: 0;
  margin-right: 40px;
  padding: 7px;
  color: rgba(70, 70, 70, 0.864);
  border-radius: 8px;
  font-weight: 600px;
  background-color: white;
  cursor: pointer;
}
.btn-log-out:hover {
  background-color: rgba(32, 95, 242, 0.646);
  color: white;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
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
/* nav a.router-link-exact-active {
  color: var(--color-text);
} */
/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */
.navbar a:hover {
  background-color: rgba(32, 95, 242, 0.646);
  color: white;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}
.navbar a {
  display: inline-block;
  padding: 0 2rem;
  border-left: 1px solid var(--color-border);
  margin-left: 20px;
}
nav a:first-of-type {
  border: 0;
}

/***************************************/
@media only screen and (min-width: 768px) {
  .img-planify {
    max-width: 70px;
  }
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
    align-content: center;
  }
}

@media only screen and (max-width: 510px) {
  .btn-mobile {
    color: #0052cc;
    font-size: 22px;
    border: none;
  }

  .img-planify {
    max-width: 70px;
  }
  .nav-toggle {
    margin-left: 340px;
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
    color: #0052cc;
    font-size: 22px;
    position: absolute;
    top: 10px;
    left: 25px;
    justify-content: center;
  }
  .navbar a {
    font-size: 15px;
  }
  .btn-log-out {
    font-size: 15px;
  }
}
</style>
