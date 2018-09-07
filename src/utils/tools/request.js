const axios = global.axios

// 引入配置文件
const appConfig = require('../config/index')
let typeOf = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
  return typeof obj
} : function (obj) {
  return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
}

let axiosInstance

// 封装请求
class MyRequest {
  // 创建axios实例
  constructor() {
    // 是否是开发环境
    axiosInstance = axios.create({
      timeout: 90000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'APPCODE ' + appConfig.AppCode
      }
    })

    // 添加请求拦截器
    axiosInstance.interceptors.request.use(function (config) {

      // get请求处理参数
      if (config.method === 'get') {
        config.params = config.data
      }
      return config
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error)
    })

    // 添加响应拦截器
    axiosInstance.interceptors.response.use((response) => {
      if (!response || !response.data) {
        return Promise.reject(response)
      }
      // 请求出错了，给出提示
      else if (response.status != 200) {
        global.app.$vux.toast.text('请求出错了,请稍后再次尝试', 'middle')
        return Promise.reject(response.data)
      }
      return response.data
    }, function (error) {
      global.app.$vux.toast.text('请求出错了,请稍后再次尝试', 'middle')
      // 对响应错误做点什么
      return Promise.reject(error)
    })
  }
  // 是否是对象
  isObject(obj) {
    return (typeof obj === 'undefined' ? 'undefined' : typeOf(obj)) === 'object' && obj !== null
  }
  // 继承扩展
  extend(obj) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key]
    }
    if (this.isObject(obj) && args.length > 0) {
      if (Object.assign) {
        return Object.assign.apply(Object, [obj].concat(args))
      }
      args.forEach(function (arg) {
        if (this.isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            obj[key] = arg[key]
          })
        }
      })
    }
    return obj
  }
  // 请求
  sendRrquest(url, method, data, header) {
    return axiosInstance({
      method: method,
      url: url,
      data: data,
      headers: header
    })
  }
}

let myRequest = new MyRequest()

// 出请求
let MyHttp = function (defaultParams, ALL_API) {
  let resource = {}
  for (let actionName in ALL_API) {
    let _config = ALL_API[actionName]
    resource[actionName] = (pdata, pathParam) => {
      let paramsData = myRequest.extend({}, defaultParams, pdata)
      let url = _config.url
      if (pathParam) {
        url = url + pathParam
      }
      return myRequest.sendRrquest(url, _config.method, paramsData, {
        'Content-Type': 'application/json'
      })
    }
  }
  return resource
}

export default MyHttp