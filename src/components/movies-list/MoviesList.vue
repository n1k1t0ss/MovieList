<template>
  <div>page {{ movies.page }} from {{ movies.total_pages }}</div>

  <Movies :movies="movies.data" @setFavourite="(movie) => this.$emit('setFavourite', movie)" />

  <div>
    <button @click="goBackPage">Back</button>
    <button @click="goNextPage">Next</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IMovieList } from '@/types/movie';
import Movies from '@/components/movies-list/Movies.vue';

export default defineComponent({
  components: { Movies },
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