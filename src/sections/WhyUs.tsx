// components/WhyUs.tsx

import { FC } from 'react';
import { FaClock, FaShieldAlt, FaComments, FaAward, FaHandsHelping, FaBookOpen } from 'react-icons/fa';

const WhyUs: FC = () => {
  return (
    <section className="py-12" style={{ backgroundColor: '#D8E5F8' }}>
      <div className="container mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl font-extrabold text-black mb-6">Why Choose Us?</h2>
        {/* Subheading */}
        <p className="text-lg text-black mb-10">
          Discover how our platform can significantly improve your productivity and performance.
        </p>
        
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white py-6 px-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 flex items-center">
            <div className="w-14 h-14 bg-[#1E3A8A] flex items-center justify-center rounded-md mr-5">
              <FaClock className="text-white text-3xl" />
            </div>
            <p className="text-gray-700 text-lg">
              Save <span className="font-extrabold text-[#1E3A8A] text-2xl">20+</span> hours weekly.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white py-6 px-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 flex items-center">
            <div className="w-14 h-14 bg-[#1E3A8A] flex items-center justify-center rounded-md mr-5">
              <FaShieldAlt className="text-white text-3xl" />
            </div>
            <p className="text-gray-700 text-lg">
              Achieve results <span className="font-extrabold text-[#1E3A8A] text-2xl">75%</span> faster.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white py-6 px-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 flex items-center">
            <div className="w-14 h-14 bg-[#1E3A8A] flex items-center justify-center rounded-md mr-5">
              <FaComments className="text-white text-3xl" />
            </div>
            <p className="text-gray-700 text-lg">
              Reduce research time by <span className="font-extrabold text-[#1E3A8A] text-2xl">50%</span>.
            </p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white py-6 px-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 flex items-center">
            <div className="w-14 h-14 bg-[#1E3A8A] flex items-center justify-center rounded-md mr-5">
              <FaAward className="text-white text-3xl" />
            </div>
            <p className="text-gray-700 text-lg">
              Optimize workflow by <span className="font-extrabold text-[#1E3A8A] text-2xl">30%</span>.
            </p>
          </div>
          
          {/* Card 5 */}
          <div className="bg-white py-6 px-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 flex items-center">
            <div className="w-14 h-14 bg-[#1E3A8A] flex items-center justify-center rounded-md mr-5">
              <FaHandsHelping className="text-white text-3xl" />
            </div>
            <p className="text-gray-700 text-lg">
              Spend <span className="font-extrabold text-[#1E3A8A] text-2xl">60%</span> less on learning.
            </p>
          </div>
          
          {/* Card 6 */}
          <div className="bg-white py-6 px-5 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 flex items-center">
            <div className="w-14 h-14 bg-[#1E3A8A] flex items-center justify-center rounded-md mr-5">
              <FaBookOpen className="text-white text-3xl" />
            </div>
            <p className="text-gray-700 text-lg">
              Experience <span className="font-extrabold text-[#1E3A8A] text-2xl">138%</span> ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
