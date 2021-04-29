import React from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { useRouter } from "next/router";

const StockData = ({ symbol, price, change, open, marketCap }) => {

  const router = useRouter();
  const onClick = () => {
    router.push(`/trade/${symbol}`)
  }

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">
            {symbol.toUpperCase()}
          </p>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {price.toFixed(2)}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
          {marketCap || 0}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex-shrink-0">
          {change < 0 ? (
            <div className="relative rounded-full h-10 w-10 flex justify-center items-center bg-red-100">
              <FiTrendingDown className="text-2xl text-red-500" />
            </div>
          ) : (
            <div className="relative rounded-full h-10 w-10 flex justify-center items-center bg-green-100">
              <FiTrendingUp className="text-2xl text-green-500" />
            </div>
          )}
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button onClick={onClick} className={`py-2 px-3 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg `}>
          Checkout
        </button>
      </td>
    </tr>
  );
};

export default StockData;
