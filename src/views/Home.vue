<template>
  <div class="grid grid-cols-10 gap-2 m-2 h-full">
    <div
      class="p-4 flex flex-col items-center bg-gray-300 col-start-1 col-end-5"
    >
      <h1 class="text-5xl mb-4">Marco Rosenbaum</h1>
      <h2 class="text-3xl mb-4">- Junior Frontend Developer</h2>
      <img
        class="rounded-3xl w-3/4"
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
    <div class="col-start-5 col-end-11">
      <div id="preview-container" class="p-2 bg-gray-300 h-max">
        <div class="flex flex-col w-[100%]">
          <div class="text-center w-[100%] text-white bg-black">
            Side preview
          </div>
          <div class="w-[100%] bg-green-200">
            <globe />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2 pt-2">
        <div
          id="links"
          class="col-start-1 col-end-2 text-2xl flex flex-col items-center justify-around bg-gray-300"
        >
          <a target="_blank" href="https://github.com/marcorosenbaum">Github</a>

          <a target="_blank" href="https://www.linkedin.com/in/marcorosenbaum"
            >LinkedIn</a
          >

          <a
            target="_blank"
            href="https://www.codewars.com/users/marcorosenbaum"
            >Codewars</a
          >
        </div>

        <div
          id="skills"
          class="flex flex-col bg-gray-300 col-start-2 col-end-3"
        >
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
    </div>
  </div>
</template>

<script>
import globe from "../components/Globe.vue";

export default {
  name: "Home",
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
