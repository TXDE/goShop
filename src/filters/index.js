import Vue from 'vue'
import format from 'date-fns/format'
// 自定义过滤器
Vue.filter('date_format', function (value, formatStr = 'YYYY-MM-DD HH:mm:ss') {
  return format(value, formatStr)
})
