<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck {{ $route.params.name }} has name: {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">Start</button>
          <button class="btn btn_primary" @click.prevent="openModal('createCard')">
            Create card
          </button>
          <button class="btn btn_info" @click.prevent="openModal('editDeck')">
            Edit deck
          </button>
        </div>
      </div>
    </div>
    <hr class="" />
    <div class="r">
      <cards
        v-for="item in cards"
        :key="item.id"
        :picture="item.picture"
        :keyword="item.keyword"
      />

      <v-modal name="createCard">
        <form action="">
          <div class="form_group">
            <label for="">Name</label>
            <input class="form_control" type="text" />
          </div>
          <div class="form_group">
            <label for="">Description</label>
            <textarea class="form_control" name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div class="form_group">
            <label for="">Thumnail</label>
            <div>
              <input type="file" />
            </div>
          </div>
          <button type="button" class="btn btn_success" @click.prevent="closeModal()">
            Submit
          </button>
          <button type="button" class="btn btn_warning" @click.prevent="closeModal()">
            Close
          </button>
        </form>
      </v-modal>

      <v-modal name="editDeck">
        <deck-form :deck="deck" @submit="onSubmit" modalName="editDeck" />
      </v-modal>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import cards from "~/components/Cards/list.vue";
import DeckForm from "~/components/Decks/form.vue";

export default {
  components: {
    cards,
    DeckForm
  },
  asyncData(context) {
    return axios
      .get(
        `https://nuxt-2-ddbcc-default-rtdb.asia-southeast1.firebasedatabase.app/${context.params.name}.json`
      )
      .then((res) => {
        console.log(res.data)
        return {
          deck: res.data,
        };
      })
      .catch((e) => {
        context.error(e);
      });
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          keyword: "",
          picture:
            "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
        },
        {
          id: 2,
          keyword: "",
          picture:
            "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
        },
        {
          id: 3,
          keyword: "",
          picture:
            "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
        },
        {
          id: 4,
          keyword: "",
          picture:
            "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
        },
      ],
    };
  },
  methods: {
    openModal(nameModal) {
      this.$modal.open({ name: nameModal });
    },
    closeModal(nameModal) {
      this.$modal.close({ name: nameModal });
    },
    onSubmit(data) {
      axios.put(`https://nuxt-2-ddbcc-default-rtdb.asia-southeast1.firebasedatabase.app/${this.$route.params.name}.json`, data)
      .then((data) => {
        console.log(data);
      }).catch(e => {
        console.log(e);
      })
    }
  },
};
</script>

<style lang="scss">
section {
  padding-top: 3rem;
  .card {
    padding: 1rem;
    img {
      width: 60%;
    }
  }
}
</style>
