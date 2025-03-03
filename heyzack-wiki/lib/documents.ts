// Define the document directory structure
export const DOCUMENT_DIRECTORIES = {
  'B2B': 'B2b',
  'Strategy': 'Strategy',
  'Branding': 'Branding'
};

// Define the document categories with their respective descriptions
export const DOCUMENT_CATEGORIES = {
  'B2B': 'Building Management Solution (BMS) for commercial buildings',
  'Strategy': 'Business and product strategy documentation',
  'Branding': 'Brand identity and marketing guidelines'
};

// Define the document type
export interface DocumentType {
  slug: string;
  category: string;
  title: string;
  path: string;
  content: string;
  excerpt: string;
  relatedDocs: string[];
  tags: string[];
}

// Mock/sample documents for the B2B category
const B2B_DOCUMENTS: DocumentType[] = [
  {
    slug: '1_Executive_Overview',
    category: 'B2B',
    title: 'Executive Overview',
    path: '/B2b/1_Executive_Overview.md',
    content: '# Executive Overview\n\nHeyZack BMS is a comprehensive IoT-integrated Building Management Solution designed for the French market. This document provides an overview of the project scope, business objectives, target market analysis, and key stakeholders.',
    excerpt: 'HeyZack BMS is a comprehensive IoT-integrated Building Management Solution designed for the French market.',
    relatedDocs: ['2_System_Architecture', '3_Core_Features_Modules'],
    tags: ['overview', 'business', 'management', 'solution', 'french']
  },
  {
    slug: '2_System_Architecture',
    category: 'B2B',
    title: 'System Architecture',
    path: '/B2b/2_System_Architecture.md',
    content: '# System Architecture\n\nThis document outlines the high-level architecture, technology stack, integration points, security framework, and data flow architecture of the HeyZack BMS.',
    excerpt: 'This document outlines the high-level architecture, technology stack, integration points, security framework, and data flow architecture.',
    relatedDocs: ['1_Executive_Overview', '7_Integration_APIs'],
    tags: ['architecture', 'technology', 'security', 'integration', 'data']
  },
  {
    slug: 'b2b-brand-strategy',
    category: 'B2B',
    title: 'B2B Brand Strategy',
    path: '/B2b/b2b-brand-strategy.md',
    content: '# HeyZack B2B Brand Strategy\n\nThis document outlines the B2B brand strategy for HeyZack, designed to attract enterprise customers, build strong partnerships, and drive sustainable revenue growth.',
    excerpt: 'This document outlines the B2B brand strategy for HeyZack, designed to attract enterprise customers, build strong partnerships, and drive sustainable revenue growth.',
    relatedDocs: ['1_Executive_Overview'],
    tags: ['brand', 'strategy', 'enterprise', 'business', 'revenue']
  }
];

// Mock/sample documents for the Strategy category
const STRATEGY_DOCUMENTS: DocumentType[] = [
  {
    slug: 'product-market-fit',
    category: 'Strategy',
    title: 'Product-Market Fit',
    path: '/Strategy/product-market-fit.md',
    content: '# HeyZack Product-Market Fit (PMF)\n\nProduct-Market Fit (PMF) signifies the degree to which a product satisfies market demand. For HeyZack, PMF means our smart building solutions effectively address the needs of building owners and operators.',
    excerpt: 'Product-Market Fit (PMF) signifies the degree to which a product satisfies market demand.',
    relatedDocs: ['total-addressable-market', 'customer-acquisition-cost'],
    tags: ['product', 'market', 'fit', 'demand', 'customer']
  },
  {
    slug: 'b2c-brand-strategy',
    category: 'Strategy',
    title: 'B2C Brand Strategy',
    path: '/Strategy/b2c-brand-strategy.md',
    content: '# HeyZack Home B2C Brand Strategy\n\nThis document outlines the B2C brand strategy for HeyZack Home, our consumer-focused smart home solution. Building upon our enterprise expertise, HeyZack Home brings professional-grade building management technology to residential users through an intuitive, beautiful, and value-driven experience.',
    excerpt: 'This document outlines the B2C brand strategy for HeyZack Home, our consumer-focused smart home solution.',
    relatedDocs: ['product-market-fit', 'customer-acquisition-cost'],
    tags: ['brand', 'strategy', 'b2c', 'consumer', 'home']
  },
  {
    slug: 'total-addressable-market',
    category: 'Strategy',
    title: 'Total Addressable Market',
    path: '/Strategy/total-addressable-market.md',
    content: '# Total Addressable Market (TAM)\n\nThe Total Addressable Market (TAM) for HeyZack represents the maximum potential market size for our smart building solutions.',
    excerpt: 'The Total Addressable Market (TAM) for HeyZack represents the maximum potential market size for our smart building solutions.',
    relatedDocs: ['serviceable-available-market', 'serviceable-obtainable-market'],
    tags: ['market', 'tam', 'potential', 'size', 'analytics']
  }
];

// Mock/sample documents for the Branding category
const BRANDING_DOCUMENTS: DocumentType[] = [
  {
    slug: 'brand-voice-guide',
    category: 'Branding',
    title: 'Brand Voice & Tone Guide',
    path: '/Branding/brand-voice-guide.md',
    content: '# HeyZack Brand Voice & Tone Guide\n\nThis guide defines the HeyZack brand voice and tone, ensuring consistent and effective communication across all channels and touchpoints.',
    excerpt: 'This guide defines the HeyZack brand voice and tone, ensuring consistent and effective communication across all channels and touchpoints.',
    relatedDocs: ['brandstory', 'digital-presence-framework'],
    tags: ['brand', 'voice', 'tone', 'communication', 'consistency']
  },
  {
    slug: 'brandstory',
    category: 'Branding',
    title: 'Brand Story',
    path: '/Branding/brandstory.md',
    content: '# HeyZack Brand Story\n\nThe HeyZack brand story is about bringing enterprise-grade building intelligence to both commercial buildings and homes.',
    excerpt: 'The HeyZack brand story is about bringing enterprise-grade building intelligence to both commercial buildings and homes.',
    relatedDocs: ['brand-voice-guide'],
    tags: ['brand', 'story', 'identity', 'values', 'mission']
  }
];

// Get all documents for a specific category
export function getDocumentsByCategory(category: string): DocumentType[] {
  switch(category) {
    case 'B2B':
      return B2B_DOCUMENTS;
    case 'Strategy':
      return STRATEGY_DOCUMENTS;
    case 'Branding':
      return BRANDING_DOCUMENTS;
    default:
      return [];
  }
}

// Get all documents
export function getAllDocuments(): DocumentType[] {
  return [
    ...B2B_DOCUMENTS,
    ...STRATEGY_DOCUMENTS,
    ...BRANDING_DOCUMENTS
  ];
}

// Get a document by its slug and category
export function getDocumentBySlug(slug: string, category: string): DocumentType | null {
  const documents = getDocumentsByCategory(category);
  return documents.find(doc => doc.slug === slug) || null;
}

// Search documents by query
export function searchDocuments(query: string): DocumentType[] {
  const documents = getAllDocuments();
  
  if (!query.trim()) {
    return documents;
  }
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);
  
  return documents.filter(doc => {
    const searchContent = `${doc.title} ${doc.content} ${doc.tags?.join(' ') || ''}`.toLowerCase();
    return searchTerms.some(term => searchContent.includes(term));
  });
}
