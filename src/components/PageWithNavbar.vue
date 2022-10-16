<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserInfoStore } from '../stores/user'

const router = useRouter()
const route = useRoute()

const title = computed(() => route?.meta?.title)

const onClickLeft = () => {
  router.back()
}
const onClickRight = () => {

}

const store = useUserInfoStore()
console.log(store.userInfo)
</script>

<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <slot />
  </div>
</template>