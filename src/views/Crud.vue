<template>
  <div class="container">
    <form class="form-inline">
      <div class="form-group mb-2">
        <label class="col-form-label">Nombre</label>
        <input type="text" class="form-control" v-model="formu.nombre"/>
      </div>
      <div class="form-group mx-sm-3 mb-2">
        <label class="col-form-label">Apellido</label>
        <input type="text" class="form-control" v-model="formu.apellido"/>
      </div>
      <div class="form-group mx-sm-3 mb-2">
        <label class="col-form-label">Email</label>
        <input type="text" class="form-control" v-model="formu.email"/>
      </div>
      <button class="btn btn-primary mb-2" @click.prevent="guardar(formu)">
        Agregar
      </button>
    </form>
    <table class="table table-striped mt-5">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(persona, index) in personas" :key="index">
          <td>
              <span v-if="editando && index == registro"><input type="text" class="form-control" v-model="persona.nombre"/></span>
              <span v-else>{{persona.nombre}}</span>
          </td>
          <td>
              <span v-if="editando && index == registro"><input type="text" class="form-control" v-model="persona.apellido"/></span>
              <span v-else>{{persona.apellido}}</span>
          </td>
          <td>
              <span v-if="editando && index == registro"><input type="text" class="form-control" v-model="persona.email"/></span>
              <span v-else>{{persona.email}}</span>
          </td>
          <td>
            <button v-if="!editando" class="btn btn-success" @click="editar(index)">Editar</button>
            <button v-else class="btn btn-success" @click="actualizar(persona,index)">Guardar</button>
            
            <button v-if="!editando" class="btn btn-danger" @click="eliminar(index)">Eliminar</button>
            <button v-else class="btn btn-danger" @click="cancelar">Cancelar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registro:null,
      formu:{
          nombre: '',
          apellido: '',
          email: ''
          },
      editando:false,  
      personas: [
        {
          nombre: "Jon",
          apellido: "Snow",
          email: "jonsnow@email.com",
        },
        {
          nombre: "Tyrion",
          apellido: "Lannister",
          email: "TyrionLannister@email.com",
        },
        {
          nombre: "Daenerys",
          apellido: "Targaryen",
          email: "DaenerysTargaryen@email.com",
        },
      ],
    }
    },
    methods: {
        guardar(formu){
            this.personas.push(formu)
            console.log (this.personas)
        },
        editar(index){
            this.editando = true;
            this.registro = index;
        },
        cancelar(){
            this.registro = null;
            this.editando = false;
        },
        actualizar(persona,index){
            this.personas[index]=persona;
            this.editando = false;
        },
        eliminar(index){
            this.personas.splice(index);
        }
  },
};
</script>

<style>
</style>