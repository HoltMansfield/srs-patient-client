import axios from 'axios'
import { notify } from 'react-notify-toast'
import { myConfig } from '../../whitelabel/config.js'
import { showOverlay, hideOverlay } from '../overlay/overlayActions'

const genericError = (dispatch) => {
  notify.show('Server is down', 'error', 2500)
  setTimeout(() => {
    dispatch(hideOverlay())
  }, 300)
}

const doHideOverlay = (dispatch) => {
  setTimeout(() => {
    dispatch(hideOverlay())
  }, 300)
}

export const httpGet = (url, useOverlay = true) => {
  return dispatch => {
    if(useOverlay) dispatch(showOverlay())

    return axios.post(`${myConfig.apiUrl}/${url}`)
      .then(response => {
        doHideOverlay(dispatch)
        return response.data;
      })
      .catch(genericError(dispatch))
  }
}

export const httpPut = (url, data, useOverlay = true) => {
  return dispatch => {
    if(useOverlay) dispatch(showOverlay())

    return axios.put(`${myConfig.apiUrl}/${url}`, data)
      .then(response => {
        doHideOverlay(dispatch)
        return response.data;
      })
      .catch(genericError(dispatch))
  }
}

export const httpPost = (url, data, useOverlay = true) => {
  return dispatch => {
    if(useOverlay) dispatch(showOverlay())

    return axios.post(`${myConfig.apiUrl}/${url}`, data)
      .then(response => {
        doHideOverlay(dispatch)
        return response.data;
      })
      .catch(genericError(dispatch))
  }
}

export const httpDelete = (url, useOverlay = true) => {
  return dispatch => {
    dispatch(showOverlay())

    return axios.post(`${myConfig.apiUrl}/${url}`)
      .then(response => {
        doHideOverlay(dispatch)
        return response.data;
      })
      .catch(genericError(dispatch))
  }
}
