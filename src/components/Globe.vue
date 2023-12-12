<template>
  <div id="scene-container" ref="sceneContainer">
    <canvas id="globecanvas" ref="globecanvas"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";
import { render } from "vue";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";
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

      // globe
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
          // bumpMap: new THREE.TextureLoader().load(
          //   new URL(
          //     "../assets/images/earthbump.jpeg",
          //     import.meta.url
          //   ).toString()
          // ),
          // bumpScale: 1.1, // Adjust the bump scale as needed
        },
      });

      const globe = new THREE.Mesh(geometry, material);

      // atmosphere
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

      // --------- GROUP
      const group = new THREE.Group();
      group.add(globe, atmosphere); // add atmosphere here

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

      // _________________-----------____________________
      // // Labels
      // const labelRenderer = new CSS2DRenderer();
      // labelRenderer.setSize(window.innerWidth, window.innerHeight);
      // labelRenderer.domElement.style.position = "absolute";
      // labelRenderer.domElement.style.top = "0px";
      // this.$refs.sceneContainer.appendChild(labelRenderer.domElement);

      // // label
      // let labelDiv = document.createElement("div");
      // labelDiv.className = "label";
      // labelDiv.textContent = "Label";
      // labelDiv.style.marginTop = "-1em";
      // let labelElement = new CSS2DObject(labelDiv);
      // labelElement.position.copy(particles.geometry.vertices[i]);
      // particles.add(labelElement);

      // Orbit conbtrol
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.update();

      // Function to add a data point to the globe
      function addDataPoint(latitude, longitude) {
        const phi = (90 - latitude) * (Math.PI / 180);
        const theta = longitude - 140 * (Math.PI / 180);
        const radius = 1; // Adjust the radius of the sphere

        // Create a point
        const pointGeometry = new THREE.SphereGeometry(0.01);
        const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
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

      addDataPoint(bremerhaven.lat, bremerhaven.long); // Bremerhaven - germany
      addDataPoint(france.lat, france.long); // Bidart - france
      addDataPoint(spain.lat, spain.long); // spain
      addDataPoint(bali.lat, bali.long); // bali
      addDataPoint(sydney.lat, sydney.long); // Sydney
      addDataPoint(newzealand.lat, newzealand.long); // newzealand
      addDataPoint(rarotonga.lat, rarotonga.long); // rarotonga
      addDataPoint(thailand.lat, thailand.long); // thailand

      function convertPointData(latitude, longitude) {
        const phi = (90 - latitude) * (Math.PI / 180);
        const theta = longitude - 140 * (Math.PI / 180);
        const radius = 1; // Adjust the radius of the sphere

        return {
          x: radius * Math.sin(phi) * Math.cos(theta),
          y: radius * Math.cos(phi),
          z: radius * Math.sin(phi) * Math.sin(theta),
        };
      }

      // sphere/ BALL to move along the path
      const ballGeometry = new THREE.SphereGeometry(0.01, 100, 100);
      const ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

      const ball = new THREE.Mesh(ballGeometry, ballMaterial);
      ball.position.x = 0;
      ball.position.z = 2;
      group.add(ball);

      // path ----------------------- - -- - - - - -- - - --
      function getPath(p1, p2) {
        let v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
        let v2 = new THREE.Vector3(p2.x, p2.y, p2.z);
        let points = [];
        let path = new THREE.CatmullRomCurve3(points);
        for (let i = 0; i <= 100; i++) {
          let p = new THREE.Vector3().lerpVectors(v1, v2, i / 100);
          p.normalize();
          p.multiplyScalar(1 + 0.03 * Math.sin((Math.PI * i) / 100));

          points.push(p);
        }

        const geometry = new THREE.TubeGeometry(path, 40, 0.005, 8, false);
        const material = new THREE.MeshBasicMaterial({
          color: 0xff0000,
          transparent: true,
          opacity: 0,
        });
        const mesh = new THREE.Mesh(geometry, material);
        // mesh.visible = false;
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

      // animate ball path

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
        console.log(travelPath);
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

      // function animatePaths() {
      //   setTimeout(() => {
      //     globe.children[0].visible = true;
      //     setTimeout(() => {
      //       globe.children[0].visible = false;
      //       globe.children[1].visible = true;
      //       setTimeout(() => {
      //         globe.children[1].visible = false;
      //         globe.children[2].visible = true;
      //         setTimeout(() => {
      //           globe.children[2].visible = false;
      //           globe.children[3].visible = true;
      //           setTimeout(() => {
      //             globe.children[3].visible = false;
      //             globe.children[4].visible = true;
      //             setTimeout(() => {
      //               globe.children[4].visible = false;
      //               globe.children[5].visible = true;
      //               setTimeout(() => {
      //                 globe.children[5].visible = false;
      //                 globe.children[6].visible = true;
      //                 setTimeout(() => {
      //                   globe.children[6].visible = false;
      //                   globe.children[7].visible = true;
      //                   setTimeout(() => {
      //                     globe.children[7].visible = false;
      //                     globe.children[8].visible = true;
      //                     setTimeout(() => {
      //                       globe.children[8].visible = false;
      //                       globe.children[9].visible = true;
      //                       setTimeout(() => {
      //                         globe.children[9].visible = false;
      //                         animatePaths();
      //                       }, 4000);
      //                     }, 2000);
      //                   }, 2000);
      //                 }, 2000);
      //               }, 2000);
      //             }, 2000);
      //           }, 2000);
      //         }, 2000);
      //       }, 2000);
      //     }, 2000);
      //   }, 2000);
      // }
      // animatePaths();

      // animate ball path
      scene.add(group, stars);
      group.rotation.y = 4.4;
      const animate = function () {
        requestAnimationFrame(animate);

        group.rotation.x = THREE.MathUtils.degToRad(10);
        //group.rotation.y -= 0.004;
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
