import { useState, useEffect, useRef } from "react";
import { ArrowRight, Play, Shield, Eye, Zap, AlertTriangle, Target, Radar, Clock, TrendingUp, Globe, Users, ChevronRight, CheckCircle, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { resetScroll } from "@/utils/navigationHelpers";
import { useTheme } from "@/context/ThemeContext";
import Footer from "@/components/Footer";
import lottie from "lottie-web";
import Waitlist from '@/components/WaitlistForm';



const FuteurShield = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isVisible, setIsVisible] = useState({});
  const [radarAngle, setRadarAngle] = useState(0);
  const [threatPulse, setThreatPulse] = useState(0);
  const scanLineRef = useRef(null);
  const lottieRef = useRef(null);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

useEffect(() => {
  const anim = lottie.loadAnimation({
    container: lottieRef.current,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/shield.json', // since it's in the public folder
  });

  return () => anim.destroy();
}, []);

  // Radar rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRadarAngle(prev => (prev + 2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Threat pulse animation
  useEffect(() => {
    const interval = setInterval(() => {
      setThreatPulse(prev => (prev + 1) % 100);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  useEffect(() => {
    resetScroll();
  }, []);

  const threatMetrics = [
    { label: "Threats Blocked", value: "2.4M", trend: "+12%" },
    { label: "Response Time", value: "0.03s", trend: "-15%" },
    { label: "Uptime", value: "99.99%", trend: "0%" },
    { label: "Systems Protected", value: "847", trend: "+34%" }
  ];

  const capabilities = [
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 surveillance of network traffic, user behavior, and system activities with AI-powered anomaly detection.",
      color: "cyan"
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Automated threat neutralization within milliseconds of detection, preventing breaches before they occur.",
      color: "blue"
    },
    {
      icon: Target,
      title: "Precision Defense",
      description: "Machine learning algorithms adapt to new threats, creating custom defense patterns for your infrastructure.",
      color: "emerald"
    }
  ];

  const shieldLayers = [
    { name: "Perimeter Defense", active: true, strength: 95 },
    { name: "Network Security", active: true, strength: 88 },
    { name: "Endpoint Protection", active: true, strength: 92 },
    { name: "Data Encryption", active: true, strength: 97 },
    { name: "Access Control", active: true, strength: 89 }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} transition-colors duration-300 relative overflow-hidden`}>
      <Navbar />
      
      {/* Dynamic Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${isDark ? 'opacity-[0.02]' : 'opacity-[0.04]'}`}>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, ${isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(71, 85, 105, 0.1)'} 1px, transparent 1px),
              linear-gradient(0deg, ${isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(71, 85, 105, 0.1)'} 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }} />
        </div>
      </div>

      {/* Scanning Line Effect */}
      <div 
        ref={scanLineRef}
        className={`fixed top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent ${isDark ? 'opacity-20' : 'opacity-10'} pointer-events-none`}
        style={{
          transform: `translateY(${(threatPulse * window.innerHeight) / 100}px)`,
          transition: 'transform 0.1s linear'
        }}
      />

      {/* Hero Section */}
      <section className="pt-12 pb-12 px-4 sm:px-6 md:px-8 relative overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Status Indicator */}
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-amber-200/30 dark:border-amber-800/30 bg-amber-50/30 dark:bg-amber-950/30 backdrop-blur-sm">
                <div className="relative mr-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
                </div>
                <span className={`text-sm font-medium ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>
                  Coming Soon
                </span>
              </div>

              {/* Title + Description */}
              <div className="space-y-6 max-w-xl">
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'} break-words`}>
                  Futeur
                  <span className={`block ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                    Shield
                  </span>
                </h1>

                <p className={`text-lg sm:text-xl font-light ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Protection that never sleeps. Launching Soon.
                </p>

                <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Enterprise-grade security for businesses of all sizes. FuteurShield will provide continuous monitoring and threat prevention to keep your data safe from evolving cyber threats.
                </p>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  disabled
                  className={`group inline-flex items-center justify-center px-6 py-4 rounded-lg font-semibold text-white transition-all duration-300 cursor-not-allowed opacity-50 ${
                    isDark
                      ? 'bg-slate-600'
                      : 'bg-slate-500'
                  }`}
                >
                  Login - Coming Soon
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <div className="flex items-center justify-center text-sm text-slate-500">
                  <Clock className="w-4 h-4 mr-2" />
                  Preparing for launch
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {threatMetrics.map((metric, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {metric.value}
                    </div>
                    <div className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'} mt-1`}>
                      {metric.label}
                    </div>
                    <div className={`text-xs mt-1 ${metric.trend.startsWith('+') ? 'text-emerald-500' : metric.trend.startsWith('-') ? 'text-cyan-500' : 'text-slate-500'}`}>
                      {metric.trend}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[24rem] h-[24rem]">
                <div ref={lottieRef} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Feature Highlight */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div id="main-feature" data-animate className={`transition-all duration-700 ${isVisible['main-feature'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`rounded-2xl p-8 md:p-12 ${isDark ? 'bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-800/50' : 'bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/50'} backdrop-blur-sm relative overflow-hidden`}>
              <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-cyan-900/10 to-transparent' : 'bg-gradient-to-r from-cyan-50/30 to-transparent'}`}></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <Radar className={`w-8 h-8 mr-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                  <h2 className={`text-2xl md:text-3xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Advanced Threat Detection
                  </h2>
                </div>
                
                <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Advanced threat detection and prevention system that works around the clock to identify and neutralize potential security breaches before they happen. Our AI-powered engine learns from millions of threat patterns to provide unparalleled protection for your digital assets.
                </p>
                
                <div className="flex items-center mt-8">
                  <CheckCircle className={`w-5 h-5 mr-3 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <span className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Continuously learning and adapting to new threats
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div id="capabilities-header" data-animate className={`text-center mb-16 transition-all duration-700 ${isVisible['capabilities-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className={`text-3xl md:text-4xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Always Vigilant
            </h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Multi-layered protection that adapts and evolves
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, i) => (
              <div
                key={i}
                id={`capability-${i}`}
                data-animate
                className={`group transition-all duration-700 ${isVisible[`capability-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className={`h-full p-8 rounded-xl border transition-all duration-500 hover:scale-[1.02] ${isDark ? 'bg-slate-900/30 border-slate-800/50 hover:border-slate-700/70 hover:bg-slate-900/50' : 'bg-white border-slate-200/50 hover:border-slate-300 hover:shadow-xl'}`}>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-${capability.color}-500/10 ring-1 ring-${capability.color}-500/20`}>
                    <capability.icon className={`w-6 h-6 text-${capability.color}-500`} />
                  </div>
                  
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {capability.title}
                  </h3>
                  <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'rgba(6, 182, 212, 0.8)' : 'rgba(6, 182, 212, 0.6)'} 1px, transparent 0)`,
      backgroundSize: '60px 60px',
      animation: 'drift 25s linear infinite'
    }} />
  </div>

  {/* Floating Particles */}
  {[...Array(12)].map((_, i) => (
    <div
      key={i}
      className={`absolute w-1 h-1 ${isDark ? 'bg-cyan-400' : 'bg-cyan-600'} rounded-full opacity-30`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`
      }}
    />
  ))}

  <div className="max-w-6xl mx-auto relative z-10">
    <div id="shield-layers" data-animate className={`transition-all duration-1000 ${isVisible['shield-layers'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-black mb-6 bg-black  bg-clip-text text-transparent leading-tight`}>
          DEFENSE IN DEPTH
        </h2>
        <div className={`text-lg md:text-xl ${isDark ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto leading-relaxed`}>
          Multi-layered security architecture with real-time threat detection and adaptive responses
        </div>
        
     
      </div>
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Enhanced Layer Cards */}
        <div className="space-y-4">
          {shieldLayers.map((layer, i) => (
            <div 
              key={i} 
              className={`group relative overflow-hidden p-6 rounded-2xl border backdrop-blur-md transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl cursor-pointer ${
                isDark 
                  ? 'border-slate-800/50 bg-slate-900/40 hover:border-cyan-500/50 hover:bg-cyan-900/20' 
                  : 'border-slate-200/50 bg-white/60 hover:border-cyan-500/50 hover:bg-cyan-50/80'
              }`}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-white/80'} group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-500`}>
                      <Shield className={`w-6 h-6 ${isDark ? 'text-slate-400 group-hover:text-cyan-400' : 'text-slate-600 group-hover:text-cyan-600'} transition-colors duration-500`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {layer.name}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Advanced protection layer
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-black ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                      {layer.strength}%
                    </div>
                    <div className={`text-xs font-semibold ${layer.active ? 'text-emerald-500' : 'text-red-500'}`}>
                      {layer.active ? 'ACTIVE' : 'OFFLINE'}
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Progress Bar */}
                <div className={`w-full ${isDark ? 'bg-slate-800/60' : 'bg-slate-200/60'} rounded-full h-3 overflow-hidden`}>
                  <div 
                    className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-1000 relative overflow-hidden group-hover:shadow-lg group-hover:shadow-cyan-500/30"
                    style={{ width: `${layer.strength}%` }}
                  >
                    {/* Animated Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced 3D Shield Visualization */}
        <div className="flex justify-center">
          <div className="relative w-96 h-96">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-spin-slow blur-xl" />
            
            {/* Concentric Shield Circles with Enhanced Effects */}
            {shieldLayers.map((layer, i) => (
              <div
                key={i}
                className={`absolute rounded-full border-4 transition-all duration-1000 ${
                  layer.active 
                    ? 'border-cyan-500/60 shadow-2xl shadow-cyan-500/30 animate-pulse-slow' 
                    : 'border-slate-600/30'
                }`}
                style={{
                  inset: `${i * 32}px`,
                  animationDelay: `${i * 0.3}s`,
                  background: layer.active ? 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)' : 'transparent'
                }}
              >
                {/* Rotating Energy Dots */}
                {layer.active && (
                  <div 
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                    style={{
                      top: '50%',
                      left: '0px',
                      transform: 'translateY(-50%)',
                      animation: `orbit ${4 + i}s linear infinite`
                    }}
                  />
                )}
              </div>
            ))}
            
            {/* Enhanced Core */}
            <div className={`absolute inset-20 rounded-full ${
              isDark 
                ? 'bg-gradient-to-br from-cyan-900/60 via-blue-900/60 to-purple-900/60' 
                : 'bg-gradient-to-br from-cyan-100/80 via-blue-100/80 to-purple-100/80'
            } border-4 border-cyan-500/80 flex items-center justify-center backdrop-blur-md shadow-2xl shadow-cyan-500/40`}>
              <Shield className={`w-20 h-20 ${isDark ? 'text-cyan-400' : 'text-cyan-600'} drop-shadow-lg animate-pulse-glow`} />
              
              {/* Core Energy Rings */}
              <div className="absolute inset-4 rounded-full border-2 border-cyan-400/40 animate-ping" />
              <div className="absolute inset-8 rounded-full border border-blue-400/30 animate-ping" style={{ animationDelay: '0.5s' }} />
            </div>
            
            {/* Scanning Beam Effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/80 to-transparent animate-scan origin-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>{`
  @keyframes drift {
    0% { transform: translateX(-100px) translateY(-100px); }
    100% { transform: translateX(100px) translateY(100px); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%) skewX(-12deg); }
    100% { transform: translateX(200%) skewX(-12deg); }
  }
  
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }
  
  @keyframes pulse-glow {
    0%, 100% { filter: drop-shadow(0 0 5px currentColor); }
    50% { filter: drop-shadow(0 0 20px currentColor); }
  }
  
  @keyframes orbit {
    from { transform: translateY(-50%) rotate(0deg) translateX(var(--radius)) rotate(0deg); }
    to { transform: translateY(-50%) rotate(360deg) translateX(var(--radius)) rotate(-360deg); }
  }
  
  @keyframes scan {
    0% { transform: rotate(0deg); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: rotate(360deg); opacity: 0; }
  }
`}</style>

      {/* Social Proof */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div id="social-proof" data-animate className={`text-center transition-all duration-700 ${isVisible['social-proof'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className={`text-sm font-medium mb-8 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
              Protecting businesses worldwide
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {['CyberFlow', 'SecureCore', 'DefenseNet', 'GuardTech'].map((company, i) => (
                <div key={i} className={`text-lg font-medium ${isDark ? 'text-slate-600' : 'text-slate-400'} hover:text-slate-300 dark:hover:text-slate-500 transition-colors duration-200`}>
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <div id="pricing" data-animate className={`text-center mb-16 transition-all duration-700 ${isVisible['pricing'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h2 className={`text-3xl md:text-4xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Choose Your Shield
      </h2>
      <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        Scalable protection for every business size
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: 'Starter Shield',
          price: '$99',
          period: '/month',
          description: 'Perfect for small businesses',
          features: [
            'Up to 50 endpoints',
            '24/7 monitoring',
            'Basic threat detection',
            'Email support',
            'Monthly reports'
          ],
          popular: false
        },
        {
          name: 'Business Shield',
          price: '$299',
          period: '/month',
          description: 'Most popular for growing companies',
          features: [
            'Up to 500 endpoints',
            'Advanced AI detection',
            'Real-time alerts',
            'Priority support',
            'Weekly reports',
            'Custom integrations'
          ],
          popular: true
        },
        {
          name: 'Enterprise Shield',
          price: 'Custom',
          period: '',
          description: 'Complete protection for large organizations',
          features: [
            'Unlimited endpoints',
            'Custom threat models',
            'Dedicated security team',
            '24/7 phone support',
            'Daily reports',
            'On-premise deployment'
          ],
          popular: false
        }
      ].map((plan, i) => (
        <div
          key={i}
          id={`pricing-${i}`}
          data-animate
          className={`relative transition-all duration-700 ${isVisible[`pricing-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: `${i * 200}ms` }}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className={`px-4 py-1 rounded-full text-sm font-medium text-white ${isDark ? 'bg-cyan-500' : 'bg-cyan-600'}`}>
                Most Popular
              </span>
            </div>
          )}
          
          <div className={`h-full p-8 rounded-xl border transition-all duration-300 ${
            plan.popular 
              ? (isDark ? 'border-cyan-500/50 bg-cyan-950/20 shadow-lg shadow-cyan-500/10' : 'border-cyan-300 bg-cyan-50/30 shadow-lg shadow-cyan-500/10')
              : (isDark ? 'border-slate-800/50 bg-slate-900/30' : 'border-slate-200/50 bg-white')
          }`}>
            <div className="text-center mb-8">
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'} mb-4`}>
                {plan.description}
              </p>
              <div className="flex items-baseline justify-center">
                <span className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {plan.period}
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center">
                  <CheckCircle className={`w-5 h-5 mr-3 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <span className={`${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
              plan.popular
                ? (isDark ? 'bg-cyan-500 hover:bg-cyan-400 text-white' : 'bg-cyan-600 hover:bg-cyan-700 text-white')
                : (isDark ? 'border border-slate-700 text-slate-300 hover:bg-slate-800/50' : 'border border-slate-300 text-slate-700 hover:bg-slate-50')
            }`}>
              Coming Soon
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-20 px-6">
  <div className="max-w-4xl mx-auto">
    <div id="faq" data-animate className={`text-center mb-16 transition-all duration-700 ${isVisible['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h2 className={`text-3xl md:text-4xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
        Frequently Asked Questions
      </h2>
      <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        Everything you need to know about FuteurShield
      </p>
    </div>

    <div className="space-y-6">
      {[
        {
          question: "How quickly can FuteurShield be deployed?",
          answer: "FuteurShield can be fully deployed and operational within 24 hours. Our automated setup process handles most configurations, and our team provides support for custom integrations."
        },
        {
          question: "What types of threats does FuteurShield protect against?",
          answer: "We protect against all major threat vectors including malware, ransomware, DDoS attacks, phishing, insider threats, and zero-day exploits. Our AI continuously learns new threat patterns."
        },
        {
          question: "Is there a performance impact on my systems?",
          answer: "FuteurShield is designed for minimal performance impact. Our lightweight agents use less than 1% of system resources while providing comprehensive protection."
        },
        {
          question: "Can I integrate FuteurShield with existing security tools?",
          answer: "Yes, FuteurShield integrates with over 200 security tools and platforms including SIEM systems, firewalls, and incident response platforms through our API."
        },
        {
          question: "What happens if a threat is detected?",
          answer: "Threats are automatically isolated and neutralized within milliseconds. You'll receive instant alerts with detailed threat analysis and recommended actions."
        }
      ].map((faq, i) => (
        <div
          key={i}
          id={`faq-${i}`}
          data-animate
          className={`transition-all duration-700 ${isVisible[`faq-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-900/30 border border-slate-800/50' : 'bg-white border border-slate-200/50'}`}>
            <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {faq.question}
            </h3>
            <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



     {/* Final CTA */}
     <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div id="final-cta" data-animate className={`text-center transition-all duration-700 ${isVisible['final-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`rounded-2xl p-12 ${isDark ? 'bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-800/50' : 'bg-gradient-to-br from-white to-slate-50/50 border border-slate-200/50'} backdrop-blur-sm relative overflow-hidden`}>
              <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-cyan-900/20 via-transparent to-emerald-900/20' : 'bg-gradient-to-r from-cyan-50/40 via-transparent to-emerald-50/40'}`}></div>
              
              <div className="relative">
                <h2 className={`text-3xl md:text-4xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Get ready for unmatched protection
                </h2>
                
                <p className={`text-lg mb-8 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  FuteurShield is launching soon. Be among the first to experience next-generation cybersecurity.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    type="button"
                    disabled
                    className={`group inline-flex items-center justify-center px-6 py-4 rounded-lg font-semibold text-white transition-all duration-300 cursor-not-allowed opacity-50 ${
                      isDark
                        ? 'bg-slate-600'
                        : 'bg-slate-500'
                    }`}
                  >
                    Access Coming Soon
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <div className="flex items-center justify-center text-sm text-slate-500">
                    <Clock className="w-4 h-4 mr-2" />
                    Launching in 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Waitlist

        onClose={() => setIsWaitlistOpen(false)}        isOpen={isWaitlistOpen}
      /> */}



      <Footer />
    </div>
  );
};

export default FuteurShield;