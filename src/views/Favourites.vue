<template>
  <div>
    <h1>Favourites</h1>
    <Movies :movies="favourites" @setFavourite="setFavourite" />
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import useFavourites from '@/composables/useFavourites';
import { IMovie, IMovieList } from '@/types/movie';
import Movies from '@/components/movies-list/Movies.vue';

export default defineComponent({
  name: 'Home',
  components: { Movies },
  setup() {
    const { favourites, setFavourite } = useFavourites();

    return {
      favourites,
      setFavourite,
    };
  },
});
</script>
