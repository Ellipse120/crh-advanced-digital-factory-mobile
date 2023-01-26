<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDateFormat, useNow } from '@vueuse/core'
import { Toast } from 'vant'
import { useUserInfoStore } from '../stores/user'

import PageWithNavbar from '../components/PageWithNavbar.vue'
const now = useDateFormat(useNow(), ref('HH:mm:ss'))
const { userInfo } = useUserInfoStore()
const router = useRouter()

const signIn = () => {
  Toast.success('打卡成功')
  router.push({
    name: 'Kaigongzhunbei',
    query: {
      active: 1
    }
  })
}
</script>

<template>
  <PageWithNavbar>
    <div class="grid grid-rows-2 place-items-center">
      <div class="grid grid-rows-2 grid-cols-2 place-items-center gap-2">
        <div class="col-span-2 bg-gray-100 rounded-2xl">
          <div class="flex items-center justify-between w-96vw text-lg p-8">
            <div class="bg-blue-500 text-white rounded-xl w-20 h-20 text-4xl flex items-center justify-center">
              {{ userInfo.username?.[0] }}
            </div>

            <div>
              <div class="flex items-center justify-between w-50">
                <div class="mr-4">{{ userInfo.username }}</div>
                <div>{{ userInfo.job }}</div>
              </div>

              <div>工号：{{ userInfo.jobNumber }}</div>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 rounded-2xl px-11 py-8">
          <div>上班：9:00</div>
          <div>8:00 已打卡</div>
        </div>

        <div class="bg-gray-100 rounded-2xl px-11 py-8">
          <div>下班：17:00</div>
          <div>未打卡</div>
        </div>
      </div>

      <div class="h-48 w-48 rounded-1/2 shadow-xl text-2xl bg-green-400 text-white flex flex-col items-center justify-center" @click="signIn">
        <div class="mb-4 font-bold">签到</div>
        <div class="text-3xl font-extrabold">{{ now }}</div>
      </div>
    </div>
  </PageWithNavbar>
</template>
