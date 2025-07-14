
import React from 'react';
import { Search, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  searchSuggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
  showSuggestions: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  searchSuggestions,
  onSuggestionClick,
  showSuggestions
}) => {
  return (
    <section className="relative bg-[#f9fafa] py-20 px-6 overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#3367d6] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#3367d6] rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        {/* Lock icon with gentle animation */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-8 group">
          <Lock className="w-8 h-8 text-[#3367d6] group-hover:scale-110 transition-transform duration-300" />
        </div>

        <h1 className="text-5xl md:text-6xl font-light text-[#121212] mb-6 leading-tight">
          How can we help you?
        </h1>
        
        <p className="text-xl text-[#121212]/70 mb-12 max-w-2xl mx-auto font-light">
          Find answers to your FuteurVault questions, from basic setup to advanced security features.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#121212]/50" />
            <Input
              type="text"
              placeholder="Search anything — from FuteurVault setup to security protocols…"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-14 pr-6 py-6 text-lg bg-white border-0 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] focus:shadow-[0_8px_40px_rgba(51,103,214,0.15)] focus:ring-2 focus:ring-[#3367d6]/20 transition-all duration-300"
            />
          </div>

          {/* Search Suggestions */}
          {showSuggestions && searchSuggestions.length > 0 && (
            <div className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border-0 overflow-hidden z-50">
              {searchSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => onSuggestionClick(suggestion)}
                  className="w-full px-6 py-4 text-left hover:bg-[#f9fafa] transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                >
                  <div className="flex items-center">
                    <Search className="w-4 h-4 text-[#121212]/40 mr-3" />
                    <span className="text-[#121212]">{suggestion}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
