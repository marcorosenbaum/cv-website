<template>
  <div id="globe-container">
    <globe ref="globeRef" />
  </div>
</template>

<script>
import globe from "../components/Globe.vue";

export default {
  name: "myjourney",
  components: {
    globe,
  },
};
</script>

<style>
#globe-container {
  width: 100%;
}
</style>
