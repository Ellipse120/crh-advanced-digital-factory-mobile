<script setup>
import { ref } from 'vue'
import { formatTime } from '@/helpers'

defineProps({
  workStatus: {
    type: String
  }
})

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

  }
])
</script>

<template>
  <div>
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
        <p class="leading-30px mb-0">{{ idx+1}}.{{i.content}}</p>
        <van-radio-group v-if="workStatus !== 'finished'" icon-size="14px" v-model="i.checked" direction="horizontal">
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
