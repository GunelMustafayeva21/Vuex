const state={counter:0}

const getters={
    getValue(state){
    return state.value;
    }
}

const mutations={
    increaseCounter(state){
        state.counter++;
        
     },
    decreaseCounter(state){
        state.counter--;
     },
}

const actions={
    increment({commit}){
        commit("increaseCounter")
      },
      decrement({commit}){
        commit("decreaseCounter")
      },
      incrementAction2({commit}){
          setTimeout(() => {
              commit("increaseCounter")
          }, 2000);
          
        },
      decrementAction2({commit}, payload){
          setTimeout(()=>{
              commit("decreaseCounter")
          }, payload.time)
          
        },
}


export default{
    state, //state:state
    getters, //getters:getters
    mutations, //mutations:mutations
    actions   //actions:actions
}