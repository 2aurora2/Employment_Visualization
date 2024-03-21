<template>
  <div class="container">
    <form class="search-form">
      <input v-model="query" type="search" placeholder="按 Enter 发送" class="search-input">
      <button @click="queryHandle" type="submit" class="search-button">
        <svg class="submit-button">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
        </svg>
      </button>
    </form>

    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" display="none">
      <symbol id="search" viewBox="0 0 32 32">
        <path
            d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z"/>
      </symbol>
    </svg>
  </div>
</template>

<script setup>
import $ from 'jquery';
import {onMounted, ref} from "vue";
import TTSRecorder from "@/utils/common/SparkDeskApiUtil.js";
import {useUserStore} from "@/store/modules/useUserStore.js";

const userStore = useUserStore()
const messageList = ref(userStore.chatMessage)

let bigModel = new TTSRecorder()

const query = ref('')
const queryHandle = () => {
  if (query.value.length === 0) {
    alert("输入不可为空！")
    return
  }
  messageList.value.push({
    role: 'user',
    content: query.value
  })
  query.value = ''

  if (['init', 'endPlay', 'errorTTS'].indexOf(bigModel.status) > -1) {
    bigModel.start()
  }
}

onMounted(() => {
  $('.search-input').focus(function () {
    $(this).parent().addClass('focus');
  }).blur(function () {
    $(this).parent().removeClass('focus');
  })
})
</script>


<style scoped lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

$color: #e24040;

.container {
  height: 50px;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-form {
  width: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  height: 40px;
  border-radius: 10px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  transform: translate(-50%, -50%);
  background: #fff;
  transition: all 0.3s ease;

  &.focus {
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
  }
}

.search-input {
  position: absolute;
  top: 10px;
  left: 38px;
  font-size: 14px;
  background: none;
  color: #5a6674;
  width: 500px;
  height: 20px;
  border: none;
  appearance: none;
  outline: none;

  &::-webkit-search-cancel-button {
    appearance: none;
  }
}

.search-button {
  position: absolute;
  top: 8px;
  left: 12px;
  height: 20px;
  width: 20px;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  outline: none !important;
  cursor: pointer;

  & svg {
    width: 20px;
    height: 20px;
    fill: #5a6674;
    background-color: #fff;
  }
}
</style>