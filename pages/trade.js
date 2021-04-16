import React, { useState, useEffect } from "react";
import Head from 'next/head'
import StockData from "../components/stockData";
import Navbar from '../components/Dashboard_Navbar'

const Trade = () => {
  const stocksUrl = "ws://stocks.mnet.website/";
  const [stocks, setStocks] = useState({});
  const [error, setError] = useState(false);

  let connection;

  useEffect(() => {
    connection = new WebSocket(stocksUrl);
    connection.onmessage = saveNewStockValues;
    connection.onclose = () => {
      setError(true);
    };
    console.log(stocks);
  }, []);

  const saveNewStockValues = (event) => {
    let up_values_count = 0;
    let down_values_count = 0;

    let result = JSON.parse(event.data);

    // time stored in histories should be consisitent across stocks(better for graphs)
    let current_time = Date.now();
    let new_stocks = stocks;
    result.map((stock) => {
      // stock = ['name', 'value']
      if (stocks[stock[0]]) {
        new_stocks[stock[0]].current_value > parseInt(stock[1])
          ? up_values_count++
          : up_values_count++;
      }

      if (stocks[stock[0]]) {
        new_stocks[stock[0]].current_value = parseInt(stock[1]);
        new_stocks[stock[0]].history.push({
          time: current_time,
          value: parseInt(stock[1]),
        });
      } else {
        new_stocks[stock[0]] = {
          current_value: stock[1],
          history: [{ time: Date.now(), value: parseInt(stock[1]) }],
          is_selected: false,
        };
      }
    });
    setStocks({
      ...new_stocks,
      trend: newMarketTrend(up_values_count, down_values_count),
    });
  };

  const newMarketTrend = (up_count, down_count) =>
    up_count > down_count ? "up" : "down";

  return (
      <>
          <Navbar />
          <Head>
              <title>Welthoid - See Trades</title>
          </Head>
      <section className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="py-8">
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
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Updated at
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {stocks &&
                    Object.keys(stocks).map((stock, index) => {
                      let current_stock = stocks[stock];

                      return (
                        <StockData
                          key={index}
                          stock={stock}
                          stock_data={current_stock}
                        />
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trade;
