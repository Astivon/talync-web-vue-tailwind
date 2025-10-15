import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import CreateAccountView from '../views/CreateAccountView.vue'
import PaymentMethodView from '../views/PaymentMethodView.vue'
import PayoutMethodView from '../views/PayoutMethodView.vue'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: AuthView,
    },
    {
      path: '/login',
      name: 'login',
      component: AuthView,
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: CreateAccountView
    },
    {
      path: '/payment-setup',
      name: 'payment-setup',
      component: PaymentMethodView
    },
    {
      path: '/payout-setup',
      name: 'payout-setup',
      component: PayoutMethodView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView
    },
  ],
})

export default router