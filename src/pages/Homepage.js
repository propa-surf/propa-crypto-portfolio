import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../stylesheets/Homepage.css'
import TopTenCoins from '../components/TopTenCoins'
import TrendCoins from '../components/TrendCoins'

function Homepage({baseUrl}) {

    const[topCoins, setTopCoins]=useState([])
    const[trendCoins, setTrendCoins]=useState([])
    const[currentDisplay, setCurrentDisplay]=useState([])
    const[btcPrice, setBtcPrice]=useState(0)

    useEffect(()=>{
        axios.get(`${baseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
        .then(res=>{
            setTopCoins(res.data)
            setCurrentDisplay(res.data)
        })
        .catch(err=>console.log(err))
    }, [])

    useEffect(()=>{
        axios.get(`${baseUrl}/search/trending`)
        .then(res=>{
            setTrendCoins(res.data.coins)
        })
        .catch(err=>console.log(err))
    }, [])

    useEffect(()=>{
        axios.get(`${baseUrl}/simple/price?ids=bitcoin&vs_currencies=usd`)
        .then(res=>{
            setBtcPrice(res.data.bitcoin.usd)
        })
        .catch(err=>console.log(err))
    }, [])

    const handleListSwitch=()=>{
        currentDisplay === topCoins
        ? setCurrentDisplay(trendCoins)
        : setCurrentDisplay(topCoins)
    }

  return (
    <div className='homepage-container'>
        <div className='homepage-background'>
            <div className='overlay'></div>
            <div className='homepage-slider-container'>
                <div className='homepage-slider-header'>
                    <h3 className='homepage-coin-list-header'>{currentDisplay === topCoins ? 'Top 10 Coins' : 'Top 7 Trending Coins'}</h3>
                    <button onClick={handleListSwitch} className='homepage-slider-btn'>{currentDisplay === trendCoins ? 'Top 10 Coins' : 'Top 7 Trending Coins'}</button>
                </div>
                {
                    currentDisplay === topCoins
                    ? <TopTenCoins topCoins={topCoins}/>
                    : <TrendCoins trendCoins={trendCoins} btcPrice={btcPrice}/>
                }
            </div>
        </div>
    </div>
  )
}

export default Homepage