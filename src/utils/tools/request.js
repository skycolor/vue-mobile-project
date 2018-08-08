import axios from 'axios'

// 引入配置文件
const appConfig = require('../config/index')

let axiosInstance

// 封装请求
class MyRequest {
    // 创建axios实例
    constructor(){
        // 是否是开发环境
        const isProduction = (process.env.NODE_ENV === 'development')
        axiosInstance = axios.create({
            baseURL: '/apis',
            timeout: 90000,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    
    
}
