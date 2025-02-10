import { useState } from "react";

const Buy = () => {
  const [amount, setAmount] = useState("");
  const [crypto, setCrypto] = useState("BTC");

  const handleBuy = () => {
    alert(`Buying ${amount} of ${crypto}`);
  };

  return (
    <div className="relative h-screen bg-gray-100 flex justify-center">
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Buy Cryptocurrency</h2>

        {/* Crypto Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Select Crypto:</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={crypto}
            onChange={(e) => setCrypto(e.target.value)}
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USDT">Tether (USDT)</option>
          </select>
        </div>

        {/* Amount Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Enter Amount:</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buy Button */}
        <button
          onClick={handleBuy}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Buy;
