<template>
  <header class="w-full text-orange-600">
    <div class="top">Pokédex V2 ULTIMATE REBUILD</div>
    <!--bg-gradient-to-r from-white via-green-300 to-green-200 h-12 w-full-->

    <nav class="flex justify-normal ">
      <RouterLink to="/" class="ml-0.5 mr-0.5"> Home</RouterLink>
      <RouterLink to="/about" class="ml-0.5 mr-0.5"> About</RouterLink>
    </nav>

  </header>
</template>

<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<style scoped lang="scss">

$gradient-start: rgba(255, 255, 255, 1);
$gradient-mid: rgba(148, 230, 200, 1);
$gradient-end: rgba(200, 255, 171, 1);

header {
  width: 100%;

  .top {
    background: linear-gradient(45deg,
        $gradient-start 0%,
        $gradient-start 28%,
        $gradient-mid 28%,
        $gradient-mid 58%,
        $gradient-end 80%
    );
    height: 50px;
    width: 100%;
  }

  nav {
    height: 100%;
    padding: 0 20px;
  }
}

</style>
