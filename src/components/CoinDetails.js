import React from 'react'
import '../stylesheets/CoinDetails.css'

function CoinDetails({searchedCoin, setChosenCoin, setQuery, setPortfolioUpdate}) {
  return (
    <div key={searchedCoin?.id} className='coin-list-container' onClick={()=>{setChosenCoin(searchedCoin);setQuery('');setPortfolioUpdate({symbol: searchedCoin?.symbol})}}>
            <img className='coin-search-image' src={searchedCoin?.image} alt={searchedCoin?.id}/>
            <p className='coin-list-name'>{searchedCoin?.name}</p>
            <p className='coin-list-symbol'>({searchedCoin?.symbol})</p>
    </div>
  )
}

export default CoinDetails