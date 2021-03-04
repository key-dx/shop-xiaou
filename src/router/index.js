import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: () => import('../views/index'),
    meta: { selected: '/' },
    redirect: '/home',
    children: [
      { path: '/home', component: () => import('../components/home'), meta: { selected: '/home' } },
      { path: '/category', component: () => import('../components/category'), meta: { selected: '/category' } },
      { path: '/user', component: () => import('../components/user'), meta: { selected: '/user' } },

    ]
  }, { path: '/shoplist/:id', component: () => import('../components/shoplist'), meta: { selected: '/shoplist' } },
  { path: '/shopinfo/:id', component: () => import('../components/shopinfo'), meta: { selected: '/shopinfo' } },
  { path: '/order', component: () => import('../components/order'), meta: { selected: '/order' } },
  { path: '/shopcar', component: () => import('../components/shopcar'), meta: { selected: '/shopcar' } },
  { path: '/login', component: () => import('../components/login'), meta: { selected: '/login' } },
  { path: '/register', component: () => import('../components/register'), meta: { selected: '/register' } },
]

let router = new VueRouter({
  routes
})
import store from '../store'
router.beforeEach((to, from, next) => {
  if (to.fullPath === '/login') {
    next();
  } else if (to.fullPath !== '/shopcar' && to.fullPath !== '/order' && to.fullPath !== '/user') {
    next();
  } else {
    var info = store.state.userinfo
    if (info === null) {
      next('/login');
    } else {
      next();
    }
  }
})
export default router
