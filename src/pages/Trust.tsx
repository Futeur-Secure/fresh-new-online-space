import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileCheck, Activity, ChevronRight, Download, ExternalLink, Globe, Zap, Users, Award, Clock, Server, Database, Code, CheckCircle, AlertTriangle, TrendingUp, BarChart3, Cpu, Network, Fingerprint, Play, MousePointer, Layers, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { resetScroll } from "@/utils/navigationHelpers";
import trustHeroShield from "@/assets/trust-hero-shield.jpg";
import securityDashboard from "@/assets/security-dashboard.jpg";
import encryptionVisual from "@/assets/encryption-visual.jpg";
import globalNetwork from "@/assets/global-network.jpg";
import complianceBadges from "@/assets/compliance-badges.jpg";

const Trust = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
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
    { label: "Threat Vectors Blocked", value: "2.4M+", icon: Shield, trend: "+12%", color: "from-blue-500 to-purple-600" },
    { label: "Security Audits", value: "24/7", icon: Eye, trend: "Continuous", color: "from-green-500 to-blue-600" },
    { label: "Encryption Keys Managed", value: "500K+", icon: Lock, trend: "+8%", color: "from-purple-500 to-pink-600" },
    { label: "Zero-Day Response", value: "<4hrs", icon: Zap, trend: "Avg", color: "from-orange-500 to-red-600" },
  ];

  const complianceStats = [
    { standard: "SOC 2 Type II", status: "Certified", icon: Award, color: "text-green-600" },
    { standard: "ISO 27001", status: "Certified", icon: Shield, color: "text-green-600" },
    { standard: "FedRAMP", status: "Ready", icon: FileCheck, color: "text-blue-600" },
    { standard: "GDPR", status: "Compliant", icon: Globe, color: "text-green-600" },
  ];

  const InteractiveFeature = ({ title, description, icon: Icon, image, delay = 0 }: { title: string; description: string; icon: any; image: string; delay?: number }) => (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-blue-300/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setHoveredCard(title)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <span className="text-sm font-medium">Learn more</span>
          <ChevronRight className="h-4 w-4 ml-1" />
        </div>
      </div>
    </div>
  );

  const MetricCard = ({ metric, index }: { metric: any; index: number }) => (
    <Card 
      className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:border-blue-300/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 animate-fade-in-up group cursor-pointer" 
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <CardContent className="p-6 text-center">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${metric.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <metric.icon className="h-8 w-8 text-white" />
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{metric.value}</div>
        <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
        <div className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">{metric.trend}</div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section with Image */}
          <div className="max-w-7xl mx-auto mb-16 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    <Sparkles className="h-4 w-4" />
                    Trusted by 50,000+ organizations
                  </div>
                  <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                    Trust by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Design</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    At FuteurSecure, trust isn't optional—it's engineered into every layer of our platform. 
                    Protecting organizations with quantum-grade security architecture and AI-powered defense systems.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="group px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                    <span className="flex items-center gap-2">
                      <Download className="h-5 w-5 group-hover:animate-bounce" />
                      Security Reports
                    </span>
                  </button>
                  <button className="group px-8 py-4 bg-white text-blue-600 border-2 border-blue-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-105">
                    <span className="flex items-center gap-2">
                      <Play className="h-5 w-5 group-hover:animate-pulse" />
                      Live Demo
                    </span>
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
                <img 
                  src={trustHeroShield} 
                  alt="Trust and Security"
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Real-time Security Metrics */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-time Security Metrics</h2>
              <p className="text-xl text-gray-600">Live data from our global security infrastructure</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {securityMetrics.map((metric, index) => (
                <MetricCard key={index} metric={metric} index={index} />
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex flex-wrap justify-center gap-2">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`group flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 ${
                      activeSection === section.id
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105"
                        : "bg-white/80 backdrop-blur-sm text-gray-700 hover:text-blue-600 hover:bg-white hover:shadow-lg hover:shadow-blue-500/10 hover:scale-102"
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <Icon className={`h-5 w-5 ${activeSection === section.id ? 'animate-pulse' : 'group-hover:animate-bounce'}`} />
                    <span className="font-medium">{section.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-7xl mx-auto">
            {activeSection === "overview" && (
              <div className="space-y-16 animate-fade-in-up">
                <section>
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Engineering Trust for the AI Era</h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                      Built on decades of security expertise and powered by AI-native architecture, 
                      FuteurVault is the foundation of digital resilience for the future.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    <InteractiveFeature 
                      title="Mission Console™"
                      description="Centralized admin controls with real-time threat visualization and AI-powered anomaly detection across your entire infrastructure."
                      icon={Shield}
                      image={securityDashboard}
                      delay={0.1}
                    />
                    <InteractiveFeature 
                      title="ZeroLeak Fabric™"
                      description="Hardware-level data protection with quantum-resistant encryption and perfect forward secrecy for every data packet."
                      icon={Database}
                      image={encryptionVisual}
                      delay={0.2}
                    />
                    <InteractiveFeature 
                      title="Global Infrastructure"
                      description="Multi-region deployment with 99.99% availability guarantee and distributed security monitoring worldwide."
                      icon={Globe}
                      image={globalNetwork}
                      delay={0.3}
                    />
                  </div>

                  {/* Trust by Numbers */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl"></div>
                    <div className="relative p-12 text-center">
                      <h3 className="text-3xl font-bold text-gray-900 mb-12">Trust by Numbers</h3>
                      <div className="grid md:grid-cols-4 gap-8">
                        {[
                          { value: "99.99%", label: "Uptime SLA", color: "from-blue-500 to-blue-600" },
                          { value: "256-bit", label: "AES Encryption", color: "from-purple-500 to-purple-600" },
                          { value: "<100ms", label: "Response Time", color: "from-green-500 to-green-600" },
                          { value: "24/7/365", label: "Security Monitoring", color: "from-orange-500 to-orange-600" },
                        ].map((stat, index) => (
                          <div key={index} className="group">
                            <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                              {stat.value}
                            </div>
                            <div className="text-gray-600">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeSection === "security" && (
              <div className="space-y-16 animate-fade-in-up">
                <section>
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Security by Design, Supercharged by AI</h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                      FuteurVault processes over 1 billion security events daily with our proprietary QuantumTrust Engine™ 
                      to prevent vulnerabilities before they emerge.
                    </p>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8">
                    {[
                      {
                        title: "AI-Powered Threat Detection",
                        description: "Machine learning models analyze behavioral patterns and detect anomalies in real-time across your infrastructure.",
                        icon: Cpu,
                        features: ["Real-time threat visualization", "Automated incident response", "Behavioral analytics engine"],
                        gradient: "from-blue-500 to-purple-600"
                      },
                      {
                        title: "Quantum-Resistant Encryption",
                        description: "Future-proof cryptography with AES-256 and post-quantum algorithms protecting your data at every layer.",
                        icon: Lock,
                        features: ["Hardware security modules", "Post-quantum cryptography", "Zero-knowledge architecture"],
                        gradient: "from-purple-500 to-pink-600"
                      },
                      {
                        title: "ContextAware MFA™",
                        description: "Adaptive authentication that analyzes 200+ risk factors to determine security requirements without friction.",
                        icon: Fingerprint,
                        features: ["Biometric authentication", "Risk-based adaptive access", "FIDO2/WebAuthn support"],
                        gradient: "from-green-500 to-blue-600"
                      },
                      {
                        title: "Zero-Trust Architecture",
                        description: "Never trust, always verify with continuous authentication and micro-segmentation across all network layers.",
                        icon: Network,
                        features: ["Continuous verification", "Micro-segmentation", "Identity-based access"],
                        gradient: "from-orange-500 to-red-600"
                      }
                    ].map((feature, index) => (
                      <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200/50 hover:border-blue-300/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 group">
                        <CardContent className="p-8">
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`p-3 rounded-full bg-gradient-to-r ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                              <feature.icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                          </div>
                          <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                          <div className="space-y-3">
                            {feature.features.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm text-gray-600">{item}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeSection === "privacy" && (
              <div className="space-y-16 animate-fade-in-up">
                <section>
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Privacy by Design</h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                      Your data privacy is fundamental to our architecture. We've built privacy controls into every layer of our platform.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      {[
                        {
                          title: "Data Minimization",
                          description: "We collect only what's necessary and delete data when it's no longer needed.",
                          icon: Database
                        },
                        {
                          title: "Encryption at Rest & Transit",
                          description: "All data is encrypted using AES-256 with hardware security modules.",
                          icon: Lock
                        },
                        {
                          title: "User Control",
                          description: "Complete control over your data with granular permissions and audit trails.",
                          icon: MousePointer
                        },
                        {
                          title: "Global Compliance",
                          description: "Built to meet GDPR, CCPA, and other international privacy regulations.",
                          icon: Globe
                        }
                      ].map((item, index) => (
                        <div key={index} className="group flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                          <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="relative">
                      <img 
                        src={encryptionVisual} 
                        alt="Privacy Protection"
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeSection === "compliance" && (
              <div className="space-y-16 animate-fade-in-up">
                <section>
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Compliance & Certifications</h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                      We maintain the highest standards of compliance across all major frameworks and regulations.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="relative">
                      <img 
                        src={complianceBadges} 
                        alt="Compliance Certifications"
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>
                    <div className="space-y-6">
                      {complianceStats.map((stat, index) => (
                        <div key={index} className="group flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                          <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-blue-600 group-hover:scale-110 transition-transform duration-300">
                            <stat.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">{stat.standard}</h3>
                            <p className={`text-sm font-medium ${stat.color}`}>{stat.status}</p>
                          </div>
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeSection === "availability" && (
              <div className="space-y-16 animate-fade-in-up">
                <section>
                  <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">99.99% Availability Guarantee</h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                      Our global infrastructure ensures your security systems are always available when you need them most.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                      {[
                        {
                          title: "Global Redundancy",
                          description: "Multiple data centers across continents with automatic failover capabilities.",
                          icon: Globe,
                          stats: "15+ regions worldwide"
                        },
                        {
                          title: "Real-time Monitoring",
                          description: "24/7 monitoring with AI-powered predictive maintenance and instant alerts.",
                          icon: Activity,
                          stats: "< 30 second detection"
                        },
                        {
                          title: "Disaster Recovery",
                          description: "Automated backup and recovery systems with point-in-time restoration.",
                          icon: Server,
                          stats: "RTO < 4 hours"
                        },
                        {
                          title: "Load Balancing",
                          description: "Intelligent traffic distribution to ensure optimal performance at all times.",
                          icon: TrendingUp,
                          stats: "Auto-scaling enabled"
                        }
                      ].map((item, index) => (
                        <div key={index} className="group flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                          <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-110 transition-transform duration-300">
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                            <p className="text-gray-600 mb-2">{item.description}</p>
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                              <CheckCircle className="h-3 w-3" />
                              {item.stats}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="relative">
                      <img 
                        src={globalNetwork} 
                        alt="Global Network"
                        className="w-full h-auto rounded-2xl shadow-2xl"
                      />
                    </div>
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