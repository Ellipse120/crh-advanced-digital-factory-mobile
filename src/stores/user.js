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

  return {
    userInfo
  }
})
