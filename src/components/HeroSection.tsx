import { useState, useEffect } from "react";
import { ArrowRight, Play, Sparkles, Shield, Zap, Lock } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";

const ModernHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  // Enhanced text animation states
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  
  // More specific, benefit-focused words
  const words = ['drift', 'noise', 'gaps', 'leaks', 'lag'];


  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }
      
      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          setIsWaiting(true);
        }
      }
    }, isWaiting ? 2000 : isDeleting ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, isWaiting, words]);

  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-700 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950' 
        : 'bg-gradient-to-br from-slate-50 via-white to-slate-50'
    }`}>

      {/* Enhanced Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orb */}
        <div 
          className={`absolute top-1/2 left-1/2 w-[900px] h-[700px] -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
            isDarkMode ? 'opacity-70' : 'opacity-50'
          }`}
          style={{
            background: isDarkMode 
              ? 'radial-gradient(ellipse 50% 60% at 50% 50%, #6366f150 0%, #8b5cf650 25%, #ec489950 50%, #06b6d450 75%, transparent 100%)'
              : 'radial-gradient(ellipse 50% 60% at 50% 50%, #ddd6fe50 0%, #bfdbfe50 25%, #fecaca50 50%, #ecfdf550 75%, transparent 100%)',
            borderRadius: '50% 40% 60% 30% / 40% 60% 50% 70%',
            filter: 'blur(60px)',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) rotate(${mousePosition.x * 0.08}deg)`
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isDarkMode ? 'bg-white/20' : 'bg-slate-400/30'
            } animate-ping`}
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 12)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + (i * 0.3)}s`
            }}
          />
        ))}

        {/* Mesh gradient overlay */}
        <div 
          className={`absolute inset-0 ${isDarkMode ? 'opacity-10' : 'opacity-15'}`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDarkMode ? 'ffffff' : '000000'}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} 
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 lg:-mt-8 mt-8">

       {/* Badge */}
        {/* <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mt-8 mb-8 md:mb-4 transition-all duration-1000 backdrop-blur-md ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        } ${
          isDarkMode 
            ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border border-purple-500/30' 
            : 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border border-purple-200'
        }`}>
          <Sparkles className="w-4 h-4" />
          Turn your data into decisions
        </div> */}

        {/* Main Headline */}
        <div className={`max-w-[1000px] text-center mb-6 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extralight leading-[0.85] mb-6 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Secure your stack.
          </h1>
          <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.85] ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            <span className="font-light">No more</span>{' '}
            <span className={`font-medium bg-gradient-to-r ${
              isDarkMode 
                ? 'from-violet-400 via-purple-400 to-fuchsia-400' 
                : 'from-violet-600 via-purple-600 to-fuchsia-600'
            } bg-clip-text text-transparent relative inline-block`}>
              {currentText}
              <span className={`animate-pulse ml-1 ${
                isDarkMode ? 'text-violet-400' : 'text-violet-600'
              }`}>|</span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className={`text-lg sm:text-xl md:text-2xl font-light max-w-3xl text-center mb-12 leading-relaxed transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${
          isDarkMode ? 'text-slate-300' : 'text-slate-600'
        }`}>
          The first context-aware security platform built for speed and scale.{' '}
          <span className={`${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Visualize, investigate, and neutralize threats — all in one place.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-600 ${
  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
}`}>
  {/* Futeur Shield Button */}
  <Link to="/shield">
    <button className={`group relative overflow-hidden px-8 py-4 rounded-2xl text-base font-medium transition-all duration-300 hover:scale-[1.02] ${
      isDarkMode
        ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white'
        : 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white'
    } shadow-lg hover:shadow-xl shadow-purple-500/25`}>
      <span className="relative z-10 flex items-center justify-center">
        <Shield className="mr-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        Futeur Shield
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </button>
  </Link>

  {/* Futeur Vault Button */}
  <Link to="/vault">
    <button className={`group flex items-center justify-center px-8 py-4 rounded-2xl text-base font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-md ${
      isDarkMode
        ? 'border border-white/20 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white'
        : 'border border-slate-200 hover:border-slate-300 bg-white/80 hover:bg-white text-slate-700'
    }`}>
      <Lock className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
      Futeur Vault
    </button>
  </Link>
</div>

        {/* Enhanced Stats */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {[
            { icon: Shield, value: "99.9%", label: "Security uptime", color: "emerald" },
            { icon: Zap, value: "10k+", label: "Teams accelerated", color: "blue" },
            { icon: Sparkles, value: "<1min", label: "Setup time", color: "purple" }
          ].map((stat, idx) => (
            <div key={stat.label} className="text-center group cursor-pointer">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-3 transition-all duration-300 group-hover:scale-110 ${
                isDarkMode 
                  ? `bg-${stat.color}-500/20 text-${stat.color}-400` 
                  : `bg-${stat.color}-100 text-${stat.color}-600`
              }`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div className={`text-2xl sm:text-3xl font-bold mb-1 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {stat.value}
              </div>
              <div className={`text-sm font-medium ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Floating Cards */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 delay-1000 hidden xl:block ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* AI Insight Card */}
        <div className="absolute top-1/4 left-12 animate-float-gentle">
          <div className={`p-5 rounded-3xl backdrop-blur-md shadow-xl border max-w-[240px] ${
            isDarkMode 
              ? 'bg-slate-900/60 border-white/10 shadow-purple-500/10' 
              : 'bg-white/80 border-white/60 shadow-slate-200/50'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse`} />
              <div className={`text-sm font-semibold ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                AI Pattern Detected
              </div>
            </div>
            <div className={`text-xs leading-relaxed ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Found 3 optimization opportunities in customer support flow
            </div>
            <div className="flex items-center justify-between mt-3">
              <span className={`text-xs font-medium ${
                isDarkMode ? 'text-purple-400' : 'text-purple-600'
              }`}>
                +23% efficiency
              </span>
              <ArrowRight className={`w-3 h-3 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`} />
            </div>
          </div>
        </div>

        {/* Real-time Analytics Card */}
        <div className="absolute top-1/3 right-12 animate-float-gentle-delayed">
          <div className={`p-5 rounded-3xl backdrop-blur-md shadow-xl border max-w-[220px] ${
            isDarkMode 
              ? 'bg-slate-900/60 border-white/10 shadow-blue-500/10' 
              : 'bg-white/80 border-white/60 shadow-slate-200/50'
          }`}>
            <div className={`text-sm font-semibold mb-3 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Live Performance
            </div>
            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-xs">
                <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Response</span>
                <span className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>8ms</span>
              </div>
              <div className={`flex-1 h-2 rounded-full overflow-hidden ${
                isDarkMode ? 'bg-slate-700' : 'bg-slate-200'
              }`}>
                <div className="h-full w-5/6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse" />
              </div>
            </div>
            <div className={`text-xs ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Serving 1.2k queries/sec
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes float-gentle-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }
        
        .animate-float-gentle { 
          animation: float-gentle 6s ease-in-out infinite; 
        }
        .animate-float-gentle-delayed { 
          animation: float-gentle-delayed 7s ease-in-out infinite 1.5s; 
        }
      `}</style>
    </div>
  );
};

export default ModernHeroSection;