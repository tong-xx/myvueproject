import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router= new Router({
  mode:"history",
  scrollBehavior (to, from, savedPosition) {
    if(from.path=='/*'){
      return{x:0,y:0}
    }
  },
  routes: [
    {
      path: '/',
      name: ' Index ',
      meta:{
        isShow:true
      },
      component: ()=>import("@/views/index.vue")

    },
    {
      path: '/merchant',
      name: ' Merchant ',
      meta:{
        isLogin:true,
        isShow:true
      },
      component: ()=>import("@/views/merchant.vue")
    },
    {
      path: '/mall',
      name: ' Mall ',
      meta:{
        isShow:true
      },
      component: ()=>import("@/views/mall.vue")
    },
    {
      path: '/message',
      name: ' Message ',
      meta:{
        isLogin:true,
        isShow:true
      },
      component: ()=>import("@/views/message.vue")
    },
    {
      path: '/my',
      name: ' My',
      meta:{
        isShow:true
      },
      component: ()=>import("@/views/my.vue")
    },
    {
      path: '/login',
      name: ' Login',
      component: ()=>import("@/views/login.vue")
    },
    {
      path: '/register',
      name: ' Register',
      component: ()=>import("@/views/register.vue")
    },
    {
      path: '/dogcar',
      name: ' Dogcar',
      component: ()=>import("@/views/dogcar.vue")
    },
    {
      path: '/detail',
      name: ' Detail',
      meta:{
        isLogin:true,
      },
      component: ()=>import("@/views/detail.vue")
    },
    {
      path: '/*',
      redirect:(to)=>{
        if(to.path=="/index"){
          return "/"
        }else if(to.path.startsWith("/mer")){
          return "/merchant"
        }else if(to.path=="/log"||to.path=="/Login")
        {
          return "/login"
        }else{
          return "/"
        }
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.meta.isLogin==true){
    if(localStorage.getItem("dogs")==null){
      router.push("/login");
    }else{
      next()
    }
  }else{
    next()
  }

 })
export default router;
