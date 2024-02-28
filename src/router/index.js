// router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: () => import('../pages/home.vue'),
        redirect: '/home/classify',
        children: [
          {
            path: '/home/classify',
            component: () => import('../pages/classify.vue'),
          },
          {
            path: '/home/search',
            component: () => import('../pages/search.vue'),
          },
          {
            path: '/home/playList', 
            component: () => import('../pages/playList.vue'),
          },
          {
            path: '/home/details', 
            component: () => import('../pages/details.vue'),
          },
          {
            path: '/home/list', 
            component: () => import('../pages/list.vue'),
          },
        ],
      },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;