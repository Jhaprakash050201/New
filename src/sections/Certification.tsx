// pages/certification.js
import Image from 'next/image';
import certificateImage from '../assets/companycert.jpg'; // Ensure this image exists
import metaLogo from '../assets/meta.webp'; // Add logo images in public folder
import appleLogo from '../assets/apple.jpg';
import amazonLogo from '../assets/amazon.jpg';
import netflixLogo from '../assets/netflix.jpg';
import googleLogo from '../assets/google.webp';
import { FaCheckCircle } from 'react-icons/fa'; // Add icons

export default function Certification() {
  return (
    <section className="bg-[#DAE6F9] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 bg-indigo-50 opacity-30 pointer-events-none" />

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8 relative z-10">
          Certification Recognition
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center mb-8 relative z-10">
          Boost Your Career with Our Recognized Certifications!
        </p>

        {/* Certificate Image */}
        <div className="flex justify-center mb-6 relative z-10">
          <Image
            src={certificateImage}
            alt="Sample Certificate"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Logos Section */}
        <div className="text-center relative z-10 mb-12">
          <p className="text-xl font-semibold text-gray-800 mb-4">
            Our certifications are trusted by top-tier companies, including:
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Image src={metaLogo} alt="Meta Logo" width={60} height={60} />
            <Image src={appleLogo} alt="Apple Logo" width={60} height={60} />
            <Image src={amazonLogo} alt="Amazon Logo" width={60} height={60} />
            <Image src={netflixLogo} alt="Netflix Logo" width={60} height={60} />
            <Image src={googleLogo} alt="Google Logo" width={60} height={60} />
          </div>
        </div>

        {/* Statistics - Combined Section as Pointers */}
        <div className="bg-indigo-100 p-8 rounded-lg shadow-md hover:bg-indigo-200 transition duration-300 text-center relative z-10">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">Career Impact</h3>
          <div className="flex flex-col space-y-6 md:space-y-4 text-left items-center">
            <div className="flex items-center space-x-4">
              <FaCheckCircle className="text-indigo-600 text-xl" />
              <p className="text-lg text-gray-700">
                <span className="font-bold">95%</span> of Graduates reported an increase in job opportunities after obtaining their certification.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaCheckCircle className="text-indigo-600 text-xl" />
              <p className="text-lg text-gray-700">
                <span className="font-bold">87%</span> of employers value certifications in AI and data science during the hiring process.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 relative z-10">
          <p className="text-lg text-gray-800 mb-4">
            Enhance your LinkedIn and resume with our industry-recognized certifications to stand out in a competitive job market.
          </p>
          <p className="text-2xl font-semibold text-indigo-600">
            “Get Certified. Get Noticed.”
          </p>
        </div>
      </div>
    </section>
  );
}
