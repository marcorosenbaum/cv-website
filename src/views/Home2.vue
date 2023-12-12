<template>
  <div v-if="github" class="absolute bg-white top-[20%] left-[10%] w-40 h-40">
    HI HI HI
  </div>

  <div class="flex h-full">
    <div class="w-[10%] flex flex-col justify-around text-2xl text-center">
      <a
        @mouseover="github = true"
        @mouseleave="github = false"
        class="text-white transition-transform transform hover:scale-110 duration-1000"
        target="_blank"
        href="https://github.com/marcorosenbaum"
        >Github</a
      >

      <a
        class="text-white"
        target="_blank"
        href="https://www.linkedin.com/in/marcorosenbaum"
        >LinkedIn</a
      >

      <a
        class="text-white"
        target="_blank"
        href="https://www.codewars.com/users/marcorosenbaum"
        >Codewars</a
      >
    </div>
    <div class="w-[80%] flex flex-col justify-center">
      <div id="preview-container" class="bg-gray-300 h-max">
        <div class="w-[100%]">
          <div class="w-[100%]">
            <globe />
          </div>
        </div>
      </div>
    </div>
    <div class="w-[10%]"></div>
  </div>
</template>

<script>
import globe from "../components/Globe.vue";

export default {
  name: "Home",
  data() {
    return {
      github: false,
    };
  },
  components: {
    globe,
  },
};
</script>

<style>
#profil-photo {
  width: 200px;
  height: 300px;
  background-color: rgb(79, 240, 255);
}
</style>
