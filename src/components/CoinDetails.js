import React from 'react'
import '../stylesheets/CoinDetails.css'

function CoinDetails({setCoin, setChosenCoin, setQuery, setPortfolioUpdate}) {
  return (
    <div key={setCoin.id} className='coin-list-container' onClick={()=>{setChosenCoin(setCoin);setQuery('');setPortfolioUpdate({symbol: setCoin.symbol})}}>
            <img className='coin-search-image' src={setCoin.image} alt={setCoin.id}/>
            <p className='coin-list-name'>{setCoin.name}</p>
            <p className='coin-list-symbol'>({setCoin.symbol})</p>
    </div>
  )
}

export default CoinDetails