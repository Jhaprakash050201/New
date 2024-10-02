// pages/faq.tsx
"use client";
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What is included in the product?",
      answer:
        "Our product provides access to over 10,000 precise prompts for ChatGPT, pre-recorded tutorials, and certification based on an examination, along with a collection of various AI tools and unlimited bonus coupons for additional AI resources."
    },
    {
      question: "How does the one-time payment work?",
      answer:
        "Make a single payment and receive credentials via email to access the portal, where you can explore all the resources available to you."
    },
    {
      question: "Do I need any prior experience to use the prompts?",
      answer:
        "No prior experience is required! Our prompts are designed to be user-friendly, making them accessible for everyone, regardless of technical skill."
    },
    {
      question: "What kind of certification do you offer?",
      answer:
        "We provide a certification based on your examination of prompt engineering concepts. This certification adds value to your resume and LinkedIn profile, showcasing your expertise in AI."
    },
    {
      question: "How can I access the combined collection of AI tools?",
      answer:
        "Upon purchasing the product, you will receive links and instructions to access various AI tools tailored for different applications, all in one convenient platform."
    },
    {
      question: "How do the bonus coupons work?",
      answer:
        "You will receive unlimited bonus coupons regularly, providing discounts on leading AI tools, maximizing your investment, and enhancing your AI toolkit."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "The product is non-refundable. However, if you have any questions or concerns, please reach out to us via email, and we'll be happy to assist you."
    },
    {
      question: "How do I stay updated with new prompts and tools?",
      answer:
        "Once you become a member, you'll receive regular updates via email, ensuring you have access to the latest resources and tools."
    }
  ];

  return (
    <section className="bg-[#DAE6F9] py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-indigo-100 rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-black">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-indigo-600" />
                ) : (
                  <FaChevronDown className="text-indigo-600" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-4 text-black">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
