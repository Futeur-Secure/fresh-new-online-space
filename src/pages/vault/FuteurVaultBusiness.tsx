
import { useState, useEffect } from "react";
import { ArrowRight, Shield, Users, Key, Lock, Check, Star, Zap, Globe, Settings, Award, FileText, ChevronDown, BarChart3, Eye, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resetScroll } from "@/utils/navigationHelpers";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

const FuteurVaultBusiness = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  useEffect(() => {
    resetScroll();
  }, []);

  const features = [
    {
      icon: Settings,
      title: "Mission Console™",
      description: "Advanced admin dashboard with comprehensive user management, detailed analytics, and security intelligence."
    },
    {
      icon: Shield,
      title: "SIEM Integration",
      description: "Connect with Splunk, QRadar, and other SIEM platforms for unified security monitoring and incident response."
    },
    {
      icon: Key,
      title: "Federated Login",
      description: "SSO integration with Active Directory, Azure AD, Okta, and 50+ identity providers for seamless authentication."
    },
    {
      icon: FileText,
      title: "Compliance Vaults™",
      description: "Pre-configured vaults for HIPAA, SOX, PCI-DSS, and other regulatory frameworks with automated audit trails."
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting",
      description: "Executive dashboards, security posture analytics, and custom reports for stakeholder visibility."
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "Real-time threat detection, anomaly alerts, and comprehensive activity logging across all team actions."
    }
  ];

  const faqs = [
    {
      question: "How does FuteurVault Business integrate with our existing IT infrastructure?",
      answer: "FuteurVault Business connects seamlessly with your Active Directory, LDAP, Azure AD, and SIEM systems through our AutoMesh™ technology. Most integrations are configured in under 15 minutes with our guided setup wizard."
    },
    {
      question: "What compliance standards does FuteurVault Business support?",
      answer: "We support HIPAA, SOX, PCI-DSS, GDPR, and SOC 2 compliance with pre-configured Compliance Vaults™, automated audit trails, and detailed reporting for regulatory reviews."
    },
    {
      question: "Can we migrate from our current enterprise password solution?",
      answer: "Yes! Our enterprise migration team provides white-glove migration from LastPass Business, 1Password Business, Bitwarden, and other enterprise solutions with zero downtime."
    },
    {
      question: "What level of admin control do we get?",
      answer: "Full administrative control through the Mission Console™ including user provisioning, policy enforcement, security monitoring, and detailed audit logs. You can set granular permissions at the team, department, or individual level."
    },
    {
      question: "Is there dedicated support for business customers?",
      answer: "Yes, Business customers get priority support with guaranteed 4-hour response times, dedicated customer success manager, and access to our enterprise support team."
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
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-200/30 bg-purple-50/10 mb-8">
              <span className={`text-sm font-medium ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                Enterprise-Ready Security
              </span>
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Scale Security Across Your Enterprise with{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                FuteurVault™ Business
              </span>
            </h1>

            <p className={`text-xl leading-relaxed mb-10 max-w-3xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Advanced password management with enterprise integrations, compliance automation, 
              and comprehensive admin controls for growing organizations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 flex items-center">
                Deploy Enterprise Security Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className={`px-8 py-4 rounded-lg font-semibold text-lg border transition-all duration-300 ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-50'}`}>
                Schedule Demo
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Check className="w-4 h-4 text-green-500 mr-2" />
                30-day free trial
              </div>
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Check className="w-4 h-4 text-green-500 mr-2" />
                White-glove migration
              </div>
              <div className={`flex items-center ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Check className="w-4 h-4 text-green-500 mr-2" />
                Unlimited users
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
              Everything in Teams, Plus Enterprise Controls
            </h2>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Advanced features for organizations that need comprehensive security management and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className={`p-6 rounded-xl border transition-all duration-300 hover:scale-[1.02] ${isDark ? 'bg-slate-900/30 border-slate-800/50 hover:border-slate-700/70' : 'bg-white border-slate-200/50 hover:border-slate-300 hover:shadow-lg'}`}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                  <feature.icon className={`w-6 h-6 ${isDark ? 'text-purple-300' : 'text-purple-600'}`} />
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

      {/* Integration & Compliance */}
      <section className={`py-20 px-6 ${isDark ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Seamless Enterprise Integration
              </h2>
              <p className={`text-lg mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Connect with your existing security stack and maintain compliance across all regulatory frameworks
              </p>

              <div className="space-y-4">
                {[
                  { icon: Cpu, title: "SIEM Integration", desc: "Splunk, QRadar, Azure Sentinel" },
                  { icon: Key, title: "Identity Providers", desc: "Active Directory, Azure AD, Okta" },
                  { icon: FileText, title: "Compliance Frameworks", desc: "HIPAA, SOX, PCI-DSS, GDPR" },
                  { icon: Shield, title: "Security Standards", desc: "SOC 2 Type II, ISO 27001" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <item.icon className={`w-5 h-5 ${isDark ? 'text-purple-300' : 'text-purple-600'}`} />
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-8 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-white'} border ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Mission Console™ Dashboard
              </h3>
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Security Score</span>
                    <span className="text-green-500 font-bold">98%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full ${isDark ? 'bg-slate-600' : 'bg-slate-200'}`}>
                    <div className="w-[98%] h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                    <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>1,247</div>
                    <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Active Users</div>
                  </div>
                  <div className={`p-3 rounded-lg ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                    <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>12,453</div>
                    <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Secured Items</div>
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
            Enterprise-Grade Security
          </h2>
          
          <div className={`p-8 rounded-2xl border-2 border-purple-500/20 ${isDark ? 'bg-slate-900/50' : 'bg-white'} relative`}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Best for Business
              </span>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline justify-center">
                <span className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>$8</span>
                <span className={`text-lg ml-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>/user/month</span>
              </div>
              <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Billed annually • $12/month billed monthly
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                "Everything in Teams, plus:",
                "Mission Console™ admin dashboard",
                "SIEM & identity provider integration",
                "Compliance Vaults™ & audit trails",
                "Advanced reporting & analytics",
                "Priority support with 4hr SLA"
              ].map((feature, i) => (
                <li key={i} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300">
              Start 30-Day Enterprise Trial
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 px-6 ${isDark ? 'bg-slate-900/30' : 'bg-slate-100/50'}`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Business Customer Questions
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
            Ready to Secure Your Enterprise?
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Join leading enterprises who trust FuteurVault™ Business to protect their critical infrastructure
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold text-xl hover:opacity-90 transition-all duration-300 flex items-center mx-auto">
            Talk to Our Enterprise Team
            <ArrowRight className="ml-3 w-6 h-6" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FuteurVaultBusiness;
