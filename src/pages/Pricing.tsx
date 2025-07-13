import React, { useState } from "react";
import { Check, X, Shield, Users, Building, Crown, Star, ArrowRight, Info, ChevronDown, ChevronUp, Globe, Smartphone, Lock, Eye, FileText, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from "react-router-dom";
import NavigationBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("annual");
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  const personalPlans = [
    {
      name: "Free",
      description: "Basic password management",
      price: { monthly: 0, annual: 0 },
      icon: <Shield className="w-6 h-6" />,
      color: "from-slate-600 to-slate-700",
      popular: false,
      features: [
        "Store unlimited passwords",
        "Sync across unlimited devices",
        "Secure password sharing",
        "Dark Web Monitoring",
        "Multi-factor Authentication",
        "Security Dashboard"
      ],
      limitations: [
        "Limited secure file storage (50MB)",
        "Basic sharing features only",
        "Standard sharing features only",
        "Standard customer support"
      ],
      cta: "Get FuteurVault Free",
      ctaLink: "/get-started"
    },
    {
      name: "Premium",
      description: "Advanced password management with premium features",
      price: { monthly: 3, annual: 36 },
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-600 to-purple-700",
      popular: true,
      features: [
        "Everything in Free, plus:",
        "1GB encrypted file storage",
        "Advanced multi-factor authentication",
        "Emergency access",
        "Advanced Dark Web Monitoring",
        "Priority customer support",
        "Secure file sharing",
        "Password health reports"
      ],
      limitations: [],
      cta: "Try Premium Free",
      ctaLink: "/get-started"
    },
    {
      name: "Families",
      description: "Premium features for up to 6 family members",
      price: { monthly: 4, annual: 48 },
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
      popular: false,
      features: [
        "Premium features for 6 users",
        "6GB total encrypted file storage",
        "Family manager dashboard",
        "Shared family vault",
        "Emergency access for all members",
        "Individual family member vaults",
        "Priority customer support"
      ],
      limitations: [],
      cta: "Try Families Free",
      ctaLink: "/get-started"
    }
  ];

  const businessPlans = [
    {
      name: "Teams",
      description: "Password management for small teams",
      price: { monthly: 4, annual: 48 },
      icon: <Users className="w-6 h-6" />,
      color: "from-green-600 to-green-700",
      popular: false,
      perUser: true,
      minUsers: "Starting at 3 users",
      features: [
        "Everything in Premium, plus:",
        "Shared team folders",
        "Admin console",
        "User group management",
        "Advanced sharing permissions",
        "Company-wide security policies",
        "Advanced reporting"
      ],
      cta: "Try Teams Free",
      ctaLink: "/get-started"
    },
    {
      name: "Business",
      description: "Advanced security for growing businesses",
      price: { monthly: 7, annual: 84 },
      icon: <Building className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-700",
      popular: true,
      perUser: true,
      minUsers: "Starting at 50 users",
      features: [
        "Everything in Teams, plus:",
        "Advanced admin controls",
        "Single Sign-On (SSO) integration",
        "Directory integration (AD/LDAP)",
        "Advanced security policies",
        "Custom user roles",
        "Detailed audit logs",
        "API access"
      ],
      cta: "Try Business Free",
      ctaLink: "/contact"
    },
    {
      name: "Enterprise",
      description: "Maximum security for large organizations",
      price: "Custom",
      icon: <Crown className="w-6 h-6" />,
      color: "from-purple-600 to-pink-600",
      popular: false,
      perUser: false,
      minUsers: "100+ users",
      features: [
        "Everything in Business, plus:",
        "On-premises deployment options",
        "Advanced threat intelligence",
        "Custom security policies",
        "Dedicated customer success manager",
        "24/7 premium support",
        "Custom integrations",
        "Advanced compliance reporting"
      ],
      cta: "Contact Sales",
      ctaLink: "/contact"
    }
  ];

  const featureComparison = [
    {
      category: "Core Features",
      features: [
        {
          name: "Unlimited password storage",
          free: true,
          premium: true,
          families: true,
          teams: true,
          business: true,
          enterprise: true
        },
        {
          name: "Unlimited device sync",
          free: true,
          premium: true,
          families: true,
          teams: true,
          business: true,
          enterprise: true
        },
        {
          name: "Secure password sharing",
          free: "Basic",
          premium: "Advanced",
          families: "Advanced",
          teams: "Team sharing",
          business: "Enterprise sharing",
          enterprise: "Custom controls"
        },
        {
          name: "Encrypted file storage",
          free: "50MB",
          premium: "1GB",
          families: "1GB per user",
          teams: "1GB per user",
          business: "1GB per user",
          enterprise: "Custom"
        }
      ]
    },
    {
      category: "Security & Monitoring",
      features: [
        {
          name: "Multi-factor authentication",
          free: true,
          premium: true,
          families: true,
          teams: true,
          business: "Advanced MFA",
          enterprise: "Enterprise MFA"
        },
        {
          name: "Dark Web Monitoring",
          free: "Basic",
          premium: "Advanced",
          families: "Advanced",
          teams: "Team monitoring",
          business: "Enterprise monitoring",
          enterprise: "Custom intelligence"
        },
        {
          name: "Security dashboard",
          free: true,
          premium: true,
          families: true,
          teams: true,
          business: "Advanced",
          enterprise: "Custom"
        },
        {
          name: "Password health reports",
          free: false,
          premium: true,
          families: true,
          teams: true,
          business: "Advanced reports",
          enterprise: "Custom reports"
        }
      ]
    },
    {
      category: "Business & Admin",
      features: [
        {
          name: "Admin console",
          free: false,
          premium: false,
          families: "Family manager",
          teams: true,
          business: "Advanced",
          enterprise: "Enterprise console"
        },
        {
          name: "User management",
          free: false,
          premium: false,
          families: "Family members",
          teams: "Team management",
          business: "Advanced management",
          enterprise: "Custom management"
        },
        {
          name: "Single Sign-On (SSO)",
          free: false,
          premium: false,
          families: false,
          teams: false,
          business: true,
          enterprise: "Advanced SSO"
        },
        {
          name: "Directory integration",
          free: false,
          premium: false,
          families: false,
          teams: false,
          business: true,
          enterprise: "Custom integration"
        }
      ]
    },
    {
      category: "Support & Compliance",
      features: [
        {
          name: "Customer support",
          free: "Community",
          premium: "Priority email",
          families: "Priority email",
          teams: "Priority email",
          business: "Phone + email",
          enterprise: "24/7 premium"
        },
        {
          name: "SLA guarantee",
          free: false,
          premium: false,
          families: false,
          teams: false,
          business: "99.9%",
          enterprise: "Custom SLA"
        },
        {
          name: "Compliance reporting",
          free: false,
          premium: false,
          families: false,
          teams: "Basic",
          business: "Advanced",
          enterprise: "Custom"
        }
      ]
    }
  ];

  const FeatureIcon = ({ included }: { included: boolean | string }) => {
    if (typeof included === 'boolean') {
      return included ? (
        <Check className="w-5 h-5 text-green-600" />
      ) : (
        <X className="w-5 h-5 text-gray-400" />
      );
    }
    return <span className="text-sm font-medium text-gray-900">{included}</span>;
  };

  const getPrice = (plan: any) => {
    if (typeof plan.price === 'string') return plan.price;
    return billingCycle === 'annual' 
      ? `$${Math.floor(plan.price.annual / 12)}` 
      : `$${plan.price.monthly}`;
  };

  const getSavings = (plan: any) => {
    if (typeof plan.price === 'string' || plan.price.monthly === 0) return null;
    const annualMonthly = plan.price.annual / 12;
    const savings = Math.round(((plan.price.monthly - annualMonthly) / plan.price.monthly) * 100);
    return savings > 0 ? `Save ${savings}%` : null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 bg-clip-text text-transparent mb-6">
            FuteurVault Pricing
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Secure your digital life with enterprise-grade password management. Choose the plan that fits your needs.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-16">
            <div className="bg-white rounded-full p-1 shadow-lg border border-slate-200">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                  billingCycle === "annual"
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Annual
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                  Save up to 17%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-16">
              <TabsTrigger value="personal" className="text-base font-medium">Personal</TabsTrigger>
              <TabsTrigger value="business" className="text-base font-medium">Business</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {personalPlans.map((plan, index) => (
                  <Card key={index} className={`relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-purple-300 shadow-2xl ring-4 ring-purple-100' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}>
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center py-3 text-sm font-bold">
                        MOST POPULAR
                      </div>
                    )}
                    <CardContent className={`p-8 ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                      <div className="flex items-center mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white mr-4`}>
                          {plan.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                          <p className="text-slate-600">{plan.description}</p>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <div className="flex items-baseline mb-2">
                          <span className="text-5xl font-bold text-slate-900">{getPrice(plan)}</span>
                          {typeof plan.price !== 'string' && plan.price.monthly > 0 && (
                            <span className="text-slate-600 ml-2 text-lg">
                              /{billingCycle === 'monthly' ? 'month' : 'month'}
                            </span>
                          )}
                        </div>
                        {billingCycle === 'annual' && getSavings(plan) && (
                          <span className="text-green-600 font-semibold text-sm">
                            {getSavings(plan)} vs monthly
                          </span>
                        )}
                        {billingCycle === 'annual' && typeof plan.price !== 'string' && plan.price.annual > 0 && (
                          <p className="text-slate-500 text-sm">
                            Billed as ${plan.price.annual}/year
                          </p>
                        )}
                      </div>

                      <Link to={plan.ctaLink}>
                        <Button className={`w-full mb-8 py-3 text-base font-semibold bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`}>
                          {plan.cta}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>

                      <div className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {plan.limitations.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-slate-200">
                          <p className="text-sm font-medium text-slate-600 mb-3">Limitations:</p>
                          <div className="space-y-2">
                            {plan.limitations.map((limitation, limitIndex) => (
                              <div key={limitIndex} className="flex items-start">
                                <X className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-600 text-sm">{limitation}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="business">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {businessPlans.map((plan, index) => (
                  <Card key={index} className={`relative overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-purple-300 shadow-2xl ring-4 ring-purple-100' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}>
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center py-3 text-sm font-bold">
                        MOST POPULAR
                      </div>
                    )}
                    <CardContent className={`p-8 ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                      <div className="flex items-center mb-6">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white mr-4`}>
                          {plan.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                          <p className="text-slate-600">{plan.description}</p>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <div className="flex items-baseline mb-2">
                          <span className="text-5xl font-bold text-slate-900">{getPrice(plan)}</span>
                          {typeof plan.price !== 'string' && (
                            <span className="text-slate-600 ml-2 text-lg">/user/month</span>
                          )}
                        </div>
                        {plan.minUsers && (
                          <p className="text-slate-500 text-sm mb-2">{plan.minUsers}</p>
                        )}
                        {billingCycle === 'annual' && getSavings(plan) && (
                          <span className="text-green-600 font-semibold text-sm">
                            {getSavings(plan)} vs monthly
                          </span>
                        )}
                      </div>

                      <Link to={plan.ctaLink}>
                        <Button className={`w-full mb-8 py-3 text-base font-semibold bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`}>
                          {plan.cta}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>

                      <div className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Compare Plans & Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See exactly what's included in each FuteurVault plan to find the perfect fit for your security needs.
            </p>
          </div>

          <div className="space-y-6">
            {featureComparison.map((category, categoryIndex) => (
              <Collapsible
                key={categoryIndex}
                open={expandedFeature === category.category}
                onOpenChange={() => setExpandedFeature(
                  expandedFeature === category.category ? null : category.category
                )}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                  <h3 className="text-xl font-bold text-slate-900">{category.category}</h3>
                  {expandedFeature === category.category ? (
                    <ChevronUp className="w-6 h-6 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-600" />
                  )}
                </CollapsibleTrigger>
                
                <CollapsibleContent className="pt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 rounded-lg bg-white">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="text-left py-4 px-6 font-bold text-slate-900 text-base">Feature</th>
                          <th className="text-center py-4 px-4 font-bold text-slate-900 text-base">Free</th>
                          <th className="text-center py-4 px-4 font-bold text-slate-900 text-base">Premium</th>
                          <th className="text-center py-4 px-4 font-bold text-slate-900 text-base">Families</th>
                          <th className="text-center py-4 px-4 font-bold text-slate-900 text-base">Teams</th>
                          <th className="text-center py-4 px-4 font-bold text-slate-900 text-base">Business</th>
                          <th className="text-center py-4 px-4 font-bold text-slate-900 text-base">Enterprise</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {category.features.map((feature, featureIndex) => (
                          <tr key={featureIndex} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-4 px-6 bg-white">
                              <div className="font-medium text-slate-900">{feature.name}</div>
                            </td>
                            <td className="text-center py-4 px-4 bg-white">
                              <FeatureIcon included={feature.free} />
                            </td>
                            <td className="text-center py-4 px-4 bg-white">
                              <FeatureIcon included={feature.premium} />
                            </td>
                            <td className="text-center py-4 px-4 bg-white">
                              <FeatureIcon included={feature.families} />
                            </td>
                            <td className="text-center py-4 px-4 bg-white">
                              <FeatureIcon included={feature.teams} />
                            </td>
                            <td className="text-center py-4 px-4 bg-white">
                              <FeatureIcon included={feature.business} />
                            </td>
                            <td className="text-center py-4 px-4 bg-white">
                              <FeatureIcon included={feature.enterprise} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            Trusted by millions worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Globe className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <h3 className="text-xl font-bold mb-2">Zero-Knowledge Security</h3>
              <p className="text-slate-300">Your data is encrypted before it leaves your device. Even we can't see your passwords.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Shield className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-2">Industry Compliance</h3>
              <p className="text-slate-300">SOC 2 Type II, ISO 27001, and other security certifications.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Eye className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">Regular Security Audits</h3>
              <p className="text-slate-300">Third-party security assessments and penetration testing.</p>
            </div>
          </div>
          <Button className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-3">
            Learn More About Our Security
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Get answers to common questions about FuteurVault pricing and features.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Can I switch between plans at any time?",
                answer: "Yes, you can upgrade or downgrade your FuteurVault plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
              },
              {
                question: "Is there a free trial available for paid plans?",
                answer: "Yes! We offer a 30-day free trial for all paid plans. No credit card required to start your trial, and you can cancel anytime."
              },
              {
                question: "What happens to my data if I downgrade or cancel?",
                answer: "Your data remains accessible for 90 days after downgrading or canceling. You can export your vault data at any time during this period."
              },
              {
                question: "Do you offer discounts for non-profits or educational institutions?",
                answer: "Yes, we provide special pricing for qualifying non-profit organizations and educational institutions. Contact our sales team for details."
              },
              {
                question: "How secure is my data with FuteurVault?",
                answer: "We use military-grade encryption and zero-knowledge architecture. Your data is encrypted on your device before transmission, so even we cannot access your passwords."
              },
              {
                question: "Can I use FuteurVault on multiple devices?",
                answer: "Yes! All plans (including Free) support unlimited device synchronization across Windows, Mac, iOS, Android, and web browsers."
              }
            ].map((faq, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-slate-900 text-left text-lg">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-slate-600 flex-shrink-0" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-6 bg-white rounded-b-lg border border-t-0 border-gray-200">
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to secure your digital life?
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Join millions of users who trust FuteurVault to keep their passwords and sensitive data secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started">
              <Button className="bg-white text-purple-700 hover:bg-slate-100 text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 text-lg px-8 py-4">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
