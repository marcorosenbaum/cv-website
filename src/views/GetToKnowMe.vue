<template>
  <h1>check</h1>
  <div id="globe-container">
    <globe ref="globeRef" />
  </div>
</template>

<script>
import globe from "../components/ThreeGlobe.vue";

export default {
  name: "gettoknowme",
  components: {
    globe,
  },
};
</script>

<style>
#globe-container {
  width: 100%;
  height: 100%;
}
</style>
