import React from "react";
import Link from 'next/link'
import { GoogleLogout } from 'react-google-login';
import cookie from 'js-cookie'
import { useRouter } from 'next/router'

const Navbar = () => {
    
    const router = useRouter()

    const responsiveMenu = (e) => {
        if (process.browser) {
          var menu = document.getElementById("mobile-menu");
          menu.classList.toggle("hidden");
          var menu = document.getElementById("mobile-menu-r");
          menu.classList.toggle("hidden");
        }
  };
  
  const logout = () => {
    cookie.remove('name');
    cookie.remove('email');
    cookie.remove('image');
    cookie.remove('token');
    cookie.remove('id');
    router.push('/')
  }

  return (
    <nav className="flex bg-white flex-wrap items-center justify-between px-8 shadow py-3">
      <div className="md:order-2 w-auto md:w-1/5 md:text-center">
        <Link href="/dashboard">
        <a className="text-xl text-gray-800 font-semibold font-body">
          Welthoid
        </a>
        </Link>
      </div>
      <div className="block md:hidden">
        <button onClick={() => responsiveMenu()} className="navbar-burger flex items-center py-2 px-3 text-gray-700 rounded border border-gray-700">
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
      <div id="mobile-menu" className="navbar-menu hidden md:order-1 md:block w-full md:w-2/5">
        <Link href="/dashboard">
        <a
          className="block md:inline-block mt-4 md:mt-0 mr-10 text-gray-500 hover:text-gray-800"
        >
          Dashboard
        </a>
        </Link>
        <Link href="#">
        <a
          className="block md:inline-block mt-4 md:mt-0 mr-10 text-gray-500 hover:text-gray-800"
        >
          Profile
        </a>
        </Link>
        <Link href="#">
        <a
          className="block md:inline-block mt-4 md:mt-0 text-gray-500 hover:text-gray-800"
        >
          Trades
        </a>
        </Link>
      </div>
      <div id="mobile-menu-r" className="navbar-menu hidden md:order-3 md:block w-full md:w-2/5 md:text-right">
        <Link href="/global-news">
        <a
          className="block md:inline-block mt-4 md:mt-0 mr-10 text-gray-500 hover:text-gray-800"
        >
          Global News
        </a>
        </Link>
        <Link href="/help">
        <a
          className="block md:inline-block mt-4 md:mt-0 mr-10 text-gray-500 hover:text-gray-800"
        >
          See Help
        </a>
        </Link>
        <GoogleLogout
          clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
          render={renderProps => (
            <a onClick={renderProps.onClick} className="block md:inline-block mt-4 md:mt-0 cursor-pointer text-white bg-red-600 font-semibold rounded-lg px-5 py-2 animation  duration-200 focus:ring-red-500 focus:ring-offset-red-200 hover:bg-red-700">
              Logout
            </a>
          )}
          onLogoutSuccess={logout}
        >
        </GoogleLogout>
      </div>
    </nav>
  );
};

export default Navbar;
