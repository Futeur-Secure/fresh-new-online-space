
import React from "react";
import { BookOpen } from "lucide-react";

const DocHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-6">
        <div className="h-16 w-16 bg-futeur-lightPurple/20 rounded-full flex items-center justify-center">
          <BookOpen className="h-8 w-8 text-futeur-lightPurple" />
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-3">
        Security <span className="gradient-text">Documentation</span>
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Learn about our integrated security technologies and how they protect your systems
      </p>
    </div>
  );
};

export default DocHeader;
