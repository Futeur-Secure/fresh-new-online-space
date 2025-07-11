
import { useState, useEffect, useRef } from "react";
import { 
  Calendar, Clock, Mail, MapPin, Phone, ExternalLink, Sparkles, 
  Send, CheckCircle, Sun, Moon, Shield, Zap, Users, Globe,
  ArrowRight, MessageSquare, Video, Star
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    demoName: "",
    demoEmail: "",
    demoCompany: "",
    demoInterests: "",
    demoDate: "",
    demoTime: "",
  });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
          demoName: "",
          demoEmail: "",
          demoCompany: "",
          demoInterests: "",
          demoDate: "",
          demoTime: "",
        });
      }, 3000);
    }, 1500);
  };

  const themeClasses = {
    background: isDarkMode 
      ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-black' 
      : 'bg-gradient-to-b from-slate-50 via-white to-gray-100',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    subtitle: isDarkMode ? 'text-gray-300' : 'text-gray-600',
    card: isDarkMode 
      ? 'bg-gray-800/80 border-gray-700/50' 
      : 'bg-white/80 border-gray-200/50',
    input: isDarkMode 
      ? 'bg-gray-900/70 border-gray-700 focus:border-indigo-500' 
      : 'bg-white/70 border-gray-300 focus:border-indigo-500',
    button: isDarkMode 
      ? 'bg-gray-800/90 hover:bg-gray-700 border-gray-600' 
      : 'bg-white/90 hover:bg-gray-50 border-gray-300',
    accent: isDarkMode ? 'from-indigo-400 to-purple-400' : 'from-indigo-600 to-purple-600',
    badge: isDarkMode 
      ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400' 
      : 'bg-indigo-100 border-indigo-200 text-indigo-700',
    iconBg: isDarkMode 
      ? 'bg-indigo-500/10 border-indigo-500/20' 
      : 'bg-indigo-100 border-indigo-200',
    iconText: isDarkMode ? 'text-indigo-400' : 'text-indigo-600',
    socialHover: isDarkMode 
      ? 'hover:text-indigo-400 hover:border-indigo-500/50' 
      : 'hover:text-indigo-600 hover:border-indigo-400/50'
  };

  return (
    <section 
      id="contact" 
      className={`py-32 relative overflow-hidden transition-all duration-500 ${themeClasses.background} ${themeClasses.text}`}
      ref={sectionRef}
    >
    
      {/* Grid pattern */}
      <div className={`absolute inset-0 bg-[linear-gradient(${isDarkMode ? 'rgba(99,102,241,0.05)' : 'rgba(99,102,241,0.08)'}_1px,transparent_1px),linear-gradient(to_right,${isDarkMode ? 'rgba(99,102,241,0.05)' : 'rgba(99,102,241,0.08)'}_1px,transparent_1px)] bg-[size:40px_40px]`}></div>
      
      
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`inline-flex items-center justify-center mb-6 px-4 py-2 rounded-full border backdrop-blur-sm ${themeClasses.badge}`}>
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="font-medium">Let's Connect</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${themeClasses.accent}`}>
              Get Started 
            </span>
            <br />
            <span className={themeClasses.text}>Right Here, Right Now</span>
          </h2>
          
          <p className={`text-xl ${themeClasses.subtitle} max-w-3xl mx-auto leading-relaxed mb-8`}>
            Ready to transform your security? Connect with our experts and discover how Futeur can protect your business with cutting-edge AI-powered solutions.
          </p>
          
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start max-w-7xl mx-auto">
          {/* Contact Forms - 3 columns */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              {/* Floating animation elements */}
              <div className="hidden md:block absolute -right-16 top-12 w-32 h-32 pointer-events-none">
                <div className={`absolute top-0 left-0 w-3 h-3 rounded-full animate-ping ${isDarkMode ? 'bg-indigo-400' : 'bg-indigo-500'}`} style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className={`absolute top-8 left-12 w-2 h-2 rounded-full animate-ping ${isDarkMode ? 'bg-purple-400' : 'bg-purple-500'}`} style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
                <div className={`absolute top-16 left-4 w-1.5 h-1.5 rounded-full animate-ping ${isDarkMode ? 'bg-blue-400' : 'bg-blue-500'}`} style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
              </div>
              
              <div className={`relative backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden ${themeClasses.card}`}>
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${themeClasses.accent}`}></div>
                
                {/* Tab Navigation */}
                <div className="flex border-b border-gray-700/50 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent">
                  <button
                    onClick={() => setActiveTab("contact")}
                    className={`flex-1 py-6 px-8 text-lg font-medium transition-all duration-300 relative text-black ${
                      activeTab === "contact"
                        ? "border-b-2 border-indigo-500"
                        : "hover:opacity-80"
                    }`}
                    
                  >
                    <MessageSquare className="w-5 h-5 inline mr-2" />
                    Send Message
                    {activeTab === "contact" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                    )}
                  </button>
                  <button
                    onClick={() => setActiveTab("demo")}
                    className={`flex-1 py-6 px-8 text-lg font-medium transition-all duration-300 relative ${
                      activeTab === "demo"
                        ? `${themeClasses.text} border-b-2 border-indigo-500`
                        : `${themeClasses.subtitle} hover:${themeClasses.text}`
                    }`}
                  >
                    <Video className="w-5 h-5 inline mr-2" />
                    Book Demo
                    {activeTab === "demo" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                    )}
                  </button>
                </div>
                
                {/* Contact Form */}
                {activeTab === "contact" && (
                  <div className="p-8">
                    <div className="mb-8">
                      <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent`}>
                        Send us a message
                      </h3>
                      <p className={themeClasses.subtitle}>
                        Get in touch with our security experts. We'll respond within 24 hours.
                      </p>
                    </div>
                    
                    {submitted ? (
                      <div className="text-center py-12">
                        <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                        <h4 className="text-xl font-bold mb-2 text-green-500">Message Sent!</h4>
                        <p className={themeClasses.subtitle}>Thank you for reaching out. We'll get back to you soon.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="name" className={`text-sm font-medium ${themeClasses.text}`}>
                              Full Name *
                            </label>
                            <input
                              id="name"
                              type="text"
                              placeholder="John Doe"
                              required
                              className={`w-full h-12 px-4 rounded-xl border transition-all duration-300 ${themeClasses.input} backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/50`}
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className={`text-sm font-medium ${themeClasses.text}`}>
                              Work Email *
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="john@company.com"
                              required
                              className={`w-full h-12 px-4 rounded-xl border transition-all duration-300 ${themeClasses.input} backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/50`}
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="company" className={`text-sm font-medium ${themeClasses.text}`}>
                            Company *
                          </label>
                          <input
                            id="company"
                            type="text"
                            placeholder="Your Company Name"
                            required
                            className={`w-full h-12 px-4 rounded-xl border transition-all duration-300 ${themeClasses.input} backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/50`}
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className={`text-sm font-medium ${themeClasses.text}`}>
                            Message *
                          </label>
                          <textarea
                            id="message"
                            placeholder="Tell us about your security needs and challenges..."
                            required
                            rows={4}
                            className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${themeClasses.input} backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/50 resize-none`}
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>

                        <button 
                          type="submit" 
                          className={`w-full h-14 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-300 relative group overflow-hidden shadow-lg`}
                          disabled={loading}
                        >
                          <span className="relative z-10 flex items-center justify-center w-full">
                            {loading ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="w-5 h-5 mr-2" />
                                Send Message
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                        </button>
                      </form>
                    )}
                  </div>
                )}
                
                {/* Demo Form */}
                {activeTab === "demo" && (
                  <div className="p-8">
                    <div className="mb-8">
                      <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${themeClasses.accent} bg-clip-text text-transparent`}>
                        Book a Product Demo
                      </h3>
                      <p className={themeClasses.subtitle}>
                        Schedule a personalized demo with our security experts to see Futeur in action.
                      </p>
                    </div>
                    
                    {submitted ? (
                      <div className="text-center py-12">
                        <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                        <h4 className="text-xl font-bold mb-2 text-green-500">Demo Scheduled!</h4>
                        <p className={themeClasses.subtitle}>We'll send you a calendar invite shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="demoName" className={`text-sm font-medium ${themeClasses.text}`}>
                              Full Name *
                            </label>
                            <input
                              id="demoName"
                              type="text"
                              placeholder="John Doe"
                              required
                              className={`w-full h-12 px-4 rounded-xl border transition-all duration-300 ${themeClasses.input} backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/50`}
                              value={formData.demoName}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="demoEmail" className={`text-sm font-medium ${themeClasses.text}`}>
                              Work Email *
                            </label>
                            <input
                              id="demoEmail"
                              type="email"
                              placeholder="john@company.com"
                              required
                              className={`w-full h-12 px-4 rounded-xl border transition-all duration-300 ${themeClasses.input} backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/50`}
                              value={formData.demoEmail}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="demoCompany" className={`text-sm font-medium ${themeClasses.text}`}>
                            Company *
                          </label>
                          <input
                            id="demoCompany"
                            type="text"
                            placeholder="Your Company Name"
                            required
                            className={`w-full h-12 px-4 rounded-xl border transition-all duration-300 ${themeClasses.input} backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/50`}
                            value={formData.demoCompany}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="demoInterests" className={`text-sm font-medium ${themeClasses.text}`}>
                            Products of Interest
                          </label>
                          <textarea
                            id="demoInterests"
                            placeholder="Which products are you interested in? (e.g. Hyperledger, Wazuh, Zeek)"
                            rows={3}
                            className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${themeClasses.input} backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/50 resize-none`}
                            value={formData.demoInterests}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="demoDate" className={`text-sm font-medium ${themeClasses.text}`}>
                              Preferred Date *
                            </label>
                            <input
                              id="demoDate"
                              type="date"
                              required
                              className={`w-full h-12 px-4 rounded-xl border transition-all duration-300 ${themeClasses.input} backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/50`}
                              value={formData.demoDate}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="demoTime" className={`text-sm font-medium ${themeClasses.text}`}>
                              Preferred Time *
                            </label>
                            <input
                              id="demoTime"
                              type="time"
                              required
                              className={`w-full h-12 px-4 rounded-xl border transition-all duration-300 ${themeClasses.input} backdrop-blur-sm focus:ring-2 focus:ring-indigo-500/50`}
                              value={formData.demoTime}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <button 
                          type="submit" 
                          className={`w-full h-14 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 ${themeClasses.text} font-medium rounded-xl transition-all duration-300 relative group overflow-hidden shadow-lg`}
                          disabled={loading}
                        >
                          <span className="relative z-10 flex items-center justify-center w-full">
                            {loading ? (
                              <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Scheduling...
                              </>
                            ) : (
                              <>
                                <Calendar className="w-5 h-5 mr-2" />
                                Schedule Demo
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Contact Information - 2 columns */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Company Info Card */}
            <div className={`backdrop-blur-xl rounded-3xl border shadow-2xl p-8 relative overflow-hidden ${themeClasses.card}`}>
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500`}></div>
              
              <h4 className={`text-2xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent`}>
                Contact Information
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-start group cursor-pointer hover:scale-105 transition-transform">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mr-4 transition-all duration-300 ${themeClasses.iconBg} group-hover:scale-110`}>
                    <Mail className={`w-6 h-6 ${themeClasses.iconText}`} />
                  </div>
                  <div>
                    <h5 className={`text-sm ${themeClasses.subtitle} mb-1`}>Email Address</h5>
                    <p className={`font-semibold ${themeClasses.iconText} text-lg hover:underline`}>
                      contact@futeur.ai
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group cursor-pointer hover:scale-105 transition-transform">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mr-4 transition-all duration-300 ${themeClasses.iconBg} group-hover:scale-110`}>
                    <Phone className={`w-6 h-6 ${themeClasses.iconText}`} />
                  </div>
                  <div>
                    <h5 className={`text-sm ${themeClasses.subtitle} mb-1`}>Phone Number</h5>
                    <p className={`font-semibold ${themeClasses.text} text-lg`}>
                      +1 (800) 123-4567
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group cursor-pointer hover:scale-105 transition-transform">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mr-4 transition-all duration-300 ${themeClasses.iconBg} group-hover:scale-110`}>
                    <MapPin className={`w-6 h-6 ${themeClasses.iconText}`} />
                  </div>
                  <div>
                    <h5 className={`text-sm ${themeClasses.subtitle} mb-1`}>Headquarters</h5>
                    <p className={`font-semibold ${themeClasses.text} text-lg leading-relaxed`}>
                      32 6th Ave<br />
                      New York, NY 10013
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group cursor-pointer hover:scale-105 transition-transform">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mr-4 transition-all duration-300 ${themeClasses.iconBg} group-hover:scale-110`}>
                    <Clock className={`w-6 h-6 ${themeClasses.iconText}`} />
                  </div>
                  <div>
                    <h5 className={`text-sm ${themeClasses.subtitle} mb-1`}>Business Hours</h5>
                    <p className={`font-semibold ${themeClasses.text} text-lg leading-relaxed`}>
                      Mon - Fri: 9:00 AM - 6:00 PM EST<br />
                      <span className={themeClasses.subtitle}>Emergency Support: 24/7</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-700/30">
                <h5 className={`text-sm font-medium ${themeClasses.subtitle} mb-4`}>Follow Us</h5>
                <div className="flex gap-4">
                  {[
                    { 
                      name: "Twitter",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.231-2.224.084.627 1.956 2.444 3.379 4.6 3.421-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.215 7.557 2.215 9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.636.961-.695 1.8-1.562 2.46-2.549z" />
                        </svg>
                      )
                    },
                    {
                      name: "LinkedIn",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M20.447 20.452H17.27V14.8c0-1.356-.027-3.1-1.888-3.1-1.889 0-2.178 1.479-2.178 3.005v5.747H9.104V9h3.004v1.561h.043c.419-.795 1.441-1.634 2.969-1.634 3.176 0 3.763 2.091 3.763 4.807v6.718zM5.337 7.433a1.743 1.743 0 1 1 0-3.486 1.743 1.743 0 0 1 0 3.486zM6.814 20.452H3.861V9h2.953v11.452z" />
                        </svg>
                      )
                    },
                    {
                      name: "GitHub",
                      icon: (
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.309.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.042.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.119 3.176.77.84 1.233 1.912 1.233 3.221 0 4.608-2.807 5.624-5.479 5.921.431.372.815 1.102.815 2.222 0 1.606-.014 2.896-.014 3.286 0 .319.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                      )
                    }
                  ].map(link => (
                    <a
                      key={link.name}
                      href="#"
                      aria-label={link.name}
                      className={`p-3 rounded-lg border transition-all duration-300 ${themeClasses.iconBg} ${themeClasses.socialHover}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;