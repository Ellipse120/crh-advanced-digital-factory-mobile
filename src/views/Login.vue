<script setup>
import { ref } from 'vue'
import Logo from '../assets/logo.svg'
import { useRouter } from 'vue-router'
import { useUserInfoStore } from '../stores/user'
import { useRequest } from '../composables/useRequest'

const router = useRouter()

const username = ref(null)
const password = ref(null)
const title = ref(import.meta.env.VITE_WEBSITE_TITLE)

const onSubmit = async () => {
  const { data } = await useRequest('login', { 
    method: 'post',
    data: {
      username: username.value,
      password: password.value
    }
  })

  const { setToken } = useUserInfoStore()
  setToken(data.value?.token)

  router.push({
    name: 'NavigatorView'
  })
}
</script>

<template>
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <div class="mb-8">
          <img :src="Logo" alt="logo" class="w-full h-20 text-center">
          <div class="text-xl text-center mt-4">{{title}}</div>
        </div>

        <van-field
          v-model="username"
          name="用户名"
          size="large"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          size="large"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>

      <div class="m-4">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>

  </div>
</template>