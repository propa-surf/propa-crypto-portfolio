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
            setTrendCoins(res.data.coins)
        })
        .catch(err=>console.log(err))
    }, [])

  return (
    <div className='homepage-container'>
        <div className='homepage-background'>
            <div className='overlay'></div>
            <div className='homepage-slider-container'>
                <h3 className='homepage-coin-list-header'>{currentDisplay === topCoins ? 'Top 10 Coins' : 'Top 7 Trending Coins'}</h3>
                {
                    currentDisplay.map(item=>{
                        return <div key={item.id} className='coin-list-container'>
                                    <div className='coin-list-image-name'>
                                        <img src={item.image} alt={item.id}/>
                                        <p className='coin-list-name'>{item.name}</p>
                                    </div>
                                    <div className='coin-list-price-mcap'>
                                        <p className='coin-list-price'>Current Price: ${item.current_price}</p>
                                        <p className='coin-list-spacer'>|</p>
                                        <p className='coin-list-mcap'>Current MCap: ${(item.market_cap/1000000000).toFixed(2)} Billion</p>
                                    </div>
                                </div>
                    })
                }
                {/* <button onClick={handleListSwitch}>L</button>
                SPACE
                <button onClick={handleListSwitch}>R</button> */}
            </div>
        </div>
    </div>
  )
}

export default Homepage