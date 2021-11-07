<template>
  <div>page {{ movies.page }} from {{ movies.total_pages }}</div>

  <div v-for="movie in movies.data" :key="movie.imdbID">
    <MovieItem :Title="movie.Title" :Year="movie.Year" :imdbID="movie.imdbID" />
    <button @click="() => onFav(movie)">Add to Fav</button>
  </div>

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
  emits: ["loadPage", "onFavourites"],
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
    onFav(movie: any) {
      this.$emit("onFavourites", movie);
    },
  },
});
</script>

<style lang="scss" scoped>
</style>