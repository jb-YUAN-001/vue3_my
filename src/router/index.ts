import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: { title: '关于我' }
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('@/views/Works.vue'),
    meta: { title: '作品集' }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/Blog.vue'),
    meta: { title: '小站' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: { title: '联系' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局前置路由守卫
router.beforeEach((to, _from, next) => {
  document.title = to.meta.title as string || '个人小站';
  next();
});

export default router