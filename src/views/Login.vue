<script setup>
import { ref } from 'vue'
import Logo from '../assets/logo.svg'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref(null)
const password = ref(null)
const onSubmit = () => {
  router.push({
    name: 'NavigatorView'
  })
}
</script>

<template>
  <div class="flex flex-col items-center justify-around">
    <van-form @submit="onSubmit" class="h-100">
      <van-cell-group inset>
        <div>
          <img :src="Logo" alt="logo" class="w-full h-20 text-center">
        </div>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>

  </div>
</template>