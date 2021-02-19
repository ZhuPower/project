import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Recruitment from '../views/Recruitment.vue'
import mHome from '../views/mHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/CN/home'
  },
  {
    path: '/CN/home',
    name: 'cnHome',
    component: Home
  },
  {
    path: '/CN/about',
    name: 'cnAbout',
    component: About
  },
  {
    path: '/CN/recruitment',
    name: 'cnRecruitment',
    component: Recruitment
  },
  {
    path: '/EN/home',
    name: 'enHome',
    component: Home
  },
  {
    path: '/EN/about',
    name: 'enAbout',
    component: About
  },
  {
    path: '/EN/recruitment',
    name: 'enRecruitment',
    component: Recruitment
  },
  {
    path: '/CN/mobile/home',
    name: 'cnMHome',
    component: mHome
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
