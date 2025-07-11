
import React from "react";
import { Shield } from "lucide-react";

const WelcomeSection = () => {
  // Get current hour to show appropriate greeting
  const currentHour = new Date().getHours();
  let greeting = "Welcome";
  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-6">
        <div className="h-16 w-16 bg-futeur-blue/20 rounded-full flex items-center justify-center animate-pulse-slow">
          <Shield className="h-8 w-8 text-futeur-blue" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-3">
        {greeting} to <span className="gradient-text">Futeur Shield</span>
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Your advanced security monitoring platform featuring Blockchain Logging and Endpoint Security integration
      </p>
    </div>
  );
};

export default WelcomeSection;
