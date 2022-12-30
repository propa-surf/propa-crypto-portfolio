import React from 'react'

function UserCoinPortfolio({displayPortfolio, userCoins}) {
  return (
    <div className='portfolio-display-table'>
        <div className='portfolio-display-table-header'>
            <p className='column-coin'>Coin</p>
            <p className='column-amount'>Amount</p>
            <p className='column-coin'>Worth</p>
            <p className='column-coin'>Allocation %</p>
        </div>
        <div className='portfolio-display-coin'>
            <p className='position-coin'><img className='portfolio-image-display' src={displayPortfolio.image} alt='Coin Symbol'/> {displayPortfolio.name}</p>
            <p className='position-amount'>{userCoins.amount}</p>
            <p className='position-coin'>{parseFloat(userCoins[0].amount)*parseFloat(displayPortfolio.current_price)}</p>
            <p className='position-coin'>X%</p>
        </div>
        {/* {
            userCoins.map(item=>{
                return item.symbol === displayPortfolio.symbol
                ?
                <div className='portfolio-display-coin'>
                    <p className='position-coin'>{displayPortfolio.image} {displayPortfolio.name} {item.symbol}</p>
                    <p className='position-amount'>{item.amount}</p>
                    <p className='position-coin'>`${parseFloat(item.amount)*parseFloat(displayPortfolio.current_price)}`</p>
                    <p className='position-coin'>Allocation % Worth/Total Amount</p>
                </div>
                : null
            })
        } */}
    </div>
  )
}

export default UserCoinPortfolio