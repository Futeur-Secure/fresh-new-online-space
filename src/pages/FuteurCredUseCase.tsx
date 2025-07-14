import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resetScroll } from "@/utils/navigationHelpers";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  Key, 
  FileText, 
  Building2, 
  CreditCard, 
  Database, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Hash,
  Receipt,
  FolderOpen,
  TrendingUp,
  User,
  X,
  Skull,
  DollarSign,
  Target,
  Clock,
  Globe,
  Server,
  Cpu,
  ShieldCheck,
  Fingerprint,
  Radar,
  Activity
} from "lucide-react";
import pipelineImage from "@/assets/futeurcred-pipeline.jpg";
import businessProtectionImage from "@/assets/business-data-protection.jpg";

const FuteurCredUseCase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    resetScroll();
  }, []);

  const breachExamples = [
    {
      company: "Krispy Kreme",
      year: "2024", 
      impact: "Customer & Employee Data",
      icon: Building2,
      cost: "$2.3M+"
    },
    {
      company: "T-Mobile",
      year: "2023",
      impact: "37M Customer Records", 
      icon: Globe,
      cost: "$350M+"
    },
    {
      company: "MOVEit",
      year: "2023",
      impact: "62M+ People Affected",
      icon: Server,
      cost: "$10B+ Global"
    },
    {
      company: "Panera Bread",
      year: "2022",
      impact: "Customer Payment Info",
      icon: CreditCard,
      cost: "$4.8M+"
    }
  ];

  const comparisonFeatures = [
    { 
      feature: "Zero-Knowledge Architecture",
      others: false,
      futeur: true,
      description: "We can't see your data even if we wanted to"
    },
    {
      feature: "Quantum-Resistant Encryption", 
      others: false,
      futeur: true,
      description: "Protected against future quantum computing threats"
    },
    {
      feature: "Breach Monitoring",
      others: "Basic alerts",
      futeur: "Real-time + AI",  
      description: "Advanced AI detects anomalies in milliseconds"
    },
    {
      feature: "Encryption Type",
      others: "AES-128",
      futeur: "AES-256 + HSM",
      description: "Military-grade with hardware security modules"
    },
    {
      feature: "Data Ownership",
      others: false,
      futeur: true,
      description: "Your data remains yours - never sold or shared"
    },
    {
      feature: "Multi-Factor Auth",
      others: "SMS/Email",
      futeur: "Biometric + Hardware",
      description: "Fingerprint, face recognition, and hardware keys"
    }
  ];

  const dnaFeatures = [
    {
      title: "Zero-Knowledge Vault",
      description: "No one sees your EIN, SSN, docs — not even us.",
      icon: Eye,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "AES-256 Encryption", 
      description: "Bank-level? Try future-level.",
      icon: Lock,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Quantum-Resistant Security",
      description: "We've already built for the next 25 years.",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-Factor Auth",
      description: "TOTP, SMS, biometrics — The keys to your business, secured.",
      icon: Fingerprint,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Real-Time Breach Alerts", 
      description: "If your data moves weird, we instantly know.",
      icon: Radar,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Audit Logs + Analytics",
      description: "Every access tracked. Every anomaly flagged.",
      icon: Activity,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Hardware Security Module",
      description: "Cryptographic keys locked in a digital safe.",
      icon: ShieldCheck,
      color: "from-teal-500 to-green-500"
    },
    {
      title: "FUTEURVAULT Integration",
      description: "All sensitive data stored with military-grade tech.",
      icon: Server,
      color: "from-slate-500 to-gray-500"
    }
  ];

  const pipelineSteps = [
    {
      title: "Your EIN + Documents",
      subtitle: "Secure Input",
      icon: User,
      description: "You enter your sensitive business data through our encrypted interface"
    },
    {
      title: "FUTEURVAULT Gateway", 
      subtitle: "Zero-Knowledge Processing",
      icon: Shield,
      description: "Data is immediately encrypted - we never see the raw information"
    },
    {
      title: "AES-256 Quantum Vault",
      subtitle: "Military-Grade Storage", 
      icon: Lock,
      description: "Stored with quantum-resistant encryption in hardened data centers"
    },
    {
      title: "LUMIQ™ Intelligence",
      subtitle: "Secure Analytics",
      icon: Cpu,
      description: "AI processes encrypted data without ever decrypting your information"
    },
    {
      title: "Business Insights",
      subtitle: "Protected Results",
      icon: TrendingUp, 
      description: "You get powerful credit insights while your data stays encrypted"
    }
  ];

  const securityFeatures = [
    {
      feature: "Zero-Knowledge Encryption",
      description: "Ensures even our system can't see your decrypted data.",
      icon: Eye
    },
    {
      feature: "AES-256 with TLS 1.3",
      description: "Bank-level encryption of all EINs, tax ID, business filings.",
      icon: Lock
    },
    {
      feature: "Quantum-Resistant Prep",
      description: "Future-proofed algorithms like Kyber integrated into roadmap.",
      icon: Zap
    },
    {
      feature: "Multi-Factor Authentication",
      description: "Clerk-enabled TOTP, biometric & device-level auth.",
      icon: Key
    },
    {
      feature: "Audit Logs",
      description: "All access tracked with forensic-grade logs.",
      icon: FileText
    },
    {
      feature: "Real-Time Breach Monitoring",
      description: "Alerts and flags on unusual login or access behavior.",
      icon: AlertTriangle
    },
    {
      feature: "No 3rd Party Resale",
      description: "Data stays on our encrypted servers, never sold.",
      icon: CheckCircle
    }
  ];

  const protectedData = [
    {
      icon: Hash,
      title: "EIN / Tax IDs",
      description: "Encrypted, zero-knowledge stored, never shared without explicit owner initiation."
    },
    {
      icon: Receipt,
      title: "Business Credit Applications",
      description: "Encrypted, zero-knowledge stored, never shared without explicit owner initiation."
    },
    {
      icon: FolderOpen,
      title: "Financial Statements",
      description: "Encrypted, zero-knowledge stored, never shared without explicit owner initiation."
    },
    {
      icon: Building2,
      title: "Business Registrations",
      description: "Encrypted, zero-knowledge stored, never shared without explicit owner initiation."
    },
    {
      icon: TrendingUp,
      title: "Tradeline + Payment Behavior",
      description: "Encrypted, zero-knowledge stored, never shared without explicit owner initiation."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white text-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(71, 85, 105, 0.3) 1px, transparent 0px)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10 animate-pulse">
          <div className="w-full h-full border border-slate-300 rotate-45"></div>
        </div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 opacity-10 animate-pulse">
          <div className="w-full h-full bg-slate-200 rounded-full"></div>
        </div>
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-2xl">
              {/* Status Badge */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-emerald-200/50 bg-emerald-50/50">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs font-medium text-emerald-700">Zero Breaches Ever</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-slate-900">
                  The Future of Data Security
                  <br />
                  <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent font-normal">
                    for Small Business Begins Here
                  </span>
                </h1>

                <p className="text-base md:text-lg leading-relaxed text-slate-600 max-w-xl">
                  If Krispy Kreme can get hacked, what makes you think your Shopify store is safe? 
                  <span className="font-semibold text-slate-800"> FUTEURSECURE™ is the AI-native, quantum-resistant armor for your small business data.</span>
                </p>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4">
                  <p className="text-sm text-red-800 font-medium">
                    ⚠️ <span className="font-bold">93% of small businesses store customer data online</span> — 
                    most without enterprise-grade protection.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/get-started"
                  className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-xl"
                >
                  Future-Proof Your Business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/book-demo"
                  className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 bg-white/80 backdrop-blur-sm rounded-xl hover:bg-slate-50 transition-all duration-300 font-medium"
                >
                  See the Demo
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">0</div>
                  <div className="text-xs text-slate-600">Data Breaches Ever</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">256-bit</div>
                  <div className="text-xs text-slate-600">AES Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-900">&lt; 1ms</div>
                  <div className="text-xs text-slate-600">Breach Detection</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative lg:h-[500px] flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Main Shield */}
                <div className="relative bg-gradient-to-br from-slate-100 to-white p-8 rounded-3xl shadow-2xl border border-slate-200">
                  <Shield className="h-24 w-24 text-slate-700 mx-auto mb-6" />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">FUTEURSECURE™</h3>
                    <p className="text-sm text-slate-600">Quantum-Resistant Protection</p>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-emerald-500 rounded-full p-3 shadow-lg animate-bounce">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-blue-500 rounded-full p-3 shadow-lg animate-pulse">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 -left-8 bg-purple-500 rounded-full p-2 shadow-lg animate-ping">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              The Problem: Everyone Gets Hacked
            </h2>
            <p className="text-lg text-slate-600">
              If billion-dollar companies can't protect data, what makes you think your small business can?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {breachExamples.map((breach, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-red-200 hover:shadow-xl transition-all duration-300">
                <breach.icon className="h-8 w-8 text-red-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">{breach.company}</h3>
                <p className="text-sm text-slate-600 mb-2">{breach.impact}</p>
                <div className="text-xs text-red-700 font-semibold">{breach.cost} in damages</div>
                <div className="text-xs text-slate-500 mt-1">{breach.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTEURSECURE vs The Rest */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              FUTEURSECURE™ vs The Rest
            </h2>
            <p className="text-lg text-slate-600">
              See why we're the gold standard for small business data protection
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
              <thead className="bg-gradient-to-r from-slate-100 to-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Feature</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-900">Other Platforms</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-900">FUTEURSECURE™</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">{feature.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {feature.others === false ? (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      ) : (
                        <span className="text-slate-600">{feature.others}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.futeur === true ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-emerald-600 font-semibold">{feature.futeur}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* THE DNA: FUTEURSECURE Powers FUTEURCRED */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-100 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🧬 THE DNA: FUTEURSECURE Powers FUTEURCRED™
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We don't just protect your EINs and financial docs. We secure your mission, your margin, and your momentum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dnaFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Architecture Diagram */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Data Protection Pipeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how your sensitive business data flows through our quantum-ready security architecture
            </p>
          </div>

          <div className="relative">
            <img 
              src={pipelineImage} 
              alt="FuteurCred Security Pipeline" 
              className="w-full rounded-2xl shadow-2xl"
            />
            
            {/* Pipeline Steps Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl px-8">
                {[
                  { title: "User EIN + Docs", subtitle: "Input Gateway", icon: User },
                  { title: "Vault Input Gateway", subtitle: "No Data Shared", icon: Shield },
                  { title: "AES-256 Encrypted", subtitle: "Zero-Knowledge Vault", icon: Lock },
                  { title: "LUMIQ™ Algorithm", subtitle: "Business Insights", icon: TrendingUp }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-background/90 backdrop-blur-sm border border-border rounded-xl p-4 mb-4 hover:shadow-lg transition-all duration-300">
                      <step.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-bold text-sm mb-1">{step.title}</h3>
                      <p className="text-xs text-muted-foreground">{step.subtitle}</p>
                    </div>
                    {index < 3 && (
                      <ArrowRight className="h-6 w-6 text-primary mx-auto hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Labels */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              "No Data Shared",
              "Encrypted at Rest & in Transit", 
              "Quantum-Resistant Layer",
              "User-Owned Keys"
            ].map((label, index) => (
              <div key={index} className="text-center p-4 bg-card border border-border rounded-xl">
                <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures Breakdown */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Breakdown of Security Measures
            </h2>
            <p className="text-lg text-muted-foreground">
              Every layer of protection explained in detail
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-muted/50 px-6 py-4 border-b border-border">
                <div className="grid grid-cols-3 gap-4">
                  <h3 className="font-bold">Feature</h3>
                  <h3 className="font-bold col-span-2">How It Works</h3>
                </div>
              </div>
              
              {securityFeatures.map((item, index) => (
                <div key={index} className="px-6 py-4 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors">
                  <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="flex items-center">
                      <item.icon className="h-5 w-5 text-primary mr-3" />
                      <span className="font-semibold">{item.feature}</span>
                    </div>
                    <div className="col-span-2 text-muted-foreground">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Protect Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We Protect
            </h2>
            <p className="text-lg text-muted-foreground">
              Your most sensitive business data, secured with military-grade encryption
            </p>
          </div>

          <div className="relative mb-12">
            <img 
              src={businessProtectionImage} 
              alt="Business Data Protection" 
              className="w-full rounded-2xl shadow-2xl opacity-80"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {protectedData.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              This is how business credit should work.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Secure. Private. Yours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/get-started"
                className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-semibold"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/book-demo"
                className="inline-flex items-center px-8 py-4 border border-border bg-background/50 backdrop-blur-sm rounded-xl hover:bg-accent transition-all duration-300"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FuteurCredUseCase;