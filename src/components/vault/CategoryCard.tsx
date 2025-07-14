
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  questionCount: number;
  isNew?: boolean;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon: Icon,
  title,
  description,
  questionCount,
  isNew,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-full p-8 bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] transition-all duration-300 text-left border-0 hover:scale-[1.02]"
    >
      {/* New Badge */}
      {isNew && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-[#3367d6] text-white text-xs px-2 py-1">
            NEW
          </Badge>
        </div>
      )}

      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 bg-[#3367d6]/10 rounded-2xl mb-6 group-hover:bg-[#3367d6]/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-[#3367d6]" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-medium text-[#121212] mb-3 group-hover:text-[#3367d6] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-[#121212]/70 mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center text-sm text-[#121212]/50">
        <span>{questionCount} articles</span>
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

export default CategoryCard;
