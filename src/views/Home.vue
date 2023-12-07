<template>
  <div class="grid grid-cols-10 gap-2">
    <div
      class="p-4 flex flex-col items-center bg-gray-300 col-start-1 col-end-5 row-start-1 row-end-3"
    >
      <h1 class="text-5xl mb-4">Marco Rosenbaum</h1>
      <h2 class="text-3xl mb-4">- Junior Frontend Developer</h2>
      <img
        class="rounded-3xl"
        src="../assets/images/img001.jpeg"
        alt="photo of marco"
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quia
        necessitatibus rerum? Nostrum deleniti nobis velit id ipsa quos aut
        eaque corporis incidunt consequuntur, maxime commodi, tenetur accusamus
        laudantium sequi?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quia
        necessitatibus rerum? Nostrum deleniti nobis velit id ipsa quos aut
        eaque corporis incidunt consequuntur, maxime commodi, tenetur accusamus
        laudantium sequi?
      </p>
    </div>
    <div class="flex p-2 bg-gray-300 col-start-5 col-end-11">
      <div class="flex flex-col w-[100%]">
        <div class="text-center h-[10%] w-[100%] bg-red-200">Side preview</div>
        <div class="w-[100%] bg-green-200">
          <myjourney />
        </div>
      </div>
    </div>
    <div class="bg-gray-300 col-start-5 col-end-7"></div>
    <div class="bg-gray-300 col-start-7 col-end-11">
      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScrpt</li>
        <li>Vue.js</li>
        <li>Node.js</li>
        <li>Git</li>
        <li>scrum</li>
      </ul>
    </div>
  </div>
</template>

<script>
import myjourney from "../views/MyJourney.vue";

export default {
  name: "Home",
  components: {
    myjourney,
  },
};
</script>

<style>
#profil-photo {
  width: 200px;
  height: 300px;
  background-color: lightgray;
}
</style>
