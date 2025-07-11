import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Shield, Database, FileText, Network, CheckCircle, Lock, Zap, Globe } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { resetScroll } from "@/utils/navigationHelpers";
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  useEffect(() => {
    resetScroll();

    // Animation for elements as they come into view
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, {
      threshold: 0.1
    });

    // Apply observer to animated elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Floating animation for icons
    document.querySelectorAll('.floating-icon').forEach(el => {
      el.classList.add('animate-float');
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  return <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-10 md:py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Comprehensive <span className="gradient-text">Security Solution</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Our integrated security platform combines multiple technologies to provide complete protection for your digital assets.
          </p>
        </div>
        
        {/* Unified Product Overview with animation */}
        <div className="glass-panel p-8 rounded-xl mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 relative overflow-hidden">
          {/* Animated background particles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-futeur-blue/20 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-futeur-purple/20 rounded-full blur-xl animate-pulse-slow"></div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8 relative z-10">
            <div className="w-20 h-20 rounded-xl mx-auto md:mx-0 bg-gradient-to-r from-futeur-blue to-futeur-purple flex items-center justify-center floating-icon">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-center md:text-left">
                Quantum Shield Platform
              </h2>
              <p className="text-gray-300">
                Our comprehensive solution integrates quantum-level encryption, advanced traffic monitoring, 
                host-based intrusion detection, and network threat prevention in one powerful security platform.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <Button className="bg-gradient-to-r from-futeur-blue to-futeur-purple hover:opacity-90 transition-all group">
              Request Demo
              <Zap className="ml-2 w-4 h-4 group-hover:scale-125 transition-transform" />
            </Button>
            <Link to="/get-started" className="w-full">
              <Button className="w-full" variant="outline">Get Started Now</Button>
            </Link>
          </div>
        </div>

        {/* Secure Systems Section with animations */}
        <section id="secure-systems" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <div className="w-16 h-16 rounded-xl mb-6 bg-gradient-to-r from-futeur-blue to-futeur-purple flex items-center justify-center floating-icon">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Encrypted Systems</h2>
              <p className="text-lg text-gray-300 mb-6">Our system leverages post-quantum cryptographic algorithms, including Crystals-Kyber and Crystals-Dilithium, to secure all data transfers.</p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="outline" className="bg-futeur-blue/10 text-futeur-blue border-futeur-blue/30 px-3 py-1 hover:bg-futeur-blue/20 transition-colors">
                  Post-quantum cryptography
                </Badge>
                <Badge variant="outline" className="bg-futeur-purple/10 text-futeur-purple border-futeur-purple/30 px-3 py-1 hover:bg-futeur-purple/20 transition-colors">
                  Kyber and Dilithium encryption
                </Badge>
                <Badge variant="outline" className="bg-cyan-500/10 text-cyan-500 border-cyan-500/30 px-3 py-1 hover:bg-cyan-500/20 transition-colors">
                  End-to-end data protection
                </Badge>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-xl border border-white/10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer" onMouseEnter={() => setActiveFeature(0)} onMouseLeave={() => setActiveFeature(null)}>
                  <div className="w-10 h-10 rounded-lg bg-futeur-blue/20 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className={`${activeFeature === 0 ? 'text-white scale-110' : 'text-futeur-blue'} transition-all duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-time Threat Monitoring</h4>
                    <p className="text-sm text-gray-300">Continuous monitoring of your systems with instant alerts and automated responses to emerging threats.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer" onMouseEnter={() => setActiveFeature(1)} onMouseLeave={() => setActiveFeature(null)}>
                  <div className="w-10 h-10 rounded-lg bg-futeur-blue/20 flex items-center justify-center shrink-0 mt-1">
                    <Lock className={`${activeFeature === 1 ? 'text-white scale-110' : 'text-futeur-blue'} transition-all duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Automated Security Protocols</h4>
                    <p className="text-sm text-gray-300">Predefined security protocols that automatically activate in response to detected threats.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer" onMouseEnter={() => setActiveFeature(2)} onMouseLeave={() => setActiveFeature(null)}>
                  <div className="w-10 h-10 rounded-lg bg-futeur-blue/20 flex items-center justify-center shrink-0 mt-1">
                    <Shield className={`${activeFeature === 2 ? 'text-white scale-110' : 'text-futeur-blue'} transition-all duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Zero-knowledge Proof Systems</h4>
                    <p className="text-sm text-gray-300">Verify information without revealing sensitive data through advanced cryptographic protocols.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hyperledger Section with animations */}
        <section id="hyperledger" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div className="order-2 md:order-1 glass-panel p-6 rounded-xl border border-white/10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer" onMouseEnter={() => setActiveFeature(3)} onMouseLeave={() => setActiveFeature(null)}>
                  <div className="w-10 h-10 rounded-lg bg-futeur-blue/20 flex items-center justify-center shrink-0 mt-1">
                    <Database className={`${activeFeature === 3 ? 'text-white scale-110' : 'text-futeur-blue'} transition-all duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Immutable Audit Trails</h4>
                    <p className="text-sm text-gray-300">Create tamper-proof audit logs that cannot be altered, ensuring compliance and security.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer" onMouseEnter={() => setActiveFeature(4)} onMouseLeave={() => setActiveFeature(null)}>
                  <div className="w-10 h-10 rounded-lg bg-futeur-blue/20 flex items-center justify-center shrink-0 mt-1">
                    <Zap className={`${activeFeature === 4 ? 'text-white scale-110' : 'text-futeur-blue'} transition-all duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Smart Contract Automation</h4>
                    <p className="text-sm text-gray-300">Automate security responses and compliance reporting with programmable smart contracts.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer" onMouseEnter={() => setActiveFeature(5)} onMouseLeave={() => setActiveFeature(null)}>
                  <div className="w-10 h-10 rounded-lg bg-futeur-blue/20 flex items-center justify-center shrink-0 mt-1">
                    <Globe className={`${activeFeature === 5 ? 'text-white scale-110' : 'text-futeur-blue'} transition-all duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Enterprise Blockchain Integration</h4>
                    <p className="text-sm text-gray-300">Seamlessly integrate with your existing security infrastructure and enterprise systems.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className="w-16 h-16 rounded-xl mb-6 bg-gradient-to-r from-futeur-blue to-futeur-purple flex items-center justify-center floating-icon">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Blockchain Logging</h2>
              <p className="text-lg text-gray-300 mb-6">
                Advanced traffic monitoring and comprehensive logging system with detailed user insights.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="outline" className="bg-futeur-blue/10 text-futeur-blue border-futeur-blue/30 px-3 py-1 hover:bg-futeur-blue/20 transition-colors">
                  Real-time traffic analysis
                </Badge>
                <Badge variant="outline" className="bg-futeur-purple/10 text-futeur-purple border-futeur-purple/30 px-3 py-1 hover:bg-futeur-purple/20 transition-colors">
                  Complete audit trails
                </Badge>
                <Badge variant="outline" className="bg-cyan-500/10 text-cyan-500 border-cyan-500/30 px-3 py-1 hover:bg-cyan-500/20 transition-colors">
                  User behavior analytics
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Wazuh Section with animations */}
        <section id="wazuh" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <div className="w-16 h-16 rounded-xl mb-6 bg-gradient-to-r from-futeur-blue to-futeur-purple flex items-center justify-center floating-icon">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Endpoind Security</h2>
              <p className="text-lg text-gray-300 mb-6">
                Host-Based Intrusion Detection System (HIDS) for endpoint security and threat detection.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="outline" className="bg-futeur-blue/10 text-futeur-blue border-futeur-blue/30 px-3 py-1 hover:bg-futeur-blue/20 transition-colors">
                  Endpoint protection
                </Badge>
                <Badge variant="outline" className="bg-futeur-purple/10 text-futeur-purple border-futeur-purple/30 px-3 py-1 hover:bg-futeur-purple/20 transition-colors">
                  Real-time threat detection
                </Badge>
                <Badge variant="outline" className="bg-cyan-500/10 text-cyan-500 border-cyan-500/30 px-3 py-1 hover:bg-cyan-500/20 transition-colors">
                  File integrity monitoring
                </Badge>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-xl border border-white/10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer" onMouseEnter={() => setActiveFeature(6)} onMouseLeave={() => setActiveFeature(null)}>
                  <div className="w-10 h-10 rounded-lg bg-futeur-blue/20 flex items-center justify-center shrink-0 mt-1">
                    <Shield className={`${activeFeature === 6 ? 'text-white scale-110' : 'text-futeur-blue'} transition-all duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Host-based Intrusion Detection</h4>
                    <p className="text-sm text-gray-300">Detect and respond to suspicious activities on your hosts and endpoints in real-time.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer" onMouseEnter={() => setActiveFeature(7)} onMouseLeave={() => setActiveFeature(null)}>
                  <div className="w-10 h-10 rounded-lg bg-futeur-blue/20 flex items-center justify-center shrink-0 mt-1">
                    <FileText className={`${activeFeature === 7 ? 'text-white scale-110' : 'text-futeur-blue'} transition-all duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Vulnerability Detection</h4>
                    <p className="text-sm text-gray-300">Identify and address security vulnerabilities before they can be exploited.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer" onMouseEnter={() => setActiveFeature(8)} onMouseLeave={() => setActiveFeature(null)}>
                  <div className="w-10 h-10 rounded-lg bg-futeur-blue/20 flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className={`${activeFeature === 8 ? 'text-white scale-110' : 'text-futeur-blue'} transition-all duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Compliance Monitoring</h4>
                    <p className="text-sm text-gray-300">Ensure adherence to security standards and regulatory requirements.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Suricata Section with animations */}
        <section id="suricata" className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-10">
            <div className="order-2 md:order-1 glass-panel p-6 rounded-xl border border-white/10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer" onMouseEnter={() => setActiveFeature(9)} onMouseLeave={() => setActiveFeature(null)}>
                  <div className="w-10 h-10 rounded-lg bg-futeur-blue/20 flex items-center justify-center shrink-0 mt-1">
                    <Network className={`${activeFeature === 9 ? 'text-white scale-110' : 'text-futeur-blue'} transition-all duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Deep Packet Inspection</h4>
                    <p className="text-sm text-gray-300">Examine every packet entering or leaving your network to identify and block malicious patterns.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer" onMouseEnter={() => setActiveFeature(10)} onMouseLeave={() => setActiveFeature(null)}>
                  <div className="w-10 h-10 rounded-lg bg-futeur-blue/20 flex items-center justify-center shrink-0 mt-1">
                    <Zap className={`${activeFeature === 10 ? 'text-white scale-110' : 'text-futeur-blue'} transition-all duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Anomaly Detection</h4>
                    <p className="text-sm text-gray-300">Machine learning algorithms to identify unusual network behavior that may indicate threats.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 hover:translate-x-2 transition-transform cursor-pointer" onMouseEnter={() => setActiveFeature(11)} onMouseLeave={() => setActiveFeature(null)}>
                  <div className="w-10 h-10 rounded-lg bg-futeur-blue/20 flex items-center justify-center shrink-0 mt-1">
                    <Globe className={`${activeFeature === 11 ? 'text-white scale-110' : 'text-futeur-blue'} transition-all duration-300`} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Protocol Analysis</h4>
                    <p className="text-sm text-gray-300">Understand and decode application layer protocols to detect sophisticated attacks.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className="w-16 h-16 rounded-xl mb-6 bg-gradient-to-r from-futeur-blue to-futeur-purple flex items-center justify-center floating-icon">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Network Monitoring</h2>
              <p className="text-lg text-gray-300 mb-6">
                Advanced network threat monitoring and prevention system for identifying and blocking malicious traffic.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="outline" className="bg-futeur-blue/10 text-futeur-blue border-futeur-blue/30 px-3 py-1 hover:bg-futeur-blue/20 transition-colors">
                  Network Traffic Analysis
                </Badge>
                <Badge variant="outline" className="bg-futeur-purple/10 text-futeur-purple border-futeur-purple/30 px-3 py-1 hover:bg-futeur-purple/20 transition-colors">
                  Intrusion Detection & Prevention
                </Badge>
                <Badge variant="outline" className="bg-cyan-500/10 text-cyan-500 border-cyan-500/30 px-3 py-1 hover:bg-cyan-500/20 transition-colors">
                  TLS/SSL Inspection
                </Badge>
              </div>
            </div>
          </div>
        </section>
        
        {/* Integration Section with animations */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 light:text-gray-900">Full Security Stack Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-panel p-6 rounded-xl border border-white/10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 relative overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-futeur-blue/10 rounded-full blur-xl animate-pulse-slow"></div>
              
              <h3 className="text-xl font-bold mb-4 relative z-10 light:text-gray-900">End-to-End Security</h3>
              <p className="text-gray-300 mb-4 relative z-10 light:text-gray-700">
                Our integrated platform provides comprehensive protection at every level of your IT infrastructure:
              </p>
              <ul className="space-y-2 relative z-10">
                <li className="flex items-start gap-2 transform-gpu transition-all hover:translate-x-1">
                  <CheckCircle className="text-futeur-blue mt-1 shrink-0 w-5 h-5" />
                  <span className="text-gray-300 light:text-gray-700">Data protection with quantum-resistant encryption</span>
                </li>
                <li className="flex items-start gap-2 transform-gpu transition-all hover:translate-x-1">
                  <CheckCircle className="text-futeur-blue mt-1 shrink-0 w-5 h-5" />
                  <span className="text-gray-300 light:text-gray-700">Complete audit trails through blockchain technology</span>
                </li>
                <li className="flex items-start gap-2 transform-gpu transition-all hover:translate-x-1">
                  <CheckCircle className="text-futeur-blue mt-1 shrink-0 w-5 h-5" />
                  <span className="text-gray-300 light:text-gray-700">Host-based and network-level threat detection</span>
                </li>
              </ul>
            </Card>
            <Card className="glass-panel p-6 rounded-xl border border-white/10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 relative overflow-hidden light:bg-white light:border-gray-200 light:shadow-md">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-futeur-purple/10 rounded-full blur-xl animate-pulse-slow"></div>
              
              <h3 className="text-xl font-bold mb-4 relative z-10 light:text-gray-900">Unified Management</h3>
              <p className="text-gray-300 mb-4 relative z-10 light:text-gray-700">
                Manage your entire security infrastructure from a single dashboard:
              </p>
              <ul className="space-y-2 relative z-10">
                <li className="flex items-start gap-2 transform-gpu transition-all hover:translate-x-1">
                  <CheckCircle className="text-futeur-blue mt-1 shrink-0 w-5 h-5" />
                  <span className="text-gray-300 light:text-gray-700">Consolidated security alerts and notifications</span>
                </li>
                <li className="flex items-start gap-2 transform-gpu transition-all hover:translate-x-1">
                  <CheckCircle className="text-futeur-blue mt-1 shrink-0 w-5 h-5" />
                  <span className="text-gray-300 light:text-gray-700">Centralized policy management and enforcement</span>
                </li>
                <li className="flex items-start gap-2 transform-gpu transition-all hover:translate-x-1">
                  <CheckCircle className="text-futeur-blue mt-1 shrink-0 w-5 h-5" />
                  <span className="text-gray-300 light:text-gray-700">Comprehensive reporting and compliance documentation</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="glass-panel p-8 md:p-12 rounded-xl text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-futeur-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-futeur-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
              Ready to secure your business with <span className="gradient-text">Futeur Secure</span>?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
              Our comprehensive security platform provides the protection your organization needs in today's evolving threat landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Link to="/get-started">
                <Button size="lg" className="bg-gradient-to-r from-futeur-blue to-futeur-purple hover:opacity-90 transition-opacity group">
                  Get Started
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/20 backdrop-blur-sm hover:border-futeur-blue hover:bg-white/5 transition-all">
                  Contact Sales
                </Button>
              </Link>
              <Link to="/book-demo">
                <Button size="lg" variant="outline" className="border-white/20 backdrop-blur-sm hover:border-futeur-blue hover:bg-white/5 transition-all">
                  Book Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};

export default Products;
