// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue';
// import CreateStudent from '../views/CreateStudent.vue'
// import GetStudent from '../views/GetStudent.vue'
// // import CreateStudent from ''

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'GetStudent',
//       component: GetStudent
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     },   
    
//     {
//       path: '/createstudent',
//       name: 'CreateStudent',
//       component: CreateStudent
//     },

//   ]
// })

// export default router




import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import StudentShow from '../views/StudentShow.vue'
import StudentCreate from'../views/CreateStudent.vue'
import StudentEdit from '../views/EditStudent.vue'
import Login from '../views/Login.vue'
import Resistration from '../views/Resistration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/studentcreate',
      name: 'StudentCreate',
      component: StudentCreate
    },

    {
      path: '/student/:id/edit',
      name: 'StudentEdit',
      component:StudentEdit
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },
    {
      path: '/resister',
      name: 'Resister',
      component:Resistration
    },
  ]
})

export default router