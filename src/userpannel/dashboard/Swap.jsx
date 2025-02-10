import { useState } from "react";

const Swap = () => {
  const [fromCrypto, setFromCrypto] = useState("BTC");
  const [toCrypto, setToCrypto] = useState("ETH");
  const [amount, setAmount] = useState("");

  const handleSwap = () => {
    alert(`Swapping ${amount} ${fromCrypto} to ${toCrypto}`);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 p-4">
      {/* Swap Form Positioned at the Top */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Swap Cryptocurrency</h2>

        {/* From Crypto Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">From:</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={fromCrypto}
            onChange={(e) => setFromCrypto(e.target.value)}
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USDT">Tether (USDT)</option>
          </select>
        </div>

        {/* To Crypto Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">To:</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={toCrypto}
            onChange={(e) => setToCrypto(e.target.value)}
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="USDT">Tether (USDT)</option>
          </select>
        </div>

        {/* Amount Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Amount:</label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Swap Button */}
        <button
          onClick={handleSwap}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Swap Now
        </button>
      </div>
    </div>
  );
};

export default Swap;
