
import { useState } from "react";
import { ChevronDown, Search, Users, Shield, Key, Zap, Building, Heart, Star, ArrowRight, CheckCircle } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  popularity: number;
  isHelpful?: boolean;
}

const VaultFAQ = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [helpfulItems, setHelpfulItems] = useState<string[]>([]);

  const categories = [
    { id: "all", name: "All Questions", icon: Star, count: 47 },
    { id: "personal", name: "Personal Use", icon: Users, count: 12 },
    { id: "enterprise", name: "Enterprise", icon: Building, count: 15 },
    { id: "security", name: "Security", icon: Shield, count: 8 },
    { id: "sharing", name: "Password Sharing", icon: Key, count: 7 },
    { id: "features", name: "Features", icon: Zap, count: 5 }
  ];

  const faqData: FAQItem[] = [
    // Personal Use Questions
    {
      id: "p1",
      question: "How is FuteurVault different from LastPass or 1Password?",
      answer: "FuteurVault uses quantum-resistant encryption and zero-knowledge architecture that even government agencies can't break. Unlike other managers, we offer FuteurLink™ for secure sharing, AutoPolicies™ for intelligent security automation, and AutoMesh™ for seamless integrations. Plus, our vault is completely open-source and audited by security researchers worldwide.",
      category: "personal",
      tags: ["comparison", "security", "features"],
      popularity: 95
    },
    {
      id: "p2", 
      question: "Can I import my passwords from Chrome, Firefox, or other browsers?",
      answer: "Absolutely! Our AutoMesh™ system supports importing from 40+ password managers and browsers including Chrome, Firefox, Safari, Edge, LastPass, 1Password, Bitwarden, and Dashlane. The import process takes less than 5 minutes and maintains all your folder structures and notes.",
      category: "personal",
      tags: ["import", "browsers", "migration"],
      popularity: 89
    },
    {
      id: "p3",
      question: "What happens if I forget my master password?",
      answer: "With zero-knowledge encryption, we cannot recover your master password. However, FuteurVault offers multiple recovery options: emergency recovery contacts, biometric backup (if enabled), and secure recovery codes. We recommend setting up at least two recovery methods during initial setup.",
      category: "personal", 
      tags: ["recovery", "master-password", "backup"],
      popularity: 87
    },
    {
      id: "p4",
      question: "Does FuteurVault work offline?",
      answer: "Yes! FuteurVault maintains a local encrypted cache on your devices, so you can access your passwords even without internet. Changes sync automatically once you're back online. This offline capability is crucial for travelers and areas with poor connectivity.",
      category: "personal",
      tags: ["offline", "sync", "mobile"],
      popularity: 82
    },
    {
      id: "p5",
      question: "How secure is the mobile app compared to the desktop version?",
      answer: "Both versions use identical quantum-grade encryption. The mobile app includes additional security features like biometric unlock, app-specific PINs, auto-lock timers, and screenshot protection. Many users actually find the mobile app more convenient for daily use.",
      category: "personal",
      tags: ["mobile", "security", "biometric"],
      popularity: 78
    },

    // Enterprise Questions  
    {
      id: "e1",
      question: "How does FuteurVault handle employee onboarding and offboarding?",
      answer: "Enterprise admin consoles provide instant user provisioning and deprovisioning. When someone joins, they get access to relevant shared vaults within minutes. When they leave, all access is revoked immediately across all devices and applications. We also provide detailed audit trails for compliance.",
      category: "enterprise",
      tags: ["onboarding", "admin", "compliance"],
      popularity: 93
    },
    {
      id: "e2",
      question: "Can we integrate FuteurVault with our existing SSO solution?",
      answer: "Yes! FuteurVault integrates with all major SSO providers including Okta, Azure AD, Google Workspace, OneLogin, and SAML-based systems. Our AutoMesh™ technology makes setup effortless, usually completed in under 30 minutes.",
      category: "enterprise", 
      tags: ["sso", "integration", "authentication"],
      popularity: 91
    },
    {
      id: "e3",
      question: "What compliance standards does FuteurVault meet?",
      answer: "FuteurVault is SOC 2 Type II certified, GDPR compliant, HIPAA ready, and meets ISO 27001 standards. We undergo regular third-party security audits and maintain detailed compliance documentation for enterprise customers.",
      category: "enterprise",
      tags: ["compliance", "soc2", "gdpr", "hipaa"],
      popularity: 88
    },
    {
      id: "e4", 
      question: "How do we migrate 500+ employees from our current password manager?",
      answer: "Our Enterprise Migration Team handles large-scale transitions with zero downtime. We provide dedicated project managers, bulk import tools, training sessions, and 24/7 support during migration. Most 500+ employee migrations complete within 2 weeks.",
      category: "enterprise",
      tags: ["migration", "enterprise", "support"],
      popularity: 85
    },
    {
      id: "e5",
      question: "Can we self-host FuteurVault on our own servers?",
      answer: "Yes! FuteurVault Sovereign allows complete on-premises deployment while maintaining all cloud features. You get full data sovereignty, custom security policies, and integration with your existing infrastructure. Perfect for highly regulated industries.",
      category: "enterprise",
      tags: ["self-host", "sovereign", "on-premises"],
      popularity: 79
    },

    // Security Questions
    {
      id: "s1",
      question: "How does quantum-resistant encryption work?",
      answer: "FuteurVault uses post-quantum cryptographic algorithms that remain secure even against quantum computers. Our encryption combines AES-256 with lattice-based cryptography and hash-based signatures, ensuring your data stays protected for decades to come.",
      category: "security",
      tags: ["quantum", "encryption", "future-proof"],
      popularity: 86
    },
    {
      id: "s2",
      question: "What happens if FuteurVault gets hacked?",
      answer: "Even if our servers were compromised, your data remains secure due to zero-knowledge encryption. We cannot decrypt your vault - only you can. Additionally, we use advanced threat detection, regular security audits, and have a bug bounty program with top security researchers.",
      category: "security", 
      tags: ["breach", "zero-knowledge", "threat-detection"],
      popularity: 84
    },
    {
      id: "s3",
      question: "Can FuteurVault detect if my passwords appear in data breaches?",
      answer: "Yes! Our Breach Guardian monitors over 15 billion compromised credentials across the dark web and notifies you instantly if any of your passwords are found. It also provides one-click password updates for affected accounts.",
      category: "security",
      tags: ["breach-monitoring", "dark-web", "alerts"],
      popularity: 81
    },

    // Password Sharing Questions
    {
      id: "sh1",
      question: "How do I securely share passwords with family members?",
      answer: "FuteurLink™ makes family sharing effortless. Create a family vault, invite members via email, and they get instant access to shared passwords. You control who sees what, and can revoke access anytime. Perfect for streaming services, WiFi passwords, and shared accounts.",
      category: "sharing",
      tags: ["family", "sharing", "futeurlink"],
      popularity: 90
    },
    {
      id: "sh2",
      question: "Can I share passwords with people who don't have FuteurVault?",
      answer: "Yes! FuteurLink™ allows secure sharing via encrypted links that expire automatically. Recipients can view passwords without creating an account, and you get notifications when links are accessed. Perfect for contractors or temporary access needs.",
      category: "sharing",
      tags: ["external-sharing", "temporary", "links"],
      popularity: 83
    },
    {
      id: "sh3",
      question: "How do I stop sharing a password without changing it?",
      answer: "Simply remove the person from the shared vault or revoke their specific access. They'll lose access immediately across all their devices, but the password remains unchanged for you. You can also set time-based access that expires automatically.",
      category: "sharing",
      tags: ["revoke-access", "permissions", "time-based"],
      popularity: 77
    },

    // Features Questions  
    {
      id: "f1",
      question: "What are AutoPolicies and how do they work?",
      answer: "AutoPolicies™ are intelligent security rules that automatically enforce password complexity, rotation schedules, and compliance standards. They can detect weak passwords, suggest improvements, and even update passwords automatically with your approval. It's like having a personal security expert.",
      category: "features",
      tags: ["autopolicies", "automation", "password-health"],
      popularity: 76
    },
    {
      id: "f2",
      question: "Does FuteurVault have a password generator?",
      answer: "Yes! Our Quantum Password Generator creates truly random passwords using quantum entropy sources. You can customize length, complexity, and exclude confusing characters. It also generates passphrases, PINs, and security questions.",
      category: "features", 
      tags: ["password-generator", "quantum", "customization"],
      popularity: 74
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const markHelpful = (id: string) => {
    setHelpfulItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData
    .filter(faq => 
      activeCategory === "all" || faq.category === activeCategory
    )
    .filter(faq =>
      searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <section className={`py-24 px-6 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/50 dark:bg-blue-900/20 border border-blue-200/30 dark:border-blue-800/30 mb-6">
            <Star className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Community-Driven FAQ
            </span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Everything You Need to Know
            <span className="block text-2xl font-normal mt-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              About FuteurVault™
            </span>
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Answers to 500+ real questions from our community. From password sharing pain points 
            to enterprise security concerns - we've got you covered.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
            <input
              type="text"
              placeholder="Search FAQ... (e.g., 'family sharing', 'enterprise migration')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-4 rounded-xl border transition-all duration-200 ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500' 
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-500 focus:border-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : isDark
                        ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                        : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                  }`}>
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => {
            const isOpen = openItems.includes(faq.id);
            const isHelpful = helpfulItems.includes(faq.id);
            
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-200 ${
                  isDark 
                    ? 'bg-slate-900/30 border-slate-800/50 hover:border-slate-700/70' 
                    : 'bg-white border-slate-200/50 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-800/30 rounded-xl transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium mr-3 ${
                            faq.category === 'personal' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' :
                            faq.category === 'enterprise' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                            faq.category === 'security' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' :
                            faq.category === 'sharing' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                            'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                          }`}>
                            {faq.category}
                          </span>
                          
                          <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                            <Star className="w-3 h-3 mr-1" />
                            {faq.popularity}% helpful
                          </div>
                        </div>
                        
                        <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {faq.question}
                        </h3>
                        
                        <div className="flex flex-wrap gap-1 mt-2">
                          {faq.tags.slice(0, 3).map(tag => (
                            <span 
                              key={tag}
                              className={`text-xs px-2 py-0.5 rounded ${
                                isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      } ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                    </button>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <div className="px-6 pb-6">
                      <div className={`p-4 rounded-lg ${
                        isDark ? 'bg-slate-800/30' : 'bg-slate-50'
                      }`}>
                        <p className={`leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          {faq.answer}
                        </p>
                        
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => markHelpful(faq.id)}
                              className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                                isHelpful
                                  ? 'bg-green-500 text-white'
                                  : isDark
                                    ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                              }`}
                            >
                              <Heart className={`w-4 h-4 ${isHelpful ? 'fill-current' : ''}`} />
                              <span>{isHelpful ? 'Helpful!' : 'Helpful?'}</span>
                            </button>
                            
                            <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              Question #{index + 1}
                            </span>
                          </div>
                          
                          <button className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                            isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'
                          }`}>
                            <span>Still need help?</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 p-8 rounded-2xl text-center ${
          isDark 
            ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30' 
            : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Didn't find what you're looking for?
          </h3>
          
          <p className={`text-lg mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Our community and support team are here to help 24/7
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Ask Our Community
            </button>
            
            <button className={`px-6 py-3 rounded-lg font-semibold border transition-colors ${
              isDark 
                ? 'border-slate-600 text-slate-300 hover:bg-slate-800' 
                : 'border-slate-300 text-slate-700 hover:bg-slate-50'
            }`}>
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaultFAQ;
