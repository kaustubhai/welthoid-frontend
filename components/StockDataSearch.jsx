import React from "react";
import { useRouter } from "next/router";

const StockDataSearch = ({ symbol, name }) => {

  const router = useRouter();
  const onClick = () => {
    router.push(`/trade/${symbol}`)
  }

    return (
        <tr className="min-w-full">
          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <h1 onClick={onClick} className="cursor-pointer text-xl text-red-500 font-body font-bold">{symbol}</h1>
                
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <h1 onClick={onClick} className="text-lg font-body font-semibold cursor-pointer">{name}</h1>
                </td>
      </tr>
    );
};

export default StockDataSearch;
