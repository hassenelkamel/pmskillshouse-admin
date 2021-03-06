import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Navbar from '@/components/Navbar'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import HomePage from '@/components/HomePage'
import RegisterTrainer from '@/components/RegisterTrainer'
import Registration from '@/components/admin/Registration'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/',
      name: 'navbar',
      component: Navbar
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/home/trainer',
      name: 'trainer',
      component: RegisterTrainer
    },
    {
      path: '/home/trainer/registration',
      name: 'trainer-registration',
      component: Registration
    }
  ]
})
