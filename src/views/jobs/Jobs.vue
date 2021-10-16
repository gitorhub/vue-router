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
<style lang="">
    
</style>