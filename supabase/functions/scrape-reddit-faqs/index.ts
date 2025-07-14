import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface RedditPost {
  title: string;
  selftext: string;
  ups: number;
  url: string;
  subreddit: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Reddit subreddits related to password management and security
    const subreddits = [
      'cybersecurity',
      'AskNetsec',
      'passwords',
      'privacy',
      'security',
      'sysadmin',
      'ITdept',
      'business',
      'entrepreneur',
      'smallbusiness'
    ];

    // Search terms related to vault/password management
    const searchTerms = [
      'password manager',
      'password sharing',
      'enterprise security',
      'password vault',
      'credential management',
      'team passwords',
      'secure sharing',
      'password policy',
      'two factor authentication',
      'password storage'
    ];

    let allFaqs: any[] = [];

    for (const subreddit of subreddits) {
      for (const term of searchTerms) {
        try {
          // Use Reddit's JSON API to search posts
          const searchUrl = `https://www.reddit.com/r/${subreddit}/search.json?q=${encodeURIComponent(term)}&restrict_sr=1&sort=top&limit=100`;
          
          const response = await fetch(searchUrl, {
            headers: {
              'User-Agent': 'FuteurVault-FAQ-Bot/1.0'
            }
          });

          if (!response.ok) continue;

          const data = await response.json();
          
          for (const post of data.data?.children || []) {
            const postData: RedditPost = post.data;
            
            // Skip if no text content or too short
            if (!postData.selftext || postData.selftext.length < 50) continue;
            
            // Extract Q&A from post
            const question = postData.title;
            const answer = postData.selftext.slice(0, 1000); // Limit answer length
            
            // Categorize based on content
            let category = 'General';
            if (question.toLowerCase().includes('enterprise') || question.toLowerCase().includes('business')) {
              category = 'Enterprise';
            } else if (question.toLowerCase().includes('share') || question.toLowerCase().includes('team')) {
              category = 'Sharing';
            } else if (question.toLowerCase().includes('security') || question.toLowerCase().includes('safe')) {
              category = 'Security';
            } else if (question.toLowerCase().includes('personal') || question.toLowerCase().includes('individual')) {
              category = 'Personal';
            }

            // Extract tags from content
            const tags = [];
            if (answer.toLowerCase().includes('bitwarden')) tags.push('bitwarden');
            if (answer.toLowerCase().includes('lastpass')) tags.push('lastpass');
            if (answer.toLowerCase().includes('1password')) tags.push('1password');
            if (answer.toLowerCase().includes('enterprise')) tags.push('enterprise');
            if (answer.toLowerCase().includes('2fa') || answer.toLowerCase().includes('two factor')) tags.push('2fa');
            if (answer.toLowerCase().includes('sharing')) tags.push('sharing');

            allFaqs.push({
              question,
              answer,
              category,
              reddit_source: postData.url,
              upvotes: postData.ups,
              popularity_score: Math.min(postData.ups * 10, 1000), // Cap at 1000
              tags,
              is_verified: postData.ups > 50 // Auto-verify highly upvoted posts
            });
          }

          // Add delay to respect rate limits
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          console.error(`Error scraping ${subreddit} for ${term}:`, error);
        }
      }
    }

    // Sort by popularity and take top results
    allFaqs.sort((a, b) => b.popularity_score - a.popularity_score);
    const topFaqs = allFaqs.slice(0, 200); // Limit to top 200 for now

    // Insert into database in batches
    const batchSize = 50;
    let inserted = 0;

    for (let i = 0; i < topFaqs.length; i += batchSize) {
      const batch = topFaqs.slice(i, i + batchSize);
      
      const { error } = await supabaseClient
        .from('vault_faqs')
        .upsert(batch, { 
          onConflict: 'question',
          ignoreDuplicates: true 
        });

      if (!error) {
        inserted += batch.length;
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Successfully processed ${allFaqs.length} FAQs, inserted ${inserted} new ones`,
        stats: {
          total_processed: allFaqs.length,
          inserted: inserted,
          subreddits_scraped: subreddits.length,
          search_terms: searchTerms.length
        }
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in scrape-reddit-faqs:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});