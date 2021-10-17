<template >
    <div class="jobs">

            <div v-for="(job, i) in jobs" :key="i" @click="goDetail">
                <router-link :to="{name: 'JobsDetail', params:{id:job.id}}" >{{job.title}}</router-link>
            </div>
     

        
    </div>
</template>
<script>
export default {
    data() {
        return {
            jobs:[
                {title:"frontend", id:1, detail:"lorem"},
                {title:"backend", id:2, detail:"lorem"},
                {title:"fullstack", id:3, detail:"lorem"}
            ]
        }
    },
    methods: {
        goDetail(){
            console.log(this.$route)
        }
        
    },
    
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