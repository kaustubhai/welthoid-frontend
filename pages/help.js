import React from "react";
import Navbar from "../components/Dashboard_Navbar";
import { FiUser, FiFilter } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RiDashboard2Line } from "react-icons/ri";
import Head from "next/head";
import Footer from "../components/Dashboard_Footer";
import withAuth from "../components/authentication";
const Help = () => {
  return (
    <>
      <Navbar page="help" />
      <Head>
        <title>Help Welthoid</title>
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-24 pb-8 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                  <FiUser className="text-xl"/>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 1
                  </h2>
                  <p className="leading-relaxed">
                    Login with your google account to get 10000 Mose Bucks to start trading
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                <ImNewspaper className="text-xl"/>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 2
                  </h2>
                  <p className="leading-relaxed">
                    Watch and track global news and track sectors you think can move or act out to some of those news
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                <FiFilter className="text-xl"/>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 3
                  </h2>
                  <p className="leading-relaxed">
                    Go to trades, filter those stocks and see thier current activity. Thier trends and past records
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                <FaRegMoneyBillAlt className="text-xl"/>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    STEP 4
                  </h2>
                  <p className="leading-relaxed">
                    Invest mose buck in the stock you find best which can give you hight time results and wait
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                <RiDashboard2Line className="text-xl"/>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">
                    Track your investment on your dashboard and make more mose buck to practice.
                  </p>
                </div>
              </div>
            </div>
            <img
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              src="/svg/help.svg"
              alt="step"
            />
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl flex justify-center mb-10 flex-col mx-auto p-8">
        <h2 className="text-3xl font-body text-center font-extrabold leading-9 border-gray-100 text-gray-900 mb-12">
          FAQs
        </h2>
        <ul className="grid items-center grid-cols-1 lg:grid-cols-3 gap-8">
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
      <Footer/>
    </>
  );
};

export default withAuth(Help);
