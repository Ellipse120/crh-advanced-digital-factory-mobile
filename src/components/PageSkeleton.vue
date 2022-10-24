<script setup>
import { useRouter } from 'vue-router'
import PageWithNavbar  from '../components/PageWithNavbar.vue'

const props = defineProps(['right-nav'])
const router = useRouter()

const back = () => {
  router.back()
}

const goProductionProcess = () => {
  router.push({
    name: 'ProductionProcess'
  })
}
</script>

<template>
  <PageWithNavbar v-if="props.rightNav">
    <template #left>
      <van-icon name="arrow-left" @click="back">返回</van-icon>
    </template>

    <template #right>
      <van-icon name="wap-nav" @click="goProductionProcess" />
    </template>
  </PageWithNavbar>

  <PageWithNavbar v-else />
  <slot />

  <van-tabbar route>
    <van-tabbar-item icon="home-o" to="/navigator">首页</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/me">我的</van-tabbar-item>
  </van-tabbar>
</template>