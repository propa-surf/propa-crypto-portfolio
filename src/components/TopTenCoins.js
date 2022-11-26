import React from 'react'
import '../stylesheets/CoinList.css'

function TopTenCoins({topCoins}) {
  return (
    <div>
        {
            topCoins.map(item=>{
                return <div key={item.id} className='coin-list-container'>
                            <div className='coin-list-image-name'>
                                <img src={item.image} alt={item.id}/>
                                <p className='coin-list-name'>{item.name}</p>
                            </div>
                            <div className='coin-list-price-mcap'>
                                <p className='coin-list-price'>Current Price: ${item.current_price}</p>
                                <p className='coin-list-spacer'>|</p>
                                <p className='coin-list-mcap'>Current MCap: ${(item.market_cap/1000000000).toFixed(2)} Billion</p>
                            </div>
                        </div>
                    })
        }
    </div>
  )
}

export default TopTenCoins