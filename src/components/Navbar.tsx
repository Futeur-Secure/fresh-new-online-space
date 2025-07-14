
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Sun, Moon, Shield, Lock } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { useScrollOrNavigate } from "../hooks/useScrollOrNavigate";

// Enhanced glass dropdown with better visibility
const NavDropdown = ({ title, children, isOpen, toggleDropdown }) => {
  return (
    <div className="relative group">
      <button 
        className="flex items-center space-x-1 transition-all duration-300 py-2 px-4 rounded-full text-slate-700 hover:text-slate-900 hover:bg-white/40 backdrop-blur-sm"
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown();
        }}
      >
        <span className="font-medium text-sm">{title}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-all duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 min-w-[320px] z-50 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="backdrop-blur-xl bg-white/90 border border-white/30 rounded-3xl shadow-2xl p-6 ring-1 ring-black/5">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

// Clean product card with light theme
const ProductCard = ({ icon, title, description, isNew = false }) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer group hover:bg-white/50 hover:scale-[1.02]">
      <div className="mt-1 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <h4 className="font-semibold text-slate-900">
            {title}
          </h4>
          {isNew && (
            <span className="ml-2 px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-sm">
              NEW
            </span>
          )}
        </div>
        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
};

// Enhanced theme toggle with glass effect
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full transition-all duration-300 backdrop-blur-sm bg-white/40 hover:bg-white/60 text-slate-700 hover:text-slate-900 shadow-lg hover:shadow-xl"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

// Glass mobile menu button
const MobileMenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <button 
      className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 backdrop-blur-sm bg-white/40 hover:bg-white/60 text-slate-700 hover:text-slate-900 shadow-lg hover:shadow-xl"
      onClick={toggleMenu}
    >
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  );
};

// Main Navigation - Apple Dynamic Island inspired
const NavigationBar = () => {
  const { theme } = useTheme();
  const scrollOrNavigate = useScrollOrNavigate();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for enhanced glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dropdown toggling
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.dropdown-content') && !e.target.closest('.dropdown-trigger')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      {/* Dynamic Island Style Header */}
      <header className={`w-full transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="w-full max-w-6xl mx-auto px-6">
          {/* Glass container with dynamic island effect */}
          <div className={`backdrop-blur-xl bg-white/80 border border-white/30 rounded-full shadow-2xl transition-all duration-500 px-8 py-4 ring-1 ring-black/5 ${
            scrolled ? 'shadow-xl' : 'shadow-2xl'
          }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img 
                    src="/light-icon.png"
                    alt="Futeur Secure Logo"
                    className="w-10 h-10 object-contain transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                  Futeur Secure
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-2">
                <div className="dropdown-trigger" onClick={(e) => e.stopPropagation()}>
                  <NavDropdown 
                    title="Products" 
                    isOpen={openDropdown === 'products'}
                    toggleDropdown={() => toggleDropdown('products')}
                  >
                    <div className="space-y-2 dropdown-content">
                      <Link to="/shield" onClick={() => setOpenDropdown(null)}>
                        <ProductCard 
                          icon={<Shield className="w-5 h-5" />} 
                          title="Futeur Shield" 
                          description="Enterprise-grade security solution with advanced threat detection and AI-powered protection."
                        />
                      </Link>
                      <Link to="/vault" onClick={() => setOpenDropdown(null)}>
                        <ProductCard 
                          icon={<Lock className="w-5 h-5" />} 
                          title="Futeur Vault" 
                          description="Secure vault storage for sensitive data with end-to-end encryption and compliance."
                          isNew={true}
                        />
                      </Link>
                    </div>
                  </NavDropdown>
                </div>

                <button
                  className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 text-slate-700 hover:text-slate-900 hover:bg-white/40 backdrop-blur-sm"
                  onClick={() => {
                    setOpenDropdown(null);
                    scrollOrNavigate("features", "/features");
                  }}
                >
                  Features
                </button>

                <button
                  className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 text-slate-700 hover:text-slate-900 hover:bg-white/40 backdrop-blur-sm"
                  onClick={() => {
                    setOpenDropdown(null);
                    scrollOrNavigate("solutions", "/solutions");
                  }}
                >
                  Solutions
                </button>

                <button
                  className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 text-slate-700 hover:text-slate-900 hover:bg-white/40 backdrop-blur-sm"
                  onClick={() => {
                    scrollOrNavigate("contact", "/contact");
                    setOpenDropdown(null);
                  }}
                >
                  Contact
                </button>
              </nav>

              {/* Right side actions */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                <MobileMenuButton 
                  isOpen={mobileMenuOpen} 
                  toggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 mx-6 animate-in slide-in-from-top-2 duration-300">
            <div className="backdrop-blur-xl bg-white/90 border border-white/30 rounded-3xl shadow-2xl p-6 ring-1 ring-black/5">
              <nav className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <button 
                    className="w-full text-left py-3 px-4 text-slate-900 font-medium rounded-2xl hover:bg-white/50 transition-colors duration-300"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      scrollOrNavigate("features", "/features");
                    }}
                  >
                    Features
                  </button>
                  
                  <button 
                    className="w-full text-left py-3 px-4 text-slate-900 font-medium rounded-2xl hover:bg-white/50 transition-colors duration-300"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      scrollOrNavigate("solutions", "/solutions");
                    }}
                  >
                    Solutions
                  </button>
                  
                  <button 
                    className="w-full text-left py-3 px-4 text-slate-900 font-medium rounded-2xl hover:bg-white/50 transition-colors duration-300"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      scrollOrNavigate("contact", "/contact");
                    }}
                  >
                    Contact
                  </button>
                </div>
                
                <div className="pt-4 mt-4 border-t border-white/30 space-y-3">
                  <Link to="/shield" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full text-left py-3 px-4 text-slate-700 rounded-2xl hover:bg-white/50 transition-colors duration-300">
                      Futeur Shield
                    </button>
                  </Link>

                  <Link to="/vault" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full text-left py-3 px-4 text-slate-700 rounded-2xl hover:bg-white/50 transition-colors duration-300">
                      Futeur Vault
                    </button>
                  </Link>
                </div>

                <div className="pt-4 mt-4 border-t border-white/30 space-y-3">
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full py-3 px-4 text-slate-700 font-medium text-center rounded-2xl hover:bg-white/50 transition-colors duration-300">
                      Log In
                    </button>
                  </Link>

                  <Link to="/get-started" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full py-3 px-4 rounded-2xl font-medium text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white bg-gradient-to-r from-blue-500 to-purple-600">
                      Get Started
                    </button>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default NavigationBar;
