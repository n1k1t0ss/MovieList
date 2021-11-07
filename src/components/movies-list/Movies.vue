<template>
  <div v-for="movie in movies" :key="movie.imdbID">
    {{ movie.Title }}
    {{ movie.Year }}
    <a :href="`https://www.imdb.com/title/${movie.imdbID}`">{{ movie.imdbID }}</a>
    <button @click="() => this.$emit('setFavourite', movie)">
      {{ movie.isFavourite ? 'Remove from Fav' : 'Add to Fav' }}
    </button>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IMovie } from '@/types/movie';

export default defineComponent({
  components: {},
  emits: ['setFavourite'],
  props: {
    movies: {
      required: true,
      type: Object as PropType<IMovie[]>,
    },
  },
});
</script>

