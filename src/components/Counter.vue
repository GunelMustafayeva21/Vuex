<template>
  <div>
    <button class="btn btn-primary" @click="increaseCounter(5)">+ Arttır</button>
    <button class="btn btn-primary" @click="decreaseCounter">- Azalt</button>
    <hr>
    <button class="btn btn-danger" @click="increment(3)">+ Arttır Action</button>
    <button class="btn btn-danger" @click="decrement">- Azalt Action</button>
    <hr>
    <button class="btn btn-success" @click="incrementAction2">+ Arttır Async</button>
    <button class="btn btn-success" @click="decrementAction2({time:4000})">- Azalt Async</button>
  </div>
</template>

<script>
import { mapMutations, mapActions} from 'vuex';

export default {
  methods : {
    //Mutations With Mapping
    ...mapMutations(["increaseCounter", "decreaseCounter"]),
    //Actions With Mapping

    ...mapActions(["increment", "decrement","incrementAction2", "decrementAction2" ])

    // Mutations Without Mapping
    // incrementCounter(){
    // //  this.$store.state.counter++;
    // // this.$store.commit("updateCounter", 1)
    // this.$store.commit("increaseCounter")
    // },
    // decrementCounter(){
    // // this.$store.state.counter--;
    // //this.$store.commit("updateCounter", -1)
    // this.$store.commit("decreaseCounter")
    // }

    //Actions Without Mapping
    // incrementMethod(){
    //    this.$store.dispatch("increment")
    // },
    // decrementMethod(){
    //   this.$store.dispatch("decrement")
    // },
    // incrementAsync(){
    //    this.$store.dispatch("incrementAction2")
    // },
    // decrementAsync(){
    //   this.$store.dispatch("decrementAction2")
    // }


  }
}
</script>

<style>
</style>
