import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/pages/Home.vue';
//import GenericPageListElements from '../views/pages/GenericPageListElements.vue';
import GenericPageShowContent from '../views/pages/GenericPageShowContent.vue';


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
    path: '/section/:slug',
    name: 'section',
    component: () => import('@/views/pages/GenericPageListElements.vue')
  },
  {
    path: '/section/:subsection/:slug',
    name: 'subsection',
    component: () => import('@/views/pages/GenericPageListElements.vue')
  },
  {
    path: '/content/:slug',
    name: 'content',
    component: GenericPageShowContent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
