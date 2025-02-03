import React from 'react'



  const supportOptions = [
    { name: "24/7 Support", image: "/images/support-24-7.png", description: "Get help anytime, anywhere with our round-the-clock support team." },
    { name: "Secure Transactions", image: "/images/secure-transactions.png", description: "Your security is our priority. Enjoy safe and encrypted transactions." },
    { name: "Community Assistance", image: "/images/community-assistance.png", description: "Join our active community for insights, discussions, and assistance." },
    { name: "Knowledge Base", image: "/images/knowledge-base.png", description: "Access a vast collection of guides and FAQs to resolve issues instantly." },
    { name: "Live Chat", image: "/images/live-chat.png", description: "Chat with our experts in real-time to get immediate solutions." },
    { name: "Email Support", image: "/images/email-support.png", description: "Reach out via email and get detailed assistance from our team." }
  ];
  
  const OurSupport = () => {
    return (
      <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Support</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img src={option.image} alt={option.name} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">{option.name}</h3>
              <p className="text-gray-300 text-center">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OurSupport;
  