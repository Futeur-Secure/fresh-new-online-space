
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useTheme } from '@/context/ThemeContext';
import KnowledgeCenterLayout from './KnowledgeCenterLayout';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  upvotes: number;
  popularity_score: number;
  tags: string[];
  is_verified: boolean;
  created_at: string;
}

const InteractiveVaultFAQ = () => {
  const { theme } = useTheme();
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFAQs();
  }, []);

  const loadFAQs = async () => {
    try {
      console.log('Loading FAQs from database...');
      const { data, error } = await supabase
        .from('vault_faqs')
        .select('*')
        .order('popularity_score', { ascending: false })
        .limit(1000);

      if (error) {
        console.error('Error loading FAQs:', error);
        throw error;
      }
      
      console.log(`Loaded ${data?.length || 0} FAQs from database`);
      
      // Transform data to include additional UI properties
      const transformedFAQs = (data || []).map((faq, index) => ({
        ...faq,
        isNew: index < 5, // Mark first 5 as new
        isUpdated: index >= 5 && index < 10, // Mark next 5 as updated
        lastUpdated: index < 10 ? getRelativeTime(faq.created_at) : undefined
      }));
      
      setFaqs(transformedFAQs);
    } catch (error) {
      console.error('Error loading FAQs:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRelativeTime = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else if (diffInHours < 168) {
      return `${Math.floor(diffInHours / 24)} days ago`;
    } else {
      return `${Math.floor(diffInHours / 168)} weeks ago`;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f9fafa] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-4">
            <div className="w-6 h-6 border-2 border-[#3367d6] border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-[#121212]/70">Loading knowledge center...</p>
        </div>
      </div>
    );
  }

  return <KnowledgeCenterLayout faqs={faqs} />;
};

export default InteractiveVaultFAQ;
