<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const t1 = ref(null)
const t2 = ref(null)
const t3 = ref(null)
const t4 = ref(null)
const t5 = ref(null)

const onSubmit = () => {
  console.log('submit', {
    t1: t1.value,
    t2: t2.value,
    t3: t3.value,
    t4: t4.value,
    t5: t5.value
  })
}

const onReportError = () => {
  router.push({
    name: 'ReportError'
  })
}
</script>

<template>
  <div>
    <van-form>
      <div class="m-2">1、作业工位温、湿度要求符合作业标准
        <van-tag size="large" type="success">合格</van-tag>
      </div>

      <van-field
        v-model="t1"
        type="number"
        name="当前温湿度"
        label="当前温湿度"
        placeholder="当前温湿度"
        :rules="[{ required: true, message: '请填写' }]"
      />

      <van-field
        v-model="t2"
        type="number"
        name="标准温湿度"
        label="标准温湿度"
        placeholder="标准温湿度"
        :rules="[{ required: true, message: '请填写' }]"
      />

      <van-divider />

      <div class="m-2">2、作业工位环境整洁、无杂物</div>

      <van-radio-group v-model="t3" direction="horizontal">
        <van-radio name="1">否</van-radio>
        <van-radio name="2">是</van-radio>
      </van-radio-group>

      <van-divider />

      <div class="m-2">3、作业人员安全媚、工作服及绝缘鞋等防护用品穿戴到位</div>

      <van-radio-group v-model="t4" direction="horizontal">
        <van-radio name="1">否</van-radio>
        <van-radio name="2">是</van-radio>
      </van-radio-group>

      <van-divider />

      <div class="m-2">4、作业工位设备、物料及工具等放置规范</div>

      <van-radio-group v-model="t5" direction="horizontal">
        <van-radio name="1">否</van-radio>
        <van-radio name="2">是</van-radio>
      </van-radio-group>

      <van-divider />

      <div class="grid gap-2">
        <van-button block type="primary" @click="onSubmit">
          提交
        </van-button>

        <van-button block type="danger" @click="onReportError">
          异常
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style scoped>
:deep(.van-radio-group--horizontal, .van-checkbox-group--horizontal) {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>