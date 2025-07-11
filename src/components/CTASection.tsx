import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ModernCTASection = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const themeClasses = {
    bg: isDark ? 'bg-slate-950' : 'bg-gray-50',
    cardBg: isDark ? 'bg-slate-900/80' : 'bg-white/80',
    border: isDark ? 'border-slate-800' : 'border-gray-200',
    text: isDark ? 'text-white' : 'text-gray-900',
    subtext: isDark ? 'text-slate-300' : 'text-gray-600',
    accent: isDark ? 'from-indigo-600 to-purple-600' : 'from-indigo-500 to-purple-500'
  };

  return (
    <section 
      className={`py-20 transition-colors duration-500 ${themeClasses.bg}`}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Main CTA Card */}
        <div 
          className={`relative ${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-xl rounded-3xl p-12 overflow-hidden transition-all duration-500 hover:shadow-2xl ${
            isDark ? 'hover:shadow-indigo-500/10' : 'hover:shadow-gray-300/50'
          }`}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 2 - 1}deg) rotateY(${mousePosition.x * 2 - 1}deg)`
          }}
        >
          {/* Animated background gradient */}
          <div 
            className={`absolute inset-0 opacity-5 bg-gradient-to-r ${themeClasses.accent} rounded-3xl`}
            style={{
              background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(99, 102, 241, 0.1), transparent 50%)`
            }}
          ></div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${isDark ? 'bg-indigo-400' : 'bg-indigo-500'} opacity-60 animate-pulse`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            ></div>
          ))}

          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${themeClasses.accent} mb-6 relative overflow-hidden group`}>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <ShieldCheck className="w-8 h-8 text-white relative z-10" />
              <Sparkles className="absolute top-1 right-1 w-3 h-3 text-white opacity-60 animate-pulse" />
            </div>

            {/* Heading */}
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${themeClasses.text}`}>
              Ready to <span className={`bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent`}>Elevate</span> Your Security?
            </h2>

            {/* Subheading */}
            <p className={`text-lg ${themeClasses.subtext} mb-10 max-w-2xl mx-auto leading-relaxed`}>
              Join thousands of companies protecting their digital assets with enterprise-grade security solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className={`relative bg-gradient-to-r ${themeClasses.accent} hover:opacity-90 text-white px-8 py-3 rounded-xl transition-all duration-300 group overflow-hidden`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2 font-medium">
                  Get Started Free
                  <ArrowRight size={16} className={`transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className={`px-8 py-3 rounded-xl ${themeClasses.border} ${isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-gray-700 hover:bg-gray-50'} transition-all duration-300 font-medium`}
              >
                Schedule Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-10 pt-8 border-t border-opacity-20 border-current">
              {['SOC 2', 'ISO 27001', 'GDPR'].map((cert, index) => (
                <div key={cert} className={`flex items-center gap-2 ${themeClasses.subtext} text-sm`}>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${themeClasses.accent}`}></div>
                  <span className="font-medium">{cert} Compliant</span>
                </div>
              ))}
            </div>
          </div>

          {/* Corner accents */}
          <div className={`absolute top-6 left-6 w-3 h-3 border-t-2 border-l-2 ${isDark ? 'border-indigo-500' : 'border-indigo-400'} rounded-tl opacity-60`}></div>
          <div className={`absolute top-6 right-6 w-3 h-3 border-t-2 border-r-2 ${isDark ? 'border-purple-500' : 'border-purple-400'} rounded-tr opacity-60`}></div>
          <div className={`absolute bottom-6 left-6 w-3 h-3 border-b-2 border-l-2 ${isDark ? 'border-purple-500' : 'border-purple-400'} rounded-bl opacity-60`}></div>
          <div className={`absolute bottom-6 right-6 w-3 h-3 border-b-2 border-r-2 ${isDark ? 'border-indigo-500' : 'border-indigo-400'} rounded-br opacity-60`}></div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ModernCTASection;