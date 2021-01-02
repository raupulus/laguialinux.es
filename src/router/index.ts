import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/pages/Home.vue';
import Posts from '@/views/pages/Posts.vue';
import Pages from '@/views/pages/Pages.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/pages',
    name: 'Pages',
    component: Pages
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
