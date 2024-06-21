<template>
  <div class="m-2.5 p-2.5 bg-white opacity-60 rounded-xl">
    <h1>{{ pokemon.name }}</h1>
    <PokemonSprite :id="i + 1 + (index*80)" :pokemon="pokemon"/>
  </div>
</template>


<script setup lang="ts">
import PokemonSprite from "@/components/PokemonSprite.vue";

defineProps<{
  pokemon: any,
  i: number,
  index: number
}>()


</script>