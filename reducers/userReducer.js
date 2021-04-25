import { SET_USER, LOGOUT, CURRENT_HOLDING, PAST_HOLDING, USER_LOADING } from '../actions/types'

const intitialState = {
    user: {},
    coin: 0,
    loading: false,
    current: [],
    past: []
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
        case CURRENT_HOLDING:
            return {
                ...state,
                current: actions.payload
            }
        case PAST_HOLDING:
            return {
                ...state,
                past: actions.payload
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