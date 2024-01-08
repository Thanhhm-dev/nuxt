<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h3>list</h3>
        <button type="button" class="btn btn_success" @click.prevent="openModal()">
          Create
        </button>
      </div>

      <ul class="decks-list">
        <deck-list
          v-for="item in decks"
          :id="item.id"
          :key="item.id"
          :name="item.name"
          :thumbnail="item.thumbnail"
          :description="item.description"
        />
      </ul>

      <v-modal name="test">
        <deck-form @submit="onSubmit" modalName="test" />
      </v-modal>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import DeckList from "~/components/Decks/list.vue";
import DeckForm from "~/components/Decks/form.vue";

export default {
  components: {
    DeckList,
    DeckForm
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      axios.get('https://nuxt-2-ddbcc-default-rtdb.asia-southeast1.firebasedatabase.app/.json').then(res => {
        const decks = [];
        for (const key in res.data) {
          decks.push({...res.data[key], id: key});
        }
        // asyncData create variable decks if set it in resolve
        resolve({decks});
      }).catch((e) => {
        context.error(e);
        reject(new Error());
      });
    })
  },
  created() {
    this.$store.dispatch('storeDecks/setDecks', this.decks);
  },
  methods: {
    openModal() {
      this.$modal.open({ name: "test" });
    },
    closeModal() {
      this.$modal.close({ name: "test" });
    },
    onSubmit(data) {
      axios.post('https://nuxt-2-ddbcc-default-rtdb.asia-southeast1.firebasedatabase.app/.json', data)
      .then(() => {
        const tmp = [...this.$store.state.storeDecks.decks]
        tmp.push(data);
        this.$store.dispatch('storeDecks/setDecks', tmp);
        this.closeModal();
      }).catch(e => {
        console.log(e);
      })
    }
  },
};
</script>

<style lang="scss">
.decks-list {
  li {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .deck {
    display: block;
  }
  margin: 0;
  padding: 0;
  list-style: none;
  .deck-card {
    display: flex;
    flex-direction: row;
    height: 250px;
    img {
      width: 250px;
      height: auto;
    }
  }
}
</style>
