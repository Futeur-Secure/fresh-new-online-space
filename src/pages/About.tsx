
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Coffee, Heart, Globe, Lightbulb, Users, ArrowRight, Mail, MapPin, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { resetScroll } from "@/utils/navigationHelpers";

const About = () => {
  useEffect(() => {
    resetScroll();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      
      {/* Subtle silver pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c0c0c0 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 text-white">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            {/* Hero Section */}
            <div className="max-w-5xl mx-auto mb-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 text-sm font-medium mb-8">
                <Heart className="w-4 h-4 text-slate-400" />
                The Humans Behind FuteurSecure
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">
                We're building the 
                <span className="block bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent">
                  security tools we wish we had
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                Hey there! We're a small team of engineers, designers, and security nerds who got tired of enterprise tools that felt like they were built in 2005. After countless late nights wrestling with clunky interfaces and overly complex workflows, we decided to build something better.
              </p>
              <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                FuteurSecure isn't just our product—it's our love letter to every developer, security team, and IT admin who deserves tools that actually work the way they think.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-900 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 font-semibold">
                  <Mail className="h-4 w-4" />
                  Say Hello
                </button>
                <button className="px-6 py-3 border border-slate-600/50 text-slate-200 rounded-xl hover:bg-slate-700/40 transition-all duration-300 font-semibold">
                  Our Story
                </button>
              </div>
            </div>

            {/* Our Values */}
            <section className="mb-20">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">What drives us every day</h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                  These aren't just corporate buzzwords—they're the principles that guide every decision we make.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl hover:bg-slate-700/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <Coffee className="h-12 w-12 text-slate-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-4 text-slate-100">Human-First Design</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      We believe security tools should feel intuitive, not intimidating. Every interface we design starts with the question: "How would we want to use this at 2 AM?"
                    </p>
                    <p className="text-sm text-slate-400">
                      Real people use our tools in high-stress situations. We never forget that.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl hover:bg-slate-700/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <Shield className="h-12 w-12 text-slate-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-4 text-slate-100">Security Without Compromise</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      We're security professionals first. Every feature we ship has been battle-tested, audited, and designed with zero-trust principles from day one.
                    </p>
                    <p className="text-sm text-slate-400">
                      Your data stays yours. Always. We can't access it even if we wanted to.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl hover:bg-slate-700/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <Heart className="h-12 w-12 text-slate-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-4 text-slate-100">Radical Transparency</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      Open source where it matters, public roadmaps, and honest conversations about what we're building and why. No marketing fluff, just real talk.
                    </p>
                    <p className="text-sm text-slate-400">
                      Found a bug? We'll acknowledge it publicly and fix it fast.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl hover:bg-slate-700/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <Lightbulb className="h-12 w-12 text-slate-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-4 text-slate-100">Innovation in Simplicity</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      The best security is invisible security. We're constantly asking: "How can we make this simpler without making it less secure?"
                    </p>
                    <p className="text-sm text-slate-400">
                      Complex problems don't require complex solutions—they require thoughtful ones.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl hover:bg-slate-700/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <Globe className="h-12 w-12 text-slate-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-4 text-slate-100">Global by Design</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      From day one, we built for teams that work across time zones, regulatory environments, and cultures. One platform, everywhere.
                    </p>
                    <p className="text-sm text-slate-400">
                      GDPR, SOC 2, ISO 27001—we speak compliance fluently in every region.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl hover:bg-slate-700/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <Users className="h-12 w-12 text-slate-300 mb-6" />
                    <h3 className="text-xl font-semibold mb-4 text-slate-100">Community-Driven</h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      Our best features come from real user feedback. We're building this together—security professionals helping security professionals.
                    </p>
                    <p className="text-sm text-slate-400">
                      Join our Discord. Seriously. We actually read every message.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Personal Story */}
            <section className="mb-20">
              <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl">
                <CardContent className="p-12 text-center">
                  <Compass className="h-16 w-16 text-slate-300 mx-auto mb-8" />
                  <h2 className="text-4xl font-bold mb-8 text-slate-100">Why we started this journey</h2>
                  <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-300 leading-relaxed">
                    <p>
                      It was 3 AM on a Friday when our team lead got the call—another security incident, another scramble through five different dashboards, another night ruined by tools that seemed designed to make simple tasks complicated.
                    </p>
                    <p>
                      That's when we realized something: <strong className="text-slate-100">the security industry had forgotten about the humans using these tools.</strong> We were so focused on features and compliance checkboxes that we forgot about the people pulling all-nighters to keep systems safe.
                    </p>
                    <p>
                      So we started building. Not for enterprise procurement committees or feature comparison charts, but for the security engineer at 3 AM who just needs to know what's happening, fast.
                    </p>
                    <p className="text-slate-200 font-medium">
                      FuteurSecure exists because security tools should enhance human intelligence, not replace it.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Team Section */}
            <section className="mb-20 text-center">
              <h2 className="text-4xl font-bold mb-6">Meet the humans</h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                We're a small but mighty team spread across three time zones, united by our love for clean code, good coffee, and security that just works.
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl hover:bg-slate-700/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-100">Engineering Team</h3>
                    <p className="text-slate-300 mb-3">
                      Former engineers from Apple, Google, and leading security firms who believe beautiful code creates beautiful experiences.
                    </p>
                    <p className="text-sm text-slate-400">
                      "We measure success in user smiles, not feature counts."
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl hover:bg-slate-700/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-500 to-slate-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-100">Security Experts</h3>
                    <p className="text-slate-300 mb-3">
                      Ex-CISOs and security researchers who've been in the trenches, fought the real battles, and know what actually works.
                    </p>
                    <p className="text-sm text-slate-400">
                      "Security isn't about fear—it's about confidence."
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/40 border-slate-700/50 backdrop-blur-xl hover:bg-slate-700/40 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-400 to-slate-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <Heart className="w-8 h-8 text-slate-900" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-100">Design & UX</h3>
                    <p className="text-slate-300 mb-3">
                      Designers who believe that if security feels complicated, we haven't finished our job yet.
                    </p>
                    <p className="text-sm text-slate-400">
                      "Great design is invisible—until you need it."
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-6">Want to build the future with us?</h2>
                <p className="text-xl text-slate-300 mb-10">
                  Whether you're looking to join our team, become a customer, or just want to chat about security over coffee, we'd love to hear from you.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <button className="flex items-center gap-2 px-8 py-4 bg-slate-200 text-slate-900 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 text-lg font-semibold">
                    <Mail className="h-5 w-5" />
                    Get in Touch
                  </button>
                  <button className="flex items-center gap-2 px-8 py-4 border border-slate-600/50 text-slate-200 rounded-xl hover:bg-slate-700/40 transition-all duration-300 text-lg font-semibold">
                    Join Our Team
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button className="flex items-center gap-2 px-8 py-4 bg-slate-700/60 text-slate-200 rounded-xl hover:bg-slate-600/60 transition-all duration-300 text-lg font-semibold">
                    <MapPin className="h-5 w-5" />
                    Visit Us in DC
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default About;
