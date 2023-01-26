import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useCookies } from '@vueuse/integrations/useCookies'

export const useUserInfoStore = defineStore('userInfo', () => {
  const cookies = useCookies()

  const userInfo = ref({
    userId: null,
    username: null,
    password: null,
    roles: [],
    department: null
  })
  const token = ref(null)

  const setToken = (data) => {
    cookies.set('token', data)
    token.value = data
  }

  const clearToken = () => {
    cookies.remove('token')
    token.value = null
  }

  const setUserInfo = (data) => {
    userInfo.value = data
  }

  const clearUserInfo = () => {
    userInfo.value = {
      userId: null,
      username: null,
      password: null,
      roles: [],
      department: null
    }
  }

  return {
    userInfo,
    setToken,
    clearToken,
    setUserInfo,
    clearUserInfo
  }
})
