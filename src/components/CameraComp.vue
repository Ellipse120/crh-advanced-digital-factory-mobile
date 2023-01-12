<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Html5QrcodeScanner } from 'html5-qrcode'

const emit = defineEmits(['scan-success'])

const v = ref(null)

function onScanSuccess (decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  v.value = decodedText
  emit('scan-success', decodedText)
  console.log(`Code matched = ${decodedText}`, decodedResult)
}

onMounted(async () => {
  await nextTick()
  const html5QrcodeScanner = new Html5QrcodeScanner('reader', { fps: 10, qrbox: 250 })
  html5QrcodeScanner.render(onScanSuccess)
})
</script>

<template>
  <div id="reader" class="max-h-100 w-full"></div>
  <div class="text-red-500 text-2xl text-center">
    {{ v }}
  </div>
</template>
