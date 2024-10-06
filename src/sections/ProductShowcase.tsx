"use client";
import Image from "next/image";
import Logo01 from "@/assets/mainloo.png";
import Logo02 from "@/assets/logonew1.png";
import Logo03 from "@/assets/logo2.webp";
import Logo04 from "@/assets/logo3.png";
import Logo05 from "@/assets/logonew3.png";
import Logo06 from "@/assets/logo5.webp";
import Logo07 from "@/assets/logonew2.webp";
import Logo08 from "@/assets/logo6.webp";
import Logo09 from "@/assets/logonew4-removebg-preview.png";

const logos = [
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
  Logo09,
];

export default function ProductShowcase() {
  return (
    <section className="bg-[#D8E5F8] py-6">
      <div className="overflow-hidden mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative h-32"> {/* Set a consistent height for the entire section */}
          <div className="absolute inset-0 animate-slide">
            <div className="flex space-x-4">
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-32 h-32 bg-white rounded-lg flex items-center justify-center"> {/* Ensure all boxes are the same size */}
                  <Image
                    className="object-contain h-24 w-24" // Increase image size to fit inside boxes evenly
                    src={logo}
                    width={96} // Set the width to match the image size
                    height={96} // Set the height to match the image size
                    alt={`Logo ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          display: flex;
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
