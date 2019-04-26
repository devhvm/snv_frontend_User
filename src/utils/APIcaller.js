import axios from 'axios'
import * as config from './config'
import token from './jwtToken'

export default function callApi (endpoint, method = 'GET', data) {
  return axios({
    method: method,
    url: `${config.API_URL}/${endpoint}`,
    data: data,
    headers: {
      Authorization: token()
    }
  }).catch(err => {
    console.log(err)
  })
}
