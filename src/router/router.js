import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Cate = () => import('../views/cate/Cate')
const Profile = () => import('../views/profile/Profile')
const Shop = () => import('../views/shop/Shop')

const  routes =[
  { path: '', redirect:'/home'},
  { path: '/home', component:Home},
  { path: '/category', component:Cate},
  { path: '/profile', component:Profile},
  { path: '/shopcart', component:Shop},
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router


