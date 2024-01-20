<template>
  <section id="skills" class="relative">
    <!-- <img
          id="vector2"
          class="absolute -left-[30rem] -top-[22rem]"
          src="../assets/svg/vector2.svg
          alt="vector2"
        /> -->
    <h1 id="skills-header" class="heading text-7xl mt-[2rem]">Skills</h1>
    <div id="skills-wrapper" class="flex justify-around gap-16 mt-[2rem]">
      <div id="technical-wrapper" class="bg-background w-1/2 p-4 text-center">
        <h1 class="text-4xl">Technical</h1>

        <div class="flex">
          <div class="w-1/2">
            <div class="flex gap-2 items-center p-4">
              <img class="w-10" src="../assets/svg/html5.svg" alt="html icon" />
              <p class="text-2xl">HTML</p>
            </div>

            <div class="flex gap-2 items-center p-4">
              <img class="w-10" src="../assets/svg/css3.svg" alt="css icon" />
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

          <div class="w-1/2">
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
              <img class="w-10" src="../assets/svg/vue.svg" alt="html icon" />
              <p class="text-2xl">Vue</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="other-wrapper"
        class="bg-background w-1/2 p-4 text-2xl flex flex-col justify-between space-x-16"
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
</template>

<script>
export default {
  name: "HomeSkills",
};
</script>
