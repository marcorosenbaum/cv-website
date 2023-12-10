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
      camera.position.z = 25;

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
      group.add(globe, atmosphere);

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

      function convertPointData(latitude, longitude) {
        const phi = (90 - latitude) * (Math.PI / 180);
        const theta = longitude - 140 * (Math.PI / 180);
        const radius = 5; // Adjust the radius of the sphere

        // point.position.x = radius * Math.sin(phi) * Math.cos(theta);
        // point.position.y = radius * Math.cos(phi);
        // point.position.z = radius * Math.sin(phi) * Math.sin(theta);
        return {
          x: radius * Math.sin(phi) * Math.cos(theta),
          y: radius * Math.cos(phi),
          z: radius * Math.sin(phi) * Math.sin(theta),
        };
      }

      // Add data points to the globe
      addDataPoint(53.98, -22.83, 0xff0000); // Bremerhaven
      addDataPoint(44.5, -22.67, 0xff0000); // france
      addDataPoint(37, -22.62, 0xff0000); // spain
      addDataPoint(-8.9, 0.44, 0xff0000); // bali
      addDataPoint(-33.6, -0.19, 0xff0000); // Sydney
      addDataPoint(-36.5, -0.6, 0xff0000); // newzealand
      addDataPoint(-13, -1.15, 0xff0000); // rarotonga
      addDataPoint(13.5, 0.7, 0xff0000); // thailand
      const bremerhaven = convertPointData(53.98, -22.83);
      const france = convertPointData(44.5, -22.67);
      const spain = convertPointData(37, -22.62);
      const bali = convertPointData(-8.9, 0.44);
      const sydney = convertPointData(-33.6, -0.19);
      const newzealand = convertPointData(-36.5, -0.6);
      const rarotonga = convertPointData(-13, -1.15);
      const thailand = convertPointData(13.5, 0.7);

      // path ----------------------- - -- - - - - -- - - --
      function getPath(p1, p2) {
        let v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
        let v2 = new THREE.Vector3(p2.x, p2.y, p2.z);
        let points = [];
        for (let i = 0; i <= 20; i++) {
          let p = new THREE.Vector3().lerpVectors(v1, v2, i / 20);
          p.multiplyScalar(1 + 0.5 * Math.sin((Math.PI * i) / 20));
          points.push(p);
        }
        let path = new THREE.CatmullRomCurve3(points);

        const geometry = new THREE.TubeGeometry(path, 20, 0.01, 8, false);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const mesh = new THREE.Mesh(geometry, material);

        group.add(mesh);
      }
      getPath(bremerhaven, france);
      getPath(france, spain);
      getPath(spain, bremerhaven);
      getPath(bremerhaven, bali);
      getPath(bali, sydney);
      getPath(sydney, newzealand);
      getPath(newzealand, rarotonga);
      getPath(rarotonga, newzealand);
      getPath(newzealand, thailand);
      getPath(thailand, bremerhaven);

      scene.add(group, stars);

      const animate = function () {
        requestAnimationFrame(animate);

        group.rotation.x = THREE.MathUtils.degToRad(10);
        group.rotation.y += 0.002;
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
