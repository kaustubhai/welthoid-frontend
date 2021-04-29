import { BUY_TRADE, SELL_TRADE, GET_TRADE, CURRENT_TRADE, SET_ERROR } from '../actions/types'

const initialState = {
    trade: {},
    error: "",
}

const tradeReducer = (state = initialState, actions) => {
    switch(actions.type){
        case BUY_TRADE:
            return {
                ...state,
                trade: actions.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: actions.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: actions.payload
            }
        default:
            return state
    }           
}

export default tradeReducer