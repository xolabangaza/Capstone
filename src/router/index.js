import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleProduct from '../components/SingleProduct.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CheckoutView.vue')
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue'),
  },
  {
    path: "/register",
    name: "register",
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue'),
  },

  {
    path: "/products",
    name: "products",
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue'),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "about" */ '../views/CartView.vue'),
  },
  {
    path: "/SingleProduct/:prodID",
    name: "SingleProduct",
    component: SingleProduct,
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
