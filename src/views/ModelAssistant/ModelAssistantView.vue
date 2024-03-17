<template>
  <div class="container chat-box">
    <div class="msg-list">
      <chat-right-item-comp message="你好，小锦！"></chat-right-item-comp>
      <chat-left-item-comp
          message="你好，我是就业小助手小锦！你有什么想问的吗？你好，我是就业小助手小锦！你有什么想问的吗？你好，我是就业小助手小锦！你有什么想问的吗？你好，我是就业小助手小锦！你有什么想问的吗？"></chat-left-item-comp>
    </div>
    <chat-input-comp></chat-input-comp>
  </div>
</template>

<script setup>
import ChatLeftItemComp from "@/components/ChatLeftItemComp.vue";
import ChatRightItemComp from "@/components/ChatRightItemComp.vue";
import ChatInputComp from "@/components/ChatInputComp.vue";
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  position: relative;

  .msg-list {
    width: 100%;
    flex-grow: 1;
  }
}

.chat-box {
  height: 600px;
}
</style>