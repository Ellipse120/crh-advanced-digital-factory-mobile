<script setup>
import { ref, computed, watch } from 'vue'
import ToolsSlingPage from './tools-sling-page.vue'
import ToolsToolPage from './tools-tool-page.vue'

const activeIndex = ref(0)

const activeComp = computed(() => {
  const compMapper = {
    0: ToolsSlingPage,
    1: ToolsToolPage
  }

  return compMapper[activeIndex.value]
})

</script>

<template>
  <div class="py-2 px-2 w-full">
    <van-tabs class="mb-3" v-model:active="activeIndex" color="#1989Fa" type="card">
      <van-tab title="吊索具" />
      <van-tab title="工具" />
    </van-tabs>

    <component :is="activeComp" />

  </div>
</template>