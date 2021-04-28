import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/customers',
    name: 'Customers',
    component: () => import('../views/Customers.vue')
  },
  {
    path: '/customers/create',
    name: 'CreateCustomer',
    component: () => import('../components/Customer/CreateCustomer.vue')
  },
  {
    path: '/customers/update/:id',
    name: 'UpdateCustomer',
    component: () => import('../components/Customer/UpdateCustomer.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/parking-spots',
    name: 'ParkingSpot',
    component: () => import('../views/ParkingSpots.vue')
  },
  {
    path: '/tarifs',
    name: 'tarif',
    component: () => import('../views/Tarifs.vue')

  },
  {
    path: '/cars',
    name: 'cars',
    component: () => import('../views/Cars.vue')

  },
  {
    path: '/cars/create',
    name: 'CreateCar',
    component: () => import('../components/Cars/CreateCar.vue')
  },
  {
    path: '/cars/update/:id',
    name: 'UpdateCar',
    component: () => import('../components/Cars/UpdateCar.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/Registration.vue')

  },
  {
    path: '/registration/create',
    name: 'CreateRegistration',
    component: () => import('../components/Registration/CreateRegistration.vue')
  },
  {
    path: '/registration/update/:id',
    name: 'UpdateRegistration',
    component: () => import('../components/Registration/UpdateRegistration.vue')
  },
  {
    path: '/marks',
    name: 'marks',
    component: () => import('../views/Marks.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
