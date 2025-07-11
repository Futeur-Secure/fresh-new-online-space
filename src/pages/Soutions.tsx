
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductsSolutions from "@/components/ProductsSolutionsSection";
import { resetScroll } from "@/utils/navigationHelpers";

const SolutionsPage = () => {
  useEffect(() => {
    resetScroll();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div >
        <ProductsSolutions/>
      </div>
      <Footer />
    </div>
  );
};

export default SolutionsPage;