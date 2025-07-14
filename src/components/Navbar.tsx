
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Sun, Moon, Shield, Lock, DollarSign } from "lucide-react";
import { useTheme } from "../context/ThemeContext"; // Import your theme context
import { Link } from "react-router-dom";
import { useScrollOrNavigate } from "../hooks/useScrollOrNavigate";


// Custom dropdown menu component
const NavDropdown = ({ title, children, isOpen, toggleDropdown, isDark }) => {
  return (
    <div className="relative group">
      <button 
        className={`flex items-center space-x-1 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-opacity-10 ${
          isDark 
            ? 'text-purple-200 hover:text-white hover:bg-purple-400' 
            : 'text-slate-600 hover:text-slate-900 hover:bg-blue-500'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          toggleDropdown();
        }}
      >
        <span className="font-medium text-sm">{title}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-all duration-300 ${
            isOpen ? 'rotate-180 scale-110' : ''
          }`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-3 min-w-[300px] z-50 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className={`backdrop-blur-xl border rounded-2xl shadow-2xl p-6 ${
            isDark 
              ? 'bg-slate-950/95 border-purple-500/30' 
              : 'bg-white/95 border-blue-200/50'
          }`}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

// Product card for dropdown
const ProductCard = ({ icon, title, description, isNew = false, isDark }) => {
  return (
    <div className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer group ${
      isDark 
        ? 'hover:bg-purple-900/30 hover:scale-[1.02]' 
        : 'hover:bg-blue-50 hover:scale-[1.02]'
    }`}>
      <div className={`mt-1 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
          : 'bg-gradient-to-br from-blue-500 to-purple-600'
      }`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h4>
          {isNew && (
            <span className={`ml-2 px-2 py-1 text-xs font-medium text-white rounded-full shadow-sm ${
              isDark 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600'
            }`}>
              NEW
            </span>
          )}
        </div>
        <p className={`mt-1 text-sm leading-relaxed ${
          isDark ? 'text-purple-200' : 'text-slate-600'
        }`}>
          {description}
        </p>
      </div>
    </div>
  );
};

// Theme toggle button - now uses the context
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg transition-all duration-300 ${
        isDark 
          ? 'bg-purple-900/50 text-yellow-400 hover:bg-purple-800/50' 
          : 'bg-blue-100 text-slate-600 hover:bg-blue-200'
      }`}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

// Mobile menu button
const MobileMenuButton = ({ isOpen, toggleMenu, isDark }) => {
  return (
    <button 
      className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
        isDark 
          ? 'text-white hover:bg-purple-800/50' 
          : 'text-slate-900 hover:bg-blue-100'
      }`}
      onClick={toggleMenu}
    >
      {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    </button>
  );
};

// Main Navigation component - now uses theme context
const NavigationBar = () => {
  const { theme } = useTheme(); // Get theme from context
  const isDark = theme === 'dark';

  const scrollOrNavigate = useScrollOrNavigate();

  
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobilePricingOpen, setMobilePricingOpen] = useState(false);

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <div className={`min-h-[80px] transition-colors duration-300 ${
      isDark 
        ? 'bg-slate-950' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-white'
    }`}>
      <header 
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
          scrolled 
            ? `shadow-lg backdrop-blur-xl py-3 border-b ${
                isDark 
                  ? 'bg-slate-950/90 border-purple-500/20' 
                  : 'bg-white/90 border-blue-200/30'
              }` 
            : `py-4 ${isDark ? 'bg-transparent' : 'bg-transparent'}`
        }`}
      >
      

        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
  {/* Left: Logo */}
  <div className="flex items-center">
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="relative">
        <img 
          src={isDark ? "/icon.png" : "/light-icon.png"} 
          alt="Futeur Secure Logo"
          className={`object-contain transition-all duration-300 ${
            isDark ? "w-10 h-10" : "w-8 h-8"
          }`}
        />
      </div>
      <span className={`text-xl font-bold transition-colors duration-300 ${
        isDark ? 'text-white' : 'text-slate-900'
      }`}>
        Futeur Secure
      </span>
    </Link>
  </div>

  {/* Center: Desktop Navigation */}
  <nav className="ml-[-120px] hidden lg:flex items-center space-x-2">
    <div className="dropdown-trigger" onClick={(e) => e.stopPropagation()}>
      <NavDropdown 
        title="Products" 
        isOpen={openDropdown === 'products'}
        toggleDropdown={() => toggleDropdown('products')}
        isDark={isDark}
      >
        <div className="space-y-2 dropdown-content">
          <Link to="/shield" onClick={() => setOpenDropdown(null)}>
            <ProductCard 
              icon={<Shield className="w-4 h-4" />} 
              title="Futeur Shield" 
              description="Enterprise-grade security solution for businesses of all sizes with advanced threat detection."
              isDark={isDark}
            />
          </Link>
          <Link to="/vault" onClick={() => setOpenDropdown(null)}>
            <ProductCard 
              icon={<Lock className="w-4 h-4" />} 
              title="Futeur Vault" 
              description="Secure vault storage for sensitive data with end-to-end encryption and compliance."
              isNew={true}
              isDark={isDark}
            />
          </Link>
        </div>
      </NavDropdown>
    </div>

    <div className="dropdown-trigger" onClick={(e) => e.stopPropagation()}>
      <NavDropdown 
        title="Pricing" 
        isOpen={openDropdown === 'pricing'}
        toggleDropdown={() => toggleDropdown('pricing')}
        isDark={isDark}
      >
        <div className="space-y-2 dropdown-content">
          <Link to="/pricing" onClick={() => setOpenDropdown(null)}>
            <ProductCard 
              icon={<DollarSign className="w-4 h-4" />} 
              title="FuteurVault Pricing" 
              description="Compare plans and find the perfect security solution for your team size and needs."
              isDark={isDark}
            />
          </Link>
        </div>
      </NavDropdown>
    </div>

    <button
      className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-opacity-10 ${
        isDark 
          ? 'text-purple-200 hover:text-white hover:bg-purple-400' 
          : 'text-slate-600 hover:text-slate-900 hover:bg-blue-500'
      }`}
      onClick={() => {
        setOpenDropdown(null);
        scrollOrNavigate("features", "/features");
      }}
    >
      Features
    </button>

    <button
      className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-opacity-10 ${
        isDark 
          ? 'text-purple-200 hover:text-white hover:bg-purple-400' 
          : 'text-slate-600 hover:text-slate-900 hover:bg-blue-500'
      }`}
      onClick={() => {
        setOpenDropdown(null);
        scrollOrNavigate("solutions", "/solutions");
      }}
    >
      Solutions
    </button>

    <button
      className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-opacity-10 ${
        isDark 
          ? 'text-purple-200 hover:text-white hover:bg-purple-400' 
          : 'text-slate-600 hover:text-slate-900 hover:bg-blue-500'
      }`}
      onClick={() => {
        scrollOrNavigate("contact", "/contact");
        setOpenDropdown(null);
      }}
    >
      Contact
    </button>
  </nav>

  {/* Right: Theme toggle & Mobile menu */}
  <div className="flex items-center space-x-3">
    <ThemeToggle />
    <MobileMenuButton 
      isOpen={mobileMenuOpen} 
      toggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      isDark={isDark}
    />
  </div>
</div>




        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-t backdrop-blur-xl py-6 px-6 animate-in slide-in-from-top-2 duration-300 ${
            isDark 
              ? 'bg-slate-950/95 border-purple-500/30' 
              : 'bg-white/95 border-blue-200/30'
          }`}>
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)} 
                className={`flex justify-between items-center w-full py-3 px-4 text-left font-medium rounded-lg transition-colors duration-300 ${
                  isDark 
                    ? 'text-white hover:bg-purple-800/50' 
                    : 'text-slate-900 hover:bg-blue-100'
                }`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileProductsOpen && (
                <div className={`ml-4 pl-4 border-l-2 flex flex-col space-y-3 animate-in slide-in-from-left-1 duration-200 ${
                  isDark 
                    ? 'border-purple-500' 
                    : 'border-blue-500'
                }`}>
                  <Link to="/shield" onClick={() => setMobileMenuOpen(false)}>
                    <button className={`w-full text-left py-2 px-3 rounded-lg transition-colors duration-300 ${
                      isDark 
                        ? 'text-purple-200 hover:text-white hover:bg-purple-800/50' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-blue-100'
                    }`}>
                      Futeur Shield
                    </button>
                  </Link>

                  <Link to="/vault" onClick={() => setMobileMenuOpen(false)}>
                    <button className={`w-full text-left py-2 px-3 rounded-lg transition-colors duration-300 ${
                      isDark 
                        ? 'text-purple-200 hover:text-white hover:bg-purple-800/50' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-blue-100'
                    }`}>
                      Futeur Vault
                    </button>
                  </Link>
                </div>
              )}

              <button 
                onClick={() => setMobilePricingOpen(!mobilePricingOpen)} 
                className={`flex justify-between items-center w-full py-3 px-4 text-left font-medium rounded-lg transition-colors duration-300 ${
                  isDark 
                    ? 'text-white hover:bg-purple-800/50' 
                    : 'text-slate-900 hover:bg-blue-100'
                }`}
              >
                Pricing
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobilePricingOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobilePricingOpen && (
                <div className={`ml-4 pl-4 border-l-2 flex flex-col space-y-3 animate-in slide-in-from-left-1 duration-200 ${
                  isDark 
                    ? 'border-purple-500' 
                    : 'border-blue-500'
                }`}>
                  <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
                    <button className={`w-full text-left py-2 px-3 rounded-lg transition-colors duration-300 ${
                      isDark 
                        ? 'text-purple-200 hover:text-white hover:bg-purple-800/50' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-blue-100'
                    }`}>
                      FuteurVault Pricing
                    </button>
                  </Link>
                </div>
              )}

              
              <button
                className={`py-3 px-4 text-left w-full rounded-lg font-medium transition-colors duration-300 ${
                  isDark 
                    ? 'text-white hover:bg-purple-800/50' 
                    : 'text-slate-900 hover:bg-blue-100'
                }`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollOrNavigate("features", "/");
                }}
              >
                Features
              </button>
              
              <button
                className={`py-3 px-4 text-left w-full rounded-lg font-medium transition-colors duration-300 ${
                  isDark 
                    ? 'text-white hover:bg-purple-800/50' 
                    : 'text-slate-900 hover:bg-blue-100'
                }`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollOrNavigate("solutions", "/");
                }}
              >
                Solutions
              </button>
              
              <button className={`py-3 px-4 text-left rounded-lg font-medium transition-colors duration-300 ${
                isDark 
                  ? 'text-white hover:bg-purple-800/50' 
                  : 'text-slate-900 hover:bg-blue-100'
              }`}>
                Contact
              </button>
              
              <div className={`pt-4 mt-4 border-t flex flex-col space-y-3 ${
                isDark ? 'border-purple-700/50' : 'border-blue-200'
              }`}>
                <Link to="/login">
                  <button className={`py-3 px-4 font-medium text-center rounded-lg transition-colors duration-300 ${
                    isDark 
                      ? 'text-white hover:bg-purple-800/50' 
                      : 'text-slate-900 hover:bg-blue-100'
                  }`}>
                    Log In
                  </button>
                </Link>

                <Link to="/get-started">
                  <button className={`py-3 px-4 rounded-xl font-medium text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white ${
                    isDark
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600'
                  }`}>
                    Get Started
                  </button>
                </Link>

              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default NavigationBar;
