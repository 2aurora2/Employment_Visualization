<template>
  <h1>
    首页
  </h1>
  <button @click="login">login</button>
</template>

<script setup>
import { useUserStore } from '@/store/modules/useUserStore.js'
import { loginService } from '@/api/user.js'

// 先创建实例对象再使用
const userStore = useUserStore();

const loginData = {
  username: "2aurora2",
  password: "123456"
}

const login = () => {
  loginService(loginData).then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.log(err);
  })
}
</script>