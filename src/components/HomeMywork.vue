<template>
  <section class="relative" id="mywork">
    <!-- <img
          id="vector2"
          class="absolute -left-[30rem] -top-[9rem]"
          src="../assets/svg/vector1.svg"
          alt="vector1"
        /> -->
    <h1 class="heading text-7xl mt-[2rem]">My work</h1>

    <div id="mywork-wrapper" class="flex gap-8 mt-8">
      <div class="project-card-wrapper w-1/2 flex flex-col gap-8">
        <div class="project-card bg-background p-4 flex flex-col">
          <p class="text-2xl text-center">My personal website</p>

          <img src="../assets/images/cv-website.png" alt="website photo" />

          <p>
            This website represents my cv and its purpose is to give the visiter
            a quick description about me and what I do.
          </p>

          <div class="flex justify-around">
            <div class="">JavaScript</div>
            <div class="">Vue</div>
            <div class="">Tailwind</div>
          </div>

          <div class="flex gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"
              />
            </svg>
            <a
              class="pl-4 transition-transform hover:scale-110 duration-300"
              target="_blank"
              href="https://github.com/marcorosenbaum/cv-website"
              >Github</a
            >
          </div>
        </div>

        <div class="project-card bg-background p-4 flex flex-col">
          <p class="text-2xl text-center">3D Globe</p>

          <div class="relative w-full" id="globe-container">
            <globe class="globe" />
            <div class="overlay"></div>
          </div>

          <p>
            This globe represents my travel in 2022/2023. I added the main
            locations as data points on the globe. The blue ball moves on the
            path I traveled.
          </p>

          <router-link :to="{ name: 'myjourney' }">
            <p>
              Click <strong class="text-callToAction">here</strong> to view the
              globe on full screen and enable rotation with your mouse.
            </p>
          </router-link>

          <div class="flex justify-around">
            <div>JavaScript</div>
            <div>Three.js</div>
          </div>
        </div>
      </div>

      <div class="project-card-wrapper w-1/2 flex flex-col gap-8">
        <div class="project-card bg-background p-4 flex flex-col">
          <p class="text-2xl text-center">Concert Compass</p>
          <div class="flex justify-center">
            <div class="w-full flex gap-2 justify-around">
              <img
                class="w-1/3"
                src="../assets/images/concert-compass-1.png"
                alt=""
              />
              <img
                class="w-1/3"
                src="../assets/images/concert-compass-2.png"
                alt=""
              />
              <img
                class="w-1/3"
                src="../assets/images/concert-compass-3.png"
                alt=""
              />
            </div>
          </div>
          <p>
            The final project I worked on at Coding-Bootcamps-Europe. Concert
            compass is an app to track concerts. It works with the ticketmaster
            api and pinia to store selected concerts in the localstorage.
          </p>
          <div class="flex justify-around">
            <div class="">JavaScript</div>
            <div class="">Vue</div>
            <div class="">Tailwind</div>
            <div class="">Pinia</div>
          </div>
          <div class="flex justify-around">
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                class="bi bi-globe2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"
                />
              </svg>
              <a
                class="pl-4 transition-transform hover:scale-110 duration-300"
                target="_blank"
                href="https://cbe-concert-compass.netlify.app"
                >Website</a
              >
            </div>

            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                class="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"
                />
              </svg>
              <a
                class="pl-4 transition-transform hover:scale-110 duration-300"
                target="_blank"
                href="https://github.com/coding-bootcamps-eu/final-project-2023-08-concert-compass"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div class="project-card bg-background p-4 flex flex-col">
          <p class="text-2xl text-center">Coding Bootcamp tasks</p>

          <div class="flex w-[100%] gap-4 p-4 justify-around">
            <img
              src="../assets/images/shopping-layout.png"
              alt="shopping layout"
            />
          </div>

          <p>
            You can find several tasks of the coding bootcamp in this
            repository. For example a todo app that is working with a todo api
            on a local backend, the rebuild of a shopping layout and the
            implementation of testing (cypress, jest) in a project.
          </p>

          <div class="flex justify-around flex-wrap">
            <div class="">CSS</div>
            <div class="">JavaScript</div>
            <div class="">Vue</div>
            <div class="">Cypress</div>
            <div class="">Jest</div>
            <div class="">Node</div>
          </div>

          <div class="flex gap-2 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2rem"
              height="2rem"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"
              />
            </svg>
            <a
              class="pl-4 transition-transform hover:scale-110 duration-300"
              target="_blank"
              href="https://github.com/marcorosenbaum/coding-bootcamp-tasks"
              >Github</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import globe from "../components/Globe.vue";

export default {
  name: "HomeMywork",
  components: {
    globe,
  },
};
</script>
