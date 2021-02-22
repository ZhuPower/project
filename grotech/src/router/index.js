import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/CN/home'
  },
  {
    path: '/CN/home',
    name: 'cnHome',
    component: view('Home')
  },
  {
    path: '/CN/about',
    name: 'cnAbout',
    component: view('About')
  },
  {
    path: '/CN/recruitment',
    name: 'cnRecruitment',
    component: view('Recruitment')
  },
  {
    path: '/EN/home',
    name: 'enHome',
    component: view('Home')
  },
  {
    path: '/EN/about',
    name: 'enAbout',
    component: view('About')
  },
  {
    path: '/EN/recruitment',
    name: 'enRecruitment',
    component: view('Recruitment')
  },
  {
    path: '/CN/mobile/home',
    name: 'cnMHome',
    component: view('mHome')
  },
  {
    path: '/CN/mobile/about',
    name: 'cnMAbout',
    component: view('mAbout')
  },
  {
    path: '/CN/mobile/recruitment',
    name: 'cnMRecruitment',
    component: view('mRecruitment')
  }
]

function view(name) {
  return resolve => require(['@/views/' + name], resolve);
}

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
