<template>
  <RouterLink :to="`/pokemon/${id}`" class="ml-0.5 mr-0.5">
    <div class="m-2.5 p-2.5 bg-white opacity-60 rounded-xl">
      <h1>{{ pokemon.name }}</h1>
      <PokemonSprite :id="id" :pokemon="pokemon"/>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import PokemonSprite from "@/components/PokemonSprite.vue";
import {RouterLink} from "vue-router";
import type {IPokemon} from "pokeapi-typescript";

defineProps<{
  pokemon: IPokemon,
  id: number
}>();
</script>