<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">

      <br>

      <Navbar />
      <router-view></router-view>


    </div> 
  </div>
</template>

<script>

import Navbar from './componentes/Navbar.vue'

export default {
  name: 'App',
  components: {

    Navbar
  }
}
</script>

<style>
  h1 {
    color: blue;    
  }


</style>
