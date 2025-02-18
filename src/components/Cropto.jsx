import React from 'react'

import { useEffect, useState } from "react";
import TradingViewWidget from "./TradingViewWidget"; // Assuming TradingView integration

const Crypto = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
        const data = await response.json();
        setCryptoData(data.slice(0, 6)); // Fetching top 6 cryptos
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Live Crypto Market</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {cryptoData.map((crypto) => (
          <div key={crypto.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src={crypto.image} alt={crypto.name} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-center">{crypto.name}</h3>
            <p className="text-center text-gray-300">${crypto.current_price.toLocaleString()}</p>
            <p className={`text-center mt-2 ${crypto.price_change_percentage_24h >= 0 ? "text-green-400" : "text-red-400"}`}>
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        ))}
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-center mb-4">Live Market Chart</h3>
        <TradingViewWidget /> {/* TradingView integration for live charts */}
      </div>
    </div>
  );
};

export default Crypto;

