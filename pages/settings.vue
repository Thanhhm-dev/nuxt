<template>
  <div class="page">
    <div class="nav">
      <ul>
      <li><nuxt-link to="/settings">General</nuxt-link></li>
      <li><nuxt-link to="/settings/deck">Decks</nuxt-link></li>
      <li><nuxt-link to="/settings/schedule">GeSchedule</nuxt-link></li>
    </ul>
    </div>
    <nuxt-child />
  </div>
</template>

<style lang="scss">
  .page {
    display: flex;
    .general {
      margin-left: 3rem;
    }
  }
</style>
