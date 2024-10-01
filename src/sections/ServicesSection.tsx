"use client"; // Client Component directive

import { useState } from 'react';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';

// Import images
import passwordStrengthIcon from '@/assets/password-strenght.png';
import promptIcon from '@/assets/prompt.png';
import toolsIcon from '@/assets/tools.png';
import paymentIcon from '@/assets/payment.png';
import offerIcon from '@/assets/offer.png';

// Define a type for the service objects
interface Service {
  title: string;
  description: string;
  icon: StaticImageData;
}

const services: Service[] = [
  {
    title: 'Access 10,000+ Precise Prompts',
    description: 'Dive into a treasure trove of over 10,000 meticulously crafted prompts that empower you to extract precise and reliable insights from ChatGPT. Eliminate guesswork and boost your productivity!',
    icon: passwordStrengthIcon,
  },
  {
    title: 'Master Prompt Engineering',
    description: 'Transform your understanding with our comprehensive tutorials and certification program. Master prompt engineering and showcase your skills with an official certification that sets you apart in the AI landscape.',
    icon: promptIcon,
  },
  {
    title: 'All-in-One AI Tools Hub',
    description: 'Harness the power of an extensive suite of AI tools that range from creating flowcharts to writing code and editing videos. Whether you’re visualizing ideas or automating tasks, find everything you need on one seamless platform.',
    icon: toolsIcon,
  },
  {
    title: 'Lifetime Access with One-Time Payment',
    description: 'Enjoy lifetime access to all our resources with a simple one-time payment or subscription. No hidden fees, just continuous support for your AI journey.',
    icon: paymentIcon,
  },
  {
    title: 'Exclusive Discounts and Coupons',
    description: 'Maximize your investment with special coupon codes for top-tier AI tools. Enhance your capabilities while enjoying fantastic savings that elevate your productivity.',
    icon: offerIcon,
  },
];

const ServiceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExploreMoreClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-[#D8E5F8] p-6 md:p-10 rounded-lg shadow-lg"> {/* Outer container */}
      <h2 className="text-center text-3xl md:text-5xl font-bold text-black mb-4 mt-6">
        Unlock Your AI Potential
      </h2>
      <h3 className="text-center text-lg md:text-xl text-gray-600 mb-6">
        &quot;Explore, Learn, and Achieve with Our Expert Tools!&quot;
      </h3>

      {/* Outer box with transparent background and white border */}
      <div className="mt-8 p-6 rounded-lg border border-white bg-transparent shadow-lg flex flex-col items-center space-y-4 w-full md:w-3/4 mx-auto"> 
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className={`cursor-pointer p-4 rounded-lg shadow-md transition-transform transform duration-300 ease-in-out 
              hover:scale-105 hover:shadow-xl text-gray-800 bg-white w-full md:w-2/3`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={service.icon.src}
                alt={`${service.title} Icon`}
                className="w-12 h-12 mr-4 transition-opacity duration-300"
              />
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
            {expandedIndex === index && (
              <div className="bg-white rounded-lg shadow-md border border-blue-200 mt-4 p-4 transition duration-300 ease-in-out transform hover:scale-105">
                <p className="text-sm md:text-base text-gray-800 mb-2 font-semibold">Key Features:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m0 0l4-4m-4 4L9 12"
                      />
                    </svg>
                    In-depth tutorials and resources.
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m0 0l4-4m-4 4L9 12"
                      />
                    </svg>
                    Lifetime access with a one-time payment.
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m0 0l4-4m-4 4L9 12"
                      />
                    </svg>
                    Exclusive discounts on tools.
                  </li>
                </ul>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            )}
            <button
              onClick={() => handleExploreMoreClick(index)}
              className="mt-4 flex items-center text-blue-500 underline hover:text-blue-700 text-sm"
              aria-expanded={expandedIndex === index}
            >
              {expandedIndex === index ? 'Show Less' : 'Explore More'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-1 transition-transform duration-200"
                style={{
                  transform:
                    expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 10l5 5 5-5"
                />
              </svg>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
