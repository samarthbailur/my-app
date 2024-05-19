import React from 'react';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import Coin from '../Routes/Coin';
import { useState } from "react";

const Coins = (props) => {

    const [search, setSearch] = useState("");

    return (
        <div className='containner'>
            <div>
                <div className='textInput'>
                    <input
                        className='textInputSearch'
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                </div>
                <div className="heading">
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'> Market Cap</p>
                </div>

                {props.coins
                    .filter((val) => {
                        return val.name.toLowerCase().includes(search.toLowerCase());
                    })
                    .map(coins => {
                        return (
                            <Link style={{ textDecoration: 'none' }} to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                                <CoinItem coins={coins} />
                            </Link>
                        )
                    })}

            </div>
        </div>
    )
}

export default Coins;