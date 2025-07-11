  import { useState, useEffect, useRef } from "react";
  import { Shield, Database, FileText, Network, ChevronRight, Zap, Lock, Globe, Layers, Cpu, Server, ArrowRight } from "lucide-react";
  import { useTheme } from "../context/ThemeContext";

  // Enhanced product data with more realistic color schemes and industry details
  const productsAndSolutions = [
    {
      id: "enterprise-security",
      title: "Enterprise Security",
      description: "Comprehensive protection for your organization's critical assets and infrastructure",
      icon: <Shield className="w-6 h-6" />,
      color: "from-emerald-600 to-teal-800",
      accentColor: "emerald-400",
      industries: [
        { name: "Financial", icon: <Layers className="w-4 h-4" />, description: "Secure banking systems and financial data" },
        { name: "Healthcare", icon: <Cpu className="w-4 h-4" />, description: "HIPAA-compliant protection for patient information" },
        { name: "Government", icon: <Server className="w-4 h-4" />, description: "Defense-grade security for public sector" }
      ],
      visual: "shield",
      caseStudy: "Reduced security incidents by 87% for Global Financial Corp"
    },
    {
      id: "data-integrity",
      title: "Data Integrity",
      description: "Immutable record-keeping and verification throughout your entire data lifecycle",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-700 to-indigo-900",
      accentColor: "blue-400",
      industries: [
        { name: "Supply Chain", icon: <Layers className="w-4 h-4" />, description: "Track products from source to consumer" },
        { name: "Legal", icon: <FileText className="w-4 h-4" />, description: "Tamper-proof document management" },
        { name: "Retail", icon: <Server className="w-4 h-4" />, description: "Secure transaction validation" }
      ],
      visual: "blockchain",
      caseStudy: "Streamlined legal verification process by 65% for LexCorp Partners"
    },
    {
      id: "device-protection",
      title: "Device Protection",
      description: "End-to-end security for all connected devices across your organizational network",
      icon: <Lock className="w-6 h-6" />,
      color: "from-amber-600 to-orange-800",
      accentColor: "amber-400",
      industries: [
        { name: "Remote Work", icon: <Globe className="w-4 h-4" />, description: "Secure access for distributed teams" },
        { name: "Education", icon: <FileText className="w-4 h-4" />, description: "Safe learning environments for students" },
        { name: "Manufacturing", icon: <Cpu className="w-4 h-4" />, description: "Protected industrial systems" }
      ],
      visual: "device",
      caseStudy: "Protected 15,000+ endpoints for Midwest Manufacturing Inc."
    },
    {
      id: "threat-intelligence",
      title: "Threat Intelligence",
      description: "AI-powered monitoring and response to detect and neutralize emerging threats",
      icon: <Network className="w-6 h-6" />,
      color: "from-violet-700 to-purple-900",
      accentColor: "violet-400",
      industries: [
        { name: "Telecom", icon: <Zap className="w-4 h-4" />, description: "Network security for service providers" },
        { name: "Infrastructure", icon: <Server className="w-4 h-4" />, description: "Critical infrastructure protection" },
        { name: "E-Commerce", icon: <Globe className="w-4 h-4" />, description: "Fraud prevention and detection" }
      ],
      visual: "network",
      caseStudy: "Prevented $4.2M in potential breach damages for TechRetail"
    }
  ];

  // Enhanced animation helper
  const useIntersectionObserver = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold }
      );
      
      if (ref.current) {
        observer.observe(ref.current);
      }
      
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [threshold]);
    
    return [ref, isVisible];
  };

  // Enhanced visual components with more sophisticated designs
  const ProductVisual = ({ type, color, accentColor }) => {
    const baseColor = color.split('from-')[1].split(' ')[0];
    
    // Different visuals based on product type
    const visuals = {
      shield: (
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Ambient glow */}
            <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${color} animate-pulse-slow opacity-20 blur-lg`}></div>
            
            {/* Main shield */}
            <div className="relative z-10">
              <svg width="200" height="240" viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M100 10L180 50V130C180 170 145 200 100 230C55 200 20 170 20 130V50L100 10Z" 
                  fill={`url(#shield-gradient-${baseColor})`}
                  className="opacity-20"
                />
                <path 
                  d="M100 20L170 55V125C170 160 140 185 100 210C60 185 30 160 30 125V55L100 20Z" 
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  className="opacity-30"
                />
                <defs>
                  <linearGradient id={`shield-gradient-${baseColor}`} x1="20" y1="10" x2="180" y2="230" gradientUnits="userSpaceOnUse">
                    <stop stopColor={`rgb(var(--${accentColor}))`} />
                    <stop offset="1" stopColor={`rgb(var(--${baseColor}))`} />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Central icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 transform animate-float">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-1/4 left-1/4 transform animate-float-delay">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute top-1/3 left-1/5 transform animate-float-slow">
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <Server className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Pulsing rings */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-40 h-40 rounded-full border border-white/10 animate-ping-slow"></div>
                <div className="w-60 h-60 rounded-full border border-white/5 animate-ping-slower"></div>
              </div>
            </div>
          </div>
        </div>
      ),
      blockchain: (
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Ambient background */}
            <div className={`w-40 h-40 rounded-lg bg-gradient-to-br ${color} animate-pulse-slow opacity-20 blur-lg`}></div>
            
            {/* Connected blocks visualization */}
            <div className="relative z-10 w-80">
              <div className="mb-4 w-full flex items-center">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="px-4 text-white/50 text-sm">SECURE LEDGER</div>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-white/20 to-transparent"></div>
              </div>
              
              {/* Blockchain */}
              <div className="relative">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="relative mb-6"
                    style={{
                      transform: `translateX(${i % 2 === 0 ? '0' : '100px'})`,
                      opacity: 1 - (i * 0.15)
                    }}
                  >
                    <div className={`w-44 h-16 rounded-lg border backdrop-blur-sm flex items-center
                      ${i === 0 ? `border-${accentColor} bg-${accentColor}/10` : 'border-white/20 bg-white/5'}`}
                    >
                      <div className="flex-1 px-4 flex items-center">
                        <Database className={`w-6 h-6 ${i === 0 ? `text-${accentColor}` : 'text-white/70'}`} />
                        <div className="ml-2">
                          <div className="h-1.5 w-16 bg-white/30 rounded-full"></div>
                          <div className="h-1.5 w-10 bg-white/20 rounded-full mt-1.5"></div>
                        </div>
                      </div>
                      <div className={`w-8 h-8 mr-3 rounded-md flex items-center justify-center
                        ${i === 0 ? `bg-${accentColor}/20` : 'bg-white/10'}`}
                      >
                        <div className="text-xs text-white font-mono">
                          {i.toString().padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                    
                    {/* Connecting line */}
                    {i < 4 && (
                      <div className="absolute top-full left-1/2 h-6 w-px bg-white/20 z-10">
                        <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full
                          ${i === 0 ? `bg-${accentColor}` : 'bg-white/30'}`}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Data stream effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white/0 via-white/20 to-white/0 animate-data-stream"></div>
                <div className="absolute top-1/4 right-1/3 w-px h-3/4 bg-gradient-to-b from-white/0 via-white/10 to-white/0 animate-data-stream-delay"></div>
              </div>
            </div>
          </div>
        </div>
      ),
      device: (
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Ambient background */}
            <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${color} animate-pulse-slow opacity-20 blur-lg`}></div>
            
            {/* Main device */}
            <div className="relative z-10">
              {/* Laptop */}
              <div className="relative">
                <div className="w-64 h-40 rounded-t-xl bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center perspective">
                  <div className="w-48 h-28 rounded-lg bg-gradient-to-br from-white/10 to-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="w-12 h-12 text-white/30" />
                    </div>
                    
                    {/* Screen content */}
                    <div className="absolute inset-x-0 top-3 h-4 flex justify-center space-x-1">
                      <div className="w-8 h-1 bg-white/30 rounded-full"></div>
                      <div className="w-4 h-1 bg-white/20 rounded-full"></div>
                      <div className="w-6 h-1 bg-white/30 rounded-full"></div>
                    </div>
                    
                    <div className="absolute inset-x-0 top-10 h-4 flex justify-center space-x-1">
                      <div className="w-6 h-1 bg-white/20 rounded-full"></div>
                      <div className="w-10 h-1 bg-white/30 rounded-full"></div>
                      <div className="w-4 h-1 bg-white/20 rounded-full"></div>
                    </div>
                    
                    {/* Data scanning animation */}
                    <div className="absolute inset-x-0 top-0 h-full">
                      <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent transform animate-scan"></div>
                    </div>
                  </div>
                </div>
                
                {/* Laptop base */}
                <div className="w-64 h-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-b-lg"></div>
              </div>
              
              {/* Protection elements */}
              <div className="absolute -inset-6">
                {/* Protection ring */}
                <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="150" cy="150" r="130" stroke={`rgb(var(--${accentColor}))`} strokeWidth="1" strokeDasharray="2 4" className="opacity-40" />
                  <circle cx="150" cy="150" r="100" stroke="white" strokeWidth="0.5" strokeDasharray="1 2" className="opacity-20" />
                </svg>
                
                {/* Security nodes */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center animate-float`}>
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center animate-float-delay`}>
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center animate-float-slow`}>
                    <Database className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center animate-float`}>
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      network: (
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Ambient background */}
            <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${color} animate-pulse-slow opacity-20 blur-lg`}></div>
            
            {/* Network visualization */}
            <div className="relative z-10">
              {/* Central hub */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center border border-white/30`}>
                  <Network className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Network paths */}
              <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Inner circle */}
                <circle cx="160" cy="160" r="70" stroke="white" strokeWidth="0.5" strokeDasharray="2 3" className="opacity-40" />
                
                {/* Outer circle */}
                <circle cx="160" cy="160" r="120" stroke="white" strokeWidth="0.5" strokeDasharray="1 2" className="opacity-20" />
                
                {/* Connection lines */}
                <line x1="160" y1="90" x2="160" y2="40" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-60" />
                <line x1="160" y1="230" x2="160" y2="280" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-60" />
                <line x1="90" y1="160" x2="40" y2="160" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-60" />
                <line x1="230" y1="160" x2="280" y2="160" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-60" />
                
                {/* Diagonal connections */}
                <line x1="208" y1="112" x2="250" y2="70" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-40" />
                <line x1="112" y1="208" x2="70" y2="250" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-40" />
                <line x1="208" y1="208" x2="250" y2="250" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-40" />
                <line x1="112" y1="112" x2="70" y2="70" stroke="white" strokeWidth="0.5" strokeDasharray="2 2" className="opacity-40" />
                
                {/* Data pulses */}
                <circle cx="160" cy="90" r="3" fill="white" className="opacity-80 animate-pulse-node" />
                <circle cx="160" cy="230" r="3" fill="white" className="opacity-80 animate-pulse-node-delay" />
                <circle cx="90" cy="160" r="3" fill="white" className="opacity-80 animate-pulse-node-delay2" />
                <circle cx="230" cy="160" r="3" fill="white" className="opacity-80 animate-pulse-node" />
                
                {/* Threat detection markers */}
                <circle cx="250" cy="70" r="5" fill="red" className="opacity-50 animate-pulse-threat" />
                <circle cx="70" cy="250" r="5" fill="red" className="opacity-50 animate-pulse-threat-delay" />
              </svg>
              
              {/* Network nodes */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Server className="w-6 h-6 text-white/70" />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Database className="w-6 h-6 text-white/70" />
                </div>
              </div>
              
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white/70" />
                </div>
              </div>
              
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white/70" />
                </div>
              </div>
              
              {/* Threat nodes */}
              <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3">
                <div className="w-10 h-10 rounded-full bg-red-900/30 backdrop-blur-sm border border-red-500/30 flex items-center justify-center animate-pulse-slow opacity-80">
                  <div className="text-red-500 text-xs font-mono">⚠</div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3">
                <div className="w-10 h-10 rounded-full bg-red-900/30 backdrop-blur-sm border border-red-500/30 flex items-center justify-center animate-pulse-slow-delay opacity-80">
                  <div className="text-red-500 text-xs font-mono">⚠</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    };
    
    return visuals[type] || visuals.shield;
  };



  const IndustryCard = ({ industry, active, color }) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
  
    return (
      <div
        className={`p-4 rounded-lg transition-all duration-300 ${
          active
            ? `bg-gradient-to-br ${color} border ${isDark ? 'border-white/10' : 'border-slate-300'}`
            : isDark
              ? 'bg-white/5 hover:bg-white/10 border border-white/5'
              : 'bg-slate-50 hover:bg-slate-100 border border-slate-200'
        }`}
      >
        <div className="flex items-start">
          <div
            className={`p-2 rounded-md mr-3 ${
              active
                ? isDark
                  ? 'bg-white/20'
                  : 'bg-indigo-100'
                : isDark
                  ? 'bg-white/10'
                  : 'bg-white-200'
            }`}
          >
            {industry.icon}
          </div>
          <div>
            <h4
              className={`text-sm font-medium ${
                active
                  ? isDark
                    ? 'text-white'
                    : 'text-white'
                  : isDark
                    ? 'text-gray-300'
                    : 'text-slate-700'
              }`}
            >
              {industry.name}
            </h4>
            <p
              className={`text-xs mt-1 ${
                active
                  ? isDark
                    ? 'text-white/80'
                    : 'text-white'
                  : isDark
                    ? 'text-gray-400'
                    : 'text-slate-500'
              }`}
            >
              {industry.description}
            </p>
          </div>
        </div>
      </div>
    );
  };
  

  // Case study card component
  const CaseStudyCard = ({ caseStudy, color }) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";
  
    return (
      <div
        className={`mt-4 p-4 rounded-lg relative overflow-hidden transition-all duration-300
          ${isDark ? "bg-white/5 border-white/10 text-gray-300" : "bg-slate-50 border-slate-200 text-slate-700"}
          border`}
      >
        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${color}`}></div>
  
        <div className="flex items-center">
          <div className={`text-sm font-medium ${isDark ? "text-white" : "text-slate-900"}`}>Case Study</div>
          <div className={`ml-2 px-2 py-0.5 rounded-full text-xs
            ${isDark ? "bg-white/10 text-white/70" : "bg-slate-200 text-slate-600"}`}>
            Result
          </div>
        </div>
  
        <p className={`mt-2 text-sm ${isDark ? "text-gray-300" : "text-slate-700"}`}>
          {caseStudy}
        </p>
      </div>
    );
  };
  

  const ProductSolutionsSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [sectionRef, isVisible] = useIntersectionObserver(0.1);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const productInterval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % productsAndSolutions.length);
      setActiveIndustry(0);
    }, 15000);
    return () => clearInterval(productInterval);
  }, []);

  useEffect(() => {
    const industryInterval = setInterval(() => {
      setActiveIndustry((prev) =>
        (prev + 1) % productsAndSolutions[activeProduct].industries.length
      );
    }, 5000);
    return () => clearInterval(industryInterval);
  }, [activeProduct]);

  const currentProduct = productsAndSolutions[activeProduct];

  return (
    <section
    id="solutions"
    ref={sectionRef as React.RefObject<HTMLElement>}
    className={`relative py-24 overflow-hidden transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-slate-950 to-slate-900 text-white'
        : 'bg-gray-50 text-slate-800'
    }`}
  >
        
      {/* Background glow */}
      <div className={`absolute w-full h-full flex items-center justify-center opacity-30 transition-all duration-1000 ease-in-out`}>
        <div className={`w-[800px] h-[800px] rounded-full bg-gradient-to-br ${currentProduct?.color || "from-blue-500 to-blue-600"} blur-3xl opacity-10`}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-8'}`}>
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
            theme === 'dark'
              ? 'bg-white/10 text-white/80 border border-white/20' 
              : 'bg-slate-100 text-slate-700 border border-slate-200'
          }`}>
            Enterprise Solutions
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-5xl mb-4 tracking-tight">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
              theme === 'dark' 
                ? 'from-white via-white to-blue-100' 
                : 'from-slate-900 via-slate-900 to-blue-600'
            }`}>
              Next-Generation
            </span>
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${
              theme === 'dark' 
                ? 'from-white/80 to-blue-400' 
                : 'from-slate-800 to-blue-500'
            }`}>
              {" "}Solutions
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Our comprehensive suite of security solutions provides end-to-end protection for organizations of all sizes across various industries.
          </p>
        </div>

        {/* Main interactive section */}
        <div className={`transition-all duration-1000 delay-200 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left side: Product navigation */}
              <div className="lg:col-span-3 space-y-4">
                <div className={`p-6 rounded-2xl backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-white/80 border-slate-200/50'
                }`}>
                  <h3 className={`text-xl font-medium mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-800'
                  }`}>Solutions</h3>
                  <div className="space-y-3">
                    {productsAndSolutions.map((product, index) => (
                      <button
                        key={product.id}
                        onClick={() => {
                          setActiveProduct(index);
                          setActiveIndustry(0);
                        }}
                        className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center ${
                          activeProduct === index 
                            ? `bg-gradient-to-r ${product.color}` 
                            : theme === 'dark' 
                              ? 'bg-white/5 hover:bg-white/10' 
                              : 'bg-slate-50 hover:bg-slate-100'
                        }`}
                      >
                        <div className={`p-2 rounded-lg mr-3 ${
                          activeProduct === index 
                            ? 'bg-white/20' 
                            : theme === 'dark' 
                              ? 'bg-white/10' 
                              : 'bg-slate-200/50'
                        }`}>
                          {product.icon}
                        </div>
                        <div className={`font-medium ${
                          activeProduct === index 
                            ? 'text-white' 
                            : theme === 'dark' 
                              ? 'text-slate-200' 
                              : 'text-slate-700'
                        }`}>
                          {product.title}
                        </div>
                        {activeProduct === index && (
                          <div className="ml-auto">
                            <ChevronRight className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Case study card */}
                <CaseStudyCard 
                  caseStudy={currentProduct.caseStudy} 
                  color={currentProduct.color}
                />
              </div>

              {/* Center: Visualization */}
              <div className="lg:col-span-5">
                <div className={`aspect-square rounded-3xl overflow-hidden relative backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-black/40 border-white/5' 
                    : 'bg-black/20 border-slate-200/30'
                }`}>
                  <div className="absolute inset-0">
                    <ProductVisual 
                      type={currentProduct.visual} 
                      color={currentProduct.color}
                      accentColor={currentProduct.accentColor} 
                    />
                  </div>
                </div>
              </div>

              {/* Right side: Product details & industries */}
              <div className="lg:col-span-4">
                <div className="space-y-6">
                  {/* Product title and description */}
                  <div className={`p-6 rounded-2xl backdrop-blur-sm border ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-white/80 border-slate-200/50'
                  }`}>
                    <div className="flex items-center mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${currentProduct.color} text-white mr-4`}>
                        {currentProduct.icon}
                      </div>
                      <h3 className={`text-2xl font-medium ${
                        theme === 'dark' ? 'text-white' : 'text-slate-800'
                      }`}>
                        {currentProduct.title}
                      </h3>
                    </div>

                    <p className={`mb-4 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {currentProduct.description}
                    </p>

                    <button className={`inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r ${currentProduct.color} text-white rounded-lg transition-all duration-300 hover:opacity-90`}>
                      Request Demo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>

                  {/* Industry cards */}
                  <div className={`p-6 rounded-2xl backdrop-blur-sm border ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/10' 
                      : 'bg-white/80 border-slate-200/50'
                  }`}>
                    <h3 className={`text-xl font-medium mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-slate-800'
                    }`}>Industry Solutions</h3>
                    <div className="space-y-3">
                      {currentProduct.industries.map((industry, index) => (
                        <IndustryCard 
                          key={index}
                          industry={industry}
                          active={activeIndustry === index}
                          color={currentProduct.color}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        
        {/* Enhanced animation styles */}
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes spin-slow-reverse {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
          }
          
          @keyframes pulse-slow-delay {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes float-delay {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
          
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            33% { transform: translateY(-5px); }
            66% { transform: translateY(5px); }
          }
          
          @keyframes scan {
            0% { transform: translateY(-100%); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          
          @keyframes ping-slow {
            0% { transform: scale(1); opacity: 1; }
            75%, 100% { transform: scale(1.5); opacity: 0; }
          }
          
          @keyframes ping-slower {
            0% { transform: scale(1); opacity: 0.8; }
            75%, 100% { transform: scale(1.8); opacity: 0; }
          }
          
          @keyframes data-stream {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          
          @keyframes data-stream-delay {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          
          @keyframes pulse-node {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.5); }
          }
          
          @keyframes pulse-node-delay {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.5); }
          }
          
          @keyframes pulse-node-delay2 {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.5); }
          }
          
          @keyframes pulse-threat {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.5); }
          }
          
          @keyframes pulse-threat-delay {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.5); }
          }
          
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          
          .animate-spin-slow-reverse {
            animation: spin-slow-reverse 25s linear infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          
          .animate-pulse-slow-delay {
            animation: pulse-slow-delay 5s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          
          .animate-float-delay {
            animation: float-delay 4.5s ease-in-out infinite;
          }
          
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
          
          .animate-scan {
            animation: scan 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
          
          .animate-ping-slow {
            animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          
          .animate-ping-slower {
            animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
            animation-delay: 1s;
          }
          
          .animate-data-stream {
            animation: data-stream 3s linear infinite;
          }
          
          .animate-data-stream-delay {
            animation: data-stream-delay 5s linear infinite;
            animation-delay: 1.5s;
          }
          
          .animate-pulse-node {
            animation: pulse-node 2s ease-in-out infinite;
          }
          
          .animate-pulse-node-delay {
            animation: pulse-node-delay 2s ease-in-out infinite;
            animation-delay: 0.7s;
          }
          
          .animate-pulse-node-delay2 {
            animation: pulse-node-delay2 2s ease-in-out infinite;
            animation-delay: 1.4s;
          }
          
          .animate-pulse-threat {
            animation: pulse-threat 2s ease-in-out infinite;
          }
          
          .animate-pulse-threat-delay {
            animation: pulse-threat-delay 2s ease-in-out infinite;
            animation-delay: 1s;
          }
          
          .perspective {
            perspective: 1000px;
          }
        `}</style>
      </section>
    );
  };

  export default ProductSolutionsSection;