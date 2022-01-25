<template>
  <div class="container">

      <ul class="list-group mt-2" v-for="(item,id) of tareas" :key="id">
        <li class="list-group-item d-flex justify-content-between align-items-center" 
        @click="cambiar(id)" :class="item.realizada ? 'bg-primary' : 'bg-danger'">
            {{item.id}} - {{item.nombre}} 
            
        </li>
      </ul> 
  </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex';
    export default {
        computed:{
            ...mapState('tareasvuex',['tareas','tarea','id'])
        },
        methods:{
            ...mapMutations('tareasvuex',['cargar','cambiar']),
        },
        created(){
            this.cargar()
        }
            
}
</script>
    
<style>

</style>