<template>
  <div class="container">
    <div class="message-box">
      <div class="avatar">
        <img src="@/assets/image/user.svg" alt="avatar">
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
  width: 100%;
  height: max-content;
  color: #000;
}

.message-box {
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: row-reverse;
  margin-left: auto;
  margin-top: 5px;
  margin-bottom: 5px;
}

.avatar {
  margin-right: 5px;
  margin-left: 10px;
  width: 40px;
  height: 40px;
}

.message {
  max-width: 70%;
  word-wrap: break-word;
  background-color: #7aa5e5;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
}
</style>