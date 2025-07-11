
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Shield } from "lucide-react";

interface PlatformCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
  icon: React.ReactNode;
  gradientClasses: string;
  borderClass: string;
}

const PlatformCard = ({
  title,
  description,
  buttonText,
  buttonAction,
  icon,
  gradientClasses,
  borderClass
}: PlatformCardProps) => {
  return (
    <div className="mb-16">
      <Card className={`glass-panel ${borderClass}`}>
        <CardContent className="p-8 flex flex-col items-center">
          <div className="h-16 w-16 bg-futeur-blue/20 rounded-full flex items-center justify-center mb-4">
            {icon}
          </div>
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
          <p className="text-gray-300 mb-8 text-center max-w-xl">{description}</p>
          <Button onClick={buttonAction} className={`${gradientClasses} text-white py-6 px-8 text-lg flex items-center gap-3 hover:opacity-90 transition-opacity group animate-heartbeat`}>
            {buttonText}
            <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlatformCard;
