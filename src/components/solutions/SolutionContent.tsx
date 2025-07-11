
import { solutions } from "./solutionsData";
import SolutionCard from "./SolutionCard";

interface SolutionContentProps {
  activeSolution: number;
  theme: string;
}

const SolutionContent = ({ activeSolution, theme }: SolutionContentProps) => {
  return (
    <div className="max-w-4xl mx-auto relative">
      <div className="relative w-full h-[400px] md:h-[350px]">
        {[...Array(3)].map((_, i) => (
          <div
            key={`stack-${i}`}
            className={`absolute inset-x-0 mx-auto rounded-2xl transition-all duration-500 backdrop-blur-md ${
              theme === 'light' 
                ? 'bg-white/40 border border-white/50 shadow-sm' 
                : 'bg-futeur-blue/5 border border-futeur-blue/10'
            }`}
            style={{
              height: '100%',
              width: '100%',
              transform: `rotate(${i % 2 === 0 ? -1 : 1}deg) translateY(${i * 8}px)`,
              zIndex: 10 - i,
              opacity: 1 - (i * 0.15)
            }}
          />
        ))}
        
        <div 
          className={`absolute inset-0 w-full h-full overflow-auto transition-all duration-500 rounded-2xl backdrop-blur-xl ${
            theme === 'light' 
              ? 'bg-white/60 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]' 
              : 'bg-[#1E293B]/60 border border-futeur-blue/20 shadow-[0_8px_32px_rgba(14,165,233,0.1)]'
          }`}
          style={{ zIndex: 20 }}
        >
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={solution.id}
              solution={solution}
              isActive={activeSolution === index}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionContent;
