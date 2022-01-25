<template>
  <div class="home">
    <Formulario/>
    <Lista/>
  </div>
</template>

<script>
// @ is an alias to /src
import Formulario from '../components/Formulario.vue'
import Lista  from  '../components/Lista.vue'

export default {
  name: 'Home',
  components: {
    Formulario,
    Lista
  }
}
</script>
