import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Dashboard_Navbar";
import { SpinnerInfinity } from "spinners-react";
import dateFormat from "dateformat";
import Head from "next/head";
import Footer from "../components/Dashboard_Footer";
import withAuth from '../components/authentication'

const GlobalNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchNews = async () => {
    delete axios.defaults.headers.common["x-auth-token"];
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/news/global`
    );
    setNews(res?.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Head>
        <title>Welthoid- Latest News</title>
      </Head>
      <Navbar page="news" />
      <section className="w-full bg-white mt-3 md:px-16 px-2 lg:px-28 py-12">
        <div className="header flex items-end justify-between mb-12">
          <div className="title">
            <p className="text-4xl font-bold font-body text-gray-800 mb-4">
              Lastest articles
            </p>
            <p className="text-2xl font-light text-gray-400 max-w-2xl">
              Latest news based around the United States market to help you
              track possible future movement of market
            </p>
          </div>
        </div>
        {loading || !news || news.length === 0 ? (
          <SpinnerInfinity
            className="mx-auto my-10"
            size={65}
            thickness={107}
            speed={173}
            color="rgba(172, 57, 57, 1)"
            secondaryColor="rgba(172, 57, 59, 0.33)"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-12">
            {news.map((n) => (
              <div className="overflow-hidden shadow-lg rounded-lg cursor-pointer mx-auto">
                <a href={n.url} target="_blank" className="w-full block h-full">
                  <img
                    alt="news photo"
                    src={n.urlToImage}
                    className="max-h-40 w-full object-cover"
                  />
                  <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-red-500 text-md font-medium">Fresh</p>
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

      <section className="bg-white md:px-16 px-2 lg:px-28 my-12 dark:bg-gray-800 overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="text-start flex justify-center lg:block text-center lg:text-left flex-col lg:w-1/2 py-12 px-4 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Want to be millionaire ?</span>
            <span className="block text-red-500">
              It&#x27;s today or never.
            </span>
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-2 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <img
          src="/svg/news.svg"
          className="lg:w-1/2"
        />
      </section>
      <Footer/>
    </>
  );
};

export default withAuth(GlobalNews);
