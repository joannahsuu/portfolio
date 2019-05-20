import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

// memory block
import memoryBlock from '@/views/memory-block'
import maps from '@/views/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/maps',
      name: 'maps',
      component: maps,
    },
    {
      path: '/memory-block',
      name: 'memory-block',
      component: memoryBlock,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
})
