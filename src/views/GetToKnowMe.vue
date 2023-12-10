<template>
  <h1>
    on this view comes a quiz about me, some interests and similiar informations
  </h1>
  <div id="globe-container">
    <threeglobe ref="globeRef" />
  </div>
</template>

<script>
import threeglobe from "../components/ThreeGlobe.vue";

export default {
  name: "getToKnowMe",
  components: {
    threeglobe,
  },
};
</script>

<style>
#globe-container {
  width: 100%;
  height: 100%;
}
</style>
