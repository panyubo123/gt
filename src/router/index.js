import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/',
  //   name:'page',
  //   component:()=>import('../views/homepage/homepage')
  // },
  {
    path:'/page',
    name:'page',
    component:()=>import('../views/homepage/homepage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
