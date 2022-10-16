import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'
import { Toast } from 'vant'
import { useUserInfoStore } from '../stores/user'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER_URL
})

instance.interceptors.request.use(
  (config) => {
    const store = useUserInfoStore()
    config.headers['Authorization'] = store.token
    
    return config
  },
  (error) => {
    return Promise.reject(error)
})

instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response)
  },
  (response) => {
    const errMsg = response.response?.data?.message || response.message || '服务出错了'
    Toast.fail(errMsg)
    return Promise.reject(response)
  }
)

const useRequest = (...args) => {
  return useAxios(...args, instance)
}

export {
  instance,
  useRequest
}
