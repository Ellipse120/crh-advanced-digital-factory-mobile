<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserInfoStore } from '../stores/user'

const router = useRouter()
const route = useRoute()
const { clearToken, clearUserInfo } = useUserInfoStore()

const title = computed(() => route?.meta?.title)

const back = () => {
  router.back()
}

const logout = () => {
  clearToken()
  clearUserInfo()
  router.push({
    name: 'Login'
  })
}
</script>

<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text="登出"
      left-arrow
      @click-left="back"
      @click-right="logout"
    />

    <slot />
  </div>
</template>