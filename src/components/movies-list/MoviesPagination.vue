<template>
  <Movies :movies="movies.data" @setFavourite="(movie) => this.$emit('setFavourite', movie)" />

  <div class="pagination-buttons">
    <it-button
      v-for="pageId in paginationArray"
      :key="pageId"
      class="pagination-button"
      type="primary"
      :outlined="pageId !== movies.page"
      @click="gotoPage(pageId)"
      >{{ pageId }}
    </it-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IMovieList } from '@/types/movie';
import Movies from '@/components/movies-list/Movies.vue';

export default defineComponent({
  components: { Movies },
  emits: ['loadPage', 'setFavourite'],
  props: {
    movies: {
      required: true,
      type: Object as PropType<IMovieList>,
    },
  },

  computed: {
    paginationArray(): number[] {
      const min = this.movies.page - 4 > 1 ? this.movies.page - 4 : 1;
      let max = this.movies.page + 3 < this.movies.total_pages ? this.movies.page + 3 : this.movies.total_pages - 1;

      if (max < min) {
        return [1];
      }

      max = max < min ? min : max;
      const arr = Array.from(Array(max - min), (_, i) => min + i + 1);
      return [1, ...arr, this.movies.total_pages];
    },
  },

  methods: {
    async gotoPage(page: number) {
      if (page >= 1 && page <= this.movies.total_pages) {
        this.$emit('loadPage', page);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.pagination-buttons {
  display: flex;
  justify-content: space-between;
  margin: 15px 10px;
  flex-wrap: wrap;
  .pagination-button {
    display: inline;
  }
}
</style>