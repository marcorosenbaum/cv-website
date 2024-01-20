<template>
  <div class="home">
    <navigation-bar />
    <home-aboutme />
    <home-skills />
    <home-mywork />
    <home-experience />
    <home-contact />
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import HomeAboutme from "../components/HomeAboutme.vue";
import HomeSkills from "../components/HomeSkills.vue";
import HomeMywork from "../components/HomeMywork.vue";
import HomeExperience from "../components/HomeExperience.vue";
import HomeContact from "../components/HomeContact.vue";

export default {
  name: "Home",
  components: {
    NavigationBar,
    HomeAboutme,
    HomeSkills,
    HomeMywork,
    HomeExperience,
    HomeContact,
  },
};
</script>

<style>
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

/* #vector1 {
  z-index: -1;
  scale: 0.5;
}
#vector2 {
  z-index: -1;
  scale: 0.4;
}
#vector3 {
  z-index: -1;
} */

.heading {
  display: inline-block;
  position: relative;
  z-index: 50;
}

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
</style>
