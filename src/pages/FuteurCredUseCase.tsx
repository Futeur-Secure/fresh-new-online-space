import { useEffect } from "react";
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
  User
} from "lucide-react";
import pipelineImage from "@/assets/futeurcred-pipeline.jpg";
import businessProtectionImage from "@/assets/business-data-protection.jpg";

const FuteurCredUseCase = () => {
  useEffect(() => {
    resetScroll();
  }, []);

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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Shield className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">FuteurCred Use Case</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            How FUTEURCRED™ Protects Your Data
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Powered by FUTEURSECURE™
          </p>
          
          <div className="text-lg text-primary font-semibold mb-12">
            Military-grade encryption. Quantum-ready design. All for your business data.
          </div>
          
          <Link 
            to="/get-started"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-semibold"
          >
            Start Protected Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
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