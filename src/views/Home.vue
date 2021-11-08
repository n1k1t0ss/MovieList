<template>
  <BasePage>
    <div class="search-container">
      <it-input v-model="searchText" @keypress.enter="search" @blur="search" prefix="Search" prefix-icon="search" />
    </div>
    <MoviesPagination :movies="movies" @loadPage="loadPage" @setFavourite="setFavourite" />
  </BasePage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MoviesPagination from '@/components/movies-list/MoviesPagination.vue';
import BasePage from '@/components/layout/base-page.vue';
import useMovies from '@/composables/useMovies';
import useFavourites from '@/composables/useFavourites';
import { IMovie } from '@/types/movie';

export default defineComponent({
  name: 'Home',
  components: { BasePage, MoviesPagination },
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
  margin: 10px 0;
}
</style>