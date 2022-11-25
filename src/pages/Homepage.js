import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../stylesheets/Homepage.css'

function Homepage({baseUrl}) {

    const[topCoins, setTopCoins]=useState([])
    const[trendCoins, setTrendCoins]=useState([])
    const[currentDisplay, setCurrentDisplay]=useState([])

    useEffect(()=>{
        axios.get(`${baseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
        .then(res=>{
            console.log(res.data)
            setTopCoins(res.data)
            setCurrentDisplay(res.data)
        })
        .catch(err=>console.log(err))
    }, [])

    useEffect(()=>{
        axios.get(`${baseUrl}/search/trending`)
        .then(res=>{
            console.log(res.data.coins)
            setTrendCoins(res.data.coins)
        })
        .catch(err=>console.log(err))
    }, [])

    const handleCoinSwitch=()=>{
        console.log('1')
    }

  return (
    <div className='homepage-container'>
        <div className='homepage-background'>
            <div className='overlay'></div>
            <div className='homepage-slider-container'>
                <h3 className='homepage-coin-list-header'>{currentDisplay === topCoins ? 'Top 10 Coins' : 'Top 7 Trending Coins'}</h3>
                <button onClick={handleCoinSwitch}>L</button>
                SPACE
                <button onClick={handleCoinSwitch}>R</button>
            </div>
        </div>
    </div>
  )
}

export default Homepage