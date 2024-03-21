<template>
  <div class="container">
    <div class="message-box">
      <div class="avatar">
        <img src="@/assets/image/robot.svg" alt="avatar">
      </div>
      <div class="message">
        <p>{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const infoProps = defineProps({
  message: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: max-content;
  color: #000;
}

.message-box {
  display: flex;
  align-items: flex-start;
  margin-top: 5px;
  width: 100%;
}

.avatar {
  margin-right: 10px;
  margin-left: 5px;
  width: 40px;
  height: 40px;
}

.message {
  max-width: 85%;
  word-wrap: break-word;
  background-color: #7aa5e5;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
}
</style>