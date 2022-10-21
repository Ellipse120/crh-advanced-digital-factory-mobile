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
      v-if="!($slots.left || $slots.right)"
      :title="title"
      left-text="返回"
      right-text="登出"
      left-arrow
      v-bind="$attrs"
      @click-left="back"
      @click-right="logout"
    />

    <van-nav-bar
      v-else
      :title="title"
      left-arrow
      v-bind="$attrs"
    >
      <template #left>
        <slot name="left" />
      </template>
      <template #right>
        <slot name="right" />
      </template>
    </van-nav-bar>

    <slot />
  </div>
</template>