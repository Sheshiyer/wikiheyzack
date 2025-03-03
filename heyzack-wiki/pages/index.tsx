import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import BentoGrid, { BentoCard } from '../components/BentoGrid';
import { DOCUMENT_CATEGORIES } from '../lib/documents';
import { DocumentMeta, getAllDocuments } from '../lib/markdown';

interface HomeProps {
  recentDocuments: DocumentMeta[];
  popularCategories: {
    [key: string]: {
      count: number;
      description: string;
    };
  };
}

export default function Home({ recentDocuments, popularCategories }: HomeProps) {
  return (
    <div>
      <Head>
        <title>{`HeyZack Documentation Wiki`}</title>
        <meta name="description" content="Documentation and resources for HeyZack Building Management Solution and HeyZack Home" />
      </Head>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 px-4 rounded-2xl mb-8">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HeyZack Documentation</h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8">
            Enterprise-grade building intelligence for commercial and residential applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/category/b2b" 
              className="bg-white text-primary-700 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium inline-block"
            >
              B2B Solutions
            </Link>
            <Link 
              href="/category/strategy"
              className="bg-primary-700 text-white border border-primary-400 hover:bg-primary-600 px-6 py-3 rounded-lg font-medium inline-block"
            >
              Strategy
            </Link>
          </div>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <BentoGrid className="mb-12" compact={true}>
        {/* B2B Solutions */}
        <BentoCard 
          title="B2B Building Management Solution" 
          size="md"
          className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800"
          href="/category/b2b"
          compact={true}
        >
          <p className="mb-3">The comprehensive IoT-integrated Building Management Solution designed for the French market.</p>
          <div className="flex flex-wrap gap-1">
            <span className="bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-100 text-xs px-2 py-0.5 rounded-full">Energy Savings</span>
            <span className="bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-100 text-xs px-2 py-0.5 rounded-full">AI-driven</span>
            <span className="bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-100 text-xs px-2 py-0.5 rounded-full">Compliance</span>
          </div>
        </BentoCard>

        {/* B2C Solutions */}
        <BentoCard 
          title="HeyZack Home" 
          size="md"
          className="bg-gradient-to-br from-b2c-50 to-b2c-100 dark:from-b2c-900 dark:to-b2c-800"
          href="/category/strategy/b2c-brand-strategy"
          compact={true}
        >
          <p className="mb-3">Professional-grade building intelligence for residential users through smart home solutions.</p>
          <div className="flex flex-wrap gap-1">
            <span className="bg-b2c-100 dark:bg-b2c-800 text-b2c-800 dark:text-b2c-100 text-xs px-2 py-0.5 rounded-full">Smart Home</span>
            <span className="bg-b2c-100 dark:bg-b2c-800 text-b2c-800 dark:text-b2c-100 text-xs px-2 py-0.5 rounded-full">Energy Efficiency</span>
            <span className="bg-b2c-100 dark:bg-b2c-800 text-b2c-800 dark:text-b2c-100 text-xs px-2 py-0.5 rounded-full">Tuya Integration</span>
          </div>
        </BentoCard>

        {/* Document Categories */}
        <BentoCard title="Browse Documentation" size="lg" compact={true}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Object.entries(popularCategories).map(([category, data]) => (
              <Link
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="block p-3 rounded-lg bg-secondary-50 dark:bg-secondary-800 hover:bg-secondary-100 dark:hover:bg-secondary-700 transition-colors"
              >
                <h4 className="font-bold mb-1 text-base">{category}</h4>
                <p className="text-xs text-secondary-600 dark:text-secondary-400 mb-1">{data.description}</p>
                <span className="text-xs text-secondary-500 dark:text-secondary-500">{data.count} documents</span>
              </Link>
            ))}
          </div>
        </BentoCard>

        {/* Document Map */}
        <BentoCard 
          title="Document Map" 
          size="sm"
          className="bg-secondary-50 dark:bg-secondary-800"
          href="/document-map"
          compact={true}
        >
          <p className="mb-2 text-sm">Visualize all documentation and their relationships in an interactive document map.</p>
        </BentoCard>

        {/* Recent Documents */}
        <BentoCard 
          title="Recently Updated" 
          size="md"
          compact={true}
        >
          <ul className="space-y-2">
            {recentDocuments.map((doc) => (
              <li key={`${doc.category}-${doc.slug}`}>
                <Link 
                  href={`/category/${doc.category.toLowerCase()}/${doc.slug}`}
                  className="block p-2 rounded-lg hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors"
                >
                  <h4 className="font-medium mb-0.5 text-base">{doc.title}</h4>
                  <p className="text-xs text-secondary-600 dark:text-secondary-400 truncate">{doc.excerpt}</p>
                  <div className="flex mt-1">
                    <span className="text-xs text-secondary-500 dark:text-secondary-500 bg-secondary-100 dark:bg-secondary-700 px-1.5 py-0.5 rounded-full">
                      {doc.category}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </BentoCard>

        {/* Search */}
        <BentoCard 
          title="Search Documents" 
          size="sm"
          className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800"
          href="/search"
          compact={true}
        >
          <p className="mb-2 text-sm">
            Looking for specific information? Search across all documents to find exactly what you need.
          </p>
          <Link 
            href="/search" 
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-3 py-1.5 rounded-lg text-sm"
          >
            Search Now
          </Link>
        </BentoCard>
      </BentoGrid>
    </div>
  );
}

export async function getStaticProps() {
  try {
    // Get all documents
    const allDocuments = getAllDocuments();
    
    // Get recent documents
    const recentDocuments = allDocuments
      .sort((a, b) => b.title.localeCompare(a.title)) // This is a placeholder sort; in a real app, sort by date
      .slice(0, 5);
    
    // Count documents by category
    const popularCategories: HomeProps['popularCategories'] = {};
    
    Object.entries(DOCUMENT_CATEGORIES).forEach(([key, description]) => {
      const categoryDocs = allDocuments.filter(doc => doc.category.toLowerCase() === key.toLowerCase());
      popularCategories[key] = {
        count: categoryDocs.length,
        description: description as string
      };
    });
    
    return {
      props: {
        recentDocuments,
        popularCategories
      }
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return {
      props: {
        recentDocuments: [],
        popularCategories: {}
      }
    };
  }
}
