import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/pages/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    props: {forceSlug: 'home'},
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    props: {forceSlug: 'search'},
    component: () => import('@/views/pages/Search.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    props: {forceSlug: 'contact'},
    component: () => import('@/views/pages/Contact.vue')
  },
  {
    path: '/about',
    name: 'About',
    props: {forceSlug: 'about'},
    component: () => import('@/views/pages/GenericPageListElements.vue')
  },
  {
    path: '/posts',
    name: 'Posts',
    props: {forceSlug: 'posts'},
    component: () => import('@/views/pages/GenericPageListElements.vue')
  },
  {
    path: '/events',
    name: 'Events',
    props: {forceSlug: 'events'},
    component: () => import('@/views/pages/GenericPageListElements.vue')
  },
  {
    path: '/apps',
    name: 'Apps',
    props: {forceSlug: 'apps'},
    component: () => import('@/views/pages/GenericPageListElements.vue')
  },
  {
    path: '/:slug',
    name: 'content',
    component: () => import('@/views/pages/GenericPageShowContent.vue')
  },
  {
    path: '/:subsection/:slug',
    name: 'section',
    component: () => import('@/views/pages/GenericPageListElements.vue')
  },
  {
    path: '/:section/:subsection/:slug',
    name: 'subsection',
    component: () => import('@/views/pages/GenericPageListElements.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
