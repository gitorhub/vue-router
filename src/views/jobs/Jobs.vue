<template >
    <div class="jobs">
            <div v-for="(job, i) in jobs" :key="i" @click="goDetail">
                <router-link :to="{name: 'JobsDetail', params:{id:job.id}}">{{job.first_name}}</router-link>
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            jobs:[]
        }
    },
    methods: {
        goDetail(){
            console.log(this.$route)
        }
    },
    created(){
        fetch("https://reqres.in/api/users?per_page=12")
            .then(res=> res.json())
            .then(data=> {
               this.jobs=data.data
               console.log(data.data)
            })
            .catch(err => console.log(err))
    }
}
</script>
<style >
.jobs {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-wrap: wrap;
}
.jobs >div{
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  margin: 10px;
}
.jobs a{
    text-decoration: none;
    padding:10px 30px;
    border-radius: 4px;
    background-color: #ebebeb;
}
.jobs a:hover{
    background-color: #dddddd;
}
</style>