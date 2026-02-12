
import React from 'react';
import { Smartphone, Laptop, Cpu, Zap, Gamepad2, Coffee, Activity } from 'lucide-react';
import { Category, BlogPost, Deal } from './src/types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Technology', slug: 'technology', description: 'Latest in tech and hardware.', icon: 'Laptop' },
  { id: '2', name: 'AI Tools', slug: 'ai-tools', description: 'Unlock productivity with AI.', icon: 'Cpu' },
  { id: '3', name: 'Gadgets', slug: 'gadgets', description: 'Cool tech you need.', icon: 'Smartphone' },
  { id: '4', name: 'Productivity', slug: 'productivity', description: 'Work smarter, not harder.', icon: 'Zap' },
  { id: '5', name: 'Gaming', slug: 'gaming', description: 'Level up your setup.', icon: 'Gamepad2' },
  { id: '6', name: 'Lifestyle', slug: 'lifestyle', description: 'Modern living tips.', icon: 'Coffee' },
];

export const MOCK_DEALS: Deal[] = [
  {
    id: '1',
    title: 'Apple iPhone 15 (128 GB) - Blue',
    category: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=400',
    originalPrice: '₹79,900',
    dealPrice: '₹69,999',
    discount: '12% OFF',
    store: 'Amazon',
    link: '#',
    isHot: true
  },
  {
    id: '2',
    title: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1675243314050-6eb6f6583921?auto=format&fit=crop&q=80&w=400',
    originalPrice: '₹34,990',
    dealPrice: '₹26,990',
    discount: '23% OFF',
    store: 'Amazon',
    link: '#',
    isHot: true
  },
  {
    id: '3',
    title: 'MacBook Air M3 Chip (13-inch, 8GB, 256GB)',
    category: 'Laptops',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ec696e5237?auto=format&fit=crop&q=80&w=400',
    originalPrice: '₹1,14,900',
    dealPrice: '₹1,04,900',
    discount: '₹10,000 OFF',
    store: 'Amazon',
    link: '#'
  },
  {
    id: '4',
    title: 'Samsung Galaxy Watch 6 (LTE, 44mm)',
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1544117518-30dd5ff7a9bd?auto=format&fit=crop&q=80&w=400',
    originalPrice: '₹36,999',
    dealPrice: '₹24,499',
    discount: '34% OFF',
    store: 'Amazon',
    link: '#'
  },
  {
    id: '5',
    title: 'Logitech MX Master 3S Wireless Mouse',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1625773453170-6581cf14730c?auto=format&fit=crop&q=80&w=400',
    originalPrice: '₹10,995',
    dealPrice: '₹8,995',
    discount: '18% OFF',
    store: 'Amazon',
    link: '#'
  }
];

