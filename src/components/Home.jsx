
import React from "react";
import "./Home.css";

const Home = () => {
  return (
     < >
<div className="flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-br from-gray-900 to-gray-800 p-10 text-center">
      {/* Hero Section */}
      <section className="mb-10">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent">
          Trade Crypto with Confidence
        </h1>
        <p className="text-lg opacity-80 mt-2">
          Buy, sell, and manage your cryptocurrency securely.
        </p>
        <button className="mt-4 px-6 py-3 text-lg font-bold text-white bg-orange-500 rounded-lg shadow-lg transition-transform transform hover:bg-red-400 hover:scale-105">
          Get Started
        </button>
      </section>
      
      {/* Market Trends Section */}
      <section className="bg-white bg-opacity-10 p-5 rounded-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Market Trends</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { coin: "Bitcoin (BTC)", price: "$42,000", change: "+2.5%", up: true },
            { coin: "Ethereum (ETH)", price: "$2,800", change: "-1.2%", up: false },
            { coin: "Solana (SOL)", price: "$110", change: "+4.8%", up: true },
            { coin: "Ripple (XRP)", price: "$0.75", change: "+1.2%", up: true },
          ].map(({ coin, price, change, up }, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 p-4 rounded-md text-left shadow-md transition-transform transform hover:translate-y-[-5px] hover:shadow-orange-500/40 text-gray-800"
            >
              <span className="block font-medium">{coin}</span>
              <span className="block text-lg font-bold">{price}</span>
              <span className={`block font-semibold ${up ? 'text-green-400' : 'text-red-400'}`}>{change}</span>
            </div>
          ))}
        </div>
      </section>
    </div>

    </>
  );
};

export default Home;




