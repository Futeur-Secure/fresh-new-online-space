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
      description: "Future-proofed algorithms like Nexus-Q integrated into roadmap.",
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
    },
    {
      icon: User,
      title: "Owner Personal Data",
      description: "Unlike other platforms, we delete ALL consumer data immediately upon verification. We keep absolutely nothing."
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
              Everyone Gets Hacked
            </h2>
            <p className="text-xl md:text-2xl font-display font-bold leading-relaxed text-slate-700 max-w-4xl mx-auto">
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
              Built on FUTEURSECURE™ Foundation
            </h2>
            <p className="text-lg md:text-xl font-display font-semibold text-slate-700 mb-4">
              FUTEURCRED™ is powered and secured by FUTEURSECURE foundation.
            </p>
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

      {/* Data Protection Pipeline - Glass Theme */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background with glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50"></div>
        <div className="absolute inset-0 backdrop-blur-sm bg-white/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Data Protection Pipeline
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how your sensitive business data flows through our quantum-ready security architecture
            </p>
          </div>

          {/* Main Pipeline Flow */}
          <div className="relative">
            {/* Step 1: User EIN + Docs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 hover:bg-white/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <FileText className="h-12 w-12 text-violet-600 mb-2" />
                      <Lock className="h-6 w-6 text-purple-600 absolute -bottom-1 -right-1 bg-white rounded-full p-1" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">User EIN + Docs</h3>
                  <p className="text-sm text-slate-600 text-center">Secure document input with immediate encryption</p>
                </div>
                
                {/* Arrow */}
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-violet-400 to-purple-400"></div>
                    <ArrowRight className="h-6 w-6 text-purple-500 ml-1" />
                  </div>
                </div>
              </div>

              {/* Step 2: Vault Input Gateway */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 hover:bg-white/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-center mb-6">
                    <Shield className="h-12 w-12 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">Vault Input Gateway</h3>
                  <p className="text-sm text-slate-600 text-center">Zero-knowledge processing - we never see your data</p>
                </div>
                
                {/* Arrow */}
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
                    <ArrowRight className="h-6 w-6 text-indigo-500 ml-1" />
                  </div>
                </div>
              </div>

              {/* Step 3: AES-256 Encrypted Vault */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 hover:bg-white/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <Database className="h-12 w-12 text-indigo-600" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-amber-400 rounded border-2 border-indigo-600 flex items-center justify-center">
                          <Lock className="h-3 w-3 text-indigo-900" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">AES-256 Encrypted</h3>
                  <p className="text-sm text-slate-600 text-center">Zero-Knowledge Vault storage</p>
                </div>
                
                {/* Arrow */}
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-400"></div>
                    <ArrowRight className="h-6 w-6 text-blue-500 ml-1" />
                  </div>
                </div>
              </div>

              {/* Step 4: LUMIQ Algorithm */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 hover:bg-white/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-center mb-6">
                    <Cpu className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">LUMIQ™ Algorithm</h3>
                  <p className="text-sm text-slate-600 text-center">AI analytics on encrypted data</p>
                </div>
              </div>
            </div>

            {/* Step 5: Business Insights Returned (Below) */}
            <div className="flex justify-center">
              <div className="relative group max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-8 hover:bg-white/50 transition-all duration-300 shadow-xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      <TrendingUp className="h-12 w-12 text-emerald-600" />
                      <div className="absolute -bottom-2 -right-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">Business Insights Returned</h3>
                  <p className="text-sm text-slate-600 text-center">Actionable credit intelligence while your data stays encrypted</p>
                </div>
                
                {/* Upward Arrow */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-8 bg-gradient-to-t from-emerald-400 to-blue-400"></div>
                    <div className="w-3 h-3 bg-emerald-400 rotate-45 transform -translate-y-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Guarantees */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { label: "No Data Shared", icon: Eye, color: "from-violet-500 to-purple-500" },
              { label: "Encrypted at Rest & in Transit", icon: Lock, color: "from-purple-500 to-indigo-500" }, 
              { label: "Quantum-Resistant Layer", icon: Zap, color: "from-indigo-500 to-blue-500" },
              { label: "User-Owned Keys", icon: Key, color: "from-blue-500 to-cyan-500" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative text-center p-4 bg-white/30 backdrop-blur-md border border-white/50 rounded-xl hover:bg-white/40 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-slate-700 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-800">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures Breakdown */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900 relative overflow-hidden">
        {/* Dark animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-transparent to-slate-900/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Breakdown of Security Measures
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Every layer of protection explained in detail with military-grade precision
            </p>
          </div>

          {/* Enhanced Card Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <div className="mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-500 group-hover:scale-110 shadow-lg">
                      <item.icon className="h-7 w-7 text-slate-400 group-hover:text-blue-400 transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                      {item.feature}
                    </h3>
                    
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Status indicator */}
                  <div className="mt-6 flex items-center">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-sm text-emerald-300 font-medium">Active Protection</span>
                  </div>
                </div>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Security Stats */}
          <div className="mt-16 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Threat Detection", value: "24/7", color: "text-blue-400" },
                { label: "Encryption Keys", value: "256-bit", color: "text-purple-400" },
                { label: "Zero Knowledge", value: "100%", color: "text-emerald-400" },
                { label: "Quantum Ready", value: "Yes", color: "text-cyan-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 font-medium group-hover:text-slate-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Protect Section - Apple-like Design */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
              What We Protect
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Your most sensitive business data, secured with military-grade encryption
            </p>
          </div>

          {/* Interactive Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-slate-200/50 rounded-3xl p-1">
            {protectedData.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl p-8 hover:bg-slate-50 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:shadow-xl"
                onMouseEnter={(e) => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-500 group-hover:scale-110">
                      <item.icon className="h-8 w-8 text-slate-600 group-hover:text-blue-600 transition-colors duration-500" />
                    </div>
                    
                    {/* Animated lock indicator */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Lock className="h-3 w-3 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Security Badge */}
                  <div className="mt-6 inline-flex items-center px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-200 group-hover:bg-emerald-100 transition-colors duration-300">
                    <Shield className="h-3 w-3 text-emerald-600 mr-1.5" />
                    <span className="text-xs font-medium text-emerald-700">256-bit Encrypted</span>
                  </div>
                </div>

                {/* Subtle border highlight on hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-200/50 transition-colors duration-500"></div>
              </div>
            ))}
          </div>

          {/* Interactive Security Stats */}
          <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/50 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Zero Breaches", value: "0", suffix: "", color: "text-emerald-600" },
                { label: "Encryption Strength", value: "256", suffix: "-bit", color: "text-blue-600" },
                { label: "Detection Speed", value: "<1", suffix: "ms", color: "text-purple-600" },
                { label: "Uptime SLA", value: "99.9", suffix: "%", color: "text-orange-600" }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}<span className="text-lg">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-16">
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every piece of data is <span className="font-semibold text-slate-900">encrypted</span>, 
              <span className="font-semibold text-slate-900"> monitored</span>, and 
              <span className="font-semibold text-slate-900"> protected</span> under our zero-knowledge architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Powerful CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Dramatic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-400/30 rounded-full blur-xl animate-ping"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Main Message */}
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-emerald-300 font-medium">THE FUTURE IS NOW</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Your Business.
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-white bg-clip-text text-transparent">
                Your Rules.
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Your Victory.
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-6">
                While your competitors leak data and sell customer info, you'll build credit with 
                <span className="font-bold text-white"> military-grade protection</span>.
              </p>
              <p className="text-lg text-slate-400">
                Most business owners don't know their personal data is being harvested during "verification." 
                <span className="font-semibold text-cyan-300"> You're about to be different</span>.
              </p>
            </div>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">0</div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">Data Breaches Ever</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">∞</div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">Years Protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">1st</div>
              <div className="text-sm text-slate-400 uppercase tracking-wide">In Quantum Security</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              to="/get-started"
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center">
                Join the Revolution
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              to="/book-demo"
              className="group border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              See How It Works
            </Link>
          </div>

          {/* Urgency Message */}
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-2xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <Clock className="h-5 w-5 text-orange-400 mr-2" />
              <span className="text-orange-300 font-semibold uppercase tracking-wide text-sm">Limited Time</span>
            </div>
            <p className="text-white text-lg font-medium">
              While others suffer breaches, early adopters are building unbreakable credit foundations. 
              <span className="text-orange-300 font-bold">Don't be the last to protect what matters</span>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FuteurCredUseCase;