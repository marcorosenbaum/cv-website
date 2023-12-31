<template>
  <div id="scene-container" ref="sceneContainer">
    <canvas id="globecanvas" ref="globecanvas"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
import { render } from "vue";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import vertexShader from "../assets/shaders/vertex.glsl";
import fragmentShader from "../assets/shaders/fragment.glsl";
import atmosphereVertexshader from "../assets/shaders/atmosphereVertex.glsl";
import atmosphereFragmentshader from "../assets/shaders/atmosphereFragment.glsl";

export default {
  name: "globe",
  data() {
    return {};
  },
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
      camera.position.z = 6;

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

      const geometry = new THREE.SphereGeometry(1, 100, 100);
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

      const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(1, 100, 100),
        new THREE.ShaderMaterial({
          vertexShader: atmosphereVertexshader,
          fragmentShader: atmosphereFragmentshader,
          blending: THREE.AdditiveBlending,
          side: THREE.BackSide,
        })
      );
      atmosphere.scale.set(1.2, 1.2, 1.2);

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
        const z = (Math.random() * (400 - -400) + -500) * 100;
        starVertices.push(x, y, z);
      }
      starGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starVertices, 3)
      );
      const stars = new THREE.Points(starGeometry, starMaterial);

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
      controls.minDistance = 3.5;
      controls.maxDistance = 10;
      controls.update();

      function addDataPoint(latitude, longitude) {
        const phi = (90 - latitude) * (Math.PI / 180);
        const theta = longitude - 140 * (Math.PI / 180);
        const radius = 1;

        const pointGeometry = new THREE.SphereGeometry(0.01);
        const pointMaterial = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
        const point = new THREE.Mesh(pointGeometry, pointMaterial);

        point.position.x = radius * Math.sin(phi) * Math.cos(theta);
        point.position.y = radius * Math.cos(phi);
        point.position.z = radius * Math.sin(phi) * Math.sin(theta);

        group.add(point);
      }

      const bremerhaven = { lat: 53.5396, long: 8.5809 };
      const france = { lat: 44, long: 2.5 };
      const spain = { lat: 37.5, long: 2.5 };
      const bali = { lat: -8.9, long: 0.44 };
      const sydney = { lat: -33.6, long: -0.19 };
      const newzealand = { lat: -36.5, long: -0.6 };
      const rarotonga = { lat: -13, long: -1.15 };
      const thailand = { lat: 13.5, long: 0.7 };

      addDataPoint(bremerhaven.lat, bremerhaven.long);
      addDataPoint(france.lat, france.long);
      addDataPoint(spain.lat, spain.long);
      addDataPoint(bali.lat, bali.long);
      addDataPoint(sydney.lat, sydney.long);
      addDataPoint(newzealand.lat, newzealand.long);
      addDataPoint(rarotonga.lat, rarotonga.long);
      addDataPoint(thailand.lat, thailand.long);

      function convertPointData(latitude, longitude) {
        const phi = (90 - latitude) * (Math.PI / 180);
        const theta = longitude - 140 * (Math.PI / 180);
        const radius = 1;

        return {
          x: radius * Math.sin(phi) * Math.cos(theta),
          y: radius * Math.cos(phi),
          z: radius * Math.sin(phi) * Math.sin(theta),
        };
      }

      const ballGeometry = new THREE.SphereGeometry(0.01, 100, 100);
      const ballMaterial = new THREE.MeshBasicMaterial({ color: 0x00e5ff });

      const ball = new THREE.Mesh(ballGeometry, ballMaterial);
      ball.position.x = convertPointData(bremerhaven.lat, bremerhaven.long).x;
      ball.position.y = convertPointData(bremerhaven.lat, bremerhaven.long).y;
      ball.position.z = convertPointData(bremerhaven.lat, bremerhaven.long).z;

      group.add(ball);

      function getPath(p1, p2) {
        let v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
        let v2 = new THREE.Vector3(p2.x, p2.y, p2.z);
        let points = [];
        let path = new THREE.CatmullRomCurve3(points);
        for (let i = 0; i <= 100; i++) {
          let p = new THREE.Vector3().lerpVectors(v1, v2, i / 100);
          p.normalize();
          p.multiplyScalar(1 + 0.05 * Math.sin((Math.PI * i) / 100));

          points.push(p);
        }

        const geometry = new THREE.TubeGeometry(path, 40, 0.005, 8, false);
        const mesh = new THREE.Mesh(geometry);
        mesh.visible = false;
        globe.add(mesh);
        return path;
      }

      let path1 = getPath(
        convertPointData(bremerhaven.lat, bremerhaven.long),
        convertPointData(france.lat, france.long)
      );
      let path2 = getPath(
        convertPointData(france.lat, france.long),
        convertPointData(spain.lat, spain.long)
      );
      let path3 = getPath(
        convertPointData(spain.lat, spain.long),
        convertPointData(bremerhaven.lat, bremerhaven.long)
      );
      let path4 = getPath(
        convertPointData(bremerhaven.lat, bremerhaven.long),
        convertPointData(bali.lat, bali.long)
      );
      let path5 = getPath(
        convertPointData(bali.lat, bali.long),
        convertPointData(sydney.lat, sydney.long)
      );
      let path6 = getPath(
        convertPointData(sydney.lat, sydney.long),
        convertPointData(newzealand.lat, newzealand.long)
      );
      let path7 = getPath(
        convertPointData(newzealand.lat, newzealand.long),
        convertPointData(rarotonga.lat, rarotonga.long)
      );
      let path8 = getPath(
        convertPointData(rarotonga.lat, rarotonga.long),
        convertPointData(newzealand.lat, newzealand.long)
      );
      let path9 = getPath(
        convertPointData(newzealand.lat, newzealand.long),
        convertPointData(thailand.lat, thailand.long)
      );
      let path10 = getPath(
        convertPointData(thailand.lat, thailand.long),
        convertPointData(bremerhaven.lat, bremerhaven.long)
      );

      let travelPath = { points: [] };

      function createWholePath() {
        path1.points.forEach((point) => travelPath.points.push(point));
        path2.points.forEach((point) => travelPath.points.push(point));
        path3.points.forEach((point) => travelPath.points.push(point));
        path4.points.forEach((point) => travelPath.points.push(point));
        path5.points.forEach((point) => travelPath.points.push(point));
        path6.points.forEach((point) => travelPath.points.push(point));
        path7.points.forEach((point) => travelPath.points.push(point));
        path8.points.forEach((point) => travelPath.points.push(point));
        path9.points.forEach((point) => travelPath.points.push(point));
        path10.points.forEach((point) => travelPath.points.push(point));
      }
      createWholePath();

      function animateBallOnPaths() {
        for (let i = 0; i <= 1009; i++) {
          setTimeout(() => {
            ball.position.x = travelPath.points[i].x;
            ball.position.y = travelPath.points[i].y;
            ball.position.z = travelPath.points[i].z;

            if (ball.position.x === travelPath.points[1009].x) {
              animateBallOnPaths();
            }
          }, i * 20);
        }
      }
      setTimeout(() => {
        animateBallOnPaths();
      }, 1000);

      scene.add(group, stars);
      group.rotation.y = 4.4;

      const animate = function () {
        requestAnimationFrame(animate);

        group.rotation.x = THREE.MathUtils.degToRad(10);
        group.rotation.y -= 0.003;
        controls.update();

        renderer.render(scene, camera);
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
