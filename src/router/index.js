import App from '../App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from "@/views/Login.vue"
import Refresh from "@/views/Refresh"
import Poster from "@/views/Poster"
import a404 from "@/views/404"
import Download from "@/views/Download"
// import Lunr from "@/views/Lunr"
// import AweDnd from "@/views/AweDnd";
import Array from "@/views/Array";
import Hook from "@/views/Hook";
import Set from "@/views/Set";
import Map from "@/views/Map";
import Cascader from "@/views/Cascader";
import Sort from "@/views/Sort";

Vue.use(VueRouter)
//路由，父子嵌套的话，得有对应的router-view来展示内容
const routes = [{
    path: '/',
    name: 'hook',
    component: Home,
    redirect: '/hook',
    children: [{
      path: 'hook',
      component: Hook
    }]
    //懒加载方式，只有到了该页面的时候才会加载相关资源
    // component: resolve => require(['./page/linkParamsQuestion.vue'], resolve)
  },
  {
    path: "/login",
    name: 'login',
    component: Home,
    redirect: '/login',
    children: [{
      path:'/login',
      component: Login
    }]
  },
  {
    path: "/set",
    name: 'set',
    component: Home,
    redirect: '/set',
    children: [{
      path:'/set',
      component: Set
    }]
  },
  {
    path: "/sort",
    name: 'sort',
    component: Home,
    redirect: '/sort',
    children: [{
      path:'/sort',
      component: Sort
    }]
  },
  {
    path: "/map",
    name: 'map',
    component: Home,
    redirect: '/map',
    children: [{
      path:'/map',
      component: Map
    }]
  },
  {
    path: "/Cascader",
    name: 'Cascader',
    component: Home,
    redirect: '/Cascader',
    children: [{
      path:'/Cascader',
      component: Cascader
    }]
  },
  {
    path: "/poster/:id",
    name: "poster",
    component: Poster
  },
  {
    path: "/array",
    name: "Array",
    component: Array
  },
  {
    path: "/refresh",
    name: "refresh",
    component: Refresh
  },
  {
    path: "/download",
    name: "download",
    component: Download
  },
  //对于任何找不到的路由，统一返回404页面
  {
    path: "*",
    component: a404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  //页面跳转 滚动的位置
  // scrollBehavior(to, from, savedPosition){
  //   console.log(to, from, savedPosition)
  //   return{x: 0, y: 0} //路由新页面滚动到顶部，有锚点可以跳转
  // }
})

//该方法必须在new Vue之前使用，vue.use的时候已经初始化了，hash值没有发生变化
router.beforeEach((to, from, next) => {
  // if(!store.state.isLoign && to.name != "Login"){
  //   console.log("未登录")
  //   next("/login")
  // }else{
  //   next()
  // }

  next()
})

// router.beforeResolve((to, from, next) => {
//   console.log(to, from)
//   next();
// })

// router.afterEach((to, from) => {
//   console.log(to, from)
// })


export default router