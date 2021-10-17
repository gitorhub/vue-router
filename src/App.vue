<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link :to="{name: 'About'}">About</router-link>
      <router-link :to="{name:'Jobs'}">Jobs</router-link>
    </div>
    <div class="navigate">
      <button @click="redirect">Redirect</button>
      <button @click="back">Go Back</button>
      <button @click="forward">Go Forward</button>
    </div>
    <router-view />
  </div>
</template>
<script>
  export default {
    methods: {
      redirect() {
        this.$router.push({name: "Home"})
        console.log(this.$router)
      },
      back(){
        this.$router.go(-1)
      },
      forward(){
        this.$router.go(1)
      }

    },
  }
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }
  body{
    background:#2c3e50 url(https://source.unsplash.com/collection/190727/1600x900
) no-repeat center center;
background-size:cover;
background-attachment: fixed;
  }
  *{
    box-sizing: border-box;
  }
  
  .container {
    max-width: 768px;
    margin: 50px auto;
    background: #ffffffe8;
    padding: 20px;
    border-radius: 4px;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;
    text-decoration: none;
    margin: 10px;
    border-radius: 4px;
  }
  #nav a.router-link-exact-active {
    color: #ffffff;
    background: #42b983;
  }
  button{
padding: 10px;
margin:10px;
border:0;
border-radius: 4px;
cursor: pointer;
  }
</style>