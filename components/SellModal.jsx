import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { sellStock } from '../actions/stockActions'

const TradeModal = ({symbol, name, price, buy}) => {
    const [buyPrice, setBuyPrice] = useState()
    const [stock, setStock] = useState({})
    const [quantity, setQuantity] = useState(0)

    const dispatch = useDispatch()
    const sell = () => {
        console.log({symbol, buyPrice, sellPrice: price, quantity});
        dispatch(sellStock(symbol, parseFloat(buyPrice), parseFloat(price), parseFloat(quantity)))
    }

    useEffect(() => {
        const s = buy.filter(trade => trade.stockName === symbol)
        setStock(s[0])
        setBuyPrice(s[0].buy[0].price)
    } , [buy])

  return (
    <div className="flex justify-center items-center px-16 pb-8 flex-col">
        <h1 className="text-4xl mt-8 mb-2 text-gray-800 font-semibold font-body">
            Welthoid
        </h1>
        <h1 className="text-red-500 px-5 pb-10 text-xl font-bold font-body">
          You are one step away
        </h1>
        <div className="stock flex w-full justify-around border-b-2 border-gray-300 py-4">
            <p className="font-semibold text-red-500 font-body text-xl">Stock</p><p className="text-xl font-body"> {symbol}</p>
        </div>
        <div className="stock flex w-full justify-around border-b-2 border-gray-300 py-4">
            <p className="font-semibold text-red-500 font-body text-xl">Buy Price</p>
            <select
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.value)}
            name="buyPrice"
            id="buyPrice"
            className="bg-white"
          >
            { stock?.buy?.map(p => (
                <option className="bg-white" value={p.price}>{p.price}</option>
            ))
            }
          </select>
        </div>
        <div className="stock flex w-full justify-around border-b-2 border-gray-300 py-4">
            <p className="font-semibold text-red-500 font-body text-xl">Sell Price</p><p className="text-xl font-body"> {price}</p>
        </div>
        <form>
            <div className="stock flex w-full justify-around py-4">
                <input value={quantity} onChange={(e) => setQuantity(e.target.value)} onFocus={() => {setQuantity("")}} required type="number" step="1" className="rounded border-2 font-body p-2 border-gray-300" placeholder="Enter Quantity" />
            </div>
            <div className="flex justify-center mt-8 items-center">
                <button onClick={e => { e.preventDefault(); sell() }} type="submit" className="bg-red-600 hover:bg-red-700 transition duration-200 text-base lg:text-lg text-white font-semibold rounded-lg px-8 py-4">Sell Stock</button>
            </div>
        </form>
    </div>
  );
};

export default TradeModal