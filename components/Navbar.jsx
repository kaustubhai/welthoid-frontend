import React, { useState, useEffect } from "react";
import Link from 'next/link'
import GoogleLogin from 'react-google-login';
import cookie from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'next/router'
import LoadingOverlay from 'react-loading-overlay';
import setAuthToken from "../utils/setAuthToken";

const Navbar = () => {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(false)
  }, [])

  const router = useRouter()

  const responsiveMenu = (e) => {
    if (process.browser) {
      var menu = document.getElementById("mobile-menu");
      menu.classList.toggle("hidden");
    }
  }

  const responseGoogle = async response => {
    setLoading(true)
    cookie.set('name', response.profileObj.name)
    cookie.set('email', response.profileObj.email)
    cookie.set('image', response.profileObj.image)
    cookie.set('token', response.accessToken)
    cookie.set('id', response.googleId)
    setAuthToken(response.googleId)
    await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/register`)
    router.push('/dashboard')
  }

  const loginError = (response) => {
    console.log({
      loginError: response
    })
  }

  return (
    <LoadingOverlay active={loading} spinner>
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-8xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className=" flex items-center w-full">
              <Link href="/">
                <a className="flex-shrink-0">
                  <img className="h-8 w-8" src="/svg/logo.svg" alt="Logo" />
                </a>
              </Link>
              <div className="hidden md:block w-full">
                <div className="ml-10 flex items-center justify-between w-full space-x-4">
                  <div>
                  <Link href="/">
                    <a
                      className={`text-gray-500  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md font-medium`}
                    >
                        Home
                    </a>
                  </Link>
                  <Link href="/about">
                    <a
                      className={`text-gray-500 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md font-medium`}
                    >
                        About
                    </a>
                  </Link>
                  <Link href="contact">
                    <a
                      className={`text-gray-500  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md font-medium`}
                    >
                        Contact
                    </a>
                  </Link>
                  <Link href="/developer">
                    <a
                      className={`text-gray-500  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md font-medium`}
                    >
                        Developer
                    </a>
                  </Link>
                  </div>
                  <GoogleLogin
                    clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
                    render={renderProps => (
                      <a className="ml-auto text-right"
                        onClick={() => {
                          renderProps.onClick()
                        }}
                      >
                        <button
                          type="button"
                          className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          <svg
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="mr-2"
                            viewBox="0 0 1792 1792"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                          </svg>
                          Sign in with Google
                        </button>
                      </a>
                    )}
                    isSignedIn={true}
                    onSuccess={responseGoogle}
                    onFailure={loginError}
                  />
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => responsiveMenu()}
                className={`text-gray-800 dark:text-white hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div id="mobile-menu" className="hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <a
                className={`text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className={`text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium`}
              >
                  About
              </a>
            </Link>
            <Link href="/contact">
            <a
              className={`text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
            >
                Contact
            </a>
              </Link>
              <Link href="/developer">
            <a
              className={`text-gray-500 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
            >
                Developer
            </a>
            </Link>
            <GoogleLogin
                    clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
                    render={renderProps => (
                      <a className="ml-auto text-right">
                      <button
                        type="button"
                        className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base mt-5 md:mt-0 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="mr-2"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                        </svg>
                        Sign in with Google
                      </button>
                    </a>
                    )}
                    isSignedIn={true}
                    onSuccess={responseGoogle}
                    onFailure={loginError}
                  />
          </div>
        </div>
      </nav>
    </LoadingOverlay>
  );
};

export default Navbar;
