import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from './components/SearchBar'
import CoinList from './components/CoinList';
import LoadMore from "./components/LoadMore"
function App() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`)
        setCoins((coins) => [...coins, ...res.data])
      } catch (err) {
        alert(err)
      }
    }
    fetchData()
  }, [page])
  const handleClick = () => {
    setPage(page + 1)
  }
  return (
    <div className="App">
      <SearchBar />
      <CoinList coins={coins} />
      <LoadMore handleClick={handleClick} />
    </div>
  );
}

export default App;
