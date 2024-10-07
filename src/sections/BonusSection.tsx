import React from 'react';
import { FaTicketAlt, FaRocket, FaChartLine } from 'react-icons/fa';

const BonusSection = () => {
  return (
    <div
      className="bg-[#D8E5F8] py-12 px-6 rounded-lg relative overflow-hidden"
      style={{
        backgroundImage: `url('../assets/bgoffer.jpg')`, // Ensure this path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9, // Adjust opacity for a subtle effect
      }}
    >
      <div className="bg-white bg-opacity-90 max-w-3xl mx-auto p-8 rounded-lg shadow-xl relative">
        <h2 className="text-black text-5xl font-extrabold text-center mb-4">Bonus</h2>
        <h3 className="text-black text-4xl font-semibold text-center mb-6">Exclusive Launch Bonuses!</h3>
        <p className="text-gray-800 text-lg mb-6 text-center">
          Unlock a world of savings with our unlimited coupon codes for various AI tools! These codes are designed to significantly reduce your expenses, often covering the cost of your entire purchase.
        </p>
        <h4 className="text-black text-2xl font-semibold mb-4 text-center">Here’s how it works:</h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="flex flex-col items-center p-6 border border-blue-300 rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white transform hover:scale-105">
            <FaTicketAlt className="text-blue-600 text-6xl mb-4 animate-pulse" />
            <h5 className="text-blue-700 font-semibold text-xl text-center mb-2">Access Discounts</h5>
            <p className="text-gray-600 text-center text-sm">
              Enjoy exclusive discounts on top-tier AI tools that enhance your productivity and creativity.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 border border-blue-300 rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white transform hover:scale-105">
            <FaRocket className="text-blue-600 text-6xl mb-4 animate-pulse" />
            <h5 className="text-blue-700 font-semibold text-xl text-center mb-2">Maximize Your Investment</h5>
            <p className="text-gray-600 text-center text-sm">
              Your initial investment is more than justified, as you’ll gain access to additional resources at little to no cost.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 border border-blue-300 rounded-lg shadow-lg hover:shadow-xl transition duration-300 bg-white transform hover:scale-105">
            <FaChartLine className="text-blue-600 text-6xl mb-4 animate-pulse" />
            <h5 className="text-blue-700 font-semibold text-xl text-center mb-2">Stay Ahead</h5>
            <p className="text-gray-600 text-center text-sm">
              Regularly updated coupons ensure you always have the latest deals at your fingertips.
            </p>
          </div>
        </div>

        <p className="text-gray-800 text-lg font-bold text-center mb-4">
          Don’t miss out on these valuable savings that enhance your AI experience!
        </p>

        <div className="text-center">
          <a href="https://promptcareer.in/getstarted/register" target="_blank" rel="noopener noreferrer">
            <button className="mt-6 bg-[#0DB97F] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 hover:bg-[#0ca86f] hover:shadow-lg transform hover:scale-105">
              Get Your Coupons Now!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BonusSection;
