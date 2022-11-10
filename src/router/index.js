import { auth } from '@/firebase'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // Setting page to require authentication
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    // Setting page to require authentication
    meta : {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Checking if the user is logged and redirecting to the correct route
router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return
  }

  next()
})

export default router
