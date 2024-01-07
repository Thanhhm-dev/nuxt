<template>
  <h1>deck {{ $route.params.name }}</h1>
</template>

<script>
export default {
  validate(content) {
    console.log(content);
    return /^[0-9]{0,9}$/.test(content.params.name);
  }
}
</script>
