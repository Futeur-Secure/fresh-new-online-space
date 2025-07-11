
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesBenefits from "@/components/FeaturesBenefits";
import { resetScroll } from "@/utils/navigationHelpers";

const FeaturesPage = () => {
  useEffect(() => {
    resetScroll();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div >
        <FeaturesBenefits/>
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
