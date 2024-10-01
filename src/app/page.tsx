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
import { Testimonials } from "@/sections/Testimonials";
import ServicesSection from "@/sections/ServicesSection"; // Import the new Services section

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
      
      {/* Add the Why Us section here */}
       {/* Add the Services section here */}
      <Testimonials />
      
      <Footer />
    </div>
  );
}
