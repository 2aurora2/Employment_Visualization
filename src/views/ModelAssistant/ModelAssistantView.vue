<template>
  <div class="container chat-box" id="scroll">
    <div class="msg-list">
      <div v-for="(item,index) in messageList" :key="index">
        <chat-right-item-comp :message="item.content" v-if="item.role==='user'"></chat-right-item-comp>
        <chat-left-item-comp :message="item.content" v-else></chat-left-item-comp>
      </div>
    </div>
    <chat-input-comp></chat-input-comp>
  </div>
</template>

<script setup>
import ChatLeftItemComp from "@/components/ChatLeftItemComp.vue";
import ChatRightItemComp from "@/components/ChatRightItemComp.vue";
import ChatInputComp from "@/components/ChatInputComp.vue";
import {useUserStore} from "@/store/modules/useUserStore.js";
import {onMounted, ref} from "vue";

const userStore = useUserStore()
const messageList = ref(userStore.chatMessage)
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