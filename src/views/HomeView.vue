<template>
  <h1>
    首页
  </h1>
</template>

<script setup>
import {useUserStore} from '@/store/modules/useUserStore.js'

// 先创建实例对象再使用
const userStore = useUserStore();
</script>