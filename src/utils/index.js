import axios from 'axios'
let baseURL = 'http://haorui.xyz:8088'

const $http = axios.create({
  baseURL,
  withCredentails: true
})
// 请求拦截器
$http.interceptors.request.use((req) => {
  return req
})
// 响应拦截器
$http.interceptors.response.use((res) => {
  if (
    res.config.url.indexOf('login') === -1 &&
    res.config.url.indexOf('register') === -1 &&
    res.config.url.indexOf('logout') === -1
  ) {
    console.log('cookie = ' + document.cookie)
  }
  return res
})

export const get = (url, params) => {
  params = params || {}
  return new Promise((resolve, reject) => {
    // axios 自带 get 和 post 方法
    $http
      .get(url, {
        params
      })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const post = (url, data) => {
  data = data || {}
  return new Promise((resolve, reject) => {
    $http
      .post(url, data)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}