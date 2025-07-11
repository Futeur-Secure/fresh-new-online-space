
import React from "react";
import { Shield, BookOpen } from "lucide-react";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import { useNavigate } from "react-router-dom";
import AuthNav from "@/components/AuthNav";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import StatusCards from "@/components/dashboard/StatusCards";
import PlatformCard from "@/components/dashboard/PlatformCard";

const Dashboard = () => {
  const navigate = useNavigate();

  const openSecurityPlatform = () => {
    window.open("http://134.199.178.80/", "_blank");
  };

  const openDocumentation = () => {
    navigate("/documentation");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AuthNav />
      <ParticlesBackground />
      
      <main className="pt-24 pb-16 py-[95px]">
        <div className="container mx-auto px-4 relative z-10">
          {/* Welcome Section */}
          <WelcomeSection />
          
          {/* Dashboard Stats Cards */}
          <StatusCards />
          
          {/* Main Platform Access */}
          <PlatformCard 
            title="Security Platform"
            description="Connect to your Blockchain Logger and Endpoint monitoring platform for detailed security analytics and real-time monitoring."
            buttonText="Open Security Platform"
            buttonAction={openSecurityPlatform}
            icon={<Shield className="h-8 w-8 text-futeur-blue" />}
            gradientClasses="bg-gradient-to-r from-futeur-blue to-futeur-purple"
            borderClass="border-futeur-blue/30"
          />
          
          {/* Documentation Access Section */}
          <PlatformCard
            title="Documentation"
            description="Access comprehensive documentation for Hyperledger Blockchain Logging and OSSEC Endpoint Security implementation."
            buttonText="Open Documentation"
            buttonAction={openDocumentation}
            icon={<BookOpen className="h-8 w-8 text-futeur-purple" />}
            gradientClasses="bg-gradient-to-r from-futeur-purple to-futeur-lightPurple"
            borderClass="border-futeur-purple/30"
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
