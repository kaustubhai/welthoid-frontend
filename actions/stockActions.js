import axios from "axios";
import toastifier from 'toastifier'
import 'toastifier/dist/toastifier.min.css';
import {
  BUY_TRADE,
  SELL_TRADE,
  SET_ERROR,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import cookie from "js-cookie";

export const buyStock = (stockName, buyPrice, quantity) => async (dispatch) => {
  try {
    const user = cookie.get("welthoid-id");
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
    toastifier("Trade completed", { showIcon: true, aniimation: 'flip' })
    setTimeout(() => {
      if (process.browser)
        window.location.reload()
    }, 2000)
  } catch (error) {
    toastifier(error.response.data.message, { type: 'error', showIcon: true, aniimation: 'flip' })
    console.log(error);
      dispatch({ type: SET_ERROR });
  }
};

export const sellStock = (stockName, buyPrice, sellPrice, quantity) => async (dispatch) => {
  try {
    const user = cookie.get("welthoid-id");
    setAuthToken(user);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = { stockName, sellPrice, buyPrice, quantity };
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/trade/sell`,
      data,
      config
    );
    dispatch({
      type: SELL_TRADE,
      payload: res.data,
    });
    toastifier("Trade completed", { showIcon: true, aniimation: 'flip' })
    setTimeout(() => {
      if (process.browser)
        window.location.reload()
    }, 2000)
  } catch (error) {
    toastifier(error.message, { type: 'error', showIcon: true, aniimation: 'flip' })
    console.error(error);
      dispatch({ type: SET_ERROR });
  }
};

