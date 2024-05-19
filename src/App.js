import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Coins from './Component/Coins';
import Coin from './Routes/Coin';
import Login from './Component/Login';
import { AuthContext } from './Context/Auth';
import PrivateRoute from './Routes/PrivateRoute';

function App() {

  // react hook 'useState'

  const [coins, setCoins] = useState([]);

  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("tokens") || ""
  );

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  console.log("authTokens", authTokens);

  const api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios.get(api).then((res) => {
      setCoins(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoute Components={<Coins coins={coins} />} />} />
          <Route path='/home' element={<Coins coins={coins} />} />
          <Route path='/coin' element={<Coin />}>
            <Route path=':coinId' element={<Coin />} />
          </Route>
          <Route exact path='/' element={<Login />} />
        </Routes>
      </AuthContext.Provider>
    </>

  );
}

export default App;