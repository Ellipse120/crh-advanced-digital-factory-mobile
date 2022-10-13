<template>
  <div class="space-up error" v-if="error">{{ error }}</div>

  <Suspense v-else>
    <template #default>
      <RouterView />
    </template>

    <template #fallback>
      <div class="text-red-600 text-2xl text-center p-4 h-40">Loading ...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { onErrorCaptured, ref } from 'vue'

const error = ref(null)

onErrorCaptured((e) => {
  error.value = e
  console.log(error.value)
})
</script>