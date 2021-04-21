import React, { useState, useEffect } from "react";
import Navbar from "../components/Dashboard_Navbar";
import Link from "next/link";
import Head from "next/head";
import toastifier from 'toastifier'
import 'toastifier/dist/toastifier.min.css'

const Dashboard = () => {
  const stocksUrl = "ws://stocks.mnet.website/";
  const [stocks, setStocks] = useState({});
  const [trend, setTrend] = useState();
  const [error, setError] = useState(false);

  let connection;

  useEffect(() => {
    connection = new WebSocket(stocksUrl);
    connection.onmessage = saveNewStockValues;
    connection.onclose = () => {
      setError(true);
    };
  }, []);

  const saveNewStockValues = (event) => {
    let result = JSON.parse(event.data);
    let [up_values_count, down_values_count] = [0, 0];

    let current_time = Date.now();
    let new_stocks = stocks
    result.map((stock) =>
    {
      // stock = ['name', 'value']
      if(stocks[stock[0]])
      {
        new_stocks[stock[0]].current_value > Number(stock[1]) ? up_values_count++ : down_values_count++;

        new_stocks[stock[0]].current_value = Number(stock[1])
        new_stocks[stock[0]].history.push({time: current_time, value: Number(stock[1])})
      }
      else
      {
        new_stocks[stock[0]] = { current_value: stock[1], history: [{time: Date.now(), value: Number(stock[1])}], is_selected: false }
      }
    });
      setStocks({ stocks: new_stocks, market_trend: newMarketTrend(up_values_count, down_values_count)})
  }

  // it's about the values that just came in, and not all the stocks
  const newMarketTrend = (up_count, down_count) => {
    if(up_count === down_count) return undefined;
    return up_count > down_count ? 'up' : 'down'
  }

  return (
    <>
      <Head>
        <title>Welthoid- Dashboard</title>
      </Head>
      <Navbar page="dashboard" />
      <section className="w-full flex justify-center text-center lg:text-left lg:justify-between items-center flex-col lg:flex-row p-8 lg:p-28">
        <div className="flex flex-col lg:block justify-center">
          <h2 className="font-body font-semibold text-3xl lg:text-7xl max-w-2xl">
            Congratulations on taking one step closer
          </h2>
          <p className="text-lg lg:text-2xl max-w-lg mt-5 mb-10">
            You can now trade, track, earn or lose your mose buck succesfully
          </p>
          <Link href="/help">
          <a onClick={() => {
            toastifier('Check', {
              onhoverPause: true
            })}}  className="bg-red-600 hover:bg-red-700 transition duration-200 text-base lg:text-lg text-white font-semibold rounded-lg px-8 py-4">
              How to Start
            </a>
          </Link>
        </div>
        <img
          src="/svg/dashboard.svg"
          className="max-w-4xl mt-5 lg:mt-0"
          alt="Dashboard SVG"
        />
      </section>

      {trend === "up" ? (
        <section id="going-up" className="bg-gray-100 dark:bg-gray-800lg:px-16">
          <div className="w-full flex flex-col text-center lg:text-left lg:flex-row items-center justify-center lg:justify-around  mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block">Current market Trend is</span>
              <span className="block text-green-500">Going upwards</span>
            </h2>
            <div className="lg:mt-0 mt-10 lg:flex-shrink-0">
              <div className=" inline-flex rounded-md shadow">
                <Link href="/trade">
                  <a className="py-4 px-6  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Trade Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="going-up" className="bg-gray-100 dark:bg-gray-800lg:px-16">
          <div className="w-full flex flex-col text-center lg:text-left lg:flex-row items-center justify-center lg:justify-around  mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
              <span className="block">Current market Trend is</span>
              <span className="block text-red-500">Going downwards</span>
            </h2>
            <div className="lg:mt-0 mt-10 lg:flex-shrink-0">
              <div className=" inline-flex rounded-md shadow">
                <Link href="/trade">
                  <a className="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Trade Now
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="w-full flex items-center mt-40 mb-20 flex-col">
        <h3 className="font-body font-bold text-4xl text-center mb-10">Learn from the masters</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NL9RT5S2i-c?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0t_VoN_xYGY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QzvRxoJCaRA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
