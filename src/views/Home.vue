<template>
  <div class="h-[10vh] bg-blackground sticky top-0 flex flex-col">
    <nav class="flex justify-between">
      <div class="flex flex-col items-center">
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

      <div id="nav" class="flex items-center gap-[3rem]">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'MyWork' }">My work</router-link>
        <router-link :to="{ name: 'gettoknowme' }">About me</router-link>
        <router-link :to="{ name: 'myjourney' }">My travel journey</router-link>
      </div>
    </nav>
  </div>

  <main>
    <section class="flex gap-[3rem] h-[90vh]">
      <div class="w-[60%]">
        <h1 class="text-7xl mt-[2rem]">About me.</h1>
        <h2 class="text-5xl mt-[2rem]">
          I'm <span id="span-marco">Marco</span>. A developer, an optimist and
          problem solver.
        </h2>
        <p class="mt-[4rem] text-xl">
          I like the challenge to solve problems logically and I like to build
          things.
        </p>
        <p class="mt-[1rem] text-xl">
          Believing that there is nothing I cannot do but only things I am not
          trained to do motivates me to continous learn.
        </p>
      </div>

      <div class="w-[40%]">
        <img
          id="photo-marco"
          class="rounded-3xl block mx-auto"
          src="../assets/images/img001.jpeg"
          alt="photo marco"
        />
      </div>
      <img
        class="orange block absolute bottom-10 left-[50%] justify-center w-10 h-10"
        src="../assets/svg/scroll-down.svg"
        alt=""
      />
    </section>

    <section class="flex justify-around gap-8 text-white">
      <div class="skills w-[40%] p-4 m-4 rounded-3xl text-center">
        <h1 class="text-3xl">Technical skills</h1>
        <div class="flex gap-4">
          <div class="w-[50%] flex flex-col items-end">
            <img class="w-10" src="../assets/svg/html5.svg" alt="html icon" />
            <img class="w-10" src="../assets/svg/css3.svg" alt="css icon" />
            <img
              class="w-10"
              src="../assets/svg/tailwind.svg"
              alt="tailwind icon"
            />
            <img
              class="w-10"
              src="../assets/svg/javascript.svg"
              alt="js icon"
            />
            <img
              class="w-10"
              src="../assets/svg/nodejs.svg"
              alt="nodejs icon"
            />
            <img class="w-10" src="../assets/svg/vue.svg" alt="vue icon" />
            <img
              class="w-10 h-10"
              src="../assets/svg/pinia.svg"
              alt="pinia icon"
            />
          </div>

          <div class="w-[50%] flex flex-col items-start">
            <p class="h-10">HTML</p>
            <p class="h-10">CSS</p>
            <p class="h-10">Tailwind</p>
            <p class="h-10">JavaScript</p>
            <p class="h-10">node.js</p>
            <p class="h-10">Vue</p>
            <p class="h-10">Pinia</p>
          </div>
        </div>
      </div>
      <div class="skills w-[40%] p-4 m-4 rounded-3xl text-center">
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
    <section class="h-[90vh]">
      <div></div>
    </section>
    <section class="flex justify-center items-center h-[90vh]">
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
#nav {
  color: rgb(255, 200, 100);
}

.orange {
  color: orange;
}

#span-marco {
  color: orange;
}

.waviy span {
  position: relative;
  display: inline-block;
  color: #fff;
  font-size: 2rem;
  _text-transform: uppercase;
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

.skills {
  background: linear-gradient(
    40deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(139, 190, 123, 1) 54%,
    rgba(253, 187, 45, 1) 100%
  );
}
</style>
