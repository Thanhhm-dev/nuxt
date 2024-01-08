<template>
  <form @submit.prevent="onSave()">
    <div class="form_group">
      <label for="">Name</label>
      <input v-model="editedDeck.name" name="name" class="form_control" type="text" />
    </div>
    <div class="form_group">
      <label for="">Description</label>
      <textarea v-model="editedDeck.description" name="description" class="form_control" cols="30" rows="10"></textarea>
    </div>
    <div class="form_group">
      <label for="">Thumbnail</label>
      <div>
        <input v-model="editedDeck.thumbnail" name="thumbnail" class="form_control" type="text" />
      </div>
    </div>
    <button type="submit" class="btn btn_success">
      Submit
    </button>
    <button type="button" class="btn btn_warning" @click.prevent="closeModal(modalName)">
      Close
    </button>
  </form>
</template>


<script>

export default {
  props: {
    deck: {
      type: Object,
      default: () => ({
        name: "",
        description: "",
        thumbnail: ""
      })
    },
    modalName: {
      type: String
    }
  },
  data() {
    return {
      editedDeck: this.deck ? { ...this.deck } : {
        name: "",
        description: "",
        thumbnail: ""
      }
    }
  },
  methods: {
    onSave() {
      this.$emit("submit", this.editedDeck);
    },
    closeModal() {
      this.$modal.close({ name: this.modalName });
    },
  },
};
</script>
