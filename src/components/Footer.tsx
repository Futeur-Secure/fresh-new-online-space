
import React from "react";
import { Mail, Phone, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-indigo-950 text-slate-300 pt-16 pb-8 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.1),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-900/20 via-purple-900/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Compact Call to Action */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to secure your business?
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-6">
            Contact us to learn about Futeur Shield and Futeur Vault.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="mailto:futureproof@futeursecure.com" 
              className="group flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2 text-indigo-400" />
              <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                futureproof@futeursecure.com
              </span>
            </a>
            
            <a 
              href="tel:202-770-1742" 
              className="group flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                202-770-1742
              </span>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/shield"
                  className="text-slate-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                >
                  Futeur Shield
                </Link>
              </li>
              <li>
                <Link
                  to="/vault"
                  className="text-slate-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  Futeur Vault
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">For Businesses</h4>
            <div className="mb-3">
              <h5 className="text-slate-300 font-medium text-sm mb-2">FuteurVault</h5>
              <ul className="space-y-2 pl-2">
                <li>
                  <Link
                    to="/vault/teams"
                    className="text-slate-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    Teams
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vault/business"
                    className="text-slate-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    Business
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vault/maxx"
                    className="text-slate-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    Maxx
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vault/sovereign"
                    className="text-slate-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  >
                    Sovereign
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-slate-300 transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/trust"
                  className="text-slate-400 hover:text-slate-300 transition-colors duration-200 text-sm"
                >
                  Trust
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-slate-400 text-sm">
                1156 15th St NW<br />
                Washington, DC 20005
              </li>
              <li>
                <a 
                  href="tel:202-770-1742"
                  className="text-slate-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                >
                  202-770-1742
                </a>
              </li>
              <li>
                <a 
                  href="mailto:futureproof@futeursecure.com"
                  className="text-slate-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                >
                  futureproof@futeursecure.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-slate-400 hover:text-slate-300 transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-slate-400 hover:text-slate-300 transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8"></div>

        {/* Brand and Social */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img 
              src="/icon.png" 
              className="w-8 h-8 rounded-lg" 
              alt="Futeur Secure Logo" 
            />
            <div>
              <span className="text-white font-bold">Futeur Secure</span>
              <div className="text-xs text-slate-400">Enterprise Security</div>
            </div>
          </div>

          <div className="flex space-x-3">
            {[
              { icon: Linkedin, href: "#", color: "hover:text-blue-400" },
              { icon: Instagram, href: "#", color: "hover:text-pink-400" },
              { icon: Youtube, href: "#", color: "hover:text-red-400" }
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                className={`w-9 h-9 flex items-center justify-center bg-white/5 hover:bg-white/15 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-300 ${color}`}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-slate-800">
          <p className="text-xs text-slate-500 mb-3 md:mb-0">
            © 2025 Futeur Secure. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-xs text-slate-500 hover:text-slate-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-xs text-slate-500 hover:text-slate-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
