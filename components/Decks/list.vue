<template>
  <li>
    <nuxt-link :to="`/decks/${id}`">
      <div class="card deck-card">
        <img
          :src="thumbnail"
          alt="thumnail"
        />
        <div class="card_body">
          <h3>{{ name }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
  },
};
</script>
