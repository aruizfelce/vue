import { createStore } from 'vuex'
import tareasvuex from '../modules/tareasvuex'
import votacion from '../modules/votacion'

export default createStore({
  state: {
    titulo: 'Tareas a Realizar'
  },
  
  mutations: {
   
  },
  
  actions: {
  },
  
  modules: {
    tareasvuex,
    votacion
  }

})
