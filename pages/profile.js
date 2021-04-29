import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { getPast, getCurrent } from '../actions/userActions'
import Footer from "../components/Dashboard_Footer";
import Navbar from "../components/Dashboard_Navbar";
import cookie from "js-cookie";
import ProfileData from "../components/ProfileData";
const Profile = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [section, setSection] = useState("current");
  const [past, setPast] = useState([]);
  const [current, setCurrent] = useState([]);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const getData = () => {
    let data;
    data = cookie.get("welthoid-name");
    setName(data);
    data = cookie.get("welthoid-email");
    setEmail(data);
    data = cookie.get("welthoid-image");
    setImage(data);
  };

  useEffect(() => {
    getData();
		dispatch(getCurrent())
		dispatch(getPast())
  }, []);

	const pastUser = useSelector(state => state.user.past)
	const currentUser = useSelector(state => state.user.current)

	const getTable = () => {
		setPast(pastUser)
		setCurrent(currentUser)
	}

	useEffect(() => {
		getTable()
	}, [pastUser, currentUser])

  return (
    <>
      <Navbar />
      <Head>
        <title>Welthoid - {name ? name : "User"}</title>
      </Head>

      <section className="flex justify-center items-center w-full my-10 py-5">
        <div
          className="mx-5 rounded-full shadow-inner"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "55px",
            width: "55px",
          }}
        ></div>
        <div className="flex flex-col mx-5 items-center">
          <h1 className="text-2xl m-2 font-semibold font-body">{name}</h1>
          <h2 className="text-lg font-body">{email}</h2>
        </div>
      </section>

      <section className="text-gray-600 pb-24 body-font">
        <div className="container px-5 mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap mb-20">
            <a
              onClick={() => setSection("current")}
              className={`sm:px-6 py-3 cursor-pointer w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center tracking-wider leading-none ${
                section === "current"
                  ? "bg-gray-100 border-indigo-500 text-indigo-500 rounded-t text-gray-900"
                  : "border-gray-200 hover:text-gray-900"
              }`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
              YOUR POSITIONS
            </a>
            <a
              onClick={() => setSection("past")}
              className={`sm:px-6 py-3 w-1/2 sm:w-auto cursor-pointer justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center tracking-wider leading-none ${
                section === "past"
                  ? "bg-gray-100 border-indigo-500 text-indigo-500 rounded-t text-gray-900"
                  : "border-gray-200 hover:text-gray-900"
              }`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
              PAST TRADES
            </a>
          </div>
          
					<section className="mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="flex justify-center flex-col">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 pb-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Stock Symbol
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Total Position
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Total Exchange
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Checkout
                    </th>
                  </tr>
                </thead>
                <tbody>
									{
											section === "current" && current?.map((trade) => (
												<ProfileData
													symbol={trade.stockName}
													buy={trade.buy}
												/>
											))
									}
									{
											section === "past" && past?.map((trade) => (
												<ProfileData
													symbol={trade.stockName}
													buy={trade.sell}
												/>
											))
									}
                  {
                    section === "current" && !current && (<tr><td><p className="text-red-500 text-center py-5 w-full mx-auto font-body font-bold">-- --</p></td><td><p className="text-red-500 text-center py-5 w-full mx-auto font-body font-bold">-- --</p></td><td><p className="text-red-500 text-center py-5 w-full mx-auto font-body font-bold">-- --</p></td><td><p className="text-red-500 text-center py-5 w-full mx-auto font-body font-bold">-- --</p></td></tr>)
                  }
                  {
                    section === "past" && !past && (<tr><td><p className="text-red-500 text-center py-5 w-full mx-auto font-body font-bold">-- --</p></td><td><p className="text-red-500 text-center py-5 w-full mx-auto font-body font-bold">-- --</p></td><td><p className="text-red-500 text-center py-5 w-full mx-auto font-body font-bold">-- --</p></td><td><p className="text-red-500 text-center py-5 w-full mx-auto font-body font-bold">-- --</p></td></tr>)
                  }
                </tbody>
              </table>
            </div>
          </div>
					</div>
					</section>

        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800lg:px-16">
        <div className="w-full flex flex-col text-center lg:text-left lg:flex-row items-center justify-center lg:justify-around  mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">You currently have</span>
            <span className="block text-red-500">
              ${user.coin.toFixed(0)} Mose Bucks
            </span>
          </h2>
          <div className="lg:mt-0 mt-10 lg:flex-shrink-0">
            <div className=" inline-flex rounded-md shadow">
              <Link href="/trade">
                <a className="py-4 px-6  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Trade Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 ">
        <div className="text-center w-full mx-auto my-8 py-10 lg:pb-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block font-body">
              {user.coin === 10000
                ? "Want to be millionaire ?"
                : "You are already a step ahead"}
            </span>
            <span className="block font-bold font-body mt-2 text-red-500">
              Track stocks and Trade now
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-400">
            {user.coin === 10000
              ? "You need to start right now, all your peers are already have taken this initial step ahead of you ?"
              : "Great that you are a step ahead but you need to keep the pace up, The workds stop for no one and so should you"}
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Profile;
