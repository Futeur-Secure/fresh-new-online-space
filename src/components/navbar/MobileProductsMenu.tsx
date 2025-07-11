
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navigateToSection } from "@/utils/navigationHelpers";

interface MobileProductsMenuProps {
  setMobileMenuOpen: (isOpen: boolean) => void;
}

const MobileProductsMenu = ({ setMobileMenuOpen }: MobileProductsMenuProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  
  return (
    <div className="py-2 bg-background">
      <div 
        className="flex justify-between items-center py-2 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-medium">Product</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
      {isExpanded && (
        <div className="ml-4 mt-2 space-y-2 bg-background">
          <Link 
            to="/products" 
            className="block py-2 text-sm hover:text-futeur-blue transition-colors" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Quantum Shield Platform
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileProductsMenu;
