<template>
  <div>
    <div ref="sceneContainer"></div>
  </div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "globe",

  methods: {
    initThreeScene() {
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 25;

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(innerWidth, innerHeight);
      renderer.setPixelRatio(window.pixelDeviceRatio);
      this.$refs.sceneContainer.appendChild(renderer.domElement);

      const geometry = new THREE.SphereGeometry(5, 100, 100);
      const texture = new THREE.TextureLoader().load(
        new URL("../assets/images/globe.jpeg", import.meta.url).toString()
      );

      const material = new THREE.MeshBasicMaterial({
        map: texture,
      });
      const globe = new THREE.Mesh(geometry, material);

      scene.add(globe);

      const group = new THREE.Group();
      scene.add(group);

      const mouse = {
        x: 0,
        y: 0,
      };

      const animate = function () {
        requestAnimationFrame(animate);

        globe.rotation.x = THREE.MathUtils.degToRad(10);
        globe.rotation.y += mouse.x * 0.01;

        renderer.render(scene, camera);
      };
      animate();

      let mousedown = false;
      let preMousePosition = 0;

      addEventListener("mousedown", (event) => {
        console.log(event);
        mousedown = true;
      });

      addEventListener("mouseup", (event) => {
        mousedown = false;
        mouse.x = 0;
        preMousePosition = (event.clientX / innerWidth) * 2 - 1;
        console.log(preMousePosition);
      });

      addEventListener("mousemove", (event) => {
        if (mousedown) {
          console.log((event.clientX / innerWidth) * 2 - 1);
          mouse.x = (event.clientX / innerWidth) * 2 - 1;
        }
      });
    },
  },

  mounted() {
    this.initThreeScene();
  },
};
</script>
