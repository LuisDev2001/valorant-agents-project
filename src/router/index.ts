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
      component: () => import('../pages/CharactersView.vue')
    },
    {
      path: '/character/:id',
      name: 'character-id',
      component: () => import('../pages/CharacterDetails.vue')
    }
  ]
})

export default router
