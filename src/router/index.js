import {
  createRouter,
  createWebHashHistory
} from 'vue-router';
import Home from '../views/home/Home';
import Login from '../views/login/Login';
import Register from '../views/register/Register';
import Shop from '../views/shop/Shop';
const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      const {
        isLogin
      } = localStorage;
      isLogin ? next({
        name: 'Home'
      }) : next();
    }
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/shop',
    name: 'Shop',
    component: Shop
  }, {
    path: '/shop/:id',
    name: 'Shop',
    component: () => import( /* webpackChunkName: "shop" */ '../views/shop/Shop'),
  }

]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// ----------------------------
router.beforeEach((to, from, next) => {
  const {
    isLogin
  } = localStorage;
  (isLogin || to.name === "Login" || to.name === "Register") ? next(): next({
    name: 'Login'
  })
})
export default router
