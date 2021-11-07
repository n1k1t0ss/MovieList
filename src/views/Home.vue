<template>
  <BasePage>
    <div class="search-container">
      <it-input v-model="searchText" @keypress.enter="search" @blur="search" prefix="Search" prefix-icon="search" />
    </div>
    <MoviesList :movies="movies" @loadPage="loadPage" @setFavourite="setFavourite" />
  </BasePage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MoviesList from '@/components/movies-list/MoviesList.vue';
import BasePage from '@/components/layout/base-page.vue';
import useMovies from '@/composables/useMovies';
import useFavourites from '@/composables/useFavourites';
import { IMovie } from '@/types/movie';

export default defineComponent({
  name: 'Home',
  components: { BasePage, MoviesList },
  setup() {
    const { favourites, setFavourite } = useFavourites();
    const { movies, onFavouriteClick, searchText, loadPage, search, currentPage } = useMovies(favourites);

    const _setFavourite = (movie: IMovie) => {
      onFavouriteClick(movie.imdbID);
      setFavourite(movie);
    };

    return {
      currentPage,
      searchText,
      loadPage,
      search,
      movies,
      setFavourite: _setFavourite,
    };
  },
});
</script>

<style lang="scss" scoped>
.search-container {
  margin: 10px;
}
</style>