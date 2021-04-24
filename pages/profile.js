import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import Footer from '../components/Dashboard_Footer'
import Navbar from '../components/Dashboard_Navbar'
import cookie from 'js-cookie'
const Profile = () => {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [email, setEmail] = useState("")

    const user = useSelector(state => state.user)

    const getData = () => {
        let data;
        data = cookie.get('name')
        setName(data)
        data = cookie.get('email')
        setEmail(data)
        data = cookie.get('image')
        setImage(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Navbar />
            <Head>
                <title>Welthoid - {name ? name : "User"}</title>
            </Head>

            <section className="flex justify-center items-center w-full my-10 py-5">
                    <div className="mx-5 rounded-full shadow-inner" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '55px', width: '55px'}}></div>
                    <div className="flex flex-col mx-5 items-center">
                        <h1 className="text-2xl m-2 font-semibold font-body">{name}</h1>
                        <h2 className="text-lg font-body">{email}</h2>
                    </div>
                </section>
                
                <section className="bg-gray-100 dark:bg-gray-800lg:px-16">
                <div className="w-full flex flex-col text-center lg:text-left lg:flex-row items-center justify-center lg:justify-around  mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">You currently have</span>
                    <span className="block text-red-500">${user.coin.toFixed(0)} Mose Bucks</span>
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
                                {user.coin === 10000 ? "Want to be millionaire ?" : "You are already a step ahead"}
                            </span>
                            <span className="block font-bold font-body mt-2 text-red-500">
                                Track stocks and Trade now
                            </span>
                        </h2>
                        <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-400">
                            {user.coin === 10000 ? "You need to start right now, all your peers are already have taken this initial step ahead of you ?" : "Great that you are a step ahead but you need to keep the pace up, The workds stop for no one and so should you"}
                        </p>
                    </div>
                </section>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                        <div className="flex mx-auto flex-wrap mb-20">
                            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>STEP 1
                            </a>
                            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>STEP 2
                            </a>
                            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <circle cx="12" cy="5" r="3"></circle>
                                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>STEP 3
                            </a>
                            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                                </svg>STEP 4
                            </a>
                        </div>
                        <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                        <div className="flex flex-col text-center w-full">
                        <h1 className="text-xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                        </div>
                    </div>
                    </section>
                
                <Footer/>
        </>
    )
}

export default Profile
