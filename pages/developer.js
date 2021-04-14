import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import Head from "next/head";

const Developer = () => {
  return (
    <>
      <Navbar page="developer" />
        <Head>
            <title>Welthoid- Kaustubh Mishra</title>  
        </Head>
      <section className="my-10 p-4">
        <div className="text-center mb-4 opacity-90">
          <a href="#" className="block relative">
            <img
              alt="profil"
              src="/kaustubhai.jpg"
              className="mx-auto object-cover rounded-full h-40 w-40 "
            />
          </a>
        </div>
        <div className="text-center">
          <p className="text-2xl font-body text-gray-800 dark:text-white">
            Kaustubh Mishra
          </p>
          <p className="text-xl text-gray-500 font-body dark:text-gray-200 font-light">
            MERN Developer
          </p>
          <p className="text-md text-center mx-auto text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
            Kaustubh Mishra, from lucknow is 21 years old. He codes, develops, design and  write blogs. Trained SEO Expert 
          </p>
        </div>
        <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
                  <a href="https://instagram.com/kaustubhai" target="_blank">
                      <AiFillInstagram className="text-4xl"/>
          </a>
                  <a href="https://github.com/in/kaustubhai" target="_blank">
                      <AiFillGithub className="text-4xl"/>
          </a>
                  <a href="https://linkedin.com/in/kaustubhai" target="_blank">
                      <AiFillLinkedin className="text-4xl"/>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Developer;
