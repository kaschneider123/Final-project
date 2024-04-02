import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

/*import { useUserStore } from '@/stores/userStore'*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/TaskView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

/*router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    await getUser(next)
  } else {
    next()
  }
})*/

export default router


