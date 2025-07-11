
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSolutionsSection";
import AnimatedTextSection from "@/components/AnimatedTextSection";
import TestimonialCarousel from "@/components/TestimonaiCarousel";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FeaturesBenefitsSection from "@/components/FeaturesBenefits";
import DevicePreviewSection from "@/components/DevicePreviewSection";
import { resetScroll } from "@/utils/navigationHelpers";

const Index = () => {
  useEffect(() => {
    resetScroll();
  }, []);

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AnimatedTextSection />
        <DevicePreviewSection />
        <FeaturesBenefitsSection/>
        <ProductsSection />
        {/* <CTASection /> */}
        <TestimonialCarousel />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
