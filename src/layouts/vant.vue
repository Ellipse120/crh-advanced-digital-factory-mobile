<template>
  <Suspense>
    <template #default>
      <van-config-provider :theme-vars="themeVars">
        <RouterView />
      </van-config-provider>
    </template>

    <template #fallback>
      <div class="text-red-600 text-2xl text-center p-4 h-40">加载中 ...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { ref } from 'vue'

const themeVars = ref({
  // rateIconFullColor: '#07c160',
  // sliderBarHeight: '4px',
  // sliderButtonWidth: '20px',
  // sliderButtonHeight: '20px',
  // sliderActiveBackgroundColor: '#07c160',
  // buttonPrimaryBorderColor: '#07c160',
  // buttonPrimaryBackgroundColor: '#07c160',
})
</script>