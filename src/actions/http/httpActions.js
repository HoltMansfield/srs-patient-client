import axios from 'axios'
import { notify } from 'react-notify-toast'

import { myConfig } from '../../whitelabel/config.js'


export const httpGet = (url) => {
  return dispatch => {
    return axios.post(`${myConfig.apiUrl}/${url}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        notify.show('Server is down', 'error', 2000)
      })
  }
}

export const httpPut = (url, data) => {
  return dispatch => {
    return axios.put(`${myConfig.apiUrl}/${url}`, data)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        notify.show('Server is down', 'error', 2000)
      })
  }
}

export const httpPost = (url, data) => {
  return dispatch => {
    return axios.post(`${myConfig.apiUrl}/${url}`, data)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        notify.show('Server is down', 'error', 2000)
      })
  }
}

export const httpDelete = (url) => {
  return dispatch => {
    return axios.post(`${myConfig.apiUrl}/${url}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        notify.show('Server is down', 'error', 2000)
      })
  }
}
