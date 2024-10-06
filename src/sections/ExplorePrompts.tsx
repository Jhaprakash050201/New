"use client";
import { useState } from "react";

// Define the tags for filtering categories
const tagsList = [
  "AI & Machine Learning", "Business", "Creative", "Education", 
  "Health & Wellness", "Lifestyle", "Marketing", "Personal Development", 
  "Programming & Tech", "Sales", "Writing & Content Creation", "Consulting", 
  "Finance", "Media", "Arts"
];

// Define the categories with corresponding icons
const categories = [
  { name: "Academian", tags: ["Education"], icon: "📚" },
  { name: "Accountant", tags: ["Business"], icon: "💼" },
  { name: "AI-Assisted Doctor", tags: ["Health & Wellness"], icon: "🩺" },
  { name: "AI Writing Tutor", tags: ["Education", "Writing & Content Creation"], icon: "✍️" },
  { name: "Chef", tags: ["Creative", "Lifestyle"], icon: "👨‍🍳" },
  { name: "Coding", tags: ["Programming & Tech"], icon: "💻" },
  { name: "Fitness Coach", tags: ["Health & Wellness"], icon: "🏋️" },
  { name: "Marketing Consultant", tags: ["Business"], icon: "📈" },
  { name: "Music Composer", tags: ["Creative"], icon: "🎵" },
  { name: "Project Manager", tags: ["Business"], icon: "📋" },
  { name: "Graphic Designer", tags: ["Creative"], icon: "🎨" },
  { name: "Data Analyst", tags: ["Business", "Programming & Tech"], icon: "📊" },
  { name: "Content Strategist", tags: ["Marketing", "Writing & Content Creation"], icon: "📝" },
  { name: "Web Developer", tags: ["Programming & Tech"], icon: "🌐" },
  { name: "Life Coach", tags: ["Personal Development", "Health & Wellness"], icon: "🧘" },
  { name: "Social Media Manager", tags: ["Marketing"], icon: "📱" },
  { name: "UX/UI Designer", tags: ["Creative"], icon: "🖌️" },
  { name: "SEO Specialist", tags: ["Marketing"], icon: "🔍" },
  { name: "Digital Marketer", tags: ["Marketing"], icon: "💻" },
  { name: "Virtual Assistant", tags: ["Business"], icon: "🗂️" },
  { name: "Financial Analyst", tags: ["Finance"], icon: "💰" },
  { name: "Public Speaker", tags: ["Personal Development"], icon: "🎤" },
  { name: "Business Consultant", tags: ["Consulting", "Business"], icon: "📊" },

  // New categories for AI & Machine Learning
  { name: "AI Research Scientist", tags: ["AI & Machine Learning"], icon: "🔬" },
  { name: "Machine Learning Engineer", tags: ["AI & Machine Learning", "Programming & Tech"], icon: "🤖" },
  { name: "AI Ethics Consultant", tags: ["AI & Machine Learning", "Consulting"], icon: "⚖️" },
  { name: "Data Scientist", tags: ["AI & Machine Learning"], icon: "📈" },

  // New categories for Sales
  { name: "Sales Manager", tags: ["Sales"], icon: "📞" },
  { name: "Sales Executive", tags: ["Sales"], icon: "💬" },
  { name: "Sales Analyst", tags: ["Sales", "Business"], icon: "📊" },
  { name: "Account Executive", tags: ["Sales", "Business"], icon: "📋" },

  // New categories for Media
  { name: "Content Creator", tags: ["Media", "Creative"], icon: "🎥" },
  { name: "Video Editor", tags: ["Media", "Creative"], icon: "✂️" },
  { name: "Podcast Host", tags: ["Media"], icon: "🎙️" },
  { name: "Journalist", tags: ["Media", "Writing & Content Creation"], icon: "📰" },

  // New categories for Arts
  { name: "Fine Artist", tags: ["Arts"], icon: "🎨" },
  { name: "Art Curator", tags: ["Arts"], icon: "🖼️" },
  { name: "Photographer", tags: ["Arts"], icon: "📷" },
  { name: "Sculptor", tags: ["Arts"], icon: "🗿" },
];

const ExplorePrompts = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Handle tag selection
  const handleTagSelection = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag); // Toggle selection
  };

  // Filter categories based on the selected tag
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
      <div className="flex flex-wrap justify-center mb-6">
        {tagsList.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagSelection(tag)}
            className={`mx-2 mb-2 px-4 py-2 rounded-lg border-2 transition duration-300 ${
              selectedTag === tag
                ? "bg-blue-600 text-white border-blue-700"
                : "bg-white text-blue-500 border-blue-300 hover:bg-blue-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Display Categories based on selected tag */}
      {selectedTag && ( // Only display the categories when a tag is selected
        <div className="flex flex-wrap justify-center">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="bg-white shadow-lg rounded-lg p-4 m-2 transition duration-300 hover:shadow-xl"
              style={{ maxWidth: "200px", flex: "1 1 auto" }} // Control card size and ensure flex behavior
            >
              <div className="flex items-center mb-2">
                <span className="text-3xl mr-2">{category.icon}</span>
                <h2 className="font-semibold text-xl">{category.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExplorePrompts;
