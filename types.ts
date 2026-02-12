
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  rating: number;
  pros: string[];
  cons: string[];
  affiliateUrl: string;
  tag?: string;
  specs?: Record<string, string>;
}

export interface Deal {
  id: string;
  title: string;
  category: string;
  image: string;
  originalPrice: string;
  dealPrice: string;
  discount: string;
  store: string;
  link: string;
  isHot?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BuyingGuide {
  title: string;
  description: string;
  points: string[];
}

export interface ComparisonRow {
  feature: string;
  brandA: string;
  brandB: string;
}

export interface TechnicalComparison {
  brandA: string;
  brandB: string;
  rows: ComparisonRow[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  featuredImage: string;
  readTime: string;
  products?: Product[];
  technicalComparison?: TechnicalComparison;
  faqs?: FAQ[];
  buyingGuide?: BuyingGuide;
  trending?: boolean;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
