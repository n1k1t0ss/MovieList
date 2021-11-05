<template>
  <div class="home">
    <MoviesList :movies="movies" @loadPage="loadPage" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MoviesList from "@/components/movies-list/MoviesList.vue";
import ApiService from "@/services/apiService";
import { IMovieList } from "@/types/movie";

const apiService = new ApiService();

export default defineComponent({
  name: "Home",
  components: { MoviesList },
  data() {
    return {
      currentPage: 1,
      movies: {} as IMovieList,
    };
  },
  async mounted() {
    await this.loadMovies();
  },
  methods: {
    async loadPage(page: number) {
      this.currentPage = page;
      await this.loadMovies();
    },
    async loadMovies() {
      const movies = await apiService.getMovies(this.currentPage);
      console.log(movies);
      this.movies = movies;
    },
  },
});
</script>
