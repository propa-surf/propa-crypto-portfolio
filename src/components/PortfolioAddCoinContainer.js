import React, {useState} from 'react'
import '../stylesheets/PortfolioAddCoinContainer.css'
import CoinDetails from './CoinDetails'
import {db} from '../config/FirebaseConfig'
import { doc, updateDoc, setDoc } from 'firebase/firestore'

function PortfolioAddCoinContainer({portfolioUpdated, setPortfolioUpdated, allCoins, userCoins, userID, userName}) {

    const[query, setQuery] = useState('')
    const[searchedCoin,setSearchedCoin] = useState('')
    const[chosenCoin,setChosenCoin] = useState('')
    const[amountCoin, setAmountCoin] = useState('')
    const[portfolioUpdate, setPortfolioUpdate]=useState({
        symbol:'',
        amount:''
    })
    const[inputSearchField, setInputSearchField]=useState('')
    
    const handleSearch=(e)=>{
        setInputSearchField(e.target.value)
        setQuery(e.target.value.toLowerCase())
        setSearchedCoin(allCoins?.filter(coin => coin.name?.toLowerCase().includes(`${query}`)))
    }

    const handlePortfolioUpdate=(e)=>{
        e.preventDefault()
        const addedUserCoin = userCoins?.filter(coinList => coinList?.symbol === portfolioUpdate?.symbol)
        const addedUserCoinAmount=addedUserCoin[0]?.amount
        addedUserCoinAmount
        ? updateDoc(doc(db, 'portfolios', `${userID}`, 'coins', `${portfolioUpdate?.symbol}`), {amount: `${parseFloat(addedUserCoinAmount)+parseFloat(portfolioUpdate?.amount)}`})
        : setDoc(doc(db, 'portfolios', `${userID}`, 'coins', `${portfolioUpdate?.symbol}`), portfolioUpdate)
        setAmountCoin('')
        setChosenCoin('')
        setPortfolioUpdate('')
        setInputSearchField('')
        setPortfolioUpdated(!portfolioUpdated)
    }

  return (
    <div className='portfolio-search-main-container'>
        <form className='portfolio-search-container' onSubmit={handlePortfolioUpdate}>
            <h3 className='portfolio-search-header'>Account</h3>
            <p className='portfolio-search-account'>ID: {userName}</p>
            <div className='portfolio-search-coin'>
                <div className='portfolio-search-coin-search-field'>
                    <label htmlFor='coin-search-field' className='coin-search-field'>Coin:</label>
                    <input type='text' id='coin-search-field' placeholder='Coin Name' value={inputSearchField} onChange={handleSearch} required/>
                    {
                        query!==''
                        ? <div className='coin-search-results'>
                            {
                                searchedCoin.map(searchedCoin=>{
                                    return <CoinDetails key={searchedCoin?.symbol} searchedCoin={searchedCoin} setChosenCoin={setChosenCoin} setQuery={setQuery} setPortfolioUpdate={setPortfolioUpdate} setInputSearchField={setInputSearchField}/>
                                })
                            }
                        </div>
                        : null
                    }
                </div>
                <div className='portfolio-search-coin-stats'>
                    <div className='portfolio-search-coin-price'>
                        <p className='coin-current-price'>Current Price</p>
                        <p className='coin-current-price-display'>
                        {
                            chosenCoin
                            ? `$ ${chosenCoin?.current_price.toFixed(2)}`
                            : null
                            }</p>
                    </div>
                    <div className='portfolio-search-coin-mcap'>
                        <p className='coin-current-mcap'>Current MCap</p>
                        <p className='coin-current-mcap-display'>
                            {
                            chosenCoin
                            ? `$ ${(chosenCoin?.market_cap/1000000000).toFixed(2)} Billion`
                            : null
                            }</p>
                    </div>
                </div>
            </div>
            <div className='portfolio-search-add-field'>
                <label htmlFor='coin-add-field' className='coin-add-field'>Add Amount:</label>
                <input type='number' id='coin-add-field' placeholder='Amount' value={amountCoin} step='any' min='0' onChange={(e)=>{setAmountCoin(e.target.value);setPortfolioUpdate({...portfolioUpdate, amount: e.target.value})}} required/>
            </div>
            <div className='portfolio-search-summary'>
                <p className='summary-position'>Summary Position</p>
                <p className='summary-coin'>Coin: {chosenCoin?.name}</p>
                <p className='summary-amount'>Amount: {amountCoin}</p>
                <p className='summary-worth'>{
                chosenCoin && amountCoin
                ? `Worth: ${(parseFloat(amountCoin)*parseFloat(chosenCoin.current_price)).toFixed(2)}`
                : 'Worth:'
                }</p>
            </div>
            <div className='btn-container'>
                <button className='add-btn' type="submit">Add</button>
                <button className='clear-btn' type="reset" onClick={()=>{setQuery('');setAmountCoin('');setChosenCoin('');setPortfolioUpdate({symbol:'',amount:''});setInputSearchField('')}}>Clear</button>
            </div>
        </form>
    </div>
  )
}

export default PortfolioAddCoinContainer