import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'
import Navbar from '../../../components/Dashboard_Navbar'
import { SpinnerInfinity } from "spinners-react";
import { useRouter } from 'next/router';
// import stock from '../../../components/quote'

const index = () => {
    const router = useRouter();
    const { id } = router.query;
    const [stock, setStock] = useState({})
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        if(id){
            const res = await axios.get(`https://cloud.iexapis.com/stable/stock/${id}/quote?token=${process.env.NEXT_PUBLIC_STOCK_API_KEY}`)
            setStock(res.data)
            console.log(res.data);
            setLoading(false)
        }
    }
    
    useEffect(() => {
        getData()
        console.log(stock);
        setLoading(true)
    }, [id])
    return (
        <>
         <Navbar/>
          <Head>
              <title>{`Welthoid - See ${id || 'stock'}`}</title>
            </Head>
            {
                loading || !stock ? (
                    <SpinnerInfinity
            className="mx-auto my-40"
            size={65}
            thickness={107}
            speed={173}
            color="rgba(172, 57, 57, 1)"
            secondaryColor="rgba(172, 57, 59, 0.33)"
          />
                ) : (
                        <>
                        <section className="lg:px-40 px-16 flex lg:flex-row flex-col my-10 lg:my-20 justify-between items-center">
                <div className="">
                    <h1 className="text-4xl text-red-500 font-bold font-body">
                        {stock.symbol}
                    </h1>
                    <h2 className="text-2xl">
                        {stock.companyName}
                    </h2>
                </div>
                <div className="">
                    <h1 className={`font-bold text-7xl text-right mt-10 lg:mt-0 ${stock.change > 0 ? "text-green-500" : "text-red-500"}`}>
                        {stock.latestPrice}
                    </h1>
                    <h2 className={`text-2xl text-center ${stock.change > 0 ? "text-green-500" : "text-red-500"}`}>
                     {stock.change > 0 ? `+${stock.change}%` : `-${stock.change}%`}
                    </h2>
                </div>
            </section>
            <section className="lg:px-40 px-16 flex flex-col justify-center items-center">
                <h1 className="font-body font-semibold my-10 text-2xl">
                    Key Statistics
                    </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
                    <div className="row flex justify-between shadow px-16 py-8 w-full items-center">
                        <span className="font-bold text-red-500 text-xl">
                            Open:
                        </span>
                        <span className="text-xl">
                            {stock.iexOpen}
                        </span>
                    </div>
                    <div className="row flex justify-between shadow px-16 py-8 items-center">
                        <span className="font-bold text-red-500 text-xl">
                            Close:
                        </span>
                        <span className="text-xl">
                            {stock.iexClose}
                        </span>
                    </div>
                    <div className="row flex justify-between shadow px-16 py-8 items-center">
                        <span className="font-bold text-red-500 text-xl">
                            Volume:
                        </span>
                        <span className=" text-xl">
                            {stock.volume || "---"}
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5">
                    <div className="row flex justify-between shadow px-16 py-8 w-full items-center">
                        <span className="font-bold text-red-500 text-xl">
                            52 Week High:
                        </span>
                        <span className="text-xl">
                            {stock.week52High}
                        </span>
                    </div>
                    <div className="row flex justify-between shadow px-16 py-8 items-center">
                        <span className="font-bold text-red-500 text-xl">
                            52 Week Low:
                        </span>
                        <span className="text-xl">
                            {stock.week52Low}
                        </span>
                    </div>
                    <div className="row flex justify-between shadow px-16 py-8 items-center">
                        <span className="font-bold text-red-500 text-xl">
                            Market Cap:
                        </span>
                        <span className=" text-xl">
                            {stock.marketCap}
                        </span>
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center justify-center mx-5 my-10 lg:flex-row">
                <button className="bg-green-600 hover:bg-green-700 transition duration-200 text-base lg:text-lg text-white font-semibold rounded-lg px-8 py-4">
                    Buy {stock.symbol}
                </button>
            </section>
                        </>
                )
            }
        </>
    )
}

export default index
