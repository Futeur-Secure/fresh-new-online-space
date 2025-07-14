
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Brain, Heart, Globe, Zap, Users, ArrowRight, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { resetScroll } from "@/utils/navigationHelpers";

const About = () => {
  useEffect(() => {
    resetScroll();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              FuteurSecure: Securing the AI Frontier
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              In the dawning era of AI-powered systems, FuteurSecure emerges as the beacon of digital trust. We merge the engineering rigor of Oracle with Apple's design elegance—crafting enterprise-grade security that's intuitive, powerful, and beautifully built.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Founded by veterans of secure cloud infrastructure and consumer-grade UX, our mission is clear: empower teams to operate at peak performance—without compromise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-futeur-purple text-white rounded-lg hover:bg-futeur-purple/90 transition-colors">
                <Play className="h-4 w-4" />
                Meet the Mission Console
              </button>
              <button className="px-6 py-3 border border-futeur-blue text-futeur-blue rounded-lg hover:bg-futeur-blue/10 transition-colors">
                Talk to a Security Architect
              </button>
            </div>
          </div>

          {/* Pillars of Identity */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Pillars of Our Identity</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-colors">
                <CardContent className="p-6">
                  <Brain className="h-10 w-10 text-futeur-blue mb-4" />
                  <h3 className="text-xl font-semibold mb-3">AI-Native Security Architecture</h3>
                  <p className="text-gray-300 mb-4">
                    Designed for autonomous threat detection, quantum-resistant encryption, and self-healing infrastructure.
                  </p>
                  <p className="text-sm text-gray-400">
                    Our Cyber-Brain™ learns in real-time to anticipate and block sophisticated attacks.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10 hover:border-futeur-purple/50 transition-colors">
                <CardContent className="p-6">
                  <Heart className="h-10 w-10 text-futeur-purple mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Human-Centered Design</h3>
                  <p className="text-gray-300 mb-4">
                    Mission Console™ UI is visually elegant, accessible, and frictionless—only showing controls you need.
                  </p>
                  <p className="text-sm text-gray-400">
                    We believe enterprise tools should be delightful and easy to use.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-colors">
                <CardContent className="p-6">
                  <Shield className="h-10 w-10 text-futeur-blue mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Transparency & Trust</h3>
                  <p className="text-gray-300 mb-4">
                    Open-sourced select modules; third-party audits; public bug bounty results.
                  </p>
                  <p className="text-sm text-gray-400">
                    Customer-owned data and cryptographic keys by default.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10 hover:border-futeur-purple/50 transition-colors">
                <CardContent className="p-6">
                  <Globe className="h-10 w-10 text-futeur-purple mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Enterprise-Grade Resilience</h3>
                  <p className="text-gray-300 mb-4">
                    99.99% availability, global cloud footprint, site-wide disaster recovery.
                  </p>
                  <p className="text-sm text-gray-400">
                    Automated patching, zero-downtime deployments via Autonomous Fabric™.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10 hover:border-futeur-blue/50 transition-colors">
                <CardContent className="p-6">
                  <Zap className="h-10 w-10 text-futeur-blue mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Vision for the Future</h3>
                  <p className="text-gray-300 mb-4">
                    We're engineers of the future's infrastructure—AI, IoT, autonomy—all secured at the foundational level.
                  </p>
                  <p className="text-sm text-gray-400">
                    Building the digital backbone where innovation and protection co-exist.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10 hover:border-futeur-purple/50 transition-colors">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-futeur-purple mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Team Snapshot</h3>
                  <p className="text-gray-300 mb-4">
                    From ex-Cloud CISO leaders to former Apple UX designers and AI pioneers.
                  </p>
                  <p className="text-sm text-gray-400">
                    Our team blends world-class security expertise with obsession over perfect user experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-futeur-blue/10 to-futeur-purple/10 border-futeur-blue/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Why We Exist</h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Because the AI era demands more than just walls and passwords—it demands intelligent trust, adaptive defense, and beauty in execution. FuteurSecure is here to deliver it.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-8 gradient-text">Ready to Experience the Future?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="flex items-center gap-2 px-8 py-4 bg-futeur-purple text-white rounded-lg hover:bg-futeur-purple/90 transition-colors text-lg font-semibold">
                <Play className="h-5 w-5" />
                Meet the Mission Console
              </button>
              <button className="flex items-center gap-2 px-8 py-4 border border-futeur-blue text-futeur-blue rounded-lg hover:bg-futeur-blue/10 transition-colors text-lg font-semibold">
                Talk to a Security Architect
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="flex items-center gap-2 px-8 py-4 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-lg font-semibold">
                View Our Roadmap
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
