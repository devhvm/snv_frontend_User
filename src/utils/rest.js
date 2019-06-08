import axios from 'axios'
import * as config from './config'
import token from './jwtToken'
//
// export default function callApi (endpoint, method = 'GET', data, params) {
//   return axios({
//     method: method,
//     url: `${config.API_URL}/${endpoint}`,
//     data: data,
//     params: params,
//     headers: {
//       Authorization: token()
//     }
//   }).catch(err => {
//     console.log(err)
//   })
// }

const instance = axios.create({
  baseURL: config.API_URL
})
instance.interceptors.request.use(
  config => {
    config.headers = {
      Authorization: token()
    }
    return config
  },
  error => {
    /* eslint-disable */
    return Promise.reject(error)
    /* eslint-enable */
  }
)
export const rest = instance
