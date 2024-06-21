<template>
  <div class="container mx-auto">
    <button @click="increment">+</button>
    <button @click="decrement">-</button>

    <div class="grid grid-flow-col grid-rows-10">
      <div v-for="(pokemon, i) in pokemonList" :key="pokemon.name">
        <!--          <h1>{{ pokemon.name }}</h1>-->
        <!--          <PokemonSprite :id="<number>i + 1 + (index*80)" :pokemon="pokemon"/>-->

        <Transition name="card-fade" mode="in-out">
          <PokemonCard :pokemon="pokemon" :i="i" :index="index"/>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, onMounted} from "vue";
// import PokeAPI, {INamedApiResourceList, IPokemon} from "pokeapi-typescript";
import PokemonSprite from "@/components/PokemonSprite.vue";
import PokemonCard from "@/components/PokemonCard.vue";

export default {
  components: {
    PokemonCard,
    PokemonSprite,
  },
  setup() {
    let index = ref(0);
    let category = ref('');
    let pokemonList = ref();
    let currentURL = ref('https://pokeapi.co/api/v2/pokemon?limit=80&offset=0');

    const increment = () => {
      console.log(index.value, pokemonList.value.count);
      index.value += 1;
      // if (index.value < pokemonList.value.count) {}
    };

    const decrement = () => {
      console.log(index.value, pokemonList.value.count);
      if (index.value > 1) index.value -= 1;
    };

    onMounted(async () => {
      let pokemonResult = await fetch(currentURL.value).then((data) => data.json());
      pokemonList.value = pokemonResult.results;
    });

    return {
      index,
      category,
      pokemonList,
      increment,
      decrement,
    };
  },
};
</script>

<style scoped lang="scss">
.card-fade-enter-active, .card-fade-leave-active {
  transition: opacity 0.5s ease;
}
.card-fade-enter, .card-fade-leave-to {
  opacity: 0;
}
</style>