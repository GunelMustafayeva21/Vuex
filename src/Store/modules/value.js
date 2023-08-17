const state={value:0}
const getters={
    getDoubleCounter(state){
        return state.counter*2;
    },
    stringCounter(state){
        return state.counter+" times";
    },
}
const mutations={

       setValue(state, payload){
        state.value=payload;
     }
    }
const actions={
    setValueAsync({commit}, payload){
        commit("setValue", payload)
    }
}

export default{
    state:state,
    getters:getters,
    mutations:mutations,
    actions:actions
}