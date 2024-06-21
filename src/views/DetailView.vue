<template>
  <div>
    <h1> {{ pokemon?.name ?? "N/A" }}</h1>
    <canvas ref="canvas" width="400" height="400"></canvas>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import {ref, onMounted} from "vue";
import PokeAPI, {IPokemon} from "pokeapi-typescript";
import {getColorForType} from "@/utils";

export default {
  data() {
    return {
      id: 1,
      canvas: null,
      pokemon: null,
    };
  },
  methods: {
    increment() {
      this.id++;
    },
    decrement() {
      if (this.id > 1) {
        this.id--;
      }
    },
    async loadPokemon() {
      this.pokemon = await PokeAPI.Pokemon.resolve(this.id || 1);
      const pokemonColor = getColorForType(this.pokemon.types[0].type.name);
      const ctx = this.canvas.getContext("2d");
      ctx.fillStyle = pokemonColor;
      ctx.fillRect(0, 0, 400, 400);

      ctx.fillStyle = "#000";
      ctx.font = "20px Arial";
      ctx.fillText("Hello World", 10, 50);
    },
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.id = this.$route.params.id;
    this.loadPokemon();
  },

  //make sure that every time the id changes, we load the new pokemon data and update the canvas accordingly
  //the route also needs to be watched, because the id is passed as a route parameter or the other way around where the route parameter is set to the current id
  // watch: {
  //   id() {
  //     this.loadPokemon();
  //   },
  // },

  watch: {
    $route() {
      this.id = this.$route.params.id;
      this.loadPokemon();
    },
    id() {
      // this.$router.push({name: "detail", params: {id: this.id}});
      this.$router
      this.loadPokemon();
    },
  },

};
</script>

<!--<script setup lang="ts">
import {ref, onMounted} from "vue";
import type {IPokemon} from "pokeapi-typescript";
import PokeAPI from "pokeapi-typescript";
import {getColorForType} from "@/utils";


const id = ref(1);
const canvas = ref(null as unknown as HTMLCanvasElement);
const pokemon = ref(null as IPokemon);

// methods
const increment = () => id.value++;
const decrement = () => {if (id.value > 1) id.value&#45;&#45;;}

// lifecycle
onMounted(async () => {
  pokemon.value = await PokeAPI.Pokemon.resolve(id.value ?? 1);
  const pokemonColor = getColorForType(pokemon.value.types[0].type.name);
  const ctx = canvas.value.getContext('2d') as CanvasRenderingContext2D;
  ctx.fillStyle = pokemonColor;
  ctx.fillRect(0, 0, 400, 400);

  ctx.fillStyle = '#000';
  ctx.font = '20px Arial';
  ctx.fillText('Hello World', 10, 50);
})
</script>-->

<style scoped lang="scss">
canvas {
  border: 1px solid #000;
}
</style>
