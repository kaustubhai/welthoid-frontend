import React from "react";
import Navbar from "../components/Dashboard_Navbar";
import Link from 'next/link'
import Head from 'next/head'
const Help = () => {
  return (
    <>
      <Navbar page="help" />
            <Head>
                  <title>Help Welthoid</title>
            </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-xl title-font font-semibold mb-2">
                Real Trading Amount
              </h2>
              <p className="leading-relaxed text-lg">
                              Watch and trade on the realtime stock price of any stock at any moment
                                             as we fetch our data from a globally trusted API
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-xl title-font font-semibold mb-2">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-lg">
                Welthoid helps you to get on your ace before you even start investing and trading with real money in the real market
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="sm:w-16 sm:h-16 w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-xl title-font font-semibold mb-2">
                Open to all
              </h2>
              <p className="leading-relaxed text-lg">
                Anyone can join Welthoid with any number of account to trade and learn. You can also use another account if you lose all your Mose bucks
              </p>
            </div>
                  </div>
            <Link href="/dashboard">
                <button className="flex mx-auto mt-20 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-xl">
                    Go to dashboard
                </button>
          </Link>
        </div>
      </section>

      <section className="max-w-screen-xl flex justify-center flex-col mx-auto p-8">
        <h2 className="text-3xl font-body text-center font-extrabold leading-9 border-gray-100 text-gray-900 mb-12">
          FAQs
        </h2>
        <ul className="grid items-center grid-cols-3 gap-8">
          <li>
            <p className="text-xl font-semibold leading-6 text-gray-900">
              What is Mose-Bucks?
            </p>
            <p className="mt-2">
              <p className="text-lg leading-6 text-gray-500">
                You can only earn or lose mose buck via Welthoid platform. It
                has no value outside this website and in our website, 1 Mose
                buck = 1 Indian Rupee. You can only use it for mock trading in
                our website and nowhere else
              </p>
            </p>
          </li>
          <li>
            <p className="text-xl font-semibold leading-6 text-gray-900">
              Am I elegible to trade on Welthoid?
            </p>
            <p className="mt-2">
              <p className="text-lg leading-6 text-gray-500">
                Anyone is elegible to trade on Welthoid. This is just a training
                trading platform which uses fake money and real time data to
                mock trading experience in real time. It is specially designed
                for beginners to learn and experience trading
              </p>
            </p>
          </li>
          <li>
            <p className="text-xl font-semibold leading-6 text-gray-900">
              Do I need a Demat account?
            </p>
            <p className="mt-2">
              <p className="text-lg leading-6 text-gray-500">
                Welthoid actually is a mock Demat account for you so No, you
                dont need a real demat account to learn trading on Welthoid. You
                though need one if you are planning to invest in the real market
                with real money on a real broker website
              </p>
            </p>
          </li>
          <li>
            <p className="text-xl font-semibold leading-6 text-gray-900">
              What if I lose all Mose Bucks?
            </p>
            <p className="mt-2">
              <p className="text-lg leading-6 text-gray-500">
                We currently have no work around for this situation right now.
                You can otherwise use a different account with Welthoid and use
                other 10000 Mose Bucks.
              </p>
            </p>
          </li>
          <li>
            <p className="text-xl font-semibold leading-6 text-gray-900">
              Does Welthoid track my activities?
            </p>
            <p className="mt-2">
              <p className="text-lg leading-6 text-gray-500">
                Welthoid does not track any activity right now. ALthough we in
                future have plans to embed machine learning along with Welthoid
                to track user interests in shares and suggest them shares
                accordingly
              </p>
            </p>
          </li>
          <li>
            <p className="text-xl font-semibold leading-6 text-gray-900">
              Do I need any real money?
            </p>
            <p className="mt-2">
              <p className="text-lg leading-6 text-gray-500">
                Not at all. You dont need to pay a single money to do anything
                on Welthoid. Welthoid is completely free and will always remain
                free for all the beginners to learn.
              </p>
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Help;
