import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useFilmStore = defineStore('film', () => {
  const data = ref([])
  const errors = ref(null)
  const loading = ref(false)
  const detail = ref({})

  async function getList() {
    try {
      loading.value = true
      const response = await axios.get('https://swapi.dev/api/films')
      data.value = response.data.results
    } catch (e) {
      errors.value = e
    } finally {
      loading.value = false
    }
  }

  async function getDetail(id) {
    try {
      loading.value = true
      const response = await axios.get('https://swapi.dev/api/films/' + id)
      detail.value = response.data
    } catch (e) {
      errors.value = e
    } finally {
      loading.value = false
    }
  }

  return { data, detail, loading, getList, getDetail }
})
