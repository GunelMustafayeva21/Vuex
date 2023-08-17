import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// Modulus folderində biz nəinki əlaqəli state getters mutations və actionsları bir yerə 
// həmçinin  hər bir getter mutation action üçün başqa bir fayl aça bilərik

// Import Modules folder
// import {counter} from './modules/counter'
export const store= new Vuex.Store({
    state:{
        counter:0,
        value:10
    },
    getters:{
        getDoubleCounter(state){
            return state.counter*2;
        },
        stringCounter(state){
            return state.counter+" times";
        },
        getValue(state){
            return state.value;
        }
    },
    mutations:{
    //    updateCounter(state, value){
    //       state.counter+=value;
    //    }
       increaseCounter(state){
          state.counter++;
          
       },
      decreaseCounter(state){
          state.counter--;
       },
       setValue(state, payload){
        state.value=payload;
     }
    },
    actions:{
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
    setValueAsync({commit}, payload){
        commit("setValue", payload)
    }
    }
    // Use from modules
    //,
    // modules:{
    //     counter:counter
    // }
})