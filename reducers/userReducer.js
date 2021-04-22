import { SET_USER, LOGOUT, USER_LOADING } from '../actions/types'

const intitialState = {
    user: {},
    coin: 0,
    loading: false
}

const userReducer = (state = intitialState, actions) => {
    switch (actions.type) {
        case USER_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_USER:
            return {
                user: actions.payload.user,
                coin: actions.payload.coin,
                loading: false
            }
        case LOGOUT:
            return {
                user: {},
                coin: 0,
                loading: false
            }
        default:
            return state
    }
}

export default userReducer