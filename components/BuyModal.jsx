import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { buyStock } from '../actions/stockActions'
import toastifier from 'toastifier'
import 'toastifier/dist/toastifier.min.css';

const TradeModal = ({symbol, price, onCloseModal}) => {

    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()
    const buy = () => {
        if(isNaN(parseInt(quantity)) || parseInt(quantity) === 0){
            toastifier("Enter Valid Quantity", { type: 'error', showIcon: true, animation: 'flip' })
        }
        else{
            dispatch(buyStock(symbol, parseFloat(price), parseInt(quantity)))
        }
        onCloseModal()
    }

  return (
    <div className="flex justify-center items-center lg:px-16 pb-8 flex-col">
        <h1 className="text-4xl mt-8 mb-2 text-gray-800 font-semibold font-body">
            Welthoid
        </h1>
        <h1 className="text-green-500 px-5 pb-10 text-xl font-bold text-center font-body">
          You are one step away
        </h1>
        <div className="stock flex w-full justify-around border-b-2 border-gray-300 py-4">
            <p className="font-semibold text-red-500 font-body text-xl">Stock</p><p className="text-xl font-body"> {symbol}</p>
        </div>
        <div className="stock flex w-full justify-around border-b-2 border-gray-300 py-4">
            <p className="font-semibold text-red-500 font-body text-xl">Buy Price</p><p className="text-xl font-body"> ${price}</p>
        </div>
        <div className="stock flex w-full justify-around border-b-2 border-gray-300 py-4">
            <p className="font-semibold text-red-500 font-body text-xl">Transaction</p><p className="text-xl font-body"> ${(price*quantity).toFixed(2) || 0}</p>
        </div>
        <form>
            <div className="stock flex w-full justify-around py-4">
                <input value={quantity} onClick={() => setQuantity("")} onChange={(e) => setQuantity(e.target.value)} required className="rounded border-2 font-body p-2 border-gray-300" placeholder="Enter Quantity" />
            </div>
            <div className="flex justify-center mt-8 items-center">
                <button onClick={(e) => { e.preventDefault(); buy()}} type="submit" className="bg-green-600 hover:bg-green-700 transition duration-200 text-base lg:text-lg text-white font-semibold rounded-lg px-8 py-4">Buy Stock</button>
            </div>
        </form>
    </div>
  );
};

export default TradeModal