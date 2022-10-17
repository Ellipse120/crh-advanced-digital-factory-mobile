import { format, toDate } from 'date-fns'
import zhLocale from 'date-fns/locale/zh-CN/index'

const formatTime = (time, cFormat = 'yyyy-MM-dd HH:mm:ss', options) => {
  if (!time) {
    return null
  }

  return format(toDate(new Date(time)), cFormat, {
    ...{
      locale: zhLocale
    },
    ...options
  })
}

const formatText = (list, value, keyAlias = 'key', valueAlias = 'value') => {
  if (['', undefined, 'undefined', null, 'null'].includes(value)) {
    return ''
  }

  if (list === null || !Array.isArray(list)) {
    return ''
  }

  const target = list.find(item => item[keyAlias] === value)

  return target ? target[valueAlias] : value
}

export {
  formatTime,
  formatText
}