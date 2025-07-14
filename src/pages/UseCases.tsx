import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resetScroll } from "@/utils/navigationHelpers";
import { Link } from "react-router-dom";
import { Shield, FileText, Building, HeartHandshake, Scale, Globe, ArrowRight, Zap, Lock, Users } from "lucide-react";
import useCasesHero from "@/assets/use-cases-hero.jpg";

const UseCases = () => {
  useEffect(() => {
    resetScroll();
  }, []);

  const useCases = [
    {
      title: "FuteurCred Business Credit Protection",
      description: "Military-grade encryption for EINs, tax data, and business filings with zero-knowledge architecture.",
      icon: Shield,
      link: "/use-cases/futeurcred",
      category: "Financial Services",
      highlights: ["Zero-Knowledge Encryption", "Quantum-Ready Security", "Business Data Protection"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Healthcare Data Compliance",
      description: "HIPAA-compliant patient data protection with end-to-end encryption and audit trails.",
      icon: HeartHandshake,
      link: "#",
      category: "Healthcare",
      highlights: ["HIPAA Compliant", "Patient Privacy", "Audit Trails"],
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Legal Document Security",
      description: "Attorney-client privilege protection with encrypted document storage and secure collaboration.",
      icon: Scale,
      link: "#",
      category: "Legal",
      highlights: ["Attorney-Client Privilege", "Document Encryption", "Secure Collaboration"],
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      title: "Government Data Protection",
      description: "Federal-grade security for sensitive government data with multi-layer authentication.",
      icon: Building,
      link: "#",
      category: "Government",
      highlights: ["Federal Grade Security", "Multi-Factor Auth", "Compliance Ready"],
      gradient: "from-red-600 to-orange-600"
    },
    {
      title: "Enterprise Data Governance",
      description: "Comprehensive data governance solution for large enterprises with role-based access control.",
      icon: Users,
      link: "#",
      category: "Enterprise",
      highlights: ["Role-Based Access", "Data Governance", "Enterprise Scale"],
      gradient: "from-teal-600 to-blue-600"
    },
    {
      title: "Global Data Sovereignty",
      description: "Multi-region data sovereignty compliance with localized encryption and storage.",
      icon: Globe,
      link: "#",
      category: "International",
      highlights: ["Data Sovereignty", "Multi-Region", "Localized Storage"],
      gradient: "from-amber-600 to-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={useCasesHero} 
            alt="Use Cases Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Zap className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Real-World Applications</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Use Cases Library
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how FuteurSecure's quantum-ready security solutions protect sensitive data across industries that others overlook.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/use-cases/futeurcred"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Explore FuteurCred
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 border border-border bg-background/50 backdrop-blur-sm rounded-xl hover:bg-accent transition-all duration-300"
            >
              Custom Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Security Solutions Across Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each industry has unique security challenges. Our solutions adapt to protect what matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground mb-4">
                  {useCase.category}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${useCase.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {useCase.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {useCase.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <Lock className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {useCase.link.startsWith('/') ? (
                  <Link
                    to={useCase.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    Explore Solution
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <div className="inline-flex items-center text-muted-foreground">
                    <span className="text-sm">Coming Soon</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We specialize in protecting industries that others overlook. Let's discuss your unique security requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-semibold"
          >
            Discuss Your Needs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCases;