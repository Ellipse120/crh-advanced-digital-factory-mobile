<script setup>
import { useNProgress } from '@vueuse/integrations/useNProgress'
import { ref, onMounted } from 'vue'
import { useRequest } from '../composables/useRequest'

const { isLoading, progress } = useNProgress()
const users = ref([])

function toggle() {
  isLoading.value = !isLoading.value
}

const getUsers = async () => {
  const { data } = await useRequest('users')

  users.value = data.value?.users
}

const refresh = () => {
  getUsers()
}

onMounted(() => {
  getUsers()
})
</script>

<template>
  <van-button type="primary" @click="toggle">Toggle</van-button>
  <van-button type="success" @click="refresh">刷新</van-button>
  <b v-if="isLoading" class="ml-2">{{ ((progress || 0) * 100).toFixed(0) }}%</b>

  <van-list>
    <van-cell v-for="item in users" :key="item.userId" :title="item.lastname">
      {{ item.firstname + ' - ' + item.lastname }}
    </van-cell>
  </van-list>
</template>
