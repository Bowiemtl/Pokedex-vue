<template>
  <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`" alt="{{pokemon.name}}">
</template>

<script setup lang="ts">
//there is a single id prop that is passed in from the parent component and is used for the pokemon sprite url
// as well as a prop for the pokemon object itself

import {defineProps} from "vue";

defineProps<{
  id: number,
  pokemon: any
}>()
</script>

<style scoped lang="scss">
  img {
    width: 50px;
    height: 50px
  }
</style>
