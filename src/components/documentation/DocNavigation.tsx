
import React from "react";
import { Database, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface DocNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const DocNavigation = ({ activeTab, setActiveTab }: DocNavigationProps) => {
  return (
    <div className="flex justify-between mt-8">
      <Card 
        className="glass-panel card-hover w-[48%] cursor-pointer" 
        onClick={() => setActiveTab("hyperledger")}
      >
        <CardContent className="p-6 flex items-center">
          <div className="h-12 w-12 bg-futeur-blue/20 rounded-full flex items-center justify-center mr-4">
            <Database className="h-6 w-6 text-futeur-blue" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Blockchain Logging</h3>
            <p className="text-sm text-gray-300">Hyperledger implementation details</p>
          </div>
        </CardContent>
      </Card>
      
      <Card 
        className="glass-panel card-hover w-[48%] cursor-pointer" 
        onClick={() => setActiveTab("ossec")}
      >
        <CardContent className="p-6 flex items-center">
          <div className="h-12 w-12 bg-futeur-purple/20 rounded-full flex items-center justify-center mr-4">
            <Shield className="h-6 w-6 text-futeur-purple" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Endpoint Security</h3>
            <p className="text-sm text-gray-300">OSSEC configuration and features</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocNavigation;
