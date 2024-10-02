import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import Service from "@/sections/Service";
/*import { Pricing } from "@/sections/Pricing";*/
import ProductShowcase from '@/sections/ProductShowcase';
import AItoolsSection from '@/sections/AiToolsSection'
import WhyUs from '@/sections/WhyUs'; // Import the Why Us section
import ExplorePrompts from "@/sections/ExplorePrompts";
import { Testimonials } from "@/sections/Testimonials";
import ServicesSection from "@/sections/ServicesSection"; // Import the new Services section
import BonusSection from "@/sections/BonusSection";
import Certification from "@/sections/Certification";
import FAQ from "@/sections/FAQ";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <Service/>
      <ServicesSection />
      <AItoolsSection />
      <ProductShowcase />
      <WhyUs /> 
      <ExplorePrompts/>
      <BonusSection/>
      <Certification/>
      {/* Add the Why Us section here */}
       {/* Add the Services section here */}
      <Testimonials />
<FAQ/>
      
      <Footer />
    </div>
  );
}
