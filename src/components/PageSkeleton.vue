<script setup>
import PageWithNavbar  from '../components/PageWithNavbar.vue'
</script>

<template>
  <PageWithNavbar />
  <slot />

  <van-tabbar route>
    <van-tabbar-item icon="home-o" to="/navigator">首页</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/me">我的</van-tabbar-item>
  </van-tabbar>
</template>