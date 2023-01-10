import React from 'react'
import '../stylesheets/PortfolioRemoveCoinContainer.css'

function UserCoinPortfolio({displayPortfolio, userCoins}) {
  return (
    <div className='portfolio-display-table'>
        <div className='portfolio-display-table-categories'>
             <p>Coin</p>
             <p>Amount</p>
             <p>Worth</p>
             <p>Allocation %</p>
        </div>
        {
            displayPortfolio.map(item=>{
                return <div className='portfolio-display-coin'>
                            <p><img src={item?.image} alt={item?.symbol} className='position-coin-image'/> {item?.name} ({item?.symbol})</p>
                            <p>{userCoins.filter(userCoinItem=>userCoinItem?.symbol === item?.symbol).map(userCoinItemFiltered =>(userCoinItemFiltered?.amount))}</p>
                            <p>${userCoins.filter(userCoinItem=>userCoinItem?.symbol === item?.symbol).map(userCoinItemFiltered =>(parseFloat(userCoinItemFiltered?.amount)*parseFloat(item?.current_price)).toFixed(2))}</p>
                            <p>%</p>
                        </div>
            })  
        }
    </div>
  )
}

export default UserCoinPortfolio