import { all } from 'axios'
import React, {useState} from 'react'
import '../stylesheets/PortfolioAddCoinContainer.css'
import CoinDetails from './CoinDetails'

function PortfolioAddCoinContainer({allCoins}) {

    const[query, setQuery] = useState('')
    const[searchedCoin,setSearchedCoin] = useState('')
    const[chosenCoin,setChosenCoin] = useState('')
    const[amountCoin, setAmountCoin] = useState(0)

    const handleSearch=(e)=>{
        setQuery(e.target.value)
        setSearchedCoin(allCoins.filter(coin => coin.name.includes(`${query}`)))
    }

    const handleAmount=(e)=>{
        setAmountCoin(e.target.value)
    }

  return (
    <form className='portfolio-search-container'>
        <h3 className='portfolio-search-header'>Account</h3>
        <p className='portfolio-search-account'>Account-ID: Satoshi-Placeholder-Firebase</p>
        <div className='portfolio-search-coin'>
            <div className='portfolio-search-coin-search-field'>
                <label htmlFor='coin-search-field' className='coin-search-field'>Coin:</label>
                <input type='text' id='coin-search-field' placeholder='Coin Name' onChange={handleSearch} required/>
                {
                    query!==''
                    ? <div className='coin-search-results'>
                        {
                            searchedCoin.map(setCoin=>{
                                return <CoinDetails setCoin={setCoin} setChosenCoin={setChosenCoin} setQuery={setQuery}/>
                            })
                        }
                    </div>
                    : null
                }
            </div>
            <div className='portfolio-search-coin-stats'>
                <div className='portfolio-search-coin-price'>
                    <p className='coin-current-price'>Current Price</p>
                    <p className='coin-current-price-display'>${chosenCoin.current_price}</p>
                </div>
                <div className='portfolio-search-coin-mcap'>
                    <p className='coin-current-mcap'>Current MCap</p>
                    <p className='coin-current-mcap-display'>${(chosenCoin.market_cap/1000000000).toFixed(2)} Billion</p>
                </div>
            </div>
        </div>
        <div className='portfolio-search-add-field'>
            <label htmlFor='coin-add-field' className='coin-add-field'>Add Amount:</label>
            <input type='number' id='coin-add-field' placeholder='Amount' min='0.000001' onChange={handleAmount}required/>
        </div>
        <div className='portfolio-search-summary'>
            <p className='summary-position'>Summary Position</p>
            <p className='summary-coin'>Coin: {chosenCoin.name}</p>
            <p className='summary-amount'>Amount: {amountCoin}</p>
            <p className='summary-worth'>Worth: ${parseFloat(amountCoin)*parseFloat(chosenCoin.current_price)}</p>
        </div>
        <button className='add-btn'>Add</button>
    </form>
  )
}

export default PortfolioAddCoinContainer