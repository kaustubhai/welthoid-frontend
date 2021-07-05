import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub, AiOutlineMedium } from "react-icons/ai";
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
              src="persons/kaustubhai.jpg"
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
          <p className=" text-center mx-auto text-gray-500 dark:text-gray-400 max-w-xs py-4 text-xl font-light">
            Kaustubh Mishra, from lucknow is 21 years old. He codes, develops,
            design and write blogs. Trained SEO Expert
          </p>
        </div>
        <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">
          <a href="https://instagram.com/kaustubhai" target="_blank">
            <AiFillInstagram className="text-4xl" />
          </a>
          <a href="https://github.com/in/kaustubhai" target="_blank">
            <AiFillGithub className="text-4xl" />
          </a>
          <a href="https://linkedin.com/in/kaustubhai" target="_blank">
            <AiFillLinkedin className="text-4xl" />
          </a>
          <a href="https://kaustubhai.medium.com/" target="_blank">
            <AiOutlineMedium className="text-4xl" />
          </a>
        </div>
      </section>

      <section className="lg:flex flex-col bg-gray-100 justify-center-items-center lg:px-16 pb-10 w-100">
        <h3 className="text-3xl font-bold font-body text-center my-10 pt-10 lg:pt-0">Other Projects</h3>
        <div className="lg:flex justify-around items-center">
        <div className="overflow-hidden mx-auto my-5 shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
          <a href="https://bassblogs.netlify.app/" className="w-full block h-full">
            <img
              alt="blog photo"
              src="/projects/Bass-Blogs.webp"
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-white dark:bg-gray-800 w-full p-4">
              <p className="text-red-400  font-medium">Full Stack</p>
              <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                Bass Blogs
              </p>
              <p className="text-gray-400 dark:text-gray-300 font-light ">
                A non-conventional full-fledged blogging website for the pro blogger. Developed with MERN Stack
              </p>
            </div>
          </a>
        </div>
        <div className="overflow-hidden mx-auto my-5 shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
          <a href="https://news-de-voice.netlify.app/" className="w-full block h-full">
            <img
              alt="blog photo"
              src="/projects/News-De-Voice.webp"
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-white dark:bg-gray-800 w-full p-4">
              <p className="text-red-400  font-medium">AI Frontend</p>
              <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                News-De-Voice
              </p>
              <p className="text-gray-400 dark:text-gray-300 font-light ">
                AI empowered voice recoginition bot paired with news API to fetch
                news from your voice command
              </p>
            </div>
          </a>
        </div>
        <div className="overflow-hidden mx-auto my-5 shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
          <a href="https://vovoca.vercel.app/" className="w-full block h-full">
            <img
              alt="blog photo"
              src="/projects/vovoca.webp"
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-white dark:bg-gray-800 w-full p-4">
              <p className="text-red-400  font-medium">Full Stack</p>
              <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                Vovoca App
              </p>
              <p className="text-gray-400 dark:text-gray-300 font-light ">
                Full stack, open to the world website developed in MERN stack. Collection
                of my created royalty free music
              </p>
            </div>
          </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Developer;
