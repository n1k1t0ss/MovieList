<template>
  <BasePage>
    <Movies :movies="favourites" @setFavourite="setFavourite" />
  </BasePage>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import useFavourites from '@/composables/useFavourites';
import BasePage from '@/components/layout/base-page.vue';
import Movies from '@/components/movies-list/Movies.vue';

export default defineComponent({
  name: 'Home',
  components: { BasePage, Movies },
  setup() {
    const { favourites, setFavourite } = useFavourites();

    return {
      favourites,
      setFavourite,
    };
  },
});
</script>
