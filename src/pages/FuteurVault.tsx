import { useState, useEffect, useRef } from "react";
import { ArrowRight, Play, Shield, Database, Rocket, Check, Star, ArrowUpRight, ChevronDown, Zap, Globe, Lock, Brain, Layers, Award, Users, Cpu, Cloud, FileText, BarChart3, Settings, Briefcase, Key, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import { resetScroll } from "@/utils/navigationHelpers";
import { useTheme } from "@/context/ThemeContext";
import Footer from "@/components/Footer";
import React from "react";
import Waitlist from "@/components/WaitlistForm";
import PricingSection from "@/components/Pricing";

const FuteurVault = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const lottieRef = useRef(null);
  const companies = [
    { name: 'TechFlow', logo: '🔷' },
    { name: 'DataCore', logo: '⚡' },
    { name: 'SecureNet', logo: '🛡️' },
    { name: 'CloudFirst', logo: '☁️' }
  ];

  const stats = [
    { value: '500+', label: 'Enterprise Clients', icon: Users },
    { value: '99.9%', label: 'Uptime SLA', icon: TrendingUp },
    { value: 'SOC 2', label: 'Type II Certified', icon: Award },
    { value: '24/7', label: 'Expert Support', icon: Shield }
  ];
  // Load Lottie animation
  useEffect(() => {
    let animationInstance = null;
    
    const loadLottie = async () => {
      try {
        // Load Lottie library
        const lottie = await import('lottie-web');
        
        if (lottieRef.current) {
          animationInstance = lottie.default.loadAnimation({
            container: lottieRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/vault.json'
          });
        }
      } catch (error) {
        console.log('Lottie animation not available, using fallback');
      }
    };

    loadLottie();

    return () => {
      if (animationInstance) {
        animationInstance.destroy();
      }
    };
  }, []);

  // Track mouse for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Security",
      description: "Advanced threat detection with machine learning models trained on enterprise attack patterns.",
      accent: "from-amber-400/20 to-orange-500/20"
    },
    {
      icon: Shield,
      title: "Zero-Trust Architecture",
      description: "Built-in identity verification and encrypted data flows for maximum security posture.",
      accent: "from-emerald-400/20 to-teal-500/20"
    },
    {
      icon: Layers,
      title: "Infrastructure as Code",
      description: "Deploy secure, scalable infrastructure with version-controlled configuration management.",
      accent: "from-violet-400/20 to-purple-500/20"
    }
  ];

  const integrations = [
    { name: "AWS", logo: "☁️" },
    { name: "Azure", logo: "🔷" },
    { name: "GCP", logo: "🌐" },
    { name: "Kubernetes", logo: "⚙️" },
    { name: "Docker", logo: "🐳" },
    { name: "Terraform", logo: "🏗️" }
  ];

  const certifications = [
    { name: "SOC2 Type II", icon: Award, status: "Certified" },
    { name: "ISO 27001", icon: Shield, status: "Certified" },
    { name: "GDPR", icon: Lock, status: "Compliant" },
    { name: "HIPAA", icon: FileText, status: "Ready" }
  ];



  const useCases = [
    {
      icon: Briefcase,
      title: "Financial Services",
      description: "Meet regulatory requirements with automated compliance monitoring and audit trails."
    },
    {
      icon: Users,
      title: "Healthcare",
      description: "HIPAA-compliant infrastructure with encrypted patient data and access controls."
    },
    {
      icon: Globe,
      title: "Technology",
      description: "Scalable security for high-growth SaaS platforms and development teams."
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} transition-colors duration-300 relative overflow-hidden`}>
      <Navbar />
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${isDark ? 'opacity-5' : 'opacity-10'}`}>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'rgba(148, 163, 184, 0.3)' : 'rgba(71, 85, 105, 0.3)'} 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10" 
             style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}>
          <div className={`w-full h-full border ${isDark ? 'border-slate-700' : 'border-slate-300'} rotate-45`} />
        </div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 opacity-10"
             style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}>
          <div className={`w-full h-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'} rounded-full`} />
        </div>
      </div>

      {/* Hero Section - Split Layout */}
      <section className="pt-12 pb-16 px-4 sm:px-6 md:px-8 relative overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 max-w-xl">
              {/* Status badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/50 bg-emerald-50/50 dark:bg-emerald-950/30">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                <span className={`text-xs font-medium ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>
                  Enterprise Ready
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-6">
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight ${isDark ? 'text-white' : 'text-slate-900'} break-words`}>
                   AI Security
                  <br />
                  <span className={`bg-gradient-to-r ${isDark ? 'from-slate-200 to-slate-400' : 'from-slate-600 to-slate-800'} bg-clip-text text-transparent font-normal`}>
                    Infrastructure Platform
                  </span>
                </h1>

                <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Secure, intelligent infrastructure management with AI-powered threat detection, zero-trust architecture, and enterprise-grade compliance built for scale.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a 
                  href="https://vault.futeursecure.com/login" 
                  className={`group px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-slate-200 text-slate-900 shadow-lg shadow-slate-200/20' : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'} hover:shadow-xl`}
                >
                  <span className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className={`text-lg font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                      {stat.value}
                    </div>
                    <div className={`text-xs mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual (Lottie) */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-[24rem] h-[24rem]">
                <div ref={lottieRef} className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Product Preview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div id="preview" data-animate className={`transition-all duration-700 ${isVisible['preview'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`rounded-xl overflow-hidden ${isDark ? 'bg-slate-900/50 border border-slate-800/50 shadow-2xl shadow-slate-950/20' : 'bg-white border border-slate-200/50 shadow-2xl shadow-slate-200/20'} backdrop-blur-sm hover:shadow-3xl transition-all duration-500`}>
              <div className={`px-4 py-3 flex items-center ${isDark ? 'bg-slate-800/50 border-b border-slate-700/50' : 'bg-slate-100/50 border-b border-slate-200/50'}`}>
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400 hover:bg-red-500 transition-colors duration-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors duration-200"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 hover:bg-green-500 transition-colors duration-200"></div>
                </div>
                <div className={`ml-4 px-3 py-1 rounded text-xs font-mono ${isDark ? 'bg-slate-700/50 text-slate-300' : 'bg-slate-200/50 text-slate-600'}`}>
                  vault.futeur.ai/console
                </div>
                <div className="ml-auto flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full bg-emerald-400 animate-pulse`}></div>
                  <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Live</span>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-3 space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <Lock className="w-5 h-5 text-emerald-500 mr-2" />
                          <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            Secure Vault Console
                          </h3>
                        </div>
                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'} mt-1`}>
                          Password sharing & team access control
                        </p>
                      </div>
                      <div className={`px-3 py-1.5 rounded-full text-xs font-medium ${isDark ? 'bg-emerald-900/30 text-emerald-300 border border-emerald-800/30' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'} animate-pulse`}>
                        🔒 VAULT SECURED
                      </div>
                    </div>
                    
                    {/* Vault Activity Chart */}
                    <div className={`h-36 rounded-lg ${isDark ? 'bg-slate-800/30 border border-slate-700/30' : 'bg-slate-50 border border-slate-200/50'} p-4 relative overflow-hidden`}>
                      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-emerald-900/10 to-blue-900/10' : 'bg-gradient-to-r from-emerald-50/50 to-blue-50/50'}`}></div>
                      <div className="relative">
                        <div className="flex justify-between items-center mb-3">
                          <span className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                            Secure Shares Activity
                          </span>
                          <span className={`text-xs ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                            +127 today
                          </span>
                        </div>
                        <div className="flex items-end justify-between h-20">
                          {[28, 45, 32, 61, 38, 55, 42, 67, 44, 59, 35, 48].map((height, i) => (
                            <div key={i} className="flex flex-col items-center space-y-1 flex-1">
                              <div
                                className={`w-3 rounded-sm transition-all duration-700 hover:scale-110 ${
                                  height > 50 
                                    ? 'bg-gradient-to-t from-emerald-500 to-emerald-400' 
                                    : 'bg-gradient-to-t from-slate-400 to-slate-300'
                                }`}
                                style={{ 
                                  height: `${height}%`,
                                  animationDelay: `${i * 100}ms`
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Shared Passwords Preview */}
                    <div className={`rounded-lg ${isDark ? 'bg-slate-800/20 border border-slate-700/20' : 'bg-white border border-slate-200/50'} p-4`}>
                      <h4 className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'} mb-3 flex items-center`}>
                        <Key className="w-4 h-4 mr-2 text-blue-500" />
                        Recent Vault Shares
                      </h4>
                      <div className="space-y-2">
                        {[
                          { name: 'AWS Production', team: 'DevOps Team', time: '2m ago' },
                          { name: 'Database Admin', team: 'Backend Team', time: '15m ago' },
                          { name: 'API Gateway', team: 'Security Team', time: '1h ago' }
                        ].map((item, i) => (
                          <div key={i} className={`flex items-center justify-between p-2 rounded ${isDark ? 'hover:bg-slate-700/30' : 'hover:bg-slate-50'} transition-all duration-200`}>
                            <div className="flex items-center">
                              <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-green-400' : i === 1 ? 'bg-blue-400' : 'bg-slate-400'} mr-3`}></div>
                              <div>
                                <div className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                                  {item.name}
                                </div>
                                <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                  Shared with {item.team}
                                </div>
                              </div>
                            </div>
                            <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              {item.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-4">
                    {/* Security Status */}
                    <div className={`p-5 rounded-lg ${isDark ? 'bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-700/30' : 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200/50'} relative overflow-hidden`}>
                      <div className={`absolute inset-0 ${isDark ? 'bg-emerald-500/5' : 'bg-emerald-500/10'}`}></div>
                      <div className="relative">
                        <div className="flex items-center mb-3">
                          <Shield className="w-4 h-4 text-emerald-500 mr-2" />
                          <span className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>
                            Vault Status: Secure
                          </span>
                        </div>
                        <p className={`text-xs ${isDark ? 'text-emerald-400/80' : 'text-emerald-600/80'} mb-3`}>
                          Zero-knowledge encryption active
                        </p>
                        <div className="flex items-center text-xs">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2"></div>
                          <span className={`${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                            All passwords encrypted & secured
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Team Access Stats */}
                    <div className="space-y-3">
                      <h4 className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'} flex items-center`}>
                        <Users className="w-4 h-4 mr-2 text-blue-500" />
                        Team Access
                      </h4>
                      {[
                        { label: 'Active Users', value: '24', color: 'emerald', change: '+3' },
                        { label: 'Shared Vaults', value: '127', color: 'blue', change: '+12' },
                        { label: 'Secure Sessions', value: '892', color: 'purple', change: '+45' }
                      ].map((item, i) => (
                        <div key={i} className={`p-4 rounded-lg ${isDark ? 'bg-slate-800/20 border border-slate-700/20 hover:bg-slate-800/30' : 'bg-white border border-slate-200/50 hover:bg-slate-50'} transition-all duration-300 group`}>
                          <div className="flex justify-between items-center">
                            <div>
                              <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                {item.label}
                              </span>
                              <div className="flex items-center mt-1">
                                <span className={`text-lg font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                                  {item.value}
                                </span>
                                <span className={`text-xs ml-2 px-1.5 py-0.5 rounded text-${item.color}-600 bg-${item.color}-100/50`}>
                                  {item.change}
                                </span>
                              </div>
                            </div>
                            <div className={`w-8 h-8 rounded-lg bg-${item.color}-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                              <div className={`w-2 h-2 rounded-full bg-${item.color}-500`}></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div id="features-header" data-animate className={`text-center mb-16 transition-all duration-700 ${isVisible['features-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className={`text-2xl md:text-3xl font-medium mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Enterprise-Grade Security
              <span className={`block text-base font-normal mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Built for modern infrastructure demands
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                id={`feature-${i}`}
                data-animate
                className={`group transition-all duration-700 ${isVisible[`feature-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-slate-900/30 border-slate-800/50 hover:border-slate-700/70 hover:bg-slate-900/50' : 'bg-white border-slate-200/50 hover:border-slate-300 hover:shadow-lg'}`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-r ${feature.accent}`}>
                    <feature.icon className={`w-5 h-5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`} />
                  </div>
                  
                  <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-200/30 bg-blue-50/10">
                  <span className={`text-sm font-medium ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                    Enterprise Management
                  </span>
                </div>

                <h2 className={`text-4xl md:text-5xl font-light leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Secure your organization with enterprise-grade vault management
                </h2>

                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Deploy comprehensive security across your entire organization with intuitive controls and centralized management.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Seamless organization deployment
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Deploy Futeur Vault across your entire organization with our streamlined admin console. Onboard teams instantly and manage access with granular controls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Advanced audit capabilities
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Comprehensive audit trails and activity monitoring provide complete visibility into your team's security posture and access patterns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Flexible security policies
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Define and enforce organization-wide security standards with customizable policies that adapt to your specific compliance requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
              <a
                  href="https://vault.futeursecure.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <button className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] ${
                  isDark 
                    ? 'bg-white text-gray-900 hover:bg-gray-100' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Start enterprise trial
                </button>
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/vault-image-1.png" 
                  alt="Enterprise Management Dashboard"
                  className="w-full max-w-lg rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Collaboration Section */}
      <section className={`py-24 px-6 ${isDark ? 'bg-gray-900/30' : 'bg-gray-50/50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Visual */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src="/vault-image-2.png" 
                  alt="Team Collaboration Interface"
                  className="w-full max-w-lg rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-200/30 bg-purple-50/10">
                  <span className={`text-sm font-medium ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                    Team Collaboration
                  </span>
                </div>

                <h2 className={`text-4xl md:text-5xl font-light leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Collaborate securely without compromising on productivity
                </h2>

                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Enable seamless collaboration while maintaining the highest security standards across your organization.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Secure credential sharing
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Share sensitive credentials, API keys, and confidential data with team members through encrypted channels and time-limited access.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Universal access control
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Streamline authentication across all platforms and devices with SSO integration and unified access management for enhanced productivity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Cross-platform synchronization
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Ensure your team stays connected and secure across all devices with real-time synchronization and offline access capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Next-generation authentication
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Implement passwordless authentication with biometric support and hardware keys for the ultimate security and user experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
              <a
                href="https://vault.futeursecure.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={`px-8 py-4 rounded-lg font-medium border transition-all duration-300 hover:scale-[1.02] ${
                  isDark 
                    ? 'border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800/50' 
                    : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                }`}>
                  Explore collaboration features
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Security Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-red-200/30 bg-red-50/10">
                  <span className={`text-sm font-medium ${isDark ? 'text-red-300' : 'text-red-700'}`}>
                    Advanced Security
                  </span>
                </div>

                <h2 className={`text-4xl md:text-5xl font-light leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Stay ahead of threats with intelligent security automation
                </h2>

                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Proactive threat detection and automated security responses keep your organization protected 24/7.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Real-time threat intelligence
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Continuous monitoring of global threat databases ensures immediate alerts when your organization's credentials are compromised.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Automated security analysis
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      AI-powered security assessments identify vulnerabilities and provide actionable recommendations for strengthening your security posture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Advanced phishing protection
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Sophisticated email masking and domain verification protect your team from increasingly sophisticated phishing attacks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Behavioral anomaly detection
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Machine learning algorithms analyze user behavior patterns to detect and prevent unauthorized access attempts in real-time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                    href="https://vault.futeursecure.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                <button className={`px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] ${
                  isDark 
                    ? 'bg-white text-gray-900 hover:bg-gray-100' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Activate advanced security
                </button>
                </a>
              </div>
            </div>

            {/* Right Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/vault-image-3.png" 
                  alt="Advanced Security Dashboard"
                  className="w-full max-w-lg rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div id="use-cases-header" data-animate className={`text-center mb-16 transition-all duration-700 ${isVisible['use-cases-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className={`text-2xl md:text-3xl font-medium mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Industry Solutions
            </h2>
            <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Tailored security for regulated industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, i) => (
              <div
                key={i}
                id={`use-case-${i}`}
                data-animate
                className={`transition-all duration-700 ${isVisible[`use-case-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`p-6 rounded-xl border transition-all duration-300 ${isDark ? 'bg-slate-900/20 border-slate-800/30 hover:border-slate-700/50' : 'bg-white border-slate-200/50 hover:border-slate-300'}`}>
                  <useCase.icon className={`w-8 h-8 mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`} />
                  <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {useCase.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <PricingSection isDark={isDark} />
      {/* Compliance & Certifications */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div id="compliance-header" data-animate className={`text-center mb-16 transition-all duration-700 ${isVisible['compliance-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className={`text-2xl md:text-3xl font-medium mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Compliance & Certifications
            </h2>
            <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Meeting the highest security and compliance standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                id={`cert-${i}`}
                data-animate
                className={`transition-all duration-700 ${isVisible[`cert-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`p-4 rounded-lg border text-center ${isDark ? 'bg-slate-900/20 border-slate-800/30' : 'bg-white border-slate-200/50'}`}>
                  <cert.icon className={`w-6 h-6 mx-auto mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`} />
                  <h4 className={`text-sm font-medium mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {cert.name}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded ${cert.status === 'Certified' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'}`}>
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div id="integrations-header" data-animate className={`text-center mb-16 transition-all duration-700 ${isVisible['integrations-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className={`text-2xl md:text-3xl font-medium mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Seamless Integrations
            </h2>
            <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Works with your existing infrastructure and tools
            </p>
          </div>

          <div id="integrations-grid" data-animate className={`grid grid-cols-3 md:grid-cols-6 gap-4 transition-all duration-700 ${isVisible['integrations-grid'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {integrations.map((integration, i) => (
              <div
                key={i}
                className={`p-4 rounded-lg border text-center transition-all duration-300 hover:scale-105 ${isDark ? 'bg-slate-900/20 border-slate-800/30 hover:border-slate-700/50' : 'bg-white border-slate-200/50 hover:border-slate-300'}`}
              >
                <div className="text-2xl mb-2">{integration.logo}</div>
                <div className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div id="social-proof" data-animate className={`transition-all duration-700 ${isVisible['social-proof'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <p className={`text-sm font-semibold tracking-wide uppercase mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Trusted by Industry Leaders
              </p>
              <p className={`text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Join thousands of security professionals who rely on our platform
              </p>
            </div>
            
            {/* Company Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-16">
              {companies.map((company, i) => (
                <div key={i} className={`group flex flex-col items-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${isDark ? 'bg-slate-800/50 hover:bg-slate-700/50' : 'bg-slate-50 hover:bg-slate-100'}`}>
                  <div className="text-2xl mb-3">{company.logo}</div>
                  <div className={`text-base font-semibold ${isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'} transition-colors`}>
                    {company.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className={`text-center p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${isDark ? 'border-slate-700 bg-slate-800/30 hover:bg-slate-800/50' : 'border-slate-200 bg-white hover:bg-slate-50'}`}>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.1)'} 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div id="final-cta" data-animate className={`text-center transition-all duration-700 ${isVisible['final-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${isDark ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-700 border border-slate-200'}`}>
              <Shield className="w-4 h-4 mr-2" />
              Enterprise Security Platform
            </div>

            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Secure your infrastructure
              <span className={`block ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                in minutes, not months
              </span>
            </h2>
            
            <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Deploy enterprise-grade security with zero-trust architecture, automated compliance, and real-time threat detection.
            </p>

            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                No credit card required
              </div>
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                14-day free trial
              </div>
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Setup in under 5 minutes
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  
    
  );  
};

export default FuteurVault;
