<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import planeImg from "../assets/plane.png";
import { reactive } from "vue";
import { setupPlane } from "../game";

const plane = setupPlane(reactive({}));

window.addEventListener("keydown", (e) => {
  // console.log(e, "e");
  switch (e.code) {
    case "ArrowDown":
      plane.moveDown();
      break;
    case "ArrowUp":
      plane.moveUp();
      break;
    case "ArrowLeft":
      plane.moveLeft();
      break;
    case "ArrowRight":
      plane.moveRight();
      break;
    default:
      break;
  }
});
</script>
