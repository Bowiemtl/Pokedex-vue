<template>
  <div class="container mx-auto">
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <TransitionGroup name="tile-fade" tag="div" class="grid grid-flow-row grid-cols-10">
      <div v-for="(pokemon, i) in pokemonList" :key="pokemon.name">
        <Transition name="tile-fade" mode="in-out">
          <PokemonTile :pokemon="pokemon" :id="index * 50 + i + 1" :index="i" :i="i"/>
        </Transition>
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts">
import {ref, onMounted, watch} from "vue";
import PokemonTile from "@/components/PokemonTile.vue";

let index2 = ref(0);

export default {
  components: {PokemonTile},
  setup() {
    let index = ref(0);
    let limit = ref(50);
    let category = ref('');
    let pokemonList = ref();
    let currentURL = ref(`https://pokeapi.co/api/v2/pokemon?limit=${limit.value}&offset=${index.value * limit.value}`);

    const increment = () => {
      console.log(index.value, pokemonList.value.count);
      index.value += 1;
      // if (index.value < pokemonList.value.count) {}
    };

    const decrement = () => {
      console.log(index.value, pokemonList.value.count);
      index.value -= 1;
      // if (index.value > 1)
    };

    watch(index, async (newValue) => {
      currentURL.value = `https://pokeapi.co/api/v2/pokemon?limit=${limit.value}&offset=${index.value * limit.value}`;
      let pokemonResult = await fetch(currentURL.value).then((data) => data.json());
      pokemonList.value = pokemonResult.results;
    });

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
.tile-fade-enter-active, .tile-fade-leave-active {
  transition: opacity .5s ease;
}

.tile-fade-enter, .tile-fade-leave-to {
  opacity: 0;
}
</style>