import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <Image src={logo} alt="logo" height={40} className="mb-4" />
          <div className="flex justify-center gap-4">
            <SocialX />
            <SocialInsta />
            <SocialLinkedin />
            <SocialPin />
            <SocialYoutube />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
            <p>Email: <a href="mailto:support@yourwebsite.com" className="text-[#8e54e9]">support@yourwebsite.com</a></p>
            <p>Phone: <a href="tel:+11234567890" className="text-[#8e54e9]">+1 (123) 456-7890</a></p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-2">Refund Policy</h3>
            <p>We do not offer refunds due to the digital nature of our products. For issues, contact support.</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-2">Terms and Conditions</h3>
            <p>By using our website, you agree to our <a href="" className="text-[#8e54e9]">Terms and Conditions</a>.</p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-2">Disclaimer</h3>
            <p>The information provided is for educational purposes. Results may vary.</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <p className="text-center">&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
