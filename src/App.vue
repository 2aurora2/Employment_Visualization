<template>
  <div class="container-fluid d-flex flex-column min-vh-100">
    <div class="content flex-grow-1">
      <router-view></router-view>
    </div>
    <footer-comp class="mt-auto"></footer-comp>
  </div>
</template>

<script setup>
import FooterComp from "@/components/FooterComp.vue";
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.container-fluid {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0;
  background-image: url("@/assets/image/background.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.5);
    pointer-events: none;
  }
}

.content {
  flex-grow: 1;
}

.mt-auto {
  margin-top: auto;
}
</style>
