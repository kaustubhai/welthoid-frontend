import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tradeReducer from './tradeReducer';
const reducer = combineReducers({
  user: userReducer,
  trade: tradeReducer,
});

export default reducer;