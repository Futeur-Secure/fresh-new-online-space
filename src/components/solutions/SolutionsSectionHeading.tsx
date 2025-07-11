
import React from 'react';

interface SectionHeadingProps {
  theme: string;
}

const SolutionsSectionHeading: React.FC<SectionHeadingProps> = ({ theme }) => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
      <span className="text-sm uppercase tracking-wider text-futeur-blue mb-2 inline-block py-1 px-3 rounded-full bg-futeur-blue/10">
        Industry Solutions
      </span>
      <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 mt-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
        Tailored for Your <span className="gradient-text">Industry</span>
      </h2>
      <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} mb-6`}>
        Security approaches for different sectors, addressing unique challenges with specialized tools and methodologies.
      </p>
    </div>
  );
};

export default SolutionsSectionHeading;
