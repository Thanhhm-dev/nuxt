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
        <form action="">
          <div class="form_group">
            <label for="">Name</label>
            <input class="form_control" type="text" />
          </div>
          <div class="form_group">
            <label for="">Description</label>
            <textarea class="form_control" cols="30" rows="10"></textarea>
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
    </div>
  </div>
</template>

<script>
import DeckList from "~/components/Decks/list.vue";

export default {
  components: {
    DeckList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({
          decks: [
            {
              id: 1,
              name: "Learn English",
              description: "Learn English description",
              thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            },
            {
              id: 2,
              name: "Learn English",
              description: "Learn English description",
              thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            },
            {
              id: 3,
              name: "Learn English",
              description: "Learn English description",
              thumbnail:
                "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
            },
          ],
        });
        reject(new Error());
      }, 1000);
    }).then(data => {
      return data;
    }).catch((e) => {
      context.error(e);
    });
  },
  methods: {
    openModal() {
      this.$modal.open({ name: "test" });
    },
    closeModal() {
      this.$modal.close({ name: "test" });
    },
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
