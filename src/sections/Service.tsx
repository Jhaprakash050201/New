"use client"; // Ensure the component is marked as a Client Component

import { useState } from "react";
import {
  FaChartBar,
  FaCode,
  FaBookOpen,
  FaHeartbeat,
  FaMoneyBillWave,
  FaPalette,
  FaBriefcase,
  FaGavel,
  FaLightbulb,
} from "react-icons/fa";

// Define the type for card props
interface CardProps {
  icon: JSX.Element;
  industry: string;
  description: string;
  bgColor: string; // Added bgColor prop
}

// Card component definition
const Card: React.FC<CardProps> = ({ icon, industry, description, bgColor }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage visibility

  const toggleDescription = () => {
    setIsExpanded(!isExpanded); // Toggle visibility
  };

  return (
    <div className="bg-white rounded-lg p-3 shadow-lg flex flex-col justify-between h-full">
      <div className="flex items-center mb-2">
        <div className={`rounded-full p-3 inline-flex items-center justify-center ${bgColor}`}>
          {icon}
        </div>
        <h4 className="text-lg font-semibold ml-3">{industry}</h4>
      </div>
      {/* Conditionally render the description */}
      {isExpanded && (
        <h4 className="text-sm font-normal text-bluegray my-2 flex-grow">{description}</h4>
      )}
      <button
        onClick={toggleDescription}
        className="mt-2 py-1 px-2 text-xs font-medium text-white bg-black rounded-full hover:bg-gray-800 transition duration-200 self-start"
      >
        {isExpanded ? "Hide Insights" : "Unlock Insights"}
      </button>
    </div>
  );
};

// Data for the service cards with different pastel colors
const Aboutdata: CardProps[] = [
  {
    icon: <FaChartBar className="text-3xl text-pink-600" />,
    industry: "Marketing & Advertising",
    description:
      "Upskill in Digital Marketing: Automate content creation, run data-driven campaigns, and leverage AI for better customer engagement.",
    bgColor: "bg-pink-200", // Pastel pink background
  },
  {
    icon: <FaCode className="text-3xl text-green-600" />,
    industry: "Information Technology (IT) & Software Development",
    description:
      "Code Faster: Use AI to assist in code generation, debugging, and automation.",
    bgColor: "bg-green-200", // Pastel green background
  },
  {
    icon: <FaBookOpen className="text-3xl text-blue-600" />,
    industry: "Education & Academia",
    description:
      "Transform Learning: Create tailored educational content, generate assessments, and enhance student engagement using AI.",
    bgColor: "bg-blue-200", // Pastel blue background
  },
  {
    icon: <FaHeartbeat className="text-3xl text-red-600" />,
    industry: "Healthcare & Life Sciences",
    description:
      "AI in Diagnostics: Use AI to interpret medical data, assist in diagnostics, and streamline patient interactions.",
    bgColor: "bg-red-200", // Pastel red background
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-yellow-600" />,
    industry: "Finance & Accounting",
    description:
      "AI-Powered Financial Analysis: Automate repetitive tasks like data entry and financial reporting, making way for strategic financial planning.",
    bgColor: "bg-yellow-200", // Pastel yellow background
  },
  {
    icon: <FaPalette className="text-3xl text-purple-600" />,
    industry: "Creative Professionals (Designers, Writers, Artists)",
    description:
      "Streamline Creative Processes: Leverage AI for designing, video editing, content writing, and creating art through platforms like Midjourney.",
    bgColor: "bg-purple-200", // Pastel purple background
  },
  {
    icon: <FaBriefcase className="text-3xl text-indigo-600" />,
    industry: "Business & Management",
    description:
      "AI-Driven Business Strategy: Use data insights and AI tools to drive decision-making, optimize processes, and improve business performance.",
    bgColor: "bg-indigo-200", // Pastel indigo background
  },
  {
    icon: <FaGavel className="text-3xl text-gray-600" />,
    industry: "Legal & Compliance",
    description:
      "Automate Legal Research: Use AI to streamline legal research, document review, and compliance tracking.",
    bgColor: "bg-gray-200", // Pastel gray background
  },
  {
    icon: <FaLightbulb className="text-3xl text-teal-600" />,
    industry: "Upskilling Opportunities",
    description:
      "This product is not just for professionals currently in these fields but also for those looking to transition to AI-related roles, management & leadership, and entrepreneurship & freelancing.",
    bgColor: "bg-teal-200", // Pastel teal background
  },
];

// Service component definition
const Service = () => {
  return (
    <div id="services" className="bg-[#D8E5F8]">
      <div className="mx-auto max-w-7xl px-4 my-8 sm:py-16 lg:px-6">
        <div className="text-center mb-8">
          <p className="text-2xl sm:text-3xl lg:text-5xl font-semibold lh-81 mt-4">
            Who Can Benefit from Our AI Toolkit?
          </p>
          {/* Increased font size for the subheading */}
          <h4 className="text-md sm:text-lg pt-3 font-normal lh-33 text-bluegray mx-auto max-w-xl">
            Whether you&apos;re looking to change careers, upskill for growth, or upgrade your current role, this AI toolkit is designed to give you a competitive edge across various industries.
          </h4>
        </div>

        {/* Container for the bordered grid with thicker white border and transparent background */}
        <div className="border-4 border-white rounded-2xl p-6 bg-transparent">
          {/* Grid with responsive column settings */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
            {Aboutdata.map((item, i) => (
              <Card key={i} icon={item.icon} industry={item.industry} description={item.description} bgColor={item.bgColor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
