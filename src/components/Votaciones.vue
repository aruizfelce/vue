<template>
   <div class="container">

      <ul class="list-group mt-2" v-for="(item,index) of resultado" :key="item.id">
        <li class="list-group-item d-flex justify-content-between align-items-center"
          @click="incrementar(index)" >
             {{item.nombre}} 
             <span class="badge bg-primary rounded-pill">{{item.votos}}</span>
        </li>
      </ul> 
      <button @click="reiniciar" class="mt-2 btn btn-danger">Reiniciar</button>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
     computed: {
        ...mapState('votacion',['votaciones']),
        resultado(){
            let votaciones = this.votaciones;
            return votaciones.sort( (a, b) => b.votos - a.votos)
        }
    },
    methods: {
      ...mapMutations('votacion',['incrementar','reiniciar'])
    },

}
</script>

<style>

</style>