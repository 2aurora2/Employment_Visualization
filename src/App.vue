<template>
  <div class="container-fluid d-flex flex-column min-vh-100">
    <div class="content flex-grow-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
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
