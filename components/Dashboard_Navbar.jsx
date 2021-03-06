import React, { useEffect } from "react";
import Link from "next/link";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from 'react-redux'
import { setUser, logoutUser } from '../actions/userActions' 
import { useRouter } from "next/router";
import LoadingOverlay from "react-loading-overlay";
import cookie from "js-cookie";

const Navbar = ({ page }) => {
  const router = useRouter();
  const { loading } = useSelector(state => state.user)

  const responsiveMenu = () => {
    if (process.browser) {
      var menu = document.getElementById("mobile-menu");
      menu.classList.toggle("hidden");
      var menu = document.getElementById("mobile-menu-r");
      menu.classList.toggle("hidden");
    }
  };

  const loadUser = () => {
    if(cookie.get('welthoid-token') !== "undefined"){
      const storedUser = {
        profileObj: {
            name: cookie.get('welthoid-name'),
            email: cookie.get('welthoid-email'),
            imageUrl: cookie.get('welthoid-image'),
        },
        accessToken: cookie.get('welthoid-token'),
        googleId: cookie.get('welthoid-id')
    }
      dispatch(setUser(storedUser))
    }
  }

  useEffect(() => {
    loadUser()
  }, [])

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutUser())
    router.push("/");
  };

  return (
    <LoadingOverlay active={loading} spinner>
      <nav className="flex bg-white flex-wrap items-center justify-between fixed lg:relative z-50 w-full top-0 left-0 px-8 shadow py-3">
        <div className="md:order-2 w-auto md:w-1/5 md:text-center">
          <Link href="/dashboard">
            <a className="text-xl text-gray-800 font-semibold font-body">
              Welthoid
            </a>
          </Link>
        </div>
        <div className="block md:hidden">
          <button
            onClick={() => responsiveMenu()}
            className="navbar-burger flex items-center py-2 px-3 text-gray-700 rounded border border-gray-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <div
          id="mobile-menu"
          className="navbar-menu hidden md:order-1 md:block w-full md:w-2/5"
        >
          <Link href="/dashboard">
            <a className={`block md:inline-block mt-4 md:mt-0 mr-10 ${page==="dashboard" ? "text-gray-800" : "text-gray-500"} hover:text-gray-800`}>
              Dashboard
            </a>
          </Link>
          <Link href="/profile">
            <a className={`block md:inline-block mt-4 md:mt-0 mr-10 ${page==="profile" ? "text-gray-800" : "text-gray-500"} hover:text-gray-800`}>
              Profile
            </a>
          </Link>
          <Link href="/trade">
            <a className={`block md:inline-block mt-4 md:mt-0 ${page==="trades" ? "text-gray-800" : "text-gray-500"} hover:text-gray-800`}>
              Trades
            </a>
          </Link>
        </div>
        <div
          id="mobile-menu-r"
          className="navbar-menu hidden md:order-3 md:block w-full md:w-2/5 md:text-right"
        >
          <Link href="/global-news">
            <a className={`block md:inline-block mt-4 md:mt-0 mr-10 ${page==="news" ? "text-gray-800" : "text-gray-500"} hover:text-gray-800`}>
              Global News
            </a>
          </Link>
          <Link href="/help">
            <a className={`block md:inline-block mt-4 md:mt-0 mr-10 ${page==="help" ? "text-gray-800" : "text-gray-500"} hover:text-gray-800`}>
              See Help
            </a>
          </Link>
          <GoogleLogout
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
            render={(renderProps) => (
              <a
                onClick={renderProps.onClick}
                className="block md:inline-block mt-4 md:mt-0 cursor-pointer text-white bg-red-600 font-semibold rounded-lg px-5 py-2 animation  duration-200 focus:ring-red-500 focus:ring-offset-red-200 hover:bg-red-700"
              >
                Logout
              </a>
            )}
            onLogoutSuccess={logout}
          ></GoogleLogout>
        </div>
      </nav>
    </LoadingOverlay>
  );
};

export default Navbar;
