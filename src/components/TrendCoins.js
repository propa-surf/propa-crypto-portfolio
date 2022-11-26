import React from 'react'
import '../stylesheets/CoinList.css'

function TrendCoins({trendCoins,btcPrice}) {
  return (
    <div>
        {
            trendCoins.map(item=>{
                return <div key={item.item.id} className='coin-list-container'>
                            <div className='coin-list-image-name'>
                                <img src={item.item.small} alt={item.item.id}/>
                                <p className='coin-list-name'>{item.item.name}</p>
                            </div>
                            <div className='coin-list-price-mcap'>
                                <p className='coin-list-price'>Current Price: ${((item.item.price_btc)*btcPrice).toFixed(4)}</p>
                                <p className='coin-list-spacer'>|</p>
                                <p className='coin-list-mcap'>MCap Rank: #{item.item.market_cap_rank}</p>
                            </div>
                        </div>
                    })
        }
    </div>
  )
}

export default TrendCoins