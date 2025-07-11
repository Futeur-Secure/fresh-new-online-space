import { useState, useEffect, useRef } from "react";
import { ChevronRight, Shield, Database, ArrowRight, CheckCircle, ExternalLink, Sun, Moon } from "lucide-react";
import Navbar from "@/components/Navbar";
import { resetScroll } from "@/utils/navigationHelpers";
import { useTheme } from "@/context/ThemeContext";
import Footer from "@/components/Footer";

const ProductTemplate = ({
  productName = "FuteurShield", 
  tagline = "Enterprise security, simplified",
  description = "AI-powered protection that scales with your business. Get complete visibility and control over your digital assets.",
  features = [
    "AI threat detection",
    "Real-time monitoring", 
    "Global compliance",
    "24/7 expert support"
  ],
  mainFeature = "Intelligent security that learns and adapts to protect what matters most to your business.",
  primaryCTA = "Start Free Trial",
  secondaryCTA = "Schedule Demo",
  primaryPath = "/free-trial",
  secondaryPath = "/schedule-demo",
  productType = "shield",
  testimonial = {
    quote: "FuteurShield transformed our security posture. 98% fewer vulnerabilities and complete peace of mind.",
    author: "Sarah Chen",
    role: "CTO, TechForward"
  }
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const heroRef = useRef(null);
  
  // Product-specific styling
  const isShield = productType === "shield";
  const primaryColor = isShield ? "indigo" : "purple";
  const secondaryColor = isShield ? "purple" : "blue";
  
  // Dynamic theme classes
  const themeClasses = {
    // Backgrounds
    bg: isDarkMode ? "bg-[#050714]" : "bg-gray-50",
    cardBg: isDarkMode ? "bg-gray-900/30" : "bg-white/80",
    sectionBg: isDarkMode ? "bg-[#070B1A]" : "bg-white",
    
    // Text
    text: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    
    // Borders
    border: isDarkMode ? "border-gray-800" : "border-gray-200",
    borderAccent: isDarkMode ? `border-${primaryColor}-500/30` : `border-${primaryColor}-300`,
    
    // Gradients and accents
    gradient: `from-${primaryColor}-600 to-${secondaryColor}-600`,
    hoverGradient: `hover:from-${primaryColor}-500 hover:to-${secondaryColor}-500`,
    accentBg: isDarkMode ? `bg-${primaryColor}-500/10` : `bg-${primaryColor}-50`,
    glowBg: isDarkMode ? `bg-${primaryColor}-500/10` : `bg-${primaryColor}-100/50`,
  };
  
  const screens = [
    { name: "Dashboard", description: "Complete security overview" },
    { name: "Threats", description: "Intelligent threat response" },
    { name: "Reports", description: "Compliance made simple" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % screens.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [screens.length]);

  useEffect(() => {
    resetScroll();
  }, []);

  const ProductIcon = isShield ? Shield : Database;

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} transition-colors duration-300`}>
      <Navbar />
      
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full ${themeClasses.cardBg} ${themeClasses.border} border backdrop-blur-sm hover:scale-105 transition-all duration-200 shadow-lg`}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun size={20} className="text-yellow-500" />
        ) : (
          <Moon size={20} className="text-indigo-600" />
        )}
      </button>
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-b from-[#070B1A] to-[#050714]' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
          {isDarkMode && (
            <div className="absolute inset-0 bg-[url('/api/placeholder/1600/900')] bg-center opacity-5 mix-blend-overlay"></div>
          )}
        </div>
        
        {/* Grid pattern */}
        <div className={`absolute inset-0 overflow-hidden opacity-${isDarkMode ? '20' : '10'}`}>
          <div className="absolute inset-0 grid grid-cols-12 gap-4">
            {Array(12).fill(null).map((_, i) => (
              <div key={i} className={`h-full w-px bg-gradient-to-b from-transparent via-${isDarkMode ? 'gray-700' : 'gray-300'} to-transparent`}></div>
            ))}
          </div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left column */}
            <div>
              {/* Product badge */}
              <div className={`inline-flex items-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out`}>
                <div className={`rounded-full p-3 ${themeClasses.accentBg} backdrop-blur-sm`}>
                  <ProductIcon size={20} className={`text-${primaryColor}-600`} />
                </div>
                <span className={`ml-3 text-lg font-medium text-${primaryColor}-600`}>{productName}</span>
              </div>
              
              {/* Headline */}
              <h1 className={`mt-8 font-bold text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out`}>
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${themeClasses.gradient}`}>
                  {tagline}
                </span>
              </h1>
              
              {/* Description */}
              <p className={`text-xl ${themeClasses.textSecondary} mb-12 font-light max-w-xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out`}>
                {description}
              </p>
              
              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out`}>
                <a href={primaryPath} className="group">
                  <button className={`relative overflow-hidden bg-gradient-to-r ${themeClasses.gradient} ${themeClasses.hoverGradient} text-white py-4 px-8 text-lg rounded-xl transition-all duration-300 ease-out flex items-center justify-center font-medium shadow-lg hover:shadow-xl hover:scale-105`}>
                    <span className="relative z-10">{primaryCTA}</span>
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
                  </button>
                </a>
                
                <a href={secondaryPath} className="group">
                  <button className={`border ${themeClasses.borderAccent} ${themeClasses.cardBg} backdrop-blur-sm py-4 px-8 text-lg transition-all duration-300 rounded-xl flex items-center justify-center font-medium hover:scale-105 hover:shadow-lg`}>
                    {secondaryCTA}
                    <ExternalLink className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100" />
                  </button>
                </a>
              </div>
              
              {/* Social proof */}
              <div className={`mt-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-400 ease-out`}>
                <p className={`text-sm ${themeClasses.textMuted} mb-3 font-medium tracking-wide uppercase`}>Trusted by teams at</p>
                <div className="flex flex-wrap gap-6 items-center">
                  {["Acme Corp", "TechFlow", "DataSync", "CloudBase"].map((company, i) => (
                    <div key={i} className={`h-8 px-4 ${isDarkMode ? 'bg-gray-700/20' : 'bg-gray-100'} rounded-lg flex items-center justify-center ${themeClasses.textMuted} text-sm font-medium`}>
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right column - Product demo */}
            <div className={`relative h-full animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-500 ease-out`} ref={heroRef}>
              <div className={`relative rounded-2xl overflow-hidden ${themeClasses.border} border shadow-2xl ${isDarkMode ? 'shadow-purple-900/20' : 'shadow-gray-900/10'} ${isDarkMode ? 'bg-[#0A0E21]' : 'bg-white'}`}>
                {/* Browser bar */}
                <div className={`${isDarkMode ? 'bg-[#070A18]' : 'bg-gray-50'} p-4 flex items-center ${themeClasses.border} border-b`}>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className={`mx-auto px-6 py-1 rounded-full ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'} flex items-center justify-center w-2/3 text-xs ${themeClasses.textMuted}`}>
                    {productName} Dashboard • Secured
                  </div>
                </div>
                
                {/* Tabs */}
                <div className={`flex ${themeClasses.border} border-b`}>
                  {screens.map((screen, i) => (
                    <div 
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`px-6 py-4 cursor-pointer transition-all ${activeTab === i ? 
                        `border-b-2 border-${primaryColor}-500 ${themeClasses.text}` : 
                        `${themeClasses.textMuted} hover:${themeClasses.textSecondary}`}`}
                    >
                      <div className="text-sm font-medium">{screen.name}</div>
                    </div>
                  ))}
                </div>
                
                {/* Dashboard content */}
                <div className="relative overflow-hidden h-80">
                  <div className="p-6 h-full">
                    <div className="mb-6">
                      <h3 className={`text-xl font-semibold mb-2 ${themeClasses.text}`}>{screens[activeTab].name}</h3>
                      <p className={`${themeClasses.textMuted} text-sm`}>{screens[activeTab].description}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 h-full">
                      {/* Chart */}
                      <div className={`${isDarkMode ? 'bg-gray-800/30' : 'bg-gray-50'} rounded-xl p-4 h-40 ${themeClasses.border} border relative overflow-hidden`}>
                        <div className="absolute bottom-4 left-4 right-4 h-24">
                          <div className="flex h-full items-end space-x-2">
                            {[40, 65, 30, 80, 55, 75, 45, 90, 60].map((h, i) => (
                              <div 
                                key={i} 
                                className={`w-full bg-gradient-to-t from-${primaryColor}-600 to-${secondaryColor}-400 rounded-t opacity-80`} 
                                style={{height: `${h}%`, transition: 'height 1s'}}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <div className={`text-xs ${themeClasses.textMuted} absolute top-4 left-4`}>
                          Security Metrics
                        </div>
                      </div>
                      
                      {/* Status cards */}
                      <div className="space-y-4">
                        <div className={`${isDarkMode ? `bg-${primaryColor}-900/20` : `bg-${primaryColor}-50`} rounded-xl p-4 ${isDarkMode ? `border-${primaryColor}-700/30` : `border-${primaryColor}-200`} border`}>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className={`text-xs ${themeClasses.textMuted} mb-1`}>Status</div>
                              <div className={`text-${primaryColor}-600 font-semibold flex items-center`}>
                                <div className={`w-2 h-2 rounded-full bg-${primaryColor}-500 mr-2`}></div>
                                Protected
                              </div>
                            </div>
                            <Shield size={20} className={`text-${primaryColor}-600`} />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          {["99.9%", "0", "24/7", "Enterprise"].map((value, i) => (
                            <div key={i} className={`${isDarkMode ? 'bg-gray-800/30' : 'bg-gray-50'} rounded-lg p-3 ${themeClasses.border} border`}>
                              <div className={`text-xs ${themeClasses.textMuted} mb-1`}>
                                {["Uptime", "Threats", "Support", "Grade"][i]}
                              </div>
                              <div className={`font-semibold ${themeClasses.text}`}>{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Glow effects */}
                  <div className={`absolute -bottom-20 -right-20 w-64 h-64 ${themeClasses.glowBg} rounded-full blur-3xl opacity-30`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className={`relative py-24 ${themeClasses.sectionBg}`}>
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${themeClasses.text}`}>
              Why teams choose <span className={`bg-clip-text text-transparent bg-gradient-to-r ${themeClasses.gradient}`}>{productName}</span>
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary}`}>{mainFeature}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className={`${themeClasses.border} border rounded-2xl p-8 ${themeClasses.cardBg} backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 group hover:scale-105`}
                style={{ transitionDelay: `${500 + i * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${themeClasses.accentBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <CheckCircle size={24} className={`text-${primaryColor}-600`} />
                </div>
                <h3 className={`text-xl font-semibold mb-4 ${themeClasses.text}`}>{feature}</h3>
                <p className={`${themeClasses.textMuted} leading-relaxed`}>
                  Advanced capabilities designed to keep your business secure and compliant.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto rounded-3xl overflow-hidden relative ${themeClasses.borderAccent} border animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out`}>
            <div className={`${themeClasses.cardBg} backdrop-blur-sm p-12 md:p-16 relative overflow-hidden`}>
              <div className="relative z-10">
                <div className={`w-12 h-12 ${themeClasses.accentBg} rounded-xl flex items-center justify-center mb-8`}>
                  <svg viewBox="0 0 24 24" fill="none" className={`w-6 h-6 text-${primaryColor}-600`} stroke="currentColor" strokeWidth="2">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
                <blockquote className={`text-2xl md:text-3xl font-light mb-8 leading-relaxed ${themeClasses.text}`}>
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className={`mr-4 w-12 h-12 rounded-full ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-200'} flex items-center justify-center ${themeClasses.textSecondary} font-semibold`}>
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div>
                    <div className={`font-semibold ${themeClasses.text}`}>{testimonial.author}</div>
                    <div className={`${themeClasses.textMuted} text-sm`}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
              
              <div className={`absolute -bottom-20 -right-20 w-80 h-80 ${themeClasses.glowBg} rounded-full blur-3xl opacity-20`}></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className={`max-w-5xl mx-auto text-center rounded-3xl relative overflow-hidden animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${themeClasses.gradient} opacity-${isDarkMode ? '20' : '10'}`}></div>
            <div className={`absolute inset-0 backdrop-blur-xl ${isDarkMode ? 'bg-black/40' : 'bg-white/60'}`}></div>
            <div className={`absolute inset-px rounded-3xl bg-gradient-to-br ${isDarkMode ? 'from-gray-800' : 'from-gray-200'} to-transparent p-px`}></div>
            
            <div className="relative p-12 md:p-16 z-10">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${themeClasses.text}`}>
                Ready to transform your security?
              </h2>
              <p className={`text-xl ${themeClasses.textSecondary} mb-10 max-w-3xl mx-auto`}>
                Join thousands of companies that trust {productName} for enterprise-grade protection.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href={primaryPath} className="group">
                  <button className={`relative overflow-hidden bg-gradient-to-r ${themeClasses.gradient} ${themeClasses.hoverGradient} text-white py-4 px-8 text-lg rounded-xl transition-all duration-300 ease-out flex items-center justify-center w-full sm:w-auto font-medium shadow-lg hover:shadow-xl hover:scale-105`}>
                    <span className="relative z-10">{primaryCTA}</span>
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
                  </button>
                </a>
                
                <a href={secondaryPath} className="group">
                  <button className={`border ${themeClasses.borderAccent} ${themeClasses.cardBg} backdrop-blur-sm py-4 px-8 text-lg transition-all duration-300 rounded-xl flex items-center justify-center w-full sm:w-auto font-medium hover:scale-105`}>
                    {secondaryCTA}
                    <ExternalLink className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductTemplate;