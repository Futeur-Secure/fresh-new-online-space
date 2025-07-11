
import React from "react";
import { Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const OssecContent = () => {
  return (
    <Card className="glass-panel">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-futeur-purple" />
          OSSEC Endpoint Security
        </CardTitle>
        <CardDescription>
          Comprehensive host-based intrusion detection system
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <p className="text-gray-300 mb-4">
            OSSEC is a powerful open-source host-based intrusion detection system (HIDS) that 
            performs log analysis, integrity checking, rootkit detection, time-based alerting, 
            and active response. Our implementation enhances endpoint security across your 
            organization's network.
          </p>
          
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 mb-4">
            <h4 className="font-medium mb-2 text-futeur-purple">Key Capabilities:</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Real-time log analysis and alerting</li>
              <li>File integrity monitoring to detect unauthorized changes</li>
              <li>Rootkit detection to identify hidden malware</li>
              <li>Active response to automatically block detected threats</li>
              <li>Centralized management for all monitored endpoints</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">Deployment Architecture</h3>
          <p className="text-gray-300 mb-4">
            Our OSSEC implementation follows a server-agent model:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h4 className="font-medium mb-2 text-futeur-purple">OSSEC Server</h4>
              <p className="text-gray-300">
                The central server receives and analyzes data from all agents, stores the
                security events, and generates alerts when suspicious activity is detected.
                The server also maintains the integrity checking database and manages policy.
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h4 className="font-medium mb-2 text-futeur-purple">OSSEC Agents</h4>
              <p className="text-gray-300">
                Lightweight agents are installed on each endpoint to monitor and collect
                security data. They perform local file integrity monitoring, log analysis,
                and execute active responses when instructed by the server.
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
              <h4 className="font-medium mb-2 text-futeur-purple">Alert Management</h4>
              <p className="text-gray-300">
                Security alerts are classified by severity levels and can be delivered through
                multiple channels including email, syslog, and our dashboard. Integration with
                our blockchain logging ensures alerts are immutably recorded.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">Common Use Cases</h3>
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
            <h4 className="font-medium mb-2 text-futeur-purple">Use Cases:</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Detecting unauthorized file system modifications</li>
              <li>Monitoring privileged user activities</li>
              <li>Identifying brute force login attempts</li>
              <li>Detecting malware or rootkit installations</li>
              <li>Compliance monitoring and reporting</li>
            </ul>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};

export default OssecContent;
