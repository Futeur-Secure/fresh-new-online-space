
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
      gradient: "from-slate-600 to-slate-700",
      textColor: "text-slate-400",
      bgColor: "bg-slate-800/50 dark:bg-slate-900/50",
      popular: false
    },
    {
      name: "Plus",
      price: "$2.99",
      period: "/month",
      description: "Advanced security features",
      features: ["Everything in Standard", "Priority support", "Advanced 2FA", "Secure sharing", "Dark web monitoring"],
      gradient: "from-slate-500 to-slate-600",
      textColor: "text-slate-300",
      bgColor: "bg-slate-700/50 dark:bg-slate-800/50",
      popular: true
    },
    {
      name: "Premium",
      price: "$4.99",
      period: "/month",
      description: "Ultimate password management",
      features: ["Everything in Plus", "Family sharing (6 users)", "Emergency access", "Advanced analytics", "VPN included"],
      gradient: "from-slate-400 to-slate-500",
      textColor: "text-slate-300",
      bgColor: "bg-slate-600/50 dark:bg-slate-700/50",
      popular: false
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      
      {/* Subtle silver pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c0c0c0 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 text-white">

        {/* Main Footer Content */}
        <section className="py-16 px-6 border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto">
            {/* Quick CTA */}
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4">
                Ready to secure your digital life?
              </h3>
              <p className="text-slate-300 max-w-xl mx-auto mb-8">
                Join millions who trust FuteurVault with their most sensitive data
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="group flex items-center px-8 py-4 bg-slate-200 text-slate-900 hover:bg-slate-100 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-2"></div>
                    No credit card required
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-2"></div>
                    14-day free trial
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
              <div>
                <h4 className="font-bold mb-4 text-slate-100">Products</h4>
                <ul className="space-y-3">
                  <li><Link to="/shield" className="text-slate-400 hover:text-slate-200 transition-colors">Futeur Shield</Link></li>
                  <li><Link to="/vault" className="text-slate-400 hover:text-slate-200 transition-colors">Futeur Vault</Link></li>
                  <li><Link to="/features" className="text-slate-400 hover:text-slate-200 transition-colors">Features</Link></li>
                  <li><Link to="/pricing" className="text-slate-400 hover:text-slate-200 transition-colors">Pricing</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-slate-100">For Business</h4>
                <ul className="space-y-3">
                  <li><Link to="/vault/teams" className="text-slate-400 hover:text-slate-200 transition-colors">Teams</Link></li>
                  <li><Link to="/vault/business" className="text-slate-400 hover:text-slate-200 transition-colors">Business</Link></li>
                  <li><Link to="/vault/maxx" className="text-slate-400 hover:text-slate-200 transition-colors">Maxx</Link></li>
                  <li><Link to="/vault/sovereign" className="text-slate-400 hover:text-slate-200 transition-colors">Sovereign</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-slate-100">Resources</h4>
                <ul className="space-y-3">
                  <li><Link to="/documentation" className="text-slate-400 hover:text-slate-200 transition-colors">Documentation</Link></li>
                  <li><Link to="/solutions" className="text-slate-400 hover:text-slate-200 transition-colors">Solutions</Link></li>
                  <li><Link to="/use-cases" className="text-slate-400 hover:text-slate-200 transition-colors">Use Cases</Link></li>
                  <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Security Guide</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">API Docs</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-slate-100">Company</h4>
                <ul className="space-y-3">
                  <li><Link to="/about" className="text-slate-400 hover:text-slate-200 transition-colors">About Us</Link></li>
                  <li><Link to="/trust" className="text-slate-400 hover:text-slate-200 transition-colors">Trust & Security</Link></li>
                  <li><Link to="/contact" className="text-slate-400 hover:text-slate-200 transition-colors">Contact</Link></li>
                  <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Careers</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-slate-100">Support</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Community</a></li>
                  <li><a href="mailto:futureproof@futeursecure.com" className="text-slate-400 hover:text-slate-200 transition-colors">Email Support</a></li>
                  <li><a href="tel:202-770-1742" className="text-slate-400 hover:text-slate-200 transition-colors">Phone Support</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-slate-100">Legal</h4>
                <ul className="space-y-3">
                  <li><a href="/privacy" className="text-slate-400 hover:text-slate-200 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-slate-400 hover:text-slate-200 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Cookie Policy</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-slate-200 transition-colors">Security</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-700/50">
              <div className="flex items-center space-x-4 mb-6 md:mb-0">
                <img 
                  src="/icon.png" 
                  className="w-10 h-10 rounded-xl" 
                  alt="Futeur Secure Logo" 
                />
                <div>
                  <div className="font-bold text-lg text-slate-100">Futeur Secure</div>
                  <div className="text-slate-400 text-sm">Enterprise Security Platform</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex space-x-3">
                  {[
                    { icon: Linkedin, href: "#", gradient: "from-slate-600 to-slate-700" },
                    { icon: Instagram, href: "#", gradient: "from-slate-500 to-slate-600" },
                    { icon: Youtube, href: "#", gradient: "from-slate-600 to-slate-700" }
                  ].map(({ icon: Icon, href, gradient }, index) => (
                    <a
                      key={index}
                      href={href}
                      className={`w-10 h-10 flex items-center justify-center bg-gradient-to-r ${gradient} rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg border border-slate-600/30`}
                    >
                      <Icon className="w-5 h-5 text-slate-200" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-slate-700/50 mt-8">
              <p className="text-slate-500 text-sm">
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
