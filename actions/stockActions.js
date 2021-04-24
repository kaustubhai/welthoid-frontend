import axios from "axios";
import toastifier from 'toastifier'
import {
  BUY_TRADE,
  SELL_TRADE,
  GET_TRADE,
  CURRENT_TRADE,
  SET_ERROR,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import cookie, { set } from "js-cookie";

export const buyStock = (stockName, buyPrice, quantity) => async (dispatch) => {
  try {
    const user = cookie.get("id");
    setAuthToken(user);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = { stockName, buyPrice, quantity };
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/trade/buy`,
      data,
      config
    );
    dispatch({
      type: BUY_TRADE,
      payload: res.data,
    });
    toastifier("Stock added in your portfolio", { showIcon: true })
  } catch (error) {
    console.error(error);
    dispatch({ type: SET_ERROR });
  }
};


