import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import Navbar from "../../../components/Dashboard_Navbar";
import { SpinnerInfinity } from "spinners-react";
import dateFormat from "dateformat";
import { useRouter } from "next/router";
import Footer from "../../../components/Dashboard_Footer";
// import stock from '../../../components/quote'

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const [stock, setStock] = useState({});
  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    if (id) {
      const res = await axios.get(
        `https://cloud.iexapis.com/stable/stock/${id}/quote?token=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`
      );
      setStock(res.data);
      console.log(res.data);
      setLoading(false);
      fetchNews(res.data.companyName);
      }
  };

  const fetchNews = async (comp) => {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${comp.split(' ')[0]}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
    );
    setNews(res?.data.articles?.slice(0, 3));
    setNewsLoading(false);
  };

  useEffect(() => {
    getData();
    setLoading(true);
  }, [id]);
  return (
    <>
      <Navbar />
      <Head>
        <title>{`Welthoid - See ${id || "stock"}`}</title>
      </Head>
      {loading || !stock ? (
        <SpinnerInfinity
          className="mx-auto my-40"
          size={65}
          thickness={107}
          speed={173}
          color="rgba(172, 57, 57, 1)"
          secondaryColor="rgba(172, 57, 59, 0.33)"
        />
      ) : (
        <>
          <section className="lg:px-40 px-16 flex lg:flex-row flex-col my-10 lg:my-20 justify-between items-center">
            <div className="">
              <h1 className="text-4xl text-red-500 font-bold font-body">
                {stock.symbol}
              </h1>
              <h2 className="text-2xl">{stock.companyName}</h2>
            </div>
            <div className="">
              <h1
                className={`font-bold text-7xl text-right mt-10 lg:mt-0 ${
                  stock.change > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {stock.latestPrice}
              </h1>
              <h2
                className={`text-2xl text-center ${
                  stock.change > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {stock.change > 0 ? `+${stock.change}%` : `-${stock.change}%`}
              </h2>
            </div>
          </section>

          <section className="lg:px-40 px-16 flex flex-col justify-center items-center">
            <h1 className="font-body font-semibold my-10 text-2xl">
              Key Statistics
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
              <div className="row flex justify-between shadow px-16 py-8 w-full items-center">
                <span className="font-bold text-red-500 text-xl">Open:</span>
                <span className="text-xl">{stock.iexOpen}</span>
              </div>
              <div className="row flex justify-between shadow px-16 py-8 items-center">
                <span className="font-bold text-red-500 text-xl">Close:</span>
                <span className="text-xl">{stock.iexClose}</span>
              </div>
              <div className="row flex justify-between shadow px-16 py-8 items-center">
                <span className="font-bold text-red-500 text-xl">Volume:</span>
                <span className=" text-xl">{stock.volume || "---"}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
              <div className="row flex justify-between shadow px-16 py-8 w-full items-center">
                <span className="font-bold text-red-500 text-xl">
                  52 Week High:
                </span>
                <span className="text-xl">{stock.week52High}</span>
              </div>
              <div className="row flex justify-between shadow px-16 py-8 items-center">
                <span className="font-bold text-red-500 text-xl">
                  52 Week Low:
                </span>
                <span className="text-xl">{stock.week52Low}</span>
              </div>
              <div className="row flex justify-between shadow px-16 py-8 items-center">
                <span className="font-bold text-red-500 text-xl">
                  Market Cap:
                </span>
                <span className=" text-xl">{stock.marketCap}</span>
              </div>
            </div>
          </section>
          <section className="flex flex-col items-center justify-center mx-5 my-10 lg:flex-row">
            <button className="bg-green-600 hover:bg-green-700 transition duration-200 text-base lg:text-lg text-white font-semibold rounded-lg px-8 py-4">
              Buy {stock.symbol}
            </button>
                      </section>
                      

          <section className="w-full bg-white mt-3 md:px-16 px-2 lg:px-28 py-12">
            <div className="lg:px-40 px-16 flex flex-col justify-center items-center">
              <h1 className="font-body font-semibold my-10 text-2xl">
              Latest News about {stock.companyName}
            </h1>
            </div>
            {newsLoading || news.length === 0 ? (
              <SpinnerInfinity
                className="mx-auto my-10"
                size={65}
                thickness={107}
                speed={173}
                color="rgba(172, 57, 57, 1)"
                secondaryColor="rgba(172, 57, 59, 0.33)"
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {news.map((n) => (
                  <div className="overflow-hidden shadow-lg rounded-lg cursor-pointer mx-auto">
                    <a
                      href={n.url}
                      target="_blank"
                      className="w-full block h-full"
                    >
                      <img
                        alt="news photo"
                        src={n.urlToImage}
                        className="max-h-40 w-full object-cover"
                      />
                      <div className="bg-white dark:bg-gray-800 w-full p-4">
                        <p className="text-red-500 text-md font-medium">
                          Fresh
                        </p>
                        <p className="text-gray-800 dark:text-white text-2xl font-medium mb-2">
                          {n.title}
                        </p>
                        <p className="text-gray-400 dark:text-gray-300 font-light text-lg">
                          {n.description}
                        </p>
                        <div className="flex items-center mt-4">
                          <a href={n.author} className="block relative">
                            <div className="flex flex-col justify-between ml-4 text-sm">
                              <p className="text-gray-800 dark:text-white">
                                {n.source.name}
                              </p>
                              <p className="text-gray-400 dark:text-gray-300">
                                {dateFormat(
                                  n.publishedAt,
                                  "mmmm dS, yyyy, h:MM:ss TT"
                                )}
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            )}
            </section>
            <Footer/>
        </>
      )}
    </>
  );
};

export default index;
