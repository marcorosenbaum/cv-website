<template>
  <div></div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "globe",
  methods: {
    initThreeScene() {
      console.log("test");
      // Create a scene
      const scene = new THREE.Scene();

      // Create a camera
      const camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 25;

      // Create a renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(innerWidth, innerHeight);
      renderer.setPixelRatio(window.pixelDeviceRatio);
      this.$el.appendChild(renderer.domElement);

      // Add a cube to the scene
      const geometry = new THREE.SphereGeometry(5, 50, 50);
      const texture = new THREE.TextureLoader().load(
        new URL("../assets/globe.jpeg", import.meta.url).toString()
      );

      const material = new THREE.MeshBasicMaterial({
        map: texture,
      });
      const globe = new THREE.Mesh(geometry, material);
      scene.add(globe);

      // Animation loop
      const animate = function () {
        requestAnimationFrame(animate);

        // Rotate the cube

        globe.rotation.x = THREE.MathUtils.degToRad(0);
        globe.rotation.y += 0.005;

        renderer.render(scene, camera);
      };

      // Start the animation loop
      animate();
    },
  },
  mounted() {
    this.initThreeScene();
  },
};
</script>
