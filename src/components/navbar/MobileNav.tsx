
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { navigateToSection } from "@/utils/navigationHelpers";
import MobileProductsMenu from "./MobileProductsMenu";
import MobileSolutionsMenu from "./MobileSolutionsMenu";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {
  const navigate = useNavigate();
  
  // Mobile toggle button component
  const MobileToggle = () => (
    <button
      className="md:hidden text-foreground"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
          <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
          <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
      )}
    </button>
  );

  return (
    <>
      <div className="md:hidden flex items-center justify-end flex-1">
        <MobileToggle />
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 animate-fade-in">
          <div 
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-background border-l border-border animate-slide-in-right shadow-xl overflow-y-auto">
            <div className="sticky top-0 z-10 flex justify-end p-4 border-b border-border bg-background shadow-sm">
              <button
                className="text-foreground"
                onClick={() => setIsOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              </button>
            </div>
            <nav className="px-6 py-4 flex flex-col space-y-1 bg-background">
              <MobileProductsMenu setMobileMenuOpen={setIsOpen} />
              
              <button 
                className="flex items-center py-2 font-medium hover:text-futeur-blue transition-colors text-left"
                onClick={() => navigateToSection('features', navigate, setIsOpen)}
              >
                Features
              </button>
              
              <MobileSolutionsMenu setMobileMenuOpen={setIsOpen} />
              
              <Link to="/contact" className="py-2 font-medium hover:text-futeur-blue transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              
              <div className="flex flex-col space-y-3 pt-6 mt-2 border-t border-border">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-center text-futeur-blue hover:text-futeur-purple">
                    Log In
                  </Button>
                </Link>
                <Link to="/get-started" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-futeur-blue to-futeur-purple hover:opacity-90 transition-opacity">
                    Get Started
                  </Button>
                </Link>
                <Link to="/book-demo" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full border-white/20 hover:border-futeur-blue">
                    Book Demo
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
