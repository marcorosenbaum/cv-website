<template>
  <div id="scene-container" ref="sceneContainer">
    <canvas id="globecanvas" ref="globecanvas"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
import { render } from "vue";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import Stats from "../../node_modules/three/examples/jsm/libs/stats.module";
import vertexShader from "../assets/shaders/vertex.glsl";
import fragmentShader from "../assets/shaders/fragment.glsl";
import atmosphereVertexshader from "../assets/shaders/atmosphereVertex.glsl";
import atmosphereFragmentshader from "../assets/shaders/atmosphereFragment.glsl";

// import countries from "../../src/three-files/custom-geo.json";

export default {
  name: "globe",

  methods: {
    initThreeScene() {
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        35,
        this.$refs.sceneContainer.clientWidth /
          this.$refs.sceneContainer.clientHeight,
        0.1,
        1000
      );
      camera.position.z = 15;

      const globecanvas = document.getElementById("globecanvas");
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: globecanvas,
      });

      renderer.setSize(
        this.$refs.sceneContainer.clientWidth,
        this.$refs.sceneContainer.clientHeight
      );
      renderer.setPixelRatio(window.pixelDeviceRatio);

      this.$refs.sceneContainer.appendChild(renderer.domElement);

      // globe
      const geometry = new THREE.SphereGeometry(5, 100, 100);
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load(
              new URL("../assets/images/globe.jpeg", import.meta.url).toString()
            ),
          },
        },
      });
      const globe = new THREE.Mesh(geometry, material);

      // scene.add(globe);

      // atmosphere
      const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(5, 100, 100),
        new THREE.ShaderMaterial({
          vertexShader: atmosphereVertexshader,
          fragmentShader: atmosphereFragmentshader,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide,
        })
      );
      atmosphere.scale.set(1.2, 1.2, 1.2);
      // scene.add(atmosphere);

      // stars
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      });
      const starVertices = [];
      for (let i = 0; i < 1000000; i++) {
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = (Math.random() * (300 - -300) + -500) * 100;
        starVertices.push(x, y, z);
      }
      starGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starVertices, 3)
      );
      const stars = new THREE.Points(starGeometry, starMaterial);
      //scene.add(stars);

      // --------- GROUP
      const group = new THREE.Group();
      group.add(globe, stars, atmosphere);

      window.addEventListener("resize", onWindowResize);
      function onWindowResize() {
        document.getElementById("globecanvas").style.width = "inherit";
        document.getElementById("globecanvas").style.height = "inherit";

        camera.aspect =
          this.$refs.sceneContainer.width / this.$refs.sceneContainer.height;
        camera.updateProjectionMatrix();
        renderer.setSize(
          this.$refs.sceneContainer.width,
          this.$refs.sceneContainer.height
        );
        render();
      }

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.update();

      // const stats = new Stats();
      // this.$refs.sceneContainer.appendChild(stats.domElement);

      // Function to add a data point to the globe
      function addDataPoint(latitude, longitude, color) {
        const phi = (90 - latitude) * (Math.PI / 180);
        const theta = longitude - 140 * (Math.PI / 180);
        const radius = 5; // Adjust the radius of the sphere

        // Create a point
        const pointGeometry = new THREE.SphereGeometry(0.05);
        const pointMaterial = new THREE.MeshBasicMaterial({ color });
        const point = new THREE.Mesh(pointGeometry, pointMaterial);

        point.position.x = radius * Math.sin(phi) * Math.cos(theta);
        point.position.y = radius * Math.cos(phi);
        point.position.z = radius * Math.sin(phi) * Math.sin(theta);

        group.add(point);
      }

      // Add data points to the globe
      addDataPoint(53.98, -22.83, 0xff00ff); // Bremerhaven
      addDataPoint(44.5, -22.67, 0xff0000); // Bidard
      addDataPoint(37, -22.62, 0xaaaa00); // Benalmadena
      addDataPoint(-8.9, 0.44, 0xff0000); // Bali
      addDataPoint(-33.6, -0.19, 0xff0000); // Sydney
      addDataPoint(-36.5, -0.6, 0xff0000); // Auckland
      addDataPoint(-13, -1.15, 0xff0000); // Rarotonga
      addDataPoint(13.5, 0.7, 0xff0000); // Bangkok

      scene.add(group);

      const animate = function () {
        requestAnimationFrame(animate);

        group.rotation.x = THREE.MathUtils.degToRad(0);
        group.rotation.y = 3;
        controls.update();

        renderer.render(scene, camera);
        // stats.update();
      };
      animate();
    },
  },

  mounted() {
    this.initThreeScene();
  },
};
</script>

<style>
#scene-container {
  width: inherit;
  height: inherit;
}

#globecanvas {
  width: inherit;
  height: inherit;
}
</style>
