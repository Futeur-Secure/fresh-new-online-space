
import { LucideIcon } from "lucide-react";

interface IndustryTabsProps {
  solutions: Array<{
    id: string;
    title: string;
    icon: LucideIcon;
    description: string;
    features: string[];
  }>;
  activeSolution: number;
  theme: string;
  onIndustryClick: (index: number) => void;
}

const IndustryTabs = ({ solutions, activeSolution, theme, onIndustryClick }: IndustryTabsProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-wrap justify-center gap-3">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <button
              key={solution.id}
              onClick={() => onIndustryClick(index)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg transition-all transform ${
                activeSolution === index 
                  ? `backdrop-blur-md ${theme === 'light' 
                      ? 'bg-white/80 text-futeur-blue border border-futeur-blue/30 scale-105 shadow-lg' 
                      : 'bg-futeur-blue/20 text-futeur-blue border border-futeur-blue/30 shadow-[0_0_15px_rgba(14,165,233,0.3)] scale-105'}`
                  : `hover:bg-${theme === 'light' ? 'white/60' : 'futeur-blue/10'} backdrop-blur-sm ${theme === 'light' ? 'text-gray-700 bg-white/40' : 'text-gray-300 bg-white/5'} hover:text-${theme === 'light' ? 'gray-900' : 'futeur-blue'} border ${theme === 'light' ? 'border-gray-300/50' : 'border-futeur-blue/20'}`
              }`}
            >
              <Icon className={`w-5 h-5 ${
                activeSolution === index ? 'text-futeur-blue' : `${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`
              }`} />
              <span className="text-sm font-medium">{solution.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default IndustryTabs;
