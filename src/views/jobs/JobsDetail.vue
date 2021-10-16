<template lang="">
    <div>
        <h1>Jobs Detail</h1>
        <p>The Job id is : {{id}} </p>


    </div>
</template>
<script>
    export default {
        props: ["id"],
        data() {
            return {
                //id:this.$route.params.id
            }
        },




    }
</script>