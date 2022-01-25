export default{
    namespaced:true,
    state:{
        votaciones:[
            {nombre: 'Candidato 1', votos: 1},
            {nombre: 'Candidato 2', votos: 2},
            {nombre: 'Candidato 3', votos: 3}
        ]
    },
    mutations:{
        incrementar(state,index){
            state.votaciones[index].votos ++
        },
        
        reiniciar(state){
            state.votaciones.forEach(element => {
                element.votos=0
            });
        }

    }
}