import React, { useState, useEffect } from "react";
import Head from 'next/head'
import StockData from "../components/stockData";
import Navbar from '../components/Dashboard_Navbar'
import axios from 'axios'
const Trade = () => {

  const [gainers, setGainers] = useState([])
  const [losers, setLosers] = useState([])
  const [page, setPage] = useState(1)

  const getTrades = async () => {
    // const most_gainers = await axios.get(`https://cloud.iexapis.com/stable/stock/market/list/gainers?token=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`)
    // setGainers(most_gainers.data)
    // const most_losers = await axios.get(`https://cloud.iexapis.com/stable/stock/market/list/losers?token=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`)
    // setLosers(most_losers.data)
  }

  useEffect(() => {
    getTrades()
   }, [])

  return (
      <>
          <Navbar />
          <Head>
              <title>Welthoid - See Trades</title>
          </Head>
      <section className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="py-8 flex justify-center flex-col">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Stock Symbol
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Price($)
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      MarketCap
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Status
                    </th>
                    <th scope="col"
                      className="px-5 text-center py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
                    >
                      Buy Stock
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gainers.length!==0 && page === 1 &&
                    gainers.map((stock, index) => {

                      return (
                        <StockData
                          key={index}
                          symbol={stock.symbol}
                          price={stock.latestPrice}
                          marketCap={stock.marketCap}
                          open={stock.isUSMarketOpen}
                          change={stock.change}
                        />
                      );
                    })}
                  {losers.length!==0 && page === 2 &&
                    losers.map((stock, index) => {

                      return (
                        <StockData
                          key={index}
                          symbol={stock.symbol}
                          price={stock.latestPrice}
                          marketCap={stock.marketCap}
                          open={stock.isUSMarketOpen}
                          change={stock.change}
                        />
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        <button onClick={() => { page === 1 ? setPage(2) : setPage(1) }} className="py-4 px-6 mx-auto bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg max-w-xs">
          {page === 1 ? "See Top Losers" : "See Top Gainers"}
        </button>
        </div>
      </section>
    </>
  );
};

export default Trade;
