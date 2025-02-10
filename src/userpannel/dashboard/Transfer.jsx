import { useState } from "react";

const Transfer = () => {
  const [crypto, setCrypto] = useState("BTC");
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = () => {
    alert(`Transferring ${amount} ${crypto} to ${walletAddress}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Transfer Cryptocurrency</h2>

        {/* Select Cryptocurrency */}
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

        {/* Wallet Address Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">Wallet Address:</label>
          <input
            type="text"
            placeholder="Enter wallet address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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

        {/* Transfer Button */}
        <button
          onClick={handleTransfer}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          Transfer Now
        </button>
      </div>
    </div>
  );
};

export default Transfer;
