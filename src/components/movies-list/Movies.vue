<template>
  <div class="movies-contaner">
    <div v-if="movies.length === 0" class="no-movies">No Data</div>
    <div class="movie-contaner" v-for="movie in movies" :key="movie.imdbID">
      <div class="movie-header" :title="movie.Title">
        <it-icon
          class="button-star"
          :class="movie.isFavourite ? '--active' : ''"
          name="star"
          @click="() => this.$emit('setFavourite', movie)"
        />
        <div class="movie-title">{{ movie.Title }}</div>
        <div class="movie-year">{{ movie.Year }}</div>
      </div>
      <div class="movie-body">
        imdb ID: <a :href="`https://www.imdb.com/title/${movie.imdbID}`">{{ movie.imdbID }}</a>
      </div>
    </div>
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

<style lang="scss">
.movies-contaner {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;

  .no-movies {
    margin: 0 10px;
  }

  .movie-contaner {
    background: #dacbf540;
    border-radius: 12px;
    padding: 5px;
    margin: 5px 10px;
    width: 45%;
    width: 45%;
    flex-grow: 1;
  }

  .movie-header {
    display: flex;
    align-items: center;
    margin: 5px;

    .movie-title {
      font-size: 20px;
      font-weight: bold;
      margin: 10px;
      color: #32348c;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .movie-year {
      color: #6c6a6a;
      font-size: 18px;
    }

    .button-star {
      display: inline;
      cursor: pointer;
      color: #cfcfcf;

      &.it-btn {
        padding: 8px;
      }

      &.--active {
        color: #f0ba0a;
      }
    }
  }
  .movie-body {
    margin: 5px 35px;
    font-size: 16px;
  }
}
</style>