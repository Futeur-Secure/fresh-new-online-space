import { useState, useEffect, useRef } from "react";
import { ArrowRight, Play, Shield, Database, Rocket, Check, Star, ArrowUpRight, ChevronDown, Zap, Globe, Lock, Brain, Layers, Award, Users, Cpu, Cloud, FileText, BarChart3, Settings, Briefcase, Key, TrendingUp, Smartphone, MonitorSpeaker, TabletSmartphone, Chrome, Search, Timer, Fingerprint, HardDrive, Eye, AlertTriangle, RefreshCw, CheckCircle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import { resetScroll } from "@/utils/navigationHelpers";
import { useTheme } from "@/context/ThemeContext";
import Footer from "@/components/Footer";
import React from "react";
import Waitlist from "@/components/WaitlistForm";
import PricingSection from "@/components/Pricing";
import InteractiveVaultFAQ from "@/components/vault/InteractiveVaultFAQ";

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
    { value: '50M+', label: 'Passwords Protected', icon: Lock },
    { value: '150+', label: 'Platform Integrations', icon: Globe },
    { value: '0', label: 'Data Breaches Ever', icon: Shield },
    { value: '< 1s', label: 'Password Autofill', icon: Zap }
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
      icon: Shield,
      title: "Military-Grade Encryption & HSM Integration",
      description: "AES-256 encryption with Hardware Security Module support and quantum-resistant algorithms for future-proof protection.",
      accent: "from-emerald-400/20 to-teal-500/20"
    },
    {
      icon: Brain,
      title: "AI-Powered Breach Detection",
      description: "Real-time monitoring of 15+ billion breach records with instant alerts and automated password rotation for compromised credentials.",
      accent: "from-amber-400/20 to-orange-500/20"
    },
    {
      icon: Globe,
      title: "Universal Browser & App Integration",
      description: "Seamless autofill across Chrome, Firefox, Safari, Edge extensions plus native iOS/Android apps with biometric unlock.",
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
                  Enterprise Password
                  <br />
                  <span className={`bg-gradient-to-r ${isDark ? 'from-slate-200 to-slate-400' : 'from-slate-600 to-slate-800'} bg-clip-text text-transparent font-normal`}>
                    Management Platform
                  </span>
                </h1>

                <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Advanced password security featuring breach monitoring, biometric authentication, browser extensions across all platforms, and quantum-resistant encryption. Trusted by 500+ enterprises with 99.9% uptime SLA.
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

      {/* Security Certifications Banner */}
      <section className={`py-12 px-6 ${isDark ? 'bg-slate-900/50' : 'bg-white'} border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {certifications.map((cert, i) => (
              <div key={i} className="flex items-center space-x-3">
                <cert.icon className={`w-6 h-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                <div>
                  <div className={`font-semibold text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{cert.name}</div>
                  <div className="text-xs text-emerald-600">{cert.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browser Extensions Showcase */}
      <section className={`py-20 px-6 ${isDark ? 'bg-gradient-to-r from-blue-950/20 to-indigo-950/20' : 'bg-gradient-to-r from-blue-50/50 to-indigo-50/50'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Available Everywhere You Work</h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>One-click installation. Instant password autofill. Works offline.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { name: 'Chrome', icon: Globe, users: '2B+ users', color: 'from-blue-500 to-blue-600' },
              { name: 'Safari', icon: Search, users: '1B+ users', color: 'from-blue-400 to-blue-500' },
              { name: 'Firefox', icon: Globe, users: '200M+ users', color: 'from-orange-500 to-red-500' },
              { name: 'Edge', icon: Search, users: '600M+ users', color: 'from-blue-600 to-purple-600' }
            ].map((browser, i) => (
              <div key={i} className={`p-6 rounded-xl shadow-sm transition-all duration-300 hover:scale-105 ${isDark ? 'bg-slate-800/50 hover:bg-slate-800/70' : 'bg-white hover:bg-slate-50'}`}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${browser.color} flex items-center justify-center`}>
                  <browser.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{browser.name}</h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{browser.users}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Smartphone, title: 'Mobile Apps', desc: 'Native iOS & Android apps with biometric unlock' },
              { icon: MonitorSpeaker, title: 'Desktop Apps', desc: 'Windows, macOS & Linux applications' },
              { icon: Timer, title: 'Instant Sync', desc: 'Real-time synchronization across all devices' }
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Why Choose FuteurVault?</h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>See how we compare to other password managers</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className={`w-full border rounded-lg ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
              <thead className={`${isDark ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
                <tr>
                  <th className={`text-left p-4 font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Feature</th>
                  <th className={`text-center p-4 font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>FuteurVault</th>
                  <th className={`text-center p-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>LastPass</th>
                  <th className={`text-center p-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>1Password</th>
                  <th className={`text-center p-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Dashlane</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Zero-Knowledge Architecture', us: '✅', comp1: '❌', comp2: '✅', comp3: '✅' },
                  { feature: 'Quantum-Resistant Encryption', us: '✅', comp1: '❌', comp2: '❌', comp3: '❌' },
                  { feature: 'HSM Integration', us: '✅', comp1: '❌', comp2: '❌', comp3: '❌' },
                  { feature: 'Real-time Breach Monitoring', us: '✅', comp1: '✅', comp2: '✅', comp3: '✅' },
                  { feature: 'Biometric Authentication', us: '✅', comp1: '✅', comp2: '✅', comp3: '✅' },
                  { feature: 'Hardware Security Keys', us: '✅', comp1: '✅', comp2: '✅', comp3: '❌' },
                  { feature: 'Unlimited Device Sync', us: '✅', comp1: '❌', comp2: '✅', comp3: '✅' },
                  { feature: 'API Access & Automation', us: '✅', comp1: '❌', comp2: '✅', comp3: '❌' }
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? (isDark ? 'bg-slate-900/30' : 'bg-white') : (isDark ? 'bg-slate-800/30' : 'bg-slate-50')}>
                    <td className={`p-4 font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{row.feature}</td>
                    <td className="text-center p-4 text-emerald-600 font-bold text-xl">{row.us}</td>
                    <td className={`text-center p-4 text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{row.comp1}</td>
                    <td className={`text-center p-4 text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{row.comp2}</td>
                    <td className={`text-center p-4 text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{row.comp3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enterprise Features Showcase */}
      <section className={`py-20 px-6 ${isDark ? 'bg-slate-900/30' : 'bg-slate-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Enterprise-Grade Features</h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Everything your organization needs for secure password management</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Advanced Team Management",
                features: ["Unlimited team members", "Role-based permissions", "SSO with SAML/LDAP", "Automated user provisioning"]
              },
              {
                icon: Shield,
                title: "Compliance & Security",
                features: ["SOC 2 Type II certified", "GDPR compliant", "99.9% uptime SLA", "24/7 security monitoring"]
              },
              {
                icon: BarChart3,
                title: "Analytics & Reporting",
                features: ["Security dashboards", "Compliance reports", "Usage analytics", "Audit trail exports"]
              },
              {
                icon: Zap,
                title: "Automation & APIs",
                features: ["Password rotation", "Workflow automation", "REST/GraphQL APIs", "Webhook notifications"]
              },
              {
                icon: Globe,
                title: "Global Deployment",
                features: ["Multi-region support", "Data residency controls", "CDN delivery", "Disaster recovery"]
              },
              {
                icon: Award,
                title: "Premium Support",
                features: ["Dedicated account manager", "Priority phone support", "Implementation assistance", "Custom training"]
              }
            ].map((item, i) => (
              <div key={i} className={`rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-8 ${isDark ? 'bg-slate-800/50 hover:bg-slate-800/70' : 'bg-white hover:bg-slate-50'}`}>
                <item.icon className={`w-12 h-12 mb-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <ul className="space-y-2">
                  {item.features.map((feature, j) => (
                    <li key={j} className={`flex items-center ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      <Check className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
                  Share passwords securely across your entire team
                </h2>

                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Enable secure password sharing and team collaboration while maintaining the highest security standards and zero-knowledge encryption.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Secure password sharing with granular permissions
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Share passwords, API keys, and sensitive credentials with role-based access controls, approval workflows, and time-limited sharing for maximum security.
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
                  Advanced password security with AI-powered threat detection
                </h2>

                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Proactive breach monitoring, automated password rotation, and intelligent security analysis keep your passwords protected 24/7.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Real-time password breach monitoring
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Continuous monitoring of 15+ billion breached passwords ensures immediate alerts and automatic password rotation when your credentials are compromised.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Automated password health analysis
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      AI-powered password analysis identifies weak, reused, and compromised passwords while providing actionable recommendations for strengthening your security.
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


      <PricingSection isDark={isDark} />
      {/* Compliance & Certifications */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-blue-50/30 dark:from-emerald-950/20 dark:to-blue-950/20"></div>
        <div className="max-w-6xl mx-auto relative">
          <div id="compliance-header" data-animate className={`text-center mb-16 transition-all duration-700 ${isVisible['compliance-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Security First Approach
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Compliance & <span className="text-emerald-600 dark:text-emerald-400">Certifications</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Meeting the highest security and compliance standards with industry-leading certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={i}
                id={`cert-${i}`}
                data-animate
                className={`group transition-all duration-700 hover-scale ${isVisible[`cert-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`relative p-6 rounded-2xl border-2 text-center transition-all duration-300 cursor-pointer ${
                  cert.status === 'Certified' 
                    ? `border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100/50 ${isDark ? 'dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:hover:bg-emerald-950/50 dark:hover:border-emerald-700 dark:hover:shadow-emerald-900/20' : ''}`
                    : `border-blue-200 bg-blue-50/50 hover:bg-blue-50 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 ${isDark ? 'dark:border-blue-800/50 dark:bg-blue-950/30 dark:hover:bg-blue-950/50 dark:hover:border-blue-700 dark:hover:shadow-blue-900/20' : ''}`
                }`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 ${
                    cert.status === 'Certified'
                      ? `bg-emerald-100 text-emerald-600 ${isDark ? 'dark:bg-emerald-900/50 dark:text-emerald-400' : ''}`
                      : `bg-blue-100 text-blue-600 ${isDark ? 'dark:bg-blue-900/50 dark:text-blue-400' : ''}`
                  }`}>
                    <cert.icon className="w-8 h-8" />
                  </div>
                  <h4 className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {cert.name}
                  </h4>
                  <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    cert.status === 'Certified' 
                      ? `bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 ${isDark ? 'dark:bg-emerald-500 dark:shadow-emerald-500/25' : ''}`
                      : `bg-blue-600 text-white shadow-lg shadow-blue-600/25 ${isDark ? 'dark:bg-blue-500 dark:shadow-blue-500/25' : ''}`
                  }`}>
                    {cert.status === 'Certified' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                    {cert.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:to-purple-950/20"></div>
        <div className="max-w-6xl mx-auto relative">
          <div id="integrations-header" data-animate className={`text-center mb-16 transition-all duration-700 ${isVisible['integrations-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Universal Compatibility
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Seamless <span className="text-blue-600 dark:text-blue-400">Integrations</span>
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Works effortlessly with your existing infrastructure and development tools
            </p>
          </div>

          <div id="integrations-grid" data-animate className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 transition-all duration-700 ${isVisible['integrations-grid'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {integrations.map((integration, i) => (
              <div
                key={i}
                className={`group relative p-6 rounded-2xl border-2 text-center transition-all duration-300 cursor-pointer hover-scale ${
                  isDark 
                    ? 'border-slate-700/50 bg-slate-800/30 hover:bg-slate-700/50 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-900/25' 
                    : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50'
                }`}
              >
                <div className="text-3xl mb-3 transition-all duration-300 group-hover:scale-110">{integration.logo}</div>
                <div className={`text-sm font-semibold transition-colors duration-300 ${
                  isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'
                }`}>
                  {integration.name}
                </div>
                <div className={`absolute inset-0 rounded-2xl border-2 border-blue-500/0 group-hover:border-blue-500/20 transition-all duration-300 ${
                  isDark ? 'group-hover:shadow-blue-500/10' : 'group-hover:shadow-blue-500/5'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof & Statistics */}
      <section className="py-20 px-6 relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-orange-50/30 dark:from-purple-950/20 dark:to-orange-950/20"></div>
        <div className="max-w-6xl mx-auto relative">
          <div id="social-proof" data-animate className={`transition-all duration-700 ${isVisible['social-proof'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Industry Leaders Trust Us
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Trusted by <span className="text-purple-600 dark:text-purple-400">Thousands</span>
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Join security professionals who rely on our platform for mission-critical protection
              </p>
            </div>
            
            {/* Company Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {companies.map((company, i) => (
                <div 
                  key={i} 
                  className={`group relative p-8 rounded-2xl border-2 text-center transition-all duration-300 cursor-pointer hover-scale ${
                    isDark 
                      ? 'border-slate-700/50 bg-slate-800/40 hover:bg-slate-700/60 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-900/25' 
                      : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50'
                  }`}
                >
                  <div className="text-4xl mb-4 transition-all duration-300 group-hover:scale-110">{company.logo}</div>
                  <div className={`text-lg font-bold transition-colors duration-300 ${
                    isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'
                  }`}>
                    {company.name}
                  </div>
                  <div className={`absolute inset-0 rounded-2xl border-2 border-purple-500/0 group-hover:border-purple-500/20 transition-all duration-300 ${
                    isDark ? 'group-hover:shadow-purple-500/10' : 'group-hover:shadow-purple-500/5'
                  }`}></div>
                </div>
              ))}
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                const colors = [
                  { bg: 'bg-emerald-500', shadow: 'shadow-emerald-500/25', text: 'text-emerald-600 dark:text-emerald-400' },
                  { bg: 'bg-blue-500', shadow: 'shadow-blue-500/25', text: 'text-blue-600 dark:text-blue-400' },
                  { bg: 'bg-purple-500', shadow: 'shadow-purple-500/25', text: 'text-purple-600 dark:text-purple-400' },
                  { bg: 'bg-orange-500', shadow: 'shadow-orange-500/25', text: 'text-orange-600 dark:text-orange-400' }
                ];
                const color = colors[i % colors.length];
                
                return (
                  <div 
                    key={i} 
                    className={`group relative text-center p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer hover-scale ${
                      isDark 
                        ? 'border-slate-700/50 bg-slate-800/40 hover:bg-slate-700/60 hover:border-slate-600 hover:shadow-xl hover:shadow-slate-900/25' 
                        : 'border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50'
                    }`}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 ${color.bg} text-white shadow-lg ${color.shadow}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className={`text-3xl md:text-4xl font-bold mb-3 transition-colors duration-300 ${color.text}`}>
                      {stat.value}
                    </div>
                    <div className={`text-sm font-semibold transition-colors duration-300 ${
                      isDark ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-600 group-hover:text-slate-700'
                    }`}>
                      {stat.label}
                    </div>
                    <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-${color.bg.split('-')[1]}-500/20 transition-all duration-300`}></div>
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

      <InteractiveVaultFAQ />

      <Footer />
    </div>
  );  
};

export default FuteurVault;
