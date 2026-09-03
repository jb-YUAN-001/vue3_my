import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

// ==================== 类型定义 ====================
// 后端统一返回格式
export interface ResponseData<T = any> {
  code: number
  data: T
  msg: string
}

// 自定义请求配置（扩展axios原生config）
type RequestConfig = AxiosRequestConfig & {
  // 是否关闭全局loading
  hideLoading?: boolean
  // 是否跳过统一错误提示
  skipErrorTip?: boolean
}

// ==================== 创建实例 ====================
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // vite环境变量
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// ==================== 请求拦截器 ====================
service.interceptors.request.use(
  (config) => {
    // 1. 携带token
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // 2. 全局loading（自行封装loading组件）
    // if (!config.hideLoading) showLoading()

    return config
  },
  (error: AxiosError) => {
    // 请求发起前错误
    return Promise.reject(error)
  }
)

// ==================== 响应拦截器 ====================
service.interceptors.response.use(
  (response: AxiosResponse<ResponseData>) => {
    // 关闭loading
    // hideLoading()

    const res = response.data
    // 业务码判断（和后端约定）
    if (Array.isArray(res) || res.code === undefined) {
      return res
    } else {
      switch (res.code) {
        case 200:
          // 成功直接返回data
          return res as any
        case 401:
          // token过期，跳转登录
          localStorage.removeItem('token')
          location.href = '/login'
          return Promise.reject(res)
        default:
          // 统一错误提示
          // if (!(response.config as RequestConfig).skipErrorTip) ElMessage.error(res.msg || '请求失败')
          return Promise.reject(res)
      }
    }
    
  },
  (error: AxiosError<ResponseData>) => {
    // hideLoading()
    const config = error.config as RequestConfig
    if (config.skipErrorTip) return Promise.reject(error)

    // http状态码错误处理
    const status = error.response?.status
    let errMsg = '网络请求失败'
    switch (status) {
      case 400:
        errMsg = '参数错误'
        break
      case 403:
        errMsg = '权限不足'
        break
      case 404:
        errMsg = '接口不存在'
        break
      case 500:
        errMsg = '服务器异常'
        break
    }
    console.error(errMsg)
    return Promise.reject(error)
  }
)

// ==================== 导出请求方法 ====================
export function request<T>(config: RequestConfig): Promise<T> {
  return service(config)
}

// 简化常用方法
export function get<T>(url: string, params?: any, config?: RequestConfig) {
  return request<T>({ url, method: 'GET', params, ...config })
}

export function post<T>(url: string, data?: any, config?: RequestConfig) {
  return request<T>({ url, method: 'POST', data, ...config })
}

export function put<T>(url: string, data?: any, config?: RequestConfig) {
  return request<T>({ url, method: 'PUT', data, ...config })
}

export function del<T>(url: string, params?: any, config?: RequestConfig) {
  return request<T>({ url, method: 'DELETE', params, ...config })
}