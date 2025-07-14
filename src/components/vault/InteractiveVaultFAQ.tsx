
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
      console.log('Loading FAQs from database...');
      const { data, error, count } = await supabase
        .from('vault_faqs')
        .select('*', { count: 'exact' })
        .order('popularity_score', { ascending: false })
        .limit(2000); // Increased limit to show more FAQs

      if (error) {
        console.error('Error loading FAQs:', error);
        throw error;
      }
      
      console.log(`Loaded ${data?.length || 0} FAQs from database (total count: ${count})`);
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
    console.log('Starting FAQ generation...');
    try {
      const { data, error } = await supabase.functions.invoke('scrape-reddit-faqs');
      if (error) {
        console.error('Scraping error:', error);
        throw error;
      }
      console.log('Generation completed:', data);
      setScrapingStatus('complete');
      // Reload FAQs after scraping
      setTimeout(() => {
        loadFAQs();
      }, 2000);
    } catch (error) {
      console.error('Error generating FAQs:', error);
      setScrapingStatus('idle');
    }
  };

  // Filter and sort FAQs
  const filteredFAQs = useMemo(() => {
    const filtered = faqs
      .filter(faq => activeCategory === 'all' || faq.category === activeCategory)
      .filter(faq => 
        searchQuery === '' || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    
    // Show many more FAQs based on view mode
    const limit = viewMode === 'quick' ? 200 : viewMode === 'cards' ? 300 : 500;
    console.log(`Filtered ${filtered.length} FAQs, showing ${Math.min(filtered.length, limit)}`);
    return filtered.slice(0, limit);
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
              AI-Powered Community FAQ Database
            </span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            {faqs.length.toLocaleString()}+ Password Questions
            <span className="block text-2xl font-normal mt-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Permanently Saved & Searchable
            </span>
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Comprehensive database of password management questions from cybersecurity communities. 
            <span className="block mt-2 text-sm opacity-75">
              {faqs.length >= 1000 ? 'Database fully populated - no need to regenerate!' : 'Database ready for expansion'}
            </span>
          </p>

          {/* Generation Button - only show if we need more data */}
          {faqs.length < 1000 && (
            <div className="mb-8">
              <Button 
                onClick={triggerScraping}
                disabled={scrapingStatus === 'scraping'}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-medium"
              >
                {scrapingStatus === 'scraping' ? (
                  <>
                    <Clock className="w-4 h-4 mr-2 animate-spin" />
                    Generating More FAQs...
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Generate More Questions (Target: 5,000)
                  </>
                )}
              </Button>
            </div>
          )}

          {faqs.length >= 1000 && (
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200/50 dark:border-green-800/50">
                <Sparkles className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                  Database fully loaded with {faqs.length.toLocaleString()} questions!
                </span>
              </div>
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
              placeholder={`Search ${faqs.length.toLocaleString()}+ questions... (try 'bitwarden vs 1password', 'enterprise setup', 'family sharing')`}
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

        {/* Category Filters using Tabs */}
        <div className="mb-8">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-6">
              {categories.map((category) => {
                const Icon = category.icon;
                const count = faqs.filter(faq => category.id === 'all' || faq.category === category.id).length;
                
                return (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.name}</span>
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {count.toLocaleString()}
                    </Badge>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            
            {/* Tab Content for each category */}
            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-12">
                    <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      No FAQs found matching your search criteria.
                      {faqs.length < 1000 && (
                        <span className="block mt-2">
                          <Button onClick={triggerScraping} variant="outline" className="mt-4">
                            Generate More Questions
                          </Button>
                        </span>
                      )}
                    </p>
                  </div>
                ) : (
                  <>
                    {/* FAQ Content within each tab */}
                    {viewMode === 'quick' && (
                      <div className="grid gap-3">
                        {filteredFAQs.map((faq) => (
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
                                  View Source
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
                  </>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Stats Footer */}
        <div className="mt-12 text-center">
          <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Showing {filteredFAQs.length.toLocaleString()} of {faqs.length.toLocaleString()} questions • 
            Database last updated: {faqs[0]?.created_at ? new Date(faqs[0].created_at).toLocaleDateString() : 'Never'}
            <div className="mt-2 text-xs opacity-75">
              {faqs.length >= 1000 ? '✅ Database fully populated and saved permanently' : `Progress: ${faqs.length}/5000 target questions`}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveVaultFAQ;
