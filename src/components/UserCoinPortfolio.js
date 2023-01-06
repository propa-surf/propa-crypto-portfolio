import React from 'react'

function UserCoinPortfolio({displayPortfolio, userCoins}) {
  return (
    <div className='portfolio-display-table'>
        <div className='portfolio-column-coin'>
            <p className='header-coin'>Coin</p>
            {
            displayPortfolio.map(item=>{
                return <div className='portfolio-display-coin'>
                            <p className='position-coin'><img src={item?.image} alt={item?.symbol} className='position-coin-image'/> {item?.name} ({item?.symbol})</p>
                        </div>
                })  
            }
        </div>
        <div className='portfolio-column-amount'>
            <p className='header-amount'>Amount</p>
            {
            displayPortfolio.map(item=>{
                return <div className='portfolio-display-amount'>
                            <p className='position-amount'>{userCoins.filter(userCoinItem=>userCoinItem?.symbol === item?.symbol).map(userCoinItemFiltered =>(userCoinItemFiltered?.amount))}</p>
                        </div>
                })  
            }
        </div>
        <div className='portfolio-column-worth'>
            <p className='header-worth'>Worth</p>
            {
            displayPortfolio.map(item=>{
                return <div className='portfolio-display-worth'>
                            <p className='position-worth'>$ {userCoins.filter(userCoinItem=>userCoinItem?.symbol === item?.symbol).map(userCoinItemFiltered =>(parseFloat(userCoinItemFiltered?.amount)*parseFloat(item?.current_price)).toFixed(2))}</p>
                        </div>
                })  
            }
        </div>
        <div className='portfolio-column-allocation'>
            <p className='header-allocation'>Allocation</p>
            {
            displayPortfolio.map(item=>{
                return <div className='portfolio-display-allocation'>
                           <p className='position-allocation'>{item.symbol} %</p>
                        </div>
                })  
            }
        </div>
         {/* <div className='portfolio-display-table-header'>
             <p className='column-coin'>Coin</p>
             <p className='column-amount'>Amount</p>
             <p className='column-coin'>Worth</p>
             <p className='column-coin'>Allocation %</p>
         </div>
        <div className='portfolio-display-coin-portfolio'>
        {
            displayPortfolio.map(item=>{
                return <div className='portfolio-display-coin'>
                            <p className='position-coin'><img src={item?.image} alt={item?.symbol} className='position-coin-image'/> {item?.name} ({item?.symbol})</p>
                            <p className='position-amount'>{userCoins.filter(userCoinItem=>userCoinItem?.symbol === item?.symbol).map(userCoinItemFiltered =>(userCoinItemFiltered?.amount))}</p>
                            <p className='position-coin'>{userCoins.filter(userCoinItem=>userCoinItem?.symbol === item?.symbol).map(userCoinItemFiltered =>(parseFloat(userCoinItemFiltered?.amount)*parseFloat(item?.current_price)).toFixed(2))}</p>
                            <p className='position-coin'>%</p>
                        </div>
            })  
        }
        </div> */}
    </div>
  )
}

export default UserCoinPortfolio