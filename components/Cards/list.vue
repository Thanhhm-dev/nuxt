<template>
  <div class="c_3">
    <div class="card">
      <div class="front-card">
        <img :src="picture" alt="none" />
      </div>
      <div class="back-card">
        <h6>{{ keyword }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
    },
    keyword: {
      type: String,
    },
  },
};
</script>
