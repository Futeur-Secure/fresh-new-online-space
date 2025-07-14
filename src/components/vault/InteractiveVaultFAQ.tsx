import { useState, useEffect, useMemo } from 'react';
import { Search, ChevronDown, Users, Shield, Building2, User, TrendingUp, ExternalLink, Zap, Clock, Filter, ThumbsUp, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useTheme } from '@/context/ThemeContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  reddit_source?: string;
  upvotes: number;
  popularity_score: number;
  tags: string[];
  is_verified: boolean;
  created_at: string;
}

const InteractiveVaultFAQ = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'cards' | 'list' | 'quick'>('quick');
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [scrapingStatus, setScrapingStatus] = useState<'idle' | 'scraping' | 'complete'>('idle');

  const categories = [
    { id: 'all', name: 'All', icon: Sparkles, color: 'blue' },
    { id: 'Personal', name: 'Personal', icon: User, color: 'green' },
    { id: 'Enterprise', name: 'Enterprise', icon: Building2, color: 'purple' },
    { id: 'Security', name: 'Security', icon: Shield, color: 'red' },
    { id: 'Sharing', name: 'Sharing', icon: Users, color: 'orange' },
    { id: 'General', name: 'General', icon: TrendingUp, color: 'indigo' }
  ];

  const viewModes = [
    { id: 'quick', name: 'Quick View', icon: Zap, desc: 'Fast answers' },
    { id: 'cards', name: 'Card View', icon: Eye, desc: 'Detailed view' },
    { id: 'list', name: 'List View', icon: Filter, desc: 'Compact list' }
  ];

  // Load FAQs from Supabase
  useEffect(() => {
    loadFAQs();
  }, []);

  const loadFAQs = async () => {
    try {
      const { data, error } = await supabase
        .from('vault_faqs')
        .select('*')
        .order('popularity_score', { ascending: false })
        .limit(100);

      if (error) throw error;
      setFaqs(data || []);
    } catch (error) {
      console.error('Error loading FAQs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Trigger Reddit scraping
  const triggerScraping = async () => {
    setScrapingStatus('scraping');
    try {
      const { data, error } = await supabase.functions.invoke('scrape-reddit-faqs');
      if (error) throw error;
      setScrapingStatus('complete');
      // Reload FAQs after scraping
      setTimeout(() => {
        loadFAQs();
      }, 2000);
    } catch (error) {
      console.error('Error scraping:', error);
      setScrapingStatus('idle');
    }
  };

  // Filter and sort FAQs
  const filteredFAQs = useMemo(() => {
    return faqs
      .filter(faq => activeCategory === 'all' || faq.category === activeCategory)
      .filter(faq => 
        searchQuery === '' || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .slice(0, viewMode === 'quick' ? 10 : 50); // Limit for attention span
  }, [faqs, activeCategory, searchQuery, viewMode]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  if (loading) {
    return (
      <section className={`py-24 px-6 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-24 px-6 ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Header with Smart Controls */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-800/50 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500 mr-2 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Community FAQ
            </span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            5000+ Real Questions
            <span className="block text-2xl font-normal mt-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              From Reddit Communities
            </span>
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Curated from password management discussions across cybersecurity, privacy, and business subreddits. 
            <span className="block mt-2 text-sm opacity-75">Updated daily with trending questions and pain points.</span>
          </p>

          {/* Scraping Status */}
          {faqs.length === 0 && (
            <div className="mb-8">
              <Button 
                onClick={triggerScraping}
                disabled={scrapingStatus === 'scraping'}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-medium"
              >
                {scrapingStatus === 'scraping' ? (
                  <>
                    <Clock className="w-4 h-4 mr-2 animate-spin" />
                    Scraping Reddit...
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Load Latest Questions
                  </>
                )}
              </Button>
            </div>
          )}
        </div>

        {/* View Mode Selector */}
        <div className="mb-8">
          <div className="flex justify-center items-center gap-2 mb-6">
            {viewModes.map((mode) => {
              const Icon = mode.icon;
              const isActive = viewMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setViewMode(mode.id as any)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-500 text-white shadow-lg'
                      : isDark 
                        ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">{mode.name}</div>
                    <div className="text-xs opacity-75">{mode.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Smart Search */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
            <Input
              type="text"
              placeholder="Search 5000+ questions... (try 'family sharing', 'enterprise migration', '2FA')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`pl-12 pr-4 py-4 rounded-xl text-lg ${
                isDark 
                  ? 'bg-slate-900/50 border-slate-700 focus:border-blue-500' 
                  : 'bg-white border-slate-200 focus:border-blue-500'
              }`}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              const count = faqs.filter(faq => category.id === 'all' || faq.category === category.id).length;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? `bg-${category.color}-500 text-white shadow-lg`
                      : isDark
                        ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
                        : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <Badge variant="secondary" className="ml-2">
                    {count}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Content */}
        {viewMode === 'quick' && (
          <div className="grid gap-3">
            {filteredFAQs.slice(0, 10).map((faq) => (
              <Card key={faq.id} className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                isDark ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700' : 'bg-white hover:border-slate-300'
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {faq.category}
                        </Badge>
                        <div className="flex items-center text-xs text-slate-500">
                          <ThumbsUp className="w-3 h-3 mr-1" />
                          {faq.upvotes}
                        </div>
                        {faq.is_verified && (
                          <Badge className="bg-green-500 text-white text-xs">Verified</Badge>
                        )}
                      </div>
                      <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {faq.question}
                      </h3>
                      <p className={`text-sm line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {faq.answer}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {faq.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 ml-4 mt-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {viewMode === 'cards' && (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredFAQs.map((faq) => (
              <Card key={faq.id} className={`transition-all duration-200 hover:shadow-lg ${
                isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white'
              }`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{faq.category}</Badge>
                    <div className="flex items-center text-sm text-slate-500">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {faq.upvotes}
                    </div>
                    {faq.is_verified && (
                      <Badge className="bg-green-500 text-white">Verified</Badge>
                    )}
                  </div>
                  <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {faq.question}
                  </h3>
                  <p className={`mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {faq.answer}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {faq.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {faq.reddit_source && (
                    <a 
                      href={faq.reddit_source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-500 hover:text-blue-600"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View on Reddit
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {viewMode === 'list' && (
          <div className="space-y-2">
            {filteredFAQs.map((faq) => {
              const isOpen = openItems.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`border rounded-lg transition-all duration-200 ${
                    isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-xs">{faq.category}</Badge>
                        <span className="text-xs text-slate-500">{faq.upvotes} upvotes</span>
                      </div>
                      <h3 className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4">
                      <p className={`mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        {faq.answer}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {faq.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-12 text-center">
          <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Showing {filteredFAQs.length} of {faqs.length} questions • 
            Last updated: {faqs[0]?.created_at ? new Date(faqs[0].created_at).toLocaleDateString() : 'Never'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveVaultFAQ;