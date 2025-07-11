
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, Database, Network } from "lucide-react";
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
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl font-bold mb-6 gradient-text">About Futeur Secure</h1>
            <p className="text-xl text-gray-400">
              Protecting your digital assets with next-generation security solutions
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-semibold mb-6 gradient-text">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                At Futeur Secure, we're dedicated to revolutionizing cybersecurity through the integration of cutting-edge AI technology and enterprise-grade security solutions. Our mission is to provide comprehensive protection for businesses of all sizes, ensuring their digital assets remain secure in an ever-evolving threat landscape.
              </p>
            </section>

            <section className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 border-white/10">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-futeur-blue mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
                  <p className="text-gray-300">
                    Our enterprise security solutions combine AI-powered threat detection, blockchain logging, and advanced endpoint protection to create an impenetrable defense system for your organization.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardContent className="p-6">
                  <Lock className="h-8 w-8 text-futeur-purple mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Zero Trust Architecture</h3>
                  <p className="text-gray-300">
                    We implement a robust zero trust security model, ensuring that every access request is verified, regardless of its source, protecting your assets from both external and internal threats.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardContent className="p-6">
                  <Database className="h-8 w-8 text-futeur-blue mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
                  <p className="text-gray-300">
                    Our advanced encryption and data protection protocols ensure your sensitive information remains secure, compliant, and accessible only to authorized personnel.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-white/10">
                <CardContent className="p-6">
                  <Network className="h-8 w-8 text-futeur-purple mb-4" />
                  <h3 className="text-xl font-semibold mb-3">24/7 Monitoring</h3>
                  <p className="text-gray-300">
                    With round-the-clock security monitoring and real-time threat detection, our expert team ensures your systems are protected at all times, responding swiftly to any security incidents.
                  </p>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6 gradient-text">Why Choose Futeur Secure?</h2>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  With years of experience in cybersecurity and a team of dedicated experts, we understand the unique challenges businesses face in protecting their digital assets. Our solutions are tailored to meet your specific needs while maintaining the highest security standards in the industry.
                </p>
                <p className="leading-relaxed">
                  We pride ourselves on staying ahead of emerging threats through continuous innovation and research. Our AI-powered security systems learn and adapt to new threats in real-time, providing unparalleled protection for your organization.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
