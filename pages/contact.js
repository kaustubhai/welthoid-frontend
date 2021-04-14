import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar page="contact" />
      <h2 className="font-body text-center text-4xl mt-10 font-bold">
              Contact Welthoid
      </h2>
          
<div className="w-full flex justify-center mb-20">
    <form className="flex w-full max-w-sm justify-center space-x-3">
        <div className="w-full max-w-2xl mx-auto px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                Contact us !
            </div>
            <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                <div className="col-span-2 lg:col-span-1">
                    <div className=" relative ">
                        <input type="text" id="contact-form-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <div className=" relative ">
                            <input type="text" id="contact-form-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email"/>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label className="text-gray-700" htmlFor="name">
                                <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                                </textarea>
                            </label>
                        </div>
                        <div className="col-span-2 text-right">
                            <button type="submit" className="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
              </form>
              </div>


      <section className="my-5 bg-gray-200">
        <div className="flex items-center justify-center px-5 py-5">
          <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
            <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
              <a href="#" className="block relative">
                <img
                  alt="profil"
                  src="/user.jpg"
                  className="mx-auto object-cover rounded-full h-20 w-20 "
                />
              </a>
            </div>
            <div className="w-full mb-10">
              <div className="text-3xl text-red-500 text-left leading-tight h-3">
                “
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                I really wish that Welthoid should have been in existence when I
                was learning to start my investments. It is a great platform htmlFor
                beginners
              </p>
              <div className="text-3xl text-red-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
            <div className="w-full">
              <p className="text-md text-red-500 font-bold text-center">
                Tom Hardy
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-300 text-center">
                @thom.hardy
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 md:px-16">
        <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold font-body text-black dark:text-white sm:text-4xl">
            <span className="block">Want to be millionaire ?</span>
            <span className="block text-red-500 font-body">
              It&#x27;s today or never.
            </span>
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0 mt-5">
            <div className=" inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-4 px-6  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Share with friend
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
