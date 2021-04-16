import React from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import TimeAgo from 'react-timeago'

const StockData = ({ stock, stock_data }) => {
    return (
    <tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            {stock_data.current_value < stock_data.history?.slice(-2)[0]?.value ? (
              <div
                class="relative rounded-full h-10 w-10 flex justify-center items-center bg-red-100"
              >
                <FiTrendingDown className="text-2xl text-red-500" />
              </div>
            ) : (
              <div
                class="relative rounded-full h-10 w-10 flex justify-center items-center bg-green-100"
              >
                <FiTrendingUp className="text-2xl text-green-500" />
              </div>
            )}
          </div>
          <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">{stock.toUpperCase()}</p>
          </div>
        </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">{stock_data?.current_value?.toFixed(2)}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <TimeAgo className="text-gray-900 whitespace-no-wrap" date={ stock_data.history?.slice(-1)[0]?.time } />
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span class="relative">active</span>
        </span>
      </td>
    </tr>
  );
};

export default StockData;
