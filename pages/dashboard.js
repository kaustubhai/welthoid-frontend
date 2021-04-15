import React from 'react'
import Navbar from '../components/Dashboard_Navbar'
import Link from 'next/link'
import Head from 'next/head'

const Dashboard = () => {
    return (
        <>
            <Navbar page="dashboard"/>
            <Head>
                  <title>Welthoid- Dashboard</title>
            </Head>
            <section id="header" className="w-full flex justify-center text-center lg:text-left lg:justify-between items-center flex-col lg:flex-row p-8 lg:p-28">
                <div>
                    <h2 className="font-body font-semibold text-3xl lg:text-7xl max-w-2xl">
                        Congratulations on taking one step closer
                    </h2>
                    <p className="text-lg lg:text-2xl max-w-lg mt-5 mb-10">
                        You can now trade, track, earn or lose your mose buck succesfully
                    </p>
                    <Link href="/help">
                        <a className="bg-red-600 hover:bg-red-700 transition duration-200 text-base lg:text-lg text-white font-semibold rounded-lg px-5 py-2">How to Start</a>
                    </Link>
                </div>
                <img src="/svg/dashboard.svg" className="max-w-4xl mt-5 lg:mt-0" alt=""/>
            </section>
        </>
    )
}

export default Dashboard
