import { useState, useEffect, useRef } from "react";
import { ShieldCheck, Lock, Zap, Globe, ChevronRight, Sliders, Sun, Moon, ArrowRight, Users, Target, Cpu } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";

const ModernFeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeFeature, setActiveFeature] = useState(null);
  const sectionRef = useRef(null);
  
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Advanced Protection",
      description: "Multi-layered security protocols that adapt to emerging threats in real-time, ensuring your data stays protected.",
      gradient: isDarkMode 
        ? "from-blue-400 via-purple-400 to-pink-400" 
        : "from-blue-600 via-purple-600 to-pink-600",
      bgGradient: isDarkMode
        ? "from-blue-500/10 to-purple-500/10"
        : "from-blue-50 to-purple-50"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times, powered by cutting-edge infrastructure.",
      gradient: isDarkMode 
        ? "from-yellow-400 via-orange-400 to-red-400" 
        : "from-yellow-600 via-orange-600 to-red-600",
      bgGradient: isDarkMode
        ? "from-yellow-500/10 to-orange-500/10"
        : "from-yellow-50 to-orange-50"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Seamless workflow integration that keeps your team synchronized and productive across all projects.",
      gradient: isDarkMode 
        ? "from-green-400 via-emerald-400 to-teal-400" 
        : "from-green-600 via-emerald-600 to-teal-600",
      bgGradient: isDarkMode
        ? "from-green-500/10 to-emerald-500/10"
        : "from-green-50 to-emerald-50"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Analytics",
      description: "AI-powered insights that transform your data into actionable intelligence for better decision making.",
      gradient: isDarkMode 
        ? "from-purple-400 via-pink-400 to-rose-400" 
        : "from-purple-600 via-pink-600 to-rose-600",
      bgGradient: isDarkMode
        ? "from-purple-500/10 to-pink-500/10"
        : "from-purple-50 to-pink-50"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Smart Automation",
      description: "Intelligent automation that learns from your patterns and optimizes workflows automatically.",
      gradient: isDarkMode 
        ? "from-cyan-400 via-blue-400 to-indigo-400" 
        : "from-cyan-600 via-blue-600 to-indigo-600",
      bgGradient: isDarkMode
        ? "from-cyan-500/10 to-blue-500/10"
        : "from-cyan-50 to-blue-50"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Scale",
      description: "Enterprise-grade infrastructure that scales seamlessly from startup to global enterprise needs.",
      gradient: isDarkMode 
        ? "from-indigo-400 via-violet-400 to-purple-400" 
        : "from-indigo-600 via-violet-600 to-purple-600",
      bgGradient: isDarkMode
        ? "from-indigo-500/10 to-violet-500/10"
        : "from-indigo-50 to-violet-50"
    }
  ];

  return (
    <div id="features" className={`min-h-screen relative overflow-hidden transition-all duration-700 ${
      isDarkMode 
        ? 'bg-slate-950' 
        : 'bg-gray-50'
    }`}>
      
     

      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main organic blob */}
        <div 
          className={`absolute top-1/2 left-1/2 w-[1000px] h-[800px] -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
            isDarkMode ? 'opacity-40' : 'opacity-30'
          }`}
          style={{
            background: isDarkMode 
              ? 'radial-gradient(ellipse 60% 70% at 50% 50%, #3b82f640 0%, #8b5cf640 35%, #06b6d440 70%, transparent 100%)'
              : 'radial-gradient(ellipse 60% 70% at 50% 50%, #ddd6fe40 0%, #bfdbfe40 35%, #ecfdf540 70%, transparent 100%)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            filter: 'blur(60px)',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) rotate(${mousePosition.x * 0.02}deg)`
          }}
        />

        {/* Secondary shapes */}
        <div 
          className={`absolute top-1/4 right-1/4 w-[400px] h-[300px] transition-all duration-1000 ${
            isDarkMode ? 'opacity-20' : 'opacity-15'
          }`}
          style={{
            background: isDarkMode 
              ? 'radial-gradient(ellipse at center, #ec489980, transparent 70%)'
              : 'radial-gradient(ellipse at center, #a78bfa80, transparent 70%)',
            borderRadius: '40% 60% 70% 30% / 50% 60% 40% 50%',
            filter: 'blur(40px)',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.03}px)`
          }}
        />
      </div>

      {/* Main Content */}
      <div ref={sectionRef} className="relative z-10 py-20 px-6">
        
        {/* Header */}
        <div className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
            isDarkMode 
              ? 'bg-white/10 text-white/80 border border-white/20' 
              : 'bg-slate-100 text-slate-600 border border-slate-200'
          }`}>
            Why Choose Our Platform
          </div>
          
          <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            <span className="font-normal">Built for</span>{' '}
            <span className={`font-semibold bg-gradient-to-r ${
              isDarkMode 
                ? 'from-blue-400 via-purple-400 to-pink-400' 
                : 'from-blue-600 via-purple-600 to-pink-600'
            } bg-clip-text text-transparent`}>
              modern teams
            </span>
          </h2>
          
          <p className={`text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-white/60' : 'text-slate-600'
          }`}>
            Every feature designed to eliminate friction and accelerate your team's potential
          </p>
        </div>

        {/* Features Grid */}
        <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] cursor-pointer ${
                  isDarkMode
                    ? 'bg-slate-900/40 hover:bg-slate-900/60 border border-white/10 hover:border-white/20'
                    : 'bg-white/60 hover:bg-white/80 border border-white/40 hover:border-white/60'
                } backdrop-blur-sm shadow-lg hover:shadow-2xl`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${feature.gradient} transition-all duration-500 group-hover:scale-110`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className={`text-xl md:text-2xl font-semibold mb-4 transition-colors duration-300 ${
                    isDarkMode ? 'text-white group-hover:text-white' : 'text-slate-900 group-hover:text-slate-900'
                  }`}>
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-sm md:text-base leading-relaxed mb-6 transition-colors duration-300 ${
                    isDarkMode ? 'text-white/70 group-hover:text-white/80' : 'text-slate-600 group-hover:text-slate-700'
                  }`}>
                    {feature.description}
                  </p>
                  
                  {/* Learn More Link */}
                  {/* <Link to="/get-started" className="block">
                    <div className={`flex items-center text-sm font-medium transition-all duration-300 ${
                      activeFeature === index ? 'translate-x-2' : ''
                    }`}>
                      <span className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        Learn more
                      </span>
                      <ArrowRight className={`ml-2 w-4 h-4 transition-all duration-300 ${
                        activeFeature === index ? 'translate-x-1' : ''
                      }`} style={{
                        color: isDarkMode ? '#60a5fa' : '#3b82f6'
                      }} />
                    </div>
                  </Link> */}
                </div>

                {/* Hover Effect */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl`} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`max-w-4xl mx-auto text-center mt-20 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`p-8 md:p-12 rounded-3xl backdrop-blur-sm border ${
            isDarkMode
              ? 'bg-slate-900/20 border-white/10'
              : 'bg-white/40 border-white/60'
          }`}>
            <h3 className={`text-2xl md:text-3xl font-semibold mb-4 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Ready to transform your workflow?
            </h3>
            <p className={`text-base md:text-lg mb-8 ${
              isDarkMode ? 'text-white/70' : 'text-slate-600'
            }`}>
              Join thousands of teams already using our platform to achieve more
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shield">
                <button className={`px-8 py-4 rounded-xl text-base font-medium transition-all duration-300 hover:scale-[1.02] ${
                  isDarkMode
                    ? 'bg-white text-slate-900 hover:bg-white/90'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                } shadow-lg hover:shadow-xl`}>
                  <span className="flex items-center justify-center">
                    Futeur Shield
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </button>
              </Link>

              <Link to="/vault">
                <button className={`px-8 py-4 rounded-xl text-base font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm ${
                  isDarkMode
                    ? 'border border-white/20 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white'
                    : 'border border-slate-200 hover:border-slate-300 bg-white/60 hover:bg-white/80 text-slate-700'
                }`}>
                   <span className="flex items-center justify-center">
                  Futeur Vault
                  <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ModernFeaturesSection;