export default {
  namespaced: true,
  state: {
    id:0,
    tareas: [],
    tarea:{}
  },
  mutations: {
    insertar(state){
      state.tareas.push(state.tarea);
      localStorage.setItem('tareas',JSON.stringify(state.tareas));
      state.id++;
      state.tarea={
        id:state.id,
        nombre:'',
        realizada:false,
      }
     },
      cargar(state){
        let DatosDB = JSON.parse(localStorage.getItem('tareas'));
        if(DatosDB.length===0){
          state.tareas=[];
          state.id=1;
          state.tarea={
            id: 1,
            nombre:'',
            realizada:false
          }
        }else{
          state.tareas=DatosDB;
          state.id = state.tareas[state.tareas.length-1].id+1;
          state.tarea={
            id: state.id,
            nombre:'',
            realizada:false
          }
         }
         
      },
      cambiar(state,id){
        state.tareas[id].realizada = !state.tareas[id].realizada;
        localStorage.setItem('tareas',JSON.stringify(state.tareas));
      },
      limpiar(state){
        state.tareas= [];
        state.tarea={
          id:1,
          nombre:'',
          realizada:false,
        };
        state.id = 1;
        localStorage.setItem('tareas',JSON.stringify(state.tareas));
      }
    },
  
  actions: {
  },
  modules: {
  }
}