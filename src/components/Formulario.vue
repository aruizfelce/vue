<template>
  <div class="container mt-2">
      <h2>{{titulo}}</h2>
     <input class="form-control" type="text" v-model="tarea.id">
      <input class="form-control mt-2" type="text" v-model="tarea.nombre" autofocus ref="nombre">
      <button class="btn btn-primary mt-2" @click="insertar2(tarea)">Agregar</button>
      <button class="btn btn-danger mt-2" @click="limpiar()">Limpiar</button>
   </div>
</template>

<script>
 import {mapState,mapMutations} from 'vuex';

export default {
    name:'Formulario',
    computed:{
            ...mapState('tareasvuex',['tareas','tarea','id']),
            ...mapState(['titulo'])
    },
    methods:{
       ...mapMutations('tareasvuex',['insertar','limpiar']),
       insertar2(){
           this.insertar(this.tarea);
           this.$refs.nombre.focus();
       }
    }
}
</script>

<style>

</style>