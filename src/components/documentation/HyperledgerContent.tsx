
import React from "react";
import { Database } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HyperledgerContent = () => {
  return (
    <Card className="glass-panel">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5 text-futeur-blue" />
          Hyperledger Blockchain Logging
        </CardTitle>
        <CardDescription>
          Immutable security log storage using blockchain technology
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <p className="text-gray-300 mb-4">
            Our blockchain logging solution leverages Hyperledger Fabric to create an immutable, 
            distributed record of security events. This ensures that security logs cannot be 
            tampered with, providing a reliable audit trail for security investigations.
          </p>
          
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 mb-4">
            <h4 className="font-medium mb-2 text-futeur-blue">Key Features:</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Immutable log storage prevents tampering of security records</li>
              <li>Distributed consensus ensures no single point of failure</li>
              <li>Cryptographic verification of all logged events</li>
              <li>Smart contracts to automate security policies and alerts</li>
              <li>Permissioned network ensures only authorized access</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">Technical Architecture</h3>
          <p className="text-gray-300 mb-4">
            The Hyperledger blockchain logging system consists of several key components:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h4 className="font-medium mb-2 text-futeur-blue">Peers and Nodes</h4>
              <p className="text-gray-300">
                Our network contains multiple peer nodes that maintain a copy of the ledger
                and validate transactions. Each security event is recorded across all nodes,
                ensuring data integrity and availability.
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h4 className="font-medium mb-2 text-futeur-blue">Smart Contracts (Chaincode)</h4>
              <p className="text-gray-300">
                Smart contracts automate the processing of security events, triggering responses
                based on predefined conditions. These contracts are executed consistently across
                all nodes in the network.
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h4 className="font-medium mb-2 text-futeur-blue">Consensus Mechanism</h4>
              <p className="text-gray-300">
                Our implementation uses Practical Byzantine Fault Tolerance (PBFT) consensus
                to validate and order transactions, ensuring agreement across the network even
                if some nodes are compromised.
              </p>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default HyperledgerContent;
