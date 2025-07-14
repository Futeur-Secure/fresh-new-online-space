
import React, { useState, useMemo } from 'react';
import { 
  Settings, 
  Shield, 
  Users, 
  CreditCard, 
  Link, 
  Cog,
  Search
} from 'lucide-react';
import HeroSection from './HeroSection';
import CategoryCard from './CategoryCard';
import FAQAccordion from './FAQAccordion';
import SupportPrompt from './SupportPrompt';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  isNew?: boolean;
  isUpdated?: boolean;
  lastUpdated?: string;
}

interface KnowledgeCenterLayoutProps {
  faqs: FAQ[];
}

const KnowledgeCenterLayout: React.FC<KnowledgeCenterLayoutProps> = ({ faqs }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const categories = [
    {
      id: 'Getting Started',
      icon: Settings,
      title: 'Getting Started',
      description: 'Set up your FuteurVault account and learn the basics of password management.',
      isNew: false
    },
    {
      id: 'Security',
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Understand how FuteurVault protects your data with zero-knowledge encryption.',
      isNew: false
    },
    {
      id: 'Sharing',
      icon: Users,
      title: 'Team Access',
      description: 'Invite teammates, set permissions, and manage shared vaults securely.',
      isNew: true
    },
    {
      id: 'Enterprise',
      icon: CreditCard,
      title: 'Billing & Subscriptions',
      description: 'Manage your subscription, view invoices, and understand pricing tiers.',
      isNew: false
    },
    {
      id: 'General',
      icon: Link,
      title: 'Integrations',
      description: 'Connect FuteurVault with your favorite apps and browser extensions.',
      isNew: false
    },
    {
      id: 'Personal',
      icon: Cog,
      title: 'Advanced Features',
      description: 'Master advanced security features like health reports and autofill settings.',
      isNew: false
    }
  ];

  // Generate search suggestions based on FAQ tags and questions
  const searchSuggestions = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];
    
    const suggestions = new Set<string>();
    
    faqs.forEach(faq => {
      // Add matching tags
      faq.tags.forEach(tag => {
        if (tag.toLowerCase().includes(searchQuery.toLowerCase())) {
          suggestions.add(tag);
        }
      });
      
      // Add partial question matches
      if (faq.question.toLowerCase().includes(searchQuery.toLowerCase())) {
        suggestions.add(faq.question);
      }
    });

    return Array.from(suggestions).slice(0, 5);
  }, [searchQuery, faqs]);

  // Filter FAQs based on search query
  const filteredFAQs = useMemo(() => {
    if (!searchQuery) return faqs;
    
    return faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, faqs]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery('');
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSearchQuery('');
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setShowSuggestions(value.length >= 2);
    if (selectedCategory) {
      setSelectedCategory(null);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const categoryFAQs = selectedCategory 
    ? faqs.filter(faq => faq.category === selectedCategory)
    : [];

  const getCategoryQuestionCount = (categoryId: string) => {
    return faqs.filter(faq => faq.category === categoryId).length;
  };

  return (
    <div className="min-h-screen bg-[#f9fafa]">
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        searchSuggestions={searchSuggestions}
        onSuggestionClick={handleSuggestionClick}
        showSuggestions={showSuggestions}
      />

      <main className="py-16 px-6">
        {/* Show search results */}
        {searchQuery && !selectedCategory && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-light text-[#121212] mb-2">
                Search Results
              </h2>
              <p className="text-[#121212]/70">
                Found {filteredFAQs.length} results for "{searchQuery}"
              </p>
            </div>
            <FAQAccordion faqs={filteredFAQs} categoryTitle="Search Results" />
          </div>
        )}

        {/* Show category FAQs */}
        {selectedCategory && (
          <div className="max-w-6xl mx-auto mb-16">
            <button
              onClick={handleBackToCategories}
              className="flex items-center text-[#3367d6] hover:text-[#3367d6]/80 mb-8 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Categories
            </button>
            <FAQAccordion 
              faqs={categoryFAQs} 
              categoryTitle={categories.find(cat => cat.id === selectedCategory)?.title || ''} 
            />
          </div>
        )}

        {/* Show categories */}
        {!selectedCategory && !searchQuery && (
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-[#121212] mb-4">
                Browse by Category
              </h2>
              <p className="text-[#121212]/70 text-lg">
                Choose a category to find the help you need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                  questionCount={getCategoryQuestionCount(category.id)}
                  isNew={category.isNew}
                  onClick={() => handleCategoryClick(category.id)}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <SupportPrompt />
    </div>
  );
};

export default KnowledgeCenterLayout;
