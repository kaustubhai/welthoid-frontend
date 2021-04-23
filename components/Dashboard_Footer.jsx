import React from "react";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineMedium,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          <li className="my-2">
            <Link href="/dashboard">
              <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Dashboard
              </a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/profile">
              <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Profile
              </a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/trade">
              <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Search Stocks
              </a>
            </Link>
          </li>
          <li className="my-2">
            <Link href="/global-news">
              <a className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                Global News
              </a>
            </Link>
          </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <Link href="https://instagram.com/kaustubhai">
            <a className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <AiFillInstagram className="text-2xl" />
            </a>
          </Link>
          <Link href="https://github.com/kaustubhai">
            <a className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <AiFillGithub className="text-2xl" />
            </a>
          </Link>
          <Link href="https://linkedin.com/in/kaustubhai">
            <a className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <AiFillLinkedin className="text-2xl" />
            </a>
          </Link>
          <Link href="https://kaustubhai.medium.com/">
            <a className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
              <AiOutlineMedium className="text-2xl" />
            </a>
          </Link>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
          Created by <a href="https://kaustubhai.me"> @Kaustubhai</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
