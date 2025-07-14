
import React from "react";
import { Mail, Phone, Instagram, Linkedin, Youtube, ArrowRight, Check, Shield, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const plans = [
    {
      name: "Standard",
      price: "Free",
      description: "Essential password security",
      features: ["Unlimited passwords", "2FA support", "Basic autofill", "Mobile app"],
      gradient: "from-blue-500 to-cyan-500",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      popular: false
    },
    {
      name: "Plus",
      price: "$2.99",
      period: "/month",
      description: "Advanced security features",
      features: ["Everything in Standard", "Priority support", "Advanced 2FA", "Secure sharing", "Dark web monitoring"],
      gradient: "from-purple-500 to-pink-500",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      popular: true
    },
    {
      name: "Premium",
      price: "$4.99",
      period: "/month",
      description: "Ultimate password management",
      features: ["Everything in Plus", "Family sharing (6 users)", "Emergency access", "Advanced analytics", "VPN included"],
      gradient: "from-orange-500 to-red-500",
      textColor: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/30",
      popular: false
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Revolut-inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 text-white">
        {/* Plans Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Choose Your Security Level
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Plans that scale with your
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  security needs
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                From personal use to enterprise security, we've got the perfect plan for you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, i) => (
                <div 
                  key={i}
                  className={`relative group rounded-3xl p-8 backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'bg-white/20 border-white/40 shadow-xl' 
                      : 'bg-white/10 border-white/20 hover:bg-white/15'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.gradient} mb-4`}>
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-white/70 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-white/70 ml-1">{plan.period}</span>}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-purple-600 hover:bg-white/90 shadow-lg'
                      : 'bg-white/20 hover:bg-white/30 border border-white/30'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Footer Content */}
        <section className="py-16 px-6 border-t border-white/20">
          <div className="max-w-7xl mx-auto">
            {/* Quick CTA */}
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">
                Ready to secure your digital life?
              </h3>
              <p className="text-white/80 max-w-xl mx-auto mb-8">
                Join millions who trust FuteurVault with their most sensitive data
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="group flex items-center px-8 py-4 bg-white text-purple-600 hover:bg-white/90 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    No credit card required
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    14-day free trial
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
              <div>
                <h4 className="font-bold mb-4 text-white">Products</h4>
                <ul className="space-y-3">
                  <li><Link to="/shield" className="text-white/70 hover:text-white transition-colors">Futeur Shield</Link></li>
                  <li><Link to="/vault" className="text-white/70 hover:text-white transition-colors">Futeur Vault</Link></li>
                  <li><Link to="/features" className="text-white/70 hover:text-white transition-colors">Features</Link></li>
                  <li><Link to="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">For Business</h4>
                <ul className="space-y-3">
                  <li><Link to="/vault/teams" className="text-white/70 hover:text-white transition-colors">Teams</Link></li>
                  <li><Link to="/vault/business" className="text-white/70 hover:text-white transition-colors">Business</Link></li>
                  <li><Link to="/vault/maxx" className="text-white/70 hover:text-white transition-colors">Maxx</Link></li>
                  <li><Link to="/vault/sovereign" className="text-white/70 hover:text-white transition-colors">Sovereign</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Resources</h4>
                <ul className="space-y-3">
                  <li><Link to="/documentation" className="text-white/70 hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link to="/solutions" className="text-white/70 hover:text-white transition-colors">Solutions</Link></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Security Guide</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">API Docs</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Company</h4>
                <ul className="space-y-3">
                  <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/trust" className="text-white/70 hover:text-white transition-colors">Trust & Security</Link></li>
                  <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Support</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Community</a></li>
                  <li><a href="mailto:futureproof@futeursecure.com" className="text-white/70 hover:text-white transition-colors">Email Support</a></li>
                  <li><a href="tel:202-770-1742" className="text-white/70 hover:text-white transition-colors">Phone Support</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-white">Legal</h4>
                <ul className="space-y-3">
                  <li><a href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cookie Policy</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Security</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/20">
              <div className="flex items-center space-x-4 mb-6 md:mb-0">
                <img 
                  src="/icon.png" 
                  className="w-10 h-10 rounded-xl" 
                  alt="Futeur Secure Logo" 
                />
                <div>
                  <div className="font-bold text-lg">Futeur Secure</div>
                  <div className="text-white/70 text-sm">Enterprise Security Platform</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex space-x-3">
                  {[
                    { icon: Linkedin, href: "#", gradient: "from-blue-500 to-blue-600" },
                    { icon: Instagram, href: "#", gradient: "from-pink-500 to-rose-500" },
                    { icon: Youtube, href: "#", gradient: "from-red-500 to-red-600" }
                  ].map(({ icon: Icon, href, gradient }, index) => (
                    <a
                      key={index}
                      href={href}
                      className={`w-10 h-10 flex items-center justify-center bg-gradient-to-r ${gradient} rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-white/20 mt-8">
              <p className="text-white/60 text-sm">
                © 2025 Futeur Secure. All rights reserved. | 1156 15th St NW, Washington, DC 20005
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
