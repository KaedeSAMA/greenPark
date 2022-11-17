import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path:"/",
        redirect:"/home/parkOverview"
    },
    {
        path:"/login",
        component : ()=> import("../view/login.vue")
    },
    {
        path:"/home",
        component : ()=> import("../view/home.vue"),
        children:[
          {
            path:"parkOverview",
            component:()=>import("../view/homeChild/parkOverview.vue")
          },
          {
            path:"warnCenter",
            component:()=>import("../view/homeChild/warnCenter.vue")
          },
          {
            path:"dataCenter",
            component:()=>import("../view/homeChild/dataCenter.vue")
          },
          {
            path:"controlCenter",
            component:()=>import("../view/homeChild/controlCenter.vue")
          },
        ]
    }
]
const router = new VueRouter({
  routes
})
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err)
}
export default router
// 路由守卫
//添加路由守卫:：通过判断来决定当前的路由跳转到底能不能进行，这种守卫，只要进行路由的跳转就会自动的触发，不能人为调用
router.beforeEach((to, from, next) => {
  next()
})