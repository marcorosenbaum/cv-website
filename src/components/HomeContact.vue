<template>
  <section id="contact">
    <h1 id="skills" class="heading text-7xl mt-8">Contact me</h1>
    <div class="flex flex-col justify-around mt-8">
      <p class="text-xl mt-8">
        If you are interested in working or connecting with me, please do not
        hesitate to contact me.
      </p>
      <div class="flex justify-around mt-16">
        <div class="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5rem"
            height="2.5rem"
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
            width="2.5rem"
            height="2.5rem"
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
</template>

<script>
export default {
  name: "HomeContact",
};
</script>
