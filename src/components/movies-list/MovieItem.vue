<template>
  <div>
    {{ Title }}
    {{ Year }}
    <a :href="`https://www.imdb.com/title/${imdbID}`">{{ imdbID }}</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    Title: {
      type: String,
    },
    Year: {
      type: Number,
    },
    imdbID: {
      type: String,
    },
  },
});
</script>
