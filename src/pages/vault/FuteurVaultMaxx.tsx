
import { useState, useEffect } from "react";
import { ArrowRight, Shield, Users, Key, Lock, Check, Star, Zap, Globe, Settings, Award, FileText, ChevronDown, BarChart3, Eye, Cpu, Brain, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resetScroll } from "@/utils/navigationHelpers";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

const FuteurVaultMaxx = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  useEffect(() => {
    resetScroll();
  }, []);

  const features = [
    {
      icon: Zap,
      title: "Unlimited SSO",
      description: "Connect unlimited applications with single sign-on, including custom SAML and OAuth integrations for any business tool."
    },
    {
      icon: Eye,
      title: "SaaS Shadow™ Monitoring",
      description: "AI-powered discovery and monitoring of shadow IT applications with automated risk assessment and policy enforcement."
    },
    {
      icon: Brain,
      title: "ContextAware MFA™",
      description: "Intelligent multi-factor authentication that adapts to user behavior, location, device, and risk patterns in real-time."
    },
    {
      icon: Layers,
      title: "Advanced Threat Intelligence",
      description: "Proactive threat detection with global intelligence feeds, compromise alerts, and automated response protocols."
    },
    {
      icon: Settings,
      title: "Custom Policy Engine",
      description: "Build sophisticated security policies with conditional logic, automated workflows, and integration with external systems."
    },
    {
      icon: Award,
      title: "Zero-Trust Architecture",
      description: "Complete zero-trust implementation with device trust, network segmentation, and continuous security verification."
    }
  ];

  const faqs = [
    {
      question: "How does SaaS Shadow™ monitoring work?",
      answer: "SaaS Shadow™ uses AI to scan network traffic, DNS queries, and user behavior to identify unauthorized SaaS applications. It provides risk scoring, usage analytics, and automated policies to secure or block risky applications without disrupting productivity."
    },
    {
      question: "What makes ContextAware MFA™ different from standard MFA?",
      answer: "ContextAware MFA™ analyzes over 50 risk factors including location, device fingerprint, network, time patterns, and behavioral biometrics to determine authentication requirements. Low-risk scenarios may require just a biometric, while high-risk situations trigger multi-layered verification."
    },
    {
      question: "Can FuteurVault Maxx replace our existing SIEM?",
      answer: "FuteurVault Maxx complements your SIEM by providing identity-focused security intelligence. While it includes advanced threat detection and monitoring, it's designed to integrate with your existing SIEM for comprehensive security operations."
    },
    {
      question: "How does the unlimited SSO work with custom applications?",
      answer: "Our SSO engine supports SAML 2.0, OAuth 2.0, OpenID Connect, and custom APIs. For legacy or non-standard applications, our solutions engineering team can build custom connectors as part of your Maxx subscription."
    },
    {
      question: "What level of customization is available?",
      answer: "FuteurVault Maxx includes a complete policy engine, custom workflow builder, API access, and dedicated solutions engineering support to tailor the platform to your specific security requirements and business processes."
    }
  ];

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-slate-50'} transition-colors duration-300`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'rgba(148, 163, 184, 0.3)' : 'rgba(71, 85, 105, 0.3)'} 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-amber-200/30 bg-amber-50/10 mb-8">
              <span className={`text-sm font-medium ${isDark ? 'text-amber-300' : 'text-amber-700'}`}>
                Maximum Security Intelligence
              </span>
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Unleash Ultimate Protection with{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                FuteurVault™ Maxx
              </span>
            </h1>

            <p className={`text-xl leading-relaxed mb-10 max-w-3xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              The most advanced password management platform with AI-powered threat intelligence, 
              unlimited SSO, and context-aware security for maximum protection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center">
                Deploy FuteurVault Maxx – No Credit Card Needed
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className={`px-8 py-4 rounded-lg font-semibold text-lg border transition-all duration-300 ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}>
                Book Executive Demo
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Check className="w-4 h-4 text-green-500 mr-2" />
                45-day free trial
              </div>
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Check className="w-4 h-4 text-green-500 mr-2" />
                Dedicated solutions engineer
              </div>
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Check className="w-4 h-4 text-green-500 mr-2" />
                Custom integration support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Everything in Business, Plus AI-Powered Intelligence
            </h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Advanced AI capabilities and unlimited integrations for organizations with complex security requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className={`p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-slate-900/30 border-slate-800/50 hover:border-slate-700/70' : 'bg-white border-slate-200/50 hover:border-slate-300 hover:shadow-lg'}`}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-400/20 to-orange-500/20 flex items-center justify-center mb-4">
                  <feature.icon className={`w-6 h-6 ${isDark ? 'text-amber-300' : 'text-amber-600'}`} />
                </div>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Intelligence Section */}
      <section className={`py-20 px-6 ${isDark ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                AI-Powered Security Intelligence
              </h2>
              <p className={`text-lg mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Advanced artificial intelligence continuously monitors, analyzes, and responds to security threats before they impact your organization
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Behavioral Analytics",
                    desc: "Machine learning models detect anomalous user behavior and potential account compromise",
                    metric: "99.7% accuracy"
                  },
                  {
                    title: "Threat Prediction",
                    desc: "Predictive algorithms identify security risks before they materialize into incidents",
                    metric: "48hr advance warning"
                  },
                  {
                    title: "Auto-Remediation",
                    desc: "Automated response protocols contain and remediate threats without human intervention",
                    metric: "< 30sec response time"
                  }
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-lg border ${isDark ? 'border-slate-700 bg-slate-800/30' : 'border-slate-200 bg-white'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {item.title}
                      </h3>
                      <span className="text-xs bg-amber-500/20 text-amber-600 px-2 py-1 rounded">
                        {item.metric}
                      </span>
                    </div>
                    <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-8 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-white'} border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                SaaS Shadow™ Intelligence
              </h3>
              
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Discovered Applications</span>
                    <span className="text-amber-500 font-bold">247</span>
                  </div>
                  <div className="text-xs text-slate-500 mb-2">Risk Distribution</div>
                  <div className="flex space-x-1">
                    <div className="flex-1 h-2 bg-red-500 rounded"></div>
                    <div className="flex-1 h-2 bg-yellow-500 rounded"></div>
                    <div className="flex-1 h-2 bg-yellow-500 rounded"></div>
                    <div className="flex-1 h-2 bg-green-500 rounded"></div>
                    <div className="flex-1 h-2 bg-green-500 rounded"></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>High</span>
                    <span>Low</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Critical Risk</span>
                    </div>
                    <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>12</div>
                  </div>
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                    <div className="flex items-center mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Secured</span>
                    </div>
                    <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>198</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Maximum Security Intelligence
          </h2>
          
          <div className={`p-8 rounded-2xl border-2 border-amber-400/20 ${isDark ? 'bg-slate-900/50' : 'bg-white'} relative`}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                AI-Powered
              </span>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline justify-center">
                <span className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>$16</span>
                <span className={`text-lg ml-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>/user/month</span>
              </div>
              <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Billed annually • $24/month billed monthly
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Everything in Business, plus:",
                "Unlimited SSO integrations",
                "SaaS Shadow™ monitoring & control",
                "ContextAware MFA™ intelligence",
                "Advanced threat intelligence",
                "Custom policy engine & workflows",
                "Dedicated solutions engineer"
              ].map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300">
              Activate Maximum Protection
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 px-6 ${isDark ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Advanced Security Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`rounded-lg border ${isDark ? 'border-slate-700 bg-slate-800/30' : 'border-slate-200 bg-white'}`}>
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors"
                  onClick={() => toggleQuestion(i)}
                >
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeQuestion === i ? 'rotate-180' : ''} ${isDark ? 'text-slate-400' : 'text-slate-600'}`} />
                </button>
                {activeQuestion === i && (
                  <div className="px-6 pb-4">
                    <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Ready for Maximum Protection?
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Experience the most advanced password management platform with AI-powered intelligence and unlimited capabilities
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg font-semibold text-xl hover:opacity-90 transition-all duration-300 flex items-center mx-auto">
            Get Maximum Security Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FuteurVaultMaxx;
