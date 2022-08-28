import React, { useState } from "react";

const SearchBar = ({ coins, setCoins }) => {
    const [search, setSearch] = useState("");
    const getInputValue = (e) => {
        const inputValue = e.target.value
        coins.filter((value) => {
            if (inputValue === "") {
                return setCoins([]);
            } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                return setSearch(value);
            }
        })
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