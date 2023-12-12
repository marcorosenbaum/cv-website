<template>
  <div class="h-screen flex flex-col">
    <nav class="flex justify-between p-2 bg-black text-white">
      <div class="flex flex-col items-center">
        <div class="waviy text-m">
          <span style="--i: 1">M</span>
          <span style="--i: 2">a</span>
          <span style="--i: 3">r</span>
          <span style="--i: 4">c</span>
          <span style="--i: 5">o</span>
          <span class="ml-4" style="--i: 6">R</span>
          <span style="--i: 7">o</span>
          <span style="--i: 8">s</span>
          <span style="--i: 9">e</span>
          <span style="--i: 10">n</span>
          <span style="--i: 11">b</span>
          <span style="--i: 12">a</span>
          <span style="--i: 13">u</span>
          <span style="--i: 14">m</span>
        </div>
        <div class="waviy occupation">
          <span style="--i: 15">J</span>
          <span style="--i: 16">u</span>
          <span style="--i: 17">n</span>
          <span style="--i: 18">i</span>
          <span style="--i: 19">o</span>
          <span style="--i: 20">r</span>
          <span class="ml-4" style="--i: 21">F</span>
          <span style="--i: 22">r</span>
          <span style="--i: 23">o</span>
          <span style="--i: 24">n</span>
          <span style="--i: 25">t</span>
          <span style="--i: 26">e</span>
          <span style="--i: 27">n</span>
          <span style="--i: 28">d</span>
          <span class="ml-4" style="--i: 29">D</span>
          <span style="--i: 30">e</span>
          <span style="--i: 31">v</span>
          <span style="--i: 32">e</span>
          <span style="--i: 33">l</span>
          <span style="--i: 34">o</span>
          <span style="--i: 35">p</span>
          <span style="--i: 36">e</span>
          <span style="--i: 37">r</span>
        </div>
      </div>

      <div class="flex gap-10">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'education' }">My work</router-link>
        <router-link :to="{ name: 'gettoknowme' }">About me</router-link>
        <router-link :to="{ name: 'myjourney' }">My travel journey</router-link>
      </div>
    </nav>

    <router-view class="" />
  </div>
</template>

<script setup></script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.waviy span {
  position: relative;
  display: inline-block;
  color: #fff;
  font-size: 3rem;
  text-transform: uppercase;
  animation: flip 3s infinite;
  animation-iteration-count: 3;
  animation-delay: calc(0.07s * var(--i));
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
</style>
