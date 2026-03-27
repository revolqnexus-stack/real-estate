export type JournalCategory = 'Design' | 'Market Insight' | 'Living';

export interface JournalPost {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  category: JournalCategory;
  readTime: string;
  heroImage: string;
  excerpt: string;
  content: string;
}
