import React from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const Dashboard = () => {
  const data = [
    { name: "Jan", sales: 4000, profit: 2400 },
    { name: "Feb", sales: 3000, profit: 2200 },
    { name: "Mar", sales: 5000, profit: 2800 },
    { name: "Apr", sales: 4200, profit: 2600 },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-6 fixed h-full">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-2">
          <li className="p-3 rounded-lg cursor-pointer hover:bg-gray-700">Buy</li>
          <li className="p-3 rounded-lg cursor-pointer hover:bg-gray-700">Sell</li>
          <li className="p-3 rounded-lg cursor-pointer hover:bg-gray-700">Swap</li>
          <li className="p-3 rounded-lg cursor-pointer hover:bg-gray-700">Transfer</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Overview</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Add New</button>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Total Sales</h2>
            <p className="text-2xl font-bold">$15,230</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Orders</h2>
            <p className="text-2xl font-bold">1,280</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Users</h2>
            <p className="text-2xl font-bold">7,540</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-xl font-semibold mb-4">Sales Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
              <Line type="monotone" dataKey="profit" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
