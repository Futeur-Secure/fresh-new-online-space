
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileCheck, Activity, ChevronRight, Download, ExternalLink, Globe, Zap, Users, Award, Clock, Server, Database, Code, CheckCircle, AlertTriangle, TrendingUp, BarChart3, Cpu, Network, Fingerprint } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { resetScroll } from "@/utils/navigationHelpers";

const Trust = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [animationTrigger, setAnimationTrigger] = useState(0);
  
  useEffect(() => {
    resetScroll();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationTrigger(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    { id: "overview", label: "Overview", icon: Shield },
    { id: "security", label: "Security", icon: Lock },
    { id: "privacy", label: "Privacy", icon: Eye },
    { id: "compliance", label: "Compliance", icon: FileCheck },
    { id: "availability", label: "Availability", icon: Activity },
  ];

  const securityMetrics = [
    { label: "Threat Vectors Blocked", value: "2.4M+", icon: Shield, trend: "+12%" },
    { label: "Security Audits", value: "24/7", icon: Eye, trend: "Continuous" },
    { label: "Encryption Keys Managed", value: "500K+", icon: Lock, trend: "+8%" },
    { label: "Zero-Day Response", value: "<4hrs", icon: Zap, trend: "Avg" },
  ];

  const complianceStats = [
    { standard: "SOC 2 Type II", status: "Certified", icon: Award, color: "text-green-400" },
    { standard: "ISO 27001", status: "Certified", icon: Shield, color: "text-green-400" },
    { standard: "FedRAMP", status: "Ready", icon: Flag, color: "text-blue-400" },
    { standard: "GDPR", status: "Compliant", icon: Globe, color: "text-green-400" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Enhanced Hero Section */}
          <div className="max-w-6xl mx-auto mb-16 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-futeur-blue/20 to-futeur-purple/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
            <div className="relative">
              <h1 className="text-6xl font-bold mb-6 gradient-text animate-fade-in-up">
                Trust by Design
              </h1>
              <p className="text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
                At FuteurSecure, trust isn't optional—it's engineered into every layer of our platform. 
                Protecting over 50,000+ organizations with quantum-grade security architecture.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <button className="px-8 py-4 bg-futeur-purple text-white rounded-lg hover:bg-futeur-purple/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <span className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Security Reports
                  </span>
                </button>
                <button className="px-8 py-4 border border-futeur-blue text-futeur-blue rounded-lg hover:bg-futeur-blue/10 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Live Dashboard
                  </span>
                </button>
              </div>

              {/* Real-time Security Metrics */}
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                {securityMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <Card key={index} className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                      <CardContent className="p-6 text-center">
                        <Icon className="h-8 w-8 text-futeur-blue mx-auto mb-3 animate-float" />
                        <div className="text-3xl font-bold gradient-text mb-2">{metric.value}</div>
                        <div className="text-sm text-gray-400 mb-2">{metric.label}</div>
                        <div className="text-xs text-futeur-purple">{metric.trend}</div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-futeur-blue text-white shadow-lg transform scale-105"
                      : "bg-card/50 text-gray-400 hover:text-white hover:bg-card hover:scale-102"
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{section.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Sections */}
          <div className="max-w-7xl mx-auto">
            {activeSection === "overview" && (
              <div className="space-y-16 animate-fade-in-up">
                <section>
                  <h2 className="text-4xl font-bold mb-8 gradient-text text-center">Engineering Trust for the AI Era</h2>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <p className="text-xl text-gray-300 leading-relaxed">
                        At FuteurSecure, trust isn't optional—it's engineered. With FuteurVault™, our zero-trust password and identity platform, we provide end-to-end encryption, real-time threat intelligence, and AI-hardened controls to safeguard your most valuable assets—regardless of location, workload, or threat landscape.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Built on decades of security expertise and powered by AI-native architecture, FuteurVault is the foundation of digital resilience in 2025 and beyond. Our platform has processed over <span className="text-futeur-blue font-bold">100 billion security events</span> and protects organizations across 150+ countries.
                      </p>
                      <div className="flex items-center gap-4 text-futeur-purple">
                        <Users className="h-6 w-6" />
                        <span className="font-semibold">Trusted by 50,000+ organizations worldwide</span>
                      </div>
                    </div>
                    <Card className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-all duration-500 hover:scale-105">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Core Trust Principles</h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 p-4 rounded-lg bg-futeur-blue/10 hover:bg-futeur-blue/20 transition-colors duration-300">
                            <Shield className="h-6 w-6 text-futeur-blue flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold">Zero-Trust Architecture</h4>
                              <p className="text-sm text-gray-400">Never trust, always verify with continuous authentication</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 p-4 rounded-lg bg-futeur-purple/10 hover:bg-futeur-purple/20 transition-colors duration-300">
                            <Cpu className="h-6 w-6 text-futeur-purple flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold">AI-Powered Defense</h4>
                              <p className="text-sm text-gray-400">Machine learning models detect threats in real-time</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 p-4 rounded-lg bg-futeur-blue/10 hover:bg-futeur-blue/20 transition-colors duration-300">
                            <Database className="h-6 w-6 text-futeur-blue flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold">Quantum-Resistant Encryption</h4>
                              <p className="text-sm text-gray-400">Future-proof cryptography with AES-256 and post-quantum algorithms</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 p-4 rounded-lg bg-futeur-purple/10 hover:bg-futeur-purple/20 transition-colors duration-300">
                            <Network className="h-6 w-6 text-futeur-purple flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold">Global Infrastructure</h4>
                              <p className="text-sm text-gray-400">Multi-region deployment with 99.99% availability guarantee</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                {/* Trust by Numbers */}
                <section className="bg-gradient-to-r from-futeur-blue/5 to-futeur-purple/5 rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-center mb-8 gradient-text">Trust by Numbers</h3>
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-futeur-blue mb-2 animate-heartbeat">99.99%</div>
                      <div className="text-gray-400">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-futeur-purple mb-2 animate-heartbeat">256-bit</div>
                      <div className="text-gray-400">AES Encryption</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-futeur-blue mb-2 animate-heartbeat">&lt;100ms</div>
                      <div className="text-gray-400">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-futeur-purple mb-2 animate-heartbeat">24/7/365</div>
                      <div className="text-gray-400">Security Monitoring</div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeSection === "security" && (
              <div className="space-y-16 animate-fade-in-up">
                <section>
                  <h2 className="text-4xl font-bold mb-8 gradient-text text-center">Security by Design, Supercharged by AI</h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                    FuteurVault is engineered with hardware-rooted trust, automated patching, and FuteurSecure's proprietary "QuantumTrust Engine™" to prevent vulnerabilities before they emerge. Our multi-layered defense system processes over 1 billion security events daily.
                  </p>
                  
                  <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <Card className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-all duration-500 group">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 rounded-full bg-futeur-blue/20 group-hover:bg-futeur-blue/30 transition-colors">
                            <Shield className="h-8 w-8 text-futeur-blue" />
                          </div>
                          <h3 className="text-2xl font-semibold">Mission Console™</h3>
                        </div>
                        <p className="text-gray-300 mb-6">
                          Centralized, granular admin controls with just-in-time privileged access and real-time security orchestration. AI-powered anomaly detection identifies suspicious patterns across your entire infrastructure.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Real-time threat visualization</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Automated incident response</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Behavioral analytics engine</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10 hover:border-futeur-purple/50 transition-all duration-500 group">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 rounded-full bg-futeur-purple/20 group-hover:bg-futeur-purple/30 transition-colors">
                            <Database className="h-8 w-8 text-futeur-purple" />
                          </div>
                          <h3 className="text-2xl font-semibold">ZeroLeak Fabric™</h3>
                        </div>
                        <p className="text-gray-300 mb-6">
                          Distributed, enclave-based data protection at the hardware level with quantum-resistant encryption. Every data packet is encrypted end-to-end with perfect forward secrecy.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Hardware security modules (HSM)</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Post-quantum cryptography ready</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Zero-knowledge architecture</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-all duration-500 group">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 rounded-full bg-futeur-blue/20 group-hover:bg-futeur-blue/30 transition-colors">
                            <Fingerprint className="h-8 w-8 text-futeur-blue" />
                          </div>
                          <h3 className="text-2xl font-semibold">ContextAware MFA™</h3>
                        </div>
                        <p className="text-gray-300 mb-6">
                          Device, network, and behavior-based MFA without friction—adapting to user context in real-time. Our AI analyzes 200+ risk factors to determine authentication requirements.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Biometric authentication</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Risk-based adaptive access</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">FIDO2/WebAuthn support</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10 hover:border-futeur-purple/50 transition-all duration-500 group">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="p-3 rounded-full bg-futeur-purple/20 group-hover:bg-futeur-purple/30 transition-colors">
                            <Cpu className="h-8 w-8 text-futeur-purple" />
                          </div>
                          <h3 className="text-2xl font-semibold">AI Security Orchestration™</h3>
                        </div>
                        <p className="text-gray-300 mb-6">
                          Automatic detection and intervention across telemetry and logs—powered by proprietary AI models trained on 10+ years of security intelligence data.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Machine learning threat detection</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Automated response workflows</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm">Predictive vulnerability analysis</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Security Architecture Diagram */}
                  <Card className="bg-gradient-to-br from-futeur-blue/10 to-futeur-purple/10 border-white/10">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold mb-6 text-center">Multi-Layer Security Architecture</h3>
                      <div className="grid md:grid-cols-5 gap-4 items-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-futeur-blue/20 flex items-center justify-center animate-pulse-slow">
                            <Globe className="h-8 w-8 text-futeur-blue" />
                          </div>
                          <div className="text-sm font-medium">Network Layer</div>
                          <div className="text-xs text-gray-400">DDoS Protection</div>
                        </div>
                        <ChevronRight className="h-6 w-6 text-gray-400 mx-auto" />
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-futeur-purple/20 flex items-center justify-center animate-pulse-slow" style={{animationDelay: '0.5s'}}>
                            <Shield className="h-8 w-8 text-futeur-purple" />
                          </div>
                          <div className="text-sm font-medium">Application Layer</div>
                          <div className="text-xs text-gray-400">WAF & Runtime</div>
                        </div>
                        <ChevronRight className="h-6 w-6 text-gray-400 mx-auto" />
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-futeur-blue/20 flex items-center justify-center animate-pulse-slow" style={{animationDelay: '1s'}}>
                            <Database className="h-8 w-8 text-futeur-blue" />
                          </div>
                          <div className="text-sm font-medium">Data Layer</div>
                          <div className="text-xs text-gray-400">Encryption at Rest</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </div>
            )}

            {activeSection === "privacy" && (
              <div className="space-y-16 animate-fade-in-up">
                <section>
                  <h2 className="text-4xl font-bold mb-8 gradient-text text-center">Your Data, Your Rules</h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                    Privacy at FuteurSecure is non-negotiable. FuteurVault never uses your data for advertising—and all user metadata is customer-owned and encrypted. We process over 500 million privacy-compliant operations daily.
                  </p>
                  
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                      <div className="flex items-start gap-6 p-6 rounded-xl bg-futeur-blue/10 hover:bg-futeur-blue/20 transition-all duration-300 hover:scale-102">
                        <div className="w-12 h-12 rounded-full bg-futeur-blue/20 flex items-center justify-center flex-shrink-0">
                          <Shield className="h-6 w-6 text-futeur-blue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3">Data Minimization by Design</h3>
                          <p className="text-gray-300 mb-4">We collect only what's required to secure your team—nothing more. Our zero-collection policy means we never store unnecessary metadata or user behavior patterns for commercial purposes.</p>
                          <div className="text-sm text-futeur-blue">✓ Purpose limitation enforced by architecture</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6 p-6 rounded-xl bg-futeur-purple/10 hover:bg-futeur-purple/20 transition-all duration-300 hover:scale-102">
                        <div className="w-12 h-12 rounded-full bg-futeur-purple/20 flex items-center justify-center flex-shrink-0">
                          <Eye className="h-6 w-6 text-futeur-purple" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3">Transparent Processing</h3>
                          <p className="text-gray-300 mb-4">Audit-ready logs for visibility and governance with full transparency. Every data operation is logged with cryptographic integrity and made available for your review.</p>
                          <div className="text-sm text-futeur-purple">✓ Real-time audit trails available</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6 p-6 rounded-xl bg-futeur-blue/10 hover:bg-futeur-blue/20 transition-all duration-300 hover:scale-102">
                        <div className="w-12 h-12 rounded-full bg-futeur-blue/20 flex items-center justify-center flex-shrink-0">
                          <Globe className="h-6 w-6 text-futeur-blue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3">Global Privacy Standards</h3>
                          <p className="text-gray-300 mb-4">GDPR, CCPA, UK-NCSC aligned with continuous compliance monitoring. Our platform automatically enforces data residency requirements and cross-border transfer restrictions.</p>
                          <div className="text-sm text-futeur-blue">✓ 95+ jurisdictions supported</div>
                        </div>
                      </div>

                      <div className="flex items-start gap-6 p-6 rounded-xl bg-futeur-purple/10 hover:bg-futeur-purple/20 transition-all duration-300 hover:scale-102">
                        <div className="w-12 h-12 rounded-full bg-futeur-purple/20 flex items-center justify-center flex-shrink-0">
                          <Lock className="h-6 w-6 text-futeur-purple" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3">Customer-Controlled Keys</h3>
                          <p className="text-gray-300 mb-4">Use your own key-management systems (KMS) or our FuteurVault-managed option. You maintain complete control over encryption keys with hardware-backed key storage.</p>
                          <div className="text-sm text-futeur-purple">✓ BYOK and HYOK supported</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Card className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-all duration-500">
                        <CardContent className="p-8">
                          <h3 className="text-2xl font-semibold mb-6">Privacy by Design Framework</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-lg bg-futeur-blue/10">
                              <span className="font-medium">Proactive not Reactive</span>
                              <CheckCircle className="h-5 w-5 text-green-400" />
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-lg bg-futeur-purple/10">
                              <span className="font-medium">Privacy as the Default</span>
                              <CheckCircle className="h-5 w-5 text-green-400" />
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-lg bg-futeur-blue/10">
                              <span className="font-medium">End-to-End Security</span>
                              <CheckCircle className="h-5 w-5 text-green-400" />
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-lg bg-futeur-purple/10">
                              <span className="font-medium">Full Functionality</span>
                              <CheckCircle className="h-5 w-5 text-green-400" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-futeur-blue/10 to-futeur-purple/10 border-white/10">
                        <CardContent className="p-8">
                          <h3 className="text-xl font-semibold mb-6">Data Subject Rights</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 rounded-lg bg-white/5">
                              <Download className="h-6 w-6 text-futeur-blue mx-auto mb-2" />
                              <div className="text-sm font-medium">Right to Access</div>
                            </div>
                            <div className="text-center p-4 rounded-lg bg-white/5">
                              <Code className="h-6 w-6 text-futeur-purple mx-auto mb-2" />
                              <div className="text-sm font-medium">Right to Rectification</div>
                            </div>
                            <div className="text-center p-4 rounded-lg bg-white/5">
                              <AlertTriangle className="h-6 w-6 text-futeur-blue mx-auto mb-2" />
                              <div className="text-sm font-medium">Right to Erasure</div>
                            </div>
                            <div className="text-center p-4 rounded-lg bg-white/5">
                              <ExternalLink className="h-6 w-6 text-futeur-purple mx-auto mb-2" />
                              <div className="text-sm font-medium">Right to Portability</div>
                            </div>
                          </div>
                          <div className="mt-6">
                            <button className="w-full px-4 py-3 bg-futeur-blue text-white rounded-lg hover:bg-futeur-blue/90 transition-colors">
                              Access Privacy Dashboard
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeSection === "compliance" && (
              <div className="space-y-16 animate-fade-in-up">
                <section>
                  <h2 className="text-4xl font-bold mb-8 gradient-text text-center">Globally Certified, Enterprise-Ready Compliance</h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                    FuteurSecure has achieved attestations across industry-leading standards with continuous audits and third-party reports. We maintain compliance across 50+ frameworks simultaneously.
                  </p>
                  
                  {/* Compliance Status Dashboard */}
                  <div className="grid md:grid-cols-4 gap-6 mb-12">
                    {complianceStats.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <Card key={index} className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                          <CardContent className="p-6 text-center">
                            <Icon className={`h-8 w-8 mx-auto mb-3 ${item.color}`} />
                            <div className="font-semibold mb-2">{item.standard}</div>
                            <div className={`text-sm px-3 py-1 rounded-full ${item.color} bg-current/20`}>
                              {item.status}
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    <Card className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-all duration-500">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-semibold mb-6 text-center">Security Standards</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-blue/10">
                            <span>SOC 2-Type II</span>
                            <Award className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-blue/10">
                            <span>ISO 27001:2013</span>
                            <Award className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-blue/10">
                            <span>PCI-DSS Level 1</span>
                            <Award className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-blue/10">
                            <span>CSA STAR Level 2</span>
                            <Award className="h-5 w-5 text-green-400" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10 hover:border-futeur-purple/50 transition-all duration-500">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-semibold mb-6 text-center">Healthcare & Finance</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-purple/10">
                            <span>HIPAA / HITRUST</span>
                            <Award className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-purple/10">
                            <span>FedRAMP Authorized</span>
                            <Clock className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-purple/10">
                            <span>FIPS 140-2 Level 3</span>
                            <Award className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-purple/10">
                            <span>FISMA Moderate</span>
                            <Award className="h-5 w-5 text-green-400" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-all duration-500">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-semibold mb-6 text-center">Regional Compliance</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-blue/10">
                            <span>EU-GDPR</span>
                            <Award className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-blue/10">
                            <span>UK-Data Protection</span>
                            <Award className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-blue/10">
                            <span>Australia-ACSC ISM</span>
                            <Award className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-blue/10">
                            <span>Singapore-MTCS SS</span>
                            <Award className="h-5 w-5 text-green-400" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-all duration-500">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-6">Compliance Resources</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                              <Download className="h-5 w-5 text-futeur-blue" />
                              <span>SOC 2 Type II Report</span>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </div>
                          <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                              <Download className="h-5 w-5 text-futeur-purple" />
                              <span>ISO 27001 Certificate</span>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </div>
                          <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                              <BarChart3 className="h-5 w-5 text-futeur-blue" />
                              <span>Real-time Compliance Dashboard</span>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </div>
                          <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                            <div className="flex items-center gap-3">
                              <FileCheck className="h-5 w-5 text-futeur-purple" />
                              <span>Shared Responsibility Matrix</span>
                            </div>
                            <ExternalLink className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-futeur-blue/10 to-futeur-purple/10 border-white/10">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-6">Continuous Monitoring</h3>
                        <p className="text-gray-300 mb-6">
                          Our compliance posture is continuously monitored and verified through automated controls and regular third-party audits. Real-time compliance scoring across all frameworks.
                        </p>
                        <div className="space-y-4 mb-6">
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Automated Controls</span>
                            <span className="text-sm font-bold text-green-400">1,247 Active</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Audit Frequency</span>
                            <span className="text-sm font-bold text-futeur-blue">Quarterly</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Compliance Score</span>
                            <span className="text-sm font-bold text-futeur-purple">98.7%</span>
                          </div>
                        </div>
                        <button className="w-full px-4 py-3 bg-futeur-purple text-white rounded-lg hover:bg-futeur-purple/90 transition-colors">
                          View Live Status Dashboard
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              </div>
            )}

            {activeSection === "availability" && (
              <div className="space-y-16 animate-fade-in-up">
                <section>
                  <h2 className="text-4xl font-bold mb-8 gradient-text text-center">Always-On Resilience</h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                    FuteurVault is engineered for ultra-high availability with financial uptime guarantees and global redundancy. Our infrastructure spans 35+ data centers across 6 continents.
                  </p>
                  
                  {/* Uptime Stats */}
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <Card className="bg-card/50 border-white/10 hover:border-green-500/50 transition-all duration-500">
                      <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                          <TrendingUp className="h-10 w-10 text-green-400 animate-pulse" />
                        </div>
                        <div className="text-4xl font-bold text-green-400 mb-2">99.99%</div>
                        <div className="text-lg font-semibold mb-2">Uptime SLA</div>
                        <div className="text-sm text-gray-400">With financial guarantees and service credits</div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-all duration-500">
                      <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-futeur-blue/20 flex items-center justify-center">
                          <Clock className="h-10 w-10 text-futeur-blue animate-spin-slow" />
                        </div>
                        <div className="text-4xl font-bold text-futeur-blue mb-2">&lt;5min</div>
                        <div className="text-lg font-semibold mb-2">Recovery Time</div>
                        <div className="text-sm text-gray-400">Automated failover and disaster recovery</div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10 hover:border-futeur-purple/50 transition-all duration-500">
                      <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-futeur-purple/20 flex items-center justify-center">
                          <Globe className="h-10 w-10 text-futeur-purple animate-float" />
                        </div>
                        <div className="text-4xl font-bold text-futeur-purple mb-2">35+</div>
                        <div className="text-lg font-semibold mb-2">Data Centers</div>
                        <div className="text-sm text-gray-400">Global presence with edge computing</div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <Card className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-all duration-500">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <Server className="h-8 w-8 text-futeur-blue" />
                          <h3 className="text-2xl font-semibold">Global Infrastructure</h3>
                        </div>
                        <p className="text-gray-300 mb-6">
                          Global data centers with geo-redundant replication and live failover capabilities. Our edge computing network ensures optimal performance worldwide.
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-blue/10">
                            <span>Active Data Centers</span>
                            <span className="font-bold text-futeur-blue">35</span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-blue/10">
                            <span>Edge Locations</span>
                            <span className="font-bold text-futeur-blue">150+</span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-blue/10">
                            <span>Network Providers</span>
                            <span className="font-bold text-futeur-blue">12</span>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-futeur-blue/10">
                            <span>BGP Routes</span>
                            <span className="font-bold text-futeur-blue">Multi-homed</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10 hover:border-futeur-purple/50 transition-all duration-500">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <Activity className="h-8 w-8 text-futeur-purple" />
                          <h3 className="text-2xl font-semibold">Autonomous Operations</h3>
                        </div>
                        <p className="text-gray-300 mb-6">
                          AI-powered infrastructure management with predictive maintenance and automatic healing capabilities.
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-futeur-purple/10">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span>Zero-downtime upgrades</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-futeur-purple/10">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span>Autonomous Fabric™ self-healing</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-futeur-purple/10">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span>Predictive failure detection</span>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-futeur-purple/10">
                            <CheckCircle className="h-5 w-5 text-green-400" />
                            <span>Real-time capacity scaling</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* System Health Dashboard */}
                  <Card className="bg-gradient-to-br from-futeur-blue/10 to-futeur-purple/10 border-white/10">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold mb-8 text-center">Real-Time System Health</h3>
                      <div className="grid md:grid-cols-4 gap-6 mb-8">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                          <div className="font-semibold">API Status</div>
                          <div className="text-sm text-green-400">Operational</div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                          <div className="font-semibold">Database</div>
                          <div className="text-sm text-green-400">Operational</div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                          <div className="font-semibold">Authentication</div>
                          <div className="text-sm text-green-400">Operational</div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center">
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                          <div className="font-semibold">CDN</div>
                          <div className="text-sm text-green-400">Operational</div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold mb-4">Performance Metrics</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Response Time (P95)</span>
                              <span className="text-sm font-bold text-futeur-blue">47ms</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Throughput</span>
                              <span className="text-sm font-bold text-futeur-purple">2.3M req/min</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Error Rate</span>
                              <span className="text-sm font-bold text-green-400">0.001%</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-4">System Actions</h4>
                          <div className="flex gap-3">
                            <button className="flex-1 px-4 py-2 bg-futeur-blue text-white rounded-lg hover:bg-futeur-blue/90 transition-colors">
                              View Status Page
                            </button>
                            <button className="flex-1 px-4 py-2 border border-futeur-purple text-futeur-purple rounded-lg hover:bg-futeur-purple/10 transition-colors">
                              Subscribe Updates
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Trust;
