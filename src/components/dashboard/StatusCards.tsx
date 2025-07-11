
import React from "react";
import { Activity, Lock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StatusCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <Card className="glass-panel card-hover">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 bg-futeur-purple/20 rounded-full flex items-center justify-center mb-4">
            <Activity className="h-6 w-6 text-futeur-purple" />
          </div>
          <h3 className="text-xl font-bold mb-2">System Health</h3>
          <p className="text-gray-300">Your security systems are operating at optimal levels</p>
        </CardContent>
      </Card>
      
      <Card className="glass-panel card-hover">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 bg-futeur-blue/20 rounded-full flex items-center justify-center mb-4">
            <Lock className="h-6 w-6 text-futeur-blue" />
          </div>
          <h3 className="text-xl font-bold mb-2">Security Status</h3>
          <p className="text-gray-300">All security protocols are active and monitoring</p>
        </CardContent>
      </Card>
      
      <Card className="glass-panel card-hover">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="h-12 w-12 bg-futeur-lightPurple/20 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-futeur-lightPurple" />
          </div>
          <h3 className="text-xl font-bold mb-2">Threat Detection</h3>
          <p className="text-gray-300">Active threats detected in your network</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatusCards;
