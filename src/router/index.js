import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobsDetail from '../views/jobs/JobsDetail.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path:"/jobs",
    name:"Jobs",
    component:Jobs
  },
  {
    path:"/jobs/:id",
    name:"JobsDetail",
    component:JobsDetail,
    props:true
  },
  //redirect 
  {
    path:"/all-jobs",
    redirect:"jobs"
  },
  //catchAll
  {
    path:"/:catchAll(.*)",
    name:"NotFoundPage",
    component:NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
