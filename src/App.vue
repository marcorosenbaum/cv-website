<template>
  <nav class="p-4">
    <router-link class="p-4" :to="{ name: 'home' }">Home</router-link>
    <router-link class="p-4" :to="{ name: 'education' }">Education</router-link>
    <router-link class="p-4" :to="{ name: 'experience' }"
      >Experience</router-link
    >
    <router-link class="p-4" :to="{ name: 'myjourney' }"
      >My Journey</router-link
    >
  </nav>

  <router-view />
</template>

<script setup></script>
