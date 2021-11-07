<template>
  <div>
    <input type="text" v-model="searchText" @keypress.enter="search" @blur="search" />
    <MoviesList :movies="movies" @loadPage="loadPage" @setFavourite="setFavourite" />
    <div>Favourites</div>
    <!-- <MoviesList /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MoviesList from '@/components/movies-list/MoviesList.vue';

import useMovies from '@/composables/useMovies';
import useFavourites from '@/composables/useFavourites';
import { IMovie } from '@/types/movie';

export default defineComponent({
  name: 'Home',
  components: { MoviesList },
  setup() {
    const { favourites, setFavourite } = useFavourites();
    const { movies, onFavouriteClick, searchText, loadPage, search, currentPage } = useMovies(favourites);

    const _setFavourite = (moive: IMovie) => {
      onFavouriteClick(moive.imdbID);
      setFavourite(moive);
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
  data() {
    return {};
  },

  methods: {},
});
</script>
