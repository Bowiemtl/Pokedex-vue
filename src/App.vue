<script setup lang="ts">
import {RouterView} from 'vue-router'
import {ref, onMounted} from "vue";
import PokeAPI from "pokeapi-typescript";
import Header from "@/components/Header.vue";

// title, index and category variables using the composition API

const title = ref('Pokedex V2 ULTIMATE REBUILD')
const index = ref(0)
</script>

<template>
  <!--<header class="w-full">
    <div class="top">Pokédex V2 ULTIMATE REBUILD</div>
&lt;!&ndash;bg-gradient-to-r from-white via-green-300 to-green-200 h-12 w-full&ndash;&gt;

    <nav class="bg-emerald-950 flex justify-normal">
      <RouterLink to="/"      class="ml-0.5 mr-0.5 text-white"> Home </RouterLink>
      <RouterLink to="/about" class="ml-0.5 mr-0.5 text-white"> About </RouterLink>
    </nav>

  </header>-->
  <Header :title="title"/>

  <Transition name="fade" mode="out-in">
    <RouterView/>
  </Transition>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
}

/* Define transition effects */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
