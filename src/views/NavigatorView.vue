<script setup>
import PageWithNavbar  from '../components/PageWithNavbar.vue'
import { useUserInfoStore } from '../stores/user'

const { userInfo, clearToken, clearUserInfo } = useUserInfoStore()
console.log(userInfo, ' 开工准备')

const logout = () => {
  clearToken()
  clearUserInfo()
}
</script>

<template>
  <PageWithNavbar>
    <div class="p-6 cursor-pointer text-4xl text-green-500 bg-light-blue-300" @click="logout">logout</div>
    <div class="flex flex-col items-center justify-around h-140">
      <router-link to="/">
        <div class="text-white bg-blue-500 px-12 py-8 text-4xl">开工准备</div>
      </router-link>
    
      <router-link to="/">
        <div class="text-white bg-blue-500 px-12 py-8 text-4xl my-2">生产过程</div>
      </router-link>
    
      <router-link to="/">
        <div class="text-white bg-blue-500 px-12 py-8 text-4xl">完工清点</div>
      </router-link>
    </div>
  </PageWithNavbar>
</template>