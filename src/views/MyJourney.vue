<template>
  <div class="mx-16 bg-background">
    <div class="z-50 bg-opacity-20 bg-gradient sticky top-0 flex">
      <div id="header" class="py-4 flex gap-[3rem] items-center">
        <router-link :to="{ name: 'home' }"
          ><button
            id="btn-back"
            class="bg-callToAction rounded-xl p-2 cursor-pointer transition-transform hover:scale-105 duration-300"
          >
            go back to portfolio
          </button></router-link
        >

        >
        <p>Click and move your mouse to rotate the globe.</p>
        <p>
          Locations: Germany, Spain, France, Indonesia, Australia, New Zealand,
          Rarotonga, Thailand
        </p>
      </div>
    </div>
    <div class="w-full h-full">
      <globe ref="globeRef" />
    </div>
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
@media screen and (max-width: 1100px) {
  #header {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
}
</style>
