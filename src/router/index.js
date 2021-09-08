import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/user/:benutzername",
    name:"user",
    component:()=>import('../views/User.vue'),
    children:[
      {
        path:"posts",
        name:"post",
       
        component:()=> import("../views/User/Post.vue")
      },
      {
        path:"profile",
        name:"profile",
        component:()=> import ("../views/User/Profile.vue")        
      },
      {
        path:"stories",
        name:"stories",
        component:()=> import("../views/User/Stories.vue")
      }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
