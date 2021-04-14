import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Navbar page="about" />
        <Head>
            <title>Welthoid- About Us</title>  
        </Head>
          <section className="container max-w-7xl mx-auto p-4 my-10 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
            <div className="flex flex-wrap -mx-8">
              <div className="w-full lg:w-1/2 px-8">
                <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                  <h2 className="mb-4 text-3xl font-body lg:text-4xl font-bold font-heading dark:text-white">
                    Experience real stock market without
                    using real money
                  </h2>
                  <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                    Welthoid is a practice platform for new investors to learn
                    No one like to lose money, that to while learning something
                    In Welthoid, you can use our "Mose-Buck" to trade and invest
                    in our virtual market generated from the real market
                  </p>
                  <div className="w-full md:w-1/3">
                    <button
                      type="button"
                      className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-8">
                <ul className="space-y-12">
                  <li className="flex -mx-4">
                    <div className="px-4">
                      <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                        1
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 font-body text-xl font-semibold dark:text-white">
                        Mose Buck
                      </h3>
                      <p className="text-gray-500 dark:text-gray-300 leading-loose">
                        It is a virtual currency valid only on welthoid.
                        You can only use it for trading on welthoid
                      </p>
                    </div>
                  </li>
                  <li className="flex -mx-4">
                    <div className="px-4">
                      <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                        2
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 font-body text-xl font-semibold dark:text-white">
                        Real data
                      </h3>
                      <p className="text-gray-500 dark:text-gray-300 leading-loose">
                        We only use real data from APIs, we dont really make you
                        invest in real stock market
                      </p>
                    </div>
                  </li>
                  <li className="flex -mx-4">
                    <div className="px-4">
                      <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                        3
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 font-body text-xl font-semibold dark:text-white">
                        Beta Website
                      </h3>
                      <p className="text-gray-500 dark:text-gray-300 leading-loose">
                        Our website is still and always under development. If you find a bug please do raise a issue <a className="underline" href="/#">here</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              </div>
              <img className="mx-auto mt-10 md:px-20 lg:px-60" src="/aboutus.svg" alt="About Us"/>
          </section>
      <Footer />
    </>
  );
};

export default about;
