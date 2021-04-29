import React, { useState, useEffect } from "react";
import Head from "next/head";
import StockData from "../components/stockData";
import StockDataSearch from "../components/StockDataSearch";
import Navbar from "../components/Dashboard_Navbar";
import axios from "axios";
import Footer from "../components/Dashboard_Footer";
import withAuth from "../components/authentication";
const trade = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [symbols, setSymbols] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");

  const getTrades = async () => {
    try {
      delete axios.defaults.headers.common["x-auth-token"];
      const most_gainers = await axios.get(
        `https://cloud.iexapis.com/stable/stock/market/list/gainers?token=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`
      );
      setGainers(most_gainers.data);
      const most_losers = await axios.get(
        `https://cloud.iexapis.com/stable/stock/market/list/losers?token=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`
      );
    setLosers(most_losers.data);
    } catch (error) {
      console.error(error)
    }
  };

  const getSymbols = async () => {
    try {
      delete axios.defaults.headers.common["x-auth-token"];
      const symbol = await axios.get(
        `https://cloud.iexapis.com/stable/ref-data/symbols?token=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`
      );
      setSymbols(symbol.data);
    } catch (error) {
      console.error(error)
    }
  };

  const getStocks = () => {
    console.log(input);
    const s = symbols.filter(
      sym => sym.symbol.indexOf(input.toUpperCase()) === 0
    );
    setStocks(s.slice(0, 5));
    if (input.length === 0)
      setStocks([])
  };

  useEffect(() => {
    getTrades();
    getSymbols();
  }, []);

  // console.log(stocks.slice(0, 10));
  return (
    <>
      <Navbar />
      <Head>
        <title>Welthoid - See Trades</title>
      </Head>
      <section className="container mx-auto px-4 mt-20 mb-10 sm:px-8 max-w-3xl">
        <h1 className="font-body text-2xl text-center font-bold mb-5">
          Search your stock
        </h1>
        <div className=" flex flex-col justify-between items-center">
          <input
            type="text"
            value={input}
            autoCapitalize="characters"
            onKeyUp={() => getStocks()}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            id="rounded-email"
            className=" rounded-lg border-transparent ml-5 flex-1 w-full appearance-none border border-red-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            placeholder="Enter stock symbol"
          />
          <button className="py-2 px-12 lg:mr-5 lg:ml-10 mt-5 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white cursor-pointer transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg max-w-xs">
            Search
          </button>
          {stocks.length !== 0 && (
            <div className="-mx-4 min-w-full sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
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
                        className="px-5 py-3 text-left bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
                      >
                        Stock Name
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                     stocks?.map((stock, index) => {
                        return (
                          <StockDataSearch
                            key={index}
                            symbol={stock.symbol}
                            name={stock.name}
                          />
                        );
                     })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
        { input.length > 0 && stocks.length <= 0 && <h1 className="font-body font-bold text-2xl text-center text-red-500 py-10">No Stock Found</h1>}
      </section>
      <section className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="py-8 flex justify-center flex-col">
          <h1 className="font-body text-2xl text-center font-bold mb-5">
            Top Movers today
          </h1>
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
                    <th
                      scope="col"
                      className="px-5 text-center py-3 bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-normal"
                    >
                      Checkout
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gainers.length !== 0 &&
                    page === 1 &&
                    gainers?.slice(0, 5).map((stock, index) => {
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
                  {losers.length !== 0 &&
                    page === 2 &&
                    losers?.slice(0, 5).map((stock, index) => {
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
          <button
            onClick={() => {
              page === 1 ? setPage(2) : setPage(1);
            }}
            className="py-4 px-6 mx-auto bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg max-w-xs"
          >
            {page === 1 ? "See Top Losers" : "See Top Gainers"}
          </button>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default withAuth(trade);
