
import { useState, useEffect } from "react";
import { ArrowRight, Shield, Users, Key, Lock, Check, Star, Zap, Globe, Settings, Award, FileText, ChevronDown, BarChart3, Eye, Cpu, Brain, Layers, Crown, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resetScroll } from "@/utils/navigationHelpers";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

const FuteurVaultSovereign = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  useEffect(() => {
    resetScroll();
  }, []);

  const features = [
    {
      icon: Crown,
      title: "Dedicated Security Advisor",
      description: "Personal security architect and 24/7 dedicated support team exclusively assigned to your organization."
    },
    {
      icon: Award,
      title: "White-Glove Onboarding",
      description: "Complete migration and setup handled by our expert team with zero downtime and comprehensive training."
    },
    {
      icon: Settings,
      title: "Custom SLAs",
      description: "Tailored service level agreements with guaranteed response times, uptime commitments, and performance metrics."
    },
    {
      icon: Globe,
      title: "Site-Wide Control",
      description: "Complete organizational control with custom branding, private cloud deployment, and full administrative oversight."
    },
    {
      icon: Phone,
      title: "Executive Support",
      description: "Direct access to C-level executives and priority escalation channels for critical security incidents."
    },
    {
      icon: Brain,
      title: "Custom AI Training",
      description: "Personalized AI models trained on your organization's specific security patterns and threat landscape."
    }
  ];

  const services = [
    {
      title: "Strategic Security Assessment",
      description: "Comprehensive analysis of your current security posture with detailed recommendations and implementation roadmap."
    },
    {
      title: "Custom Integration Development",
      description: "Bespoke integrations with proprietary systems, legacy applications, and specialized security tools."
    },
    {
      title: "Regulatory Compliance Management",
      description: "End-to-end compliance management for complex regulatory frameworks with automated audit preparation."
    },
    {
      title: "Incident Response Services",
      description: "24/7 incident response team with forensic analysis, containment, and recovery services."
    }
  ];

  const faqs = [
    {
      question: "What makes FuteurVault Sovereign different from other enterprise solutions?",
      answer: "Sovereign provides white-glove service with dedicated personnel, custom SLAs, private cloud deployment options, and complete customization. You're not just a customer—you're a strategic partner with direct access to our executive team and engineering resources."
    },
    {
      question: "How does the dedicated security advisor program work?",
      answer: "Each Sovereign customer is assigned a dedicated security architect who becomes an extension of your team. They conduct quarterly security reviews, provide strategic guidance, and serve as your primary contact for all security initiatives and escalations."
    },
    {
      question: "Can we deploy FuteurVault in our private cloud or on-premises?",
      answer: "Yes, Sovereign customers can choose from cloud, hybrid, or fully on-premises deployments. Our team handles the complete setup, configuration, and ongoing maintenance while ensuring the same feature set and security standards."
    },
    {
      question: "What level of customization is available?",
      answer: "Unlimited. From custom UI branding to bespoke API integrations, workflow automation, and specialized security policies, our engineering team works directly with you to build exactly what your organization needs."
    },
    {
      question: "How do you ensure compliance with industry-specific regulations?",
      answer: "Our compliance team includes experts in healthcare, finance, government, and other regulated industries. We provide specialized compliance frameworks, automated audit trails, and work directly with your compliance officers to ensure requirements are met."
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
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-emerald-200/30 bg-emerald-50/10 mb-8">
              <Crown className="w-4 h-4 mr-2 text-emerald-500" />
              <span className={`text-sm font-medium ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>
                Ultimate Enterprise Security
              </span>
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Sovereign-Level Security with{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                FuteurVault™ Sovereign
              </span>
            </h1>

            <p className={`text-xl leading-relaxed mb-10 max-w-3xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              The ultimate enterprise security platform with dedicated support, custom deployment, 
              and white-glove service for organizations that demand absolute control and protection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center">
                Talk to a Sovereign Architect Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className={`px-8 py-4 rounded-lg font-semibold text-lg border transition-all duration-300 ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}>
                Executive Briefing
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Check className="w-4 h-4 text-green-500 mr-2" />
                Dedicated security advisor
              </div>
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Check className="w-4 h-4 text-green-500 mr-2" />
                White-glove onboarding
              </div>
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Check className="w-4 h-4 text-green-500 mr-2" />
                Custom deployment options
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
              Everything in Maxx, Plus Sovereign-Level Service
            </h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Dedicated support, custom deployment, and enterprise-grade service for mission-critical organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className={`p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-slate-900/30 border-slate-800/50 hover:border-slate-700/70' : 'bg-white border-slate-200/50 hover:border-slate-300 hover:shadow-lg'}`}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-400/20 to-teal-500/20 flex items-center justify-center mb-4">
                  <feature.icon className={`w-6 h-6 ${isDark ? 'text-emerald-300' : 'text-emerald-600'}`} />
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

      {/* Professional Services */}
      <section className={`py-20 px-6 ${isDark ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Comprehensive Professional Services
            </h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Beyond software—strategic security partnership with dedicated expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className={`p-8 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-white'} border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Flexible Deployment Options
            </h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Deploy exactly where and how your organization needs maximum security
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Private Cloud",
                description: "Dedicated cloud infrastructure with complete isolation and custom security controls",
                features: ["Dedicated hardware", "Custom networking", "Private key management", "Compliance ready"]
              },
              {
                title: "Hybrid Deployment",
                description: "Combine cloud flexibility with on-premises control for sensitive data and applications",
                features: ["Cloud + on-prem", "Data sovereignty", "Flexible architecture", "Seamless sync"]
              },
              {
                title: "On-Premises",
                description: "Complete on-site deployment with full control over infrastructure and data residency",
                features: ["Air-gapped option", "Full data control", "Custom hardware", "Zero cloud dependency"]
              }
            ].map((option, i) => (
              <div key={i} className={`p-6 rounded-xl border ${isDark ? 'bg-slate-900/30 border-slate-800/50' : 'bg-white border-slate-200/50'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {option.title}
                </h3>
                <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {option.description}
                </p>
                <ul className="space-y-2">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-emerald-500 mr-2" />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={`py-20 px-6 ${isDark ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Sovereign Access Tier™
          </h2>
          
          <div className={`p-8 rounded-2xl border-2 border-emerald-400/20 ${isDark ? 'bg-slate-900/50' : 'bg-white'} relative`}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                <Crown className="w-4 h-4 mr-1" />
                Sovereign Level
              </span>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline justify-center">
                <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Custom</span>
              </div>
              <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Pricing based on organization size and requirements
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Everything in Maxx, plus:",
                "Dedicated security advisor",
                "White-glove onboarding & migration",
                "Custom SLAs & support tiers",
                "Private/hybrid/on-prem deployment",
                "Executive support & escalation",
                "Custom AI model training",
                "Strategic security consulting"
              ].map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300">
              Contact Our Sovereign Team
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Sovereign Customer Questions
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
            Ready for Sovereign-Level Security?
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Join the most security-conscious organizations who trust FuteurVault™ Sovereign for their most critical assets
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold text-xl hover:opacity-90 transition-all duration-300 flex items-center">
              Schedule Executive Briefing
              <ArrowRight className="ml-3 w-6 h-6" />
            </button>
            <a href="tel:202-770-1742" className={`px-10 py-5 rounded-lg font-semibold text-xl border transition-all duration-300 flex items-center ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}>
              <Phone className="mr-3 w-6 h-6" />
              Call 202-770-1742
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FuteurVaultSovereign;
