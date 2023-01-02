import React, {useState} from 'react'
import '../stylesheets/PortfolioRemoveCoinContainer.css'
import {db} from '../config/FirebaseConfig'
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import UserCoinPortfolio from './UserCoinPortfolio'

function PortfolioRemoveCoinContainer({allCoins, userCoins, portfolioCurrentUser}) {

  const[coinToReduce, setCoinToReduce] = useState({
    symbol:'',
    amount:''
  })

  const displayPortfolio = allCoins?.filter(coinList => {return userCoins?.find(coin =>{return coin?.symbol === coinList?.symbol})})

  const handleRemoval=(e)=> {
    e.preventDefault()
    const reductionUserCoin = userCoins.filter(coinList => coinList?.symbol === coinToReduce?.symbol)
    const reductionUserCoinAmount=reductionUserCoin.map(item =>{return item?.amount})
    reductionUserCoinAmount <= coinToReduce?.amount
    ? deleteDoc(doc(db,'portfolios', `${portfolioCurrentUser?.uid}`, 'coins', `${coinToReduce?.symbol}`))
    : updateDoc(doc(db, 'portfolios', `${portfolioCurrentUser?.uid}`, 'coins', `${coinToReduce?.symbol}`), {amount: `${parseFloat(reductionUserCoinAmount)-parseFloat(coinToReduce?.amount)}`})
    setCoinToReduce({
      symbol:'',
      amount:''
    })
  }

  return (
    <div className='portfolio-display-container'>
      <h3 className='portfolio-display-header'>Portfolio</h3>
      <UserCoinPortfolio displayPortfolio={displayPortfolio} userCoins={userCoins}/>
      <form className='portfolio-display-remove' onSubmit={handleRemoval}>
          <div className='portfolio-display-remove-coin'>
              <label htmlFor='coin-selection-remove' className='coin-selection-remove'>Select Coin:</label>
              <select id='coin-selection-remove' onChange={(e)=>setCoinToReduce({id:e.target.value.symbol, symbol:e.target.value.symbol})} required>
                {
                  displayPortfolio.map(item=>{
                    return<option>
                      {item?.name}
                    </option>
                  })
                }
              </select>
          </div>
          <div className='portfolio-display-remove-amount'>
              <label htmlFor='amount-selection-remove' className='amount-selection-remove'>Amount:</label>
              <input type='number' id='amount-selection-remove' placeholder='Amount' min='>0' max={coinToReduce?.symbol===userCoins?.symbol ? userCoins?.amount : null} onChange={(e)=>setCoinToReduce({amount: e.target.value})} required/>
          </div>
          <button className='remove-btn'>Remove</button>
      </form>
    </div>
  )
}

export default PortfolioRemoveCoinContainer