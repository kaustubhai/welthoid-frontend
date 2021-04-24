import axios from 'axios'
import { LOGOUT, SET_USER, USER_LOADING } from './types'
import setAuthToken from '../utils/setAuthToken'
import cookie from 'js-cookie'

export const setUser = (response) => async dispatch => {
    dispatch({type: USER_LOADING})
    cookie.set('name', response.profileObj.name)
    cookie.set('email', response.profileObj.email)
    cookie.set('image', response.profileObj.imageUrl)
    cookie.set('token', response.accessToken)
    cookie.set('id', response.googleId)

    const id = cookie.get('id')
    setAuthToken(response.googleId || id)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const userInfo = {
        user: response.googleId
    }

    console.log(response)

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

export const logoutUser = () => async dispatch => {
    dispatch({type: USER_LOADING})
    cookie.remove("name");
    cookie.remove("email");
    cookie.remove("image");
    cookie.remove("token");
    cookie.remove("id");
    dispatch({type: LOGOUT})
}