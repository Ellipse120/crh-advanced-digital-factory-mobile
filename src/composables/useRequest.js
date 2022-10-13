import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'
import { Toast } from 'vant'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
})

instance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'test-token'
    return config
  },
  (error) => {
    return Promise.reject(error) 
})

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return Promise.resolve(response)
  },
  (response) => {
    Toast.fail(response.response?.data?.message || response.message || '服务出错了');
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