import React from "react";

const TradeModal = ({symbol, name, price}) => {
  return (
    <div className="flex justify-center items-center px-16 pb-8 flex-col">
        <h1 className="text-4xl mt-8 mb-2 text-gray-800 font-semibold font-body">
            Welthoid
        </h1>
        <h1 className="text-red-500 px-5 pb-10 text-xl font-bold font-body">
          You are one step away
        </h1>
        <div className="stock flex w-full justify-around border-b-2 border-gray-300 py-4">
            <p className="font-semibold text-red-500 font-body text-xl">Stock</p><p className="text-xl font-body"> PRLD</p>
        </div>
        <div className="stock flex w-full justify-around border-b-2 border-gray-300 py-4">
            <p className="font-semibold text-red-500 font-body text-xl">Price</p><p className="text-xl font-body"> $55.00</p>
        </div>
        <form>
            <div className="stock flex w-full justify-around py-4">
                <input required type="number" step="1" className="rounded border-2 font-body p-2 border-gray-300" placeholder="Enter Quantity" />
            </div>
            <div className="flex justify-center mt-8 items-center">
                <button type="submit" className="bg-red-600 hover:bg-red-700 transition duration-200 text-base lg:text-lg text-white font-semibold rounded-lg px-8 py-4">Buy Stock</button>
            </div>
        </form>
    </div>
  );
};

export default TradeModal