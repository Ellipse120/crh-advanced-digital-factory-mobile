<script setup>
import { ref } from 'vue'
import { formatTime } from '@/helpers'
import router from '../../router'

const date = formatTime(new Date(), 'yyyy-MM-dd')

const list = ref([
  {
    id: 1,
    trainId: 'CRH400BF-5001'
  },
  {
    id: 2,
    trainId: 'CRH400BF-5002'
  },
  {
    id: 3,
    trainId: 'CRH400BF-5003'
  }, {
    id: 4,
    trainId: 'CRH400BF-5004'
  },
  {
    id: 5,
    trainId: 'CRH400BF-5005'
  },
  {
    id: 6,
    trainId: 'CRH400BF-5006'
  }
])

const PlanDetail = () => {
  router.push({
    name: 'PlanDetail'
  })
}

</script>

<template>
  <div>
    <!-- <div @click="showPop" class="leading-6 text-right text-12px text-blue-500 pr-1">
      <van-icon name="filter-o" /><span>筛选</span>
    </div>
    <van-popup class="pt-6" v-model:show="show" position="right" :style="{ height: '100%', width:'80%' }" >
      <DateTimePickerWrapper title="开始日期" v-model="query.startDate" />
      <DateTimePickerWrapper title="结束日期" v-model="query.endDate" />
      <div class="absolute flex bottom-0 left-0 w-full">
        <van-button class="flex-1" @click="resetQuery">重置</van-button>
        <van-button class="flex-1" @click="doConfirm" type="primary">确定</van-button>
      </div>
    </van-popup>-->
    <div class="flex justify-between items-center leading-8">
      <span>{{date}}</span>
      <van-button size="mini" plain type="primary">更多</van-button>
    </div>
    <div class="card-list">
      <div @click="PlanDetail" class="card-item p-2 text-gray-400 text-14px my-2 shadow-sm shadow-gray-200 rounded-md" v-for="i in list" :key="i.id">
        <div class="mb-4">{{i.trainId}}</div>
        <div class="flex text-white">
          <div class="flex-1 text-center mr-2 h-5 leading-5 bg-green-300">1-1</div>
          <div class="flex-1 text-center mr-2 h-5 leading-5 bg-orange-300">1-2</div>
          <div class="flex-1 text-center mr-2 h-5 leading-5 bg-gray-300">1-3</div>
          <div class="flex-1 text-center h-5 leading-5 bg-gray-300">1-4</div>
        </div>
      </div>
    </div>
  </div>
</template>
