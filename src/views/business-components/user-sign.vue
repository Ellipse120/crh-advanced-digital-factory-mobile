<script setup>
import { ref } from 'vue'
import { useDateFormat, useToggle } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { useRequest } from '@/composables/useRequest'
import { formatTime } from '@/helpers'

defineProps({
  workStatus: {
    type: String
  }
})

const router = useRouter()
const [value, toggle] = useToggle()

const date = ref('2019/02/01')
const events = ref(['2019/02/01', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23'])
const formatted = useDateFormat(new Date(), 'YYYY-MM-DD')

const users = ref([])
const { data, loading } = await useRequest('users')
users.value = data.value?.users

const formatter = (v) => formatTime(v, 'HH:mm:ss')

const eventsFn = (date) => {
  return events.value.includes(date)
}

const doSignIn = () => {
  router.push({
    name: 'SignInOut'
  })
}
</script>

<template>
  <div class="relative">
    <div class="flex items-center justify-between leading-8">
      <div>{{ formatted }}</div>

      <van-button size="mini" plain type="primary" @click="toggle()">更多</van-button>
    </div>

    <q-date
      v-if="value"
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      class="shadow-1"
      transition-show="jump-down"
      transition-hide="jump-up"
      v-model="date"
      :events="eventsFn"
      :event-color="(date) => date[9] % 2 === 0 ? 'teal' : 'orange'"
      minimal
    />

    <van-divider />

    <div :class="value ? 'max-h-90' : 'max-h-77vh'" class=" overflow-auto">
      <div v-for="item in users" :key="item.userId">
        <van-skeleton title avatar :row="2" :loading="loading">
          <div class="grid grid-cols-2 grid-rows-2 my-2 bg-gray-100 gap-2 p-2">
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

    <div class="fixed bottom-28 right-2 h-16 w-16 text-xl font-bold rounded-1/2 shadow-2xl text-center bg-blue-500 bg-opacity-70 text-white flex items-center justify-center" @click="doSignIn">
      {{workStatus === 'finished' ? '签退' : '签到'}}
    </div>
  </div>
</template>
