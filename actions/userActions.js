import axios from 'axios'
import { LOGOUT, SET_USER, SET_ERROR, USER_LOADING, CURRENT_HOLDING, PAST_HOLDING } from './types'
import setAuthToken from '../utils/setAuthToken'
import cookie from 'js-cookie'
import toastifier from 'toastifier'
import 'toastifier/dist/toastifier.min.css';

export const setUser = (response) => async dispatch => {
    dispatch({type: USER_LOADING})
    cookie.set('welthoid-name', response.profileObj.name)
    cookie.set('welthoid-email', response.profileObj.email)
    cookie.set('welthoid-image', response.profileObj.imageUrl)
    cookie.set('welthoid-token', response.accessToken)
    cookie.set('welthoid-id', response.googleId)

    const id = cookie.get('welthoid-id')
    setAuthToken(response.googleId || id)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const userInfo = {
        user: response.googleId
    }

    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/register`)
    const resUser = {
            name: response?.profileObj?.name,
            email: response?.profileObj?.email,
            image: response?.profileObj?.image,
            token: response?.accesstoken,
            id: response?.googleId,
    }
    dispatch({
        type: SET_USER,
        payload: {
            user: resUser,
            coin: data.coin
        } 
    })
}

export const getCurrent = () => async dispatch => {
  try {
    const user = cookie.get('welthoid-id')
    setAuthToken(user)
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/current`)
    dispatch({
      type: CURRENT_HOLDING,
      payload: res.data
    })
  } catch (error) {
      console.error(error);
      dispatch({ type: SET_ERROR });
  }
}

export const getPast = () => async dispatch => {
  try {
    const user = cookie.get('welthoid-id')
    setAuthToken(user)
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/past`)
    dispatch({
      type: PAST_HOLDING,
      payload: res.data
    })
  } catch (error) {
      console.error(error);
      dispatch({ type: SET_ERROR });
  }
}

export const logoutUser = () => async dispatch => {
    dispatch({type: USER_LOADING})
    cookie.remove("welthoid-name");
    cookie.remove("welthoid-email");
    cookie.remove("welthoid-image");
    cookie.remove("welthoid-token");
    cookie.remove("welthoid-id");
  dispatch({ type: LOGOUT })
  toastifier("Logout Successfull", { showIcon: true, aniimation: 'flip' })
}