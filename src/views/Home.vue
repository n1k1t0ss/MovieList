<template>
  <div>
    <input type="text" v-model="searchText" @keypress.enter="onSearch" @blur="onSearch" />
    <MoviesList :movies="movies" @loadPage="loadPage" @onFavourites="onFavourites" />
    <div>Favourites</div>
    <!-- <MoviesList /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MoviesList from '@/components/movies-list/MoviesList.vue';
import ApiService from '@/services/apiService';
import { IMovieList, IMovie } from '@/types/movie';

const apiService = new ApiService();

export default defineComponent({
  name: 'Home',
  components: { MoviesList },
  data() {
    return {
      currentPage: 1,
      movies: {} as IMovieList,
      searchText: '',
      favourites: [] as IMovie[],
    };
  },
  async mounted() {
    await this.loadMovies();
    const favourites = localStorage.getItem('myFavourites');
    if (favourites != null) {
      console.log('test:', favourites, JSON.parse(favourites));
      this.favourites = JSON.parse(favourites) as IMovie[];
    }
  },
  methods: {
    async loadPage(page: number) {
      this.currentPage = page;
      await this.loadMovies();
    },
    async loadMovies() {
      const movies = await apiService.getMovies(this.currentPage, this.searchText);
      this.movies = movies;
    },
    async onSearch() {
      this.currentPage = 1;
      await this.loadMovies();
    },
    onFavourites(movie: IMovie) {
      const favouriteIndex = this.favourites.findIndex((f) => f.imdbID == movie.imdbID);
      if (favouriteIndex < 0) {
        this.favourites.push(movie);
      } else {
        this.favourites.splice(favouriteIndex, 1);
      }

      localStorage.setItem('myFavourites', JSON.stringify(this.favourites));
    },
  },
});
</script>
