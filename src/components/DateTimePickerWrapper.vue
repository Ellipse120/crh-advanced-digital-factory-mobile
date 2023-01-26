<script setup>
import { ref } from 'vue'
import { formatTime } from '@/helpers'

defineProps({
  title: {
    type: String,
    required: true
  }
})

const timeValue = ref('')
const currentDate = ref(null)
const showDate = ref(false)

const showDateFn = () => {
  showDate.value = true
}

const confirmFn = () => {
  timeValue.value = formatTime(currentDate.value, 'yyyy-MM-dd')
  showDate.value = false
}

const cancelFn = () => {
  showDate.value = false
}
</script>

<template>
<div class="m-4 rounded-md border-1">
  <van-field v-model="timeValue" :placeholder="`选择${title}`" readonly @click="showDateFn" />
  <van-popup v-model:show="showDate" position="bottom" :style="{ height: '40%' }" >
    <van-datetime-picker
      v-model="currentDate"
      v-bind="$attrs"
      type="year-month"
      :title="title"
      @confirm="confirmFn()"
      @cancel="cancelFn()"
    />
</van-popup>
</div>
</template>
