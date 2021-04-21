import React, { useEffect, useState } from 'react'
import Navbar from '../components/Dashboard_Navbar';
import axios from 'axios'
const Trades = () => {

    const getTrades = async () => {
    }

    useEffect(() => {
        getTrades()
    }, [])
    return (
        <>
         <Navbar/>   
        </>
    )
}

export default Trades
