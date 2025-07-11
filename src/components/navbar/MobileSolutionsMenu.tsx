
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToSection } from "@/utils/navigationHelpers";

interface MobileSolutionsMenuProps {
  setMobileMenuOpen: (isOpen: boolean) => void;
}

const MobileSolutionsMenu = ({ setMobileMenuOpen }: MobileSolutionsMenuProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  // Helper function for navigation with section scrolling
  const navigateToSolutionSection = (sectionId: string) => {
    navigateToSection('solutions', navigate, setMobileMenuOpen);
    
    // Set a timeout to ensure the page has loaded before scrolling to specific section
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };
  
  return (
    <div className="py-2 bg-background">
      <div 
        className="flex justify-between items-center py-2 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-medium">Solutions</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
      {isExpanded && (
        <div className="ml-4 mt-2 space-y-2 bg-background">
          <button 
            className="block py-1 text-sm hover:text-futeur-blue transition-colors w-full text-left"
            onClick={() => navigateToSection('solutions', navigate, setMobileMenuOpen)}
          >
            All Solutions
          </button>
          <button 
            className="block py-1 text-sm hover:text-futeur-blue transition-colors w-full text-left"
            onClick={() => navigateToSolutionSection('enterprise')}
          >
            Enterprise
          </button>
          <button 
            className="block py-1 text-sm hover:text-futeur-blue transition-colors w-full text-left"
            onClick={() => navigateToSolutionSection('financial')}
          >
            Financial Services
          </button>
          <button 
            className="block py-1 text-sm hover:text-futeur-blue transition-colors w-full text-left"
            onClick={() => navigateToSolutionSection('healthcare')}
          >
            Healthcare
          </button>
          <button 
            className="block py-1 text-sm hover:text-futeur-blue transition-colors w-full text-left"
            onClick={() => navigateToSolutionSection('government')}
          >
            Government
          </button>
          <button 
            className="block py-1 text-sm hover:text-futeur-blue transition-colors w-full text-left"
            onClick={() => navigateToSolutionSection('education')}
          >
            Education
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileSolutionsMenu;
