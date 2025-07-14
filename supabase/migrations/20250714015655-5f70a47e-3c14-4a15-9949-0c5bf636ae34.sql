-- Create FAQ table to store scraped Reddit data
CREATE TABLE public.vault_faqs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT NOT NULL,
  reddit_source TEXT,
  upvotes INTEGER DEFAULT 0,
  popularity_score INTEGER DEFAULT 0,
  tags TEXT[],
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.vault_faqs ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (FAQ is public content)
CREATE POLICY "FAQs are viewable by everyone" 
ON public.vault_faqs 
FOR SELECT 
USING (true);

-- Create policy for authenticated users to insert/update
CREATE POLICY "Authenticated users can manage FAQs" 
ON public.vault_faqs 
FOR ALL
USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX idx_vault_faqs_category ON public.vault_faqs(category);
CREATE INDEX idx_vault_faqs_popularity ON public.vault_faqs(popularity_score DESC);
CREATE INDEX idx_vault_faqs_tags ON public.vault_faqs USING GIN(tags);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_vault_faqs_updated_at
BEFORE UPDATE ON public.vault_faqs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();