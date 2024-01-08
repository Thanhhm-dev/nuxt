<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">Start</button>
          <button class="btn btn_primary" @click.prevent="openModal()">
            Create card
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

      <v-modal name="child">
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
    </div>
  </section>
</template>

<script>
import cards from "~/components/Cards/list.vue";

export default {
  components: {
    cards,
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({
          deck: {
            name: context.params.name,
            keyword: context.params.keyword,
            picture: context.params.picture,
          },
        });
      }, 1000);
      reject(new Error());
    }).then((data) => {
      return data
    }).catch((err) => {
      context.error(err);
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
  validate(content) {
    return /^[0-9]{0,9}$/.test(content.params.name);
  },
  methods: {
    openModal() {
      this.$modal.open({ name: "child" });
    },
    closeModal() {
      this.$modal.close({ name: "child" });
    },
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
