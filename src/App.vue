<template>
  <nav class="flex justify-around items-center text-sm p-2 bg-gray-300 h-[5vh]">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'education' }">Education</router-link>
    <router-link :to="{ name: 'experience' }">Experience</router-link>
    <router-link :to="{ name: 'myjourney' }">My Journey</router-link>
  </nav>

  <router-view class="h-[95vh] p-2" />
</template>

<script setup></script>
