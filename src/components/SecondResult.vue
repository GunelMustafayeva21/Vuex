<template>
    <div>
      <p class="counter-container"> Sayaç : {{ addDoubleCouterGetter }}</p>
      <p class="counter-container">How much button pressed?  {{ stringCounterGetter }}</p>
      <hr>
      <input type="text" :value="value" class="form-control" @input="setValueMethod">
      <br>
      <p>{{ value }}</p>
    </div>
  </template>
  <script>
  // Getter sayi artdiqca computedlerimin sayi artmasin deye
  import { mapGetters } from 'vuex';

  // Ola biler ki burada methods daxilinde getterin getirdiyi method ile eyni adli bir 
  // method olsun. Bu zaman getterin getirdiyi methodun adini deyismek ucun mappGetters
  // array yox obyekt formasinda yazilir

    export default {
    computed: mapGetters({addDoubleCouterGetter:'getDoubleCounter', 
    stringCounterGetter: 'stringCounter', value:'getValue'}),
    methods:{
      setValueMethod(event){
        this.$store.dispatch("setValueAsync", event.target.value)
      }
    }
    
    
  }

 //Bele hal olmasa ise 
     // export default {
     //computed: mapGetters(['getDoubleCounter', 'stringCounter'])
     // }
 

 //Mene mapGetters daxilinde olmayan bir computed daha lazimdirsa
// export default {
//     computed: {
//         ...mapGetters({
//             addDoubleCouterGetter:'getDoubleCounter', 
//             stringCounterGetter: 'stringCounter'
//         }),
//         customComputedProp(){

//         }
//     }
//     }
  
  </script>
  <style scoped>
    .counter-container{
      border: 1px solid palevioletred;
      padding: 10px 5px;
      background-color: pink;
      font-size: 20px;
      color: #000;
    }
  </style>
  