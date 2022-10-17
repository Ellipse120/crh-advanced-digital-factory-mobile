<script setup>
import { ref } from 'vue'
import { useNow, useDateFormat } from '@vueuse/core'
import { useRequest } from '@/composables/useRequest'

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD')

const users = ref([])
const { data, loading } = await useRequest('users')
users.value = data.value?.users

const formatter = (v) => useDateFormat(v, 'HH:mm:ss')?.value
</script>

<template>
  <div class="relative">
    <div class="flex items-center justify-between">
      <div>{{ formatted }}</div>

      <van-button>更多</van-button>
    </div>

    <van-calendar
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '400px' }"
    />

    <van-divider />
    
    <div class="max-h-80 overflow-auto">
      <div v-for="item in users" :key="item.userId">
        <van-skeleton title avatar :row="2" :loading="loading">
          <div class="grid grid-cols-2 grid-rows-2 my-2 bg-gray-100 gap-2 p-1">
            <div class="flex items-center text-lg">
              <div class="bg-blue-500 text-white text-center rounded-full align-middle w-8 mr-2 flex items-center justify-center">{{ item.lastname?.[0] }}</div>
              <div>{{ item.lastname + item.firstname }}</div>
            </div>
            
            <div class="row-span-2 text-right align-middle flex items-center">
              签到：{{ formatter(item.date) }}
            </div>

            <div>工号：{{ item.jobNumber }}</div>
          </div>
        </van-skeleton>
      </div>
    </div>

    <!-- todo 签到功能 -->
    <div class="fixed bottom-28 right-2 h-12 w-12 rounded-1/2 shadowxl text-center bg-blue-500 text-white flex items-center justify-center">
      签到
    </div>
  </div>
</template>
