import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FAQ from '../views/FAQ.vue'
import Store_Location from '../views/Store_Location.vue'
import Blog from '../views/Blog.vue'
import event from '../components/blog/event.vue'
import main from '../components/blog/main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/Store_Location',
    name: 'Store_Location',
    component: Store_Location
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog,
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'event',
        component: event
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'main',
        component: main
      },
    ]

  },
]

const router = new VueRouter({
  routes
})

export default router
