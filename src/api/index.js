import http from './public'
// 登陆
export const customerLogin = (params) => {
  return http.fetchPost('/customer/login', params)
}
// 退出登陆
export const logOut = (params) => {
  return http.fetchGet('/customer/logOut', params)
}
// 用户信息
export const userInfo = (params) => {
  return http.fetchGet('/customer/checkLogin', params)
}
// 注册账号
export const register = (params) => {
  return http.fetchPost('/customer/register', params)
}