<template>
  <div class="container">
    <div class="row justify-content-center query">
      <div class="col-12">
        <span>1. </span><span @click="queryHandle(1)">{{ query_1 }}</span>
      </div>
    </div>
    <div class="row justify-content-center query">
      <div class="col-12">
        <span>2. </span><span @click="queryHandle(2)">{{ query_2 }}</span>
      </div>
    </div>
    <div class="row justify-content-center query">
      <div class="col-12">
        <span>3. </span><span @click="queryHandle(3)">{{ query_3 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useUserStore} from "@/store/modules/useUserStore.js";
import TTSRecorder from "@/utils/common/SparkDeskApiUtil.js";

const query_1 = ref('我想了解一下近几年计算机专业在广州的就业形势如何？')
const query_2 = ref('教师行业在珠三角的薪资待遇如何？简要说说。')
const query_3 = ref('近几年本科毕业大学生的就业情况如何？简要说一说。')
const userStore = useUserStore()
const messageList = ref(userStore.chatMessage)

const bigModel = new TTSRecorder()
const queryHandle = (id) => {
  if (id === 1) {
    messageList.value.push({
      role: 'user',
      content: query_1.value
    });
  } else if (id === 2) {
    messageList.value.push({
      role: 'user',
      content: query_2.value
    });
  } else {
    messageList.value.push({
      role: 'user',
      content: query_3.value
    });
  }
  if (['init', 'endPlay', 'errorTTS'].indexOf(bigModel.status) > -1) {
    bigModel.start()
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-left: 65px;
  margin-top: 10px;
  padding-right: 65px;
}

.query {
  padding-top: 10px;
  padding-bottom: 5px;
  padding-left: 5px;
  border-bottom: 2px solid #ccc9c9;
  border-radius: 10px;
  cursor: pointer;
}
</style>