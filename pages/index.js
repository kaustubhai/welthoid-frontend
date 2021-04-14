import Head from "next/head";
import Navbar from "../components/Navbar";
import { IoIosHand, IoIosTimer, IoIosEye } from 'react-icons/io'
import { GiReceiveMoney } from 'react-icons/gi'
import { FaPaintBrush, FaTable } from 'react-icons/fa'
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar page="home" />
      <div className="flex justify-center items-center flex-col">
        <Head>
          <title>Welthoid- Create wealth virtually</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section
          id="header"
          className="flex flex-col-reverse lg:flex-row w-full max-w-8xl items-center justify-between lg:px-8"
        >
        <div className="text w-full lg:block flex flex-col items-center justify-center lg:w-5/12">
          <h3 className="md:text-5xl lg:text-7xl font-semibold text-3xl font-body text-center lg:text-left lg:ml-20 ">
            Practice to start investing money here
          </h3>
          <p className=" text-center lg:text-left lg:ml-20 my-5 lg:mt-10 lg:mt-3 text-xl w-3/4">
            Gets your hand dirty with real stock market but fake money, called the "Mose-Buck".
          </p>
          <button
            type="button"
            className="py-2 px-4 rounded-lg lg:ml-20 my-10 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white text-center  lg:w-full w-40 max-w-sm lg:max-w-md transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Start Now
          </button>
        </div>
          <img src="/svg/header.svg" className="image w-full lg:w-7/12 my-8 lg:my-20 lg:ml-20" />
        </section>

        <h2 className="mb-10 text-4xl text-center font-body font-bold">Our Features</h2>

        <section
          id="features"
          className="sm:flex flex-wrap justify-center items-center text-center gap-8"
        >
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                <IoIosHand className="text-2xl"/>
              </div>
            </div>
            <h3 className="text-2xl font-body sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
              Tips and Tricks
            </h3>
            <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
              You can learn starting investing from great mentors from all of the world and get your hands dirty with real time stock prices
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                <GiReceiveMoney className="text-2xl"/>
              </div>
            </div>
            <h3 className="text-2xl font-body sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
              Mose Bucks
            </h3>
            <p className="text-md text-gray-500 dark:text-gray-300 py-4">
              At the time of login, you get 10000 Mose bucks to start your investing. You can earn more or loose only by investing in market
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                <IoIosTimer className="text-2xl"/>
              </div>
            </div>
            <h3 className="text-2xl font-body sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
              Real time data
            </h3>
            <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
              We fetch real time data from world class APIs so that you can get training like real time trading and get pro of it
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                <FaPaintBrush className="text-2xl"/>
              </div>
            </div>
            <h3 className="text-2xl font-body sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
              Integrated UI
            </h3>
            <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
              We have designed interactive UI for every thing you need so that you dont get lost as a beginner in this huge market
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                <FaTable className="text-2xl"/>
              </div>
            </div>
            <h3 className="text-2xl font-body sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
              Check Records
            </h3>
            <p className="text-md text-gray-500 dark:text-gray-300 py-4">
              You can check all the losses or gains you made while mock trading with us in your dashboard with all the statistics
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-red-600 text-white">
                <IoIosEye className="text-2xl"/>
              </div>
            </div>
            <h3 className="text-2xl font-body sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
              Spot Movers
            </h3>
            <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
              Get list of stocks on the spotlight because of their high movement all at one place so that you dont need to hand-pick stocks
            </p>
          </div>
        </section>

        
          <section id="action" class="bg-white dark:bg-gray-800 my-10">
            <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span class="block font-body">
                        Want to be millionaire ?
                    </span>
                    <span class="block text-red-600 font-body">
                        Start investing now.
                    </span>
                </h2>
                <div class="lg:mt-0 lg:flex-shrink-0">
                    <div class="mt-12 inline-flex rounded-md shadow">
                        <button type="button" class="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Get started
                        </button>
                    </div>
                </div>
            </div>
          </section>
      </div>
      <Footer/>
    </>
  );
}
