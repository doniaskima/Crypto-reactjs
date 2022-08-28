import React from 'react'
import Coin from './Coin'

const CoinList = ({ coins }) => {
    return (
        <div className="coin-list">
            <div className="result">
                {
                    coins && coins.map((coin, index) => (
                        <Coin
                            number={index + 1}
                            key={coin.id}
                            image={coin.image}
                            name={coin.name}
                            symbol={coin.symbol}

                            volume={coin.total_volume}
                            price={coin.current_price}
                            priceChange={coin.price_change_percentage_24h}
                            marketCap={coin.market_cap}
                            {...coins}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CoinList