
import React from "react";
import { FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TechnicalResources = () => {
  return (
    <Card className="glass-panel mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-futeur-lightPurple" />
          Technical Resources
        </CardTitle>
        <CardDescription>
          Additional documentation and resources for advanced configuration
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <h4 className="font-medium mb-2 text-futeur-blue">Hyperledger Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Hyperledger Fabric Documentation</li>
              <li>• Chaincode Development Guide</li>
              <li>• Network Configuration Best Practices</li>
              <li>• Security Event Schemas</li>
            </ul>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <h4 className="font-medium mb-2 text-futeur-purple">OSSEC Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• OSSEC Installation Guide</li>
              <li>• Rule Configuration Manual</li>
              <li>• Agent Management Documentation</li>
              <li>• Active Response Scripts</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnicalResources;
