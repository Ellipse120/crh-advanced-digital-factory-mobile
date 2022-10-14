<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push({
    path: '/'
  })
}
</script>

<template>
  <div class="text-center p-12 text-3xl text-red-500">
    <div class="mb-10">404-页面不存在</div>
    <van-button @click="goHome">返回首页</van-button>
  </div>
</template>