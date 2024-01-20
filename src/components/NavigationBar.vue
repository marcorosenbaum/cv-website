<template>
  <div class="z-40 h-[5vh] bg-background sticky top-0 flex justify-end">
    <div id="nav" class="flex bg-background items-end gap-12">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style scoped>
#nav {
  color: #1f2b6a;
}
</style>
