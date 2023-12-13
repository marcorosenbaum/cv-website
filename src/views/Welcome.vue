<template>
  <div class="flex flex-col mt-[20%] items-center">
    <div class="waviy fadeInName">
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
    <div class="waviy occu fadeInOccu mt-[1rem]">
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
    <div id="html-spinner" class="mt-[4rem]">
      <router-link class="fadeInLink" :to="{ name: 'home' }"
        >Click here to view my portfolio</router-link
      >
    </div>
  </div>
</template>

<script></script>

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
  font-size: 4rem;
  text-transform: uppercase;
  animation: flip 3s infinite;
  animation-iteration-count: 1;
  animation-delay: calc(0.05s * var(--i));
}

.occu span {
  font-size: 2rem;
}
@keyframes flip {
  0%,
  80% {
    transform: rotateY(360deg);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateZ(-100px);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
}

.fadeInName {
  animation: fadeIn 3s ease-in;
}

.fadeInOccu {
  animation: fadeIn 5s ease-in;
}

.fadeInLink {
  animation: fadeIn 7s ease-in;
}
</style>
