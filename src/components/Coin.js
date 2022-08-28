import React from 'react'

const Coin = ({ number, name, image, symbol, price, volume, priceChange, marketCap }) => {
  return (
      <div className="coin-container">
          <div className="row">
              <div className="coin">
                  <p className="rank-number">{number}</p>
                  <img src={image} className="coin-img" alt="crypto" />
                  <h2 className="coin-name">{name}</h2>
              </div>
              <div className="details">
                  <p className="coin-symbol">{symbol.toUpperCase()}</p>
                  <p className="coin-price">{price.toLocaleString()}</p>
                  <p className="coin-volume">{volume.toLocaleString()}</p>
                  {priceChange < 0 ? (
                      <p className="price-change red">{priceChange.toFixed(2)}%</p>
                  ) : (
                          <p className="price-change green">{priceChange.toFixed(2)}%</p>     
                  )}
                  <p className="coin-marketcap">${marketCap.toLocaleString()} </p>
              </div>
          </div>
   </div>
  )
}

export default Coin