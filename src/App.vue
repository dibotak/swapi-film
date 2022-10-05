<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1 class="mb-5 text-xl font-medium">Star Wars Film</h1>
  </header>

  <RouterView />

  <footer>
    <div class="text-center">
      <span>Using <a href="https://swapi.dev">Star Wars API</a></span>
    </div>
  </footer>
</template>

<style scoped>
</style>
