<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
console.log(route)
const title = computed(() => route?.meta?.title)

const onClickLeft = () => {
  router.back()
}
const onClickRight = () => {}
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