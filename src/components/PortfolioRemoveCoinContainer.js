import React, {useState, useEffect} from 'react'
import '../stylesheets/PortfolioRemoveCoinContainer.css'
import {db} from '../config/FirebaseConfig'
import { doc, updateDoc, deleteDoc } from 'firebase/firestore'
import UserCoinPortfolio from './UserCoinPortfolio'

function PortfolioRemoveCoinContainer({portfolioUpdated, setPortfolioUpdated, allCoins, userCoins, userID}) {

  const[coinToReduce, setCoinToReduce] = useState([])
  const[reductionAmount, setReductionAmount] = useState('')
  // const [displayPortfolio, setDisplayPortfolio] = useState([])

  // useEffect(() => {
  //   setDisplayPortfolio(allCoins?.filter(coinList => {return userCoins?.find(coin =>{return coin?.symbol === coinList?.symbol})}))
  // }, [])

const displayPortfolio = allCoins?.filter(allCoinList => {return userCoins?.find(coin =>{return coin?.symbol === allCoinList?.symbol})})

  const handleRemoval=(e)=> {
    e.preventDefault()
    const reductionUserCoin = userCoins.filter(coinList => coinList?.symbol === coinToReduce[0]?.symbol)
    const reductionUserCoinAmount=reductionUserCoin.map(item =>{return item?.amount})
    parseFloat(reductionUserCoinAmount[0]) <= parseFloat(reductionAmount)
    ? deleteDoc(doc(db,'portfolios', `${userID}`, 'coins', `${coinToReduce[0]?.symbol}`))
    : updateDoc(doc(db, 'portfolios', `${userID}`, 'coins', `${coinToReduce[0]?.symbol}`), {amount: `${parseFloat(reductionUserCoinAmount[0])-parseFloat(reductionAmount)}`})
    e.target.reset()
    setPortfolioUpdated(!portfolioUpdated)
  }

  return (
    <div className='portfolio-display-container'>
      <h3 className='portfolio-display-header'>Portfolio</h3>
      <UserCoinPortfolio displayPortfolio={displayPortfolio} userCoins={userCoins}/>
      <form className='portfolio-display-remove-form' onSubmit={handleRemoval}>
          <div className='portfolio-display-remove-coin-selector'>
              <label htmlFor='coin-selection-remove' className='coin-selection-remove'>Select Coin:</label>
              <select id='coin-selection-remove' defaultValue={'Select Coin'} onChange={(e)=>setCoinToReduce(displayPortfolio?.filter(coin=>coin?.name === e.target.value))} required>
                <option>Select Coin</option>
                {
                  displayPortfolio.map(item=>{
                    return<option key={item?.id}>
                      {item?.name}
                    </option>
                  })
                }
              </select>
          </div>
          <div className='portfolio-display-remove-amount-input'>
              <label htmlFor='amount-selection-remove' className='amount-selection-remove'>Amount:</label>
              <input type='number' id='amount-selection-remove' placeholder='Amount' min='>0' max={userCoins.filter(coinList => coinList?.symbol === coinToReduce[0]?.symbol).map(item =>(item.amount))} onChange={(e)=>setReductionAmount(e.target.value)} required/>
          </div>
          <button className='remove-btn' type="submit">Remove</button>
          <button className='clear-btn' type="reset" onClick={()=>{setReductionAmount('');setCoinToReduce([])}}>Clear</button>
      </form>
    </div>
  )
}

export default PortfolioRemoveCoinContainer