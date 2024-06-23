<script setup lang="ts">
import {RouterView} from 'vue-router'
import {ref, onMounted} from "vue";
import PokeAPI from "pokeapi-typescript";
import Header from "@/components/Header.vue";

// title, index and category variables using the composition API

const title = ref("Pokédex V2");
const index = ref(0);
</script>

<template>
  <div class="h-screen max-h-screen">
    <Header :title="title"/>

    <div class="container mx-auto mt-5 max-h-full overflow-y-auto border border-black">
      <Transition name="fade" mode="out-in">
        <RouterView/>
      </Transition>
    </div>

  </div>
</template>

<style scoped lang="scss">
/* Define transition effects */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
{
  opacity: 0;
}
</style>
