import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { 
  Check, 
  ChevronRight, 
  Shield, 
  Lock, 
  Server, 
  Database, 
  Star, 
  ArrowRight,
  HelpCircle,
  Sun,
  Moon
} from "lucide-react";
import { Link } from "react-router-dom";
import { resetScroll } from "@/utils/navigationHelpers";

const pricingTiers = [
  {
    name: "Starter",
    description: "For small businesses just starting with security",
    price: "$199",
    billing: "per month",
    features: [
      "Basic threat detection",
      "24/7 monitoring",
      "Email support",
      "Up to 10 devices",
      "Weekly security reports"
    ],
    cta: "Start Free Trial",
    popular: false,
    color: "from-indigo-500 to-indigo-700"
  },
  {
    name: "Professional",
    description: "For growing businesses with advanced security needs",
    price: "$499",
    billing: "per month",
    features: [
      "Advanced threat detection",
      "24/7 monitoring & alerts",
      "Phone & email support",
      "Up to 50 devices",
      "Daily security reports",
      "Hyperledger logging",
      "Basic Wazuh integration"
    ],
    cta: "Start Free Trial",
    popular: true,
    color: "from-indigo-600 to-purple-600"
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex security requirements",
    price: "Custom",
    billing: "contact for pricing",
    features: [
      "Custom security solutions",
      "24/7 dedicated support",
      "Unlimited devices",
      "Real-time monitoring & alerts",
      "Full Hyperledger implementation",
      "Advanced Wazuh integration",
      "Zeek network monitoring",
      "Custom security dashboard"
    ],
    cta: "Contact Sales",
    popular: false,
    color: "from-purple-600 to-purple-800"
  }
];

const steps = [
  {
    id: 1,
    title: "Schedule a Consultation",
    description: "Our security experts will discuss your needs and challenges to understand your requirements.",
    icon: Shield
  },
  {
    id: 2,
    title: "Security Assessment",
    description: "We'll evaluate your current security posture and identify vulnerabilities in your systems.",
    icon: Lock
  },
  {
    id: 3,
    title: "Custom Implementation",
    description: "Our team will implement tailored security solutions based on your specific needs.",
    icon: Server
  },
  {
    id: 4,
    title: "Ongoing Protection",
    description: "Continuous monitoring and regular updates to ensure your systems stay protected.",
    icon: Database
  }
];

