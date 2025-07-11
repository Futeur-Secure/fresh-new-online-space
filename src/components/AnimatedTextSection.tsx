import { useState, useEffect, useRef } from "react";
import { ArrowRight, Brain, Zap, Target, Users, TrendingUp, Sparkles } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";

const ModernValuePropSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  
  // Words to highlight sequentially as user scrolls
  const firstLine = [
    { text: "Your", delay: 0 },
    { text: "data", delay: 100, icon: Brain },
    { text: "has", delay: 150 },
    { text: "stories", delay: 200 },
    { text: "to", delay: 250 },
    { text: "tell.", delay: 300, icon: Sparkles }
  ];
  
  const secondLine = [
    { text: "We", delay: 350 },
    { text: "help", delay: 400 },
    { text: "you", delay: 450 },
    { text: "listen", delay: 500, icon: Target },
    { text: "&", delay: 550 },
    { text: "act.", delay: 600, icon: Zap }
  ];
  
  const insights = [
    {
      title: "Real threats, real time",
      content: "Don’t just log events — detect threats as they happen and act instantly.",
      highlight: "threats"
    },
    {
      title: "Signals over noise",
      content: "We filter out the noise so your team sees what actually matters.",
      highlight: "signals"
    },
    {
      title: "Faster than alerts",
      content: "You don’t wait for dashboards — Futeur responds before damage is done.",
      highlight: "faster"
    },
    {
      title: "Smarter protection",
      content: "We turn raw data into intelligence — not just charts, but real action.",
      highlight: "intelligence"
    }
  ];
  
  // Track scroll position and mouse movement
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      let progress = (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.5);
      progress = Math.min(Math.max(progress, 0), 1);
      
      setScrollProgress(progress);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-screen flex items-center py-20 md:py-32 transition-all duration-700 overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-br from-slate-950 to-slate-950' 
          : 'bg-gradient-to-br from-slate-50 via-white to-slate-50'
      }`}
    >
     

      {/* Enhanced Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main organic blob */}
        <div 
          className={`absolute top-1/2 left-1/2 w-[900px] h-[600px] -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
            isDarkMode ? 'opacity-50' : 'opacity-35'
          }`}
          style={{
            background: isDarkMode 
              ? 'radial-gradient(ellipse 60% 70% at 50% 50%, #6366f140 0%, #8b5cf640 30%, #ec489940 60%, #06b6d440 90%, transparent 100%)'
              : 'radial-gradient(ellipse 60% 70% at 50% 50%, #ddd6fe40 0%, #bfdbfe40 30%, #fecaca40 60%, #ecfdf540 90%, transparent 100%)',
            borderRadius: '40% 60% 30% 70% / 50% 30% 70% 50%',
            filter: 'blur(80px)',
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${scrollProgress * 30}deg)`
          }}
        />

        {/* Secondary organic shapes */}
        <div 
          className={`absolute top-1/4 right-1/4 w-[400px] h-[300px] transition-all duration-1000 ${
            isDarkMode ? 'opacity-30' : 'opacity-25'
          }`}
          style={{
            background: isDarkMode 
              ? 'radial-gradient(ellipse at center, #a855f780, transparent 70%)'
              : 'radial-gradient(ellipse at center, #8b5cf680, transparent 70%)',
            borderRadius: '60% 40% 50% 60% / 40% 60% 50% 40%',
            filter: 'blur(60px)',
            transform: `translate(${mousePosition.x * -0.025}px, ${mousePosition.y * 0.03}px) rotate(${scrollProgress * -20}deg)`
          }}
        />

        {/* Animated particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDarkMode ? 'bg-white/30' : 'bg-slate-400/40'
            }`}
            style={{
              top: `${15 + (i * 10)}%`,
              left: `${10 + (i * 8)}%`,
              opacity: scrollProgress > 0.3 ? 0.6 : 0,
              transform: `translateY(${scrollProgress * -50}px)`,
              transition: 'all 1s ease-out',
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}

        {/* Mesh gradient overlay */}
        <div 
          className={`absolute inset-0 ${isDarkMode ? 'opacity-8' : 'opacity-12'}`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDarkMode ? 'ffffff' : '000000'}' fill-opacity='0.08'%3E%3Ccircle cx='40' cy='40' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} 
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated headline */}
          <div className="mb-12 overflow-hidden">
            <div className={`text-5xl md:text-7xl lg:text-8xl font-extralight leading-[0.9] mb-8 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 mb-6">
                {firstLine.map((word, index) => {
                  const Icon = word.icon;
                  return (
                    <span 
                      key={`first-${index}`}
                      className="inline-flex items-center gap-3 transition-all duration-700 ease-out"
                      style={{
                        opacity: scrollProgress > (word.delay / 1000) ? 1 : 0.2,
                        transform: `translateY(${scrollProgress > (word.delay / 1000) ? '0px' : '30px'})`,
                        color: scrollProgress > (word.delay / 1000) 
                          ? (isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(15, 23, 42)')
                          : (isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(15, 23, 42, 0.2)')
                      }}
                    >
                      {word.text}
                      {Icon && (
                        <Icon 
                          className="w-10 h-10 md:w-16 md:h-16"
                          style={{
                            opacity: scrollProgress > (word.delay / 1000) ? 1 : 0,
                            color: isDarkMode ? '#a855f7' : '#8b5cf6',
                            transform: `scale(${scrollProgress > (word.delay / 1000) ? 1 : 0.5})`
                          }}
                        />
                      )}
                    </span>
                  );
                })}
              </div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
                {secondLine.map((word, index) => {
                  const Icon = word.icon;
                  return (
                    <span 
                      key={`second-${index}`}
                      className="inline-flex items-center gap-3 transition-all duration-700 ease-out"
                      style={{
                        opacity: scrollProgress > (word.delay / 1000) ? 1 : 0.2,
                        transform: `translateY(${scrollProgress > (word.delay / 1000) ? '0px' : '30px'})`,
                        color: scrollProgress > (word.delay / 1000) 
                          ? (isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(15, 23, 42)')
                          : (isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(15, 23, 42, 0.2)')
                      }}
                    >
                      {word.text}
                      {Icon && (
                        <Icon 
                          className="w-10 h-10 md:w-16 md:h-16"
                          style={{
                            opacity: scrollProgress > (word.delay / 1000) ? 1 : 0,
                            color: isDarkMode ? '#06b6d4' : '#0891b2',
                            transform: `scale(${scrollProgress > (word.delay / 1000) ? 1 : 0.5})`
                          }}
                        />
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Insights sections */}
          <div 
            className="mb-16 space-y-12 max-w-4xl mx-auto"
            style={{
              opacity: Math.min(scrollProgress * 2, 1),
              transform: `translateY(${Math.max(40 - (scrollProgress * 60), 0)}px)`
            }}
          >
            {insights.map((insight, idx) => (
              <div 
                key={idx}
                className="text-left"
                style={{
                  opacity: Math.min(scrollProgress * 5 - (idx * 0.8), 1),
                  transform: `translateY(${Math.max(30 - (scrollProgress * 40) + (idx * 8), 0)}px)`
                }}
              >
                <h3 className={`text-2xl md:text-3xl font-light mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {insight.title}
                </h3>
                <p className={`text-lg md:text-xl leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {insight.content.split(insight.highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className={`font-medium px-2 py-1 rounded-lg ${
                          isDarkMode 
                            ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300' 
                            : 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700'
                        }`}>
                          {insight.highlight}
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            style={{
              opacity: Math.min(scrollProgress * 4 - 2.5, 1),
              transform: `translateY(${Math.max(50 - (scrollProgress * 70), 0)}px)`
            }}
          >
            <Link to="/shield">
              <button 
                className={`group relative overflow-hidden px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 hover:scale-[1.02] ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white'
                    : 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white'
                } shadow-lg hover:shadow-xl shadow-purple-500/25`}
              >
                <span className="relative z-10 flex items-center">
                  Start listening to your data
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </Link>
            
            <div className={`text-sm flex items-center gap-2 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              No setup required • Connect in minutes
            </div>
          </div>
        </div>
      </div>

      {/* Smart floating insights */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 hidden xl:block ${
        scrollProgress > 0.4 ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Data insight card */}
        <div className="absolute top-[480px] left-8 animate-float-gentle">
          <div className={`p-5 rounded-3xl backdrop-blur-md shadow-xl border max-w-[260px] ${
            isDarkMode 
              ? 'bg-slate-900/60 border-white/10 shadow-purple-500/10' 
              : 'bg-white/80 border-white/60 shadow-slate-200/50'
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <Brain className={`w-5 h-5 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              <div className={`text-sm font-semibold ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Pattern Discovered
              </div>
            </div>
            <div className={`text-xs leading-relaxed mb-3 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              "Customer satisfaction drops 23% when response time exceeds 4 hours"
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-medium ${
                isDarkMode ? 'text-emerald-400' : 'text-emerald-600'
              }`}>
                High confidence
              </span>
              <TrendingUp className={`w-3 h-3 ${
                isDarkMode ? 'text-emerald-400' : 'text-emerald-600'
              }`} />
            </div>
          </div>
        </div>

        {/* Real-time analysis card */}
        <div className="absolute top-1/2 right-8 animate-float-gentle-delayed">
          <div className={`p-5 rounded-3xl backdrop-blur-md shadow-xl border max-w-[240px] ${
            isDarkMode 
              ? 'bg-slate-900/60 border-white/10 shadow-blue-500/10' 
              : 'bg-white/80 border-white/60 shadow-slate-200/50'
          }`}>
            <div className={`text-sm font-semibold mb-3 flex items-center gap-2 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <Users className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              Live Analysis
            </div>
            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-xs">
                <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>Conversations</span>
                <span className={`font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>1,247</span>
              </div>
              <div className={`h-2 rounded-full overflow-hidden ${
                isDarkMode ? 'bg-slate-700' : 'bg-slate-200'
              }`}>
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-2000"
                  style={{ width: `${Math.min(scrollProgress * 150, 85)}%` }}
                />
              </div>
            </div>
            <div className={`text-xs ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Processed in real-time
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes float-gentle-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-1deg); }
        }
        
        .animate-float-gentle { 
          animation: float-gentle 8s ease-in-out infinite; 
        }
        .animate-float-gentle-delayed { 
          animation: float-gentle-delayed 9s ease-in-out infinite 2s; 
        }
      `}</style>
    </section>
  );
};

export default ModernValuePropSection;