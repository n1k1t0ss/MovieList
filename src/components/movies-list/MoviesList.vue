<template>
  <div>page {{ movies.page }} from {{ movies.total_pages }}</div>

  <div v-for="movie in movies.data" :key="movie.imdbID">
    {{ movie.Title }}
    {{ movie.Year }}
    <a :href="`https://www.imdb.com/title/${movie.imdbID}`">{{ movie.imdbID }}</a>
    <button @click="() => this.$emit('setFavourite', movie)">
      {{ movie.isFavourite ? 'Remove from Fav' : 'Add to Fav' }}
    </button>
  </div>

  <div>
    <button @click="goBackPage">Back</button>
    <button @click="goNextPage">Next</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IMovieList } from '@/types/movie';

export default defineComponent({
  components: {},
  emits: ['loadPage', 'setFavourite'],
  props: {
    movies: {
      required: true,
      type: Object as PropType<IMovieList>,
    },
  },

  methods: {
    async goBackPage() {
      if (this.movies.page > 1) {
        this.$emit('loadPage', this.movies.page - 1);
      }
    },
    async goNextPage() {
      if (this.movies.page < this.movies.total_pages) {
        this.$emit('loadPage', this.movies.page + 1);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
</style>