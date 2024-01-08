<template>
  <div modal="true">
    <div>
      <div v-show="visible" :data-modal="name" class="modal">
        <div
          aria-modal="true"
          data-reach-dialog-content="true"
          tabindex="-1"
          class="modal__mask"
        >
          <div class="modal__body">
            <slot :payload="payload" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vmodal from "./handle";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      payload: null,
      visible: false,
    };
  },
  beforeMount() {
    // set event
    Vmodal.EventBus.$on("open", (params) => {
      if (this.name === params.name) {
        this.show();
      }
    });
    Vmodal.EventBus.$on("close", (params) => {
      if (this.name === params.name) {
        this.close();
      }
    });
  },
  methods: {
    show(params) {
      this.visible = true;
    },
    close(params) {
      this.visible = false;
    },
  }
};
</script>

<style lang="scss">
  .modal {
    position: fixed;
    top: 0;
    width: 100%;
    max-width: unset;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    background-color: rgba(18,18,18, 0.8);
    padding-top: 10px;
    padding-bottom: 10px;
    &__body {
      background: #fff;
      padding: 25px;
    }
  }
</style>
