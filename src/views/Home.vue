<template>
  <div class="home">
    <div
      class="z-50 h-[5vh] bg-opacity-20 bg-gradient sticky top-0 flex justify-end"
    >
      <div id="nav" class="flex items-end gap-[3rem]">
        <a
          class="transition-transform hover:scale-110 duration-300"
          href="#aboutme"
          >About me</a
        >
        <a
          class="transition-transform hover:scale-110 duration-300"
          href="#skills"
          >Skills</a
        >

        <a
          class="transition-transform hover:scale-110 duration-300"
          href="#mywork"
          >My work</a
        >
        <a
          class="transition-transform hover:scale-110 duration-300"
          href="#experience"
          >Experience</a
        >
        <a
          class="transition-transform hover:scale-110 duration-300"
          href="#contact"
          >Contact</a
        >

        <!-- <router-link :to="{ name: 'myjourney' }">My travel journey</router-link> -->
      </div>
    </div>

    <main>
      <section id="aboutme" class="flex flex-col gap-[3rem]">
        <!-- <img
          id="vector1"
          class="absolute -left-[20rem] -top-[4rem]"
          src="../assets/svg/vector1.svg"
          alt="vector1"
        /> -->
        <div id="aboutme-wrapper" class="flex gap-[2rem]">
          <div class="relative w-[100%]">
            <h1 class="heading text-7xl mt-[2rem]">About me</h1>
            <h2 class="text-5xl mt-[2rem]">
              I'm <b>Marco</b>. A&nbsp;developer, an optimist and problem
              solver.
            </h2>
            <p class="mt-[4rem] text-xl">
              I like the challenge to solve problems logically and I like to
              build things.
            </p>
            <p class="mt-[1rem] text-xl">
              Believing that there is nothing I cannot do but only things I am
              not trained to do motivates me to continous learn.
            </p>

            <p
              id="read-more"
              class="rounded-xl p-2 mt-[6rem] inline-block cursor-pointer transition-transform hover:scale-105 duration-300"
              @click="aboutMePersonal = !aboutMePersonal"
              v-if="!aboutMePersonal"
            >
              Read more about me
            </p>

            <p v-if="aboutMePersonal" class="mt-[1rem] text-xl">
              Apart from coding I try to spend as much time in nature as
              possible. I enjoy reading books like "Unlimited Memory" by Kevin
              Horsley or "Limitless" by Jim Kwik.<br />In my holidays I like to
              travel. Especially to places with unique landscapes. And I enjoy
              engaging in physically demanding sports that require focus, such
              as climbing.<br />But none of these things can compare to having
              dinner with friends and playing a great strategy board game like
              Catan afterward.
            </p>
          </div>

          <div id="photo-wrapper" class="w-[60%]">
            <img
              id="photo-marco"
              class="w-[100%] block mx-auto mt-[2rem]"
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
              class="pl-4 transition-transform hover:scale-110 duration-300"
              target="_blank"
              href="https://www.linkedin.com/in/marcorosenbaum"
              >LinkedIn</a
            >
          </div>

          <div class="flex gap-2 items-center">
            <img
              class="icon w-[40px]"
              src="../assets/svg/codewars.svg"
              alt=""
            />
            <a
              class="pl-4 transition-transform hover:scale-110 duration-300"
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

      <section id="skills" class="relative">
        <!-- <img
          id="vector2"
          class="absolute -left-[30rem] -top-[22rem]"
          src="../assets/svg/vector2.svg"
          alt="vector2"
        /> -->
        <h1 id="skills-header" class="heading text-7xl mt-[2rem]">Skills</h1>
        <div id="skills-wrapper" class="flex justify-around gap-16 mt-[2rem]">
          <div
            id="technical-wrapper"
            class="bg-gradient w-[50%] p-4 text-center"
          >
            <h1 class="text-4xl">Technical</h1>

            <div class="flex">
              <div class="w-[50%]">
                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/html5.svg"
                    alt="html icon"
                  />
                  <p class="text-2xl">HTML</p>
                </div>

                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/css3.svg"
                    alt="css icon"
                  />
                  <p class="text-2xl">CSS</p>
                </div>

                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/tailwind.svg"
                    alt="tailwind icon"
                  />
                  <p class="text-2xl">Tailwind</p>
                </div>

                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/javascript.svg"
                    alt="js icon"
                  />
                  <p class="text-2xl">JavaScript</p>
                </div>
              </div>

              <div class="w-[50%]">
                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/nodejs.svg"
                    alt="nodejs icon"
                  />
                  <p class="text-2xl">Node</p>
                </div>

                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10 h-10"
                    src="../assets/svg/pinia.svg"
                    alt="pinia icon"
                  />
                  <p class="text-2xl">Pinia</p>
                </div>

                <div class="flex gap-2 items-center p-4">
                  <img
                    class="w-10"
                    src="../assets/svg/vue.svg"
                    alt="html icon"
                  />
                  <p class="text-2xl">Vue</p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="other-wrapper"
            class="bg-gradient w-[50%] p-4 text-2xl flex flex-col justify-between space-x-16"
          >
            <h1 class="text-4xl text-center">Other</h1>

            <p>Team leading</p>
            <p>Project management</p>
            <p>Scrum</p>
            <p>Problem solving</p>
            <p>Patience</p>
            <p>Time management</p>
          </div>
        </div>
      </section>

      <section class="relative" id="mywork">
        <!-- <img
          id="vector2"
          class="absolute -left-[30rem] -top-[9rem]"
          src="../assets/svg/vector1.svg"
          alt="vector1"
        /> -->
        <h1 class="heading text-7xl mt-[2rem]">My work</h1>

        <div id="mywork-wrapper" class="flex gap-[2rem] mt-[2rem]">
          <div class="project-card-wrapper w-[50%] flex flex-col gap-[2rem]">
            <div class="project-card bg-gradient p-4 flex flex-col">
              <p class="text-2xl text-center">My personal website</p>

              <img
                class=""
                src="../assets/images/cv-website.png"
                alt="website photo"
              />

              <p>
                This website represents my cv and its purpose is to give the
                visiter a quick description about me and what I do.
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

            <div class="project-card bg-gradient p-4 flex flex-col">
              <p class="text-2xl text-center">3D Globe</p>

              <div class="relative" id="globe-container">
                <img
                  class="w-[100%]"
                  src="../assets/images/3d-globe.png"
                  alt="3d globe"
                />
                <!-- <globe class="globe" /> -->
                <div class="overlay"></div>
              </div>

              <p>
                This globe represents my travel in 2022/2023. I added the main
                locations as data points on the globe. The blue ball moves on
                the path I traveled.
              </p>

              <router-link :to="{ name: 'myjourney' }">
                <p>
                  Click <strong>here</strong> to view the globe on full screen
                  and enable rotation with your mouse.
                </p>
              </router-link>

              <div class="flex justify-around">
                <div class="">JavaScript</div>
                <div class="">Three.js</div>
              </div>

              <!-- <div class="flex gap-2 justify-center">
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
                  href=""
                  >Github</a
                >
              </div> -->
            </div>
          </div>

          <div class="project-card-wrapper w-[50%] flex flex-col gap-[2rem]">
            <div class="project-card bg-gradient p-4 flex flex-col">
              <p class="text-2xl text-center">Concert Compass</p>
              <div class="flex justify-center">
                <div class="w-[100%] flex gap-4 justify-around">
                  <img
                    class="w-[30%]"
                    src="../assets/images/concert-compass-1.png"
                    alt=""
                  />
                  <img
                    class="w-[30%]"
                    src="../assets/images/concert-compass-2.png"
                    alt=""
                  />
                  <img
                    class="w-[30%]"
                    src="../assets/images/concert-compass-3.png"
                    alt=""
                  />
                </div>
              </div>
              <p>
                The final project I worked on at Coding-Bootcamps-Europe.
                Concert compass is an app to track concerts. It works with the
                ticketmaster api and pinia to store selected concerts in the
                localstorage.
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
            <div class="project-card bg-gradient p-4 flex flex-col">
              <p class="text-2xl text-center">Cooding Bootcamp tasks</p>

              <div class="flex w-[100%] gap-4 p-4 justify-around">
                <img
                  class="w-[50%]"
                  src="../assets/images/shopping-layout.png"
                  alt="shopping layout"
                />
                <img
                  class="w-[40%]"
                  src="../assets/images/todo-app.png"
                  alt="todo app"
                />
              </div>

              <p>
                You can find several tasks of the coding bootcamp in this
                repository. For example a todo app that is working with a todo
                api on a local backend, the rebuild of a shopping layout and the
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

      <section id="experience">
        <h1 class="heading text-7xl mt-[2rem]">Experience</h1>

        <div class="flex flex-col gap-4 mt-[2rem]">
          <div
            v-on:click="codingIsOpen = !codingIsOpen"
            class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex py-4 justify-between bg-gradient"
          >
            <div class="flex w-full px-8 text-xl">
              <span class="w-[40%]">Coding Bootcamp</span>

              <span class="w-[40%]">@ Coding Bootcamps Europe, remote</span>
              <span class="w-[20%] text-right">2023</span>
            </div>
            <div
              class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
              v-text="codingIsOpen ? '-' : '+'"
            ></div>
          </div>
          <div v-if="codingIsOpen" class="flex border border-white-2">
            <div class="w-[80%] p-4">
              <p>During this course I learned the basics of web-development.</p>
              <ul>
                <li class="list-disc">HTML</li>
                <li class="list-disc">CSS</li>
                <li class="list-disc">Responsive design</li>

                <li class="list-disc">JavaScript</li>
                <li class="list-disc">Vue</li>
                <li class="list-disc">Pinia</li>
                <li class="list-disc">
                  Implementation of testing (cypress, jest)
                </li>
                <li class="list-disc">Node</li>
                <li class="list-disc">Git</li>
              </ul>
            </div>

            <div class="w-[20%] justify-center my-auto">
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
                  href="https://www.coding-bootcamps.eu/webentwickler-werden-bildungsgutschein/?utm_source=google&utm_medium=cpc&utm_campaign=17147411238&utm_term=online%20coding%20bootcamp&matchtype=p&device=c&gad_source=1&gclid=CjwKCAiA-P-rBhBEEiwAQEXhHzhOcFneeL2PLi0wO9wjSqBL1V6K-omSe5awQUTd7UqO48xUuj9szRoCcpcQAvD_BwE"
                  >Website</a
                >
              </div>
            </div>
          </div>

          <div
            v-on:click="futureIsOpen = !futureIsOpen"
            class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex justify-between py-4 bg-gradient"
          >
            <div class="flex w-full justify-between px-8 text-xl">
              <span class="w-[40%]">Team leader - Installation</span>

              <span class="w-[40%]">@ Future Energy, New Zealand</span>
              <span class="w-[20%] text-right">2022</span>
            </div>
            <div
              class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
              v-text="futureIsOpen ? '-' : '+'"
            ></div>
          </div>

          <div v-if="futureIsOpen" class="flex border border-white-2">
            <div class="w-[80%] p-4">
              <ul>
                <li class="list-disc">Supervising employees on site</li>
                <li class="list-disc">
                  Installation of commercial and residential solar PV systems
                </li>
                <li class="list-disc">
                  Installation of energy usage and solar generation monitoring
                  equipment
                </li>
                <li class="list-disc">
                  Installation and debugging of solar systems
                </li>
                <li class="list-disc">Site inspections</li>
              </ul>
            </div>

            <div class="w-[20%] justify-center my-auto">
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
                  href="https://www.future-energy.co.nz/"
                  >Website</a
                >
              </div>
            </div>
          </div>

          <div
            v-on:click="travelIsOpen = !travelIsOpen"
            class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex justify-between py-4 bg-gradient"
          >
            <div class="flex w-full justify-between px-8 text-xl">
              <span class="w-[40%]">Travel</span>
              <span class="w-[40%]">@ planet earth</span>
              <span class="w-[20%] text-right">2021 - 2023</span>
            </div>
            <div
              class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
              v-text="travelIsOpen ? '-' : '+'"
            ></div>
          </div>
          <div v-if="travelIsOpen" class="p-4 flex border border-white-2">
            <div class="w-[30%]">
              <p>Countries I visited:</p>
              <ul>
                <li class="list-disc">Belgium</li>
                <li class="list-disc">France</li>
                <li class="list-disc">Spain</li>
                <li class="list-disc">Indonesia</li>
                <li class="list-disc">Australia</li>
                <li class="list-disc">New Zealand</li>
                <li class="list-disc">Rarotonga</li>
                <li class="list-disc">Thailand</li>
              </ul>
            </div>
            <div class="w-[70%]">
              <p>
                During this time I developed a great sense to organize myself in
                stressful situations and increased my capability to communicate
                fluently in english. The opportunity to live and work in New
                Zealand was a very insightful and knowledgable experience.
              </p>
            </div>
          </div>

          <div
            v-on:click="iquandoIsOpen = !iquandoIsOpen"
            class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex justify-between py-4 bg-gradient"
          >
            <div class="flex w-full justify-between px-8 text-xl">
              <span class="w-[40%]">State certified technical engineer</span>
              <span class="w-[40%]">@ IQuando GmbH, Germany</span>
              <span class="w-[20%] text-right">2018 - 2020</span>
            </div>
            <div
              class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
              v-text="iquandoIsOpen ? '-' : '+'"
            ></div>
          </div>
          <div v-if="iquandoIsOpen" class="flex border border-white-2">
            <div class="w-[80%] p-4">
              <ul>
                <li class="list-disc">Project management</li>
                <li class="list-disc">
                  Initiate and implement suitable quality-assurance measures
                </li>
                <li class="list-disc">
                  Market- and customer-oriented completion of management tasks
                </li>
                <li class="list-disc">
                  Demonstrate ethical, economic and ecological awareness within
                  the context of sustainable development
                </li>
                <li class="list-disc">
                  Autonomous market and customer oriented implementation of new
                  technologies
                </li>
              </ul>
              <!-- <p>• Execution of maintenance and repairs</p>
              <p>• Debugging of equipment during operation</p> -->
            </div>
            <div class="w-[20%] justify-center my-auto">
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
                  href="https://iquando.de/"
                  >Website</a
                >
              </div>
            </div>
          </div>

          <div
            v-on:click="teamLeadEgtsIsOpen = !teamLeadEgtsIsOpen"
            class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex justify-between py-4 bg-gradient"
          >
            <div class="flex w-full justify-between px-8 text-xl">
              <span class="w-[40%]">Team leader, technician</span>
              <span class="w-[40%]"
                >@ Eurogate Technical Services GmbH, Germany</span
              >
              <span class="w-[20%] text-right">2012 - 2021</span>
            </div>
            <div
              class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
              v-text="teamLeadEgtsIsOpen ? '-' : '+'"
            ></div>
          </div>
          <div v-if="teamLeadEgtsIsOpen" class="flex border border-white-2">
            <div class="w-[80%] p-4">
              <ul>
                <li class="list-disc">
                  Supervising employees in different projects
                </li>
                <li class="list-disc">
                  Debugging of equipment during operation
                </li>
                <li class="list-disc">Execution of maintenance and repairs</li>
                <li class="list-disc">
                  Analysing systems and equipment and planning upgrades
                </li>
                <li class="list-disc">
                  Monitoring costs and appointments in projects
                </li>
              </ul>
            </div>
            <div class="w-[20%] justify-center my-auto">
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
                  href="https://www1.eurogate.de/Ueber-uns"
                  >Website</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h1 id="skills" class="heading text-7xl mt-[2rem]">Contact me</h1>
        <div class="flex flex-col justify-around mt-[2rem]">
          <p class="text-xl mt-[2rem]">
            If you are interested in working or connecting with me, please do
            not hesitate to contact me.
          </p>
          <div class="flex justify-around my-[2rem]">
            <div class="flex gap-2 items-center mt-[2rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                />
              </svg>
              <a
                class="pl-4 transition-transform hover:scale-110 duration-300"
                href="mailto:contact.marco.website@gmail.com"
                >E-mail</a
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
                class="pl-4 transition-transform hover:scale-110 duration-300"
                target="_blank"
                href="https://www.linkedin.com/in/marcorosenbaum"
                >LinkedIn</a
              >
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import globe from "../components/Globe.vue";

