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
    component: view('eHome')
  },
  {
    path: '/EN/about',
    name: 'enAbout',
    component: view('eAbout')
  },
  {
    path: '/EN/recruitment',
    name: 'enRecruitment',
    component: view('eRecruitment')
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
  },
  {
    path: '/EN/mobile/home',
    name: 'enMHome',
    component: view('eMHome')
  },
  {
    path: '/EN/mobile/about',
    name: 'enMAbout',
    component: view('eMAbout')
  },
  {
    path: '/EN/mobile/recruitment',
    name: 'enMRecruitment',
    component: view('eMRecruitment')
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
