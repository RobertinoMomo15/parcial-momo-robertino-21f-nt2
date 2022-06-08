<template>
  <section class="src-componentes-formulario">
    <div class="jumbotron">
      <h2>Notas</h2>
      <hr />
      <hr />
      <br />

      <vue-form :state="formState" @submit.prevent="enviar()">
        <!-- --------------------- -->
        <!--     Campo nombre      -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
          />

          <!-- Mensajes de validación -->
          <field-messages name="nombre" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{ nombreMinLength }} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo permite como maximo {{ nombreMaxLength }} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios en este campo.
            </div>
          </field-messages>
        </validate>
        <br />



        <!-- --------------------- -->
        <!--     Campo apellido    -->
        <!-- --------------------- -->

        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.apellido"
            required
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
          />

          <!-- Mensajes de validación -->
          <field-messages name="apellido" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{ nombreMinLength }} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo permite como maximo {{ nombreMaxLength }} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios en este campo.
            </div>
          </field-messages>
        </validate>
        <br />




        <!-- --------------------- -->
        <!--      Campo nota       -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="nota">Nota</label>
          <input
            type="number"
            id="nota"
            name="nota"
            class="form-control"
            autocomplete="off"
            v-model.number="formData.nota"
            required
            :min="notaMin"
            :max="notaMax"

          />

          <!-- Mensajes de validación -->
          <field-messages name="nota" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La nota mínima permitida es {{ notaMin }}.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La nota máxima permitida es {{ notaMax }}.
            </div>
          </field-messages>
        </validate>
        <br />




        <!-- Botón de envío -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid">
          Enviar
        </button>
      </vue-form>


    </div>


    
    <div v-if="datos.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Nombre</th>
          <th>Nota</th>
        </tr>
        <tr v-for="(dato, index) in datos" :key="index">
          <td>{{ dato.nombre }} {{ dato.apellido }}</td>
          <td :style="getColor(dato.nota)">{{ dato.nota }}</td>
        </tr>
        <tr>
            <td :style="getColor(Promedio())">Promedio notas: {{Promedio()}}</td>
        </tr>
      </table>

    </div>
    <h4 v-else class="alert alert-danger text-center">No se ingresaron notas</h4>
          





  </section>
</template>

<script>

  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        datos : [],
        formState : {},
        formData : this.getInicialData(),
        nombreMinLength : 3,
        nombreMaxLength : 15,
        notaMin: 0,
        notaMax: 10
      }
    },
    methods: {
      getInicialData() {
        return {
          nombre: '',
          apellido: '',
          nota: ''
        }
      },
      enviar() {
        
        var dato = {
              nombre : this.formData.nombre,
              apellido: this.formData.apellido,
              nota: this.formData.nota   
        }

        
        this.formData = this.getInicialData() 
        this.formState._reset()
        
        this.datos.push(dato)
      },
      
      getColor(nota) {
          if(nota < 4){
            return{
              color:'red'
            }
          }else if(nota < 7){
            return{
              color:'yellow'
            }
          }else{
            return{color:'green'}
          }

      },
      Promedio(){
        let suma = 0
        this.datos.forEach(dato => {
          suma += dato.nota
        });
        return suma/this.datos.length     
      },



    },
    computed: {

    }
}


</script>

<style scoped lang="css">

.jumbotron {
  background-color: purple;
  color: white;
}

hr {
  background-color: #bbb;
}

pre {
  color: white;
}
</style>
