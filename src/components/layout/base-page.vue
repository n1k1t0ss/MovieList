<template>
  <div class="base-page">
    <div class="nav">
      <router-link :to="{ name: 'home' }" class="nav-link">All Movies</router-link> |
      <router-link :to="{ name: 'favourites' }" class="nav-link">Favourites</router-link>
    </div>

    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-page {
  margin: 0 10px;
  .nav {
    margin: 20px 0;
    .nav-link {
      color: #6c6a6a;
      &.router-link-active {
        color: #32348c;
        font-weight: bold;
      }
    }
  }
}
</style>