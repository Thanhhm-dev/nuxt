<template>
  <div>
    <h1>Your decks, please enter your name of deck to show: </h1>
    <input class="form_control" type="text" v-model="deckName" name="name">
    <button class="btn btn_success" @click="redirectDecks">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deckName: '1'
    }
  },
  methods: {
    redirectDecks() {
      this.$router.push(`/decks/${this.deckName}`)
    }
  }
}
</script>
