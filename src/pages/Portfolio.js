import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../stylesheets/Portfolio.css'
import PortfolioAddCoinContainer from '../components/PortfolioAddCoinContainer'
import PortfolioRemoveCoinContainer from '../components/PortfolioRemoveCoinContainer'

function Portfolio({baseUrl}) {

    const[allCoins, setAllCoins]=useState([])

    useEffect(() => {
      axios.get(`${baseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`)
      .then(res=>{
        setAllCoins(res.data)
      }
      )
      .catch(err=>console.log(err))
    }, [])
    

  return (
    <div className='portfolio-container'>
        <div className='portfolio-container-background'>
            <div className='overlay'></div>
            <PortfolioAddCoinContainer allCoins={allCoins}/>
            <PortfolioRemoveCoinContainer allCoins={allCoins}/>
        </div>
    </div>
  )
}

export default Portfolio