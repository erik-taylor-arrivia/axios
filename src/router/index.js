import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Get from '../views/Get.vue'
import Post from '../views/Post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/get',
    name: 'Get',
    component: Get
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  }
]

const router = new VueRouter({
  routes
})

export default router
