# vue-router

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### route basics index.js

```javascript




import Jobs from '../views/jobs/Jobs.vue'
import JobsDetail from '../views/jobs/JobsDetail.vue'
import NotFoundPage from '../views/NotFoundPage.vue' 

const routes = [

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
  ```

  ```vue
  <router-link :to="{name: 'JobsDetail', params:{id:job.id}}" >{{job.title}}</router-link>

  ```

  ```javascript
  console.log(this.$router)  //history
  
  console.log( this.$route)   //location


  ```