export default {
  name: "Education",
  data() {
    return {
      aboutMePersonal: false,
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
  color: #1f2b6a;
}

#read-more {
  background-color: #ff9142;
  box-shadow: 0px 5px 5px rgb(96, 96, 96);
}

.orange {
  color: #001060;
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
  background-color: #fff6de;
}

.icon {
  fill: white;
  stroke: white;
  color: currentColor;
  background-color: white;
  border-radius: 8px;
}

.project-card * {
  padding: 0.5rem 0 0 0;
}

.overlay {
  position: absolute;
  top: 0;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0);
  z-index: 100;
}

.globe {
  z-index: 1;
}

.home {
  animation: fadeIn 1s ease-in;
  margin: 0 4rem 0 4rem;
}

#vector1 {
  z-index: -1;
  scale: 0.5;
}
#vector2 {
  z-index: -1;
  scale: 0.4;
}
#vector3 {
  z-index: -1;
}

/* .heading {
  
} */

section {
  margin-bottom: 8rem;
}

@media screen and (max-width: 1100px) {
  #aboutme-wrapper,
  #skills-wrapper,
  #mywork-wrapper {
    display: flex;
    flex-direction: column;
  }
  #photo-wrapper,
  #technical-wrapper,
  #other-wrapper,
  .project-card-wrapper {
    width: 100%;
  }
}

@media screen and (max-width: 800px) {
  html {
    font-size: 10px;
  }
}
</style>
