
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileCheck, Activity, ChevronRight, Download, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { resetScroll } from "@/utils/navigationHelpers";

const Trust = () => {
  const [activeSection, setActiveSection] = useState("overview");
  
  useEffect(() => {
    resetScroll();
  }, []);

  const sections = [
    { id: "overview", label: "Overview", icon: Shield },
    { id: "security", label: "Security", icon: Lock },
    { id: "privacy", label: "Privacy", icon: Eye },
    { id: "compliance", label: "Compliance", icon: FileCheck },
    { id: "availability", label: "Availability", icon: Activity },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              Trust by Design
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              At FuteurSecure, trust isn't optional—it's engineered into every layer of our platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-futeur-purple text-white rounded-lg hover:bg-futeur-purple/90 transition-colors">
                View Security Reports
              </button>
              <button className="px-6 py-3 border border-futeur-blue text-futeur-blue rounded-lg hover:bg-futeur-blue/10 transition-colors">
                Compliance Dashboard
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "bg-futeur-blue text-white"
                      : "bg-card/50 text-gray-400 hover:text-white hover:bg-card"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {section.label}
                </button>
              );
            })}
          </div>

          {/* Content Sections */}
          <div className="max-w-6xl mx-auto">
            {activeSection === "overview" && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Engineering Trust for the AI Era</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        At FuteurSecure, trust isn't optional—it's engineered. With FuteurVault™, our zero-trust password and identity platform, we provide end-to-end encryption, real-time threat intelligence, and AI-hardened controls to safeguard your most valuable assets—regardless of location, workload, or threat landscape.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Built on decades of security expertise and powered by AI-native architecture, FuteurVault is the foundation of digital resilience in 2025 and beyond.
                      </p>
                    </div>
                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Core Principles</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <Shield className="h-5 w-5 text-futeur-blue" />
                            <span>Zero-Trust-first architecture</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <Lock className="h-5 w-5 text-futeur-purple" />
                            <span>AI-powered threat detection</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <FileCheck className="h-5 w-5 text-futeur-blue" />
                            <span>Built-in, audited encryption</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <Activity className="h-5 w-5 text-futeur-purple" />
                            <span>Resilience across infrastructure and cloud</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              </div>
            )}

            {activeSection === "security" && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Security by Design, Supercharged by AI</h2>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    FuteurVault is engineered with hardware-rooted trust, automated patching, and FuteurSecure's proprietary "QuantumTrust Engine™" to prevent vulnerabilities before they emerge.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <Shield className="h-8 w-8 text-futeur-blue mb-4" />
                        <h3 className="text-xl font-semibold mb-3">Mission Console™</h3>
                        <p className="text-gray-300">
                          Centralized, granular admin controls with just-in-time privileged access and real-time security orchestration.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <Lock className="h-8 w-8 text-futeur-purple mb-4" />
                        <h3 className="text-xl font-semibold mb-3">ZeroLeak Fabric™</h3>
                        <p className="text-gray-300">
                          Distributed, enclave-based data protection at the hardware level with quantum-resistant encryption.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <Eye className="h-8 w-8 text-futeur-blue mb-4" />
                        <h3 className="text-xl font-semibold mb-3">ContextAware MFA™</h3>
                        <p className="text-gray-300">
                          Device, network, and behavior-based MFA without friction—adapting to user context in real-time.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <Activity className="h-8 w-8 text-futeur-purple mb-4" />
                        <h3 className="text-xl font-semibold mb-3">AI Security Orchestration™</h3>
                        <p className="text-gray-300">
                          Automatic detection and intervention across telemetry and logs—powered by proprietary AI models.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              </div>
            )}

            {activeSection === "privacy" && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Your Data, Your Rules</h2>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    Privacy at FuteurSecure is non-negotiable. FuteurVault never uses your data for advertising—and all user metadata is customer-owned and encrypted.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-futeur-blue/20 flex items-center justify-center flex-shrink-0">
                          <Shield className="h-4 w-4 text-futeur-blue" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Data Minimization</h3>
                          <p className="text-gray-300">We collect only what's required to secure your team—nothing more.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-futeur-purple/20 flex items-center justify-center flex-shrink-0">
                          <Eye className="h-4 w-4 text-futeur-purple" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Transparent Processing</h3>
                          <p className="text-gray-300">Audit-ready logs for visibility and governance with full transparency.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-futeur-blue/20 flex items-center justify-center flex-shrink-0">
                          <FileCheck className="h-4 w-4 text-futeur-blue" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Global Privacy Standards</h3>
                          <p className="text-gray-300">GDPR, CCPA, UK-NCSC aligned with continuous compliance monitoring.</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-futeur-purple/20 flex items-center justify-center flex-shrink-0">
                          <Lock className="h-4 w-4 text-futeur-purple" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Customer-Controlled Keys</h3>
                          <p className="text-gray-300">Use your own key-management systems (KMS) or our FuteurVault-managed option.</p>
                        </div>
                      </div>
                    </div>

                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Privacy by Design</h3>
                        <p className="text-gray-300 mb-4">
                          Every feature is built with privacy as the foundation, not an afterthought.
                        </p>
                        <div className="flex items-center gap-2 text-futeur-blue hover:text-futeur-blue/80 cursor-pointer">
                          <span>Read Privacy Policy</span>
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              </div>
            )}

            {activeSection === "compliance" && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Globally Certified, Enterprise-Ready Compliance</h2>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    FuteurSecure has achieved attestations across industry-leading standards with continuous audits and third-party reports.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3">Security Standards</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• SOC 2-Type II</li>
                          <li>• ISO 27001</li>
                          <li>• PCI-DSS</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3">Healthcare & Finance</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• HIPAA / HITRUST</li>
                          <li>• FedRAMP Ready</li>
                          <li>• FIPS 140-2</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-3">Regional Compliance</h3>
                        <ul className="space-y-2 text-gray-300">
                          <li>• EU-UK-Schengen</li>
                          <li>• Australia-APRA</li>
                          <li>• GCC-SAMA</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Compliance Resources</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Downloadable compliance reports</span>
                            <Download className="h-4 w-4 text-futeur-blue" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Real-time compliance dashboard</span>
                            <ChevronRight className="h-4 w-4 text-futeur-blue" />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Shared Responsibility model</span>
                            <ExternalLink className="h-4 w-4 text-futeur-blue" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Continuous Monitoring</h3>
                        <p className="text-gray-300 mb-4">
                          Our compliance posture is continuously monitored and verified through automated controls and regular third-party audits.
                        </p>
                        <button className="px-4 py-2 bg-futeur-purple text-white rounded-lg hover:bg-futeur-purple/90 transition-colors">
                          View Status Dashboard
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </section>
              </div>
            )}

            {activeSection === "availability" && (
              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-bold mb-6 gradient-text">Always-On Resilience</h2>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    FuteurVault is engineered for ultra-high availability with financial uptime guarantees and global redundancy.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                            <span className="text-2xl font-bold text-green-400">99.99%</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold">Uptime SLA</h3>
                            <p className="text-sm text-gray-400">With financial guarantees</p>
                          </div>
                        </div>
                        <p className="text-gray-300">
                          Industry-leading availability backed by service credits and transparent monitoring.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <Activity className="h-8 w-8 text-futeur-blue mb-4" />
                        <h3 className="text-lg font-semibold mb-3">Global Redundancy</h3>
                        <p className="text-gray-300">
                          Global data centers with geo-redundant replication and live failover capabilities.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Autonomous Operations</h3>
                        <ul className="space-y-3 text-gray-300">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-futeur-blue rounded-full"></div>
                            Zero-downtime upgrades
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-futeur-purple rounded-full"></div>
                            Autonomous Fabric™ self-healing
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-futeur-blue rounded-full"></div>
                            Predictive maintenance
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-futeur-purple rounded-full"></div>
                            Automated failover
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">System Transparency</h3>
                        <p className="text-gray-300 mb-4">
                          Real-time system status dashboard with historical performance metrics and incident reports.
                        </p>
                        <div className="flex gap-3">
                          <button className="px-4 py-2 bg-futeur-blue text-white rounded-lg hover:bg-futeur-blue/90 transition-colors">
                            View Status
                          </button>
                          <button className="px-4 py-2 border border-futeur-purple text-futeur-purple rounded-lg hover:bg-futeur-purple/10 transition-colors">
                            Subscribe to Updates
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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
