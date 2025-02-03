import React from "react";
const services = [
    { name: "Sell Crypto", image: "/images/sell-crypto.png", description: "Easily sell your cryptocurrency with secure transactions." },
    { name: "Buy Crypto", image: "/images/buy-crypto.png", description: "Purchase cryptocurrency quickly and securely." },
    { name: "Send Crypto", image: "/images/send-crypto.png", description: "Transfer crypto assets instantly to anyone, anywhere." },
    { name: "Swap Crypto", image: "/images/swap-crypto.png", description: "Exchange your crypto assets with low fees." },
    { name: "Crypto Analysis", image: "/images/crypto-analysis.png", description: "Analyze market trends with real-time data insights." },
    { name: "Crypto Wallet", image: "/images/crypto-wallet.png", description: "Securely store and manage your digital assets." }
  ];
  
  const OurServices = () => {
    return (
      <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img src={service.image} alt={service.name} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">{service.name}</h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OurServices;
  


