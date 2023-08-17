<template>
  <div>
    <p class="counter-container"> Sayaç : {{ counter }}</p>
  </div>
</template>
<script>

  export default {
    computed:{
      counter(){
        //Without Getter
        //return this.$store.state.counter * 2;
        //Getter works as computed so getDoubleCounter is method but we dont use from paranthesis
        //With Getter
        return this.$store.getters.getDoubleCounter;
      }
    }
  }

</script>
<style scoped>
  .counter-container{
    border: 1px solid rosybrown;
    padding: 10px 5px;
    background-color: plum;
    font-size: 20px;
    color: #000;
  }
</style>
