<template>
  <div>
    <div class="banner">
      <div class="thumanil-banner"></div>
    </div>
    <div class="popular-decks">
        <h3 class="text_center">Popular decks</h3>
        <div class="r">
          <div class="c_4">
            <div class="card">Deck</div>
          </div>
          <div class="c_4">
            <div class="card">Deck</div>
          </div>
          <div class="c_4">
            <div class="card">Deck</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
  .banner {
    height: 220px;
    margin-top: 2rem;
    .thumanil-banner {
      background: url('~assets/images/banner.jpeg')
        center center;
      height: inherit;
    }
  }
</style>
