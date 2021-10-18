<template lang="">
    <div v-if="job" class="job-detail">
        <h1>Jobs Detail id: {{id}}</h1>
        <div class="col-12">
            <img :src="job.avatar" alt="">
            <p>{{job.first_name}}{{job.last_name}}</p>
            <p>{{job.email}}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ducimus similique reprehenderit, at aspernatur eveniet suscipit odit neque quaerat! Iste hic facere inventore debitis? Unde, repellendus iure voluptas animi earum tempore, a eligendi eaque repellat omnis quis sequi pariatur expedita sit est perferendis nulla cum totam quisquam assumenda nisi explicabo recusandae ullam nam. Unde quas vitae sapiente corrupti, facilis praesentium, ullam voluptatibus eos reiciendis, doloribus quia! Vitae amet animi dolorum eum quae voluptatum incidunt eaque sed, eius laboriosam repellendus quaerat corporis, nesciunt reiciendis delectus. Rerum iusto eum quasi magnam possimus necessitatibus, ex consequatur nisi, magni optio reiciendis, assumenda amet quaerat suscipit molestias quam officiis mollitia harum! Quis distinctio similique adipisci cumque porro qui. Ex ut saepe eaque vitae suscipit dolor itaque aliquid enim cupiditate optio aperiam ab iure, qui sequi soluta veniam earum facere nam excepturi tempora labore dicta? Nihil illum voluptatum asperiores provident quasi consectetur error distinctio quos velit. Assumenda reiciendis ab maxime numquam rerum reprehenderit, cumque ratione totam provident accusantium nam perferendis necessitatibus minus iusto ut eius cum, inventore incidunt voluptas veniam obcaecati dolorum laboriosam odit mollitia! Vel, officia. Nesciunt, distinctio, ad porro inventore expedita aliquid nemo tempore, soluta praesentium quibusdam consectetur rem sequi quasi dolore cupiditate! Similique.</p>
        </div>
    </div>
</template>
<script>
    export default {
        props: ["id"],
        data() {
            return {
                //id:this.$route.params.id
                job:null
            }
        },
        created() {
            console.log(this.id)
              fetch("https://reqres.in/api/users/" +this.id)
            .then(res=> res.json())
            .then(data=> {
               this.job=data.data
            })
            .catch(err => console.log(err))
        },
    }
</script>

<style>
.job-detail img{
    border-radius: 100%;

}
</style>