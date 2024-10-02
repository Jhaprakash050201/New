"use client";
import { useState } from "react";

const tagsList = [
  "AI & Machine Learning", "Business", "Creative", "Education", 
  "Health & Wellness", "Lifestyle", "Marketing", "Personal Development", 
  "Programming & Tech", "Sales", "Writing & Content Creation", "Consulting", 
  "Finance", "Media", "Arts"
];
const categories = [
  { name: "✅ Academian", tags: ["Education"] },
  { name: "✅ Accountant", tags: ["Business"] },
  { name: "✅ AI-Assisted Doctor", tags: ["Health & Wellness"] },
  { name: "✅ AI Writing Tutor", tags: ["Education", "Writing & Content Creation"] },
  { name: "✅ Aphorism Book", tags: ["Creative"] },
  { name: "✅ Art: Midjourney Prompt", tags: ["Creative"] },
  { name: "✅ Artist Advisor", tags: ["Creative"] },
  { name: "✅ Automobile Mechanic", tags: ["Consulting"] },
  { name: "✅ Babysitter", tags: ["Lifestyle"] },
  { name: "✅ Biblical Translator", tags: ["Creative"] },
  { name: "✅ Blogging", tags: ["Writing & Content Creation"] },
  { name: "✅ Business", tags: ["Business"] },
  { name: "✅ Car Navigation System", tags: ["Tech"] },
  { name: "✅ Career Counselor", tags: ["Personal Development"] },
  { name: "✅ CEO", tags: ["Business"] },
  { name: "✅ Character from a Movie", tags: ["Creative"] },
  { name: "✅ Chef", tags: ["Creative", "Lifestyle"] },
  { name: "✅ Chess Player", tags: ["Creative"] },
  { name: "✅ Classical Music Composer", tags: ["Creative"] },
  { name: "✅ Coding", tags: ["Programming & Tech"] },
  { name: "✅ Comedian", tags: ["Creative"] },
  { name: "✅ Commentariat", tags: ["Media"] },
  { name: "✅ Composer", tags: ["Creative"] },
  { name: "✅ Cooking", tags: ["Lifestyle"] },
  { name: "✅ Copywriting", tags: ["Writing & Content Creation"] },
  { name: "✅ Cyber Security Specialist", tags: ["Programming & Tech"] },
  { name: "✅ Debate Coach", tags: ["Education", "Personal Development"] },
  { name: "✅ Dentist", tags: ["Health & Wellness"] },
  { name: "✅ Developer Relations Consultant", tags: ["Business"] },
  { name: "✅ Diagram Generator", tags: ["Tech"] },
  { name: "✅ Dietician", tags: ["Health & Wellness"] },
  { name: "✅ Digital Art Gallery Guide", tags: ["Creative"] },
  { name: "✅ DIY Expert", tags: ["Creative"] },
  { name: "✅ Doctor", tags: ["Health & Wellness"] },
  { name: "✅ Dream Interpreter", tags: ["Creative"] },
  { name: "✅ Educational Content Creator", tags: ["Education", "Creative"] },
  { name: "✅ Email Marketing", tags: ["Marketing"] },
  { name: "✅ Emergency Response Professional", tags: ["Health & Wellness"] },
  { name: "✅ Emoji Translator", tags: ["Creative"] },
  { name: "✅ English Pronunciation", tags: ["Education"] },
  { name: "✅ English Translator", tags: ["Creative"] },
  { name: "✅ Essay Writer", tags: ["Writing & Content Creation"] },
  { name: "✅ Etymologist", tags: ["Education"] },
  { name: "✅ Excel Sheet", tags: ["Tech"] },
  { name: "✅ Facebook Ad Copy", tags: ["Marketing"] },
  { name: "✅ Fallacy Finder", tags: ["Education"] },
  { name: "✅ Fancy Title Generator", tags: ["Creative"] },
  { name: "✅ Fill in the Blank Worksheet Generator", tags: ["Education"] },
  { name: "✅ Financial Analyst", tags: ["Business"] },
  { name: "✅ Finding Products with AI Tools", tags: ["Tech"] },
  { name: "✅ Florist", tags: ["Creative"] },
  { name: "✅ Food Critic", tags: ["Creative"] },
  { name: "✅ Football Commentator", tags: ["Media"] },
  { name: "✅ Health", tags: ["Health & Wellness"] },
  { name: "✅ Historian", tags: ["Education"] },
  { name: "✅ Interior Decorator", tags: ["Creative"] },
  { name: "✅ Investment Manager", tags: ["Business"] },
  { name: "✅ IT Architect", tags: ["Tech"] },
  { name: "✅ IT Expert", tags: ["Tech"] },
  { name: "✅ Javascript Console", tags: ["Programming & Tech"] },
  { name: "✅ Journal Reviewer", tags: ["Education"] },
  { name: "✅ Journalist", tags: ["Media"] },
  { name: "✅ Landing Page", tags: ["Marketing"] },
  { name: "✅ Language Detector", tags: ["Tech"] },
  { name: "✅ Legal Advisor", tags: ["Business"] },
  { name: "✅ Life Coach", tags: ["Lifestyle"] },
  { name: "✅ Linguist", tags: ["Education"] },
  { name: "✅ Lifestyle Coach", tags: ["Lifestyle"] },
  { name: "✅ Literature Teacher", tags: ["Education"] },
  { name: "✅ Machine Learning Engineer", tags: ["Tech"] },
  { name: "✅ Marketing Consultant", tags: ["Business"] },
  { name: "✅ Marketing Specialist", tags: ["Business"] },
  { name: "✅ Mediator", tags: ["Business"] },
  { name: "✅ Mental Health Therapist", tags: ["Health"] },
  { name: "✅ Mobile App Developer", tags: ["Tech"] },
  { name: "✅ Motivational Speaker", tags: ["Lifestyle"] },
  { name: "✅ Music Composer", tags: ["Creative"] },
  { name: "✅ Musician", tags: ["Creative"] },
  { name: "✅ Online Course Instructor", tags: ["Education"] },
  { name: "✅ Online Language Tutor", tags: ["Education"] },
  { name: "✅ Online Store Owner", tags: ["Business"] },
  { name: "✅ Photographer", tags: ["Creative"] },
  { name: "✅ Podcast Host", tags: ["Creative"] },
  { name: "✅ Political Consultant", tags: ["Business"] },
  { name: "✅ Product Manager", tags: ["Business"] },
  { name: "✅ Project Manager", tags: ["Business"] },
  { name: "✅ Public Relations Specialist", tags: ["Business"] },
  { name: "✅ Python Developer", tags: ["Tech"] },
  { name: "✅ React Developer", tags: ["Tech"] },
  { name: "✅ Recruiter", tags: ["Business"] },
  { name: "✅ Resume Writer", tags: ["Business"] },
  { name: "✅ Sales Consultant", tags: ["Business"] },
  { name: "✅ Science Teacher", tags: ["Education"] },
  { name: "✅ SEO Specialist", tags: ["Business"] },
  { name: "✅ Social Media Consultant", tags: ["Business"] },
  { name: "✅ Speech Writer", tags: ["Creative"] },
  { name: "✅ Sports Coach", tags: ["Lifestyle"] },
  { name: "✅ Storyteller", tags: ["Creative"] },
  { name: "✅ Teacher", tags: ["Education"] },
  { name: "✅ Technical Writer", tags: ["Creative"] },
  { name: "✅ Translator", tags: ["Creative"] },
  { name: "✅ Travel Guide", tags: ["Lifestyle"] },
  { name: "✅ User Experience Designer", tags: ["Tech"] },
  { name: "✅ UX Researcher", tags: ["Tech"] },
  { name: "✅ Web Developer", tags: ["Tech"] },
  { name: "✅ Wellness Coach", tags: ["Health", "Lifestyle"] },
  { name: "✅ Writer", tags: ["Creative"] },
];

const ExplorePrompts = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
    const handleTagSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = event.target.value;
      setSelectedTag(selectedValue === "" ? null : selectedValue);
    };
  
    const filteredCategories = selectedTag
      ? categories.filter((category) => category.tags.includes(selectedTag))
      : [];
  
    return (
      <div className="py-12 px-4" style={{ backgroundColor: "#D8E5F8" }}>
        <h1 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
          Explore a Vast Range of AI Prompt Categories!
        </h1>
        <p className="text-center mb-6 text-gray-600">
          Unlock a treasure trove of over 10,000 prompts tailored for every need. Whether you&apos;re a professional, student, or creator, this bundle has something for everyone!
        </p>
  
        {/* Tag Selection */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleTagSelection}
            >
              <option value="">Select a Tag</option>
              {tagsList.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
        </div>
  
        {/* Filtered Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
                <ul className="list-disc pl-4">
                  {category.tags.map((tag, idx) => (
                    <li key={idx} className="text-gray-700">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No categories available for the selected tag.
            </p>
          )}
        </div>
      </div>
    );
  };

export default ExplorePrompts;
