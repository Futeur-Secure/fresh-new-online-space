
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { resetScroll } from "@/utils/navigationHelpers";

const Contact = () => {
  useEffect(() => {
    resetScroll();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div >
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
