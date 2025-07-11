
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import SolutionFeatureItem from "./SolutionFeatureItem";

interface SolutionCardProps {
  solution: {
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    features: string[];
  };
  isActive: boolean;
  theme: string;
}

const SolutionCard = ({ solution, isActive, theme }: SolutionCardProps) => {
  const Icon = solution.icon;
  
  return (
    <div 
      className={`absolute inset-0 w-full h-full p-8 transition-all duration-500 ease-out ${
        isActive 
          ? 'opacity-100 transform-none' 
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex gap-6 h-full">
        <div className={`${
          theme === 'light' 
            ? 'bg-futeur-blue/10 border-futeur-blue/20 backdrop-blur-sm' 
            : 'bg-gradient-to-br from-futeur-blue/20 to-futeur-purple/20 border-futeur-blue/20 backdrop-blur-sm'
        } p-4 rounded-xl self-start border shrink-0`}>
          <Icon className="w-8 h-8 text-futeur-blue" />
        </div>
        <div className="flex-1">
          <h3 className={`text-2xl font-display font-bold ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          } mb-3`}>
            {solution.title}
          </h3>
          <p className={`${
            theme === 'light' ? 'text-gray-700' : 'text-gray-200'
          } mb-8 text-lg leading-relaxed`}>
            {solution.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {solution.features.map((feature, i) => (
              <SolutionFeatureItem key={i} feature={feature} theme={theme} />
            ))}
          </div>
          
          <Link to="/contact">
            <Button className={`${
              theme === 'light'
                ? 'bg-futeur-blue hover:bg-futeur-blue/90'
                : 'bg-gradient-to-r from-futeur-blue to-futeur-purple hover:opacity-90'
            } text-white rounded-lg px-6 py-2.5`}>
              Learn More
              <ChevronRight className="ml-1 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
