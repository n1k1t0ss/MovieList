<template>
  <div id="nav">
    <router-link :to="{ name: 'home' }">All Movies</router-link> |
    <router-link :to="{ name: 'favourites' }">Favourites</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
