import React from 'react'

const SearchBar = () => {
    const getInputValue = (e) => {
        const inputValue = e.target.value
    }
    return (
        <div className="price-tracker">
            <div className="search">
                <h1>Cryptocurrency Market Analysis</h1>
                <input type="text" id="search-bar" placeholder="Enter a Crypto coin/token" onChange={getInputValue} />
            </div>
        </div>
    )
}

export default SearchBar