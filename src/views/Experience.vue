<template>
  This is the Experience View
  <p>Mouse X = {{ mousePositionX }} , Mouse Y = {{ mousePositionY }}</p>
  <div
    @mousedown="mousedown = true"
    @mouseup="mousedown = false"
    @mousemove="mousePosition"
    class="h-screen w-[50vw] bg-red-500"
  >
    <test />
  </div>
</template>

<script>
import test from "../components/test.vue";

export default {
  name: "Experience",
  components: {
    test,
  },
  data() {
    return {
      mousePositionX: null,
      mousePositionY: null,
      mousedown: false,
    };
  },
  methods: {
    mousePosition(event) {
      if (this.mousedown) {
        this.mousePositionX = event.clientX;
        this.mousePositionY = event.clientY;
      }
    },
  },
};
</script>
