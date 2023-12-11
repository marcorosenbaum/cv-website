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
      camera.position.z = 5;

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

      const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
      scene.add(ambientlight);

      // globe
      const geometry = new THREE.SphereGeometry(1, 100, 100);

      const material = new THREE.MeshPhongMaterial({
        map: new THREE.TextureLoader().load(
          new URL(
            "../assets/images/earthclouds.jpeg",
            import.meta.url
          ).toString()
        ),
        bumpMap: new THREE.TextureLoader().load(
          new URL("../assets/images/earthbump.jpeg", import.meta.url).toString()
        ),
        bumpScale: 0.1,
      });
      console.log(
        new URL("../assets/images/earthclouds.jpeg", import.meta.url).toString()
      );
      const globe = new THREE.Mesh(geometry, material);

      // scene.add(globe);

      // atmosphere
      // const atmosphere = new THREE.Mesh(
      //   new THREE.SphereGeometry(1, 100, 100),
      //   new THREE.ShaderMaterial({
      //     vertexShader: atmosphereVertexshader,
      //     fragmentShader: atmosphereFragmentshader,
      //     blending: THREE.AdditiveBlending,
      //     side: THREE.BackSide,
      //   })
      // );
      // atmosphere.scale.set(1.2, 1.2, 1.2);

      // --------- GROUP
      const group = new THREE.Group();
      group.add(globe); // add atmosphere here

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

      const animate = function () {
        requestAnimationFrame(animate);

        group.rotation.x = THREE.MathUtils.degToRad(10);
        group.rotation.y = 4;
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
