<script setup>
import PageWithNavbar from '../components/PageWithNavbar.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <!-- <div
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
    >
      <van-button type="danger" @click="handleClick">主要按钮</van-button>
    </div> -->

    <PageWithNavbar>
      <TheWelcome />
    </PageWithNavbar>
  </main>
</template>
