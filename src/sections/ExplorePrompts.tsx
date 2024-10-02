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
          Unlock a treasure trove of over 10,000 prompts tailored for every need. Whether you're a professional, student, or creator, this bundle has something for everyone!
        </p>
  
        {/* Tag Selection */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <select
              onChange={handleTagSelection}
              className="border rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:shadow-lg transition duration-200"
            >
              <option value="">Select a category...</option>
              {tagsList.map((tag, index) => (
                <option key={index} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
  
          {/* Display Tags as Buttons */}
          <div className="flex flex-wrap justify-center space-x-2 space-y-2 max-w-lg">
            {tagsList.slice(0, 5).map((tag, index) => (
              <button
                key={index}
                onClick={() => setSelectedTag(tag)}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full px-3 py-2 text-sm hover:from-indigo-600 hover:to-purple-600 transition-all duration-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
  
        {/* Categories in a Beautiful Box */}
        {selectedTag && filteredCategories.length > 0 && (
          <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              {selectedTag} Categories
            </h2>
            <ul className="space-y-4">
              {filteredCategories.map((category) => (
                <li
                  key={category.name}
                  className="bg-gray-100 hover:bg-gray-200 p-4 rounded-lg shadow-sm border border-gray-300 transition duration-200"
                >
                  <span className="font-semibold text-gray-700">{category.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
  
        {/* No Categories Found */}
        {selectedTag && filteredCategories.length === 0 && (
          <p className="text-center text-gray-600">No categories found for this selection.</p>
        )}
      </div>
    );
  };
  
  export default ExplorePrompts;