<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  workStatus: {
    type: String
  }
})

const router = useRouter()

const list = ref([
  {
    key: 1,
    content: '尼龙绳无拉毛',
    checked: null

  },
  {
    key: 2,
    content: '编号挂牌无断裂、丢失',
    checked: null

  },
  {
    key: 3,
    content: '编号挂牌无断裂、丢失',
    checked: null

  },
  {
    key: 4,
    content: '尼龙绳无拉毛',
    checked: null

  },
])

const onSubmit = () => {
  console.log('submit')
}

const onReportError = () => {
  router.push({
    name: 'ReportError',
    query: {
      active: 3
    }
  })
}
</script>

<template>
  <div class="px-2">
    <div class="flex py-4">
      <div 
        class="w-6 h-6 bg-gray-300 leading-6 text-center mr-2 rounded-full" 
        :class="{'bg-green-500': i.checked === true, 'bg-red-500': i.checked === false}"
        v-for="i in list" 
        :key="i.key"
      >{{i.key}}</div>
    </div>
    <div class="mb-2">
      <p class="leading-8">吊勾名称：吊勾1</p>
      <p class="leading-8">吊勾编号：S02555-01-2206</p>
    </div>
    <div class="border-1 border-b-0 text-12px mb-3">
      <div v-for="(i,idx) in list" :key="i.id"  class="item p-2 border-b-1">
        <p class="leading-30px mb-0">{{ idx+1}}.{{i.content}}</p>
        <van-radio-group v-if="workStatus !== 'finished'" icon-size="14px" v-model="i.checked" direction="horizontal">
          <van-radio :name="true">是</van-radio>
          <van-radio :name="false">否</van-radio>
        </van-radio-group>
      </div>
    </div>
    <div class="grid gap-2">
        <van-button block type="primary" @click="onSubmit">
          提交
        </van-button>

        <van-button v-if="workStatus !== 'finished'" block type="danger" @click="onReportError">
          异常
        </van-button>
      </div>
  </div>
</template>