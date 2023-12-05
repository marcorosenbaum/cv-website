<template>
  <test />
  <globe3d />
</template>

<script>
import test from "../components/test.vue";
import globe3d from "../components/Globe3D.vue";

export default {
  name: "MyJourney",
  components: {
    test,
    globe3d,
  },
};
</script>