const GetStarted = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  useEffect(() => {
    resetScroll();
  }, []);

  const [selectedBilling, setSelectedBilling] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(1);

  // Theme-aware classes
  const bgClass = isDarkMode ? "bg-[#090C19]" : "bg-gradient-to-br from-slate-50 to-blue-50";
  const textClass = isDarkMode ? "text-white" : "text-gray-900";
  const cardBgClass = isDarkMode 
    ? "bg-[#0d1433]/80 backdrop-blur-lg border-indigo-900/30" 
    : "bg-white/80 backdrop-blur-lg border-gray-200/50 shadow-xl";
  const secondaryTextClass = isDarkMode ? "text-gray-300" : "text-gray-600";
  const mutedTextClass = isDarkMode ? "text-gray-400" : "text-gray-500";

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      <Navbar />
      
      {/* Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className={`fixed top-24 right-6 z-50 p-3 rounded-full ${
          isDarkMode 
            ? "bg-indigo-900/30 hover:bg-indigo-800/50 border border-indigo-800/50" 
            : "bg-white/90 hover:bg-white border border-gray-200 shadow-lg"
        } transition-all duration-300`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600" />
        )}
      </motion.button>
      
      {/* Gradient background */}
      <div className={`absolute inset-0 ${
        isDarkMode 
          ? "bg-gradient-radial from-[#0d1433] to-[#080a15] opacity-80" 
          : "bg-gradient-radial from-blue-100/50 to-purple-100/30 opacity-60"
      } pointer-events-none transition-colors duration-300`}></div>
      
      <main className="pt-24 pb-16 relative z-10">
        <section className="container mx-auto px-4 py-12">
          {/* Subtle glow effects */}
          <div className={`absolute top-40 left-1/4 w-64 h-64 ${
            isDarkMode ? "bg-purple-500/10" : "bg-blue-400/20"
          } rounded-full blur-3xl transition-colors duration-300`}></div>
          <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 ${
            isDarkMode ? "bg-indigo-600/10" : "bg-purple-400/20"
          } rounded-full blur-3xl transition-colors duration-300`}></div>
          
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className={`font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 ${textClass}`}>
              Choose Your <span className={`bg-clip-text text-transparent ${
                isDarkMode 
                  ? "bg-gradient-to-r from-indigo-400 to-purple-500" 
                  : "bg-gradient-to-r from-indigo-600 to-purple-600"
              }`}>Protection Plan</span>
            </h1>
            <p className={`text-xl ${secondaryTextClass} font-light`}>
              Select the perfect security solution tailored to your business needs and transform your security posture
            </p>
          </motion.div>
          
          {/* Pricing toggle */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className={`${
              isDarkMode ? "bg-[#111836]" : "bg-gray-100"
            } p-1 rounded-full inline-flex transition-colors duration-300`}>
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedBilling === "monthly" 
                    ? `${isDarkMode ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"}` 
                    : `${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`
                }`}
                onClick={() => setSelectedBilling("monthly")}
              >
                Monthly Billing
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedBilling === "annual" 
                    ? `${isDarkMode ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white" : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"}` 
                    : `${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`
                }`}
                onClick={() => setSelectedBilling("annual")}
              >
                Annual Billing <span className={`text-xs ml-1 ${
                  isDarkMode ? "bg-indigo-500/20" : "bg-indigo-100"
                } px-2 py-0.5 rounded-full`}>Save 20%</span>
              </button>
            </div>
          </motion.div>
          
          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                className="h-full"
                onClick={() => setSelectedPlan(index)}
              >
                <Card 
                  className={`h-full ${cardBgClass} border transition-all duration-300 overflow-hidden ${
                    selectedPlan === index 
                      ? `${isDarkMode ? "border-indigo-500 shadow-lg shadow-indigo-500/20" : "border-indigo-400 shadow-2xl shadow-indigo-500/25"}` 
                      : `${isDarkMode ? "hover:border-indigo-500/50" : "hover:border-indigo-300 hover:shadow-xl"}`
                  } relative cursor-pointer`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-0 w-full">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-medium py-1.5 text-center">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className={`p-8 ${tier.popular ? 'pt-12' : 'pt-8'}`}>
                    <div className="mb-8">
                      <h3 className={`text-xl font-display font-medium mb-2 ${textClass}`}>{tier.name}</h3>
                      <p className={`${mutedTextClass} text-sm mb-6`}>{tier.description}</p>
                      <div className="flex items-baseline">
                        <span className={`text-4xl font-display font-light ${textClass}`}>{tier.price}</span>
                        <span className={`${mutedTextClass} text-sm ml-2`}>{tier.billing}</span>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <div className={`h-px ${
                        isDarkMode ? "bg-indigo-900/30" : "bg-gray-200"
                      } w-full mb-6 transition-colors duration-300`}></div>
                      <ul className="space-y-4">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className={`${
                              isDarkMode ? "bg-indigo-500/10" : "bg-indigo-100"
                            } p-1 rounded-full mr-3 mt-0.5 transition-colors duration-300`}>
                              <Check className={`${
                                isDarkMode ? "text-indigo-400" : "text-indigo-600"
                              } w-3 h-3`} />
                            </span>
                            <span className={`text-sm ${secondaryTextClass}`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      className={`w-full rounded-md group transition-all duration-300 ${
                        tier.popular 
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white' 
                          : `${
                              isDarkMode 
                                ? 'bg-indigo-900/30 hover:bg-indigo-800/50 border border-indigo-800/50' 
                                : 'bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700'
                            }`
                      }`}
                    >
                      <span>{tier.cta}</span>
                      <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className={`${mutedTextClass} text-sm`}>
              All plans include a 14-day free trial. No credit card required.
            </p>
          </motion.div>
        </section>
        
        {/* Features comparison */}
        <section className="container mx-auto px-4 py-16">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={`font-display text-3xl md:text-4xl font-light leading-tight mb-4 ${textClass}`}>
              Detailed <span className={`bg-clip-text text-transparent ${
                isDarkMode 
                  ? "bg-gradient-to-r from-indigo-400 to-purple-500" 
                  : "bg-gradient-to-r from-indigo-600 to-purple-600"
              }`}>Feature Comparison</span>
            </h2>
            <p className={secondaryTextClass}>
              Compare our security plans to find the perfect fit for your business
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-6xl mx-auto overflow-x-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <table className={`min-w-full ${cardBgClass} rounded-lg overflow-hidden transition-colors duration-300`}>
              <thead>
                <tr className={`border-b ${
                  isDarkMode ? "border-indigo-900/30" : "border-gray-200"
                } transition-colors duration-300`}>
                  <th className={`py-4 px-6 text-left text-sm font-medium ${secondaryTextClass}`}>Features</th>
                  <th className="py-4 px-6 text-center text-sm font-medium">
                    <div className={secondaryTextClass}>Starter</div>
                    <div className={`${isDarkMode ? "text-indigo-400" : "text-indigo-600"} text-xs`}>For small businesses</div>
                  </th>
                  <th className={`py-4 px-6 text-center text-sm font-medium ${
                    isDarkMode ? "bg-indigo-900/20" : "bg-indigo-50"
                  } transition-colors duration-300`}>
                    <div className={textClass}>Professional</div>
                    <div className={`${isDarkMode ? "text-indigo-400" : "text-indigo-600"} text-xs`}>Recommended</div>
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-medium">
                    <div className={secondaryTextClass}>Enterprise</div>
                    <div className={`${isDarkMode ? "text-indigo-400" : "text-indigo-600"} text-xs`}>For large organizations</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Threat Detection", starter: "Basic", professional: "Advanced", enterprise: "Enterprise-Grade" },
                  { feature: "Monitoring", starter: "24/7", professional: "24/7 with Alerts", enterprise: "Real-time with AI Analysis" },
                  { feature: "Support Level", starter: "Email Only", professional: "Phone & Email", enterprise: "Dedicated Support Team" },
                  { feature: "Devices", starter: "Up to 10", professional: "Up to 50", enterprise: "Unlimited" },
                  { feature: "Reports", starter: "Weekly", professional: "Daily", enterprise: "Custom & Real-time" },
                  { feature: "Hyperledger", starter: "—", professional: "Basic Logging", enterprise: "Full Implementation" },
                  { feature: "Wazuh Integration", starter: "—", professional: "Basic", enterprise: "Advanced" },
                  { feature: "Zeek Network Monitoring", starter: "—", professional: "—", enterprise: "✓" }
                ].map((row, index) => (
                  <tr key={index} className={`border-b ${
                    isDarkMode ? "border-indigo-900/30" : "border-gray-200"
                  } transition-colors duration-300`}>
                    <td className={`py-3 px-6 text-sm ${secondaryTextClass}`}>{row.feature}</td>
                    <td className={`py-3 px-6 text-center text-sm ${mutedTextClass}`}>{row.starter}</td>
                    <td className={`py-3 px-6 text-center text-sm ${textClass} ${
                      isDarkMode ? "bg-indigo-900/20" : "bg-indigo-50"
                    } transition-colors duration-300`}>{row.professional}</td>
                    <td className={`py-3 px-6 text-center text-sm ${mutedTextClass}`}>
                      {row.enterprise === "✓" ? (
                        <div className={`inline-flex items-center ${
                          isDarkMode ? "text-indigo-400" : "text-indigo-600"
                        }`}>
                          <Check className="w-4 h-4" />
                        </div>
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </section>
        
        {/* How to get started section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-12">
              <h2 className={`font-display text-3xl md:text-4xl font-light leading-tight mb-4 ${textClass}`}>
                Simple <span className={`bg-clip-text text-transparent ${
                  isDarkMode 
                    ? "bg-gradient-to-r from-indigo-400 to-purple-500" 
                    : "bg-gradient-to-r from-indigo-600 to-purple-600"
                }`}>Implementation Process</span>
              </h2>
              <p className={secondaryTextClass}>
                Our streamlined onboarding ensures a seamless security integration for your business
              </p>
            </div>
            
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 mt-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                  >
                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div className={`hidden md:block absolute top-12 left-[calc(50%-1px)] w-0.5 h-[calc(100%+3rem)] ${
                        isDarkMode 
                          ? "bg-gradient-to-b from-indigo-500 to-transparent" 
                          : "bg-gradient-to-b from-indigo-300 to-transparent"
                      } transition-colors duration-300`}></div>
                    )}
                    
                    <div className="flex flex-col items-center text-center">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${
                          isDarkMode ? "bg-[#0d1433]" : "bg-white"
                        } flex items-center justify-center border-2 ${
                          isDarkMode ? "border-indigo-500" : "border-indigo-400"
                        } transition-colors duration-300`}>
                          <span className={`text-sm font-medium ${
                            isDarkMode ? "text-white" : "text-indigo-600"
                          }`}>{step.id}</span>
                        </div>
                      </div>
                      
                      <h3 className={`text-xl font-medium mt-6 mb-2 ${textClass}`}>{step.title}</h3>
                      <p className={mutedTextClass}>{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition-opacity text-white py-6 px-8 rounded-md text-lg group">
                <span>Schedule Your Consultation</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </section>
        
        {/* Help section */}
        <section className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Card className={`${cardBgClass} overflow-hidden transition-colors duration-300`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="p-8 md:p-12">
                  <div className={`inline-flex items-center space-x-2 mb-6 ${
                    isDarkMode ? "bg-indigo-500/10" : "bg-indigo-100"
                  } px-3 py-1 rounded-full transition-colors duration-300`}>
                    <HelpCircle className={`w-4 h-4 ${
                      isDarkMode ? "text-indigo-400" : "text-indigo-600"
                    }`} />
                    <span className={`text-sm font-medium ${
                      isDarkMode ? "text-indigo-400" : "text-indigo-600"
                    }`}>Need help choosing?</span>
                  </div>
                  
                  <h2 className={`text-2xl md:text-3xl font-display font-light mb-4 ${textClass}`}>
                    Not Sure Which Plan Is <span className={`bg-clip-text text-transparent ${
                      isDarkMode 
                        ? "bg-gradient-to-r from-indigo-400 to-purple-500" 
                        : "bg-gradient-to-r from-indigo-600 to-purple-600"
                    }`}>Right for You?</span>
                  </h2>
                  
                  <p className={`${secondaryTextClass} mb-6`}>
                    Our security experts can help you determine the best solution for your organization's unique needs. Schedule a free consultation to discuss your security requirements and get personalized recommendations.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "Custom security assessment based on your industry",
                      "Clear explanation of recommended security measures",
                      "No obligation, pressure-free consultation"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="flex-shrink-0 mr-3">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <p className={`text-sm ${secondaryTextClass}`}>{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    
                    
                    <Link to="/solutions">
                      <Button className={`${
                        isDarkMode 
                          ? "border-indigo-500/30 hover:border-indigo-500 text-white" 
                          : "border-indigo-300 hover:border-indigo-500 text-white hover:text-indigo-800"
                      } rounded-md group transition-colors duration-300`} variant="outline">
                        <span>Explore Solutions</span>
                        <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="hidden md:block relative h-full">
                  {/* Modern abstract visualization */}
                  <div className={`absolute inset-0 ${
                    isDarkMode 
                      ? "bg-gradient-to-br from-indigo-900/20 to-purple-900/20" 
                      : "bg-gradient-to-br from-indigo-100/50 to-purple-100/30"
                  } transition-colors duration-300`}></div>
                  <div className="h-full p-12 flex flex-col justify-center">
                    <div className={`${
                      isDarkMode 
                        ? "bg-[#0d1433]/90 border-indigo-900/30" 
                        : "bg-white/95 border-gray-200"
                    } border rounded-lg p-6 backdrop-blur-lg transition-colors duration-300`}>
                      <h3 className={`text-xl font-medium mb-4 flex items-center ${textClass}`}>
                        <Star className={`${
                          isDarkMode ? "text-indigo-400" : "text-indigo-600"
                        } w-5 h-5 mr-2`} />
                        Quick Start Checklist
                      </h3>
                      <ul className="space-y-4">
                        {[
                          "Identify your most critical security concerns",
                          "List your current security tools and measures",
                          "Determine your organization size and security budget",
                          "Schedule your free consultation with our team",
                          "Receive your custom security implementation plan"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center">
                            <div className={`w-6 h-6 rounded-full ${
                              isDarkMode 
                                ? "bg-indigo-500/10 border-indigo-500/30" 
                                : "bg-indigo-100 border-indigo-300"
                            } border flex items-center justify-center mr-3 transition-colors duration-300`}>
                              <span className={`${
                                isDarkMode ? "text-indigo-400" : "text-indigo-600"
                              } text-xs`}>{index + 1}</span>
                            </div>
                            <span className={`text-sm ${secondaryTextClass}`}>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className={`mt-6 p-4 ${
                        isDarkMode 
                          ? "bg-indigo-500/10 border-indigo-500/20"
                          : "bg-indigo-100 border-indigo-200"
                      } rounded-lg`}>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className={`text-sm font-medium ${
                            isDarkMode ? "text-white/80" : "text-indigo-700"
                          }`}>
                            Ready to get started
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default GetStarted;