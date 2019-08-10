import axios from 'axios'
import qs from 'qs'

/**
 * get请求
 * @param url
 * @param params
 */
export const get = (url, params) => { return axios.get(url + qs.stringify(params)).then(res => res.data) }

/**
 * post请求
 * @param url
 * @param params
 */
export const post = (url, params) => { return axios.post(url, params).then(res => res.data) }

// 1.设置请求头的默认配置
// 前后端联调的时候,后端服务地址
axios.defaults.baseURL = ''
if (process.env.NODE_ENV === 'development') {
    // axios.defaults.baseURL = 'http://10.253.7.232:8888'
}

export default axios
