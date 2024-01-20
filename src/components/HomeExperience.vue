<template>
  <section id="experience">
    <h1 class="heading z-50 text-7xl mt-8">Experience</h1>

    <div class="flex flex-col gap-4 mt-8">
      <div
        v-on:click="
          (teamLeadEgtsIsOpen = false),
            (iquandoIsOpen = false),
            (futureIsOpen = false),
            (travelIsOpen = false),
            (codingIsOpen = !codingIsOpen)
        "
        class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex py-4 justify-between bg-background"
      >
        <div class="flex w-full px-8 text-xl">
          <span class="w-[40%]">Coding Bootcamp</span>

          <span class="w-2/5">@ Coding Bootcamps Europe, remote</span>
          <span class="w-1/5 text-right">2023</span>
        </div>
        <div
          class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
          v-text="codingIsOpen ? '-' : '+'"
        ></div>
      </div>
      <div v-if="codingIsOpen" class="flex border border-white-2">
        <div class="w-4/5 p-4">
          <p>During this course I learned the basics of web-development.</p>
          <div class="flex flex-wrap gap-4 w-[80%] p-4">
            <p>• HTML</p>
            <p>• CSS</p>
            <p>• Responsive design</p>
            <p>• JavaScript</p>
            <p>• Vue</p>
            <p>• Pinia</p>
            <p>• Implementation of testing (cypress, jest)</p>
            <p>• Node</p>
            <p>• Git</p>
          </div>
        </div>

        <div class="w-1/5 justify-center my-auto">
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
        v-on:click="
          (teamLeadEgtsIsOpen = false),
            (iquandoIsOpen = false),
            (futureIsOpen = !futureIsOpen),
            (travelIsOpen = false),
            (codingIsOpen = false)
        "
        class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex justify-between py-4 bg-background"
      >
        <div class="flex w-full justify-between px-8 text-xl">
          <span class="w-2/5">Team leader - Installation</span>

          <span class="w-2/5">@ Future Energy, New Zealand</span>
          <span class="w-1/5 text-right">2022</span>
        </div>
        <div
          class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
          v-text="futureIsOpen ? '-' : '+'"
        ></div>
      </div>

      <div v-if="futureIsOpen" class="flex border border-white-2">
        <div class="flex flex-wrap gap-4 w-4/5 p-4">
          <p>• Supervising employees on site</p>
          <p>• Installation of commercial and residential solar PV systems</p>
          <p>
            • Installation of energy usage and solar generation monitoring
            equipment
          </p>
          <p>• Debugging of electronic systems</p>
          <p>• Site inspections</p>
        </div>

        <div class="w-1/5 justify-center my-auto">
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
        v-on:click="
          (teamLeadEgtsIsOpen = false),
            (iquandoIsOpen = false),
            (futureIsOpen = false),
            (travelIsOpen = !travelIsOpen),
            (codingIsOpen = false)
        "
        class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex justify-between py-4 bg-background"
      >
        <div class="flex w-full justify-between px-8 text-xl">
          <span class="w-2/5">Travel</span>
          <span class="w-2/5">@ planet earth</span>
          <span class="w-1/5 text-right">2021 - 2023</span>
        </div>
        <div
          class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
          v-text="travelIsOpen ? '-' : '+'"
        ></div>
      </div>
      <div v-if="travelIsOpen" class="p-4 flex flex-col border border-white-2">
        <p>
          During this time I developed a great sense to organize myself in
          stressful situations and increased my capability to communicate
          fluently in english. The opportunity to live and work in New Zealand
          was a very insightful and knowledgable experience.
        </p>
        <div>
          <p class="mt-4">Countries I visited:</p>
          <div class="flex flex-wrap gap-4">
            <p>• Belgium</p>
            <p>• France</p>
            <p>• Spain</p>
            <p>• Indonesia</p>
            <p>• Australia</p>
            <p>• New Zealand</p>
            <p>• Rarotonga</p>
            <p>• Thailand</p>
          </div>
        </div>
      </div>

      <div
        v-on:click="
          (teamLeadEgtsIsOpen = false),
            (iquandoIsOpen = !iquandoIsOpen),
            (futureIsOpen = false),
            (travelIsOpen = false),
            (codingIsOpen = false)
        "
        class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex justify-between py-4 bg-background"
      >
        <div class="flex w-full justify-between px-8 text-xl">
          <span class="w-2/5">State certified technical engineer</span>
          <span class="w-2/5">@ IQuando GmbH, Germany</span>
          <span class="w-1/5 text-right">2018 - 2020</span>
        </div>
        <div
          class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
          v-text="iquandoIsOpen ? '-' : '+'"
        ></div>
      </div>
      <div v-if="iquandoIsOpen" class="flex border border-white-2">
        <div class="flex flex-wrap gap-4 w-4/5 p-4">
          <p>• Project management</p>
          <p>• Initiate and implement suitable quality-assurance measures</p>
          <p>• Market- and customer-oriented completion of management tasks</p>
          <p>
            • Demonstrate ethical, economic and ecological awareness within the
            context of sustainable development
          </p>
          <p>
            • Market and customer oriented implementation of new technologies
          </p>
        </div>

        <div class="w-1/5 justify-center my-auto">
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
        v-on:click="
          (teamLeadEgtsIsOpen = !teamLeadEgtsIsOpen),
            (iquandoIsOpen = false),
            (futureIsOpen = false),
            (travelIsOpen = false),
            (codingIsOpen = false)
        "
        class="transition-transform hover:scale-[98%] duration-300 cursor-pointer flex justify-between py-4 bg-background"
      >
        <div class="flex w-full justify-between px-8 text-xl">
          <span class="w-2/5">Team leader, technician</span>
          <span class="w-2/5">@ Eurogate Technical Services GmbH, Germany</span>
          <span class="w-1/5 text-right">2012 - 2021</span>
        </div>
        <div
          class="text-2xl px-8 transition-transform hover:scale-150 duration-300 cursor-pointer"
          v-text="teamLeadEgtsIsOpen ? '-' : '+'"
        ></div>
      </div>
      <div v-if="teamLeadEgtsIsOpen" class="flex border border-white-2">
        <div class="flex flex-wrap gap-4 w-4/5 p-4">
          <p>• Supervising employees in different projects</p>
          <p>• Debugging of equipment during operation</p>
          <p>• Execution of maintenance and repairs</p>
          <p>• Analysing systems and equipment and planning upgrades</p>
          <p>• Monitoring costs and appointments in projects</p>
        </div>
        <div class="w-1/5 justify-center my-auto">
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
</template>

<script>
export default {
  name: "HomeExperience",
  data() {
    return {
      codingIsOpen: false,
      futureIsOpen: false,
      travelIsOpen: false,
      iquandoIsOpen: false,
      teamLeadEgtsIsOpen: false,
    };
  },
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
    // appendGlobe() {},
  },
};
</script>
