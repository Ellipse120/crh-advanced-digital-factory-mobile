import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref({
    userId: '1',
    username: 'test',
    password: 'test',
    roles: ['admin'],
    department: '测试部门'
  })
  const token = ref(null)

  const setToken = (data) => {
    token.value = data
  }

  const clearToken = () => { 
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
    token,
    userInfo,
    setToken,
    clearToken,
    setUserInfo,
    clearUserInfo
  }
})
