
import { FC } from 'react';

interface FeatureItemProps {
  feature: string;
  theme: string;
}

const SolutionFeatureItem: FC<FeatureItemProps> = ({ feature, theme }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-futeur-blue"></div>
      <span className={theme === 'light' ? 'text-gray-700 font-medium' : 'text-gray-200'}>
        {feature}
      </span>
    </div>
  );
};

export default SolutionFeatureItem;
