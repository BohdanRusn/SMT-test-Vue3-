import Main from '@/pages/Main'
import { createRouter, createWebHistory } from 'vue-router'
import PostsPage from '@/pages/PostsPage'
import About from '@/pages/About'
import Postpage from '@/pages/Postpage'
const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostsPage
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/posts/:id',
    component: Postpage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
