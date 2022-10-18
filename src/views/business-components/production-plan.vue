<script setup>
import { ref } from 'vue'
import { useDateFormat } from '@vueuse/core'
import { useRequest } from '@/composables/useRequest'
import { formatTime } from '@/helpers'
import router from '../../router';

import DateTimePickerWrapper from '../../components/DateTimePickerWrapper.vue'

const show = ref(false)
const query = ref({
  startDate: null,
  endDate: null
})

const timeValue = ref('')

const list = ref([
  {
    id:1,
    trainId: 'CRH400BF-5001'
  },
  {
    id:2,
    trainId: 'CRH400BF-5002'
  },
  {
    id:3,
    trainId: 'CRH400BF-5003'
  },{
    id:4,
    trainId: 'CRH400BF-5004'
  },
  {
    id:5,
    trainId: 'CRH400BF-5005'
  },
  {
    id:6,
    trainId: 'CRH400BF-5006'
  }
])

const showPop = () => {
  show.value = true
}

const resetQuery = () => {
  closePop()
}

const doConfirm = () => {
  closePop()
}

const closePop = () => {
  show.value = false
}

const PlanDetail = () => {
  router.push({
    name: 'PlanDetail'
  })
}

</script>

<template>
  <div>
    <div @click="showPop" class="leading-6 text-right text-12px text-blue-500 pr-1">
      <van-icon name="filter-o" /><span>筛选</span>
    </div>
    <div class="card-list">
      <div @click="PlanDetail" class="card-item p-2 text-gray-400 text-14px m-2 shadow-sm shadow-gray-200 rounded-md" v-for="i in list" :key="i.id">
        <div class="mb-4">{{i.trainId}}</div>
        <div class="flex text-white">
          <div class="flex-1 text-center mr-2 h-5 leading-5 bg-green-300">1-1</div>
          <div class="flex-1 text-center mr-2 h-5 leading-5 bg-orange-300">1-2</div>
          <div class="flex-1 text-center mr-2 h-5 leading-5 bg-gray-300">1-3</div>
          <div class="flex-1 text-center h-5 leading-5 bg-gray-300">1-4</div>
        </div>
      </div>
    </div>
    <van-popup class="pt-6" v-model:show="show" position="top" :style="{ height: '100%' }" >
      <DateTimePickerWrapper title="开始日期" />
      <DateTimePickerWrapper title="结束日期" />
      <div class="absolute flex bottom-0 left-0 w-full">
        <van-button class="flex-1" @click="resetQuery">重置</van-button>
        <van-button class="flex-1" @click="doConfirm" type="primary">确定</van-button>
      </div>
    </van-popup>
  </div>
</template>