<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useFilmStore } from '@/stores/api'

const data = ref('text something')
const film = useFilmStore()

onMounted(() => {
  film.getList()
})

</script>

<template>
  <main>
    <h1 class="text-3xl font-bold">Film List</h1>
    <div class="my-10 animate-pulse" v-if="film.loading">
      <div
        class="h-20 w-full mb-3 bg-slate-600 rounded-sm"
        v-for="i in [1,2,3]"
        :key="i"
      ></div>
    </div>
    <div class="my-10" v-else>
      <router-link
        :to="'/detail/' + (index+1)"
        v-for="(item, index) in film.data"
        :key="item.episode_id"
        class="text-inherit"
      >
        <div
          class="border border-white p-4 mb-2 hover:text-gray-100 hover:bg-gray-500 rounded-sm"
        >
          <h3 class="text-lg font-semibold">{{ item.title }}</h3>
          <p class="text-ellipsis max-w-sm overflow-hidden whitespace-nowrap">{{ item.opening_crawl }}</p>
        </div>
      </router-link>
    </div>
  </main>
</template>

