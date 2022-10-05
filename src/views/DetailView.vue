<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useFilmStore } from '@/stores/api'

const route = useRoute()
const film = useFilmStore()

onMounted(() => {
  console.log(route.params.id)
  film.getDetail(route.params.id)
})
</script>

<template>
<main style="min-height: 50vh;">
  <div class="mb-4">
    <router-link to="/">
      <span class="text-xl font-bold">&#8592; Back</span>
    </router-link>
  </div>
  <div class="animate-pulse" v-if="film.loading">
    <div class="bg-slate-700 h-12 w-64 rounded-md mb-3"></div>
    <div class="bg-slate-700 h-6 w-48 rounded-md mb-3"></div>
    <div class="bg-slate-700 h-20 w-full rounded-md mb-3"></div>
    <div class="bg-slate-700 h-12 w-48 rounded-md mb-3"></div>
  </div>
  <div v-else-if="film.error">
    <span>An Error Occured</span>
  </div>
  <div v-else>
    <h1 class="text-4xl font-bold">{{ film.detail.title }}</h1>
    <h2 class="text-lg font-medium">Directed by {{ film.detail.director }}</h2>
    <article class="pb-3 mb-3 mt-8 border-b-2">{{ film.detail.opening_crawl }}</article>
    <p>Producer: {{ film.detail.producer }}</p>
    <p>Release date: {{ film.detail.release_date }}</p>
  </div>
</main>
</template>

