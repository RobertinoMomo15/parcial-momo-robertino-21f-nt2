<template>

  <section class="src-componentes-respuestas">
    <div class=jumbotron> 
      <h2>Respuestas</h2>
      <hr />
      <hr />
      <hr />
      
      <div v-if="respuestas.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Numero</th>
          <th>Respuestas</th>
        </tr>
        <tr v-for="(dato, index) in respuestas" :key="index">
          <td>{{ dato.numero }}</td>
          <td>{{ dato.rta }}</td>
        </tr>
      </table>



    </div>





    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas : [
          {numero:1,rta:["C"]},
          {numero:2,rta:["C"]},
          {numero:3,rta:["B"]}         
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">



</style>
