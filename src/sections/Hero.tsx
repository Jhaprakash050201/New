"use client"; 
import cogImage from "@/assets/gpt.webp";
import cylinderImage from "@/assets/cylinder.png";
import domeImage1 from "@/assets/Gemini.png";
import domeImage2 from "@/assets/heygenai.png";
import domeImage3 from "@/assets/noodle.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [activeLine, setActiveLine] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev === 1 ? 2 : 1));
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const floatingEffect: { y: number[]; transition: { repeat: number; repeatType: "loop" | "mirror" | "reverse"; duration: number; ease: string; }; } = {
    y: [-10, 10],
    transition: {
      repeat: Infinity,
      repeatType: "loop", // Use "loop", "mirror", or "reverse"
      duration: 3,
      ease: "easeInOut",
    },
  };

  return (
    <section
      className="pt-10 pb-10 md:pt-20 md:pb-10 overflow-x-clip"
      style={{ backgroundColor: '#D8E5F8' }} // Updated background color
    >
      <div className="container mx-auto text-center px-4 md:px-0">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-b from-[#4776e6] to-[#8e54e9] text-transparent bg-clip-text">
              Rise
            </span>{" "}
            <span className="text-black">Above the</span>{" "}
            <span className="bg-gradient-to-b from-[#4776e6] to-[#8e54e9] text-transparent bg-clip-text">
              Rest
            </span>
            : Become a Leader in Your Field!
          </h1>

          <div className="relative mt-4 overflow-hidden h-[40px]">
            <div className={`line ${activeLine === 1 ? "active" : ""}`}>
              <b>Tap into 10,000+ Precise Prompts</b>
            </div>
            <div className={`line ${activeLine === 2 ? "active" : ""}`}>
              <b>Dive into 100+ AI Tools</b>
            </div>
          </div>

          <style jsx>{`
            .line {
              position: absolute;
              width: 100%;
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.6s ease, transform 0.6s ease;
              animation: float 3s ease-in-out infinite;
            }
            .line.active {
              opacity: 1;
              transform: translateY(0);
            }

            @keyframes float {
              0% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-5px);
              }
              100% {
                transform: translateY(0);
              }
            }
          `}</style>

          <p className="text-lg text-gray-800 tracking-tight mt-6">
            Earn Your Prompt Engineering Certification—supercharging your efficiency to save countless hours across any industry!
          </p>

          <div className="flex justify-center gap-2 items-center mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 px-4 py-2 rounded-lg w-64"
            />
            <button className="btn btn-primary">Start Free Trial</button>
          </div>

          {/* Floating Images in a Single Line */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            <motion.div animate={floatingEffect}>
              <img src={cogImage.src} alt="Cog Image" className="h-32 w-32" />
            </motion.div>

            <motion.div animate={floatingEffect}>
              <img src={cylinderImage.src} width={130} height={130} alt="Cylinder Shape" />
            </motion.div>

            <motion.div animate={floatingEffect}>
              <img src={domeImage1.src} width={130} height={130} alt="Dome Image 1" />
            </motion.div>

            <motion.div animate={floatingEffect}>
              <img src={domeImage2.src} width={130} height={130} alt="Dome Image 2" />
            </motion.div>

            <motion.div animate={floatingEffect}>
              <img src={domeImage3.src} width={130} height={130} alt="Dome Image 3" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
