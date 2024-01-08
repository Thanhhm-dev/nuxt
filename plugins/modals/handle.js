import Layout from './layout';
// set prototype name
const Vmodal = {
  install(Vue) {
    this.EventBus = new Vue();

    Vue.component('v-modal', Layout);

    Vue.prototype.$modal = {
      open(params) {
        Vmodal.EventBus.$emit('open', params);
      },
      close(params) {
        Vmodal.EventBus.$emit('close', params);
      }
    }
  }
}

export default Vmodal;
