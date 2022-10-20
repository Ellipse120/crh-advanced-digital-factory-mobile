<script setup>
import { ref } from 'vue'
import { useDateFormat } from '@vueuse/core'
import { useRequest } from '@/composables/useRequest'
import { formatTime } from '@/helpers'
import DateTimePickerWrapper from '../../components/DateTimePickerWrapper.vue'
const show = ref(false)
const date = formatTime(new Date(), 'yyyy-MM-dd')

const list = ref([
  {
    key: 1,
    content: '设备各电器开关、连接线情况',
    checked: null

  },
  {
    key: 2,
    content: '机械动力与传动部分运转情况',
    checked: null

  },
  {
    key: 3,
    content: '急停开关状态设备各关键部位保养情况',
    checked: null

  },
  {
    key: 4,
    content: '急停开关状态',
    checked: null

  },
])

const resetQuery = () => {
  closePop()
}

const doConfirm = () => {
  closePop()
}

const showPop = () => {
  show.value = true
}

const closePop = () => {
  show.value = false
}
</script>

<template>
  <div class="px-2">
    <!-- <div @click="showPop" class="leading-6 text-right text-12px text-blue-500 pr-1">
      <van-icon name="filter-o" /><span>筛选</span>
    </div>
    <van-popup class="pt-6" v-model:show="show" position="right" :style="{ height: '100%', width:'80%' }" >
      <DateTimePickerWrapper title="开始日期" />
      <DateTimePickerWrapper title="结束日期" />
      <div class="absolute flex bottom-0 left-0 w-full">
        <van-button class="flex-1" @click="resetQuery">重置</van-button>
        <van-button class="flex-1" @click="doConfirm" type="primary">确定</van-button>
      </div>
    </van-popup> -->
    <div class="flex justify-between items-center leading-8">
      <span>{{date}}</span>
      <van-button size="mini" plain type="primary">更多</van-button>
    </div>
    <div class="flex py-4">
      <div 
        class="w-6 h-6 bg-gray-300 leading-6 text-center mr-2 rounded-full" 
        :class="{'bg-green-500': i.checked === true, 'bg-red-500': i.checked === false}"
        v-for="i in list" 
        :key="i.key"
      >{{i.key}}</div>
    </div>
    <div class="mb-2">
      <p class="leading-8">设备名称：构架组装升降机</p>
      <p class="leading-8">设备编号：434010001</p>
    </div>
    <div class="border-1 border-b-0 text-12px">
      <div v-for="(i,idx) in list" :key="i.id"  class="item p-2 border-b-1">
        <p class="leading-30px">{{ idx+1}}.{{i.content}}</p>
        <van-radio-group icon-size="14px" v-model="i.checked" direction="horizontal">
          <van-radio :name="true">是</van-radio>
          <van-radio :name="false">否</van-radio>
        </van-radio-group>
      </div>
    </div>
    <div class="flex w-full mt-1">
      <van-button class="flex-1">不使用</van-button>
      <van-button class="flex-1" type="primary">确定</van-button>
    </div>
  </div>
</template>