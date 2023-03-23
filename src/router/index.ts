import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/character/list'
    },
    {
      path: '/character/list',
      name: 'character-list',
      component: () => import('../pages/AngentsView.vue')
    },
    {
      path: '/character/list/:uuid',
      name: 'character-id',
      component: () => import('../pages/AgentDetails.vue')
    }
  ]
})

export default router
