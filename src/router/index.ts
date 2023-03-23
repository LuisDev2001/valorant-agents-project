import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/agent/list'
    },
    {
      path: '/agent/list',
      name: 'agent-list',
      component: () => import('../pages/AngentsView.vue')
    },
    {
      path: '/agent/:uuid',
      name: 'agent-id',
      component: () => import('../pages/AgentDetails.vue')
    }
  ]
})

export default router
