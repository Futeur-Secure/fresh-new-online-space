
import { useState, useEffect, useMemo } from 'react';
import { Search, ChevronDown, Users, Shield, Building2, User, TrendingUp, Zap, Clock, Filter, ThumbsUp, Eye, Sparkles, ChevronUp } from 'lucide-react';
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
  const [viewMode, setViewMode] = useState<'accordion' | 'cards' | 'compact'>('accordion');
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
    { id: 'accordion', name: 'FAQ Style', icon: Eye, desc: 'Classic FAQ layout' },
    { id: 'cards', name: 'Card View', icon: Filter, desc: 'Detailed cards' },
    { id: 'compact', name: 'Compact', icon: Zap, desc: 'Quick overview' }
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
        .limit(2000);

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

  // Trigger FAQ generation
  const triggerScraping = async () => {
    setScrapingStatus('scraping');
    console.log('Starting FAQ generation...');
    try {
      const { data, error } = await supabase.functions.invoke('scrape-reddit-faqs');
      if (error) {
        console.error('Generation error:', error);
        throw error;
      }
      console.log('Generation completed:', data);
      setScrapingStatus('complete');
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
    
    const limit = viewMode === 'accordion' ? 300 : viewMode === 'cards' ? 200 : 500;
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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-800/50 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500 mr-2 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              FuteurVault Knowledge Base
            </span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Frequently Asked Questions
            <span className="block text-2xl font-normal mt-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Everything you need to know about FuteurVault
            </span>
          </h2>
          
          <p className={`text-lg max-w-3xl mx-auto mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Comprehensive answers to common questions about FuteurVault password management solutions.
            <span className="block mt-2 text-sm opacity-75">
              {faqs.length.toLocaleString()} questions available
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
                    Loading More Questions...
                  </>
                ) : (
                  <>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Load More Questions
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

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
            <Input
              type="text"
              placeholder="Search FuteurVault questions... (try 'security', 'setup', 'enterprise')"
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
                      No questions found matching your search criteria.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Accordion FAQ Style */}
                    {viewMode === 'accordion' && (
                      <div className="space-y-4">
                        {filteredFAQs.map((faq) => {
                          const isOpen = openItems.includes(faq.id);
                          return (
                            <div
                              key={faq.id}
                              className={`border rounded-xl transition-all duration-200 ${
                                isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'
                              } ${isOpen ? 'shadow-lg' : 'hover:shadow-md'}`}
                            >
                              <button
                                onClick={() => toggleItem(faq.id)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl"
                              >
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="outline" className="text-xs">{faq.category}</Badge>
                                    {faq.is_verified && (
                                      <Badge className="bg-green-500 text-white text-xs">Verified</Badge>
                                    )}
                                    <div className="flex items-center text-xs text-slate-500">
                                      <ThumbsUp className="w-3 h-3 mr-1" />
                                      {faq.upvotes}
                                    </div>
                                  </div>
                                  <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    {faq.question}
                                  </h3>
                                </div>
                                {isOpen ? (
                                  <ChevronUp className="w-5 h-5 text-blue-500" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-slate-400" />
                                )}
                              </button>
                              {isOpen && (
                                <div className="px-6 pb-6">
                                  <div className={`prose max-w-none ${isDark ? 'prose-invert' : ''}`}>
                                    <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                      {faq.answer}
                                    </p>
                                  </div>
                                  <div className="flex flex-wrap gap-2 mt-4">
                                    {faq.tags.map(tag => (
                                      <span key={tag} className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                                        {tag}
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

                    {/* Card View */}
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
                              <div className="flex flex-wrap gap-1">
                                {faq.tags.map(tag => (
                                  <span key={tag} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    )}

                    {/* Compact View */}
                    {viewMode === 'compact' && (
                      <div className="space-y-2">
                        {filteredFAQs.map((faq) => (
                          <div
                            key={faq.id}
                            className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${
                              isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'
                            }`}
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">{faq.category}</Badge>
                              <span className="text-xs text-slate-500">{faq.upvotes} helpful</span>
                            </div>
                            <h3 className={`font-medium mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                              {faq.question}
                            </h3>
                            <p className={`text-sm line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {faq.answer}
                            </p>
                          </div>
                        ))}
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
            Showing {filteredFAQs.length.toLocaleString()} of {faqs.length.toLocaleString()} questions
            <div className="mt-2 text-xs opacity-75">
              Knowledge base last updated: {faqs[0]?.created_at ? new Date(faqs[0].created_at).toLocaleDateString() : 'Never'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveVaultFAQ;
