"use client";
import Image from "next/image";
import Logo01 from "@/assets/mainloo.png";
import Logo02 from "@/assets/logo1.jpg";
import Logo03 from "@/assets/logo2.webp";
import Logo04 from "@/assets/logo3.png";
import Logo05 from "@/assets/logo4.png";
import Logo06 from "@/assets/logo5.webp";
import Logo07 from "@/assets/logo6.png";
import Logo08 from "@/assets/logo6.webp";
import Logo09 from "@/assets/logo8.png";

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
        <div className="relative h-24">
          <div className="absolute inset-0 animate-slide">
            <div className="flex space-x-4">
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-24 h-24">
                  <Image
                    className="rounded-lg shadow-lg"
                    src={logo}
                    width={96}
                    height={96}
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
