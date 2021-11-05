<template>
  <div>page {{ movies.page }} from {{ movies.total_pages }}</div>

  <MovieItem
    v-for="movie in movies.data"
    :key="movie.imdbID"
    :Title="movie.Title"
    :Year="movie.Year"
    :imdbID="movie.imdbID"
  />

  <div>
    <button @click="goBackPage">Back</button>
    <button @click="goNextPage">Next</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieItem from "@/components/movies-list/MovieItem.vue";

export default defineComponent({
  components: { MovieItem },
  emits: ["loadPage"],
  props: {
    movies: {
      required: true,
      type: Object,
    },
  },

  methods: {
    async goBackPage() {
      if (this.movies.page > 1) {
        this.$emit("loadPage", this.movies.page - 1);
      }
    },
    async goNextPage() {
      if (this.movies.page < this.movies.total_pages) {
        this.$emit("loadPage", this.movies.page + 1);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
</style>