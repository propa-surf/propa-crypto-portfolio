import React, {useEffect} from 'react'
import '../stylesheets/PortfolioRemoveCoinContainer.css'
// import {db, auth} from '../config/FirebaseConfig'
// import { setDocs,getDocs, collection } from 'firebase/firestore'

function PortfolioRemoveCoinContainer() {

  // useEffect(() => {
  //   const coinPortfolio = collection(db, 'userID')

  //   getDocs(coinPortfolio)
  //   .then(res=>{
  //     console.log(res)
  //   })
  //   .catch(err=>console.log(err))
  // }, [])
  


  return (
    <div className='portfolio-display-container'>
      <h3 className='portfolio-display-header'>Portfolio</h3>
      <div className='portfolio-display-table'>
          <div className='portfolio-display-coin'>
            <p className='column-coin'>Coin</p>
            <p className='position-coin'>Coin Firebase</p>
          </div>
          <div className='portfolio-display-amount'>
            <p className='column-amount'>Amount</p>
            <p className='position-amount'>Amount Firebase</p>
          </div>
          <div className='portfolio-display-worth'>
            <p className='column-coin'>Worth</p>
            <p className='position-coin'>Worth API Data*Amount Firebas</p>
          </div>
          <div className='portfolio-display-allocation'>
            <p className='column-coin'>Allocation %</p>
            <p className='position-coin'>Allocation % Worth/Total Amount</p>
          </div>
      </div>
      <form className='portfolio-display-remove'>
          <div className='portfolio-display-remove-coin'>
              <label htmlFor='coin-selection-remove' className='coin-selection-remove'>Select Coin:</label>
              <select id='coin-selection-remove' required>
                  <option></option>
              </select>
          </div>
          <div className='portfolio-display-remove-amount'>
              <label htmlFor='amount-selection-remove' className='amount-selection-remove'>Amount:</label>
              <input type='number' id='amount-selection-remove' placeholder='Amount' min='0.000001' max='Firebase' required/>
          </div>
          <button className='remove-btn'>Remove</button>
      </form>
    </div>
  )
}

export default PortfolioRemoveCoinContainer