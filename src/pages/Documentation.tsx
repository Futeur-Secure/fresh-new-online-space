
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Database, Shield } from "lucide-react";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import AuthNav from "@/components/AuthNav";
import DocHeader from "@/components/documentation/DocHeader";
import HyperledgerContent from "@/components/documentation/HyperledgerContent";
import OssecContent from "@/components/documentation/OssecContent";
import DocNavigation from "@/components/documentation/DocNavigation";
import TechnicalResources from "@/components/documentation/TechnicalResources";

const Documentation = () => {
  const [activeTab, setActiveTab] = useState("hyperledger");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AuthNav />
      <ParticlesBackground />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <DocHeader />
          
          {/* Documentation Tabs */}
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="hyperledger" value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="hyperledger" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  <span>Blockchain Logging</span>
                </TabsTrigger>
                <TabsTrigger value="ossec" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Endpoint Security</span>
                </TabsTrigger>
              </TabsList>
              
              {/* Hyperledger Documentation */}
              <TabsContent value="hyperledger" className="mt-6">
                <HyperledgerContent />
              </TabsContent>
              
              {/* OSSEC Documentation */}
              <TabsContent value="ossec" className="mt-6">
                <OssecContent />
              </TabsContent>
            </Tabs>
            
            {/* Documentation Navigation */}
            <DocNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {/* Technical Documentation */}
            <TechnicalResources />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
