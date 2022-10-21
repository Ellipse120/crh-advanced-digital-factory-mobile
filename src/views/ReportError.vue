<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Toast, Dialog } from 'vant'
import PageWithNavbar  from '../components/PageWithNavbar.vue'

const route = useRoute()
const router = useRouter()
const t1 = ref(null)

const onCancel = () => {
  Dialog.confirm({
    title: '退出确认',
    message:'资料尚未保存，是否取消编辑？'
  })
    .then(() => {
      router.push({
        name: 'Kaigongzhunbei',
        query: {
          active: route.query.active
        }
      })
    })
    .catch(() => {
      console.log('cancel');
    })
}

const onSave = () => {
  Toast.success('保存成功')
  router.push({
    name: 'Kaigongzhunbei',
    query: {
      active: route.query.active
    }
  })
}
</script>

<template>
  <PageWithNavbar @click-left="onCancel" @click-right="onSave">
    <template #left>
      <van-button plain type="primary" class="!border-transparent">取消</van-button>
    </template>

    <template #right>
      <van-button plain type="primary" class="!border-transparent">保存</van-button>
    </template>

    <van-form>
      <van-cell-group inset>
        <van-field
          v-model="t1"
          name="车组号"
          label="车组号"
          placeholder="请填写"
          :rules="[{ required: true, message: '请填写' }]"
        />

        <van-field
          v-model="t1"
          name="提报级别"
          label="提报级别"
          placeholder="请填写"
          :rules="[{ required: true, message: '请填写' }]"
        />
        
        <van-field
          v-model="t1"
          name="异常类别"
          label="异常类别"
          placeholder="请填写"
          :rules="[{ required: true, message: '请填写' }]"
        />

        <van-field
          v-model="t1"
          name="异常级别"
          label="异常级别"
          placeholder="请填写"
          :rules="[{ required: true, message: '请填写' }]"
        />

        <van-field
          v-model="t1"
          name="响应部门"
          label="响应部门"
          placeholder="请填写"
          :rules="[{ required: true, message: '请填写' }]"
        />

        <van-field
          v-model="t1"
          name="响应人员"
          label="响应人员"
          placeholder="响应人员"
          :rules="[{ required: true, message: '请填写' }]"
        />

        <van-field
          v-model="t1"
          type="textarea"
          autosize
          rows="4"
          center
          name="异常信息"
          label="异常信息"
          placeholder="异常信息"
          :rules="[{ required: true, message: '请填写' }]"
        />

        <van-button block type="primary" class="!mt-4" @click="onSave">
          保存
        </van-button>
        <van-button block type="info" class="!mt-4"  @click="onCancel">
          取消
        </van-button>
      </van-cell-group> 

      <van-divider />

    </van-form>
  </PageWithNavbar>
</template>