export const MOCK_POSTS: BlogPost[] = [
  {
    id: 'boat-vs-realme-india-2025',
    title: 'Boat vs Realme Earbuds: Which Brand Wins the Indian Budget TWS Battle? (2025)',
    slug: 'boat-vs-realme-earbuds-india',
    excerpt: 'Struggling to choose between Boat and Realme? We compare sound, battery, and gaming performance to help you find the best earbuds for your budget in India.',
    content: `If you are looking for wireless earbuds (TWS) in India under ₹3,000, you will almost certainly end up choosing between two giants: Boat and Realme. 

    Both brands have dominated the Indian market by offering premium-looking features at prices that don't break the bank. While Boat is an Indian-born brand known for its "Bass-heavy" sound and rugged style, Realme brings a more "Tech-first" approach with better app integration and cleaner audio.

    But which one is right for you? In this guide, we break down the sound quality, battery life, and gaming performance to help you make an easy choice. Whether you are a student attending classes, a gamer looking for low latency, or someone who just wants to enjoy Punjabi hits with extra bass, we've got you covered.`,
    author: 'Friendly Tech Guide',
    date: 'July 05, 2025',
    category: 'gadgets',
    readTime: '18 min',
    featuredImage: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1200',
    featured: true,
    trending: true,
    technicalComparison: {
      brandA: "Boat",
      brandB: "Realme",
      rows: [
        { feature: "Sound Quality", brandA: "Thumping Bass (Signature)", brandB: "Balanced & Clear Audio" },
        { feature: "Battery Life", brandA: "Stellar (Up to 120H)", brandB: "Great (Up to 40H)" },
        { feature: "Design", brandA: "Rugged & Sporty", brandB: "Sleek & Minimalist" },
        { feature: "Gaming Latency", brandA: "Moderate (Beast Mode)", brandB: "Super Low (Game Mode)" },
        { feature: "App Support", brandA: "Basic (Hearables App)", brandB: "Advanced (Realme Link)" },
        { feature: "Best For", brandA: "Bass Lovers & Gym", brandB: "Calls, Gaming & Pop Music" }
      ]
    },
    products: [
      {
        id: 'boat-airdopes-131',
        name: 'boAt Airdopes 131',
        image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&q=80&w=400',
        description: 'The absolute budget king in India. These earbuds are famous for their "Signature Sound" which puts a huge emphasis on bass. They are simple, reliable, and very affordable.',
        price: '₹999',
        rating: 4.5,
        pros: ['Very affordable price', 'Heavy bass output', 'Type-C charging'],
        cons: ['Average mic quality', 'No app support'],
        affiliateUrl: '[Insert Affiliate Link Here]',
        tag: 'Best Budget Pick'
      },
      {
        id: 'realme-buds-t110',
        name: 'realme Buds T110',
        image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&q=80&w=400',
        description: 'Realme’s latest budget offering. It focuses on a balanced sound profile and features AI Environmental Noise Cancellation for much clearer calls compared to competitors.',
        price: '₹1,499',
        rating: 4.8,
        pros: ['Clear call quality (AI ENC)', 'Google Fast Pair support', 'Better app control'],
        cons: ['Lower bass than Boat', 'Slightly higher price'],
        affiliateUrl: '[Insert Affiliate Link Here]',
        tag: 'Best for Calls'
      },
      {
        id: 'boat-nirvana-ion',
        name: 'boAt Nirvana Ion',
        image: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&q=80&w=400',
        description: 'If you hate charging your earbuds, this is for you. It offers a staggering 120 hours of total playback time and dual EQ modes for different types of music.',
        price: '₹2,299',
        rating: 4.7,
        pros: ['Incredible 120H battery', 'Dual EQ modes', 'Premium case build'],
        cons: ['Case is a bit bulky', 'No active noise cancellation'],
        affiliateUrl: '[Insert Affiliate Link Here]',
        tag: 'Battery King'
      },
      {
        id: 'realme-buds-air-6',
        name: 'realme Buds Air 6',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
        description: 'A more premium choice that includes Active Noise Cancellation (ANC). It supports Hi-Res audio (LDAC) which provides much better detail in your music.',
        price: '₹3,299',
        rating: 4.9,
        pros: ['Active Noise Cancellation', 'Hi-Res Audio support', 'Super low latency for gaming'],
        cons: ['Most expensive on this list', 'Average battery with ANC ON'],
        affiliateUrl: '[Insert Affiliate Link Here]',
        tag: 'Best Tech'
      }
    ],
    buyingGuide: {
      title: 'Boat vs Realme: The Core Differences',
      description: 'Still confused? Here is the simple breakdown of how these two brands actually feel in real life:',
      points: [
        'Sound Style: Boat is for "Bass-heads" (Bollywood, Hip-Hop). Realme is for "Clarity-seekers" (Podcasts, Instrumental, Pop).',
        'Build Quality: Realme products often feel more "polished" and tech-focused. Boat products feel more "rugged" and ready for outdoor use.',
        'Gaming: If you play BGMI or Free Fire, Realme generally offers lower latency (less delay between action and sound).',
        'App Integration: Realme has the "Realme Link" app which is very easy to use for updates. Boat is currently catching up with their "Hearables" app.'
      ]
    },
    faqs: [
      {
        question: 'Which brand has better warranty service in India?',
        answer: 'Both brands are great. Boat has more service centers in smaller towns, while Realme is usually faster in metro cities since they use their mobile service network.'
      },
      {
        question: 'Can I use Realme earbuds with an iPhone?',
        answer: 'Yes! Both Boat and Realme work perfectly with iPhones via Bluetooth. However, Realme Link app is slightly better optimized for Android.'
      },
      {
        question: 'Are Boat earbuds waterproof?',
        answer: 'Most Boat Airdopes are IPX4 or IPX5 rated, which means they can handle sweat and light splashes of water, but you cannot swim with them.'
      }
    ]
  },
  {
    id: 'best-study-lamps-india-2025',
    title: '7 Best Study Lamps for Students in India (2025): Eye-Friendly & Budget Picks',
    slug: 'best-study-lamp-for-students-india',
    excerpt: 'Late-night study sessions can take a toll on your eyes. We reviewed the top study lamps in India that offer flicker-free lighting, adjustable brightness, and student-friendly pricing.',
    content: `For any student, a study lamp is more than just a piece of furniture—it is a critical tool for focus. Standard overhead room lights often create harsh shadows and glare on textbooks, leading to headaches and eye fatigue during long night sessions.

    A dedicated study lamp provides "task lighting." It focuses the light exactly where you need it, reducing the strain on your eyes and helping you stay awake and alert. In 2025, modern LED lamps have become incredibly affordable in India, offering features like touch dimming and color temperature control that were previously only available in premium models.`,
    author: 'Friendly Tech Guide',
    date: 'June 12, 2025',
    category: 'productivity',
    readTime: '15 min',
    featuredImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    trending: false,
    products: [
      {
        id: 'philips-air-led',
        name: 'Philips Air 5W LED Desk Lamp',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400',
        description: 'The Philips Air is a minimalist masterpiece. It features a foldable design and a cool white light that is perfectly tuned for concentration. It uses high-quality LEDs that ensure no visible flickering.',
        price: '₹1,099',
        rating: 4.8,
        pros: ['Very compact & foldable', 'Uniform light distribution', 'Trusted brand reliability'],
        cons: ['Single brightness level', 'Non-rechargeable (Needs plug)'],
        affiliateUrl: '[Insert Affiliate Link Here]',
        tag: 'Best Overall'
      }
    ]
  },
  {
    id: 'ai-writing-2025',
    title: '5 Best AI Writing Tools for Content Creators in 2025',
    slug: 'best-ai-writing-tools-2025',
    excerpt: 'Stop staring at a blank screen. We tested 20+ AI writing assistants to find the ones that actually sound human and save you hours.',
    content: `Content creation is evolving at breakneck speed. In 2025, the best AI writing tools aren't just autocomplete engines—they are sophisticated research partners that understand your brand voice.`,
    author: 'Friendly Tech Guide',
    date: 'March 15, 2025',
    category: 'ai-tools',
    readTime: '10 min',
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    trending: true,
    products: [
      {
        id: 'jasper-ai',
        name: 'Jasper AI',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=400',
        description: 'The industry gold standard for marketing teams. Jasper offers over 50 templates and a powerful "Brand Voice" feature that learns your specific style.',
        price: '$39/mo',
        rating: 4.9,
        pros: ['Incredible brand voice training', 'Built-in SEO mode with Surfer', 'Excellent collaborative features'],
        cons: ['Higher price point than competitors', 'Occasional repetition in long-form'],
        affiliateUrl: 'https://jasper.ai',
        tag: 'Editor\'s Choice'
      }
    ]
  }
];

export const ICON_MAP: Record<string, any> = {
  Laptop: Laptop,
  Cpu: Cpu,
  Smartphone: Smartphone,
  Zap: Zap,
  Gamepad2: Gamepad2,
  Coffee: Coffee,
  Activity: Activity
};
