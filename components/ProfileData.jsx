import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ProfileData = ({ symbol, buy}) => {

  const router = useRouter();
  const [position, setPosition] = useState(0)
  const [transaction, setTransaction] = useState(0)
  const onClick = () => {
    router.push(`/trade/${symbol}`)
  }

  const getDetails = () => {
    let pos = 0
    let trans = 0
    buy?.forEach(trade => {
        pos += parseFloat(trade.quantity)
        trans += parseFloat(trade.quantity * trade.price)
    });
    console.log({pos, trans});
    console.log(buy);
    setPosition(pos)
    setTransaction(trans)
  }

  useEffect(() => {
      getDetails()
  }, [buy])

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
          {position}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p className="text-gray-900 whitespace-no-wrap">
        {transaction.toFixed(2)}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button onClick={onClick} className={`py-2 px-3 bg-red-500 hover:bg-red-600 focus:ring-red-400 focus:ring-offset-red-100 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg `}>
          Checkout
        </button>
      </td>
    </tr>
  );
};

export default ProfileData;
