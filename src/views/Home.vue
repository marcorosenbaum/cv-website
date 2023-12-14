<template>
  <div
    class="h-[5vh] bg-opacity-50 bg-blackground sticky top-0 flex justify-end"
  >
    <!-- <div class="flex flex-col items-center">
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
      </div> -->

    <div id="nav" class="flex items-end gap-[3rem]">
      <a
        class="transition-transform transform hover:scale-110 duration-300"
        href="#aboutme"
        >About</a
      >
      <a
        class="transition-transform transform hover:scale-110 duration-300"
        href="#skills"
        >Skills</a
      >
      <a
        class="transition-transform transform hover:scale-110 duration-300"
        href="#experience"
        >Experience</a
      >
      <a
        class="transition-transform transform hover:scale-110 duration-300"
        href="#mywork"
        >my work</a
      >

      <!-- <router-link :to="{ name: 'myjourney' }">My travel journey</router-link> -->
    </div>
  </div>

  <main>
    <section id="aboutme" class="flex flex-col gap-[3rem]">
      <div class="flex h-[70vh]">
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
            class="w-[100%] rounded-xl block mx-auto mt-[2rem]"
            src="../assets/images/img001.jpeg"
            alt="photo marco"
          />
        </div>
      </div>

      <div class="flex justify-around">
        <div class="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="white"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"
            />
          </svg>
          <a
            class="pl-4 transition-transform transform hover:scale-110 duration-300"
            target="_blank"
            href="https://github.com/marcorosenbaum"
            >Github</a
          >
        </div>

        <div class="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"
            />
          </svg>
          <a
            class="pl-4 transition-transform transform hover:scale-110 duration-300"
            target="_blank"
            href="https://www.linkedin.com/in/marcorosenbaum"
            >LinkedIn</a
          >
        </div>

        <div class="flex gap-2 items-center">
          <img class="icon w-[40px]" src="../assets/svg/codewars.svg" alt="" />
          <a
            class="pl-4 transition-transform transform hover:scale-110 duration-300"
            target="_blank"
            href="https://www.codewars.com/users/marcorosenbaum"
            >Codewars</a
          >
        </div>

        <!-- <img
          class="w-10 h-10"
          src="../assets/svg/scroll-down.svg"
          alt="scroll icon"
        /> -->
      </div>
    </section>
    <hr class="my-[4rem]" />
    <section class="">
      <h1 id="skills" class="text-7xl mt-[2rem]">Skills.</h1>
      <div class="flex justify-around gap-16 mt-[2rem]">
        <div class="bg-gradient w-[50%] p-4 rounded-3xl text-center">
          <h1 class="text-4xl">Technical skills</h1>
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

            <div class="w-[60%] flex flex-col items-start text-2xl">
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
        <div
          class="bg-gradient w-[50%] p-4 rounded-3xl text-center text-2xl flex flex-col justify-between"
        >
          <h1 class="text-4xl">other skills</h1>
          <p>Team leading</p>
          <p>Project management</p>
          <p>Scrum</p>
          <p>Problem solving</p>
          <p>Patience</p>
          <p>Time management</p>
        </div>
      </div>
    </section>
    <hr class="my-[4rem]" />
    <section class="h-[90vh]">
      <h1 id="experience" class="text-7xl mt-[2rem]">Experience.</h1>

      <div class="flex flex-col gap-4">
        <div class="flex py-4 justify-between bg-gradient">
          <div class="flex w-full px-8 text-xl">
            <span class="w-[40%]">Coding Bootcamp</span>
            <img
              class="map-svg"
              src="../assets/svg/map-pin.svg
            "
              alt="map pin"
            />
            <span class="w-[40%]">Coding Bootcamps Europe, remote</span>
            <span class="w-[20%] text-right">2023</span>
          </div>
          <div
            v-on:click="codingIsOpen = !codingIsOpen"
            class="text-2xl px-8"
            v-text="codingIsOpen ? '-' : '+'"
          ></div>
        </div>

        <div v-if="codingIsOpen" class="h-[100px] border border-white-2">
          During this training I learned the basics of frontend development
          including JavaScript, Vue.js and Node.js. At the end of the course I
          worked on a final project and learned how to build and deploy a single
          page application in a team.
        </div>

        <div class="flex justify-between py-4 bg-gradient">
          <div class="flex w-full justify-between px-8 text-xl">
            <span class="w-[40%]">Team leader - Installation</span>
            <img
              class="map-svg"
              src="../assets/svg/map-pin.svg
            "
              alt="map pin"
            />
            <span class="w-[40%]">Future Energy, New Zealand</span>
            <span class="w-[20%] text-right">2022</span>
          </div>
          <div
            v-on:click="futureIsOpen = !futureIsOpen"
            class="text-2xl px-8"
            v-text="futureIsOpen ? '-' : '+'"
          ></div>
        </div>

        <div v-if="futureIsOpen" class="h-[100px] flex border border-white-2">
          <div class="w-[75%]">
            <p>Supervising employees on site</p>
            <p>Installation and debugging of solar systems</p>
          </div>
          <div class="w-[25%]">
            <!-- <img
              class="h-[100px]"
              src="../assets/images/future-energy-logo.png"
              alt="future energy logo"
            /> -->
          </div>
        </div>

        <div class="flex justify-between py-4 bg-gradient">
          <div class="flex w-full justify-between px-8 text-xl">
            <span class="w-[40%]">Travel</span
            ><img
              class="map-svg"
              src="../assets/svg/map-pin.svg
            "
              alt="map pin"
            />
            <span class="w-[40%]">planet earth</span>
            <span class="w-[20%] text-right">2021 - 2023</span>
          </div>
          <div
            v-on:click="travelIsOpen = !travelIsOpen"
            class="text-2xl px-8"
            v-text="travelIsOpen ? '-' : '+'"
          ></div>
        </div>
        <div v-if="travelIsOpen" class="flex border border-white-2">
          <div class="w-[50%]">
            <p>
              On this journey I traveled to Belgium, France, Spain, Indonesia,
              Thailand, Rarotonga and Australia.
            </p>
            <p>
              I also spent a year in New Zealand traveling the north and the
              south. During this time I developed a great sense to organize
              myself in stressful situations and increased my capability to
              communicate fluently in english. The opportunity to live and work
              in New Zealand was a very insightful and knowledgable experience.
            </p>
            <p>
              The globe on the right simulates my travel path. There is a blue
              ball traveling my journey in a endless loop.
            </p>
            <p>Click on the globe to get a full screen view!</p>
          </div>
          <div class="w-[50%]">
            <router-link :to="{ name: 'myjourney' }">
              <div id="globe-container">
                <globe v-if="travelIsOpen" />
              </div>
            </router-link>
          </div>
        </div>

        <div class="flex justify-between py-4 bg-gradient">
          <div class="flex w-full justify-between px-8 text-xl">
            <span class="w-[40%]">State certified technical engineer</span
            ><img
              class="map-svg"
              src="../assets/svg/map-pin.svg
            "
              alt="map pin"
            />
            <span class="w-[40%]">IQuando GmbH</span>
            <span class="w-[20%] text-right">2018 - 2020</span>
          </div>
          <div
            v-on:click="iquandoIsOpen = !iquandoIsOpen"
            class="text-2xl px-8"
            v-text="iquandoIsOpen ? '-' : '+'"
          ></div>
        </div>
        <div v-if="iquandoIsOpen" class="h-[100px] border border-white-2">
          hi FUTRE ERNERGY
        </div>

        <div class="flex justify-between py-4 bg-gradient">
          <div class="flex w-full justify-between px-8 text-xl">
            <span class="w-[40%]">Team leader</span
            ><img
              class="map-svg"
              src="../assets/svg/map-pin.svg
            "
              alt="map pin"
            />
            <span class="w-[40%]"
              >Eurogate Technical Services GmbH, Germany</span
            >
            <span class="w-[20%] text-right">2018 - 2021</span>
          </div>
          <div
            v-on:click="teamLeadEgtsIsOpen = !teamLeadEgtsIsOpen"
            class="text-2xl px-8"
            v-text="teamLeadEgtsIsOpen ? '-' : '+'"
          ></div>
        </div>
        <div v-if="teamLeadEgtsIsOpen" class="h-[100px] border border-white-2">
          <p>Supervising employees in different projects</p>
          <p>Analysing systems and equipment and planning upgrades</p>
          <p>Monitoring costs and appointments in projects</p>
        </div>

        <div class="flex justify-between py-4 bg-gradient">
          <div class="flex w-full justify-between px-8 text-xl">
            <span class="w-[40%]">Electronic technician</span
            ><img
              class="map-svg"
              src="../assets/svg/map-pin.svg
            "
              alt="map pin"
            />
            <span class="w-[40%]"
              >Eurogate Technical Services GmbH, Germany</span
            >
            <span class="w-[20%] text-right">2016 - 2018</span>
          </div>
          <div
            v-on:click="technicianEgtsIsOpen = !technicianEgtsIsOpen"
            class="text-2xl px-8"
            v-text="technicianEgtsIsOpen ? '-' : '+'"
          ></div>
        </div>
        <div
          v-if="technicianEgtsIsOpen"
          class="h-[100px] border border-white-2"
        >
          <p>Execution of maintenance and repairs</p>
          <p>Debugging of equipment during operation</p>
        </div>

        <div class="flex justify-between py-4 bg-gradient">
          <div class="flex w-full justify-between px-8 text-xl">
            <span class="w-[40%]">Mechatronics trainee</span
            ><img
              class="map-svg"
              src="../assets/svg/map-pin.svg
            "
              alt="map pin"
            />
            <span class="w-[40%]"
              >Eurogate Technical Services GmbH, Germany</span
            >
            <span class="w-[20%] text-right">2012 - 2016</span>
          </div>
          <div
            v-on:click="traineeIsOpen = !traineeIsOpen"
            class="text-2xl px-8"
            v-text="traineeIsOpen ? '-' : '+'"
          ></div>
        </div>
        <div v-if="traineeIsOpen" class="h-[100px] border border-white-2">
          <p>Maintenance of mechatronic and hydraulic systems</p>
          <p>Reparations of mechatronic and hydraulic systems</p>
          <p>
            Learning the basics of mechanical-, electrical, and
            mechatronic-systems
          </p>
        </div>
      </div>
    </section>

    <hr />

    <section id="mywork" class="">
      <h1 class="text-7xl mt-[2rem]">my work.</h1>
    </section>
  </main>

  <!-- <div class="flex h-full">
    
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
      codingIsOpen: false,
      futureIsOpen: false,
      travelIsOpen: false,
      iquandoIsOpen: false,
      teamLeadEgtsIsOpen: false,
      technicianEgtsIsOpen: false,
      traineeIsOpen: false,
    };
  },
  computed: {},
  methods: {
    unfoldAllExperiences() {
      this.codingIsOpen = false;
      this.futureIsOpen = false;
      this.travelIsOpen = false;
      this.iquandoIsOpen = false;
      this.teamLeadEgtsIsOpen = false;
      this.technicianEgtsIsOpen = false;
      this.traineeIsOpen = false;
    },
    appendGlobe() {},
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
  width: 100%;
}

.bg-gradient {
  background: linear-gradient(
    40deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(139, 190, 123, 1) 54%,
    rgba(253, 187, 45, 1) 100%
  );
}

hr {
  color: orange;
}

.icon {
  fill: currentColor;
  stroke: currentColor;
  color: currentColor;
  background-color: currentColor;
  border-radius: 8px;
}
</style>
