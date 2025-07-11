
import { useState, useEffect } from "react";
import { ArrowRight, Shield, Users, Key, Lock, Check, Star, Zap, Globe, Settings, Award, FileText, ChevronDown, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resetScroll } from "@/utils/navigationHelpers";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

const FuteurVaultTeams = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  useEffect(() => {
    resetScroll();
  }, []);

  const features = [
    {
      icon: Shield,
      title: "FuteurVault™ Foundation",
      description: "Quantum-encrypted vault technology with zero-knowledge architecture for ultimate password security."
    },
    {
      icon: Users,
      title: "Shared FuteurLink™",
      description: "Seamlessly share credentials and secure notes across your team with granular access controls."
    },
    {
      icon: Key,
      title: "Role-Based Access",
      description: "Define team roles and permissions with military-grade precision and automated policy enforcement."
    },
    {
      icon: Zap,
      title: "Up to 25 AutoPolicies™",
      description: "Intelligent automation that enforces password complexity, rotation, and compliance standards."
    },
    {
      icon: Globe,
      title: "AutoMesh™ Integration",
      description: "Connect seamlessly with Google Workspace, Microsoft 365, and 100+ business applications."
    },
    {
      icon: Settings,
      title: "Team Admin Tools",
      description: "Centralized dashboard for user management, activity monitoring, and security insights."
    }
  ];

  const faqs = [
    {
      question: "How does FuteurVault Teams protect my team's passwords?",
      answer: "FuteurVault Teams uses quantum-grade encryption with zero-knowledge architecture, meaning even we can't see your data. Every password is encrypted locally before syncing to our ZeroLeak Infrastructure."
    },
    {
      question: "Can my team share passwords securely?",
      answer: "Yes! FuteurLink™ allows secure sharing of credentials, notes, and files with granular permissions. You control who sees what, when they can access it, and for how long."
    },
    {
      question: "What's included in the 14-day free trial?",
      answer: "Full access to all FuteurVault Teams features for up to 50 users, including FuteurLink™, AutoPolicies™, and AutoMesh™ integrations. No credit card required."
    },
    {
      question: "How easy is it to migrate from our current password manager?",
      answer: "Our AutoMesh™ system can import from 40+ password managers including LastPass, 1Password, and Bitwarden. Most teams are fully migrated within 30 minutes."
    },
    {
      question: "What happens if someone leaves the team?",
      answer: "Offboarding is instant. Remove a user and their access to shared vaults is immediately revoked across all devices and applications."
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
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-200/30 bg-blue-50/10 mb-8">
              <span className={`text-sm font-medium ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                Perfect for Growing Teams
              </span>
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Bring Quantum-Grade Security to Your Team with{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                FuteurVault™ Teams
              </span>
            </h1>

            <p className={`text-xl leading-relaxed mb-10 max-w-3xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Secure, share, and manage passwords across your entire team with military-grade encryption, 
              intelligent automation, and seamless integrations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center">
                Unlock Your Quantum Vault Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className={`px-8 py-4 rounded-lg font-semibold text-lg border transition-all duration-300 ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}>
                Talk to Sales
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Check className="w-4 h-4 text-green-500 mr-2" />
                14-day free trial
              </div>
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Check className="w-4 h-4 text-green-500 mr-2" />
                No credit card required
              </div>
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Check className="w-4 h-4 text-green-500 mr-2" />
                Up to 50 users
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
              Everything Your Team Needs to Stay Secure
            </h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Built for teams of 2-50 who need enterprise-grade security without the complexity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className={`p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-slate-900/30 border-slate-800/50 hover:border-slate-700/70' : 'bg-white border-slate-200/50 hover:border-slate-300 hover:shadow-lg'}`}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                  <feature.icon className={`w-6 h-6 ${isDark ? 'text-blue-300' : 'text-blue-600'}`} />
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

      {/* Security & Compliance */}
      <section className={`py-20 px-6 ${isDark ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Encrypted-by-Design Architecture
          </h2>
          <p className={`text-lg mb-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Your data is protected by the same quantum-resistant encryption used by defense contractors
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "Zero-Knowledge", desc: "We can't see your data" },
              { icon: Lock, label: "AES-256 Encryption", desc: "Military-grade protection" },
              { icon: Award, label: "SOC 2 Certified", desc: "Enterprise compliance" },
              { icon: Zap, label: "Quantum MFA™", desc: "Future-proof security" }
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-white/80'}`}>
                <item.icon className={`w-8 h-8 mx-auto mb-3 ${isDark ? 'text-blue-300' : 'text-blue-600'}`} />
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {item.label}
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Simple, Transparent Pricing
          </h2>
          
          <div className={`p-8 rounded-2xl border-2 border-blue-500/20 ${isDark ? 'bg-slate-900/50' : 'bg-white'} relative`}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline justify-center">
                <span className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>$4</span>
                <span className={`text-lg ml-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>/user/month</span>
              </div>
              <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Billed annually • $6/month billed monthly
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Unlimited FuteurVaults™",
                "Up to 50 team members",
                "25 AutoPolicies™ included",
                "FuteurLink™ secure sharing",
                "AutoMesh™ integrations",
                "24/7 quantum support"
              ].map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300">
              Claim 14 Days of Infinite Protection
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 px-6 ${isDark ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Frequently Asked Questions
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
            Ready to Secure Your Team?
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Join thousands of teams who trust FuteurVault™ to protect their most valuable assets
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-xl hover:opacity-90 transition-all duration-300 flex items-center mx-auto">
            Start Your Free Trial Today
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FuteurVaultTeams;
