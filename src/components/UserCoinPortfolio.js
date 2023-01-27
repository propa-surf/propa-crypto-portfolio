import React from 'react'
import '../stylesheets/PortfolioRemoveCoinContainer.css'

function UserCoinPortfolio({displayPortfolio, userCoins}) {

  const allValues = displayPortfolio?.map(item=>{ return userCoins?.filter(userCoinItem=>userCoinItem?.symbol === item?.symbol).map(userCoinItemFiltered =>(parseFloat(userCoinItemFiltered?.amount)*parseFloat(item?.current_price)).toFixed(2))})
  const totalValue = allValues?.reduce((result, [current]) => result + parseFloat(current), 0)

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
                            <p>{((((userCoins.filter(userCoinItem=>userCoinItem?.symbol === item?.symbol).map(userCoinItemFiltered =>(parseFloat(userCoinItemFiltered?.amount)*parseFloat(item?.current_price)).toFixed(2)))/totalValue)*100).toFixed(2))} %</p>
                        </div>
            })  
        }
    </div>
  )
}

export default UserCoinPortfolio