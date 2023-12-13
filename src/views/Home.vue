<template>
  <div class="h-[10vh] sticky top-0 flex flex-col">
    <nav class="flex justify-between p-2 bg-black">
      <div class="flex flex-col items-center text-white">
        <div class="waviy">
          <span style="--i: 1">M</span>
          <span style="--i: 2">a</span>
          <span style="--i: 3">r</span>
          <span style="--i: 4">c</span>
          <span style="--i: 5">o</span>
          <span class="ml-4" style="--i: 6">R</span>
          <span style="--i: 7">o</span>
          <span style="--i: 8">s</span>
          <span style="--i: 9">e</span>
          <span style="--i: 10">n</span>
          <span style="--i: 11">b</span>
          <span style="--i: 12">a</span>
          <span style="--i: 13">u</span>
          <span style="--i: 14">m</span>
        </div>
      </div>

      <div class="flex gap-10 text-white">
        <router-link class="text-white" :to="{ name: 'home' }"
          >Home</router-link
        >
        <router-link :to="{ name: 'MyWork' }">My work</router-link>
        <router-link :to="{ name: 'gettoknowme' }">About me</router-link>
        <router-link :to="{ name: 'myjourney' }">My travel journey</router-link>
      </div>
    </nav>
  </div>

  <main>
    <section class="border border-2-white h-[90vh]">
      This is the about me site
    </section>
    <section
      class="flex justify-around gap-8 text-white border border-2-white h-[90vh]"
    >
      <div class="w-[40%] p-4 m-4 border border-2-white text-center">
        <h1 class="text-3xl">Technical skills</h1>
        <div class="flex">
          <div class="w-[50%] flex flex-col items-end">
            <img
              class="w-10"
              src="../assets/svg/html-5-svgrepo-com.svg"
              alt="html icon"
            />
            <img
              class="w-10"
              src="../assets/svg/html-5-svgrepo-com.svg"
              alt="html icon"
            />
            <img
              class="w-10"
              src="../assets/svg/html-5-svgrepo-com.svg"
              alt="html icon"
            />
          </div>
          <div class="w-[50%] flex flex-col align-middle items-start">
            <p class="h-10">HTML</p>
            <p class="h-10">HTML</p>
            <p class="h-10">HTML</p>
          </div>
        </div>

        <!-- <p>CSS</p>
        <p>Tailwind</p>
        <p>JavaScript</p>
        <p>Pinia</p>
        <p>vue.js</p>
        <p>node.js</p>
        <p>three.js</p> -->
      </div>
      <div class="w-[40%] p-4 m-4 border border-2-white text-center">
        <h1 class="text-3xl">other skills</h1>
        <p>Team leading</p>
        <p>scrum</p>
        <p>project management</p>
        <p>JavaScript</p>
        <p>Pinia</p>
        <p>vue.js</p>
        <p>node.js</p>
        <p>three.js</p>
      </div>
    </section>
    <section class="border border-2-white h-[90vh]">my projects site</section>
    <section
      class="flex justify-center items-center border border-2-white h-[90vh]"
    >
      <div id="globe-container">
        <globe />
      </div>
    </section>
  </main>

  <!-- <div class="flex h-full">
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
  </div> -->
</template>

<script>
import globe from "../components/Globe.vue";

export default {
  name: "Education",
  data() {
    return {
      showGlobe: false,
    };
  },
  components: {
    globe,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.waviy span {
  position: relative;
  display: inline-block;
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  animation: flip 0.5s infinite;
  animation-iteration-count: 1;
  animation-delay: calc(0.05s * var(--i));
}

.occupation span {
  font-size: 1.5rem;
}
@keyframes flip {
  0%,
  80% {
    transform: rotateY(360deg);
  }
}
#globe-container {
  width: 70vw;
  height: 70vh;
}
</style>
