
import React, { useState } from "react";
import { Check, X, Shield, Users, Building, Crown, Star, ArrowRight, Info, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from "react-router-dom";
import NavigationBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [expandedFeature, setExpandedFeature] = useState(null);

  const pricingPlans = {
    individual: [
      {
        name: "FuteurVault Free",
        description: "Perfect for personal use",
        price: { monthly: 0, yearly: 0 },
        icon: <Shield className="w-6 h-6" />,
        color: "from-slate-600 to-slate-700",
        features: [
          "Unlimited passwords on 1 device",
          "Secure password sharing",
          "Dark web monitoring",
          "Multi-factor authentication",
          "24/7 customer support"
        ],
        limitations: [
          "Limited to 1 device",
          "Basic sharing features",
          "Standard support"
        ],
        cta: "Get Started Free",
        popular: false
      },
      {
        name: "FuteurVault Premium",
        description: "Advanced features for power users",
        price: { monthly: 3, yearly: 36 },
        icon: <Star className="w-6 h-6" />,
        color: "from-purple-600 to-purple-700",
        features: [
          "Unlimited passwords on unlimited devices",
          "Secure sharing with anyone",
          "1GB encrypted file storage",
          "Advanced multi-factor authentication",
          "Emergency access",
          "Priority customer support",
          "Advanced dark web monitoring"
        ],
        limitations: [],
        cta: "Start Free Trial",
        popular: true
      }
    ],
    business: [
      {
        name: "FuteurVault Teams",
        description: "For small teams and growing businesses",
        price: { monthly: 3, yearly: 36 },
        icon: <Users className="w-6 h-6" />,
        color: "from-blue-600 to-blue-700",
        perUser: true,
        minUsers: 3,
        features: [
          "Everything in Premium",
          "Shared team folders",
          "Admin dashboard",
          "Team member management",
          "Advanced sharing controls",
          "Security policies",
          "Team reporting"
        ],
        limitations: [],
        cta: "Start Free Trial",
        popular: false
      },
      {
        name: "FuteurVault Business",
        description: "Advanced security for larger organizations",
        price: { monthly: 8, yearly: 96 },
        icon: <Building className="w-6 h-6" />,
        color: "from-indigo-600 to-indigo-700",
        perUser: true,
        minUsers: 50,
        features: [
          "Everything in Teams",
          "Advanced admin controls",
          "Single Sign-On (SSO)",
          "Advanced security policies",
          "Custom user groups",
          "Detailed audit trails",
          "Advanced reporting",
          "Phone support"
        ],
        limitations: [],
        cta: "Contact Sales",
        popular: true
      },
      {
        name: "FuteurVault Maxx",
        description: "Maximum security for enterprises",
        price: { monthly: 15, yearly: 180 },
        icon: <Crown className="w-6 h-6" />,
        color: "from-purple-600 to-pink-600",
        perUser: true,
        minUsers: 100,
        features: [
          "Everything in Business",
          "Advanced threat intelligence",
          "Custom security policies",
          "Dedicated customer success manager",
          "Advanced compliance reporting",
          "Custom integrations",
          "24/7 priority support"
        ],
        limitations: [],
        cta: "Contact Sales",
        popular: false
      },
      {
        name: "FuteurVault Sovereign",
        description: "Ultimate control and compliance",
        price: "Custom",
        icon: <Shield className="w-6 h-6" />,
        color: "from-slate-800 to-slate-900",
        perUser: false,
        features: [
          "Everything in Maxx",
          "On-premises deployment",
          "Custom compliance controls",
          "Dedicated infrastructure",
          "White-label options",
          "Custom SLA agreements",
          "Dedicated security team"
        ],
        limitations: [],
        cta: "Contact Sales",
        popular: false
      }
    ]
  };

  const featureComparison = [
    {
      category: "Core Features",
      features: [
        {
          name: "Password storage",
          description: "Store unlimited passwords securely",
          free: "Limited",
          premium: "Unlimited",
          teams: "Unlimited",
          business: "Unlimited",
          maxx: "Unlimited",
          sovereign: "Unlimited"
        },
        {
          name: "Device sync",
          description: "Sync passwords across devices",
          free: "1 device",
          premium: "Unlimited",
          teams: "Unlimited",
          business: "Unlimited",
          maxx: "Unlimited",
          sovereign: "Unlimited"
        },
        {
          name: "Secure sharing",
          description: "Share passwords and notes securely",
          free: "Basic",
          premium: "Advanced",
          teams: "Team folders",
          business: "Advanced controls",
          maxx: "Enterprise sharing",
          sovereign: "Custom controls"
        }
      ]
    },
    {
      category: "Security & Compliance",
      features: [
        {
          name: "Multi-factor authentication",
          description: "Additional security layer for your vault",
          free: true,
          premium: true,
          teams: true,
          business: "Advanced MFA",
          maxx: "Enterprise MFA",
          sovereign: "Custom MFA"
        },
        {
          name: "Dark web monitoring",
          description: "Monitor if your data appears on the dark web",
          free: "Basic",
          premium: "Advanced",
          teams: "Team monitoring",
          business: "Enterprise monitoring",
          maxx: "Threat intelligence",
          sovereign: "Custom intelligence"
        },
        {
          name: "Security audit",
          description: "Regular security assessments",
          free: false,
          premium: "Basic",
          teams: "Team audit",
          business: "Advanced audit",
          maxx: "Custom audit",
          sovereign: "Dedicated audit"
        }
      ]
    },
    {
      category: "Business & Admin",
      features: [
        {
          name: "Admin dashboard",
          description: "Centralized management console",
          free: false,
          premium: false,
          teams: true,
          business: "Advanced",
          maxx: "Enterprise",
          sovereign: "Custom"
        },
        {
          name: "Single Sign-On (SSO)",
          description: "Integrate with your existing SSO provider",
          free: false,
          premium: false,
          teams: false,
          business: true,
          maxx: "Advanced SSO",
          sovereign: "Custom SSO"
        },
        {
          name: "API access",
          description: "Programmatic access to your vault",
          free: false,
          premium: false,
          teams: "Basic",
          business: "Advanced",
          maxx: "Enterprise",
          sovereign: "Custom API"
        }
      ]
    }
  ];

  const FeatureIcon = ({ included, value }) => {
    if (typeof included === 'boolean') {
      return included ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <X className="w-4 h-4 text-red-500" />
      );
    }
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 bg-clip-text text-transparent mb-6">
            FuteurVault Pricing
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Choose the perfect security solution for your needs. All plans include our core password management features with enterprise-grade encryption.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg border border-slate-200">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "yearly"
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Yearly
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="individual">Individual</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>

            <TabsContent value="individual">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {pricingPlans.individual.map((plan, index) => (
                  <Card key={index} className={`relative overflow-hidden border-2 ${plan.popular ? 'border-purple-300 shadow-2xl scale-105' : 'border-slate-200'}`}>
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center py-2 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardContent className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center text-white mr-4`}>
                          {plan.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                          <p className="text-slate-600 text-sm">{plan.description}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        {typeof plan.price === 'object' ? (
                          <div className="flex items-baseline">
                            <span className="text-4xl font-bold text-slate-900">
                              ${plan.price[billingCycle] === 0 ? '0' : billingCycle === 'monthly' ? plan.price.monthly : Math.floor(plan.price.yearly / 12)}
                            </span>
                            {plan.price[billingCycle] !== 0 && (
                              <span className="text-slate-600 ml-2">
                                /{billingCycle === 'monthly' ? 'month' : 'month, billed yearly'}
                              </span>
                            )}
                          </div>
                        ) : (
                          <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                        )}
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white`}>
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="business">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricingPlans.business.map((plan, index) => (
                  <Card key={index} className={`relative overflow-hidden border-2 ${plan.popular ? 'border-purple-300 shadow-2xl scale-105' : 'border-slate-200'}`}>
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-center py-2 text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <CardContent className={`p-6 ${plan.popular ? 'pt-10' : ''}`}>
                      <div className="flex items-center mb-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center text-white mr-3`}>
                          {plan.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 text-sm mb-4">{plan.description}</p>
                      
                      <div className="mb-6">
                        {typeof plan.price === 'object' ? (
                          <div>
                            <div className="flex items-baseline mb-1">
                              <span className="text-3xl font-bold text-slate-900">
                                ${billingCycle === 'monthly' ? plan.price.monthly : Math.floor(plan.price.yearly / 12)}
                              </span>
                              <span className="text-slate-600 ml-2">
                                /user/month
                              </span>
                            </div>
                            {plan.minUsers && (
                              <p className="text-sm text-slate-500">Minimum {plan.minUsers} users</p>
                            )}
                          </div>
                        ) : (
                          <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                        )}
                      </div>

                      <ul className="space-y-2 mb-8 text-sm">
                        {plan.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                        {plan.features.length > 4 && (
                          <li className="text-slate-500 text-xs">
                            +{plan.features.length - 4} more features
                          </li>
                        )}
                      </ul>

                      <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white text-sm`}>
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-slate-600">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="space-y-8">
            {featureComparison.map((category, categoryIndex) => (
              <Collapsible
                key={categoryIndex}
                open={expandedFeature === categoryIndex}
                onOpenChange={() => setExpandedFeature(expandedFeature === categoryIndex ? null : categoryIndex)}
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <h3 className="text-lg font-semibold text-slate-900">{category.category}</h3>
                  {expandedFeature === categoryIndex ? (
                    <ChevronUp className="w-5 h-5 text-slate-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-600" />
                  )}
                </CollapsibleTrigger>
                
                <CollapsibleContent className="pt-4">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-3 px-4 font-medium text-slate-900">Feature</th>
                          <th className="text-center py-3 px-2 font-medium text-slate-900">Free</th>
                          <th className="text-center py-3 px-2 font-medium text-slate-900">Premium</th>
                          <th className="text-center py-3 px-2 font-medium text-slate-900">Teams</th>
                          <th className="text-center py-3 px-2 font-medium text-slate-900">Business</th>
                          <th className="text-center py-3 px-2 font-medium text-slate-900">Maxx</th>
                          <th className="text-center py-3 px-2 font-medium text-slate-900">Sovereign</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.features.map((feature, featureIndex) => (
                          <tr key={featureIndex} className="border-b border-slate-100">
                            <td className="py-4 px-4">
                              <div>
                                <div className="font-medium text-slate-900">{feature.name}</div>
                                <div className="text-sm text-slate-600">{feature.description}</div>
                              </div>
                            </td>
                            <td className="text-center py-4 px-2">
                              <FeatureIcon included={feature.free} value={feature.free} />
                            </td>
                            <td className="text-center py-4 px-2">
                              <FeatureIcon included={feature.premium} value={feature.premium} />
                            </td>
                            <td className="text-center py-4 px-2">
                              <FeatureIcon included={feature.teams} value={feature.teams} />
                            </td>
                            <td className="text-center py-4 px-2">
                              <FeatureIcon included={feature.business} value={feature.business} />
                            </td>
                            <td className="text-center py-4 px-2">
                              <FeatureIcon included={feature.maxx} value={feature.maxx} />
                            </td>
                            <td className="text-center py-4 px-2">
                              <FeatureIcon included={feature.sovereign} value={feature.sovereign} />
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

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Can I switch plans at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial for all paid plans. No credit card required to start your trial."
              },
              {
                question: "What happens to my data if I cancel?",
                answer: "Your data remains accessible for 30 days after cancellation. You can export your data during this period."
              },
              {
                question: "Do you offer discounts for non-profits?",
                answer: "Yes, we offer special pricing for non-profit organizations and educational institutions. Contact our sales team for details."
              },
              {
                question: "Is my data secure?",
                answer: "Absolutely. We use end-to-end encryption, zero-knowledge architecture, and regular security audits to keep your data safe."
              }
            ].map((faq, index) => (
              <Collapsible key={index}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                  <span className="font-medium text-slate-900 text-left">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-slate-600" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-slate-50 rounded-b-lg border border-t-0 border-slate-200">
                  <p className="text-slate-700">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to secure your digital life?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start your free trial today and experience enterprise-grade security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-700 hover:bg-slate-100">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
