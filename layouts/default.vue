<template>
  <div>
    <default-header />
    <nuxt />
    <default-footer />
  </div>
</template>

<script>
import DefaultHeader from '@/components/Header/default';
import DefaultFooter from '@/components/Footer/default';

export default {
  components: {
    DefaultHeader,
    DefaultFooter
  },
}
</script>
