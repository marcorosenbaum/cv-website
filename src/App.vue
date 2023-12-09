<template>
  <div class="h-screen flex flex-col">
    <nav class="flex justify-around text-sm p-2 bg-black text-white">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'education' }">Education</router-link>
      <router-link :to="{ name: 'experience' }">Experience</router-link>
      <router-link :to="{ name: 'gettoknowme' }">Get to know me</router-link>
      <router-link :to="{ name: 'myjourney' }">My travel journey</router-link>
    </nav>

    <router-view class="" />
  </div>
</template>

<script setup></script>
